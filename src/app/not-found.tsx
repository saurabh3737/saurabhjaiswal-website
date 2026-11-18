import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ctas } from "@/content/site";

export const metadata = {
  title: "Page not found",
  robots: {
    index: false,
  },
};

export default function NotFound() {
  return (
    <main className="page-hero not-found">
      <div className="page-hero-glow" />

      <div className="site-shell page-hero-inner">
        <div className="section-eyebrow">404</div>

        <h1 className="page-hero-title">
          This page{" "}
          <span>doesn&apos;t exist.</span>
        </h1>

        <div className="page-hero-line" />

        <p className="page-hero-intro">
          The link may be old or mistyped. Here is
          where most people want to go:
        </p>

        <div className="home-section-actions">
          <Link
            href="/"
            className="action-primary"
          >
            Go to the home page
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/work-with-me/"
            className="action-secondary"
          >
            Work with me
          </Link>

          <Link
            href={ctas.bookCall.href}
            className="action-secondary"
          >
            {ctas.bookCall.longLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
