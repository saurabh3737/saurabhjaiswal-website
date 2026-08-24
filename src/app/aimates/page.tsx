import AIMatesBuilding from "@/components/aimates/AIMatesBuilding";
import AIMatesCTA from "@/components/aimates/AIMatesCTA";
import AIMatesEcosystem from "@/components/aimates/AIMatesEcosystem";
import AIMatesFounder from "@/components/aimates/AIMatesFounder";
import AIMatesHero from "@/components/aimates/AIMatesHero";
import AIMatesWhy from "@/components/aimates/AIMatesWhy";

export default function AIMatesPage() {
  return (
    <main>
      <AIMatesHero />
      <AIMatesWhy />
      <AIMatesEcosystem />
      <AIMatesBuilding />
      <AIMatesFounder />
      <AIMatesCTA />
    </main>
  );
}