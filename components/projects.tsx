"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { ProjectCard, type ProjectType } from "./project-card";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { siteConfig } from "@/lib/constants";

export function Projects() {
  const [repos, setRepos] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchProjects() {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch("/api/github/pinned");
        if (!res.ok) throw new Error("Failed to fetch pinned repositories");
        const data: ProjectType[] = await res.json();
        if (!cancelled) setRepos(data);
      } catch (e) {
        console.error(e);
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchProjects();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="projects" className="p-6 sm:p-8 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm text-foreground tracking-wider">Projects</h2>
            <p className="text-xs text-foreground/60 mt-1">
              My projects, feeding live from git pin.
            </p>
          </div>

          <div className="flex items-center gap-0.5 rounded-full w-fit">
            <Button
              size="sm"
              variant="secondary"
              className="h-6 text-sm px-2 font-normal cursor-pointer border"
              asChild
            >
              <Link href={siteConfig.links.github} target="_blank">
                View All
                <ExternalLink className="size-3" />
              </Link>
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-xl border border-border">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-background p-5 space-y-3">
                <Skeleton className="w-1/2 h-4 bg-white/5" />
                <Skeleton className="w-full h-8 bg-white/5" />
                <div className="flex gap-2">
                  <Skeleton className="w-12 h-3 bg-white/5" />
                  <Skeleton className="w-12 h-3 bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10 border border-white/5 rounded-lg bg-white/[0.01]">
            <p className="text-xs text-foreground/55">
              Unable to load GitHub repositories. Please try again later.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-xl border border-border"
          >
            {repos.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
