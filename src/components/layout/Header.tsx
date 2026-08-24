import Link from "next/link";
import { Sparkles } from "lucide-react";

import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Speaking",
    href: "/speaking",
  },
  {
    label: "Writing",
    href: "/writing",
  },
  {
    label: "Book",
    href: "/book",
  },
  {
    label: "Ventures",
    href: "/ventures",
  },
  {
    label: "AIMates",
    href: "/aimates",
  },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link
          href="/"
          className="brand"
        >
          <span className="brand-name">
            Saurabh Jaiswal
          </span>
        </Link>

        <nav
          className="main-nav"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeSwitcher />

          <Link
            href="/ask"
            className="ask-ai-button"
          >
            <span>Ask Saurabh AI</span>
            <Sparkles size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}