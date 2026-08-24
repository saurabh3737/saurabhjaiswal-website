import SpeakingCTA from "@/components/speaking/SpeakingCTA";
import SpeakingFormats from "@/components/speaking/SpeakingFormats";
import SpeakingHero from "@/components/speaking/SpeakingHero";
import SpeakingProof from "@/components/speaking/SpeakingProof";
import SpeakingTopics from "@/components/speaking/SpeakingTopics";

export default function SpeakingPage() {
  return (
    <main>
      <SpeakingHero />
      <SpeakingTopics />
      <SpeakingFormats />
      <SpeakingProof />
      <SpeakingCTA />
    </main>
  );
}