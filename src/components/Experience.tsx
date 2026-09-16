"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 80, damping: 20, restDelta: 0.001 });

  return (
    <section id="experience" className="border-b border-line py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="mb-8 font-display text-2xl">Journey</h2>
        </Reveal>

        <div ref={containerRef} className="relative pl-7">
          {/* rail statique */}
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-line" />
          {/* rail qui se remplit au scroll */}
          <motion.div
            className="absolute left-[5px] top-1.5 w-px origin-top bg-signal"
            style={{ scaleY: reduce ? 1 : lineHeight, bottom: "1.5px" }}
          />

          {experience.map((item, i) => (
            <Reveal key={item.title + item.when} delay={i * 0.08}>
              <div className="relative pb-8 last:pb-0">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-[1.5px] border-signal bg-paper" />
                <div className="mb-1 font-mono text-xs text-muted">{item.when}</div>
                <h3 className="font-display text-[1.05rem]">{item.title}</h3>
                <div className={item.bullets.length ? "mb-2 text-sm text-muted" : "text-sm text-muted"}>
                  {item.org}
                </div>
                {item.bullets.length > 0 && (
                  <ul className="list-disc space-y-1 pl-[18px] text-[0.93rem]">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
