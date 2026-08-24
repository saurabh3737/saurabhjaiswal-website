import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  MessagesSquare,
  Trophy,
  Users,
} from "lucide-react";

const buildingAreas = [
  {
    icon: BrainCircuit,
    title: "Learning Experiences",
    text:
      "Practical ways to learn AI through tutorials, challenges, resources and experiences designed around doing rather than passive consumption.",
  },
  {
    icon: Code2,
    title: "Building & Experimentation",
    text:
      "Spaces for projects, experimentation and hands-on work — because building has always been one of the most effective ways I've learned technology.",
  },
  {
    icon: Users,
    title: "People & Community",
    text:
      "Ways for people working with AI to discover one another, exchange knowledge and gradually build useful professional connections.",
  },
  {
    icon: BriefcaseBusiness,
    title: "AI Work & Opportunities",
    text:
      "Connecting AI learning and skills with jobs, projects and opportunities where those capabilities can become useful in the real world.",
  },
  {
    icon: Trophy,
    title: "Progress & Participation",
    text:
      "Creating reasons to return, practise and contribute — with challenges, recognition and progress becoming part of the experience.",
  },
  {
    icon: MessagesSquare,
    title: "Knowledge from the Community",
    text:
      "Making AIMates a place where useful knowledge doesn't only come from the platform, but increasingly from the people participating in it.",
  },
];

export default function AIMatesBuilding() {
  return (
    <section className="aimates-building-section">
      <div className="site-shell">
        <div className="aimates-building-heading">
          <div className="section-eyebrow">
            WHAT I&apos;M BUILDING NOW
          </div>

          <h2 className="section-title">
            The idea is becoming a{" "}
            <span className="section-accent">
              working ecosystem.
            </span>
          </h2>

          <p className="section-intro">
            I&apos;m building AIMates incrementally —
            shipping useful pieces, watching how they
            connect, learning from what works and
            gradually turning the larger idea into
            something people can actually use.
          </p>
        </div>

        <div className="aimates-building-grid">
          {buildingAreas.map(
            ({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                key={title}
                className="surface-card aimates-building-card"
              >
                <div className="surface-card-icon">
                  <Icon size={22} />
                </div>

                <h3 className="surface-card-title aimates-building-title">
                  {title}
                </h3>

                <p className="surface-card-copy">
                  {text}
                </p>
              </article>
            ),
          )}
        </div>

        <div className="aimates-building-note">
          <span className="aimates-building-status">
            BUILDING IN PUBLIC
          </span>

          <p>
            AIMates isn&apos;t a finished product
            presented as a finished vision. I&apos;m
            building it continuously — one useful
            capability at a time.
          </p>
        </div>
      </div>
    </section>
  );
}