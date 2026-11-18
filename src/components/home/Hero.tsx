import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Rocket,
} from "lucide-react";

import { ctas, site } from "@/content/site";

import ProofStrip from "./ProofStrip";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background-glow" />

      <div className="site-shell hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>Freelance AI Consultant</span>
            <span className="hero-dot">•</span>
            <span>AI Strategy Advisor</span>
            <span className="hero-dot">•</span>
            <span>Python · AWS · Azure</span>
          </div>

          <h1 className="hero-title">
            Turning AI strategy
            <br />
            into{" "}
            <span className="accent-text">
              real work
            </span>
            <br />
            that ships.
          </h1>

          <div className="hero-accent-line" />

          <p className="hero-description">
            I help teams decide where AI really pays
            off — then build it with Python, AWS and
            Azure. 15+ years across Amazon, KBC, ING,
            JPMorgan Chase and DRDO research. Founder
            of AIMates and author of{" "}
            <em>AI for Real Work</em>.
          </p>

          <div className="hero-actions">
            <Link
              href={ctas.bookCall.href}
              className="primary-cta"
            >
              <CalendarDays size={18} />
              <span>{ctas.bookCall.longLabel}</span>
            </Link>

            <Link
              href="/work/"
              className="secondary-cta"
            >
              <Rocket size={18} />
              <span>Explore My Work</span>
            </Link>
          </div>

          <ProofStrip />
        </div>

        <div className="hero-media">
          <div className="hero-composition">
            <Image
              src={site.images.hero}
              alt="Saurabh Jaiswal, freelance AI consultant, founder of AIMates and author of AI for Real Work"
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