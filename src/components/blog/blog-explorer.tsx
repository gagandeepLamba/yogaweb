"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/types";
import { BlogCard } from "@/components/blog/blog-card";
import { cn } from "@/lib/utils";

export function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(() => ["All", ...new Set(posts.map((post) => post.category))], [posts]);
  const [category, setCategory] = useState("All");

  const results = useMemo(
    () => (category === "All" ? posts : posts.filter((post) => post.category === category)),
    [posts, category]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              category === item
                ? "border-sage-600 bg-sage-600 text-cream"
                : "border-charcoal/10 bg-white text-charcoal-soft hover:border-sage-300"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
