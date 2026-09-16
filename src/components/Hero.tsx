"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { profile } from "@/lib/data";
import AnimatedNumber from "./AnimatedNumber";
import { ArrowRight, Download } from "lucide-react";
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      {/* halo décoratif animé, purement esthétique */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(circle, var(--signal-soft) 0%, transparent 70%)" }}
        animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto max-w-3xl px-6"
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        <motion.p variants={reduce ? undefined : item} className="mb-4 font-mono text-sm text-muted">
          {profile.role}
        </motion.p>
<motion.div
  className="pointer-events-none absolute right-[8%] top-32 hidden
             h-72 w-72 lg:block"
  animate={{
    y: [0, -15, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div className="absolute inset-0 rounded-full border border-indigo-500/20" />

  <div className="absolute inset-8 rounded-full border border-cyan-400/20" />

  <div className="absolute inset-20 rounded-full
                  bg-gradient-to-br from-indigo-500/30 to-cyan-400/20
                  blur-xl" />

  <div className="absolute left-1/2 top-1/2
                  h-4 w-4 -translate-x-1/2 -translate-y-1/2
                  rounded-full bg-cyan-400
                  shadow-[0_0_40px_rgba(34,211,238,0.8)]" />
</motion.div>
        <motion.h1
          variants={reduce ? undefined : item}
       
  className="max-w-[15ch] font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
>
  {profile.headline}
 </motion.h1>

        <motion.p variants={reduce ? undefined : item} className="mt-6 max-w-[48ch] text-lg text-muted">
          {profile.lede}
        </motion.p>

       <div className="mt-8 flex flex-wrap items-center gap-3">
  {/* View Projects */}
  <a
    href="#projects"
    className="
      group inline-flex items-center gap-2
      rounded-xl
      bg-ink
      px-5 py-3
      text-sm font-semibold
      text-paper
      transition-all duration-300
      hover:-translate-y-0.5
      hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]
    "
  >
    View My Projects
    <ArrowRight
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      strokeWidth={2}
    />
  </a>

  {/* Contact */}
  <a
    href="#contact"
    className="
      inline-flex items-center gap-2
      rounded-xl
      border border-line
      bg-paper
      px-5 py-3
      text-sm font-semibold
      text-ink
      transition-all duration-300
      hover:-translate-y-0.5
      hover:border-signal
      hover:text-signal
    "
  >
    Contact Me
  </a>

  {/* Download CV */}
  <a
    href="/cv-salma-el-mamouni.pdf"
    download
    className="
      inline-flex items-center gap-2
      rounded-xl
      border border-signal/40
      bg-signal/5
      px-5 py-3
      text-sm font-semibold
      text-signal
      transition-all duration-300
      hover:-translate-y-0.5
      hover:border-signal
      hover:bg-signal
      hover:text-white
      hover:shadow-[0_0_22px_rgba(37,99,235,0.25)]
    "
  >
    <Download className="h-4 w-4" strokeWidth={2} />
    Download CV
  </a>
</div>
        <motion.div
          variants={reduce ? undefined : item}
          className="grid grid-cols-2 border border-line sm:grid-cols-4"
        >
      {profile.stats.map((stat, i) => (
  <motion.div
    key={stat.label}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.25 }}
    className={`group p-6 transition-all duration-300 hover:bg-white/[0.03] ${
      i > 0 ? "border-l border-line" : ""
    } ${
      i === 2 ? "border-l-0 sm:border-l" : ""
    }`}
  >
    <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
      <AnimatedNumber value={stat.value} />
    </div>

    <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
      {stat.label}
    </div>
  </motion.div>
))}
        </motion.div>
      </motion.div>
    </section>
  );
}
