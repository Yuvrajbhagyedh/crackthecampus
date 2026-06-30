"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Slow-drifting gradient orbs — ambient hero background energy. */
export function AuroraOrbs() {
  const reduce = useReducedMotion();

  const drift = {
    x: [0, 30, -20, 0],
    y: [0, -25, 15, 0],
    scale: [1, 1.08, 0.95, 1],
  };

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-90 dark:opacity-100" />
      <div className="absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] dark:bg-grid-dark dark:opacity-25" />

      <motion.div
        animate={reduce ? undefined : drift}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[10%] top-[5%] h-[28rem] w-[28rem] rounded-full bg-brand-500/25 blur-[100px] dark:bg-brand-500/20"
      />
      <motion.div
        animate={reduce ? undefined : drift}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-[5%] top-[20%] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[90px] dark:bg-fuchsia-500/15"
      />
      <motion.div
        animate={reduce ? undefined : drift}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[10%] left-[30%] h-72 w-72 rounded-full bg-cyan-400/15 blur-[80px] dark:bg-cyan-400/10"
      />

      {/* Animated spotlight sweep */}
      {!reduce && (
        <motion.div
          animate={{ x: ["-30%", "130%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/8 to-transparent dark:via-white/4"
        />
      )}
    </div>
  );
}
