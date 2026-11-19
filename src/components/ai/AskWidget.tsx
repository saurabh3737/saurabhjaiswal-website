"use client";

import { MessagesSquare, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import AskSaurabh from "@/components/ai/AskSaurabh";

// Floating "Ask Saurabh AI" button on every page except /ask/ (which has the full chat).
export default function AskWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (pathname?.startsWith("/ask")) {
    return null;
  }

  return (
    <div className="ask-widget">
      {open ? (
        <div
          id="ask-widget-panel"
          className="ask-panel"
          role="dialog"
          aria-label="Ask Saurabh AI"
        >
          <div className="ask-panel-head">
            <div>
              <strong>Ask Saurabh AI</strong>
              <span>Answers about Saurabh&apos;s work</span>
            </div>

            <button
              type="button"
              className="ask-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <AskSaurabh compact />
        </div>
      ) : null}

      <button
        type="button"
        className="ask-launcher"
        aria-expanded={open}
        aria-controls="ask-widget-panel"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <MessagesSquare size={20} />}
        <span>{open ? "Close" : "Ask Saurabh AI"}</span>
      </button>
    </div>
  );
}
