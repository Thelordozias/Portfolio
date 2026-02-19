/**
 * app/research/page.tsx
 *
 * Research page (route: "/research")
 *
 * Features the signature 3D perspective research list:
 * - List is tilted in 3D space (rotateY -35deg) — "view from the side"
 * - Mouse movement over the list creates a parallax tilt effect
 * - Clicking an item triggers an "unfold" animation before navigating
 *
 * This page is a Server Component.
 * The interactive 3D list lives in ResearchList (Client Component).
 */

import type { Metadata } from "next";
import { researchPapers } from "@/lib/data";
import ResearchList from "@/components/sections/ResearchList";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Research — Ozias Kafando",
  description: "Medical imaging research by Ozias Kafando — CT reconstruction, sinogram generation, and neural network-enhanced tomographic imaging.",
};

export default function ResearchPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative px-6 md:px-12 pt-16 pb-10 border-b border-white/[0.07] overflow-hidden">
        {/* Ambient purple glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 80% 50%, rgba(124,58,237,0.1), transparent 70%)",
          }}
        />

        <p className="relative font-mono text-xs tracking-widest uppercase text-accent2 mb-4">
          Research /
        </p>
        <h1 className="relative font-serif text-5xl md:text-7xl font-bold tracking-tight leading-none">
          Exploring the
          <br />
          <em className="italic text-accent2">edges of imaging.</em>
        </h1>
        <p className="relative font-mono text-sm text-muted mt-4 max-w-md leading-relaxed">
          Click a paper to unfold it — or hover to feel the depth of the list.
        </p>
      </section>

      {/* ── 3D Research List (Client Component) ── */}
      {/*
        ResearchList receives the static data as props.
        All animation logic lives inside the client component.
      */}
      <ResearchList papers={researchPapers} />

      <Footer note="Research conducted at BMCC with Professor Benkarroum" />
    </>
  );
}
