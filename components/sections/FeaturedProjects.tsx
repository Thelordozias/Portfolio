/**
 * components/sections/FeaturedProjects.tsx
 *
 * Home page "Featured Projects" section.
 * Shows the first 3 projects from data.ts.
 * "See All Projects →" button links to /projects.
 *
 * Server Component — ProjectCard handles its own animations.
 */

import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

/* Show only the first 3 projects on the home page */
const FEATURED_COUNT = 3;

export default function FeaturedProjects() {
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <section
      className="px-6 md:px-12 py-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* ── Section Header ── */}
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          03 /
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Featured Projects
        </h2>
      </div>

      {/* ── Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {featured.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* ── See More Button ── */}
      <div className="flex justify-center">
        <Link
          href="/projects"
          className="font-mono text-xs tracking-widest uppercase text-white px-8 py-4 transition-all hover:text-accent"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          See All Projects →
        </Link>
      </div>
    </section>
  );
}
