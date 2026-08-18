"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

export interface ProjectType {
  id: string | number;
  name: string;
  description: string | null;
  url: string;
  stargazers_count?: number;
  language?: string | null;
  tags?: string[];
}

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block bg-background p-5 transition-colors duration-200 hover:bg-secondary/50
        border-b border-border
        sm:[&:nth-child(odd)]:border-r
        sm:[&:nth-last-child(-n+2)]:border-b-0
        [&:last-child]:border-b-0"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">{project.name}</h3>

        <ArrowUpRight className="size-3.5 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
      </div>

      {project.description && (
        <p className="mt-2 line-clamp-2 text-xs font-normal leading-relaxed text-foreground/60">
          {project.description}
        </p>
      )}

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border bg-secondary px-1.5 py-0.5 text-[9px] text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-3 flex items-center gap-3.5 text-[10px] text-foreground/60">
        {project.language && (
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-foreground/60" />
            <span>{project.language}</span>
          </div>
        )}

        {project.stargazers_count !== undefined &&
          project.stargazers_count > 0 && (
            <div className="flex items-center gap-1">
              <Star className="size-3 text-foreground/60 transition-colors" />
              <span>{project.stargazers_count} stars</span>
            </div>
          )}
      </div>
    </motion.a>
  );
}
