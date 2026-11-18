import type { Metadata } from "next";

import { site } from "@/content/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

// Per-page metadata: canonical URL, Open Graph and Twitter card.
// Usage in a page: export const metadata = pageMetadata({ ... });
export function pageMetadata({
  title,
  description,
  path,
  image = site.images.hero,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [image],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}${site.images.portrait}`,
    jobTitle: site.role,
    description: site.description,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: site.location.country,
    },
    knowsAbout: [
      "Artificial Intelligence",
      "AI Strategy",
      "Generative AI",
      "AI Agents",
      "Python",
      "AWS",
      "Azure",
      "Machine Learning",
      "Data Engineering",
    ],
    hasOccupation: [
      { "@type": "Occupation", name: "Freelance AI Consultant" },
      { "@type": "Occupation", name: "AI Strategy Advisor" },
      { "@type": "Occupation", name: "Author" },
    ],
    sameAs: [
      site.social.linkedin,
      site.social.github,
      site.social.x,
      site.social.python,
      site.ventures.aimates,
      site.ventures.blogmates,
    ],
  };
}
