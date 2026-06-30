"use client";

import { motion, useReducedMotion } from "framer-motion";
import { courses } from "@/data/content";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { MotionButton } from "@/components/ui/MotionButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const levelStyles: Record<string, string> = {
  Beginner: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  Intermediate: "bg-brand-500/15 text-brand-600 dark:text-brand-300",
  Advanced: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
};

export function Courses() {
  const reduce = useReducedMotion();

  return (
    <section
      id="courses"
      className="relative scroll-mt-20 overflow-hidden border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))]/60 py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Courses & test series"
          title={
            <>
              Pick your <span className="text-gradient">preparation track</span>
            </>
          }
          description="Structured, mentor-designed paths that take you from fundamentals to interview-ready — practice tracks and full test series included."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.title} delay={i * 80} className="h-full">
              <motion.article
                whileHover={
                  reduce
                    ? undefined
                    : { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }
                }
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border bg-[rgb(var(--card))] p-6 sm:p-7",
                  course.featured
                    ? "border-brand-400/60 shadow-neon ring-1 ring-brand-500/20 dark:border-brand-500/40"
                    : "border-[rgb(var(--border))] shadow-soft hover:border-brand-400/40 hover:shadow-neon",
                )}
              >
                {course.featured && (
                  <motion.span
                    animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white shadow-glow"
                  >
                    <Icon name="star" size={12} /> Most popular
                  </motion.span>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                    {course.tag}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-semibold",
                      levelStyles[course.level],
                    )}
                  >
                    {course.level}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold">{course.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {course.description}
                </p>

                <div className="mt-5 flex items-center gap-5 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="clock" size={16} /> {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="layers" size={16} /> {course.modules} modules
                  </span>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {course.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2.5 text-sm">
                      <Icon name="check" size={16} className="shrink-0 text-accent-500" />
                      <span className="text-[rgb(var(--fg))]">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-1">
                  <MotionButton
                    href="#footer"
                    variant={course.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Explore track
                    <Icon name="arrow" size={16} />
                  </MotionButton>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
