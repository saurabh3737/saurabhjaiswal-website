import ContactCTA from "@/components/home/ContactCTA";
import Services from "@/components/home/Services";
import PageHero from "@/components/layout/PageHero";
import EngagementModels from "@/components/work-with-me/EngagementModels";
import FaqSection from "@/components/work-with-me/FaqSection";
import SkillsIndustries from "@/components/work-with-me/SkillsIndustries";
import WorkWithMePanel from "@/components/work-with-me/WorkWithMePanel";
import { ctas, site } from "@/content/site";
import { faqs } from "@/content/services";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work With Me — Freelance AI Consultant & AI Strategy Advisor",
  description:
    "Hire Saurabh Jaiswal as a freelance AI consultant, AI strategy advisor or hands-on AI, Python, AWS and Azure engineer. Advisory, project delivery, embedded expert and workshops — Belgium and worldwide.",
  path: "/work-with-me/",
});

export default function WorkWithMePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqs)),
        }}
      />

      <PageHero
        eyebrow="Work with me"
        title="Senior AI expertise,"
        accent="freelance, on your terms."
        intro="I help companies decide where AI pays off and then build it — as an advisor, an architect or a hands-on engineer inside your team. Full-time or part-time, short or long term, on a daily rate or a fixed scope. AI, Python, AWS and Azure, with 15+ years of enterprise delivery behind it."
        primary={{
          label: ctas.bookCall.longLabel,
          href: ctas.bookCall.href,
        }}
        secondary={{
          label: "See case studies",
          href: "/work/",
        }}
        note={`${site.availability} · ${site.location.label}`}
        aside={<WorkWithMePanel />}
      />

      <Services />
      <EngagementModels />
      <SkillsIndustries />
      <FaqSection />
      <ContactCTA />
    </main>
  );
}
