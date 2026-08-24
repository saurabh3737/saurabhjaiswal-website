import {
  BriefcaseBusiness,
  Code2,
  Compass,
  Lightbulb,
} from "lucide-react";

const audiences = [
  {
    icon: BriefcaseBusiness,
    title: "Professionals & Leaders",
    text:
      "For people figuring out where AI genuinely improves everyday work, decisions and team productivity.",
  },
  {
    icon: Code2,
    title: "Engineers & Builders",
    text:
      "For technologists who want to move beyond API calls and think more clearly about AI systems, workflows and reliability.",
  },
  {
    icon: Lightbulb,
    title: "Founders & Creators",
    text:
      "For people using AI to research, design, write, prototype and turn ideas into useful products or services.",
  },
  {
    icon: Compass,
    title: "Anyone Navigating AI at Work",
    text:
      "For curious people who know AI will affect how they work and want a practical framework rather than another list of tools.",
  },
];

export default function BookAudience() {
  return (
    <section className="book-audience-section">
      <div className="site-shell">
        <div className="book-audience-layout">
          <div className="book-audience-heading">
            <div className="section-eyebrow">
              WHO IT&apos;S FOR
            </div>

            <h2 className="section-title">
              You don&apos;t need to be
              <br />
              an AI expert to{" "}
              <span className="section-accent">
                work better with AI.
              </span>
            </h2>

            <p className="section-intro">
              This book is for people who care
              less about chasing every new AI tool
              and more about developing a durable
              way of thinking and working with the
              technology.
            </p>
          </div>

          <div className="book-audience-list">
            {audiences.map(
              ({
                icon: Icon,
                title,
                text,
              }) => (
                <article
                  key={title}
                  className="book-audience-item"
                >
                  <div className="surface-card-icon">
                    <Icon size={21} />
                  </div>

                  <div className="book-audience-copy">
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