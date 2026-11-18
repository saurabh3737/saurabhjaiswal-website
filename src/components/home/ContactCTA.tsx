import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Mic2,
  Sparkles,
} from "lucide-react";

import { ctas } from "@/content/site";

const paths = [
  {
    icon: BriefcaseBusiness,
    eyebrow: "For companies",
    title: "Hire me as a freelance AI consultant",
    text:
      "Advisory, architecture or hands-on delivery for AI, GenAI, Python and cloud projects — remote or onsite in Belgium and Europe.",
    cta: ctas.bookCall.longLabel,
    href: ctas.bookCall.href,
    primary: true,
  },
  {
    icon: Sparkles,
    eyebrow: "For partners",
    title: "Partner with AIMates",
    text:
      "Education, talent, tooling or community partnerships around practical AI — with universities, companies and builders.",
    cta: ctas.partner.label,
    href: ctas.partner.href,
    primary: false,
  },
  {
    icon: Mic2,
    eyebrow: "For events and teams",
    title: "Invite me to speak or train",
    text:
      "Keynotes, panels and workshops on practical AI, GenAI for leaders and Python for engineers.",
    cta: ctas.speak.label,
    href: ctas.speak.href,
    primary: false,
  },
];

export default function ContactCTA() {
  return (
    <section
      id="work-together"
      className="home-section"
    >
      <div className="site-shell">
        <div className="home-section-head">
          <div className="section-eyebrow">
            Work together
          </div>

          <h2 className="section-title">
            Three ways{" "}
            <span className="section-accent">
              to work with me.
            </span>
          </h2>
        </div>

        <div className="home-paths-grid">
          {paths.map((path) => {
            const Icon = path.icon;

            return (
              <article
                key={path.title}
                className={
                  path.primary
                    ? "surface-card home-path-card home-path-card-primary"
                    : "surface-card home-path-card"
                }
              >
                <div className="surface-card-icon">
                  <Icon size={22} />
                </div>

                <div className="home-work-client">
                  {path.eyebrow}
                </div>

                <h3 className="home-card-title">
                  {path.title}
                </h3>

                <p className="surface-card-copy">
                  {path.text}
                </p>

                <Link
                  href={path.href}
                  className={
                    path.primary
                      ? "action-primary home-path-action"
                      : "action-secondary home-path-action"
                  }
                >
                  {path.cta}
                  <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
