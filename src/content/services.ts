// Consulting offer — used on Home ("How I help") and /work-with-me (patch 03).

export type ServiceId =
  | "strategy"
  | "genai"
  | "engineering"
  | "training";

export const services: {
  id: ServiceId;
  title: string;
  summary: string;
  points: string[];
}[] = [
  {
    id: "strategy",
    title: "AI Strategy & Advisory",
    summary:
      "Decide where AI really pays off — before money and months go into the wrong thing.",
    points: [
      "AI opportunity and use-case prioritisation",
      "Build vs. buy, model and platform choices",
      "Roadmaps, governance and responsible AI",
    ],
  },
  {
    id: "genai",
    title: "GenAI, LLMs & AI Agents",
    summary:
      "Assistants, RAG and agents that work on real data — from prototype to production.",
    points: [
      "LLM assistants, RAG and semantic search",
      "AI agents, MCP and workflow automation",
      "Evaluation, prompt engineering and guardrails",
    ],
  },
  {
    id: "engineering",
    title: "AI & Cloud Engineering",
    summary:
      "Hands-on architecture and delivery with Python, AWS and Azure.",
    points: [
      "Serverless and microservice architectures",
      "Data pipelines, MLOps and CI/CD",
      "Infrastructure as code (CDK, Terraform)",
    ],
  },
  {
    id: "training",
    title: "Training & Workshops",
    summary:
      "Practical AI and Python sessions for leaders and engineering teams.",
    points: [
      "AI for leaders and decision-makers",
      "Python, GenAI and cloud for engineers",
      "Delivered for DRDO, JPMorgan Chase, Accenture and more",
    ],
  },
];

export const featuredWork = [
  {
    client: "Amazon",
    title: "Serverless and AI platforms for robotics operations",
    text:
      "AWS serverless systems, CDK pipelines, the SLAM/URL labelling platforms, Akofa AI defect detection on SageMaker and multi-site Sprocket migrations.",
    tags: ["AWS", "Python", "SageMaker", "CDK"],
  },
  {
    client: "Ontoforce",
    title: "DISQOVER Assistant — LLM research assistant for life sciences",
    text:
      "Natural-language querying, summarisation and semantic search over clinical trials and publications, used by global pharma teams.",
    tags: ["LLMs", "Azure OpenAI", "Milvus", "Solr"],
  },
  {
    client: "KBC Bank",
    title: "Kate — enterprise AI chatbot for banking",
    text:
      "End-to-end architecture, delivery and operation of KBC's AI assistant across text and voice channels.",
    tags: ["Rasa", "NLP", "AWS", "Kubernetes"],
  },
];

export const credentials = [
  "AWS Certified Solutions Architect",
  "Certified ScrumMaster®",
  "Certified Rasa Developer",
  "Speaker — PyCon India",
  "Speaker — TSAIR Paris 2026",
  "PSF open-source contributor",
];

export const trainingClients = [
  "DRDO",
  "JPMorgan Chase",
  "Accenture",
  "Mphasis",
  "Johnson Controls",
  "CGI",
  "Société Générale",
  "Birlasoft",
  "Valtech",
  "Directi",
  "Zeta",
];
