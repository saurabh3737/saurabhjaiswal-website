import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Sparkles,
} from "lucide-react";

export default function BookHero() {
  return (
    <section className="book-hero">
      <div className="book-hero-glow" />

      <div className="site-shell book-hero-grid">
        <div className="book-hero-copy">
          <div className="section-eyebrow">
            THE BOOK
          </div>

          <h1 className="book-hero-title">
            AI
            <br />
            <span>for REAL WORK.</span>
          </h1>

          <div className="book-hero-line" />

          <p className="book-hero-lead">
            How to Think, Decide, and Build
            with AI.
          </p>

          <p className="book-hero-description">
            A practical guide for people who
            want to move beyond prompts, hype
            and experimentation — and learn how
            to use AI thoughtfully in the work
            they actually do.
          </p>

          <div className="book-hero-actions">
            <Link
              href="#inside-the-book"
              className="action-primary"
            >
              <BookOpenText size={18} />
              Explore the Book
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="action-secondary"
            >
              <Sparkles size={18} />
              Talks & Workshops
            </Link>
          </div>
        </div>

        <div className="surface-card book-hero-panel">
          <div className="book-panel-label">
            AI FOR REAL WORK
          </div>

          <blockquote>
            AI becomes valuable
            when it stops being a
            demo and starts becoming
            part of how we{" "}
            <span>
              think, decide and build.
            </span>
          </blockquote>

          <div className="book-panel-line" />

          <p>
            Written from the perspective of
            someone who has spent years building
            technology — and now builds with AI.
          </p>

          <div className="book-panel-author">
            Saurabh Jaiswal
          </div>
        </div>
      </div>
    </section>
  );
}