/**
 * components/ui/ProjectCardFull.tsx
 *
 * Full project card — used on the /projects page.
 * More detailed than ProjectCard: shows year, GitHub/live links.
 *
 * "use client" for Framer Motion.
 */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCardFull({ project, index }: Props) {
  return (
    <motion.div
      className="project-card-accent relative overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "2.5rem",
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{
        y: -4,
        borderColor: "rgba(0,212,255,0.2)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
      }}
    >
      {/* Year */}
      <div className="font-mono text-xs text-muted tracking-widest mb-2">
        {project.year}
      </div>

      {/* Name */}
      <h3 className="font-serif text-2xl font-bold tracking-tight mb-4">
        {project.name}
      </h3>

      {/* Description */}
      <p className="font-mono text-sm text-muted leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
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

      {/* Links */}
      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-accent hover:border-b hover:border-accent transition-all"
          >
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-accent hover:border-b hover:border-accent transition-all"
          >
            Live Demo →
          </a>
        )}
        {project.linkedToResearch && (
          <Link
            href="/research"
            className="font-mono text-xs tracking-widest uppercase text-accent2 hover:border-b hover:border-accent2 transition-all"
          >
            Research Page →
          </Link>
        )}
      </div>
    </motion.div>
  );
}
