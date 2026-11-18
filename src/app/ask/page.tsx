import PageHero from "@/components/layout/PageHero";
import { ctas } from "@/content/site";

export const metadata = {
  title: "Ask Saurabh AI",
  robots: {
    index: false,
  },
};

export default function AskPage() {
  return (
    <main>
      <PageHero
        eyebrow="Coming soon"
        title="Ask Saurabh AI"
        intro="An AI assistant that answers questions about my work, services and ideas is on its way."
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
