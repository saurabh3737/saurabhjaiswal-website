import { CheckCircle2 } from "lucide-react";

import {
  certifications,
  languages,
} from "@/content/career";
import {
  industries,
  rolesOffered,
  skillGroups,
} from "@/content/services";

export default function SkillsIndustries() {
  return (
    <section
      id="skills"
      className="home-section"
    >
      <div className="site-shell">
        <div className="home-section-head">
          <div className="section-eyebrow">
            Skills & tools
          </div>

          <h2 className="section-title">
            Deep where it{" "}
            <span className="section-accent">
              matters.
            </span>
          </h2>

          <p className="section-intro">
            Primary strengths: AI, Python, AWS and
            Azure — backed by data engineering, DevOps
            and 15+ years of enterprise delivery.
          </p>
        </div>

        <div className="wwm-skills-grid">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="surface-card wwm-skill-card"
            >
              <h3 className="wwm-card-title">
                {group.title}
              </h3>

              <ul className="home-tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="wwm-columns">
          <div>
            <h3 className="wwm-subhead">
              Industries
            </h3>

            <ul className="wwm-check-list">
              {industries.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="wwm-subhead">
              Roles I take on
            </h3>

            <ul className="wwm-check-list">
              {rolesOffered.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="wwm-subhead">
              Certifications
            </h3>

            <ul className="wwm-check-list">
              {certifications.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="wwm-subhead">
              Languages
            </h3>

            <ul className="wwm-plain-list">
              {languages.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
