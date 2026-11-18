import PageHero from "@/components/layout/PageHero";
import { ctas } from "@/content/site";

export const metadata = {
  title: "Writing",
  robots: {
    index: false,
  },
};

export default function WritingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Coming soon"
        title="Writing"
        intro="Articles on practical AI, architecture and building with Python are on their way."
        primary={{
          label: ctas.bookCall.longLabel,
          href: ctas.bookCall.href,
        }}
        secondary={{
          label: "Back to home",
          href: "/",
        }}
      />
    </main>
  );
}
