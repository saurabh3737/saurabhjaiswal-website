import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Code2,
  Sparkles,
} from "lucide-react";

import { ctas, site } from "@/content/site";

const journey = [
  {
    icon: Code2,
    name: "Pythonmates",
    phase: "Learn & teach",
    text: "Where it started — making Python easier to learn.",
  },
  {
    icon: BookOpenText,
    name: "Blogmates",
    phase: "Write & publish",
    text: "A home for writing, ideas and knowledge-sharing.",
  },
  {
    icon: Sparkles,
    name: "AIMates",
    phase: "Build an ecosystem",
    text: "Learning, building, people and opportunities around practical AI.",
    flagship: true,
  },
];

export default function AIMatesFeature() {
  return (
    <section
      id="aimates"
      className="home-section home-section-alt"
    >
      <div className="site-shell home-split">
        <div>
          <div className="section-eyebrow">
            Founder · AIMates
          </div>

          <h2 className="section-title">
            Building a community{" "}
            <span className="section-accent">
              for practical AI.
            </span>
          </h2>

          <p className="section-intro">
            AIMates brings learners, builders,
            mentors and companies together to turn AI
            knowledge into real projects and real
            opportunities. It is the third venture in
            the same builder journey.
          </p>

          <ol className="home-journey">
            {journey.map((step) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.name}
                  className={
                    step.flagship
                      ? "home-journey-step home-journey-step-flagship"
                      : "home-journey-step"
                  }
                >
                  <span className="home-journey-icon">
                    <Icon size={18} />
                  </span>

                  <span>
                    <strong>{step.name}</strong>
                    <small>{step.phase}</small>
                    <span>{step.text}</span>
                  </span>
                </li>
              );
            })}
          </ol>

          <div className="home-section-actions">
            <Link
              href={ctas.partner.href}
              className="action-primary"
            >
              {ctas.partner.label}
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/aimates/"
              className="action-secondary"
            >
              Explore AIMates
            </Link>
          </div>
        </div>

        <div className="home-split-media">
          <Image
            src={site.images.aimatesMug}
            alt="AIMates — AI for real work"
            width={1312}
            height={1199}
            sizes="(max-width: 900px) 90vw, 40vw"
            className="home-split-image"
          />
        </div>
      </div>
    </section>
  );
}
