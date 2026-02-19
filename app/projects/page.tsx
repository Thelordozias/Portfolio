/**
 * app/projects/page.tsx
 *
 * Projects page (route: "/projects")
 *
 * Displays the full list of projects in a responsive grid.
 * Server component — data comes from lib/data.ts (no fetch needed).
 */

import type { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectCardFull from "@/components/ui/ProjectCardFull";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Projects — Ozias Kafando",
  description: "All projects built by Ozias Kafando — from AI productivity tools to medical imaging research applications.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="px-6 md:px-12 pt-16 pb-8 border-b border-white/[0.07]">
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
          Projects /
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-none">
          Everything
          <br />
          <em className="italic text-accent">I&apos;ve built.</em>
        </h1>
      </section>

      {/* ── Projects Grid ── */}
      <section className="px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCardFull key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
