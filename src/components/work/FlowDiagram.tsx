import { ChevronRight } from "lucide-react";

import type { Diagram } from "@/content/diagrams";

// Responsive flow diagram drawn in HTML/CSS (works in both themes, text stays crisp).
// compact = small card header: stage labels only.
export default function FlowDiagram({
  diagram,
  compact = false,
}: {
  diagram: Diagram;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="flow-compact" aria-hidden="true">
        {diagram.stages.map((stage, index) => (
          <div key={stage.label} className="flow-compact-step">
            {index > 0 ? <span className="flow-compact-line" /> : null}
            <span className="flow-compact-dot" />
            <span className="flow-compact-label">{stage.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <figure className="flow">
      <div className="flow-stages">
        {diagram.stages.map((stage, index) => (
          <div key={stage.label} className="flow-stage-wrap">
            {index > 0 ? (
              <span className="flow-arrow" aria-hidden="true">
                <ChevronRight size={18} />
              </span>
            ) : null}

            <div className="flow-stage">
              <span className="flow-stage-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="flow-stage-label">{stage.label}</strong>

              <ul className="flow-nodes">
                {stage.nodes.map((node) => (
                  <li key={node}>{node}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <figcaption className="flow-caption">{diagram.caption}</figcaption>
    </figure>
  );
}
