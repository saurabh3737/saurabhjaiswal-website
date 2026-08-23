import {
  BrainCircuit,
  CloudCog,
  Network,
  UsersRound,
} from "lucide-react";

const impactAreas = [
  {
    icon: BrainCircuit,
    title: "AI Strategy",
    description:
      "Turning AI from a broad ambition into practical priorities, operating models, use cases and measurable outcomes.",
    points: [
      "AI adoption & roadmap",
      "Use-case prioritisation",
      "Responsible implementation",
    ],
  },
  {
    icon: Network,
    title: "AI Architecture",
    description:
      "Designing systems that connect models, data, APIs, workflows and enterprise controls into usable AI solutions.",
    points: [
      "AI solution architecture",
      "Agents & workflows",
      "Enterprise integration",
    ],
  },
  {
    icon: CloudCog,
    title: "Cloud & Enterprise Engineering",
    description:
      "Building reliable technology foundations across backend systems, cloud platforms, APIs and production environments.",
    points: [
      "Cloud architecture",
      "Backend engineering",
      "Scalable platforms",
    ],
  },
  {
    icon: UsersRound,
    title: "Technology Leadership",
    description:
      "Bridging deep engineering with decision-making, communication and execution across complex technology programmes.",
    points: [
      "Technical leadership",
      "Architecture decisions",
      "Stakeholder alignment",
    ],
  },
];

export default function ExperienceImpact() {
  return (
    <section className="experience-impact-section">
      <div className="experience-impact-glow" />

      <div className="site-shell experience-impact-inner">
        <div className="experience-impact-heading">
          <div className="experience-section-eyebrow">
            Experience in Practice
          </div>

          <h2 className="experience-impact-title">
            Where experience
            <br />
            becomes{" "}
            <span>impact.</span>
          </h2>

          <p className="experience-impact-intro">
            The common thread across research,
            engineering, architecture and leadership
            has been simple: turn complex technology
            into something useful, reliable and
            actionable.
          </p>
        </div>

        <div className="experience-impact-grid">
          {impactAreas.map(
            ({
              icon: Icon,
              title,
              description,
              points,
            }) => (
              <article
                key={title}
                className="experience-impact-card"
              >
                <div className="experience-impact-icon">
                  <Icon size={25} />
                </div>

                <h3 className="experience-impact-card-title">
                  {title}
                </h3>

                <p className="experience-impact-card-description">
                  {description}
                </p>

                <div className="experience-impact-divider" />

                <ul className="experience-impact-points">
                  {points.map((point) => (
                    <li key={point}>
                      <span className="experience-impact-dot" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}