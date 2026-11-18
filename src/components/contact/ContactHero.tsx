import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  MessagesSquare,
  Mic2,
  Network,
} from "lucide-react";

import { site } from "@/content/site";

const contactReasons = [
  {
    icon: BriefcaseBusiness,
    title: "Consulting & AI",
    text:
      "AI strategy, engineering, architecture and practical technology engagements.",
  },
  {
    icon: Mic2,
    title: "Speaking & Workshops",
    text:
      "Conferences, guest sessions, workshops, universities and technology communities.",
  },
  {
    icon: Network,
    title: "AIMates",
    text:
      "Partnerships, collaborations, community ideas and conversations around AIMates.",
  },
  {
    icon: MessagesSquare,
    title: "Something Interesting",
    text:
      "If you're building something meaningful around AI or technology, I'm always open to a good conversation.",
  },
];

export default function ContactHero() {
  return (
    <section className="contact-section">
      <div className="contact-glow" />

      <div className="site-shell">
        <div className="contact-heading">
          <div className="section-eyebrow">
            GET IN TOUCH
          </div>

          <h1 className="contact-title">
            Good things often start
            <br />
            with a{" "}
            <span>
              conversation.
            </span>
          </h1>

          <p className="contact-lead">
            Whether it&apos;s AI, technology,
            consulting, speaking, AIMates or an
            interesting idea worth exploring —
            feel free to reach out.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="action-primary contact-email"
          >
            <Mail size={18} />
            Email Me
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="contact-grid">
          {contactReasons.map(
            ({
              icon: Icon,
              title,
              text,
            }) => (
              <article
                key={title}
                className="surface-card contact-card"
              >
                <div className="surface-card-icon">
                  <Icon size={22} />
                </div>

                <h2 className="surface-card-title contact-card-title">
                  {title}
                </h2>

                <p className="surface-card-copy">
                  {text}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}