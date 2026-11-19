// Architecture / flow diagrams for each case study.
// Built only from facts already in career.ts / projects.ts — no invented components.

export type DiagramStage = {
  label: string;
  nodes: string[];
};

export type Diagram = {
  caption: string;
  stages: DiagramStage[];
};

export const diagrams: Record<string, Diagram> = {
  "ontoforce-disqover-assistant": {
    caption: "From life-science content to answers researchers can trust",
    stages: [
      { label: "Sources", nodes: ["Clinical trials", "Medical publications", "Research content"] },
      { label: "Ingest & index", nodes: ["Ingestion pipelines", "Embeddings", "Milvus + Solr"] },
      { label: "AI assistant", nodes: ["OpenAI / Azure OpenAI", "DQ query generation", "Summarisation"] },
      { label: "Users", nodes: ["Life-science researchers", "Pharma clients"] },
    ],
  },
  "amazon-robotics-ai-platforms": {
    caption: "Infrastructure as code, serverless services and AI for robotics sites",
    stages: [
      { label: "Build & deploy", nodes: ["AWS CDK", "CI/CD pipelines", "Docker / ECR"] },
      { label: "Serverless", nodes: ["AWS Lambda", "API Gateway", "DynamoDB"] },
      { label: "AI", nodes: ["SageMaker", "Akofa defect detection"] },
      { label: "Operations", nodes: ["SLAM & URL", "Slamulator", "Sprocket migrations"] },
    ],
  },
  "kbc-kate-ai-chatbot": {
    caption: "Customer conversations by text and voice, end to end",
    stages: [
      { label: "Channels", nodes: ["Text", "Voice"] },
      { label: "Conversational AI", nodes: ["Rasa", "NLP / ML models", "TensorFlow · PyTorch"] },
      { label: "Platform", nodes: ["AWS", "Kubernetes", "Terraform"] },
      { label: "Enterprise", nodes: ["Bank APIs", "DynamoDB · MongoDB · PostgreSQL"] },
    ],
  },
  "kbc-napp-data-pipelines": {
    caption: "Batch advice generation flowing from Azure to AWS",
    stages: [
      { label: "Source", nodes: ["NAPP on Azure"] },
      { label: "Airflow pipelines", nodes: ["Export Split", "Score Risk", "Transform", "Retrieve Advices"] },
      { label: "AWS", nodes: ["CFO/CRO Edison", "AWS Bedrock models"] },
      { label: "Data", nodes: ["Datalakes", "Oktopuss"] },
    ],
  },
  "jpmorgan-almond-risk-platform": {
    caption: "Interest-rate-risk engines plus an engineering-quality uplift",
    stages: [
      { label: "Risk engines", nodes: ["ALMOND", "BPV · EOD · cash-flow models"] },
      { label: "Platform", nodes: ["Athena", "Python 3 migration (3 LOBs)"] },
      { label: "Quality", nodes: ["Coverage 18% → 70%", "Jules CI/CD toll gates"] },
      { label: "Next steps", nodes: ["Kafka POC", "AWS migration design"] },
    ],
  },
  "rakuten-imageorigin": {
    caption: "A serverless image-transformation API for video platforms",
    stages: [
      { label: "Clients", nodes: ["Viki", "Wauki", "Showtime"] },
      { label: "API", nodes: ["API Gateway"] },
      { label: "Compute", nodes: ["AWS Lambda", "Image transforms"] },
      { label: "Data & ops", nodes: ["DynamoDB", "ELK / Graylog logs"] },
    ],
  },
  "bank-of-america-qztest": {
    caption: "One test-automation tool for a whole banking portfolio",
    stages: [
      { label: "Users", nodes: ["Test teams"] },
      { label: "QzTest UI", nodes: ["Python", "Quartz framework"] },
      { label: "Automation", nodes: ["Robot Framework"] },
      { label: "Coverage", nodes: ["100+ banking applications"] },
    ],
  },
  "hp-server-automation": {
    caption: "Web extensions and compliance content for HP Server Automation",
    stages: [
      { label: "Operators", nodes: ["Server admins"] },
      { label: "Solar extensions", nodes: ["Flask", "AJAX", "Python"] },
      { label: "Monitoring", nodes: ["Server health", "Mesh monitoring UI"] },
      { label: "Compliance", nodes: ["DISA", "CIS", "SOX"] },
    ],
  },
  "drdo-network-security-ml": {
    caption: "Predicting and assessing threats in wireless networks",
    stages: [
      { label: "Capture", nodes: ["Snort", "Kismet", "NetStumbler"] },
      { label: "Model", nodes: ["Weighted model", "Wavelets"] },
      { label: "Predict", nodes: ["Grey theory"] },
      { label: "Assess", nodes: ["Genetic-algorithm threat assessment"] },
    ],
  },
};

export function getDiagram(slug: string) {
  return diagrams[slug];
}
