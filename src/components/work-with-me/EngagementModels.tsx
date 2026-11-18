import {
  engagementModels,
  processSteps,
} from "@/content/services";

export default function EngagementModels() {
  return (
    <section
      id="how-we-work"
      className="home-section home-section-alt"
    >
      <div className="site-shell">
        <div className="home-section-head">
          <div className="section-eyebrow">
            Ways to engage
          </div>

          <h2 className="section-title">
            Advisor, builder{" "}
            <span className="section-accent">
              or both.
            </span>
          </h2>
        </div>

        <div className="home-services-grid">
          {engagementModels.map((model) => (
            <article
              key={model.title}
              className="surface-card home-service-card"
            >
              <h3 className="home-card-title wwm-card-title">
                {model.title}
              </h3>

              <p className="surface-card-copy">
                {model.text}
              </p>
            </article>
          ))}
        </div>

        <h3 className="wwm-subhead">
          How a project runs
        </h3>

        <ol className="wwm-process">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span className="wwm-process-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{step.title}</strong>

              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
