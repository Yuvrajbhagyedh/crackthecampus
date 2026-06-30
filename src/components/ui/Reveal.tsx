"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { easeOutExpo, fadeUp } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Slide distance in px — larger = more dramatic entrance. */
  distance?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 40,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ ...fadeUp.hidden, y: distance }}
      whileInView={{ ...fadeUp.visible, y: 0 }}
      viewport={{ once: true, margin: "-50px 0px -80px 0px", amount: 0.2 }}
      transition={{
        duration: 0.75,
        delay: delay / 1000,
        ease: easeOutExpo,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
