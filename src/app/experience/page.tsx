import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ExperienceImpact from "@/components/experience/ExperienceImpact";
import ExperienceCTA from "@/components/experience/ExperienceCTA";
import ExperienceEducation from "@/components/experience/ExperienceEducation";
import ExperienceRecord from "@/components/experience/ExperienceRecord";

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceHero />
      <ExperienceTimeline />
      <ExperienceRecord />
      <ExperienceImpact />
      <ExperienceEducation />
      <ExperienceCTA />
    </main>
  );
}