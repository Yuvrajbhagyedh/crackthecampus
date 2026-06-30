import { cn } from "@/lib/utils";

/**
 * Shimmering placeholder block used by route-level loading states.
 * Relies on the `shimmer` keyframe defined in tailwind.config.ts.
 */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-lg bg-[rgb(var(--border))]/60",
        className,
      )}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/10" />
    </div>
  );
}
