import { ArrowUpRight } from "lucide-react";

import PageHero from "@/components/layout/PageHero";
import { site } from "@/content/site";
import { posts } from "@/content/writing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Writing — Articles on AI, GenAI and Python",
  description:
    "Articles by Saurabh Jaiswal on practical AI, generative AI, semantic search, Python projects, data engineering and freelancing in the age of AI.",
  path: "/writing/",
});

export default function WritingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Writing"
        title="Notes from"
        accent="building with AI."
        intro="Practical articles on AI, generative AI, Python and freelancing — published on my Blogmates blog. These are the ones readers find most useful."
        primary={{
          label: "Visit the blog",
          href: site.ventures.blog,
        }}
        secondary={{
          label: "Read the book",
          href: "/book/",
        }}
      />

      <section className="home-section">
        <div className="site-shell">
          <ul className="writing-list">
            {posts.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener"
                  className="writing-item"
                >
                  <span className="home-work-client">{post.topic}</span>
                  <span className="writing-title">{post.title}</span>
                  <ArrowUpRight size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
