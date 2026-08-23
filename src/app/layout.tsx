import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.saurabhjaiswal.com",
  ),
  title: {
    default:
      "Saurabh Jaiswal | AI Founder, Technologist, Author & Speaker",
    template:
      "%s | Saurabh Jaiswal",
  },
  description:
    "Saurabh Jaiswal is the founder of AIMates, author of AI for Real Work, and an AI and technology professional with 15+ years across research, enterprise engineering, cloud, Python and artificial intelligence.",
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
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}