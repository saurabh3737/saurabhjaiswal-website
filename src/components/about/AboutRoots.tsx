import { HeartHandshake, MapPin } from "lucide-react";

import { personal } from "@/content/career";

export default function AboutRoots() {
  return (
    <section
      id="roots"
      className="home-section home-section-alt"
    >
      <div className="site-shell about-roots-grid">
        <div className="about-roots-copy">
          <div className="section-eyebrow">Roots &amp; places</div>

          <h2 className="section-title">
            From Kanpur{" "}
            <span className="section-accent">to Brussels.</span>
          </h2>

          <p className="section-intro">
            {personal.roots} My career has taken me through some of
            India&apos;s biggest tech cities and Singapore, and today I live
            and work in Belgium — with clients across Europe and worldwide.
          </p>

          <div className="surface-card about-motto">
            <HeartHandshake size={22} />

            <div>
              <span>My motto</span>
              <strong>&ldquo;{personal.motto}&rdquo;</strong>
              <p>{personal.identity}</p>
            </div>
          </div>
        </div>

        <ol className="about-journey">
          {personal.journey.map((stop, index) => (
            <li
              key={stop.city}
              className={
                index === personal.journey.length - 1
                  ? "about-journey-stop about-journey-stop--now"
                  : "about-journey-stop"
              }
            >
              <span className="about-journey-dot">
                <MapPin size={14} />
              </span>

              <div>
                <strong>{stop.city}</strong>
                <span>{stop.note}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
