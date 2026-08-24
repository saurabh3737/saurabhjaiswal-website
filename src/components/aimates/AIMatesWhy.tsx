import {
  Blocks,
  Compass,
  Network,
} from "lucide-react";

const reasons = [
  {
    icon: Compass,
    title:
      "I wanted learning to lead somewhere.",
    text:
      "Learning about AI is useful, but I kept thinking about what comes next. Can someone practise it, apply it, build something with it, find an opportunity through it, or share what they have learned with someone else?",
  },
  {
    icon: Blocks,
    title:
      "I wanted builders to have somewhere to build.",
    text:
      "My own relationship with technology has always been hands-on. I learn best by creating things. I wanted AIMates to make building, experimenting and contributing part of the experience rather than something that happens elsewhere.",
  },
  {
    icon: Network,
    title:
      "I wanted the pieces to connect.",
    text:
      "AI learning, projects, people, jobs, resources and practical knowledge often live in separate places. I kept coming back to one question: what would happen if those pieces could become part of the same journey?",
  },
];

export default function AIMatesWhy() {
  return (
    <section className="aimates-why-section">
      <div className="site-shell">
        <div className="aimates-why-heading">
          <div className="section-eyebrow">
            WHY I STARTED AIMATES
          </div>

          <h2 className="section-title">
            I kept seeing the same problem
            <br />
            from{" "}
            <span className="section-accent">
              different angles.
            </span>
          </h2>

          <p className="section-intro">
            Over the years I&apos;ve learned
            technology, built software, worked
            across large organisations, shared
            knowledge and created platforms of my
            own. As AI accelerated, I noticed how
            fragmented the experience had become.
            Learning was in one place, tools in
            another, communities somewhere else,
            and opportunities somewhere else again.
          </p>
        </div>

        <div className="aimates-why-grid">
          {reasons.map(
            ({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                key={title}
                className="surface-card aimates-why-card"
              >
                <div className="surface-card-icon">
                  <Icon size={22} />
                </div>

                <h3 className="surface-card-title aimates-why-card-title">
                  {title}
                </h3>

                <p className="surface-card-copy">
                  {text}
                </p>
              </article>
            ),
          )}
        </div>

        <div className="aimates-founder-thesis">
          <div className="aimates-founder-thesis-label">
            THE QUESTION THAT LED TO AIMATES
          </div>

          <blockquote>
            What if learning AI wasn&apos;t
            the destination —
            <br />
            but the beginning of{" "}
            <span>
              everything you could do next?
            </span>
          </blockquote>

          <p>
            That question gradually became
            AIMates. I&apos;m building it as a
            connected ecosystem where learning
            can lead to building, building can
            lead to sharing, people can find one
            another, and knowledge can turn into
            real opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}