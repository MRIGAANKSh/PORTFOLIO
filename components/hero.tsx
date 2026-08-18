"use client";

import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { HeatmapCalendar } from "./heatmap-calendar";
import { HoverText, Underline } from "./underline";
import { toast } from "sonner";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Email copied to clipboard!");
  };

  const [data, setData] = useState<{ date: string; value: number }[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/github/cont");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="p-6 sm:p-8 -mt-4 bg-background"
    >
      <div className="space-y-6">
        <p className="text-[14.5px] text-foreground/70 leading-relaxed font-normal">
          I&apos;m a software developer who enjoys building things. I&apos;ve
          worked with{" "}
          <HoverText text="startups">Pre-Seed, Seed, and Series A.</HoverText>{" "}
          and <Underline>Firms</Underline> built products for{" "}
          <HoverText text="clients">i also do freelancing.</HoverText>, and
          spent years creating my own projects. Most of my time is spent
          building products, contributing to open source, and experimenting with
          new ideas. I&apos;ve built{" "}
          <HoverText text="10+ projects">
            More than 10+ open source projects, 20+ closed source projects.
          </HoverText>{" "}
          ranging from AI tools and SaaS products to developer tools and
          automation software, and my open-source work has earned{" "}
          <Link href={siteConfig.links.github} target="_blank">
            <Underline>GitHub stars</Underline>.
          </Link>
        </p>

        <p className="text-[14.5px] text-foreground/70 leading-relaxed font-normal">
          When I&apos;m not working, I&apos;m usually shipping another side
          project or contributing to projects I use myself.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button variant="default" asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume <ArrowUpRight className="size-3.5" />
            </Link>
          </Button>

          <Button
            className="cursor-pointer"
            variant="secondary"
            onClick={handleCopyEmail}
          >
            {copied ? (
              <>
                Copied <Check className="size-3.5" />
              </>
            ) : (
              <>
                Copy Email <Copy className="size-3.5 ml-1.5" />
              </>
            )}
          </Button>
        </div>

        <ScrollArea className="py-4 -mb-6">
          <Link
            href="https://github.com/MRIGAANKSh"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.length > 0 && (
              <HeatmapCalendar className="-ml-10!" legend={false} data={data} />
            )}
          </Link>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </motion.section>
  );
}
