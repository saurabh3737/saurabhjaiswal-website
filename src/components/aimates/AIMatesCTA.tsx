import {
  ArrowRight,
  ExternalLink,
  Network,
} from "lucide-react";

export default function AIMatesCTA() {
  return (
    <section className="aimates-cta-section">
      <div className="site-shell">
        <div className="aimates-cta-card">
          <div className="aimates-cta-copy">
            <div className="section-eyebrow">
              EXPLORE AIMATES
            </div>

            <h2 className="section-title">
              The best way to understand it
              <br />
              is to{" "}
              <span className="section-accent">
                experience it.
              </span>
            </h2>

            <p className="section-intro">
              AIMates is evolving continuously.
              Explore the platform, try what is already
              live and see how the different parts of
              the ecosystem are beginning to connect.
            </p>

            <div className="aimates-cta-actions">
              <a
                href="https://www.aimates.org"
                target="_blank"
                rel="noreferrer"
                className="action-primary"
              >
                <Network size={18} />
                Visit AIMates
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

          <div className="aimates-cta-mark">
            <div className="aimates-cta-brand">
              <span>AI</span>
              <strong>Mates</strong>
            </div>

            <p>
              Learn. Build. Connect.
              <br />
              Work. Discover. Grow.
              <br />
              Contribute.
            </p>

            <div className="aimates-cta-status">
              BUILDING NOW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}