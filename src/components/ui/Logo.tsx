import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="#top"
      aria-label="CrackTheCampus home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg font-display text-lg font-bold tracking-tight",
        className,
      )}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:-rotate-6">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span>
        Crack<span className="text-gradient">TheCampus</span>
      </span>
    </Link>
  );
}
