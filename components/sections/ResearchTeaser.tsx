/**
 * components/sections/ResearchTeaser.tsx
 *
 * Home page teaser that links to the /research page.
 * A large card with hover gradient overlay and animated arrow.
 *
 * "use client" for the hover animation state.
 */

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { researchPapers } from "@/lib/data";

export default function ResearchTeaser() {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="px-6 md:px-12 py-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* ── Section Header ── */}
      <div className="flex items-baseline gap-4 mb-8">
        <span className="font-mono text-xs text-accent2 tracking-widest uppercase">
          04 /
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Research
        </h2>
      </div>

      {/* ── Teaser Card ── */}
      <div
        className="research-teaser-overlay relative flex items-center justify-between gap-6 p-10 cursor-pointer transition-all overflow-hidden"
        style={{
          background: "var(--surface)",
          border: hovered
            ? "1px solid rgba(124,58,237,0.3)"
            : "1px solid rgba(255,255,255,0.07)",
          transition: "border 0.3s",
        }}
        onClick={() => router.push("/research")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Text */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              Medical Imaging &amp; CT Reconstruction
            </h3>
            <span
              className="font-mono text-xs tracking-widest px-2 py-1 flex-shrink-0"
              style={{
                border: "1px solid rgba(124,58,237,0.4)",
                color: "var(--accent2)",
              }}
            >
              {researchPapers.length} papers
            </span>
          </div>
          <p className="font-mono text-sm text-muted leading-relaxed max-w-xl">
            Exploring tomographic imaging, sinogram generation, and neural
            network-enhanced reconstruction with Professor Benkarroum at BMCC.
          </p>
        </div>

        {/* Arrow */}
        <div
          className="relative z-10 text-4xl text-accent2 transition-transform duration-300 flex-shrink-0"
          style={{ transform: hovered ? "translateX(8px)" : "translateX(0)" }}
        >
          →
        </div>
      </div>
    </section>
  );
}
