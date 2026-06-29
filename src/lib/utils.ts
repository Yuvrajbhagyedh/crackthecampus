/**
 * Tiny className combiner — joins truthy class fragments with a single space.
 * Keeps JSX readable without pulling in an extra dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
