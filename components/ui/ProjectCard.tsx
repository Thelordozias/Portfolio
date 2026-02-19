/**
 * components/ui/ProjectCard.tsx
 *
 * Compact project card — used in the home page "Featured Projects" grid.
 * Has hover effects: top accent line slides in, card lifts.
 *
 * "use client" is needed for Framer Motion animations.
 */

"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      className="project-card-accent relative overflow-hidden cursor-pointer group"
      style={{
        background: "var(--surface)",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "2rem",
      }}
      /* Stagger fade-up animation — each card delays by 100ms × index */
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -4,
        borderColor: "rgba(0,212,255,0.2)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      }}
    >
      {/* Index number */}
      <div className="font-mono text-xs text-accent tracking-widest mb-4">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Project name */}
      <h3 className="font-serif text-2xl font-bold tracking-tight mb-3">
        {project.name}
      </h3>

      {/* Description */}
      <p className="font-mono text-sm text-muted leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-3 py-1 text-muted"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
