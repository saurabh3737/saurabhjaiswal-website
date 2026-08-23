import {
  Building2,
  BriefcaseBusiness,
  FlaskConical,
  Medal,
  ShieldCheck,
} from "lucide-react";

const proofItems = [
  {
    icon: ShieldCheck,
    top: "Founder",
    bottom: "AIMates",
  },
  {
    icon: BriefcaseBusiness,
    top: "Independent",
    bottom: "AI & Cloud Consultant",
  },
    {
      icon: Building2,
      top: "Former",
      bottom: "JPMorgan Chase AVP",
    },
  {
    icon: FlaskConical,
    top: "Former",
    bottom: "DRDO Researcher",
  },
];

export default function ProofStrip() {
  return (
    <div className="proof-strip">
      {proofItems.map(
        ({
          icon: Icon,
          top,
          bottom,
        }) => (
          <div
            className="proof-item"
            key={`${top}-${bottom}`}
          >
            <div className="proof-icon">
              <Icon />
            </div>

            <div>
              <div className="proof-top">
                {top}
              </div>

              <div className="proof-bottom">
                {bottom}
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}