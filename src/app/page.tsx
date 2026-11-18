import AIMatesFeature from "@/components/home/AIMatesFeature";
import BookFeature from "@/components/home/BookFeature";
import ClientStrip from "@/components/home/ClientStrip";
import ContactCTA from "@/components/home/ContactCTA";
import Hero from "@/components/home/Hero";
import SelectedImpact from "@/components/home/SelectedImpact";
import Services from "@/components/home/Services";
import SpeakingPreview from "@/components/home/SpeakingPreview";
import { site } from "@/content/site";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: `${site.name} | ${site.role}`,
    description: site.description,
    images: [{ url: site.images.hero }],
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ClientStrip />
      <Services />
      <SelectedImpact />
      <ContactCTA />
      <AIMatesFeature />
      <BookFeature />
      <SpeakingPreview />
    </main>
  );
}
