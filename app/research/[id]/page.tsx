/**
 * app/research/[id]/page.tsx
 *
 * Dynamic research detail page (route: "/research/:id")
 *
 * Next.js will generate one page per research paper using
 * generateStaticParams() — this means the pages are pre-built
 * at build time (Static Site Generation), making them fast.
 *
 * Example routes:
 *   /research/filtered-back-projection
 *   /research/neural-networks-dynamic-reconstruction
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { researchPapers } from "@/lib/data";

/* ─────────────────────────────────────────────────────────────
   Static Generation
   Pre-build one HTML file per research paper at build time.
───────────────────────────────────────────────────────────── */
export async function generateStaticParams() {
  return researchPapers.map((paper) => ({ id: paper.id }));
}

/* ─────────────────────────────────────────────────────────────
   Dynamic Metadata
   Each research page gets its own <title> and <meta description>
───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const paper = researchPapers.find((p) => p.id === params.id);
  if (!paper) return { title: "Not Found" };
  return {
    title: `${paper.title} — Ozias Kafando`,
    description: paper.abstract,
  };
}

/* ─────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────── */
export default function ResearchDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Find the paper by its id slug
  const paper = researchPapers.find((p) => p.id === params.id);

  // If paper not found, trigger Next.js 404 page
  if (!paper) notFound();

  return (
    <>
      {/* ── Back Navigation ── */}
      <div className="px-6 md:px-12 py-5 border-b border-white/[0.07]">
        <Link
          href="/research"
          className="font-mono text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors inline-flex items-center gap-2"
        >
          ← Back to Research
        </Link>
      </div>

      {/* ── Paper Content ── */}
      <article className="px-6 md:px-12 py-12 max-w-4xl">

        {/* Meta row */}
        <div className="flex flex-wrap gap-6 mb-8">
          <span className="font-mono text-xs text-muted tracking-widest">
            Topic: <span className="text-accent2">{paper.topic}</span>
          </span>
          <span className="font-mono text-xs text-muted tracking-widest">
            Year: <span className="text-accent2">{paper.year}</span>
          </span>
          <span className="font-mono text-xs text-muted tracking-widest">
            Supervisor: <span className="text-accent2">{paper.supervisor}</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
          {paper.title}
        </h1>

        {/* Abstract — distinguished with left border */}
        <p
          className="font-mono text-sm text-muted leading-relaxed mb-12 pl-6"
          style={{ borderLeft: "2px solid var(--accent2)" }}
        >
          {paper.abstract}
        </p>

        {/* Body — sections rendered from data */}
        <div className="space-y-8">
          {paper.sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-sans text-lg font-semibold text-white mb-3">
                {section.heading}
              </h2>
              <p className="font-mono text-sm text-muted leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/[0.07]">
          {paper.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-3 py-1 border border-white/[0.07] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* ── Footer ── */}
      <footer className="mt-16 border-t border-white/[0.07] px-6 md:px-12 py-6 flex justify-between items-center">
        <p className="font-mono text-xs text-muted">
          © 2025 Ozias Kafando — BMCC Medical Imaging Research
        </p>
        <Link
          href="/research"
          className="font-mono text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors"
        >
          ← All Research
        </Link>
      </footer>
    </>
  );
}
