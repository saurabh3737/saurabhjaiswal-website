import { Suspense } from "react";
import {
  BriefcaseBusiness,
  Mail,
  MapPin,
  Mic2,
  Network,
} from "lucide-react";

import SocialLinks from "@/components/layout/SocialLinks";
import ContactForm, {
  ContactFormFromUrl,
} from "@/components/contact/ContactForm";
import { site } from "@/content/site";

const contactReasons = [
  {
    icon: BriefcaseBusiness,
    title: "Consulting & AI",
    text: "Freelance AI strategy, architecture and engineering — full-time or part-time, short or long term.",
  },
  {
    icon: Network,
    title: "AIMates",
    text: "Partnerships with universities, companies, tools and communities.",
  },
  {
    icon: Mic2,
    title: "Speaking & workshops",
    text: "Conferences, panels, guest sessions and corporate training.",
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
            Tell me what you have in mind — an AI
            project, a contract role, an AIMates
            partnership or an event. I read every
            message personally.
          </p>
        </div>

        <div className="contact-layout">
          <Suspense fallback={<ContactForm initialReason="consulting" />}>
            <ContactFormFromUrl />
          </Suspense>

          <aside className="contact-aside">
            <div className="surface-card contact-direct">
              <h2 className="wwm-card-title">
                Or reach me directly
              </h2>

              <a
                href={`mailto:${site.email}`}
                className="contact-direct-link"
              >
                <Mail size={17} />
                {site.email}
              </a>

              <span className="contact-direct-link">
                <MapPin size={17} />
                {site.location.label}
              </span>

              <SocialLinks compact withCv />

              <p className="page-hero-note contact-availability">
                <span className="page-hero-dot" />
                {site.availability}
              </p>
            </div>

            <ul className="contact-reason-list">
              {contactReasons.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="home-journey-icon">
                    <Icon size={18} />
                  </span>

                  <span>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
