import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const bannerImage =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&h=560&q=75";

export type Crumb = { label: string; href?: string };

/**
 * Inner-page banner: photo background under a deep navy wash, centred white title and a
 * "Home › Page" breadcrumb. `description` is an optional extra line for pages without a
 * direct counterpart in the design.
 */
export function PageHero({
  title,
  description,
  crumbs,
  className,
  children,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
  crumbs?: Crumb[];
  className?: string;
  children?: React.ReactNode;
}) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...(crumbs ?? []), { label: title }];

  return (
    <section className={cn("relative overflow-hidden bg-sage-700 py-16 sm:py-24", className)}>
      <Image src={bannerImage} alt="" fill priority sizes="100vw" className="object-cover opacity-60" />
      <div className="absolute inset-0 bg-sage-700/75" />

      <Container className="relative text-center">
        <h1 className="mx-auto max-w-4xl font-display text-4xl text-balance text-white sm:text-5xl lg:text-[52px] lg:leading-tight">
          {title}
        </h1>

        <nav aria-label="Breadcrumb" className="mt-3">
          <ol className="flex flex-wrap items-center justify-center gap-1.5 text-[14px] text-white/80">
            {trail.map((crumb, i) => (
              <li key={crumb.label + i} className="flex items-center gap-1.5">
                {i > 0 ? <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-semibold text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {description ? (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">{description}</p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
