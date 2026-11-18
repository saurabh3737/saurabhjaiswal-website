import Link from "next/link";
import {
  CheckCircle2,
  Download,
  GraduationCap,
} from "lucide-react";

import {
  certificateLinks,
  certifications,
  education,
} from "@/content/career";
import { site } from "@/content/site";

export default function ExperienceEducation() {
  return (
    <section
      id="education"
      className="home-section"
    >
      <div className="site-shell">
        <div className="home-section-head">
          <div className="section-eyebrow">
            Education & certifications
          </div>

          <h2 className="section-title">
            Research roots,{" "}
            <span className="section-accent">
              industry credentials.
            </span>
          </h2>
        </div>

        <div className="xp-education">
          {education.map((item) => (
            <article
              key={item.degree}
              className="surface-card xp-education-card"
            >
              <div className="surface-card-icon">
                <GraduationCap size={22} />
              </div>

              <div>
                <span className="xp-period">{item.period}</span>
                <h3 className="home-card-title">{item.degree}</h3>
                <p className="surface-card-copy">{item.school}</p>

                {item.note ? (
                  <p className="xp-education-note">{item.note}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <ul className="home-credentials xp-certs">
          {certifications.map((item) => (
            <li key={item}>
              <CheckCircle2 size={18} />
              {certificateLinks[item] ? (
                <a
                  href={certificateLinks[item]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xp-cert-link"
                >
                  {item}
                </a>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>

        {site.resumeUrl ? (
          <div className="home-section-actions">
            <a
              href={site.resumeUrl}
              className="action-primary"
              download
            >
              <Download size={17} />
              Download resume (PDF)
            </a>

            <Link
              href="/work/"
              className="action-secondary"
            >
              See case studies
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
