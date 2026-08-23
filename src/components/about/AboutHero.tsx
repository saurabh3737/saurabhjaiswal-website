import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-glow" />

      <div className="site-shell about-hero-grid">
        <div className="about-hero-copy">
          <div className="about-eyebrow">
            ABOUT SAURABH
          </div>

          <h1 className="about-hero-title">
            I&apos;ve always been
            <br />
            a <span>builder.</span>
          </h1>

          <div className="about-accent-line" />

          <p className="about-hero-lead">
            Long before AI became part of my work,
            technology was already part of how I
            thought — something to understand,
            experiment with and use to build things
            that solve real problems.
          </p>

          <p className="about-hero-description">
            That curiosity eventually took me from
            computer science and defence research to
            enterprise engineering, cloud architecture,
            artificial intelligence, writing and
            entrepreneurship.
          </p>

          <div className="about-hero-actions">
            <Link
              href="/experience"
              className="about-primary-cta"
            >
              My Journey
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/book"
              className="about-secondary-cta"
            >
              <BookOpenText size={18} />
              AI for Real Work
            </Link>
          </div>
        </div>

        <div className="about-hero-statement">
          <div className="about-statement-label">
            THE THREAD THROUGH IT ALL
          </div>

          <blockquote>
            “Understand deeply.
            <br />
            Build practically.
            <br />
            Make it useful.”
          </blockquote>

          <div className="about-statement-line" />

          <p>
            Research taught me to question.
            Engineering taught me to build.
            Enterprise taught me to scale.
            AI brought those worlds together.
          </p>
        </div>
      </div>
    </section>
  );
}