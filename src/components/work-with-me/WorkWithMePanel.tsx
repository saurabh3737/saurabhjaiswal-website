import { Compass, Presentation, Rocket, UsersRound } from "lucide-react";

const ways = [
  { icon: Compass, label: "Advisory", detail: "Strategy & roadmaps" },
  { icon: Rocket, label: "Project delivery", detail: "Built end to end" },
  { icon: UsersRound, label: "Embedded expert", detail: "Inside your team" },
  { icon: Presentation, label: "Workshops", detail: "Leaders & engineers" },
];

// Hero panel for /work-with-me — same visual style as the Experience hero panel.
export default function WorkWithMePanel() {
  return (
    <div className="experience-hero-panel">
      <div className="experience-panel-kicker">Ways to work together</div>

      <div className="experience-signal-grid">
        {ways.map(({ icon: Icon, label, detail }) => (
          <div key={label} className="experience-signal">
            <div className="experience-signal-icon">
              <Icon size={22} />
            </div>

            <div>
              <div className="experience-signal-label">{label}</div>
              <div className="experience-signal-detail">{detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="experience-panel-footer">
        <span className="experience-panel-number">15+</span>

        <span className="experience-panel-text">
          years of enterprise delivery — remote, onsite in Belgium or hybrid
        </span>
      </div>
    </div>
  );
}
