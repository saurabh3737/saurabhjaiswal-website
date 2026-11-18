import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ctas, site } from "@/content/site";

export default function BookFeature() {
  return (
    <section
      id="book"
      className="home-section"
    >
      <div className="site-shell home-split home-split-reverse">
        <div className="home-split-media">
          <Image
            src={site.images.bookCover}
            alt="AI for Real Work by Saurabh Jaiswal"
            width={1024}
            height={1536}
            sizes="(max-width: 900px) 70vw, 30vw"
            className="home-split-image home-book-image"
          />
        </div>

        <div>
          <div className="section-eyebrow">
            The book
          </div>

          <h2 className="section-title">
            AI for{" "}
            <span className="section-accent">
              Real Work.
            </span>
          </h2>

          <p className="home-book-subtitle">
            How to Think, Decide, and Build with AI
          </p>

          <p className="section-intro">
            A practical guide for people who want to
            move beyond prompts, hype and
            experimentation — and learn how to use AI
            thoughtfully in the work they actually do.
          </p>

          <div className="home-section-actions">
            <Link
              href="/book/"
              className="action-primary"
            >
              Discover the book
              <ArrowRight size={17} />
            </Link>

            <Link
              href={ctas.speak.href}
              className="action-secondary"
            >
              Book a talk on the book
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
