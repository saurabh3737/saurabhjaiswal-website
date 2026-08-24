import BookAudience from "@/components/book/BookAudience";
import BookCTA from "@/components/book/BookCTA";
import BookHero from "@/components/book/BookHero";
import BookLearn from "@/components/book/BookLearn";
import BookWhy from "@/components/book/BookWhy";

export default function BookPage() {
  return (
    <main>
      <BookHero />
      <BookWhy />
      <BookLearn />
      <BookAudience />
      <BookCTA />
    </main>
  );
}