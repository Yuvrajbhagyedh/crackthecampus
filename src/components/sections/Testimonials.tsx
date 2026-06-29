import { testimonials } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 scroll-mt-20">
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

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 70}>
              <figure className="surface flex h-full flex-col rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-soft sm:p-7">
                <div className="flex items-center gap-1 text-amber-400" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" size={16} />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-[rgb(var(--fg))]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-[rgb(var(--border))] pt-5">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${testimonial.accent} text-sm font-bold text-white`}
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
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
