import ClientLogo from "@/components/home/ClientLogo";
import { clients } from "@/content/career";

// Hero panel for /work — the organisations behind the case studies.
export default function ClientsPanel() {
  return (
    <div className="experience-hero-panel">
      <div className="experience-panel-kicker">Built with and for</div>

      <ul className="hero-client-grid">
        {clients.map((client) => (
          <li key={client.name} title={client.name}>
            <ClientLogo name={client.name} mark={client.mark} logo={client.logo} />
          </li>
        ))}
      </ul>

      <div className="experience-panel-footer">
        <span className="experience-panel-number">9</span>

        <span className="experience-panel-text">
          case studies across GenAI, cloud, data, enterprise engineering and
          research
        </span>
      </div>
    </div>
  );
}
