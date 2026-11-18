import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CloudCog,
  Compass,
  GraduationCap,
} from "lucide-react";

import { ctas } from "@/content/site";
import { services, type ServiceId } from "@/content/services";

const icons: Record<ServiceId, typeof Compass> = {
  strategy: Compass,
  genai: BrainCircuit,
  engineering: CloudCog,
  training: GraduationCap,
};

export default function Services() {
  return (
    <section
      id="services"
      className="home-section"
    >
      <div className="site-shell">
        <div className="home-section-head">
          <div className="section-eyebrow">
            How I help
          </div>

          <h2 className="section-title">
            From AI strategy{" "}
            <span className="section-accent">
              to production.
            </span>
          </h2>

          <p className="section-intro">
            I work as an advisor, an architect or a
            hands-on engineer inside your team —
            whatever gets the AI into real use.
          </p>
        </div>

        <div className="home-services-grid">
          {services.map((service) => {
            const Icon = icons[service.id];

            return (
              <article
                key={service.id}
                className="surface-card home-service-card"
              >
                <div className="surface-card-icon">
                  <Icon size={22} />
                </div>

                <h3 className="home-card-title">
                  {service.title}
                </h3>

                <p className="surface-card-copy">
                  {service.summary}
                </p>

                <ul className="home-service-points">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="home-section-actions">
          <Link
            href={ctas.bookCall.href}
            className="action-primary"
          >
            {ctas.bookCall.longLabel}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
