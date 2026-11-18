import type { MetadataRoute } from "next";

import { caseStudies } from "@/content/projects";
import { site } from "@/content/site";

export const dynamic = "force-static";

const pages = [
  { path: "/", priority: 1 },
  { path: "/work-with-me/", priority: 0.95 },
  { path: "/work/", priority: 0.9 },
  { path: "/experience/", priority: 0.8 },
  { path: "/speaking/", priority: 0.8 },
  { path: "/aimates/", priority: 0.8 },
  { path: "/book/", priority: 0.7 },
  { path: "/about/", priority: 0.7 },
  { path: "/contact/", priority: 0.8 },
  { path: "/privacy/", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...pages.map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified,
      priority: page.priority,
    })),
    ...caseStudies.map((study) => ({
      url: `${site.url}/work/${study.slug}/`,
      lastModified,
      priority: 0.6,
    })),
  ];
}
