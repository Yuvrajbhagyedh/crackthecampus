import { Skeleton } from "@/components/ui/Skeleton";

/**
 * Route-level loading UI. App Router renders this instantly while the page
 * streams in, giving a skeleton of the navbar + hero instead of a blank screen.
 */
export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Navbar placeholder */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="container-page flex h-16 items-center justify-between md:h-18">
          <div className="flex items-center gap-2.5">
            <Skeleton className="h-9 w-9 rounded-xl" />
            <Skeleton className="h-5 w-32" />
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-20" />
          </div>
          <Skeleton className="h-10 w-24 rounded-full" />
        </div>
      </div>

      {/* Hero placeholder */}
      <div className="container-page grid items-center gap-14 pt-32 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-36">
        <div className="max-w-2xl">
          <Skeleton className="h-7 w-56 rounded-full" />
          <div className="mt-7 space-y-3">
            <Skeleton className="h-12 w-4/5" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-2/3" />
          </div>
          <div className="mt-7 space-y-2.5">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="mt-9 flex gap-3">
            <Skeleton className="h-12 w-48 rounded-full" />
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </div>

        <div className="relative">
          <Skeleton className="h-[26rem] w-full rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
