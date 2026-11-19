import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Mic2,
} from "lucide-react";

import { ctas, site } from "@/content/site";

export default function SpeakingHero() {
  return (
    <section className="speaking-hero">
      <div className="speaking-hero-glow" />

      <div className="site-shell speaking-hero-grid">
        <div className="speaking-hero-copy">
          <div className="section-eyebrow">
            SPEAKING
          </div>

          <h1 className="speaking-hero-title">
            Practical AI.
            <br />
            Clear thinking.
            <br />
            <span>Real conversations.</span>
          </h1>

          <div className="speaking-hero-line" />

          <p className="speaking-hero-lead">
            I speak about artificial intelligence,
            technology strategy, engineering and the
            realities of turning emerging technology
            into practical work.
          </p>

          <p className="speaking-hero-description">
            From student audiences and technical teams
            to enterprise leaders, my goal is simple:
            make complex ideas understandable, useful
            and worth acting on.
          </p>

          <div className="speaking-hero-actions">
            <Link
              href="#speaking-topics"
              className="action-primary"
            >
              <Mic2 size={18} />
              Explore Topics
              <ArrowRight size={17} />
            </Link>

            <Link
              href={ctas.speak.href}
              className="action-secondary"
            >
              <CalendarDays size={18} />
              Invite Me to Speak
            </Link>
          </div>
        </div>

        <div className="speaking-hero-side">
          <figure className="photo-card speaking-photo">
            <Image
              src={site.images.speakingTsair}
              alt={`${site.name} speaking at TSAIR 2026 in Paris`}
              width={1000}
              height={1250}
              priority
              sizes="(max-width: 900px) 90vw, 400px"
            />
          </figure>

          <div className="photo-caption-card">
            <span>On stage</span>
            <strong>TSAIR 2026 · Paris</strong>
            <p>Practical AI, clear thinking and real-world examples.</p>
          </div>
        </div>
      </div>
    </section>
  );
}