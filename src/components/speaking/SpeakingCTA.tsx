import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Mic2,
} from "lucide-react";

import { ctas, site } from "@/content/site";

export default function SpeakingCTA() {
  return (
    <section className="speaking-cta-section">
      <div className="site-shell">
        <div className="speaking-cta-card">
          <div className="speaking-cta-copy">
            <div className="section-eyebrow">
              LET&apos;S TALK
            </div>

            <h2 className="section-title">
              Planning a conversation
              <br />
              around{" "}
              <span className="section-accent">
                AI & technology?
              </span>
            </h2>

            <p className="section-intro">
              I&apos;m open to conferences,
              university sessions, guest lectures,
              panels, workshops and conversations
              with teams and professional communities.
              Tell me about your audience and what
              you&apos;d like them to take away.
            </p>

            <div className="speaking-cta-actions">
              <Link
                href={ctas.speak.href}
                className="action-primary"
              >
                <Mic2 size={18} />
                Invite Me to Speak
                <ArrowRight size={17} />
              </Link>

              <a
                href={`mailto:${site.email}`}
                className="action-secondary"
              >
                <Mail size={18} />
                Email Me
              </a>
            </div>
          </div>

          <div className="speaking-cta-mark">
            <Mic2 size={34} />

            <strong>
              Practical AI.
              <br />
              Real experience.
            </strong>

            <span>
              No hype required.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}