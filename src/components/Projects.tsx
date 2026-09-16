"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, filters, type Project } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]["value"]>("all");

  const visible = projects.filter((p) => active === "all" || p.category === active);

  return (
    <section id="projects" className="border-b border-line py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="mb-8 font-display text-2xl">Projects</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-7 flex flex-wrap gap-5">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`relative border-b pb-1 font-mono text-xs transition-colors ${
                  active === f.value ? "border-transparent text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {f.label}
                {active === f.value && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute -bottom-[1px] left-0 right-0 h-[1px] bg-ink"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div>
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <ProjectRow project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="grid gap-6 border-t border-line py-6 first:border-t-0 sm:grid-cols-[1fr_2fr]">
      <div>
        <h3 className="text-[1.15rem] font-display">{project.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-signal-soft px-2 py-0.5 font-mono text-[0.7rem] text-signal">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p>{project.description}</p>
        <div className="mt-3 flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              className="text-sm underline decoration-line underline-offset-2 hover:text-signal hover:decoration-signal"
            >
              Démo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              className="text-sm underline decoration-line underline-offset-2 hover:text-signal hover:decoration-signal"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
