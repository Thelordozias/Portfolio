import { skills } from "@/lib/data";
import { Code2, Terminal, FlaskConical, Globe, Cpu } from "lucide-react";

const categories = [
  {
    key: "languages" as const,
    label: "Languages",
    icon: Code2,
    color: "var(--accent-cyan)",
  },
  {
    key: "systems" as const,
    label: "Systems",
    icon: Cpu,
    color: "var(--accent-indigo)",
  },
  {
    key: "tools" as const,
    label: "Tools & Infra",
    icon: Terminal,
    color: "var(--accent-green)",
  },
  {
    key: "research" as const,
    label: "Research Areas",
    icon: FlaskConical,
    color: "var(--accent-cyan)",
  },
  {
    key: "web" as const,
    label: "Web & APIs",
    icon: Globe,
    color: "var(--accent-indigo)",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[var(--accent-cyan)] tracking-widest uppercase mb-2">
          04. Skills
        </p>
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
          Technical Toolkit
        </h2>
        <p className="text-[var(--text-muted)] mb-12 max-w-xl">
          Technologies and domains I work with regularly — from low-level systems to full-stack web.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ key, label, icon: Icon, color }) => (
            <div
              key={key}
              className="card-hover rounded-xl bg-[var(--bg-card)] p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`,
                  }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {label}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills[key].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded-md border border-[var(--border)] text-[var(--text-subtle)] hover:border-opacity-60 transition-colors"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal-style note */}
        <div className="mt-10 p-4 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
          <span className="text-[var(--accent-green)]">$ </span>
          <span className="text-[var(--accent-cyan)]">printf</span>
          <span> &quot;Always learning. Currently exploring: Zig, eBPF, verified networking.&quot;</span>
        </div>
      </div>
    </section>
  );
}
