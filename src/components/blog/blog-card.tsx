import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/types";
import { Badge } from "@/components/ui/badge";
import { blogImages } from "@/lib/images";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const image = blogImages[post.slug];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-charcoal/8 bg-white/70 shadow-sm shadow-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-lg hover:shadow-sage-900/10"
    >
      {image ? (
        <div className={`relative overflow-hidden bg-sage-100 ${featured ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className={`flex flex-1 flex-col ${featured ? "p-9" : "p-7"}`}>
        <div className="flex items-center gap-3">
          <Badge variant="sage">{post.category}</Badge>
          <span className="flex items-center gap-1 text-xs text-charcoal-faint">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3
          className={`mt-4 font-display font-medium text-charcoal text-balance ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-soft">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between border-t border-charcoal/8 pt-4 text-sm">
          <div>
            <p className="font-semibold text-charcoal">{post.author}</p>
            <p className="text-xs text-charcoal-faint">{formatDate(post.date)}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-charcoal/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta-500" />
        </div>
      </div>
    </Link>
  );
}
