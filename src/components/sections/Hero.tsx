"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { AuroraOrbs } from "@/components/ui/AuroraOrbs";
import { MotionButton } from "@/components/ui/MotionButton";
import { RollingText } from "@/components/ui/RollingText";
import { HeroVisual } from "./HeroVisual";
import { easeOutExpo, fadeUp, staggerContainer } from "@/lib/motion";

const proofPoints = [
  "No credit card required",
  "Free aptitude diagnostic",
  "Cancel anytime",
];

const tickerItems = [
  "TCS NQT",
  "Infosys SP",
  "Wipro Elite",
  "Accenture",
  "DSA Patterns",
  "Aptitude 90+",
  "Mock Interviews",
  "Offer Ready",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[92vh] overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
    >
      <AuroraOrbs />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <span className="eyebrow-glow">
              <motion.span
                animate={reduce ? undefined : { scale: [1, 1.35, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative flex h-2 w-2"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 blur-[2px]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </motion.span>
              Placement season 2026 is live
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 font-display text-[2.65rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem] xl:text-[4.1rem]"
          >
            <span className="block">Crack every</span>
            <span className="mt-1 flex flex-wrap items-baseline gap-x-3">
              <RollingText className="text-[1.05em] sm:text-[1.08em]" />
              <span className="text-[rgb(var(--fg))]/90">on your first try.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted sm:text-xl"
          >
            One platform to go from rusty to recruiter-ready — adaptive mocks,
            company tracks, live coding practice and AI interviews that adapt to
            <span className="font-medium text-brand-600 dark:text-brand-300"> you</span>.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MotionButton href="/register" size="lg" variant="primary">
              Start preparing free
              <Icon name="arrow" size={18} />
            </MotionButton>
            <MotionButton href="#features" size="lg" variant="secondary">
              <Icon name="play" size={16} />
              See how it works
            </MotionButton>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
          >
            {proofPoints.map((point, i) => (
              <motion.li
                key={point}
                initial={reduce ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1, ease: easeOutExpo }}
                className="flex items-center gap-2"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500/15">
                  <Icon name="check" size={12} className="text-accent-500" />
                </span>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 60, rotateY: -8 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: easeOutExpo }}
          className="relative [perspective:1200px]"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Infinite keyword ticker */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-[rgb(var(--border))]/60 bg-[rgb(var(--bg))]/60 backdrop-blur-md">
        <div className="mask-fade-x overflow-hidden py-3">
          <motion.ul
            animate={reduce ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex w-max items-center gap-3 pr-3"
          >
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <li
                key={`${item}-${i}`}
                aria-hidden={i >= tickerItems.length}
                className="flex items-center gap-3"
              >
                <span className="whitespace-nowrap rounded-full border border-brand-500/20 bg-brand-500/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                  {item}
                </span>
                <span className="text-brand-400/40">◆</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
