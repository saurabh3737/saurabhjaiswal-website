import { clientNames } from "@/content/career";

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

        <ul className="home-clients-list">
          {clientNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
