import Link from "next/link";

import { pageMetadata } from "@/lib/seo";

// Ventures now lives on the AIMates page. Static export has no server
// redirects, so this page forwards visitors with a meta refresh.
export const metadata = {
  ...pageMetadata({
    title: "Ventures — Pythonmates, Blogmates and AIMates",
    description:
      "The builder journey of Saurabh Jaiswal — from Pythonmates and Blogmates to AIMates.",
    path: "/aimates/",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function VenturesPage() {
  return (
    <main className="site-shell redirect-page">
      <meta
        httpEquiv="refresh"
        content="0; url=/aimates/#venture-journey"
      />

      <p>
        My ventures journey has moved to the{" "}
        <Link href="/aimates/#venture-journey">
          AIMates page
        </Link>
        .
      </p>
    </main>
  );
}
