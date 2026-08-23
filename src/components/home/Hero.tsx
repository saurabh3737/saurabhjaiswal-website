import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Rocket,
} from "lucide-react";

import ProofStrip from "./ProofStrip";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background-glow" />

      <div className="site-shell hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>Founder</span>
            <span className="hero-dot">•</span>
            <span>AI Strategist</span>
            <span className="hero-dot">•</span>
            <span>AI Architect</span>
            <span className="hero-dot">•</span>
            <span>Author</span>
            <span className="hero-dot">•</span>
            <span>Speaker</span>
          </div>

          <h1 className="hero-title">
            Building technology
            <br />
            that turns{" "}
            <span className="accent-text">
              AI into
            </span>
            <br />
            <span className="accent-text">
              real work.
            </span>
          </h1>

          <div className="hero-accent-line" />

          <p className="hero-description">
            Founder of AIMates, author of{" "}
            <em>AI for Real Work</em>, and an AI
            strategist &amp; architect with 15+ years
            across AI, cloud, enterprise engineering
            and defence research.
          </p>

          <div className="hero-actions">
            <Link
              href="/experience"
              className="primary-cta"
            >
              <Rocket size={18} />
              <span>Explore My Work</span>
            </Link>

            <Link
              href="/speaking"
              className="secondary-cta"
            >
              <CalendarDays size={18} />
              <span>Invite Me to Speak</span>
            </Link>
          </div>

          <ProofStrip />
        </div>

        <div className="hero-media">
          <div className="hero-composition">
            <Image
              src="/images/home/saurabh-hero-composition.png"
              alt="Saurabh Jaiswal, founder of AIMates and author of AI for Real Work"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
              className="hero-composition-image"
            />

            <div className="hero-composition-left-fade" />
            <div className="hero-composition-bottom-fade" />
          </div>
        </div>
      </div>
    </section>
  );
}