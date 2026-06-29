"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** A display string such as "2.4L+", "92%" or "₹14.2 LPA". */
  value: string;
  durationMs?: number;
};

/**
 * Animates the numeric portion of a stat from zero to its target the first
 * time it scrolls into view, preserving any prefix/suffix (₹, %, L+, LPA…).
 */
export function CountUp({ value, durationMs = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(() => formatStart(value));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(/[\d.]+/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[0]);
    const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);

    let raf = 0;
    let start = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const step = (now: number) => {
          if (!start) start = now;
          const progress = Math.min((now - start) / durationMs, 1);
          // ease-out cubic for a snappy settle
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = (target * eased).toFixed(decimals);
          setDisplay(`${prefix}${current}${suffix}`);
          if (progress < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}

function formatStart(value: string): string {
  const match = value.match(/[\d.]+/);
  if (!match) return value;
  const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;
  const prefix = value.slice(0, match.index);
  const suffix = value.slice((match.index ?? 0) + match[0].length);
  return `${prefix}${(0).toFixed(decimals)}${suffix}`;
}
