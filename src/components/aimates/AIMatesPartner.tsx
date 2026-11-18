import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  UsersRound,
} from "lucide-react";

import { ctas } from "@/content/site";

const partnerTypes = [
  {
    icon: GraduationCap,
    title: "Universities & education",
    text: "Courses, guest sessions, student projects and practical AI learning paths.",
  },
  {
    icon: Building2,
    title: "Companies & hiring",
    text: "Real projects for learners, and a way to meet people who can actually build with AI.",
  },
  {
    icon: Handshake,
    title: "Tools & sponsors",
    text: "Bring your AI product or platform to a community that learns by building.",
  },
  {
    icon: UsersRound,
    title: "Communities & events",
    text: "Meetups, hackathons, workshops and co-hosted sessions around practical AI.",
  },
];

export default function AIMatesPartner() {
  return (
    <section
      id="partner"
      className="home-section home-section-alt"
    >
      <div className="site-shell">
        <div className="home-section-head">
          <div className="section-eyebrow">
            Partner with AIMates
          </div>

          <h2 className="section-title">
            Build it{" "}
            <span className="section-accent">
              with us.
            </span>
          </h2>

          <p className="section-intro">
            AIMates grows through partners who care
            about practical AI — learning it, building
            with it and opening real opportunities.
          </p>
        </div>

        <div className="home-services-grid">
          {partnerTypes.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="surface-card home-service-card"
            >
              <div className="surface-card-icon">
                <Icon size={22} />
              </div>

              <h3 className="home-card-title">
                {title}
              </h3>

              <p className="surface-card-copy">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="home-section-actions">
          <Link
            href={ctas.partner.href}
            className="action-primary"
          >
            {ctas.partner.label}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
