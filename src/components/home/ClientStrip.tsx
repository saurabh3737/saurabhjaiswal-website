import ClientLogo from "@/components/home/ClientLogo";
import { clients } from "@/content/career";

export default function ClientStrip() {
  return (
    <section
      className="home-clients"
      aria-label="Organisations I have worked with"
    >
      <div className="site-shell">
        <div className="clients-head">
          <div className="section-eyebrow">Trusted by</div>

          <h2 className="section-title clients-title">
            15+ years building with{" "}
            <span className="section-accent">global teams.</span>
          </h2>

          <p className="clients-intro">
            Banks, big tech, research labs and consultancies — as a freelance
            consultant and in full-time roles.
          </p>
        </div>

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
