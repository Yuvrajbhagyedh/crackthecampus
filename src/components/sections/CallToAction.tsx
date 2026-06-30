"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { MotionButton } from "@/components/ui/MotionButton";
import { Reveal } from "@/components/ui/Reveal";

export function CallToAction() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-[1px] shadow-neon-lg">
            {!reduce && (
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-conic opacity-70"
              />
            )}

            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[rgb(var(--card))] px-6 py-16 text-center sm:px-10 lg:py-24">
              <motion.div
                aria-hidden="true"
                animate={reduce ? undefined : { scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-500/25 blur-[100px]"
              />
              <motion.div
                aria-hidden="true"
                animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-[90px]"
              />

              <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Your placement season starts{" "}
                <span className="text-gradient">the day you start preparing.</span>
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
                Take the free diagnostic, get a personalised roadmap, and join
                thousands of students turning effort into offers.
              </p>

              <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <MotionButton href="#courses" size="lg" variant="primary">
                  Start preparing free
                  <Icon name="arrow" size={18} />
                </MotionButton>
                <MotionButton href="#testimonials" size="lg" variant="secondary">
                  Read success stories
                </MotionButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
