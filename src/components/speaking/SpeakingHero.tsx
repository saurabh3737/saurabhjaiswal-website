import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Mic2,
} from "lucide-react";

export default function SpeakingHero() {
  return (
    <section className="speaking-hero">
      <div className="speaking-hero-glow" />

      <div className="site-shell speaking-hero-grid">
        <div className="speaking-hero-copy">
          <div className="section-eyebrow">
            SPEAKING
          </div>

          <h1 className="speaking-hero-title">
            Practical AI.
            <br />
            Clear thinking.
            <br />
            <span>Real conversations.</span>
          </h1>

          <div className="speaking-hero-line" />

          <p className="speaking-hero-lead">
            I speak about artificial intelligence,
            technology strategy, engineering and the
            realities of turning emerging technology
            into practical work.
          </p>

          <p className="speaking-hero-description">
            From student audiences and technical teams
            to enterprise leaders, my goal is simple:
            make complex ideas understandable, useful
            and worth acting on.
          </p>

          <div className="speaking-hero-actions">
            <Link
              href="#speaking-topics"
              className="action-primary"
            >
              <Mic2 size={18} />
              Explore Topics
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="action-secondary"
            >
              <CalendarDays size={18} />
              Invite Me to Speak
            </Link>
          </div>
        </div>

        <div className="speaking-hero-panel surface-card">
          <div className="speaking-panel-label">
            SPEAKING FOCUS
          </div>

          <div className="speaking-panel-list">
            <div className="speaking-panel-item">
              <span>01</span>
              <strong>AI Strategy</strong>
            </div>

            <div className="speaking-panel-item">
              <span>02</span>
              <strong>AI Architecture</strong>
            </div>

            <div className="speaking-panel-item">
              <span>03</span>
              <strong>AI for Real Work</strong>
            </div>

            <div className="speaking-panel-item">
              <span>04</span>
              <strong>Engineering & Cloud</strong>
            </div>

            <div className="speaking-panel-item">
              <span>05</span>
              <strong>Careers in the AI Era</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}