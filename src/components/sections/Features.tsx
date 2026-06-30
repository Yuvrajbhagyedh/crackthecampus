"use client";

import { motion, useReducedMotion } from "framer-motion";
import { features } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Features() {
  const reduce = useReducedMotion();

  return (
    <section id="features" className="relative scroll-mt-20 py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />

      <div className="container-page">
        <SectionHeading
          eyebrow="Everything you need"
          title={
            <>
              One platform for the <span className="text-gradient">whole journey</span>
            </>
          }
          description="From your first aptitude quiz to your final interview, every tool a student needs to get placement-ready lives in one place."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 60}>
              <motion.article
                whileHover={
                  reduce
                    ? undefined
                    : { y: -6, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 22 } }
                }
                className="group relative h-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-soft transition-shadow duration-300 hover:border-brand-400/40 hover:shadow-neon dark:hover:border-brand-500/30"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl transition-opacity duration-500 group-hover:bg-violet-500/15 group-hover:opacity-100" />

                <motion.span
                  whileHover={reduce ? undefined : { rotate: [0, -8, 8, 0], scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-violet-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/20 transition-colors duration-300 group-hover:from-brand-600 group-hover:to-violet-600 group-hover:text-white dark:text-brand-300"
                >
                  <Icon name={feature.icon} size={24} />
                </motion.span>

                <h3 className="relative mt-5 font-display text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
