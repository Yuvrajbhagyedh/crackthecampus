"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSnappy } from "@/lib/motion";

export function SubmitButton({
  loading,
  children,
}: {
  loading: boolean;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="submit"
      disabled={loading}
      whileHover={reduce || loading ? undefined : { scale: 1.02, y: -1 }}
      whileTap={reduce || loading ? undefined : { scale: 0.98 }}
      transition={springSnappy}
      className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 via-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-neon transition-shadow hover:shadow-neon-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] disabled:cursor-not-allowed disabled:opacity-80"
    >
      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
        />
      )}
      {children}
    </motion.button>
  );
}
