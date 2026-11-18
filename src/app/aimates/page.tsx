import AIMatesBuilding from "@/components/aimates/AIMatesBuilding";
import AIMatesCTA from "@/components/aimates/AIMatesCTA";
import AIMatesEcosystem from "@/components/aimates/AIMatesEcosystem";
import AIMatesFounder from "@/components/aimates/AIMatesFounder";
import AIMatesHero from "@/components/aimates/AIMatesHero";
import AIMatesPartner from "@/components/aimates/AIMatesPartner";
import AIMatesWhy from "@/components/aimates/AIMatesWhy";
import VenturesJourney from "@/components/ventures/VenturesJourney";

export default function AIMatesPage() {
  return (
    <main>
      <AIMatesHero />
      <AIMatesWhy />
      <AIMatesEcosystem />
      <AIMatesBuilding />
      <AIMatesPartner />
      <VenturesJourney />
      <AIMatesFounder />
      <AIMatesCTA />
    </main>
  );
}