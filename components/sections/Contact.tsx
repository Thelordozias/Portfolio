/**
 * components/sections/Contact.tsx
 *
 * Contact section — two-column layout.
 * Left: headline and subtext.
 * Right: list of contact links (email, LinkedIn, GitHub).
 *
 * Update the href values with your real contact info.
 *
 * "use client" required for onMouseEnter/onMouseLeave event handlers.
 */

"use client";

import { useState } from "react";

const EMAIL = "ozias@bmcc.cuny.edu"; // ← replace with your email

const contactLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ozias",        // ← replace with your LinkedIn
    href: "https://linkedin.com/in/ozias",
  },
  {
    label: "GitHub",
    value: "github.com/ozias",            // ← replace with your GitHub
    href: "https://github.com/ozias",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* ── Headline ── */}
        <div>
          <h2
            className="font-serif font-bold tracking-tight leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Let&apos;s build something{" "}
            <em className="italic text-accent">remarkable.</em>
          </h2>
          <p className="font-mono text-sm text-muted leading-loose max-w-sm">
            Whether it&apos;s research collaboration, internship opportunities,
            or building tools that matter — I&apos;m always open to meaningful
            conversations.
          </p>
        </div>

        {/* ── Links ── */}
        <div className="flex flex-col gap-3">

          {/* Email row — with copy-to-clipboard */}
          <div
            className="flex items-center justify-between px-5 py-4 text-white transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLElement).style.background = "";
            }}
          >
            <span className="font-mono text-xs text-muted tracking-widest uppercase">
              Email
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="font-mono text-sm hover:text-accent transition-colors"
              >
                {EMAIL}
              </a>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                title={copied ? "Copied!" : "Copy email"}
                className="font-mono text-xs transition-colors"
                style={{ color: copied ? "var(--accent)" : "var(--muted)" }}
              >
                {copied ? "✓" : "⧉"}
              </button>
            </div>
          </div>

          {/* LinkedIn + GitHub */}
          {contactLinks.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-4 text-white transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background = "";
              }}
            >
              <span className="font-mono text-xs text-muted tracking-widest uppercase">
                {label}
              </span>
              <span className="font-mono text-sm">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
