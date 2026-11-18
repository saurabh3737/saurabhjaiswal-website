import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How saurabhjaiswal.com handles your data: no tracking cookies, no analytics, and contact messages delivered only to my inbox.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <main className="home-section">
      <div className="site-shell privacy">
        <div className="section-eyebrow">Privacy</div>

        <h1 className="section-title">
          Your data,{" "}
          <span className="section-accent">kept simple.</span>
        </h1>

        <p className="section-intro">
          This website is run by {site.name}, based in
          Belgium. It is built to collect as little
          personal data as possible.
        </p>

        <h2>What this site collects</h2>
        <p>
          No tracking cookies, no analytics and no
          advertising. The site remembers your light or
          dark theme choice in your own browser (local
          storage). That setting never leaves your device.
        </p>

        <h2>Contact form</h2>
        <p>
          When you send the contact form, your name, email,
          company (if given) and message are delivered to my
          inbox ({site.email}) through Resend, an email delivery
          service. The website itself does not store your
          message. I only use what you send me to reply to you,
          and I do not share it with anyone.
        </p>

        <h2>Hosting</h2>
        <p>
          The site is hosted on Vercel. Like any web host, it
          processes standard request data such as IP addresses
          to deliver pages and protect against abuse.
        </p>

        <h2>Your rights</h2>
        <p>
          Under the GDPR you can ask me to see, correct or
          delete any personal data you have sent me. Email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
          and I will handle it.
        </p>

        <h2>External links</h2>
        <p>
          Links to LinkedIn, GitHub, YouTube, AIMates and
          other sites are governed by their own privacy
          policies.
        </p>
      </div>
    </main>
  );
}
