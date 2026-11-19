"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import FlowDiagram from "@/components/work/FlowDiagram";
import { getDiagram } from "@/content/diagrams";
import {
  areas,
  caseStudies,
  type Area,
} from "@/content/projects";

type Filter = Area | "All";

export default function CaseStudyGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.areas.includes(filter));

  const filters: Filter[] = ["All", ...areas];

  return (
    <div>
      <div
        className="work-filters"
        role="group"
        aria-label="Filter case studies by area"
      >
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={
              item === filter
                ? "work-filter work-filter-active"
                : "work-filter"
            }
            aria-pressed={item === filter}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="home-work-grid work-grid">
        {visible.map((study) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}/`}
            className="surface-card home-work-card work-card"
          >
            {getDiagram(study.slug) ? (
              <div className="work-card-visual">
                <FlowDiagram diagram={getDiagram(study.slug)} compact />
              </div>
            ) : null}

            <div className="work-card-top">
              <span className="home-work-client">
                {study.client}
              </span>

              <span className="work-kind">
                {study.kind}
              </span>
            </div>

            <h3 className="home-card-title">
              {study.title}
            </h3>

            <p className="surface-card-copy">
              {study.summary}
            </p>

            <ul className="home-tags">
              {study.stack.slice(0, 4).map((tag) => (
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
    </div>
  );
}
