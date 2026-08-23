import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ExperienceImpact from "@/components/experience/ExperienceImpact";
import ExperienceCTA from "@/components/experience/ExperienceCTA";

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceHero />
      <ExperienceTimeline />
      <ExperienceImpact />
      <ExperienceCTA />
    </main>
  );
}