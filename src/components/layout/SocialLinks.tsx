"use client";

import { FileDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { site } from "@/content/site";

// Profile buttons: brand icon from public/images/social/<id>.svg + the name.
// If the icon file is missing, only the name shows.
export const socialLinks = [
  { id: "linkedin", label: "LinkedIn", href: site.social.linkedin, logo: "/images/social/linkedin.svg" },
  { id: "github", label: "GitHub", href: site.social.github, logo: "/images/social/github.svg" },
  { id: "x", label: "X", href: site.social.x, logo: "/images/social/x.svg" },
] as const;

function SocialLogo({ label, logo }: { label: string; logo: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;

    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (failed) {
    return <>{label}</>;
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={ref} src={logo} alt="" className="social-logo" onError={() => setFailed(true)} />
      {label}
    </>
  );
}

export default function SocialLinks({
  compact = false,
  withCv = false,
}: {
  compact?: boolean;
  withCv?: boolean;
}) {
  return (
    <div className={compact ? "social-links social-links--compact" : "social-links"}>
      {withCv ? (
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener"
          className="social-btn social-btn--cv"
        >
          <FileDown size={15} />
          Download CV
        </a>
      ) : null}

      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-btn social-btn--${link.id}`}
          aria-label={link.label}
        >
          <SocialLogo label={link.label} logo={link.logo} />
        </a>
      ))}
    </div>
  );
}
