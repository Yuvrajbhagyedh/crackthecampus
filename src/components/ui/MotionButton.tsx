"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { springSnappy } from "@/lib/motion";

type Variant = "primary" | "secondary" | "ghost" | "glow";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-brand-600 via-violet-600 to-fuchsia-600 text-white shadow-neon hover:shadow-neon-lg",
  secondary:
    "glass text-[rgb(var(--fg))] hover:border-brand-400/60 hover:text-brand-600 dark:hover:text-brand-300",
  ghost: "text-[rgb(var(--fg))] hover:bg-brand-500/10",
  glow:
    "relative overflow-hidden border border-brand-400/40 bg-brand-500/10 text-brand-700 backdrop-blur-md dark:text-brand-200",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type MotionButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function MotionButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: MotionButtonProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.98, y: 0 }}
      transition={springSnappy}
      className="inline-flex"
    >
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {variant === "primary" && !reduce && (
          <motion.span
            aria-hidden="true"
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Link>
    </motion.div>
  );
}
