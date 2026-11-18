import BookAudience from "@/components/book/BookAudience";
import BookCTA from "@/components/book/BookCTA";
import BookHero from "@/components/book/BookHero";
import BookLearn from "@/components/book/BookLearn";
import BookWhy from "@/components/book/BookWhy";
import { bookJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI for Real Work — the Book",
  description:
    "AI for Real Work: How to Think, Decide, and Build with AI — a practical guide by Saurabh Jaiswal for people who want to move beyond prompts and hype.",
  path: "/book/",
});

export default function BookPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookJsonLd()),
        }}
      />

      <BookHero />
      <BookWhy />
      <BookLearn />
      <BookAudience />
      <BookCTA />
    </main>
  );
}