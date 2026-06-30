"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { easeOutExpo, springSoft } from "@/lib/motion";

const week = [
  { day: "M", value: 48 },
  { day: "T", value: 60 },
  { day: "W", value: 53 },
  { day: "T", value: 71 },
  { day: "F", value: 76 },
  { day: "S", value: 84 },
  { day: "S", value: 92 },
];

const skills = [
  { label: "Quantitative Aptitude", value: 86 },
  { label: "Data Structures", value: 72 },
  { label: "Verbal Ability", value: 64 },
];

export function HeroVisual() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const score = 78;
  // Drives a plain CSS height transition for the weekly bars — avoids
  // framer's percentage-height keyframe, which can settle flat depending on
  // hydration timing in a nested flex layout.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // Gentle 3D tilt that follows the cursor; the card surface stays solid.
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), springSoft);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), springSoft);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Glow halo behind card */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-violet-500/20 to-fuchsia-500/25 blur-2xl dark:from-brand-500/20 dark:via-violet-500/15 dark:to-fuchsia-500/15"
      />

      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={
          reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="relative overflow-hidden rounded-3xl p-[1.5px] shadow-neon"
      >
        {/* Spinning multi-colour gradient ring (sits only in the 1.5px border) */}
        {!reduce && (
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-0 bg-gradient-conic opacity-70"
          />
        )}

        <div className="relative rounded-[calc(1.5rem-1.5px)] bg-[rgb(var(--card))] p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Placement readiness
              </p>
              <p className="mt-1.5 text-sm font-medium text-[rgb(var(--fg))]">
                You&rsquo;re on track for top recruiters
              </p>
            </div>

            <div className="relative h-[76px] w-[76px] shrink-0">
              <svg viewBox="0 0 76 76" className="h-full w-full -rotate-90">
                <circle
                  cx="38"
                  cy="38"
                  r={radius}
                  fill="none"
                  strokeWidth="7"
                  className="stroke-brand-500/15"
                />
                <motion.circle
                  cx="38"
                  cy="38"
                  r={radius}
                  fill="none"
                  strokeWidth="7"
                  strokeLinecap="round"
                  className="stroke-brand-500"
                  strokeDasharray={circumference}
                  initial={reduce ? undefined : { strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: circumference * (1 - score / 100) }}
                  transition={{ duration: 1.6, delay: 0.4, ease: easeOutExpo }}
                />
              </svg>
              <motion.span
                initial={reduce ? false : { opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute inset-0 grid place-items-center font-display text-lg font-bold"
              >
                {score}%
              </motion.span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted">Weekly mock scores</span>
              <motion.span
                animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-1 rounded-full bg-accent-500/15 px-2 py-0.5 text-[11px] font-semibold text-accent-500"
              >
                <Icon name="chart" size={12} /> +12%
              </motion.span>
            </div>

            <div className="mt-3 flex h-28 gap-2.5">
              {week.map((bar, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex w-full flex-1 items-end">
                    <div
                      style={{
                        height: mounted || reduce ? `${bar.value}%` : "4%",
                        transitionDelay: reduce ? "0ms" : `${300 + i * 70}ms`,
                      }}
                      className={
                        (i === week.length - 1
                          ? "w-full rounded-md bg-gradient-to-t from-brand-600 to-violet-500"
                          : "w-full rounded-md bg-brand-500/25") +
                        " transition-[height] duration-700 ease-out"
                      }
                    />
                  </div>
                  <span className="text-[10px] font-medium text-muted">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 space-y-3 border-t border-[rgb(var(--border))]/80 pt-5">
            {skills.map((skill, i) => (
              <div key={skill.label}>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-muted">{skill.label}</span>
                  <span className="font-semibold">{skill.value}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-brand-500/10">
                  <motion.div
                    initial={reduce ? false : { width: 0 }}
                    animate={{ width: `${skill.value}%` }}
                    transition={{ duration: 1, delay: 0.8 + i * 0.12, ease: easeOutExpo }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-400"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </div>
  );
}
