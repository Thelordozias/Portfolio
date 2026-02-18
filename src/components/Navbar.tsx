"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personal } from "@/lib/data";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--border)] backdrop-blur-xl"
          : "border-b border-transparent"
      )}
      style={{ backgroundColor: scrolled ? "rgba(6,6,8,0.85)" : "transparent" }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-widest text-[var(--accent-cyan)] uppercase hover:opacity-80 transition-opacity"
        >
          {personal.name}
          <span className="cursor-blink ml-0.5 text-[var(--accent-indigo)]">_</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--text-subtle)] hover:text-[var(--text-primary)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--accent-cyan)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CV button */}
        <a
          href={personal.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-md border border-[var(--accent-cyan)] text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)] hover:text-[var(--bg-primary)] transition-all duration-200"
        >
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--text-subtle)] hover:text-[var(--text-primary)] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-[var(--border)] backdrop-blur-xl"
          style={{ backgroundColor: "rgba(6,6,8,0.95)" }}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--text-subtle)] hover:text-[var(--accent-cyan)] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personal.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-mono px-4 py-2 rounded-md border border-[var(--accent-cyan)] text-[var(--accent-cyan)]"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
