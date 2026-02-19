/**
 * components/sections/About.tsx
 *
 * About section — two-column layout.
 * Left: avatar photo + personal story.
 * Right: skill tags grouped by category.
 *
 * Server Component — no interactivity needed.
 */

import Image from "next/image";

const skillGroups = [
  {
    category: "Languages",
    color: "var(--accent)",
    skills: ["C++ / OOP", "Python / ML", "TypeScript", "SQL / Databases"],
  },
  {
    category: "Frameworks & Tools",
    color: "var(--accent)",
    skills: ["React / Next.js", "Framer Motion", "Neural Networks"],
  },
  {
    category: "Research",
    color: "var(--accent2)",
    skills: ["CT Reconstruction", "Tomographic Imaging", "Filtered Back Proj."],
  },
];

export default function About() {
  return (
    <section
      className="px-6 md:px-12 py-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* ── Section Header ── */}
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          01 /
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
          About
        </h2>
      </div>

      {/* ── Two-column grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

        {/* Photo + Story */}
        <div className="space-y-7">

          {/* Avatar */}
          <div className="relative w-36 h-36 md:w-44 md:h-44">
            {/* Accent glow behind the photo */}
            <div
              className="absolute inset-0 rounded-sm"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,212,255,0.15) 0%, transparent 70%)",
                transform: "scale(1.3)",
              }}
            />
            <Image
              src="/avatar.jpg"
              alt="Ozias Kafando"
              fill
              className="object-cover rounded-sm"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              priority
            />
          </div>

          {/* Story */}
          <p className="font-mono text-sm text-muted leading-loose">
            Originally from{" "}
            <strong className="text-white font-medium">Burkina Faso</strong>, I
            arrived in the US less than two years ago and have been relentlessly
            building ever since. I study Computer Science at BMCC with a focus
            on creating technology that works in resource-constrained environments.
          </p>
          <p className="font-mono text-sm text-muted leading-loose">
            I conduct{" "}
            <strong className="text-white font-medium">
              medical imaging research
            </strong>{" "}
            with Professor Benkarroum, exploring CT scan reconstruction and
            tomographic imaging. My work bridges hardware limitations and
            algorithmic ingenuity.
          </p>
          <p className="font-mono text-sm text-muted leading-loose">
            I speak{" "}
            <strong className="text-white font-medium">
              French, English, Mooré, and Spanish
            </strong>{" "}
            — each language a lens into a different world of thought.
          </p>
        </div>

        {/* Skills — grouped by category */}
        <div className="space-y-6">
          {skillGroups.map(({ category, color, skills }) => (
            <div key={category}>
              {/* Category label */}
              <p
                className="font-mono text-xs tracking-widest uppercase mb-2"
                style={{ color }}
              >
                {category}
              </p>
              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="font-mono text-xs text-muted px-3 py-2 transition-all hover:text-white cursor-default"
                    style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
