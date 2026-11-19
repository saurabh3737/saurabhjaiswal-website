// Career data — source: CV (8 Oct 2026), Annexure (8 Oct 2026), CV (12 Mar 2025).
// Freelance engagements are intentionally undated (umbrella period only), as in the CV.

export type Engagement = {
  slug: string;
  client: string;
  location: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type Role = {
  slug: string;
  org: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const freelance = {
  title: "Freelance AI, Python & Cloud Consultant",
  location: "Belgium",
  period: "Apr 2022 – Present",
  summary:
    "Delivering AI, Python and cloud-native solutions for enterprise clients across banking, technology, life sciences and industrial domains.",
};

export const engagements: Engagement[] = [
  {
    slug: "amazon",
    client: "Amazon",
    location: "Hamme, Belgium",
    role: "Python AI AWS Software Engineer",
    summary:
      "Serverless systems, CDK pipelines, SLAM/URL, Akofa AI imaging, Slamulator and Sprocket migrations.",
    highlights: [
      "Designed and implemented serverless architectures with AWS Lambda, API Gateway and DynamoDB",
      "Built and managed infrastructure with AWS CDK (IaC) across environments",
      "Contributed to SLAM & URL (Universal Robotic Labeller) platforms — AWS account setup, network configuration and VLAN enhancements",
      "Built the Slamulator web application (Node.js frontend, Python middleware, Java emulator with YAML rules) as one deployable system",
      "Worked on the Akofa AI defect-detection system (SageMaker) — onboarding, IAM roles, security review and CDK pipelines",
      "Led Sprocket migrations across sites (ANR10, BCN4 onsite; ORF3 and others remotely)",
      "Packaged Docker/ECR deployments, published on Catalyst App Store, and designed dev/release/prod CI/CD pipelines",
    ],
    stack: ["Python", "Java", "Node.js", "AWS Lambda", "API Gateway", "DynamoDB", "SageMaker", "AWS CDK", "CloudFormation", "Docker", "ECR"],
  },
  {
    slug: "kbc-data",
    client: "KBC Bank",
    location: "Brussels, Belgium",
    role: "Python AI AWS Data Engineer",
    summary:
      "NAPP batch processing and advice generation — data pipelines and workflows across Azure and AWS.",
    highlights: [
      "Migrated ADAM scripts/models to AWS Bedrock and compared results as part of the NFR team",
      "Set up batch processing pipelines from NAPP on Azure to CFO/CRO Edison on AWS",
      "Developed Airflow pipelines for Export Split, Score Risk, Transform and Retrieve Advices workflows",
      "Designed data ingestion workflows into Datalakes and Oktopuss",
      "Built Groovy-based Jenkins CI/CD pipelines for Python build, test, Docker and AWS deployment",
    ],
    stack: ["Python", "Apache Airflow", "PySpark", "Pandas", "Polars", "AWS Bedrock", "Azure", "Terraform", "Jenkins", "Helm", "OpenShift"],
  },
  {
    slug: "ontoforce",
    client: "Ontoforce",
    location: "Ghent, Belgium",
    role: "Python AI Developer",
    summary:
      "DISQOVER Assistant — an LLM-based AI assistant for life-sciences research, used by clients such as Johnson & Johnson and AstraZeneca.",
    highlights: [
      "Built an AI assistant on top of DISQOVER for research on clinical trials and medical publications",
      "Generates DQ queries from natural-language input and summarises unstructured text",
      "Built ingestion pipelines for clinical-trial data, publications and research content",
      "Embedding, vectorisation and indexing in Solr and Milvus for semantic search",
      "Benchmarking and prompt engineering for answer quality",
    ],
    stack: ["Python", "OpenAI", "Azure OpenAI", "Flask", "Milvus", "Solr", "PostgreSQL", "Kubernetes", "Docker", "Helm"],
  },
  {
    slug: "kbc-kate",
    client: "KBC Bank",
    location: "Leuven, Belgium",
    role: "Python AI AWS Expert",
    summary:
      "Kate — KBC's enterprise AI chatbot platform, handling customer conversations by text and voice.",
    highlights: [
      "Designed, developed, deployed and maintained Kate using Python, NLP, machine learning and AWS",
      "Built conversational AI capabilities with Rasa, TensorFlow and PyTorch",
      "Integrated the chatbot with enterprise platforms and APIs across channels",
      "Owned the full lifecycle — architecture, implementation, deployment, monitoring, demos and stakeholder training",
    ],
    stack: ["Python", "Java", "Rasa", "TensorFlow", "PyTorch", "AWS", "Kubernetes", "Terraform", "DynamoDB", "MongoDB", "PostgreSQL"],
  },
  {
    slug: "ing",
    client: "ING Bank",
    location: "Belgium",
    role: "Freelance Python & Cloud Consultant",
    summary: "Business loan platform built with Python, Flask and Azure.",
    highlights: ["Business loan platform (Python, Flask, Azure)"],
    stack: ["Python", "Flask", "Azure"],
  },
  {
    slug: "imec",
    client: "IMEC",
    location: "Belgium",
    role: "Freelance Full-stack Python Consultant",
    summary:
      "Full-stack semiconductor analytics with Python, Azure, Cosmos DB and Docker.",
    highlights: ["Full-stack semiconductor analytics (Python, Azure, Cosmos DB, Docker)"],
    stack: ["Python", "Azure", "Cosmos DB", "Docker"],
  },
  {
    slug: "lopos",
    client: "Lopos",
    location: "Belgium",
    role: "Freelance AI Consultant",
    summary: "Edge AI system for industrial safety and IoT analytics.",
    highlights: ["Edge AI system for industrial safety & IoT analytics"],
    stack: ["Edge AI", "IoT analytics"],
  },
];

export const roles: Role[] = [
  {
    slug: "jpmorgan",
    org: "JPMorgan Chase & Co.",
    location: "Bangalore, India",
    role: "Assistant Vice President",
    period: "Aug 2018 – Apr 2022",
    summary:
      "Technology leadership on ALMOND (Asset Liability on Demand) and the CDO office — architecture, delivery and engineering standards at enterprise scale.",
    highlights: [
      "Architected and developed features, components and APIs of ALMOND for interest-rate-risk calculation (BPV, EOD, cash-flow models)",
      "Led the Python 3 migration for 3 LOBs — 4,000+ unit tests, 7,000 Bob jobs and 500+ scripts on Athena",
      "Led the CDO metrics workstream across 151 applications to improve 6 speed macro metrics at CTO and CTO-1 level",
      "Led the SDLC uplift — test coverage from 18% to 70% on 80,000 lines of code, CI/CD on Jules with toll gates",
      "POCs: Kafka replacing QPID; migration design of ALMOND engines from Athena to AWS",
      "Led the Bengaluru Python Ignite community and ran corporate training on Python and Flask; team of 20",
    ],
  },
  {
    slug: "rakuten",
    org: "Rakuten",
    location: "Bangalore / Singapore",
    role: "Technical Lead",
    period: "Feb 2017 – Apr 2018",
    summary:
      "Serverless image APIs and log-management platforms on AWS; onsite in Singapore for Viki integration.",
    highlights: [
      "Built ImageOrigin — a serverless image-transformation API (AWS Lambda, API Gateway, DynamoDB) serving Viki, Wauki and Showtime",
      "Built a log-management system with Graylog, Elasticsearch, MongoDB, Docker and ELK on AWS",
      "Winner — Rakuten Blockchain Hackathon",
    ],
  },
  {
    slug: "accenture",
    org: "Accenture / Bank of America",
    location: "Hyderabad, India",
    role: "Team Lead / Sr. Consultant",
    period: "Dec 2014 – Jan 2017",
    summary:
      "QzTest UI — a Python test-automation tool on the Quartz framework covering 100+ banking applications.",
    highlights: [
      "Designed and developed QzTest UI for Bank of America — test automation for 100+ banking applications",
      "Team of 15; Python, Quartz and Robot Framework",
    ],
  },
  {
    slug: "mphasis",
    org: "Mphasis (onsite at Hewlett-Packard)",
    location: "Bangalore, India",
    role: "Sr. Software Engineer",
    period: "May 2013 – Dec 2014",
    summary:
      "HP Server Automation — NextGen Solar web extensions and security & compliance content.",
    highlights: [
      "Built NextGen Solar web extensions (Flask, AJAX, Python) for HP Server Automation, client HP Houston",
      "Real-time server health and mesh monitoring UI",
      "Security & compliance audit and remediation content (DISA, CIS, SOX) for HPSA",
    ],
  },
  {
    slug: "hitech",
    org: "Hi-Tech Outsourcing Services",
    location: "Ahmedabad, India",
    role: "Sr. Software Engineer",
    period: "May 2012 – May 2013",
    summary:
      "IBO Administration Firewall and EnergyMetrics energy-simulation tools.",
    highlights: [
      "Built a Linux router/firewall with a web GUI for a Norwegian client (Python, C++, iptables)",
      "EnergyMetrics — energy-analysis add-ons on Blender, OpenFOAM, EnergyPlus and OpenStudio for a US client",
      "Green IT and energy-modelling research",
    ],
  },
  {
    slug: "musikaar",
    org: "Musikaar",
    location: "Ahmedabad, India",
    role: "Software Developer",
    period: "Nov 2011 – May 2012",
    summary: "Test automation and vulnerability assessment.",
    highlights: [
      "Selenium automation suites in Python",
      "NASL vulnerability scripts with Nessus, mapped by CVE",
    ],
  },
  {
    slug: "tridiagonal",
    org: "Tridiagonal Solutions",
    location: "Pune, India",
    role: "Project Engineer",
    period: "May 2011 – Oct 2011",
    summary: "CFD tooling — Python RSS feeder and OpenFOAM Windows port.",
    highlights: [
      "Cross-compiled OpenFOAM 1.7.0 for Windows 32/64-bit with parallel support",
      "Python RSS feeder with GUI for SmartFoam CFD reports",
    ],
  },
  {
    slug: "drdo",
    org: "DIAT – DRDO",
    location: "Pune, India",
    role: "Researcher / Junior Scientist (JRF)",
    period: "Sep 2008 – Sep 2009",
    summary:
      "Wireless network security and machine learning for threat prediction.",
    highlights: [
      "Wireless security research — IDS/IPS experiments with Snort, Kismet and NetStumbler",
      "Proposed a combined wavelet + grey-theory model with genetic-algorithm threat assessment for network security",
      "Awarded the Junior Research Fellowship (JRF) by DIAT-DRDO, 2008",
    ],
  },
];

export const education = [
  {
    degree: "M.Tech. — Modelling & Simulation",
    school: "Defence Institute of Advanced Technology (DIAT-DRDO), Pune",
    period: "2009 – 2011",
    note: "Topped the final semester (88.8%) with best project dissertation",
  },
  {
    degree: "B.E. — Computer Science & Engineering",
    school: "NRI Institute of Information Science & Technology (RGPV), Bhopal",
    period: "2004 – 2008",
    note: "",
  },
];

export const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "Certified ScrumMaster® (CSM)",
  "Certified Rasa Developer",
  "ITIL® Service Management Foundation",
  "Certified Information Security Expert (CISE) Level-1",
  "DELF A1 — French",
  "CLT A2 — Dutch",
  "CFA Level I — Candidate",
];

// Certificates the old site already hosted — same URLs.
export const certificateLinks: Record<string, string> = {
  "AWS Certified Solutions Architect – Associate": "/personal/AWS_SolutionArchitect.pdf",
  "Certified ScrumMaster® (CSM)": "/personal/Saurabh%20Jaiswal-ScrumAlliance_CSM_Certificate.pdf",
  "ITIL® Service Management Foundation": "/personal/ITIL_Certification.pdf",
};

export const achievements = [
  "Author — AI for Real Work: How to Think, Decide, and Build with AI",
  "Speaker — PyCon India 2016 (New Delhi)",
  "Speaker — TSAIR Paris 2026",
  "Winner — Rakuten Blockchain Hackathon",
  "Junior Research Fellowship (JRF) — DRDO",
  "Open-source contributor — Python Software Foundation",
  "Gold Badge (5★) — HackerRank Python",
  "Technical judge (2020) and team mentor (2021) — Code for Good, JPMorgan Chase",
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native" },
  { name: "Dutch", level: "Intermediate (A2)" },
  { name: "French", level: "Basic (A1)" },
  { name: "Gujarati", level: "Intermediate" },
  { name: "Marathi", level: "Intermediate" },
];

// Client tiles on the home page. Each tile shows the official logo from
// public/images/companies/<file> when that file exists, otherwise the monogram.
// Use .png instead of .svg? Change the extension here.
export const clients: {
  name: string;
  mark: string;
  sector: string;
  logo?: string;
}[] = [
  { name: "Amazon", mark: "A", sector: "Robotics & cloud", logo: "/images/companies/amazon.svg" },
  { name: "KBC Bank", mark: "KBC", sector: "Banking", logo: "/images/companies/kbc.svg" },
  { name: "ING Bank", mark: "ING", sector: "Banking", logo: "/images/companies/ing.svg" },
  { name: "JPMorgan Chase", mark: "JPM", sector: "Banking", logo: "/images/companies/jpmorgan.svg" },
  { name: "Ontoforce", mark: "O", sector: "Life sciences", logo: "/images/companies/ontoforce.svg" },
  { name: "IMEC", mark: "imec", sector: "Semiconductor R&D", logo: "/images/companies/imec.svg" },
  { name: "Lopos", mark: "L", sector: "Edge AI & IoT", logo: "/images/companies/lopos.svg" },
  { name: "Rakuten", mark: "R", sector: "E-commerce & media", logo: "/images/companies/rakuten.svg" },
  { name: "Accenture", mark: "Acc", sector: "Consulting", logo: "/images/companies/accenture.svg" },
  { name: "Bank of America", mark: "BofA", sector: "Banking", logo: "/images/companies/bank-of-america.svg" },
  { name: "Hewlett-Packard", mark: "HP", sector: "Technology", logo: "/images/companies/hp.svg" },
  { name: "DRDO", mark: "DRDO", sector: "Defence research", logo: "/images/companies/drdo.svg" },
];

export const clientNames = clients.map((client) => client.name);

// Case-study pages for engagements/roles that have one.
export const caseStudyFor: Record<string, string> = {
  amazon: "amazon-robotics-ai-platforms",
  "kbc-data": "kbc-napp-data-pipelines",
  ontoforce: "ontoforce-disqover-assistant",
  "kbc-kate": "kbc-kate-ai-chatbot",
  jpmorgan: "jpmorgan-almond-risk-platform",
  rakuten: "rakuten-imageorigin",
  accenture: "bank-of-america-qztest",
  mphasis: "hp-server-automation",
  drdo: "drdo-network-security-ml",
};

export const beyondWork = [
  {
    title: "Volunteering",
    items: [
      "Mahita — education for women",
      "GoodWorks — building houses for the poor",
      "Skill development — English and soft skills",
    ],
  },
  {
    title: "Hosting & commentary",
    items: [
      "Anchor and host — annual and Christmas events at Accenture",
      "Cricket commentary — Hitech Premier Cricket League, BofA Premier League",
      "Cultural events, colleges and organisations",
    ],
  },
  {
    title: "Sport, music & reading",
    items: [
      "Inter-college table tennis champion (ISTE) — still plays",
      "Playing guitar and listening to melodic music",
      "Reading — favourite: You Can Win by Shiv Khera",
    ],
  },
  {
    title: "Food & languages",
    items: [
      "Foodie who loves trying new cuisines",
      "Favourite dish: Shahi Paneer — and he cooks it too",
      "Has explored around 18 languages; speaks English and Hindi, learning Dutch and French",
    ],
  },
  {
    title: "Early leadership",
    items: [
      "Top 5 all-round personality of M.P. — Global Leader Contest (Scratchmysoul.com)",
      "Chief coordinator — state-level event NOVIZIO-2K8",
    ],
  },
];

// Personal story — from Saurabh (no date of birth on purpose).
export const personal = {
  roots:
    "Family roots in Jaipur, Rajasthan. Born in Kanpur, raised in Bhopal — the City of Lakes.",
  journey: [
    { city: "Jaipur", region: "Rajasthan", note: "Family roots" },
    { city: "Kanpur", region: "Uttar Pradesh", note: "Born" },
    { city: "Bhopal", region: "Madhya Pradesh", note: "Grew up · B.E. Computer Science" },
    { city: "Pune", region: "Maharashtra", note: "DRDO research · M.Tech. at DIAT · first jobs" },
    { city: "Ahmedabad", region: "2 years", note: "Software engineering" },
    { city: "Bangalore", region: "2 years", note: "Hewlett-Packard (via Mphasis)" },
    { city: "Hyderabad", region: "2 years", note: "Accenture · Bank of America" },
    { city: "Singapore", region: "Onsite", note: "Rakuten Viki" },
    { city: "Bangalore", region: "4 years", note: "JPMorgan Chase — AVP" },
    { city: "Belgium", region: "Since 2022", note: "Freelance AI consulting · AIMates" },
  ],
  motto: "Learn, Share, and Help.",
  identity:
    "A community builder at heart — energised by connecting with people, learning from them and sharing ideas.",
};
