import Link from "next/link";

import AskSaurabh from "@/components/ai/AskSaurabh";
import { ctas } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Ask Saurabh AI",
    description:
      "Ask an AI assistant about Saurabh Jaiswal's AI consulting services, projects, experience, AIMates, his book and speaking.",
    path: "/ask/",
  }),
  robots: {
    index: false,
  },
};

export default function AskPage() {
  return (
    <main className="ask-section">
      <div className="site-shell ask-shell">
        <div className="ask-heading">
          <div className="section-eyebrow">AI assistant</div>

          <h1 className="section-title">
            Ask <span className="section-accent">Saurabh AI.</span>
          </h1>

          <p className="section-intro">
            Questions about my consulting work, projects, availability, AIMates,
            the book or speaking? Ask here — or{" "}
            <Link href={ctas.bookCall.href}>book a discovery call</Link> and talk
            to me directly.
          </p>
        </div>

        <div className="surface-card ask-card">
          <AskSaurabh />
        </div>
      </div>
    </main>
  );
}
