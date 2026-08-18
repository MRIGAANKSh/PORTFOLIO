"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, BriefcaseBusiness } from "lucide-react";
import { TaystAIIcon } from "@/components/icons/tayst-ai";
import { PortalsIcon } from "@/components/icons/portals";
import { RosterProIcon } from "@/components/icons/roster-pro";
import { LyseibugIcon } from "./icons/lyseibug";

interface RoleDetails {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  bullets: string[];
  icon?: React.ElementType;
}


const experienceData: RoleDetails[] = [
  {
    company: "Lyseibug",
    title: "Full Stack Developer Intern",
    location: "India",
    type: "Remote",
    period: "May 2026 – Aug 2026",
    bullets: [
      "Collaborated on the design and development of a full-stack Enterprise Resource Planning (ERP) platform tailored for academic lecture management, optimizing system performance to improve load times by 18%.",
      "Integrated robust RESTful APIs into the core architecture to ensure reliable data orchestration, seamless backend-to-frontend communication, and a uniform user experience across device ecosystems.",
      "Analyzed complex user interaction patterns across different institutional roles to apply iterative UI/UX enhancements, resulting in a 25% increase in user engagement and streamlined administrative usability.",
    ],
    icon: LyseibugIcon,
  },
  {
    company: "Freelancer",
    title: "Software Developer",
    location: "India",
    type: "Remote",
    period: "May 2025 – May 2026",
    bullets: [
      "Developed and maintained full-stack web applications using modern frontend and backend technologies.",
      "Built RESTful APIs and integrated frontend interfaces to deliver reliable and responsive application workflows.",
      "Collaborated on application architecture, debugging, performance optimization, and feature development across the software lifecycle.",
    ],
    icon: BriefcaseBusiness,
  },
];


export default function WorkingExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default expand the first one

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="p-6 sm:p-8 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-sm text-foreground tracking-wider">Experience</h2>
          <p className="text-xs text-foreground/60 mt-1">
            Professional timeline and work achievements
          </p>
        </div>

        <div className="relative border-l border-border pt-1 pl-5.5 ml-1.5 space-y-8">
          {experienceData.map((role, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={`${role.company}-${role.period}`}
                className="relative group"
              >

                <div
                  className={`absolute -left-[30px] top-1.5 size-3.5 rounded-full border border-foreground/10 bg-background transition-all duration-300 flex items-center justify-center ${
                    isExpanded
                      ? "border-border scale-110"
                      : "group-hover:border-foreground/30"
                  }`}
                >
                  <div
                    className={`size-1.5 rounded-full bg-foreground transition-all duration-300 ${
                      isExpanded
                        ? "opacity-100 scale-100"
                        : "opacity-30 scale-75"
                    }`}
                  />
                </div>

                <div
                  onClick={() => toggleExpand(idx)}
                  className="cursor-pointer space-y-1.5 p-4 -m-4 -ml-3 rounded-lg hover:bg-secondary/50 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {role.icon && (
                        <role.icon
                          className={isExpanded ? "grayscale-0" : undefined}
                        />
                      )}
                      <div>
                        <h3 className="text-sm font-medium text-foreground transition-colors group-hover:text-foreground">
                          {role.company}
                        </h3>
                        <p className="text-xs text-foreground/70 font-normal mt-0.5">
                          {role.title}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0 text-right">
                      <span className="text-[10px] text-foreground/60 flex items-center gap-1">
                        <Calendar className="size-2.5" /> {role.period}
                      </span>
                      <span className="text-[9px] bg-transparent text-foreground/70 px-1.5 py-0.5 rounded border border-border">
                        {role.type}, {role.location}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden pt-2"
                      >
                        <ul className="space-y-2.5 pt-1 mt-1">
                          {role.bullets.map((bullet, bIdx) => (
                            <li
                              key={`${role.company}-${role.period}-${bIdx}`}
                              className="text-xs text-foreground/60 leading-relaxed list-none pl-3 relative"
                            >
                              <span className="absolute left-0 top-2 size-1 rounded-full bg-foreground/30" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
