import {
  BrainCircuit,
  Hammer,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: BrainCircuit,
    title: "AI needed less hype.",
    text:
      "The conversation around AI was moving incredibly fast, but much of it focused on tools, prompts and impressive demos rather than how people actually think and work.",
  },
  {
    icon: Target,
    title: "The real question is how to use it.",
    text:
      "Knowing that AI exists is easy. Deciding when to use it, what to trust, how to structure the work and where human judgement still matters is much harder.",
  },
  {
    icon: Hammer,
    title: "I wanted something practical.",
    text:
      "After years of building software, systems and technology platforms, I wanted to approach AI the same way: understand it, test it, and turn what works into something people can actually use.",
  },
];

export default function BookWhy() {
  return (
    <section className="book-why-section">
      <div className="site-shell">
        <div className="book-why-heading">
          <div className="section-eyebrow">
            WHY I WROTE IT
          </div>

          <h2 className="section-title">
            AI is impressive.
            <br />
            Making it useful is{" "}
            <span className="section-accent">
              harder.
            </span>
          </h2>

          <p className="section-intro">
            I didn&apos;t want to write another
            catalogue of AI tools or a collection
            of clever prompts. I wanted to explore
            the more important question: how do we
            actually work well with AI?
          </p>
        </div>

        <div className="book-why-grid">
          {reasons.map(
            ({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                key={title}
                className="surface-card book-why-card"
              >
                <div className="surface-card-icon">
                  <Icon size={22} />
                </div>

                <h3 className="surface-card-title book-why-card-title">
                  {title}
                </h3>

                <p className="surface-card-copy">
                  {text}
                </p>
              </article>
            ),
          )}
        </div>

        <div className="book-why-statement">
          <span className="book-why-statement-label">
            THE IDEA BEHIND THE BOOK
          </span>

          <blockquote>
            The goal isn&apos;t to make AI do
            everything.
            <br />
            It&apos;s to become better at knowing{" "}
            <span>
              what AI should do, what you should do,
              and how the two work together.
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}