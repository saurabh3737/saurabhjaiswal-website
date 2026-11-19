import ExperienceGlance from "@/components/experience/ExperienceGlance";
import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ExperienceImpact from "@/components/experience/ExperienceImpact";
import ExperienceCTA from "@/components/experience/ExperienceCTA";
import ExperienceEducation from "@/components/experience/ExperienceEducation";
import ExperienceRecord from "@/components/experience/ExperienceRecord";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Experience — 15+ Years in AI, Python & Cloud",
  description:
    "Freelance work for Amazon, KBC Bank, ING, Ontoforce and IMEC, and a full-time career at JPMorgan Chase, Rakuten, Accenture, HP and DRDO. Education and certifications.",
  path: "/experience/",
});

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceHero />
      <ExperienceGlance />
      <ExperienceTimeline />
      <ExperienceRecord />
      <ExperienceImpact />
      <ExperienceEducation />
      <ExperienceCTA />
    </main>
  );
}