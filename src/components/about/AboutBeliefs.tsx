import {
  Hammer,
  Layers3,
  Sparkles,
} from "lucide-react";

const beliefs = [
  {
    number: "01",
    icon: Hammer,
    title: "Build before you preach.",
    text:
      "Technology makes the most sense to me when I can experiment with it, build with it and understand where it actually works — and where it doesn't.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Make complexity useful.",
    text:
      "Research, engineering and architecture taught me that complexity has value only when it can be turned into something understandable, reliable and useful.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI should improve real work.",
    text:
      "I care less about AI for the sake of AI and more about what it helps people think, decide, build and accomplish in the real world.",
  },
];

export default function AboutBeliefs() {
  return (
    <section className="about-beliefs-section">
      <div className="site-shell">
        <div className="about-beliefs-heading">
          <div className="section-eyebrow">
            WHAT I BELIEVE
          </div>

          <h2 className="section-title">
            Principles that stayed{" "}
            <span className="section-accent">
              constant.
            </span>
          </h2>

          <p className="section-intro">
            Technologies keep changing.
            These ideas have shaped how I
            learn, build and work through
            every generation of them.
          </p>
        </div>

        <div className="about-beliefs-grid">
          {beliefs.map((belief) => {
            const Icon = belief.icon;

            return (
              <article
                key={belief.number}
                className="surface-card about-belief-card"
              >
                <div className="about-belief-top">
                  <div className="surface-card-icon">
                    <Icon size={22} />
                  </div>

                  <span className="about-belief-number">
                    {belief.number}
                  </span>
                </div>

                <h3 className="surface-card-title">
                  {belief.title}
                </h3>

                <p className="surface-card-copy">
                  {belief.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}