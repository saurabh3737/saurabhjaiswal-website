import { engagements, roles } from "@/content/career";
import { caseStudies } from "@/content/projects";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const dynamic = "force-static";

// Plain-text summary for AI answer engines (llms.txt convention).
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.role} — ${site.skills}. ${site.description}`,
    "",
    "## Services",
    ...services.map(
      (service) =>
        `- [${service.title}](${site.url}/work-with-me/): ${service.summary}`,
    ),
    "",
    "## Key pages",
    `- [Work with me](${site.url}/work-with-me/): services, engagement models, pricing options, skills, FAQ`,
    `- [Case studies](${site.url}/work/): AI, GenAI, Python and cloud projects`,
    `- [Experience](${site.url}/experience/): full career record, education and certifications`,
    `- [Speaking](${site.url}/speaking/): talks, workshops and training`,
    `- [AIMates](${site.url}/aimates/): the practical AI ecosystem founded by ${site.name}`,
    `- [Book — AI for Real Work](${site.url}/book/): ${site.book.subtitle} (${site.book.published}, ${site.book.formats.join(", ")})`,
    `- [Writing](${site.url}/writing/): articles on AI and Python`,
    `- [Contact](${site.url}/contact/): consulting, AIMates partnerships, speaking`,
    "",
    "## Case studies",
    ...caseStudies.map(
      (study) =>
        `- [${study.client} — ${study.title}](${site.url}/work/${study.slug}/)`,
    ),
    "",
    "## Clients and employers",
    `- Freelance clients: ${engagements.map((item) => item.client).filter((v, i, a) => a.indexOf(v) === i).join(", ")}`,
    `- Full-time: ${roles.map((item) => `${item.org} (${item.role}, ${item.period})`).join("; ")}`,
    "",
    "## Elsewhere",
    `- LinkedIn: ${site.social.linkedin}`,
    `- GitHub: ${site.social.github}`,
    `- Book on Amazon: ${site.book.amazonUrl}`,
    `- AIMates: ${site.ventures.aimates}`,
    `- Pythonmates: ${site.ventures.pythonmates}`,
    `- Blog: ${site.ventures.blog}`,
    "",
    `Contact: ${site.email} · ${site.location.label}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
