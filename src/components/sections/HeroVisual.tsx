import { Icon } from "@/components/ui/Icon";

// Weekly mock-score bars for the mini chart inside the preview card.
const bars = [42, 55, 48, 67, 72, 81, 88];

/**
 * Hand-built "product preview" mockup used as the hero visual. Pure markup +
 * Tailwind so it stays crisp at any resolution and themes with the rest of the
 * page — no raster assets to load.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Main dashboard card */}
      <div className="surface relative rounded-3xl border p-5 shadow-soft sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Placement readiness
            </p>
            <p className="mt-1 font-display text-2xl font-bold">78%</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/15 px-2.5 py-1 text-xs font-semibold text-accent-600">
            <Icon name="chart" size={14} /> +12% this week
          </span>
        </div>

        {/* Progress bars */}
        <div className="mt-5 flex h-32 items-end gap-2.5">
          {bars.map((value, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full flex-1 items-end rounded-lg bg-brand-500/10">
                <div
                  className="w-full rounded-lg bg-gradient-to-t from-brand-600 to-brand-400"
                  style={{ height: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill rows */}
        <div className="mt-5 space-y-3">
          {[
            { label: "Quantitative Aptitude", value: 86 },
            { label: "Data Structures", value: 72 },
            { label: "Verbal Ability", value: 64 },
          ].map((skill) => (
            <div key={skill.label}>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-muted">{skill.label}</span>
                <span className="font-semibold">{skill.value}%</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-brand-500/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge: streak */}
      <div className="surface absolute -left-4 top-16 hidden rounded-2xl border p-3 shadow-soft animate-float sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
            <Icon name="target" size={18} />
          </span>
          <div>
            <p className="text-sm font-bold leading-none">24-day</p>
            <p className="text-xs text-muted">practice streak</p>
          </div>
        </div>
      </div>

      {/* Floating badge: offer */}
      <div
        className="surface absolute -bottom-5 -right-3 hidden rounded-2xl border p-3 shadow-soft animate-float sm:block"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-500 text-white">
            <Icon name="check" size={18} />
          </span>
          <div>
            <p className="text-sm font-bold leading-none">Offer secured</p>
            <p className="text-xs text-muted">SDE · ₹12 LPA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
