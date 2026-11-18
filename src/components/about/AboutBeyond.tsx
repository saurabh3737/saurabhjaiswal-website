import { Award, CheckCircle2 } from "lucide-react";

import {
  achievements,
  beyondWork,
} from "@/content/career";

export default function AboutBeyond() {
  return (
    <>
      <section
        id="achievements"
        className="home-section home-section-alt"
      >
        <div className="site-shell">
          <div className="home-section-head">
            <div className="section-eyebrow">
              Milestones
            </div>

            <h2 className="section-title">
              A few things{" "}
              <span className="section-accent">
                along the way.
              </span>
            </h2>
          </div>

          <ul className="home-credentials">
            {achievements.map((item) => (
              <li key={item}>
                <Award size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="beyond-work"
        className="home-section"
      >
        <div className="site-shell">
          <div className="home-section-head">
            <div className="section-eyebrow">
              Beyond work
            </div>

            <h2 className="section-title">
              The person{" "}
              <span className="section-accent">
                behind the work.
              </span>
            </h2>
          </div>

          <div className="home-services-grid">
            {beyondWork.map((group) => (
              <article
                key={group.title}
                className="surface-card home-service-card"
              >
                <h3 className="wwm-card-title">{group.title}</h3>

                <ul className="wwm-check-list about-beyond-list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
