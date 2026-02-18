import { projects } from "@/lib/data";
import { Github, ExternalLink, Zap } from "lucide-react";
import clsx from "clsx";

const statusColors = {
  active: "text-[var(--accent-green)] border-[var(--accent-green)]",
  completed: "text-[var(--accent-cyan)] border-[var(--accent-cyan)]",
  archived: "text-[var(--text-muted)] border-[var(--text-muted)]",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[var(--accent-cyan)] tracking-widest uppercase mb-2">
          02. Projects
        </p>
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
          Things I&apos;ve built
        </h2>
        <p className="text-[var(--text-muted)] mb-12 max-w-xl">
          A selection of systems and research-oriented projects. Source code available on GitHub.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card-hover rounded-xl bg-[var(--bg-card)] p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span
                    className={clsx(
                      "text-[10px] font-mono px-2 py-0.5 rounded-full border",
                      statusColors[project.status]
                    )}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--text-subtle)] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-xs text-[var(--text-muted)]"
                  >
                    <Zap
                      size={10}
                      className="shrink-0 mt-0.5 text-[var(--accent-cyan)]"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--accent-indigo)] transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Thelordozias"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors font-mono"
          >
            <Github size={16} />
            See more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
