import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function VenturesCTA() {
  return (
    <section className="ventures-cta-section">
      <div className="site-shell">
        <div className="ventures-cta-card">
          <div className="ventures-cta-copy">
            <div className="section-eyebrow">
              THE CURRENT CHAPTER
            </div>

            <h2 className="section-title">
              And now, I&apos;m building{" "}
              <span className="section-accent">
                AIMates.
              </span>
            </h2>

            <p className="section-intro">
              What began with smaller experiments
              around learning and publishing has
              grown into a much bigger ambition:
              building a practical AI ecosystem
              where people can learn, build,
              connect and turn knowledge into
              something useful.
            </p>

            <div className="ventures-cta-actions">
              <Link
                href="/aimates"
                className="action-primary"
              >
                <Sparkles size={18} />
                My AIMates Story
                <ArrowRight size={17} />
              </Link>

              <a
                href="https://www.aimates.org"
                target="_blank"
                rel="noreferrer"
                className="action-secondary"
              >
                Visit AIMates.org
              </a>
            </div>
          </div>

          <div className="ventures-cta-evolution">
            <span>Pythonmates</span>

            <strong>→</strong>

            <span>Blogmates</span>

            <strong>→</strong>

            <span className="ventures-cta-current">
              AIMates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}