"use client";

import { useEffect, useState } from "react";
import { personal } from "@/lib/data";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";

const roles = [
  "Systems Engineer",
  "CS Researcher",
  "Low-Level Programmer",
  "Distributed Systems Builder",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const socialLinks = [
    { icon: Github, href: personal.github, label: "GitHub" },
    { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personal.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center grid-pattern"
    >
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(34,211,238,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        {personal.available && (
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-xs font-mono text-[var(--accent-green)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
            Open to research positions & transfers
          </div>
        )}

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
          <span className="text-[var(--text-primary)]">Hey, I&apos;m </span>
          <span className="gradient-text">{personal.name}</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-12 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-2xl font-mono text-[var(--accent-cyan)]">
            {displayed}
            <span className="cursor-blink">|</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-10">
          {personal.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text-subtle)] font-semibold text-sm hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all duration-200"
          >
            Get in Touch
          </a>
          <a
            href={personal.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[var(--accent-indigo)] text-[var(--accent-indigo)] font-semibold text-sm hover:bg-[var(--accent-indigo)] hover:text-white transition-all duration-200"
          >
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
