"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-snap carousel with pagination dots. `itemClassName` sets the width of each
 * slide (e.g. `basis-full md:basis-1/3`); one dot per visible "page".
 */
export function Carousel({
  children,
  itemClassName = "basis-full md:basis-1/3",
  className,
}: {
  children: React.ReactNode;
  itemClassName?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setPages(Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth - 0.05)));
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  function go(index: number) {
    const el = ref.current;
    if (el) el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className={className}>
      <div
        ref={ref}
        onScroll={measure}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <div className={cn("shrink-0 snap-start px-2.5", itemClassName)}>{child}</div>
        ))}
      </div>

      {pages > 1 ? (
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Carousel pages">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => go(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full border border-charcoal/70 transition-colors",
                i === page ? "bg-charcoal" : "bg-transparent"
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
