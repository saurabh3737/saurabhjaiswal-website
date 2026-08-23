import {
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  FlaskConical,
  Sparkles,
} from "lucide-react";

const timeline = [
  {
    number: "01",
    icon: FlaskConical,
    phase: "Research Foundations",
    role: "Scientist & Researcher",
    org: "DRDO",
    summary:
      "Built a rigorous foundation in modelling, simulation, software engineering and applied research — where technology was expected to solve real operational problems.",
    tags: [
      "Research",
      "Modelling & Simulation",
      "Engineering",
    ],
  },
  {
    number: "02",
    icon: Building2,
    phase: "Enterprise Engineering",
    role: "Software & Platform Engineering",
    org: "Global Enterprise Environments",
    summary:
      "Moved from research into large-scale enterprise systems, working across backend engineering, platforms, automation and production-grade technology environments.",
    tags: [
      "Backend",
      "Enterprise Systems",
      "Cloud",
    ],
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    phase: "Financial Technology",
    role: "Assistant Vice President",
    org: "JPMorgan Chase",
    summary:
      "Combined engineering depth with technology leadership in highly regulated, large-scale financial systems where reliability, architecture and execution mattered at enterprise scale.",
    tags: [
      "Technology Leadership",
      "Architecture",
      "FinTech",
    ],
  },
  {
    number: "04",
    icon: BrainCircuit,
    phase: "AI & Cloud Consulting",
    role: "Independent Consultant",
    org: "Enterprise Clients",
    summary:
      "Expanded into cloud architecture, artificial intelligence and advisory work — helping organisations translate emerging technology into practical systems and business outcomes.",
    tags: [
      "AI Strategy",
      "Cloud Architecture",
      "Consulting",
    ],
  },
  {
    number: "05",
    icon: Sparkles,
    phase: "Founder Era",
    role: "Founder",
    org: "AIMates",
    summary:
      "Bringing the journey together through AIMates: a practical AI ecosystem focused on helping people learn, build, work, grow and create real value with AI.",
    tags: [
      "AIMates",
      "AI for Real Work",
      "Founder",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="career-journey"
      className="experience-timeline-section"
    >
      <div className="site-shell">
        <div className="experience-section-heading">
          <div className="experience-section-eyebrow">
            Career Journey
          </div>

          <h2 className="experience-section-title">
            Built across research,
            <br />
            enterprise and{" "}
            <span>AI.</span>
          </h2>

          <p className="experience-section-intro">
            Each stage added a different layer:
            scientific thinking, engineering depth,
            enterprise scale, technology leadership,
            cloud architecture and artificial
            intelligence.
          </p>
        </div>

        <div className="experience-timeline">
          {timeline.map(
            ({
              number,
              icon: Icon,
              phase,
              role,
              org,
              summary,
              tags,
            }) => (
              <article
                key={number}
                className="experience-timeline-item"
              >
                <div className="experience-timeline-rail">
                  <div className="experience-timeline-number">
                    {number}
                  </div>

                  <div className="experience-timeline-node">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="experience-timeline-main">
                  <div className="experience-timeline-phase">
                    {phase}
                  </div>

                  <h3 className="experience-timeline-role">
                    {role}
                  </h3>

                  <div className="experience-timeline-org">
                    {org}
                  </div>

                  <p className="experience-timeline-summary">
                    {summary}
                  </p>
                </div>

                <div className="experience-timeline-tags">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="experience-timeline-tag"
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