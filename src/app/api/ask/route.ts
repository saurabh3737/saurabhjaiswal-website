import { systemPrompt } from "@/lib/knowledge";

// POST /api/ask/ — "Ask Saurabh AI", answered by Google Gemini and streamed as plain text.
// Env (Vercel → Project → Settings → Environment Variables):
//   GEMINI_API_KEY  required — key from Google AI Studio (aistudio.google.com/apikey)
//   GEMINI_MODEL    optional — defaults to "gemini-flash-latest"
//   GEMINI_FALLBACK_MODEL optional — used when the main model is overloaded,
//                   defaults to "gemini-flash-lite-latest"
// Nothing is stored: questions go to Gemini and the answer comes straight back.

export const runtime = "nodejs";
export const maxDuration = 30;

type ChatMessage = { role: "user" | "assistant"; content: string };

const MAX_MESSAGES = 12;
const MAX_CHARS = 1000;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 20;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

function sanitize(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) {
    return [];
  }

  return input
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.trim().slice(0, MAX_CHARS) }));
}

let cachedPrompt: string | null = null;

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || "gemini-flash-latest";
  const fallback = process.env.GEMINI_FALLBACK_MODEL || "gemini-flash-lite-latest";

  if (!apiKey) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (rateLimited(ip)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let messages: ChatMessage[];

  try {
    const body = (await request.json()) as { messages?: unknown };
    messages = sanitize(body.messages);
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  cachedPrompt ??= systemPrompt();

  const payload = JSON.stringify({
    systemInstruction: { parts: [{ text: cachedPrompt }] },
    contents: messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    // No temperature/top_p: newer Gemini models reject sampling parameters.
    generationConfig: {
      maxOutputTokens: 4096,
    },
  });

  const call = (name: string) =>
    fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(name)}:streamGenerateContent?alt=sse`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: payload,
      },
    );

  // Overloaded (503), rate-limited (429) or flaky (500): retry once, then use the fallback model.
  const attempts = [model, model, fallback];
  let upstream = await call(attempts[0]);

  for (let i = 1; i < attempts.length && [429, 500, 503].includes(upstream.status); i++) {
    console.warn("Gemini", upstream.status, "on", attempts[i - 1], "— retrying with", attempts[i]);
    await upstream.body?.cancel();
    await new Promise((resolve) => setTimeout(resolve, 700));
    upstream = await call(attempts[i]);
  }

  if (!upstream.ok || !upstream.body) {
    console.error("Gemini error", upstream.status, await upstream.text());
    return Response.json({ ok: false, error: "upstream_failed" }, { status: 502 });
  }

  // Turn Gemini's server-sent events into a plain text stream for the browser.
  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  function emit(line: string, controller: ReadableStreamDefaultController<Uint8Array>) {
    if (!line.startsWith("data:")) {
      return;
    }

    try {
      const event = JSON.parse(line.slice(5)) as {
        candidates?: { content?: { parts?: { text?: string; thought?: boolean }[] } }[];
      };
      const parts = event.candidates?.[0]?.content?.parts ?? [];

      for (const part of parts) {
        if (part.text && !part.thought) {
          controller.enqueue(encoder.encode(part.text));
        }
      }
    } catch {
      // Partial or non-JSON line — skip.
    }
  }

  const stream = new ReadableStream<Uint8Array>({
    async pull(controller) {
      const { done, value } = await reader.read();

      if (done) {
        emit(buffer.trim(), controller);
        controller.close();
        return;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        emit(line.trim(), controller);
      }
    },
    cancel() {
      reader.cancel();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
