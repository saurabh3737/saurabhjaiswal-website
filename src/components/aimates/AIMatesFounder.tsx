import {
  Braces,
  Compass,
  Layers3,
  PenTool,
} from "lucide-react";

const roles = [
  {
    icon: Compass,
    title: "Shaping the product",
    text:
      "I spend a lot of time deciding what AIMates should become, what should wait, and how each new capability should connect to the larger ecosystem rather than exist as an isolated feature.",
  },
  {
    icon: Braces,
    title: "Still building hands-on",
    text:
      "I remain deeply involved in the engineering — from product flows and frontend experience to APIs, architecture, data and deployment decisions.",
  },
  {
    icon: Layers3,
    title: "Connecting the layers",
    text:
      "A big part of the challenge is making learning, projects, people, opportunities and contribution feel like parts of one coherent journey.",
  },
  {
    icon: PenTool,
    title: "Creating alongside the platform",
    text:
      "Tutorials, writing, challenges, ideas and community experiments are part of how I learn what AIMates should become next.",
  },
];

export default function AIMatesFounder() {
  return (
    <section className="aimates-founder-section">
      <div className="site-shell">
        <div className="aimates-founder-layout">
          <div className="aimates-founder-heading">
            <div className="section-eyebrow">
              MY ROLE AS FOUNDER
            </div>

            <h2 className="section-title">
              I&apos;m not only
              <br />
              steering it.{" "}
              <span className="section-accent">
                I&apos;m building it.
              </span>
            </h2>

            <p className="section-intro">
              AIMates is still close enough to the
              ground that strategy, product, engineering,
              content and experimentation continuously
              influence one another. That is exactly
              where I like to work.
            </p>
          </div>

          <div className="aimates-founder-list">
            {roles.map(
              ({
                icon: Icon,
                title,
                text,
              }) => (
                <article
                  key={title}
                  className="aimates-founder-item"
                >
                  <div className="surface-card-icon">
                    <Icon size={21} />
                  </div>

                  <div className="aimates-founder-copy">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}