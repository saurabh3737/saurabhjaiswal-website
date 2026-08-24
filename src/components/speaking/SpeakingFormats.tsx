import {
  GraduationCap,
  Mic2,
  MonitorPlay,
  Presentation,
  UsersRound,
} from "lucide-react";

const formats = [
  {
    icon: Presentation,
    title: "Keynotes",
    text:
      "Focused talks designed to make complex AI and technology ideas clear, practical and memorable.",
  },
  {
    icon: MonitorPlay,
    title: "Workshops",
    text:
      "Hands-on sessions for teams, professionals and students who want to move from concepts into practice.",
  },
  {
    icon: GraduationCap,
    title: "Guest Lectures",
    text:
      "Academic and career-focused sessions connecting technology foundations, AI and real-world industry experience.",
  },
  {
    icon: UsersRound,
    title: "Panels & Discussions",
    text:
      "Thoughtful conversations around AI adoption, engineering, careers, leadership and the future of work.",
  },
  {
    icon: Mic2,
    title: "Webinars & Virtual Sessions",
    text:
      "Interactive online sessions for distributed teams, communities, universities and professional audiences.",
  },
];

const audiences = [
  "Technology Leaders",
  "Engineering Teams",
  "AI & Data Teams",
  "Students & Universities",
  "Professional Communities",
  "Founders & Builders",
];

export default function SpeakingFormats() {
  return (
    <section className="speaking-formats-section">
      <div className="site-shell">
        <div className="speaking-formats-heading">
          <div className="section-eyebrow">
            FORMATS & AUDIENCES
          </div>

          <h2 className="section-title">
            From boardrooms to{" "}
            <span className="section-accent">
              classrooms.
            </span>
          </h2>

          <p className="section-intro">
            Sessions can be adapted for different
            levels of technical depth, audience size
            and context — from strategic conversations
            to hands-on learning.
          </p>
        </div>

        <div className="speaking-formats-layout">
          <div className="speaking-formats-grid">
            {formats.map(
              ({
                icon: Icon,
                title,
                text,
              }) => (
                <article
                  key={title}
                  className="surface-card speaking-format-card"
                >
                  <div className="surface-card-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="surface-card-title">
                      {title}
                    </h3>

                    <p className="surface-card-copy">
                      {text}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>

          <aside className="surface-card speaking-audience-card">
            <div className="speaking-audience-label">
              WHO I SPEAK TO
            </div>

            <div className="speaking-audience-list">
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className="speaking-audience-item"
                >
                  <span className="speaking-audience-dot" />
                  {audience}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}