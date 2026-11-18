import {
  BookOpenText,
  Code2,
  Sparkles,
} from "lucide-react";

const ventures = [
  {
    number: "01",
    icon: Code2,
    name: "Pythonmates",
    phase: "Learn & Teach",
    text:
      "Pythonmates grew from my interest in Python, teaching and making technical knowledge easier to learn. It became one of my earliest attempts to build a useful platform around a technology community.",
  },
  {
    number: "02",
    icon: BookOpenText,
    name: "Blogmates",
    phase: "Write & Publish",
    text:
      "Blogmates extended that instinct into publishing — creating a space around writing, ideas and knowledge-sharing rather than only technical learning.",
  },
  {
    number: "03",
    icon: Sparkles,
    name: "AIMates",
    phase: "Build an Ecosystem",
    text:
      "AIMates is the current and much larger chapter: bringing learning, building, people, opportunities and contribution together around practical AI.",
    flagship: true,
  },
];

export default function VenturesJourney() {
  return (
    <section
      id="venture-journey"
      className="ventures-journey-section"
    >
      <div className="site-shell">
        <div className="ventures-journey-heading">
          <div className="section-eyebrow">
            THE BUILDER JOURNEY
          </div>

          <h2 className="section-title">
            Different ideas.
            <br />
            The same instinct to{" "}
            <span className="section-accent">
              build.
            </span>
          </h2>

          <p className="section-intro">
            Each venture started from a different
            problem, but all three came from the same
            habit: learn something deeply, build around
            it and create something other people can use.
          </p>
        </div>

        <div className="ventures-journey-list">
          {ventures.map((venture) => {
            const Icon = venture.icon;

            return (
              <article
                key={venture.number}
                className={
                  venture.flagship
                    ? "ventures-journey-item ventures-journey-item-flagship"
                    : "ventures-journey-item"
                }
              >
                <div className="ventures-journey-number">
                  {venture.number}
                </div>

                <div className="surface-card-icon">
                  <Icon size={22} />
                </div>

                <div className="ventures-journey-copy">
                  <div className="ventures-journey-phase">
                    {venture.phase}
                  </div>

                  <h3>{venture.name}</h3>

                  <p>{venture.text}</p>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}