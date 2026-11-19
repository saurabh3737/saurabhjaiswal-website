import { education, freelance, roles } from "@/content/career";

// "Career at a glance" — a Gantt-style chart built from the dates in career.ts.

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function toYear(value: string, now: number) {
  const text = value.trim().toLowerCase();

  if (text.startsWith("present")) {
    return now;
  }

  const [month, year] = text.split(/\s+/);
  const m = MONTHS.indexOf(month.slice(0, 3));

  return Number(year) + (m >= 0 ? m / 12 : 0);
}

function span(period: string, now: number) {
  const [from, to] = period.split(/\s*[–-]\s*/);
  return { from: toYear(from, now), to: toYear(to ?? "present", now) };
}

type Row = {
  label: string;
  detail: string;
  from: number;
  to: number;
  kind: "freelance" | "role" | "study";
};

export default function ExperienceGlance() {
  const today = new Date();
  const now = today.getFullYear() + today.getMonth() / 12;

  const mtech = education[0];
  const [mFrom, mTo] = mtech.period.split(/\s*[–-]\s*/).map(Number);

  const rows: Row[] = [
    {
      label: "Freelance",
      detail: "Amazon · KBC · ING · Ontoforce · IMEC",
      ...span(freelance.period, now),
      kind: "freelance",
    },
    ...roles.map((role) => ({
      label: role.org.replace(/\s*\(.*\)$/, "").replace(" & Co.", ""),
      detail: role.role,
      ...span(role.period, now),
      kind: "role" as const,
    })),
  ];

  rows.splice(rows.length - 1, 0, {
    label: "M.Tech. — DIAT",
    detail: "Modelling & Simulation",
    from: mFrom + 0.6,
    to: mTo + 0.4,
    kind: "study",
  });

  const start = Math.floor(Math.min(...rows.map((row) => row.from)));
  const end = Math.ceil(now);
  const total = end - start;

  const ticks: number[] = [];
  for (let year = start; year <= end; year += 2) {
    ticks.push(year);
  }

  const left = (value: number) => `${((value - start) / total) * 100}%`;
  const width = (row: Row) => `${(Math.max(row.to - row.from, 0.25) / total) * 100}%`;

  return (
    <section className="home-section glance-section">
      <div className="site-shell">
        <div className="experience-section-heading">
          <div className="section-eyebrow">Career at a glance</div>

          <h2 className="section-title">
            {Math.floor(now - start)}+ years,{" "}
            <span className="section-accent">one timeline.</span>
          </h2>
        </div>

        <div className="surface-card glance-chart">
          <ol className="glance-rows">
            {rows.map((row) => (
              <li key={`${row.label}-${row.from}`} className={`glance-row glance-row--${row.kind}`}>
                <div className="glance-label">
                  <strong>{row.label}</strong>
                  <span>{row.detail}</span>
                </div>

                <div className="glance-track">
                  <span
                    className="glance-bar"
                    style={{ left: left(row.from), width: width(row) }}
                  />
                </div>
              </li>
            ))}
          </ol>

          <div className="glance-axis" aria-hidden="true">
            <div className="glance-label" />
            <div className="glance-track">
              {ticks.map((year) => (
                <span key={year} style={{ left: left(year) }}>
                  {year}
                </span>
              ))}
            </div>
          </div>

          <div className="glance-legend">
            <span className="glance-key glance-key--freelance">Freelance</span>
            <span className="glance-key glance-key--role">Full-time</span>
            <span className="glance-key glance-key--study">Study</span>
          </div>
        </div>
      </div>
    </section>
  );
}
