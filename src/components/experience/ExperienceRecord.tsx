import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  caseStudyFor,
  engagements,
  freelance,
  roles,
} from "@/content/career";

export default function ExperienceRecord() {
  return (
    <section
      id="record"
      className="home-section home-section-alt"
    >
      <div className="site-shell">
        <div className="home-section-head">
          <div className="section-eyebrow">
            The full record
          </div>

          <h2 className="section-title">
            Where I have{" "}
            <span className="section-accent">
              worked.
            </span>
          </h2>
        </div>

        <div className="xp-freelance">
          <div className="xp-freelance-head">
            <div>
              <h3 className="xp-role">{freelance.title}</h3>
              <p className="xp-org">{freelance.location}</p>
            </div>

            <span className="xp-period">{freelance.period}</span>
          </div>

          <p className="surface-card-copy">{freelance.summary}</p>

          <div className="xp-engagements">
            {engagements.map((item) => {
              const slug = caseStudyFor[item.slug];

              return (
                <article
                  key={item.slug}
                  className="surface-card xp-engagement"
                >
                  <div className="home-work-client">{item.client}</div>

                  <p className="xp-engagement-role">
                    {item.role} · {item.location}
                  </p>

                  <p className="surface-card-copy">{item.summary}</p>

                  {slug ? (
                    <Link
                      href={`/work/${slug}/`}
                      className="work-card-link"
                    >
                      Case study
                      <ArrowRight size={15} />
                    </Link>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>

        <h3 className="wwm-subhead">
          Full-time career
        </h3>

        <div className="xp-roles">
          {roles.map((item) => {
            const slug = caseStudyFor[item.slug];

            return (
              <details
                key={item.slug}
                className="xp-role-row"
              >
                <summary>
                  <span className="xp-period">{item.period}</span>

                  <span>
                    <strong className="xp-role">{item.role}</strong>
                    <span className="xp-org">
                      {item.org} · {item.location}
                    </span>
                  </span>
                </summary>

                <div className="xp-role-body">
                  <p className="surface-card-copy">{item.summary}</p>

                  <ul className="xp-highlights">
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  {slug ? (
                    <Link
                      href={`/work/${slug}/`}
                      className="work-card-link"
                    >
                      Read the case study
                      <ArrowRight size={15} />
                    </Link>
                  ) : null}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
