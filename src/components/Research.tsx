import { research } from "@/lib/data";
import { FileText, BookOpen, ExternalLink } from "lucide-react";

const typeIcon = {
  paper: FileText,
  report: BookOpen,
};

export default function Research() {
  return (
    <section id="research" className="py-28 px-6 max-w-6xl mx-auto">
      <p className="text-sm font-mono text-[var(--accent-cyan)] tracking-widest uppercase mb-2">
        03. Research
      </p>
      <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
        Academic Work
      </h2>
      <p className="text-[var(--text-muted)] mb-12 max-w-xl">
        Papers, reports, and research projects I&apos;ve authored or contributed to.
      </p>

      <div className="space-y-6">
        {research.map((item) => {
          const Icon = typeIcon[item.type];
          return (
            <article
              key={item.title}
              className="card-hover rounded-xl bg-[var(--bg-card)] p-6"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center">
                  <Icon size={18} className="text-[var(--accent-cyan)]" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="text-base font-semibold text-[var(--text-primary)] leading-snug">
                      {item.title}
                    </h3>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <p className="text-xs font-mono text-[var(--accent-indigo)] mb-3">
                    {item.venue}
                  </p>

                  <p className="text-sm text-[var(--text-subtle)] leading-relaxed mb-3">
                    {item.abstract}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Empty state hint */}
      <div className="mt-10 p-5 rounded-xl border border-dashed border-[var(--border)] text-center">
        <p className="text-xs font-mono text-[var(--text-muted)]">
          More work in progress — check back soon.
        </p>
      </div>
    </section>
  );
}
