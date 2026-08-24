import {
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Cpu,
  GraduationCap,
} from "lucide-react";

const topics = [
  {
    icon: BrainCircuit,
    title: "AI for Real Work",
    description:
      "How individuals and organisations can move beyond AI experimentation and use it meaningfully in everyday work, decisions and delivery.",
    tags: [
      "Practical AI",
      "Adoption",
      "Productivity",
    ],
  },
  {
    icon: Cpu,
    title: "AI Strategy & Architecture",
    description:
      "From use-case selection to enterprise architecture: how to design AI systems that connect models, data, workflows, APIs and governance.",
    tags: [
      "AI Strategy",
      "Architecture",
      "Agents",
    ],
  },
  {
    icon: CloudCog,
    title: "Engineering for the AI Era",
    description:
      "What changes — and what does not — when traditional software engineering, cloud platforms and enterprise systems meet modern AI.",
    tags: [
      "Engineering",
      "Cloud",
      "Platforms",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Leading Technology Through Change",
    description:
      "Lessons from research, enterprise engineering, financial technology, consulting and AI on making sound technology decisions through constant change.",
    tags: [
      "Leadership",
      "Transformation",
      "Decision-making",
    ],
  },
  {
    icon: GraduationCap,
    title: "Careers in the AI Era",
    description:
      "A practical conversation about how students and professionals can develop durable skills, use AI intelligently and build careers around continuous change.",
    tags: [
      "Careers",
      "Students",
      "Future of Work",
    ],
  },
];

export default function SpeakingTopics() {
  return (
    <section
      id="speaking-topics"
      className="speaking-topics-section"
    >
      <div className="site-shell">
        <div className="speaking-topics-heading">
          <div className="section-eyebrow">
            SIGNATURE TOPICS
          </div>

          <h2 className="section-title">
            Conversations worth{" "}
            <span className="section-accent">
              having.
            </span>
          </h2>

          <p className="section-intro">
            Topics can be adapted for technical,
            executive, academic and general audiences —
            from practical introductions to deeper
            architecture and strategy sessions.
          </p>
        </div>

        <div className="speaking-topics-grid">
          {topics.map(
            ({
              icon: Icon,
              title,
              description,
              tags,
            }) => (
              <article
                key={title}
                className="surface-card speaking-topic-card"
              >
                <div className="surface-card-icon">
                  <Icon size={23} />
                </div>

                <h3 className="surface-card-title speaking-topic-title">
                  {title}
                </h3>

                <p className="surface-card-copy">
                  {description}
                </p>

                <div className="speaking-topic-tags">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="speaking-topic-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}