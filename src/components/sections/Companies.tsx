import { companies } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Companies() {
  // Duplicate the list so the marquee can loop seamlessly.
  const row = [...companies, ...companies];

  return (
    <section id="companies" className="py-16 scroll-mt-20">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">
            Where our students get placed
          </p>
        </Reveal>

        <div className="mask-fade-x mt-8 flex overflow-hidden">
          <ul className="flex shrink-0 animate-marquee items-center gap-4 pr-4 pause-on-hover">
            {row.map((company, i) => (
              <li
                key={`${company.name}-${i}`}
                aria-hidden={i >= companies.length}
                className="surface flex h-16 min-w-[10.5rem] items-center justify-center rounded-2xl border px-7"
              >
                <span className="font-display text-lg font-bold tracking-tight text-muted">
                  {company.short}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
