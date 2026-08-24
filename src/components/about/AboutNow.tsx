import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Mic2,
  Sparkles,
} from "lucide-react";

export default function AboutNow() {
  return (
    <section className="about-now-section">
      <div className="site-shell">
        <div className="about-now-card">
          <div className="about-now-copy">
            <div className="section-eyebrow">
              THE CURRENT CHAPTER
            </div>

            <h2 className="section-title">
              Still learning.
              <br />
              Still building.{" "}
              <span className="section-accent">
                Now with AI.
              </span>
            </h2>

            <p className="section-intro">
              Today, much of that journey comes
              together through AIMates, my writing,
              speaking and the ideas behind
              <em> AI for Real Work</em>. The tools
              are newer, but the motivation is familiar:
              understand deeply, build practically and
              share what works.
            </p>

            <div className="about-now-actions">
              <Link
                href="/aimates"
                className="action-primary"
              >
                <Sparkles size={18} />
                Explore AIMates
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/speaking"
                className="action-secondary"
              >
                <Mic2 size={18} />
                Speaking
              </Link>

              <Link
                href="/book"
                className="action-secondary"
              >
                <BookOpenText size={18} />
                The Book
              </Link>
            </div>
          </div>

          <div className="about-now-mark">
            <div className="about-now-mark-main">
              <span className="about-now-ai">
                AI
              </span>
              <span className="about-now-mates">
                Mates
              </span>
            </div>

            <p>
              Practical AI for real people
              and real work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}