import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutBeliefs from "@/components/about/AboutBeliefs";
import AboutNow from "@/components/about/AboutNow";
import AboutBeyond from "@/components/about/AboutBeyond";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "The story of Saurabh Jaiswal — from DRDO research and enterprise engineering to freelance AI consulting, AIMates and the book AI for Real Work.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutBeliefs />
      <AboutBeyond />
      <AboutNow />
    </main>
  );
}