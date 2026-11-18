import SpeakingCTA from "@/components/speaking/SpeakingCTA";
import SpeakingFormats from "@/components/speaking/SpeakingFormats";
import SpeakingHero from "@/components/speaking/SpeakingHero";
import SpeakingProof from "@/components/speaking/SpeakingProof";
import SpeakingRecord from "@/components/speaking/SpeakingRecord";
import SpeakingTopics from "@/components/speaking/SpeakingTopics";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Speaking & Workshops — AI Speaker",
  description:
    "Invite Saurabh Jaiswal to speak or train: practical AI, GenAI for leaders and Python for engineers. PyCon India, TSAIR Paris and corporate training for JPMorgan Chase, Accenture, CGI and more.",
  path: "/speaking/",
});

export default function SpeakingPage() {
  return (
    <main>
      <SpeakingHero />
      <SpeakingTopics />
      <SpeakingFormats />
      <SpeakingProof />
      <SpeakingRecord />
      <SpeakingCTA />
    </main>
  );
}