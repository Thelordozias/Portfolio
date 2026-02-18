import { personal } from "@/lib/data";
import { Github, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--border)] py-8 px-6"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
          <span>© {year}</span>
          <span className="text-[var(--accent-cyan)] font-semibold">{personal.name}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            Built with <Heart size={10} className="text-red-400" fill="currentColor" /> &amp; Next.js
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[var(--accent-cyan)] transition-colors"
          >
            <Github size={13} />
            Source
          </a>
          <span>·</span>
          <a href="#home" className="hover:text-[var(--accent-cyan)] transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
