import {
  ArrowRight,
  ExternalLink,
  Network,
} from "lucide-react";

export default function AIMatesHero() {
  return (
    <section className="aimates-hero">
      <div className="aimates-hero-glow" />

      <div className="site-shell aimates-hero-grid">
        <div className="aimates-hero-copy">
          <div className="section-eyebrow">
            FOUNDER • AIMATES
          </div>

          <h1 className="aimates-hero-title">
            Building an ecosystem
            <br />
            for{" "}
            <span>
              real-world AI.
            </span>
          </h1>

          <div className="aimates-hero-line" />

          <p className="aimates-hero-lead">
            AIMates is my attempt to bring the
            fragmented world of AI into one practical
            ecosystem for people who want to learn,
            build, connect, work, discover, grow
            and contribute.
          </p>

          <p className="aimates-hero-description">
            It started from a simple observation:
            people don&apos;t need another place that
            only talks about AI. They need somewhere
            they can actually do things with it.
          </p>

          <div className="aimates-hero-actions">
            <a
              href="https://www.aimates.org"
              target="_blank"
              rel="noreferrer"
              className="action-primary"
            >
              <Network size={18} />
              Explore AIMates
              <ArrowRight size={17} />
            </a>

            <a
              href="https://www.aimates.org/vision"
              target="_blank"
              rel="noreferrer"
              className="action-secondary"
            >
              <ExternalLink size={17} />
              Read the Vision
            </a>
          </div>
        </div>

        <div className="surface-card aimates-hero-panel">
          <div className="aimates-panel-label">
            THE AIMATES ECOSYSTEM
          </div>

          <div className="aimates-panel-brand">
            <span>AI</span>
            <strong>Mates</strong>
          </div>

          <p className="aimates-panel-tagline">
            Smarter AI. Better Mates.
            <br />
            Stronger Tomorrow.
          </p>

          <div className="aimates-panel-divider" />

          <div className="aimates-panel-pillars">
            <span>Learn</span>
            <span>Build</span>
            <span>Connect</span>
            <span>Work</span>
            <span>Discover</span>
            <span>Grow</span>
            <span>Contribute</span>
          </div>
        </div>
      </div>
    </section>
  );
}