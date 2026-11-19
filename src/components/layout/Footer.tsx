import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

import SocialLinks from "@/components/layout/SocialLinks";
import {
  ctas,
  footerColumns,
  site,
} from "@/content/site";


const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-cta">
          <div>
            <div className="section-eyebrow">
              {site.availability}
            </div>

            <h2 className="footer-cta-title">
              Have an AI project in mind?{" "}
              <span>Let&apos;s talk.</span>
            </h2>
          </div>

          <Link
            href={ctas.bookCall.href}
            className="action-primary"
          >
            {ctas.bookCall.longLabel}
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link
              href="/"
              className="footer-name"
            >
              {site.name}
            </Link>

            <p className="footer-role">
              {site.role}
              <br />
              {site.skills}
            </p>

            <a
              href={`mailto:${site.email}`}
              className="footer-contact"
            >
              <Mail size={16} />
              {site.email}
            </a>

            <div className="footer-contact">
              <MapPin size={16} />
              {site.location.label}
            </div>

            <SocialLinks compact withCv />
          </div>

          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="footer-column"
            >
              <div className="footer-column-title">
                {column.title}
              </div>

              {column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div>
            © {year} {site.name}. All rights reserved. ·{" "}
            <Link
              href="/privacy/"
              className="footer-link"
            >
              Privacy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
