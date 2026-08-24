import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Sparkles,
} from "lucide-react";

export default function VenturesHero() {
  return (
    <section className="ventures-hero">
      <div className="ventures-hero-glow" />

      <div className="site-shell ventures-hero-grid">
        <div className="ventures-hero-copy">
          <div className="section-eyebrow">
            VENTURES
          </div>

          <h1 className="ventures-hero-title">
            I&apos;ve always liked
            <br />
            building{" "}
            <span>
              platforms of my own.
            </span>
          </h1>

          <div className="ventures-hero-line" />

          <p className="ventures-hero-lead">
            Pythonmates, Blogmates and AIMates
            represent different chapters of the same
            instinct: learn something deeply, build
            something useful around it and create a
            place where other people can benefit too.
          </p>

          <p className="ventures-hero-description">
            The ideas changed as technology changed.
            The habit of building never really did.
          </p>

          <div className="ventures-hero-actions">
            <a
              href="#venture-journey"
              className="action-primary"
            >
              <Blocks size={18} />
              Explore the Journey
              <ArrowRight size={17} />
            </a>

            <Link
              href="/aimates"
              className="action-secondary"
            >
              <Sparkles size={18} />
              Explore AIMates
            </Link>
          </div>
        </div>

        <div className="surface-card ventures-hero-panel">
          <div className="ventures-panel-label">
            BUILDER JOURNEY
          </div>

          <div className="ventures-panel-flow">
            <div>
              <span>01</span>
              <strong>Pythonmates</strong>
              <small>Learn & Teach</small>
            </div>

            <div className="ventures-panel-arrow">
              ↓
            </div>

            <div>
              <span>02</span>
              <strong>Blogmates</strong>
              <small>Write & Publish</small>
            </div>

            <div className="ventures-panel-arrow">
              ↓
            </div>

            <div>
              <span>03</span>
              <strong>AIMates</strong>
              <small>Build an Ecosystem</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}