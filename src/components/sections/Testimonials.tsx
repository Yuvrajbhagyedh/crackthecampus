"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="testimonials" className="scroll-mt-20 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Success stories"
          title={
            <>
              Real students, <span className="text-gradient">real offers</span>
            </>
          }
          description="Thousands of students have turned anxious placement seasons into offer letters. Here are a few of their journeys."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 70}>
              <motion.figure
                whileHover={
                  reduce
                    ? undefined
                    : { y: -4, transition: { type: "spring", stiffness: 350, damping: 24 } }
                }
                className="glass flex h-full flex-col rounded-2xl p-6 shadow-soft transition-shadow hover:shadow-neon sm:p-7"
              >
                <div
                  className="flex items-center gap-1 text-amber-400"
                  aria-label="Rated 5 out of 5"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <motion.span
                      key={s}
                      initial={reduce ? false : { opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + s * 0.05 }}
                    >
                      <Icon name="star" size={16} />
                    </motion.span>
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-[rgb(var(--fg))]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-[rgb(var(--border))]/60 pt-5">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${testimonial.accent} text-sm font-bold text-white shadow-glow`}
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[rgb(var(--fg))]">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-muted">{testimonial.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
