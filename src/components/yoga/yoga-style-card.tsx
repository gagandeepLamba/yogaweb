import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { YogaStyle } from "@/types";
import { StyleIcon } from "@/components/ui/style-icon";
import { Badge } from "@/components/ui/badge";

export function YogaStyleCard({ style }: { style: YogaStyle }) {
  return (
    <Link
      href={`/yoga-styles/${style.slug}`}
      className="group relative flex flex-col rounded-3xl border border-charcoal/8 bg-white/70 p-6 shadow-sm shadow-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-lg hover:shadow-sage-900/10 sm:p-7"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-700 transition-colors group-hover:bg-sage-600 group-hover:text-cream">
          <StyleIcon icon={style.icon} />
        </div>
        <ArrowUpRight className="h-5 w-5 text-charcoal/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta-500" />
      </div>

      <h3 className="mt-5 font-display text-xl font-medium text-charcoal">{style.name}</h3>
      <p className="mt-1 text-sm font-medium text-terracotta-600">{style.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-soft">
        {style.shortDescription}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge variant="sage">{style.level}</Badge>
        <Badge variant="cream">{style.duration}</Badge>
      </div>
    </Link>
  );
}
