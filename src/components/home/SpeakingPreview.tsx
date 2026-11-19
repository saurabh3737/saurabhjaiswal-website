import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { ctas, site } from "@/content/site";
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
      <div className="site-shell home-speaking-grid">
        <figure className="photo-card home-speaking-photo">
          <Image
            src={site.images.speakingTsair}
            alt={`${site.name} speaking at TSAIR 2026 in Paris`}
            width={1000}
            height={1250}
            sizes="(max-width: 900px) 90vw, 360px"
          />
          <figcaption>TSAIR 2026 · Paris</figcaption>
        </figure>

        <div>
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
      </div>
    </section>
  );
}
