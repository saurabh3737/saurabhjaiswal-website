import { ExternalLink, Mic2, PlayCircle, UsersRound } from "lucide-react";

import { trainingClients } from "@/content/services";
import {
  panels,
  researchTalks,
  talks,
  videos,
} from "@/content/speaking";

export default function SpeakingRecord() {
  return (
    <section
      id="record"
      className="home-section home-section-alt"
    >
      <div className="site-shell">
        <div className="home-section-head">
          <div className="section-eyebrow">
            Track record
          </div>

          <h2 className="section-title">
            Where I have{" "}
            <span className="section-accent">
              spoken and trained.
            </span>
          </h2>
        </div>

        <div className="speaking-record-grid">
          <article className="surface-card speaking-record-card">
            <div className="surface-card-icon">
              <Mic2 size={22} />
            </div>

            <h3 className="wwm-card-title">Conference talks</h3>

            <ul className="speaking-record-list">
              {talks.map((talk) => (
                <li key={talk.event}>
                  <strong>{talk.event}</strong>
                  <span>{talk.detail}</span>
                  {talk.title && talk.url ? (
                    <a
                      href={talk.url}
                      target="_blank"
                      rel="noreferrer"
                      className="speaking-talk-link"
                    >
                      “{talk.title}” ↗
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card speaking-record-card">
            <div className="surface-card-icon">
              <UsersRound size={22} />
            </div>

            <h3 className="wwm-card-title">Panels, judging & mentoring</h3>

            <ul className="speaking-record-list">
              {panels.map((panel) => (
                <li key={panel.event}>
                  <strong>{panel.event}</strong>
                  <span>{panel.detail}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card speaking-record-card">
            <div className="surface-card-icon">
              <PlayCircle size={22} />
            </div>

            <h3 className="wwm-card-title">Research & video</h3>

            <ul className="speaking-record-list">
              {researchTalks.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}

              {videos.map((video) => (
                <li key={video.url}>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="speaking-record-link"
                  >
                    {video.title}
                    <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="home-trained">
          <p className="home-clients-label">
            Corporate training and workshops delivered for
          </p>

          <ul className="home-clients-list">
            {trainingClients.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
