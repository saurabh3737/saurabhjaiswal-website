"use client";

import Link from "next/link";
import { CalendarDays, FileDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ctas, navItems, site } from "@/content/site";

export default function MobileMenu() {
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

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <nav
          id="mobile-menu-panel"
          className="mobile-menu-panel"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-menu-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={ctas.bookCall.href}
            className="action-primary mobile-menu-cta"
            onClick={() => setOpen(false)}
          >
            <CalendarDays size={18} />
            {ctas.bookCall.longLabel}
          </Link>

          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener"
            className="action-secondary mobile-menu-cta"
            onClick={() => setOpen(false)}
          >
            <FileDown size={18} />
            Download CV (PDF)
          </a>
        </nav>
      ) : null}
    </div>
  );
}
