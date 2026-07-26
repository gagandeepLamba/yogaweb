"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { YogaStyle } from "@/types";
import { YogaStyleCard } from "@/components/yoga/yoga-style-card";

const filters = ["All", "Beginner Friendly", "All Levels", "Intermediate", "High Intensity"] as const;

export function StylesExplorer({ styles }: { styles: YogaStyle[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const results = useMemo(() => {
    return styles.filter((style) => {
      const matchesQuery =
        query.trim().length === 0 ||
        [style.name, style.tagline, style.shortDescription, ...style.focusAreas]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        (filter === "Beginner Friendly" && style.level.toLowerCase().includes("beginner")) ||
        (filter === "All Levels" && style.level === "All Levels") ||
        (filter === "Intermediate" && style.level.toLowerCase().includes("intermediate")) ||
        (filter === "High Intensity" && (style.intensity === "High" || style.intensity === "Medium-High"));

      return matchesQuery && matchesFilter;
    });
  }, [styles, query, filter]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-faint" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search styles or benefits…"
            className="w-full rounded-full border border-charcoal/10 bg-white py-2.5 pl-11 pr-4 text-sm text-charcoal placeholder:text-charcoal-faint focus:border-sage-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === item
                  ? "border-sage-600 bg-sage-600 text-cream"
                  : "border-charcoal/10 bg-white text-charcoal-soft hover:border-sage-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="mt-16 text-center text-charcoal-soft">
          No styles match your search. Try a different term or filter.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((style) => (
            <YogaStyleCard key={style.slug} style={style} />
          ))}
        </div>
      )}
    </div>
  );
}
