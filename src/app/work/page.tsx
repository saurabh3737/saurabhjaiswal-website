import ContactCTA from "@/components/home/ContactCTA";
import PageHero from "@/components/layout/PageHero";
import CaseStudyGrid from "@/components/work/CaseStudyGrid";
import { freelance } from "@/content/career";
import { otherEngagements } from "@/content/projects";
import { ctas } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies — AI, GenAI, Python & Cloud Projects",
  description:
    "Selected AI, GenAI, Python, AWS and Azure work by Saurabh Jaiswal for Amazon, KBC Bank, Ontoforce, JPMorgan Chase, Rakuten, Bank of America, HP and DRDO.",
  path: "/work/",
});

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title="AI in production,"
        accent="not in slides."
        intro={`${freelance.title} since ${freelance.period.split(" – ")[0]}, after a full-time career at JPMorgan Chase, Rakuten, Accenture, HP and DRDO. Here is a selection of the work.`}
        primary={{
          label: ctas.bookCall.longLabel,
          href: ctas.bookCall.href,
        }}
        secondary={{
          label: "Full experience",
          href: "/experience/",
        }}
      />

      <section className="home-section">
        <div className="site-shell">
          <CaseStudyGrid />

          <h2 className="wwm-subhead work-other-title">
            Other freelance engagements
          </h2>

          <ul className="work-other">
            {otherEngagements.map((item) => (
              <li key={item.client}>
                <strong>{item.client}</strong>
                <span>{item.summary}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
