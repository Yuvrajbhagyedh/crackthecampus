import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function CallToAction() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-page">
        <Reveal className="surface relative overflow-hidden rounded-3xl border px-6 py-14 text-center sm:px-10 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-[90px]" />
            <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-accent-400/20 blur-[90px]" />
          </div>

          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Your placement season starts the day you start preparing.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Take the free diagnostic, get a personalised roadmap, and join
            thousands of students turning effort into offers.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#courses" size="lg">
              Start preparing free
              <Icon name="arrow" size={18} />
            </Button>
            <Button href="#testimonials" variant="secondary" size="lg">
              Read success stories
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
