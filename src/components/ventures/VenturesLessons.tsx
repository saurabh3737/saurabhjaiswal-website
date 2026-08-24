import {
  Hammer,
  Layers3,
  UsersRound,
} from "lucide-react";

const lessons = [
  {
    icon: Hammer,
    title: "Build to understand.",
    text:
      "Each venture taught me more by being real than any amount of planning could. Building exposes the gaps, the assumptions and the parts that actually matter.",
  },
  {
    icon: UsersRound,
    title: "People shape the platform.",
    text:
      "The useful ideas are rarely only about features. They are about what people need, how they behave and what makes them return, learn, contribute or create.",
  },
  {
    icon: Layers3,
    title: "The next idea usually grows from the last.",
    text:
      "Pythonmates, Blogmates and AIMates were not isolated experiments. Each one expanded the scope of what I wanted to build and who I wanted to build it for.",
  },
];

export default function VenturesLessons() {
  return (
    <section className="ventures-lessons-section">
      <div className="site-shell">
        <div className="ventures-lessons-heading">
          <div className="section-eyebrow">
            WHAT THEY TAUGHT ME
          </div>

          <h2 className="section-title">
            Every platform changed
            <br />
            how I{" "}
            <span className="section-accent">
              build the next one.
            </span>
          </h2>

          <p className="section-intro">
            The ventures changed in scope, but the
            lessons accumulated. Each one made the
            next project more deliberate, more useful
            and more connected to real people.
          </p>
        </div>

        <div className="ventures-lessons-grid">
          {lessons.map(
            ({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                key={title}
                className="surface-card ventures-lesson-card"
              >
                <div className="surface-card-icon">
                  <Icon size={22} />
                </div>

                <h3 className="surface-card-title ventures-lesson-title">
                  {title}
                </h3>

                <p className="surface-card-copy">
                  {text}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}