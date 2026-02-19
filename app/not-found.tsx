/**
 * app/not-found.tsx
 *
 * Custom 404 page — shown when a route doesn't exist.
 * Matches the portfolio's dark design system.
 */

import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{
        background: `
          radial-gradient(ellipse 50% 40% at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 60%),
          radial-gradient(ellipse 30% 40% at 70% 30%, rgba(0,212,255,0.06) 0%, transparent 60%)
        `,
      }}
    >
      {/* Error code */}
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
        404 / Not Found
      </p>

      {/* Headline */}
      <h1
        className="font-serif font-bold tracking-tight leading-none mb-6"
        style={{ fontSize: "clamp(5rem, 15vw, 10rem)", color: "rgba(255,255,255,0.06)" }}
      >
        404
      </h1>

      <p className="font-mono text-sm text-muted leading-relaxed max-w-sm mb-10 -mt-4">
        This page doesn&apos;t exist — or was moved. Let&apos;s get you back somewhere useful.
      </p>

      {/* Navigation links */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all hover:text-accent"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            fontWeight: 500,
          }}
        >
          Go Home →
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase text-white transition-all hover:border-accent hover:text-accent"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          Projects
        </Link>
        <Link
          href="/research"
          className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase text-white transition-all hover:border-accent hover:text-accent"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          Research
        </Link>
      </div>
    </section>
  );
}
