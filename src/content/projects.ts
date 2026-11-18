// Case studies — built only from the CV + annexure (no invented metrics).
// Freelance engagements are undated, as in the CV.

import { engagements, roles } from "./career";

export type Area =
  | "GenAI & LLMs"
  | "AI & ML"
  | "Cloud & Serverless"
  | "Data Engineering"
  | "Enterprise Engineering"
  | "Research";

export const areas: Area[] = [
  "GenAI & LLMs",
  "AI & ML",
  "Cloud & Serverless",
  "Data Engineering",
  "Enterprise Engineering",
  "Research",
];

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  kind: "Freelance" | "Full-time";
  meta: string;
  areas: Area[];
  summary: string;
  work: string[];
  stack: string[];
};

function engagement(slug: string) {
  const found = engagements.find((item) => item.slug === slug);

  if (!found) {
    throw new Error(`Unknown engagement: ${slug}`);
  }

  return found;
}

function role(slug: string) {
  const found = roles.find((item) => item.slug === slug);

  if (!found) {
    throw new Error(`Unknown role: ${slug}`);
  }

  return found;
}

const amazon = engagement("amazon");
const kbcData = engagement("kbc-data");
const ontoforce = engagement("ontoforce");
const kbcKate = engagement("kbc-kate");

const jpmorgan = role("jpmorgan");
const rakuten = role("rakuten");
const accenture = role("accenture");
const mphasis = role("mphasis");
const drdo = role("drdo");

export const caseStudies: CaseStudy[] = [
  {
    slug: "ontoforce-disqover-assistant",
    client: ontoforce.client,
    title: "DISQOVER Assistant — an LLM research assistant for life sciences",
    kind: "Freelance",
    meta: `${ontoforce.role} · ${ontoforce.location}`,
    areas: ["GenAI & LLMs", "Data Engineering"],
    summary: ontoforce.summary,
    work: ontoforce.highlights,
    stack: ontoforce.stack,
  },
  {
    slug: "amazon-robotics-ai-platforms",
    client: amazon.client,
    title: "Serverless and AI platforms for robotics operations",
    kind: "Freelance",
    meta: `${amazon.role} · ${amazon.location}`,
    areas: ["Cloud & Serverless", "AI & ML"],
    summary: amazon.summary,
    work: amazon.highlights,
    stack: amazon.stack,
  },
  {
    slug: "kbc-kate-ai-chatbot",
    client: kbcKate.client,
    title: "Kate — enterprise AI chatbot for banking",
    kind: "Freelance",
    meta: `${kbcKate.role} · ${kbcKate.location}`,
    areas: ["GenAI & LLMs", "AI & ML", "Cloud & Serverless"],
    summary: kbcKate.summary,
    work: kbcKate.highlights,
    stack: kbcKate.stack,
  },
  {
    slug: "kbc-napp-data-pipelines",
    client: kbcData.client,
    title: "NAPP batch processing — AI data pipelines from Azure to AWS",
    kind: "Freelance",
    meta: `${kbcData.role} · ${kbcData.location}`,
    areas: ["Data Engineering", "Cloud & Serverless", "GenAI & LLMs"],
    summary: kbcData.summary,
    work: kbcData.highlights,
    stack: kbcData.stack,
  },
  {
    slug: "jpmorgan-almond-risk-platform",
    client: "JPMorgan Chase",
    title: "ALMOND — interest-rate-risk platform and engineering uplift",
    kind: "Full-time",
    meta: `${jpmorgan.role} · ${jpmorgan.location} · ${jpmorgan.period}`,
    areas: ["Enterprise Engineering", "Cloud & Serverless"],
    summary: jpmorgan.summary,
    work: jpmorgan.highlights,
    stack: ["Python", "Flask", "Kafka", "Athena", "Jules CI/CD", "AWS"],
  },
  {
    slug: "rakuten-imageorigin",
    client: "Rakuten",
    title: "ImageOrigin — serverless image API for video platforms",
    kind: "Full-time",
    meta: `${rakuten.role} · ${rakuten.location} · ${rakuten.period}`,
    areas: ["Cloud & Serverless"],
    summary: rakuten.summary,
    work: rakuten.highlights,
    stack: ["Python", "AWS Lambda", "API Gateway", "DynamoDB", "Graylog", "Elasticsearch", "MongoDB", "Docker"],
  },
  {
    slug: "bank-of-america-qztest",
    client: "Accenture / Bank of America",
    title: "QzTest UI — test automation for 100+ banking applications",
    kind: "Full-time",
    meta: `${accenture.role} · ${accenture.location} · ${accenture.period}`,
    areas: ["Enterprise Engineering"],
    summary: accenture.summary,
    work: accenture.highlights,
    stack: ["Python", "Quartz", "Robot Framework"],
  },
  {
    slug: "hp-server-automation",
    client: "Hewlett-Packard (via Mphasis)",
    title: "HP Server Automation — Solar web extensions and compliance content",
    kind: "Full-time",
    meta: `${mphasis.role} · ${mphasis.location} · ${mphasis.period}`,
    areas: ["Enterprise Engineering"],
    summary: mphasis.summary,
    work: mphasis.highlights,
    stack: ["Python", "Flask", "AJAX", "HP Server Automation"],
  },
  {
    slug: "drdo-network-security-ml",
    client: "DIAT – DRDO",
    title: "Machine learning for wireless network security",
    kind: "Full-time",
    meta: `${drdo.role} · ${drdo.location} · ${drdo.period}`,
    areas: ["Research", "AI & ML"],
    summary: drdo.summary,
    work: drdo.highlights,
    stack: ["Snort", "Kismet", "NetStumbler", "Wavelets", "Grey theory", "Genetic algorithms"],
  },
];

// Shorter freelance engagements — listed on /work without a detail page.
export const otherEngagements = engagements
  .filter((item) => ["ing", "imec", "lopos"].includes(item.slug))
  .map((item) => ({
    client: item.client,
    summary: item.summary,
    stack: item.stack,
  }));

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
