/**
 * components/sections/ResearchList.tsx
 *
 * THE SIGNATURE COMPONENT — 3D Perspective Research List.
 *
 * Concept: "Like looking at a list from the side — a mirror you see from its edge."
 *
 * How it works:
 * ┌─────────────────────────────────────────────────────────┐
 * │  1. The <ul> is wrapped in a perspective container      │
 * │  2. The list is tilted: rotateY(-18deg) rotateX(2deg)   │
 * │  3. Mouse movement = smooth lerp parallax via RAF        │
 * │  4. On item click:                                       │
 * │     a. Clicked item flashes briefly (140ms)              │
 * │     b. List unfolds to 0deg tilt via CSS .flat class     │
 * │     c. Other items fade + scale (no translate chaos)     │
 * │     d. After 700ms → navigate to /research/[id]          │
 * └─────────────────────────────────────────────────────────┘
 *
 * CSS lives in globals.css under "Research list — 3D perspective scene".
 * "use client" — uses useRef, useState, useCallback, useRouter.
 */

"use client";

import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { ResearchPaper } from "@/lib/data";

type Props = {
  papers: ResearchPaper[];
};

export default function ResearchList({ papers }: Props) {
  const router = useRouter();
  const listRef = useRef<HTMLUListElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  /* Lerp targets and current values stored as refs — no re-render needed */
  const rafRef = useRef<number | null>(null);
  const targetRot = useRef({ y: -18, x: 2 });
  const currentRot = useRef({ y: -18, x: 2 });

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /* ── Lerp animation loop — buttery smooth mouse tracking via RAF ── */
  const runLerpLoop = useCallback(() => {
    const tick = () => {
      if (!listRef.current) return;

      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      currentRot.current.y = lerp(currentRot.current.y, targetRot.current.y, 0.07);
      currentRot.current.x = lerp(currentRot.current.x, targetRot.current.x, 0.07);

      /* Write directly to DOM — bypasses React state for max performance */
      listRef.current.style.transform =
        `rotateY(${currentRot.current.y.toFixed(3)}deg) rotateX(${currentRot.current.x.toFixed(3)}deg)`;

      /* Stop loop when close enough to target */
      const settled =
        Math.abs(currentRot.current.y - targetRot.current.y) < 0.02 &&
        Math.abs(currentRot.current.x - targetRot.current.x) < 0.02;

      if (!settled) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  /* ── Mouse move: update lerp target ── */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAnimating || !sceneRef.current) return;

    const rect = sceneRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    /* Subtle range: Y from -18° to -10°, X from +2° to -2° */
    targetRot.current = {
      y: -18 + x * 8,
      x: 2 - y * 4,
    };

    runLerpLoop();
  };

  /* ── Mouse leave: lerp back to default tilt ── */
  const handleMouseLeave = () => {
    if (isAnimating) return;
    targetRot.current = { y: -18, x: 2 };
    runLerpLoop();
  };

  /* ── Click: two-phase animation then navigate ── */
  const handleItemClick = (paper: ResearchPaper, index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setClickedIndex(index);

    /* Stop lerp so it doesn't fight the unfold animation */
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    /* Phase 2 (140ms): hand off to CSS transition and unfold */
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.style.transform = "";
        listRef.current.style.transition = "";
        listRef.current.classList.add("flat");
      }
    }, 140);

    /* Phase 3 (700ms): navigate */
    setTimeout(() => {
      router.push(`/research/${paper.id}`);
    }, 700);
  };

  return (
    /* ── Perspective container ── */
    <div
      ref={sceneRef}
      className="research-scene px-6 md:px-12 py-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── The 3D list ── */}
      <ul ref={listRef} className="research-list">
        {papers.map((paper, index) => {
          const isFading = clickedIndex !== null && clickedIndex !== index;
          const isClicked = clickedIndex === index;
          const isHovered = hoveredIndex === index;

          return (
            <li
              key={paper.id}
              className="research-item"
              style={{
                /* Drives CSS staggered entrance animation delay */
                ["--item-index" as string]: index,
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                borderTop: index === 0 ? "1px solid rgba(255,255,255,0.07)" : undefined,
                /* Non-clicked items: fade + scale only — no translate */
                opacity: isFading ? 0 : 1,
                transform: isFading ? "scale(0.97)" : undefined,
                transition: isFading
                  ? `opacity 0.35s ${index * 0.03}s ease, transform 0.35s ${index * 0.03}s ease`
                  : undefined,
                /* Subtle flash on clicked item */
                background: isClicked ? "rgba(0,212,255,0.05)" : undefined,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleItemClick(paper, index)}
            >
              <div className="research-item-inner flex items-center justify-between gap-6 px-4 md:px-6 py-6">

                {/* ── Left: number + title ── */}
                <div className="flex items-baseline gap-6 md:gap-8">
                  <span
                    className="font-mono text-xs tracking-widest min-w-[2rem] transition-colors duration-200"
                    style={{ color: isHovered ? "var(--accent)" : "var(--muted)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-serif font-normal tracking-tight transition-colors duration-200"
                    style={{
                      fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)",
                      color: isHovered ? "var(--accent)" : "var(--text)",
                    }}
                  >
                    {paper.title}
                  </span>
                </div>

                {/* ── Right: topic + year + arrow ── */}
                <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
                  <span className="hidden md:block font-mono text-xs text-muted tracking-widest uppercase">
                    {paper.topic}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {paper.year}
                  </span>
                  {/* Circle arrow — rotates on hover, scales on click */}
                  <div
                    className="w-7 h-7 rounded-full border flex items-center justify-center text-xs transition-all duration-200"
                    style={{
                      borderColor: isHovered ? "var(--accent)" : "rgba(255,255,255,0.1)",
                      color: isHovered ? "var(--accent)" : "var(--muted)",
                      transform: isClicked
                        ? "scale(1.2)"
                        : isHovered
                        ? "rotate(-45deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    →
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
