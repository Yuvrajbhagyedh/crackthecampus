"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/motion";

const DEFAULT_WORDS = [
  "placement",
  "internship",
  "aptitude test",
  "dream offer",
];

type RollingTextProps = {
  words?: string[];
  intervalMs?: number;
  className?: string;
};

/**
 * Vertical rolling word carousel. Uses an invisible sizer so the container
 * keeps the width of the longest word — absolute-only children collapse to 0px.
 */
export function RollingText({
  words = DEFAULT_WORDS,
  intervalMs = 2600,
  className,
}: RollingTextProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  const longest = useMemo(
    () => words.reduce((a, b) => (a.length > b.length ? a : b), words[0] ?? ""),
    [words],
  );

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [words.length, intervalMs, reduce]);

  const current = words[reduce ? 0 : index];

  return (
    <span
      className={cn("relative inline-grid align-bottom", className)}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="sr-only">{current}</span>

      {/* Invisible sizer — reserves width for the longest phrase */}
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1 whitespace-nowrap font-display font-extrabold"
      >
        {longest}
      </span>

      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 relative h-[1.15em] overflow-hidden"
      >
        <AnimatePresence mode="wait" initial>
          <motion.span
            key={current}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="absolute inset-x-0 top-0 block whitespace-nowrap font-display font-extrabold text-gradient-vivid"
          >
            {current}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
