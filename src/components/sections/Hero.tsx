import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "./HeroVisual";

const proofPoints = [
  "No credit card required",
  "Free aptitude diagnostic",
  "Cancel anytime",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] dark:bg-grid-dark" />
        <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] dark:bg-brand-500/25" />
        <div className="absolute right-[-10%] top-40 h-72 w-72 rounded-full bg-accent-400/20 blur-[100px]" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
              </span>
              Placement season 2025 is open
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Crack every <span className="text-gradient">placement</span>,
              internship & aptitude test.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              One platform to go from rusty to recruiter-ready — adaptive mock
              tests, company-specific tracks, real coding practice and mentor-led
              interviews, built around a plan that adapts to you.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#courses" size="lg">
                Start preparing free
                <Icon name="arrow" size={18} />
              </Button>
              <Button href="#features" variant="secondary" size="lg">
                <Icon name="play" size={16} />
                See how it works
              </Button>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5">
                  <Icon name="check" size={16} className="text-accent-500" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
