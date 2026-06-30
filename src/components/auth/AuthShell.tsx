import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

const highlights = [
  "Adaptive mock tests modelled on 40+ recruiters",
  "1,200+ coding problems with editorial walkthroughs",
  "AI mock interviews with instant feedback",
];

/**
 * Two-pane auth layout: a marketing brand panel (hidden on small screens) and
 * the form area. Shared by the login and register routes.
 */
export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      {/* Brand panel */}
      <aside className="relative hidden overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-violet-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
        />

        <div className="relative">
          <Logo
            href="/"
            className="text-white [&_span.text-gradient]:bg-none [&_span.text-gradient]:text-white"
          />
        </div>

        <div className="relative">
          <h2 className="max-w-md font-display text-3xl font-bold leading-tight">
            Everything you need to go from rusty to recruiter-ready.
          </h2>
          <ul className="mt-8 space-y-3.5">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-brand-100">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15">
                  <Icon name="check" size={13} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-sm text-brand-200/80">
          Join 2.4 lakh+ students preparing the smart way.
        </p>
      </aside>

      {/* Form panel */}
      <section className="flex min-h-screen flex-col px-6 py-8 sm:px-10 lg:py-12">
        <div className="flex items-center justify-between">
          <Logo href="/" className="lg:hidden" />
          <Link
            href="/"
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-[rgb(var(--fg))]"
          >
            <Icon name="arrow" size={16} className="rotate-180" />
            Back to home
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm py-8">{children}</div>
        </div>
      </section>
    </main>
  );
}
