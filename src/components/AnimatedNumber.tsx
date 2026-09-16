"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, animate } from "framer-motion";

/**
 * Anime un nombre de 0 jusqu'à sa valeur finale quand il entre dans le viewport.
 * Gère les valeurs avec suffixe/texte (ex: "95.9%", "166K+") en n'animant
 * que la partie numérique détectée au début de la chaîne.
 */
export default function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const match = value.match(/^(\d+(?:[.,]\d+)?)(.*)$/);
  const numeric = match ? parseFloat(match[1].replace(",", ".")) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!inView || numeric === null) return;
    if (reduce) {
      motionVal.set(numeric);
      return;
    }
    const controls = animate(motionVal, numeric, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1] as const,
    });
    return () => controls.stop();
  }, [inView, numeric, reduce, motionVal]);

  if (numeric === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      <Ticker motionVal={motionVal} decimals={decimals} />
      {suffix}
    </span>
  );
}

function Ticker({
  motionVal,
  decimals,
}: {
  motionVal: ReturnType<typeof useMotionValue<number>>;
  decimals: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    return motionVal.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toFixed(decimals);
      }
    });
  }, [motionVal, decimals]);

  return <span ref={nodeRef}>0</span>;
}
