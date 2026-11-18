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
      site.ventures.pythonmates,
      site.ventures.blog,
      site.book.amazonUrl,
    ],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} — ${site.role}`,
    url: site.url,
    image: `${site.url}${site.images.hero}`,
    email: site.email,
    founder: { "@type": "Person", name: site.name },
    areaServed: ["Belgium", "Europe", "Worldwide"],
    address: {
      "@type": "PostalAddress",
      addressCountry: site.location.country,
    },
    serviceType: [
      "AI strategy and advisory",
      "Generative AI, LLM and AI agent development",
      "AI and cloud engineering (Python, AWS, Azure)",
      "AI training and workshops",
    ],
  };
}

export function bookJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "AI for Real Work: How to Think, Decide, and Build with AI",
    author: { "@type": "Person", name: site.name, url: site.url },
    image: `${site.url}${site.images.bookCover}`,
    url: `${site.url}/book/`,
    sameAs: [site.book.amazonUrl],
    inLanguage: "en",
    datePublished: site.book.datePublished,
    numberOfPages: site.book.pages,
    bookFormat: [
      "https://schema.org/EBook",
      "https://schema.org/Paperback",
      "https://schema.org/Hardcover",
    ],
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function caseStudyJsonLd(study: {
  slug: string;
  client: string;
  title: string;
  summary: string;
  stack: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.client} — ${study.title}`,
    description: study.summary,
    url: `${site.url}/work/${study.slug}/`,
    keywords: study.stack.join(", "),
    author: { "@type": "Person", name: site.name, url: site.url },
    about: { "@type": "Organization", name: study.client },
  };
}
