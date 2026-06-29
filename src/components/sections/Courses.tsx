import { courses } from "@/data/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const levelStyles: Record<string, string> = {
  Beginner: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400",
  Intermediate: "bg-brand-500/12 text-brand-600 dark:text-brand-300",
  Advanced: "bg-violet-500/12 text-violet-600 dark:text-violet-400",
};

export function Courses() {
  return (
    <section id="courses" className="py-20 lg:py-28 scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Courses & test series"
          title={
            <>
              Pick your <span className="text-gradient">preparation track</span>
            </>
          }
          description="Structured, mentor-designed paths that take you from fundamentals to interview-ready — practice tracks and full test series included."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.title} delay={i * 80} className="h-full">
              <article
                className={cn(
                  "surface relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7",
                  course.featured
                    ? "border-brand-400 ring-2 ring-brand-500/20 dark:border-brand-500/50"
                    : "hover:border-brand-300 dark:hover:border-brand-500/40",
                )}
              >
                {course.featured ? (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-glow">
                    <Icon name="star" size={12} /> Most popular
                  </span>
                ) : null}

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

                <ul className="mt-5 space-y-2.5">
                  {course.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2.5 text-sm">
                      <Icon
                        name="check"
                        size={16}
                        className="shrink-0 text-accent-500"
                      />
                      <span className="text-[rgb(var(--fg))]">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-1">
                  <Button
                    href="#footer"
                    variant={course.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Explore track
                    <Icon name="arrow" size={16} />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
