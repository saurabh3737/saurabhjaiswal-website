import ContactHero from "@/components/contact/ContactHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact — Hire a Freelance AI Consultant",
  description:
    "Contact Saurabh Jaiswal about freelance AI consulting, contract roles, AIMates partnerships, speaking or workshops.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
    </main>
  );
}