"use client";

import Link from "next/link";
import { Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { contactHref, site } from "@/content/site";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What can Saurabh help my company with?",
  "Which AI projects has he delivered?",
  "Is he available for a freelance contract?",
  "What is the book AI for Real Work about?",
  "How can we partner with AIMates?",
];

// Minimal, safe rendering of the model's markdown: links, **bold**, "- " bullets, paragraphs.
function renderInline(text: string, keyPrefix: string) {
  const out: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) {
      out.push(text.slice(last, match.index));
    }

    const key = `${keyPrefix}-${i++}`;

    if (match[1] && match[2]) {
      const href = match[2];

      if (href.startsWith("/")) {
        out.push(
          <Link key={key} href={href}>
            {match[1]}
          </Link>,
        );
      } else if (href.startsWith("https://")) {
        out.push(
          <a key={key} href={href} target="_blank" rel="noreferrer">
            {match[1]}
          </a>,
        );
      } else {
        out.push(match[1]);
      }
    } else if (match[3]) {
      out.push(<strong key={key}>{match[3]}</strong>);
    }

    last = pattern.lastIndex;
  }

  if (last < text.length) {
    out.push(text.slice(last));
  }

  return out;
}

function renderMessage(content: string) {
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];

  const flush = (key: string) => {
    if (bullets.length) {
      blocks.push(
        <ul key={key}>
          {bullets.map((item, index) => (
            <li key={index}>{renderInline(item, `${key}-${index}`)}</li>
          ))}
        </ul>,
      );
      bullets = [];
    }
  };

  content.split("\n").forEach((raw, index) => {
    const line = raw.trim();

    if (/^[-*•]\s+/.test(line)) {
      bullets.push(line.replace(/^[-*•]\s+/, ""));
      return;
    }

    flush(`ul-${index}`);

    if (line) {
      blocks.push(<p key={`p-${index}`}>{renderInline(line, `p-${index}`)}</p>);
    }
  });

  flush("ul-end");

  return blocks;
}

export default function AskSaurabh({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const log = logRef.current;

    if (log) {
      log.scrollTop = log.scrollHeight;
    }
  }, [messages, busy]);

  async function ask(question: string) {
    const text = question.trim();

    if (!text || busy) {
      return;
    }

    const history: Message[] = [...messages, { role: "user", content: text }];

    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setError("");
    setBusy(true);

    try {
      const response = await fetch("/api/ask/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!response.ok || !response.body) {
        throw new Error(response.status === 429 ? "rate_limited" : "failed");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        answer += decoder.decode(value, { stream: true });
        const current = answer;
        setMessages([...history, { role: "assistant", content: current }]);
      }

      if (!answer.trim()) {
        throw new Error("empty");
      }
    } catch (caught) {
      // Drop the failed question from the chat and put it back in the box to retry.
      setMessages(messages);
      setInput(text);
      setError(
        caught instanceof Error && caught.message === "rate_limited"
          ? "You've asked a lot of questions in a short time. Please wait a few minutes."
          : "The assistant isn't available right now.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={compact ? "ask-chat ask-chat--compact" : "ask-chat"}>
      <div className="ask-log" ref={logRef} aria-live="polite">
        {messages.length === 0 ? (
          <div className="ask-empty">
            <p>
              Ask anything about {site.name}&apos;s consulting work, experience,
              AIMates, the book or speaking.
            </p>

            <div className="ask-suggestions">
              {suggestions.slice(0, compact ? 3 : 5).map((item) => (
                <button
                  key={item}
                  type="button"
                  className="ask-suggestion"
                  onClick={() => ask(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`ask-message ask-message--${message.role}`}
            >
              {message.role === "assistant" && !message.content ? (
                <span className="ask-typing" aria-label="Thinking">
                  <span />
                  <span />
                  <span />
                </span>
              ) : message.role === "assistant" ? (
                renderMessage(message.content)
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          ))
        )}

        {error ? (
          <div className="ask-error">
            {error}{" "}
            <Link href={contactHref("consulting")}>Contact Saurabh directly</Link>.
          </div>
        ) : null}
      </div>

      <form
        className="ask-form"
        onSubmit={(event) => {
          event.preventDefault();
          ask(input);
        }}
      >
        <textarea
          className="ask-input"
          rows={1}
          maxLength={1000}
          value={input}
          placeholder="Ask about Saurabh's work…"
          aria-label="Your question"
          onChange={(event: { target: { value: string } }) =>
            setInput(event.target.value)
          }
          onKeyDown={(event: {
            key: string;
            shiftKey: boolean;
            preventDefault(): void;
          }) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              ask(input);
            }
          }}
        />

        <button
          type="submit"
          className="ask-send"
          disabled={busy || !input.trim()}
          aria-label="Send question"
        >
          <Send size={17} />
        </button>
      </form>

      <p className="ask-note">
        <Sparkles size={13} /> AI answers from this website&apos;s content and
        can be wrong. Nothing is stored. <Link href="/privacy/">Privacy</Link>
      </p>
    </div>
  );
}
