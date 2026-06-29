import { features } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 scroll-mt-20">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 70}>
              <article className="surface group relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft dark:hover:border-brand-500/40">
                {/* hover wash */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/0 to-brand-500/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-500/[0.06] group-hover:to-accent-500/[0.06] group-hover:opacity-100" />

                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-500/20">
                  <Icon name={feature.icon} size={24} />
                </span>

                <h3 className="mt-5 font-display text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
