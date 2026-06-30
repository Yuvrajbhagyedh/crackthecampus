"use client";

import { motion, useReducedMotion } from "framer-motion";
import { companies } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Companies() {
  const reduce = useReducedMotion();
  const row = [...companies, ...companies];

  return (
    <section
      id="companies"
      className="scroll-mt-20 border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))]/80 py-16 backdrop-blur-sm"
    >
      <div className="container-page">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">
            Where our students get placed
          </p>
        </Reveal>

        <div className="mask-fade-x mt-10 overflow-hidden">
          <motion.ul
            animate={reduce ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="flex w-max items-center gap-4 pr-4 pause-on-hover"
          >
            {row.map((company, i) => (
              <motion.li
                key={`${company.name}-${i}`}
                aria-hidden={i >= companies.length}
                whileHover={reduce ? undefined : { scale: 1.05, y: -3 }}
                className="glass flex h-[4.5rem] min-w-[11rem] items-center justify-center rounded-2xl px-8 shadow-soft transition-shadow hover:shadow-neon"
              >
                <span className="bg-gradient-to-r from-[rgb(var(--fg))] to-brand-600 bg-clip-text font-display text-lg font-bold tracking-tight text-transparent dark:to-brand-300">
                  {company.short}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
