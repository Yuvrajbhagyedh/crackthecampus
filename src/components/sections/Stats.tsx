"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "./CountUp";

export function Stats() {
  const reduce = useReducedMotion();

  return (
    <section id="stats" className="scroll-mt-20 py-14">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-[1px] shadow-neon-lg">
            {/* Rotating gradient border */}
            {!reduce && (
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-conic opacity-80"
              />
            )}

            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-[#0a0b12] via-[#0d0f1a] to-[#120b1e] px-6 py-12 sm:px-10 lg:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
              />
              <motion.div
                aria-hidden="true"
                animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl"
              />

              <div className="relative">
                <p className="text-center text-sm font-medium uppercase tracking-wider text-brand-100/90">
                  Trusted by students across the country
                </p>

                <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={reduce ? false : { opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="text-center"
                    >
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span className="block bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text font-display text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                          <CountUp value={stat.value} />
                        </span>
                        <span className="mt-2 block text-sm font-semibold text-white">
                          {stat.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-brand-200/80">
                          {stat.detail}
                        </span>
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
