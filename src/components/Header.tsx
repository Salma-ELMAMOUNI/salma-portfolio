"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/theme-toggle";

const links = [
{ href: "#about", label: "About" },
{ href: "#projects", label: "Projects" },
{ href: "#experience", label: "Journey" },
{ href: "#contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  /* Detect scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Detect active section */
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50
        transition-all duration-500
        ${
          scrolled
            ? "border-b border-line bg-paper/80 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          mx-auto flex h-16 max-w-6xl
          items-center justify-between
          px-6
        "
      >
        {/* =========================
            LOGO + NAME
        ========================== */}
        <div className="flex items-center gap-3">
          {/* Electric Blue Logo */}
          <motion.div
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 28px rgba(0,153,255,0.45)",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            className="
              relative flex h-10 w-10
              items-center justify-center
              overflow-hidden
              rounded-xl
              bg-[#07111F]
              shadow-[0_0_20px_rgba(0,140,255,0.25)]
              ring-1 ring-blue-400/30
            "
          >
            <svg
              viewBox="0 0 40 40"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              {/* Electric frame */}
              <path
                d="M11 8H29L34 13V27L29 32H11L6 27V13L11 8Z"
                stroke="#0099FF"
                strokeWidth="1.5"
              />

              {/* Lightning symbol */}
              <path
                d="M24 8L13 21H20L17 32L28 18H21L24 8Z"
                fill="#0099FF"
              />
            </svg>

            {/* SE */}
            <span
              className="
                relative z-10
                text-[11px]
                font-bold
                tracking-tight
                text-white
              "
            >
              SE
            </span>
          </motion.div>

          {/* Name */}
<div className="hidden sm:block">
  <div className="font-display text-3xl font-extrabold tracking-tight bg-gradient-to-r from-ink via-[#0099FF] to-ink bg-clip-text text-transparent">
    Salma El Mamouni
  </div>

  <div className="font-mono text-[11px] text-muted mt-0.5">
    AI · DL · ML · NLP
  </div>
</div>
        </div>

        {/* =========================
            NAVIGATION + THEME
        ========================== */}
        <div className="flex items-center gap-6">
          {/* Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative
                  pb-0.5
                  text-sm
                  text-muted
                  transition-colors
                  hover:text-ink
                "
              >
                <span
                  className={
                    active === link.href
                      ? "text-ink"
                      : ""
                  }
                >
                  {link.label}
                </span>

                {/* Active underline */}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="
                      absolute
                      -bottom-[1px]
                      left-0
                      right-0
                      h-[1px]
                      bg-ink
                    "
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Dark / Light mode */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}