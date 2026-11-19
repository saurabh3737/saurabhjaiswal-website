import {
  ArrowDown,
  BrainCircuit,
  FileDown,
  Building2,
  FlaskConical,
  Sparkles,
} from "lucide-react";

import { site } from "@/content/site";

const journeySignals = [
  {
    icon: FlaskConical,
    label: "Research",
    detail: "DRDO",
  },
  {
    icon: Building2,
    label: "Enterprise",
    detail: "Global Technology",
  },
  {
    icon: BrainCircuit,
    label: "AI & Cloud",
    detail: "Architecture",
  },
  {
    icon: Sparkles,
    label: "Founder",
    detail: "AIMates",
  },
];

export default function ExperienceHero() {
  return (
    <section className="experience-hero">
      <div className="experience-hero-glow" />

      <div className="site-shell experience-hero-inner">
        <div className="experience-hero-copy">
          <div className="experience-eyebrow">
            Experience & Impact
          </div>

          <h1 className="experience-title">
            From research
            <br />
            to{" "}
            <span className="experience-accent">
              AI leadership.
            </span>
          </h1>

          <div className="experience-title-line" />

          <p className="experience-intro">
            A career spanning defence research,
            enterprise engineering, financial
            technology, cloud platforms and
            artificial intelligence — now shaping
            how I build, advise and lead through
            AIMates.
          </p>

          <div className="experience-actions">
            <a
              href="#career-journey"
              className="experience-primary-action"
            >
              <ArrowDown size={18} />
              Explore the Journey
            </a>

            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener"
              className="experience-secondary-action"
            >
              <FileDown size={18} />
              Download CV (PDF)
            </a>
          </div>
        </div>

        <div className="experience-hero-panel">
          <div className="experience-panel-kicker">
            The journey
          </div>

          <div className="experience-signal-grid">
            {journeySignals.map(
              ({
                icon: Icon,
                label,
                detail,
              }) => (
                <div
                  key={label}
                  className="experience-signal"
                >
                  <div className="experience-signal-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <div className="experience-signal-label">
                      {label}
                    </div>

                    <div className="experience-signal-detail">
                      {detail}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="experience-panel-footer">
            <span className="experience-panel-number">
              15+
            </span>

            <span className="experience-panel-text">
              years across research,
              engineering, architecture,
              cloud and AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}