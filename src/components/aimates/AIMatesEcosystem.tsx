import {
  BookOpen,
  BriefcaseBusiness,
  Compass,
  Hammer,
  Network,
  Sprout,
  Users,
} from "lucide-react";

const ecosystem = [
  {
    number: "01",
    icon: BookOpen,
    title: "Learn",
    text:
      "Understanding something new is usually where the journey starts — but I don't think learning should be where it ends.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Build",
    text:
      "The fastest way I've learned technology throughout my career is by making things. AIMates gives that instinct a place in the ecosystem.",
  },
  {
    number: "03",
    icon: Users,
    title: "Connect",
    text:
      "Technology moves faster when people exchange experience, questions and ideas instead of learning entirely on their own.",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "Work",
    text:
      "Skills become more meaningful when they connect to real problems, careers, projects and opportunities.",
  },
  {
    number: "05",
    icon: Compass,
    title: "Discover",
    text:
      "AI changes constantly. I wanted room for finding useful tools, ideas, resources and developments without losing the practical context.",
  },
  {
    number: "06",
    icon: Sprout,
    title: "Grow",
    text:
      "The goal isn't simply knowing more about AI. It's becoming more capable because of what you learn and practise.",
  },
  {
    number: "07",
    icon: Network,
    title: "Contribute",
    text:
      "Eventually, someone who learns and builds has something valuable to give back. I want contribution to be part of the journey too.",
  },
];

export default function AIMatesEcosystem() {
  return (
    <section className="aimates-ecosystem-section">
      <div className="site-shell">
        <div className="aimates-ecosystem-heading">
          <div className="section-eyebrow">
            HOW I SEE THE ECOSYSTEM
          </div>

          <h2 className="section-title">
            Not seven destinations.
            <br />
            One{" "}
            <span className="section-accent">
              connected journey.
            </span>
          </h2>

          <p className="section-intro">
            Learn, Build, Connect, Work, Discover,
            Grow and Contribute became the structure
            of AIMates because I see them as stages
            that can continuously feed one another —
            not isolated features sitting in a menu.
          </p>
        </div>

        <div className="aimates-ecosystem-list">
          {ecosystem.map(
            ({
              number,
              icon: Icon,
              title,
              text,
            }) => (
              <article
                key={title}
                className="aimates-ecosystem-item"
              >
                <div className="aimates-ecosystem-number">
                  {number}
                </div>

                <div className="surface-card-icon">
                  <Icon size={21} />
                </div>

                <div className="aimates-ecosystem-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ),
          )}
        </div>

        <div className="aimates-ecosystem-flow">
          <span>Learn</span>
          <strong>→</strong>
          <span>Build</span>
          <strong>→</strong>
          <span>Connect</span>
          <strong>→</strong>
          <span>Work</span>
          <strong>→</strong>
          <span>Discover</span>
          <strong>→</strong>
          <span>Grow</span>
          <strong>→</strong>
          <span>Contribute</span>
          <strong>↻</strong>
        </div>
      </div>
    </section>
  );
}