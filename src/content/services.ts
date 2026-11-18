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
    slug: "amazon-robotics-ai-platforms",
    title: "Serverless and AI platforms for robotics operations",
    text:
      "AWS serverless systems, CDK pipelines, the SLAM/URL labelling platforms, Akofa AI defect detection on SageMaker and multi-site Sprocket migrations.",
    tags: ["AWS", "Python", "SageMaker", "CDK"],
  },
  {
    client: "Ontoforce",
    slug: "ontoforce-disqover-assistant",
    title: "DISQOVER Assistant — LLM research assistant for life sciences",
    text:
      "Natural-language querying, summarisation and semantic search over clinical trials and publications, used by global pharma teams.",
    tags: ["LLMs", "Azure OpenAI", "Milvus", "Solr"],
  },
  {
    client: "KBC Bank",
    slug: "kbc-kate-ai-chatbot",
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

export const engagementModels = [
  {
    title: "Advisory",
    text:
      "AI strategy sessions, use-case prioritisation, architecture reviews and roadmaps — as a short engagement or an ongoing advisor.",
  },
  {
    title: "Project delivery",
    text:
      "I design and build a defined AI, GenAI or cloud solution end to end, and hand it over cleanly to your team.",
  },
  {
    title: "Embedded expert",
    text:
      "I join your team as a senior AI, Python or cloud engineer or architect — the way I work today with enterprise clients in Belgium.",
  },
  {
    title: "Workshops & training",
    text:
      "Hands-on sessions for leaders and engineers on practical AI, GenAI, Python and cloud.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    text: "Understand the business problem, the data and the constraints — and where AI genuinely helps.",
  },
  {
    title: "Design",
    text: "Choose the approach, models and architecture, with a clear plan and success criteria.",
  },
  {
    title: "Build",
    text: "Deliver working software in short iterations — tested, deployed and observable.",
  },
  {
    title: "Hand over",
    text: "Documentation, CI/CD and knowledge transfer so your team owns what we built.",
  },
];

export const skillGroups = [
  {
    title: "GenAI & agents",
    items: ["LLMs", "RAG", "AI agents", "MCP", "LangChain", "LangGraph", "OpenAI", "Azure OpenAI", "AWS Bedrock", "Rasa", "Prompt engineering", "Semantic search", "Vector DBs (Milvus)"],
  },
  {
    title: "AI & machine learning",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer vision", "MLflow", "Kubeflow", "SageMaker", "Azure ML"],
  },
  {
    title: "Cloud",
    items: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "ECR", "EKS", "AWS CDK", "CloudFormation", "Azure", "Cosmos DB"],
  },
  {
    title: "Data engineering",
    items: ["Apache Airflow", "PySpark", "Pandas", "Polars", "Data lakes", "Ingestion pipelines", "Kafka", "Solr"],
  },
  {
    title: "Backend & languages",
    items: ["Python", "FastAPI", "Flask", "Django", "Java", "C++", "REST APIs", "Microservices", "Event-driven"],
  },
  {
    title: "DevOps & platforms",
    items: ["Docker", "Kubernetes", "Helm", "OpenShift", "Terraform", "Jenkins / Groovy", "GitHub Actions", "ArgoCD"],
  },
];

export const industries = [
  "Banking & finance",
  "Retail & e-commerce",
  "Healthcare & life sciences",
  "Energy",
  "Robotics, IoT & edge AI",
  "Network security & defence research",
];

export const rolesOffered = [
  "AI expert / AI architect",
  "Python specialist",
  "Cloud engineer (AWS, Azure)",
  "Data scientist",
  "Data engineer",
  "DevOps engineer",
  "Solution architect",
  "Scrum master",
  "Corporate trainer",
];

export const faqs = [
  {
    question: "Where are you based, and do you work remotely?",
    answer:
      "I'm based in Belgium. I work remotely across Europe and worldwide, and onsite in Belgium when the work needs it.",
  },
  {
    question: "What kind of roles can you take on?",
    answer:
      "Advisor, architect or hands-on engineer — AI expert, Python specialist, cloud engineer, data scientist, data engineer, DevOps, solution architect, scrum master or corporate trainer.",
  },
  {
    question: "How do engagements usually work?",
    answer:
      "As a freelance contract — on a daily rate for advisory and embedded work, or a fixed scope for well-defined projects and workshops. We agree the shape on a first call.",
  },
  {
    question: "Which languages do you work in?",
    answer:
      "English professionally, with Hindi as my native language, intermediate Dutch (A2) and basic French (A1).",
  },
  {
    question: "Can you start quickly?",
    answer:
      "Share your timeline on a discovery call and I'll tell you honestly what is possible.",
  },
];
