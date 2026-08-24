import VenturesCTA from "@/components/ventures/VenturesCTA";
import VenturesHero from "@/components/ventures/VenturesHero";
import VenturesJourney from "@/components/ventures/VenturesJourney";
import VenturesLessons from "@/components/ventures/VenturesLessons";

export default function VenturesPage() {
  return (
    <main>
      <VenturesHero />
      <VenturesJourney />
      <VenturesLessons />
      <VenturesCTA />
    </main>
  );
}