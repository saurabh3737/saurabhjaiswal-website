import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ctas } from "@/content/site";
import { faqs } from "@/content/services";

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="home-section home-section-alt"
    >
      <div className="site-shell wwm-faq-layout">
        <div>
          <div className="section-eyebrow">
            Questions
          </div>

          <h2 className="section-title">
            Before we{" "}
            <span className="section-accent">
              talk.
            </span>
          </h2>

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

        <div className="wwm-faq">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
