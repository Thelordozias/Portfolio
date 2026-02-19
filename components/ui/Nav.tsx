/**
 * components/ui/Nav.tsx
 *
 * Persistent navigation bar — rendered in app/layout.tsx.
 *
 * "use client" is required because:
 *  - We use usePathname() to highlight the active link
 *  - useRouter() for programmatic scroll-to-contact
 *
 * Design:
 *  - Fixed position, full width
 *  - Frosted glass effect (backdrop-blur)
 *  - Active link glows in accent color
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* Navigation links config */
const navLinks = [
  { href: "/",          label: "Home" },
  { href: "/projects",  label: "Projects" },
  { href: "/research",  label: "Research" },
];

export default function Nav() {
  const pathname = usePathname();

  /* Helper — is this link active? */
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
      style={{
        background: "rgba(8, 11, 16, 0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* ── Logo / Name ── */}
      <Link
        href="/"
        aria-label="Ozias Kafando — Home"
        className="font-serif text-xl tracking-tight text-white hover:text-accent transition-colors"
      >
        Ozias<span className="italic text-accent">.</span>
      </Link>

      {/* ── Nav Links ── */}
      <ul className="flex items-center gap-8 md:gap-10 list-none">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`
                font-mono text-xs tracking-widest uppercase transition-colors
                ${isActive(href) ? "text-accent" : "text-muted hover:text-white"}
              `}
            >
              {label}
            </Link>
          </li>
        ))}

        {/* Contact anchor — scrolls to #contact on home page */}
        <li>
          <a
            href="/#contact"
            className="font-mono text-xs tracking-widest uppercase text-muted hover:text-white transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
