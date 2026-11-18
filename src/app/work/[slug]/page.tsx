import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import {
  caseStudies,
  getCaseStudy,
} from "@/content/projects";
import { ctas } from "@/content/site";
import {
  breadcrumbJsonLd,
  caseStudyJsonLd,
  pageMetadata,
} from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return pageMetadata({
    title: `${study.client} — ${study.title}`,
    description: study.summary,
    path: `/work/${study.slug}/`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            caseStudyJsonLd(study),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Case studies", path: "/work/" },
              { name: study.client, path: `/work/${study.slug}/` },
            ]),
          ]),
        }}
      />

      <section className="page-hero">
        <div className="page-hero-glow" />

        <div className="site-shell page-hero-inner">
          <Link
            href="/work/"
            className="case-back"
          >
            <ArrowLeft size={16} />
            All case studies
          </Link>

          <div className="section-eyebrow">
            {study.client} · {study.kind}
          </div>

          <h1 className="page-hero-title case-title">
            {study.title}
          </h1>

          <div className="page-hero-line" />

          <p className="page-hero-intro">
            {study.summary}
          </p>

          <p className="case-meta">{study.meta}</p>
        </div>
      </section>

      <section className="home-section">
        <div className="site-shell case-layout">
          <div>
            <h2 className="wwm-subhead case-subhead">
              What I did
            </h2>

            <ul className="case-work">
              {study.work.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="surface-card case-aside">
            <h2 className="wwm-card-title">Stack</h2>

            <ul className="home-tags">
              {study.stack.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <h2 className="wwm-card-title case-aside-title">
              Areas
            </h2>

            <ul className="home-tags">
              {study.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>

            <Link
              href={ctas.bookCall.href}
              className="action-primary case-aside-cta"
            >
              Need something similar?
              <ArrowRight size={17} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="home-section home-section-alt">
        <div className="site-shell case-next">
          <div>
            <div className="section-eyebrow">
              Next case study
            </div>

            <p className="case-next-title">
              {next.client} — {next.title}
            </p>
          </div>

          <Link
            href={`/work/${next.slug}/`}
            className="action-secondary"
          >
            Read next
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
