import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Mic2,
} from "lucide-react";

import { ctas, site } from "@/content/site";

export default function BookCTA() {
  return (
    <section className="book-cta-section">
      <div className="site-shell">
        <div className="book-cta-card">
          <div className="book-cta-copy">
            <div className="section-eyebrow">
              GET THE BOOK
            </div>

            <h2 className="section-title">
              Ready to make AI
              <br />
              part of{" "}
              <span className="section-accent">
                real work?
              </span>
            </h2>

            <p className="section-intro">
              <em>AI for Real Work</em> is built
              for people who want a practical way
              to think, decide and build with AI —
              without losing judgement, context
              or responsibility along the way.
            </p>

            <div className="book-cta-actions">
              <div className="book-availability">
                <BookOpenText size={18} />

                <div>
                  <strong>
                    Buying options
                  </strong>

                  {site.book.buyLinks.length > 0 ? (
                    <span className="book-buy-links">
                      {site.book.buyLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </span>
                  ) : (
                    <span>
                      Launching soon — follow me on{" "}
                      <a
                        href={site.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>{" "}
                      for the release.
                    </span>
                  )}
                </div>
              </div>

              <Link
                href={ctas.speak.href}
                className="action-secondary"
              >
                <Mic2 size={18} />
                Book Talk or Workshop
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="book-cta-mark">
            <div className="book-cta-book-title">
              <span>AI</span>
              <strong>for REAL WORK</strong>
            </div>

            <div className="book-cta-subtitle">
              How to Think, Decide,
              <br />
              and Build with AI
            </div>

            <div className="book-cta-author">
              SAURABH JAISWAL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}