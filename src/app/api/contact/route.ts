import { leadReasons, site } from "@/content/site";

// POST /api/contact/ — sends the contact form to Saurabh's inbox via Resend.
// Env (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY      required — Resend key with "Sending access"
//   CONTACT_FROM_EMAIL  required — a sender on a domain verified in Resend,
//                       e.g. "Saurabh Jaiswal Website <website@aimates.org>"
//   CONTACT_TO_EMAIL    optional — defaults to site.email
// Nothing is stored: the message is only emailed.

export const runtime = "nodejs";

type Payload = {
  reason?: string;
  name?: string;
  email?: string;
  company?: string;
  terms?: string;
  message?: string;
  website?: string; // honeypot — real visitors never fill this
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  if (!apiKey || !from) {
    return Response.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (rateLimited(ip)) {
    return Response.json(
      { ok: false, error: "rate_limited" },
      { status: 429 },
    );
  }

  let data: Payload;

  try {
    data = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Bots fill the hidden field — pretend success, send nothing.
  if (clean(data.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const company = clean(data.company, 160);
  const terms = clean(data.terms, 120);
  const message = clean(data.message, 5000);
  const reason =
    leadReasons.find((item) => item.id === data.reason) ?? leadReasons[0];

  if (
    !name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 10
  ) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const subject = `[Website] ${reason.subject} — ${name}${
    company ? ` (${company})` : ""
  }`;

  const rows: [string, string][] = [
    ["Topic", reason.label],
    ["Name", name],
    ["Email", email],
    ["Company / event", company],
    ["Preferred engagement", terms],
  ];

  const text = [
    ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    "",
    message,
  ].join("\n");

  const html = `
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#666">${escapeHtml(k)}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
        )
        .join("")}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
      html,
      tags: [{ name: "reason", value: reason.id }],
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
