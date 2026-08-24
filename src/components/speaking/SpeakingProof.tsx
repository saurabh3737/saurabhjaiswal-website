import {
  Building2,
  GraduationCap,
  Presentation,
  UsersRound,
} from "lucide-react";

const speakingExperience = [
  {
    icon: GraduationCap,
    type: "University & Student Sessions",
    title: "AI, Technology & Career Conversations",
    text:
      "Guest sessions connecting computer science fundamentals, industry experience, AI and the skills students need for rapidly changing technology careers.",
  },
  {
    icon: Presentation,
    type: "Technical Talks & Workshops",
    title: "From Engineering Fundamentals to Practical AI",
    text:
      "Technical sessions built around hands-on engineering experience spanning Python, software systems, modelling, cloud, architecture and artificial intelligence.",
  },
  {
    icon: Building2,
    type: "Professional Audiences",
    title: "Enterprise Technology & AI",
    text:
      "Conversations around AI adoption, architecture, cloud platforms, engineering practices and turning emerging technology into usable enterprise systems.",
  },
  {
    icon: UsersRound,
    type: "Communities & Online Sessions",
    title: "Sharing What Works",
    text:
      "Interactive talks and virtual sessions designed around practical lessons, real implementation experience and open discussion rather than technology hype.",
  },
];

export default function SpeakingProof() {
  return (
    <section className="speaking-proof-section">
      <div className="site-shell">
        <div className="speaking-proof-heading">
          <div className="section-eyebrow">
            SPEAKING EXPERIENCE
          </div>

          <h2 className="section-title">
            Technology explained through{" "}
            <span className="section-accent">
              experience.
            </span>
          </h2>

          <p className="section-intro">
            My sessions draw from the same journey
            behind my work — research, engineering,
            enterprise technology, architecture,
            cloud, AI and building products of my own.
          </p>
        </div>

        <div className="speaking-proof-grid">
          {speakingExperience.map(
            ({
              icon: Icon,
              type,
              title,
              text,
            }) => (
              <article
                key={type}
                className="speaking-proof-item"
              >
                <div className="speaking-proof-rail">
                  <div className="surface-card-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="speaking-proof-copy">
                  <div className="speaking-proof-type">
                    {type}
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}