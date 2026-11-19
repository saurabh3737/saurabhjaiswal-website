import ClientLogo from "@/components/home/ClientLogo";
import { clients } from "@/content/career";

export default function ClientStrip() {
  return (
    <section
      className="home-clients"
      aria-label="Organisations I have worked with"
    >
      <div className="site-shell">
        <p className="home-clients-label">
          15+ years building with and for
        </p>

        <ul className="client-tiles">
          {clients.map((client) => (
            <li key={client.name} className="client-tile">
              <ClientLogo name={client.name} mark={client.mark} logo={client.logo} />
              <strong>{client.name}</strong>
              <span className="client-sector">{client.sector}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
