import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { site } from "@/content/site";
import { personJsonLd } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role} — AI, Python, AWS & Azure`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "freelance AI consultant",
    "AI strategy advisor",
    "AI consultant Belgium",
    "GenAI consultant",
    "AI agents",
    "Python AWS consultant",
    "Azure OpenAI consultant",
    "AI speaker",
    "AIMates",
    "AI for Real Work",
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.description,
    images: [{ url: site.images.hero }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
    images: [site.images.hero],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="founder-noir"
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd()),
          }}
        />

        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
