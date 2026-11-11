import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { YogaStyle } from "@/types";
import { StyleIcon } from "@/components/ui/style-icon";
import { Badge } from "@/components/ui/badge";
import { yogaStyleImages } from "@/lib/images";

export function YogaStyleCard({ style }: { style: YogaStyle }) {
  const image = yogaStyleImages[style.slug];

  return (
    <Link
      href={`/yoga-styles/${style.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-charcoal/8 bg-white/70 shadow-sm shadow-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-lg hover:shadow-sage-900/10"
    >
      {image ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-sage-100">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
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
      </div>
    </Link>
  );
}
