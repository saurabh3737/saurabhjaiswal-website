import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Action = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  intro: string;
  primary?: Action;
  secondary?: Action;
  note?: string;
};

export default function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  primary,
  secondary,
  note,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow" />

      <div className="site-shell page-hero-inner">
        <div className="section-eyebrow">
          {eyebrow}
        </div>

        <h1 className="page-hero-title">
          {title}
          {accent ? (
            <>
              {" "}
              <span>{accent}</span>
            </>
          ) : null}
        </h1>

        <div className="page-hero-line" />

        <p className="page-hero-intro">
          {intro}
        </p>

        {primary || secondary ? (
          <div className="home-section-actions">
            {primary ? (
              <Link
                href={primary.href}
                className="action-primary"
              >
                {primary.label}
                <ArrowRight size={17} />
              </Link>
            ) : null}

            {secondary ? (
              <Link
                href={secondary.href}
                className="action-secondary"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
        ) : null}

        {note ? (
          <p className="page-hero-note">
            <span className="page-hero-dot" />
            {note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
