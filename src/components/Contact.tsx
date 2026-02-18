import { personal } from "@/lib/data";
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Contact() {
  const links = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "var(--accent-cyan)",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Thelordozias",
      href: personal.github,
      color: "var(--text-primary)",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ozias",
      href: personal.linkedin,
      color: "#0a66c2",
    },
    {
      icon: Twitter,
      label: "Twitter / X",
      value: "@ozias",
      href: personal.twitter,
      color: "#1d9bf0",
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto">
      <p className="text-sm font-mono text-[var(--accent-cyan)] tracking-widest uppercase mb-2">
        05. Contact
      </p>
      <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
        Get in Touch
      </h2>
      <p className="text-[var(--text-muted)] mb-12 max-w-xl">
        Whether it&apos;s a research collaboration, a transfer opportunity, or just a question
        about my work — my inbox is open. I typically reply within 24h.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Links */}
        <div className="space-y-4">
          {links.map(({ icon: Icon, label, value, href, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[rgba(34,211,238,0.3)] transition-all duration-200"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`,
                }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[var(--text-muted)] font-mono mb-0.5">{label}</p>
                <p className="text-sm text-[var(--text-primary)] truncate">{value}</p>
              </div>
              <ArrowRight
                size={16}
                className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] group-hover:translate-x-1 transition-all duration-200"
              />
            </a>
          ))}
        </div>

        {/* Message card */}
        <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border)] p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
              Looking for research collaborations
            </h3>
            <p className="text-sm text-[var(--text-subtle)] leading-relaxed mb-6">
              I&apos;m actively looking for opportunities in{" "}
              <span className="text-[var(--accent-cyan)]">systems research</span>,{" "}
              <span className="text-[var(--accent-indigo)]">distributed computing</span>, and{" "}
              <span className="text-[var(--accent-green)]">transfer programs</span>. If you think
              my profile is a fit, let&apos;s talk.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Research Internship", "Transfer Application", "Open Source", "Collaboration"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="mt-8 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}
