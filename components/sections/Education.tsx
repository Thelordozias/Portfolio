/**
 * components/sections/Education.tsx
 *
 * Education & Experience timeline section.
 * Server Component — no interactivity needed.
 */

const timeline = [
  {
    period: "2023 — 2026",
    title: "A.S. Computer Science",
    place: "Borough of Manhattan Community College (BMCC)",
    location: "New York City, NY",
    detail: "GPA 3.9 · Graduating May 2026",
    highlights: [
      "Medical Imaging Research with Prof. Benkarroum",
      "Data Structures, Algorithms, OOP in C++",
      "Calculus, Linear Algebra, Discrete Math",
    ],
    accent: "var(--accent)",
  },
  {
    period: "2025",
    title: "AI/ML Sprinternship",
    place: "PowerToFly × Skillcrush",
    location: "Remote",
    detail: "Team project — AI Marketing Generator",
    highlights: [
      "Built an AI content generation tool in a team",
      "Worked with LLM APIs and prompt engineering",
      "Agile collaboration across time zones",
    ],
    accent: "var(--accent2)",
  },
  {
    period: "2024 — Present",
    title: "Research Assistant",
    place: "BMCC — Medical Imaging Lab",
    location: "New York City, NY",
    detail: "Supervised by Prof. Benkarroum",
    highlights: [
      "CT reconstruction algorithms (FBP, compressed sensing)",
      "Neural network post-processing for sinogram data",
      "Python / NumPy / SciPy implementations",
    ],
    accent: "var(--accent2)",
  },
];

export default function Education() {
  return (
    <section
      className="px-6 md:px-12 py-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* ── Section Header ── */}
      <div className="flex items-baseline gap-4 mb-14">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          02 /
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Education &amp; Experience
        </h2>
      </div>

      {/* ── Timeline ── */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-0 top-0 bottom-0 hidden md:block"
          style={{
            width: "1px",
            background: "rgba(255,255,255,0.07)",
            marginLeft: "7.5rem",
          }}
        />

        <div className="flex flex-col gap-12">
          {timeline.map(({ period, title, place, location, detail, highlights, accent }) => (
            <div
              key={title}
              className="grid grid-cols-1 md:grid-cols-[8rem_1fr] gap-4 md:gap-10 group"
            >
              {/* Period */}
              <div className="md:text-right">
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: "var(--muted)" }}
                >
                  {period}
                </span>
              </div>

              {/* Content — with dot on the timeline */}
              <div className="relative pl-6 md:pl-8">
                {/* Timeline dot */}
                <div
                  className="hidden md:block absolute top-1"
                  style={{
                    left: "-0.45rem",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: accent,
                    boxShadow: `0 0 8px ${accent}`,
                  }}
                />

                {/* Title */}
                <h3
                  className="font-serif text-xl font-bold tracking-tight mb-1 transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  {title}
                </h3>

                {/* Place + location */}
                <p className="font-mono text-sm mb-1" style={{ color: accent }}>
                  {place}
                </p>
                <p className="font-mono text-xs text-muted mb-3 tracking-wide">
                  {location} · {detail}
                </p>

                {/* Highlights */}
                <ul className="space-y-1">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-xs text-muted flex items-start gap-2"
                    >
                      <span style={{ color: accent, marginTop: "2px" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
