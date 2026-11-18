import {
  BookOpenText,
  Building2,
  BriefcaseBusiness,
  ShieldCheck,
} from "lucide-react";

const proofItems = [
  {
    icon: BriefcaseBusiness,
    top: "Freelance",
    bottom: "AI Consultant",
  },
  {
    icon: Building2,
    top: "Trusted by",
    bottom: "Amazon · KBC · ING",
  },
  {
    icon: ShieldCheck,
    top: "Founder",
    bottom: "AIMates",
  },
  {
    icon: BookOpenText,
    top: "Author",
    bottom: "AI for Real Work",
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
