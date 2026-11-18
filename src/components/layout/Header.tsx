import Link from "next/link";
import { CalendarDays } from "lucide-react";

import MobileMenu from "@/components/layout/MobileMenu";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import { ctas, navItems, site } from "@/content/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link
          href="/"
          className="brand"
        >
          <span className="brand-name">
            {site.name}
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
            href={ctas.bookCall.href}
            className="header-cta"
          >
            <CalendarDays size={16} />
            <span>{ctas.bookCall.label}</span>
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
