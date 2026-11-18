import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { ctas } from "@/content/site";
import {
  credentials,
  trainingClients,
} from "@/content/services";

export default function SpeakingPreview() {
  return (
    <section
      id="credentials"
      className="home-section home-section-alt"
    >
      <div className="site-shell">
        <div className="home-section-head">
          <div className="section-eyebrow">
            Speaking, training & credentials
          </div>

          <h2 className="section-title">
            Teaching what{" "}
            <span className="section-accent">
              I build.
            </span>
          </h2>

          <p className="section-intro">
            From PyCon India to TSAIR Paris, and
            corporate training for engineering teams
            across banking, consulting and defence
            research.
          </p>
        </div>

        <ul className="home-credentials">
          {credentials.map((item) => (
            <li key={item}>
              <CheckCircle2 size={18} />
              {item}
            </li>
          ))}
        </ul>

        <div className="home-trained">
          <p className="home-clients-label">
            Training and workshops delivered for
          </p>

          <ul className="home-clients-list">
            {trainingClients.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>

        <div className="home-section-actions">
          <Link
            href={ctas.speak.href}
            className="action-primary"
          >
            {ctas.speak.label}
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/speaking/"
            className="action-secondary"
          >
            Talks and topics
          </Link>
        </div>
      </div>
    </section>
  );
}
