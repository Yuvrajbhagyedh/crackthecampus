import { stats } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "./CountUp";

export function Stats() {
  return (
    <section id="stats" className="py-12 scroll-mt-20">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-12 text-white shadow-glow sm:px-10 lg:py-14">
          {/* decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/30 blur-3xl"
          />

          <div className="relative">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-brand-100">
              Trusted by students across the country
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                      <CountUp value={stat.value} />
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-white">
                      {stat.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-brand-100">
                      {stat.detail}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
