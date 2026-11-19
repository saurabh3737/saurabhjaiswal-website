import Link from "next/link";
import { ArrowRight } from "lucide-react";

import FlowDiagram from "@/components/work/FlowDiagram";
import { getDiagram } from "@/content/diagrams";
import { featuredWork } from "@/content/services";

const proofNumbers = [
  { value: "15+", label: "years in AI, software and research" },
  { value: "4,000+", label: "unit tests migrated to Python 3 at JPMorgan Chase" },
  { value: "18% → 70%", label: "test coverage on 80,000 lines of code" },
  { value: "100+", label: "banking apps covered by test automation" },
];

export default function SelectedImpact() {
  return (
    <section
      id="selected-work"
      className="home-section home-section-alt"
    >
      <div className="site-shell">
        <div className="home-section-head">
          <div className="section-eyebrow">
            Selected work
          </div>

          <h2 className="section-title">
            AI in production,{" "}
            <span className="section-accent">
              not in slides.
            </span>
          </h2>
        </div>

        <div className="home-work-grid">
          {featuredWork.map((work) => (
            <Link
              key={work.title}
              href={`/work/${work.slug}/`}
              className="surface-card home-work-card work-card"
            >
              {getDiagram(work.slug) ? (
                <div className="work-card-visual">
                  <FlowDiagram diagram={getDiagram(work.slug)} compact />
                </div>
              ) : null}

              <div className="home-work-client">
                {work.client}
              </div>

              <h3 className="home-card-title">
                {work.title}
              </h3>

              <p className="surface-card-copy">
                {work.text}
              </p>

              <ul className="home-tags">
                {work.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <span className="work-card-link">
                Read case study
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>

        <dl className="home-numbers">
          {proofNumbers.map((item) => (
            <div key={item.value}>
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>

        <div className="home-section-actions">
          <Link
            href="/work/"
            className="action-secondary"
          >
            All case studies
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
