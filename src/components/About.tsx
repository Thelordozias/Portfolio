import { personal, education, experience } from "@/lib/data";
import { MapPin, GraduationCap, Briefcase, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionLabel label="01. About" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
        {/* Bio */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">
            Who I am
          </h2>
          <div className="space-y-4">
            {personal.bio.map((paragraph, i) => (
              <p key={i} className="text-[var(--text-subtle)] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-6 text-sm text-[var(--text-muted)] font-mono">
            <MapPin size={14} className="text-[var(--accent-cyan)]" />
            {personal.location}
          </div>

          {/* Education */}
          <div className="mt-10">
            <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--accent-cyan)] mb-4 flex items-center gap-2">
              <GraduationCap size={14} />
              Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="pl-4 border-l border-[var(--border)] space-y-2">
                <p className="font-semibold text-[var(--text-primary)]">{edu.degree}</p>
                <p className="text-sm text-[var(--accent-indigo)]">{edu.institution}</p>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {edu.period}
                  </span>
                  <span>GPA {edu.gpa}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {edu.relevant.map((course) => (
                    <span
                      key={course}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="pl-4 border-l-2 border-[var(--border)] hover:border-[var(--accent-cyan)] transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">{exp.role}</p>
                    <p className="text-sm text-[var(--accent-indigo)] flex items-center gap-1.5">
                      <Briefcase size={12} />
                      {exp.org}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-mono text-[var(--text-muted)] mt-0.5">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-subtle)] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { value: "4+", label: "Projects" },
              { value: "2", label: "Research Papers" },
              { value: "2+", label: "Years Coding" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-lg bg-[var(--bg-card)] border border-[var(--border)] p-4 text-center"
              >
                <p className="text-2xl font-bold gradient-text">{value}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="text-sm font-mono text-[var(--accent-cyan)] tracking-widest uppercase">
      {label}
    </p>
  );
}
