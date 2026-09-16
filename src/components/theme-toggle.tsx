"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { ArrowRight, Download } from "lucide-react";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xl border border-line bg-paper" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 18px rgba(0,153,255,0.3)",
      }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      aria-label={
        isDark ? "Activer le mode clair" : "Activer le mode sombre"
      }
      className="
        relative flex h-9 w-9
        items-center justify-center
        overflow-hidden
        rounded-xl
        border border-slate-200
        bg-white
        text-blue-500
        shadow-sm
        transition-colors duration-300
        hover:border-blue-400

        dark:border-white/10
        dark:bg-slate-900
        dark:text-cyan-400
      "
    >
      {/* Sun */}
      <Sun
        className={`
          absolute h-[17px] w-[17px]
          transition-all duration-300
          ${
            isDark
              ? "rotate-90 scale-0"
              : "rotate-0 scale-100"
          }
        `}
        strokeWidth={1.8}
      />

      {/* Moon */}
      <Moon
        className={`
          absolute h-[17px] w-[17px]
          transition-all duration-300
          ${
            isDark
              ? "rotate-0 scale-100"
              : "-rotate-90 scale-0"
          }
        `}
        strokeWidth={1.8}
      />
    </motion.button>
  );
}
<div className="flex items-center gap-3">
  <a
    href="/cv-salma-el-mamouni-ai.pdf"
    download
    className="
      hidden sm:inline-flex
      items-center gap-2
      rounded-xl
      border border-signal/30
      bg-signal/10
      px-4 py-2
      text-sm font-medium
      text-signal
      transition-all duration-300
      hover:border-signal/60
      hover:bg-signal
      hover:text-white
      hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
    "
  >
    <Download className="h-4 w-4" strokeWidth={2} />
    Télécharger mon CV
  </a>

  <ThemeToggle />
</div>