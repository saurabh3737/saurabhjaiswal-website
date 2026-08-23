import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Sparkles,
} from "lucide-react";

export default function ExperienceCTA() {
  return (
    <section className="experience-cta-section">
      <div className="site-shell">
        <div className="experience-cta-card">
          <div className="experience-cta-copy">
            <div className="experience-section-eyebrow">
              What Comes Next
            </div>

            <h2 className="experience-cta-title">
              Experience turned into
              <br />
              something I could{" "}
              <span>build.</span>
            </h2>

            <p className="experience-cta-description">
              AIMates brings together the lessons
              from research, enterprise engineering,
              cloud, architecture and AI into one
              practical ecosystem built around a
              simple idea: make AI useful for real
              people and real work.
            </p>

            <div className="experience-cta-actions">
              <Link
                href="/aimates"
                className="experience-cta-primary"
              >
                <Sparkles size={18} />
                Explore AIMates
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/book"
                className="experience-cta-secondary"
              >
                <BookOpenText size={18} />
                AI for Real Work
              </Link>
            </div>
          </div>

          <div className="experience-cta-mark">
            <div className="experience-cta-mark-inner">
              <span className="experience-cta-ai">
                AI
              </span>

              <span className="experience-cta-mates">
                Mates
              </span>
            </div>

            <div className="experience-cta-mark-caption">
              Learn. Build. Work. Grow.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}