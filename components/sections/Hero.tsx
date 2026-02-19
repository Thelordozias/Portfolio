/**
 * components/sections/Hero.tsx
 *
 * Full-screen hero section on the home page.
 *
 * Features:
 *  - Ambient radial gradient background
 *  - Grid overlay with mask
 *  - Staggered text animations via Framer Motion
 *  - Stats column (GPA, Languages, Drive)
 *  - CTA buttons linking to /projects and /research
 *
 * "use client" required for Framer Motion.
 */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* Animation variant — shared for stagger children */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 md:px-12 py-24 overflow-hidden"
    >
      {/* ── Background ambient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 70% 40%, rgba(124,58,237,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 20% 70%, rgba(0,212,255,0.07) 0%, transparent 60%)
          `,
        }}
      />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 80%)",
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-3xl">

        {/* Tag line */}
        <motion.div
          className="font-mono text-xs tracking-widest uppercase text-accent mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          // CS Student · Researcher · Builder · Graduating May 2026
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-serif font-bold tracking-tight leading-none mb-6"
          style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)" }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          Ozias
          <br />
          <em className="italic text-accent">Kafando.</em>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="font-mono text-sm text-muted leading-relaxed max-w-lg mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          Building technology that works when conditions aren&apos;t perfect —
          from{" "}
          <strong className="text-white font-medium">
            medical imaging research
          </strong>{" "}
          at BMCC to AI-powered tools bridging the gap between ambition and
          resources.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all"
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#fff";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,212,255,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            View Projects →
          </Link>

          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase text-white transition-all hover:border-accent hover:text-accent"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            Research Work
          </Link>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all hover:text-accent"
            style={{ border: "1px solid rgba(255,255,255,0.07)", color: "var(--muted)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLElement).style.color = "var(--muted)";
            }}
          >
            ↓ Resume
          </a>
        </motion.div>

        {/* ── Stats — mobile only (inline, below buttons) ── */}
        <motion.div
          className="flex md:hidden flex-row gap-8 mt-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { num: "3.9", label: "GPA" },
            { num: "4+",  label: "Languages" },
            { num: "∞",   label: "Drive" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-serif text-3xl font-bold leading-none">{num}</div>
              <div className="font-mono text-xs text-muted tracking-widest uppercase mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Stats — desktop only (absolute bottom-right) ── */}
      <motion.div
        className="hidden md:flex md:absolute md:right-12 md:bottom-12 flex-col gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {[
          { num: "3.9", label: "GPA" },
          { num: "4+",  label: "Languages" },
          { num: "∞",   label: "Drive" },
        ].map(({ num, label }) => (
          <div key={label} className="text-right">
            <div className="font-serif text-4xl font-bold leading-none">{num}</div>
            <div className="font-mono text-xs text-muted tracking-widest uppercase mt-1">
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
