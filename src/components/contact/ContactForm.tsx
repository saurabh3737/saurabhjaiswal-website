"use client";

import { Check, Copy, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

import { workingPatterns } from "@/content/services";
import {
  leadReasons,
  site,
  type LeadReason,
} from "@/content/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const reasonIds = leadReasons.map((item) => item.id);

function isReason(value: string | null): value is LeadReason {
  return value !== null && (reasonIds as string[]).includes(value);
}

// Reads ?reason=… from the URL. Must be rendered inside <Suspense>.
export function ContactFormFromUrl() {
  const params = useSearchParams();
  const value = params.get("reason");
  const reason: LeadReason = isReason(value) ? value : "consulting";

  return (
    <ContactForm
      key={reason}
      initialReason={reason}
    />
  );
}

export default function ContactForm({
  initialReason,
}: {
  initialReason: LeadReason;
}) {
  const [reason, setReason] = useState<LeadReason>(initialReason);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [terms, setTerms] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "fallback"
  >("idle");
  const [copied, setCopied] = useState(false);

  const selected =
    leadReasons.find((item) => item.id === reason) ?? leadReasons[0];

  function validate(): Errors {
    const next: Errors = {};

    if (!name.trim()) {
      next.name = "Enter your name";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address";
    }

    if (message.trim().length < 10) {
      next.message = "Tell me a little more (at least 10 characters)";
    }

    return next;
  }

  function openEmailApp() {
    const details = [
      `Topic: ${selected.label}`,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      company.trim() ? `Company: ${company.trim()}` : "",
      terms ? `Preferred engagement: ${terms}` : "",
    ].filter(Boolean);

    const body = `${details.join("\n")}\n\n${message.trim()}`;

    const subject = `${selected.subject} — ${name.trim()}${
      company.trim() ? ` (${company.trim()})` : ""
    }`;

    window.location.href =
      `mailto:${site.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate();
    setErrors(found);

    if (Object.keys(found).length > 0) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reason,
          name,
          email,
          company,
          terms,
          message,
          website,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        return;
      }
    } catch {
      // Network problem — fall through to the email-app fallback.
    }

    setStatus("fallback");
    openEmailApp();
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form
      className="surface-card contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="contact-reasons">
        <legend className="contact-label">
          What&apos;s this about?
        </legend>

        <div className="contact-reason-grid">
          {leadReasons.map((item) => (
            <label
              key={item.id}
              className={
                item.id === reason
                  ? "contact-reason contact-reason-active"
                  : "contact-reason"
              }
            >
              <input
                type="radio"
                name="reason"
                value={item.id}
                checked={item.id === reason}
                onChange={() => setReason(item.id)}
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="contact-row">
        <label className="contact-field">
          <span className="contact-label">Name *</span>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <span className="contact-error">{errors.name}</span>
          ) : null}
        </label>

        <label className="contact-field">
          <span className="contact-label">Email *</span>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            autoComplete="email"
            placeholder="name@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <span className="contact-error">{errors.email}</span>
          ) : null}
        </label>
      </div>

      <div className="contact-row">
        <label className="contact-field">
          <span className="contact-label">Company or event</span>
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            autoComplete="organization"
            placeholder="Optional"
          />
        </label>

        {reason === "consulting" ? (
          <label className="contact-field">
            <span className="contact-label">Preferred engagement</span>
            <select
              value={terms}
              onChange={(event) => setTerms(event.target.value)}
            >
              <option value="">Not sure yet</option>
              {workingPatterns.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </label>
        ) : null}
      </div>

      <label className="contact-field">
        <span className="contact-label">Message *</span>
        <textarea
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            setErrors((prev) => ({ ...prev, message: undefined }));
          }}
          rows={6}
          placeholder={
            reason === "speaking"
              ? "Event, date, audience and topic you have in mind"
              : reason === "aimates"
                ? "Who you are and the partnership you have in mind"
                : "The problem, your timeline and how I can help"
          }
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <span className="contact-error">{errors.message}</span>
        ) : null}
      </label>

      <label
        className="contact-honeypot"
        aria-hidden="true"
      >
        Website
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </label>

      {status === "sent" ? (
        <div
          className="contact-sent"
          role="status"
        >
          <p>
            <strong>Thanks, {name.trim().split(" ")[0]} — your message is on its way.</strong>{" "}
            I read every message personally and will reply to {email.trim()}.
          </p>
        </div>
      ) : (
        <button
          type="submit"
          className="action-primary contact-submit"
          disabled={status === "sending"}
        >
          <Send size={17} />
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      )}

      {status === "fallback" ? (
        <div
          className="contact-sent"
          role="status"
        >
          <p>
            The form couldn&apos;t send right now, so your email app
            should have opened with the message ready. If it didn&apos;t,
            email me directly at <strong>{site.email}</strong>
          </p>

          <button
            type="button"
            className="action-secondary contact-copy"
            onClick={copyEmail}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>
      ) : null}
    </form>
  );
}
