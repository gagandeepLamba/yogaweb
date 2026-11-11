import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const bannerImage =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&h=500&q=70";

export type Crumb = { label: string; href?: string };

/**
 * Inner-page title banner: dark photo background, large centred white title and a
 * "Home / Page" breadcrumb. `eyebrow` and `description` are optional extras for pages
 * that have no direct counterpart in the design.
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
    <section className={cn("relative overflow-hidden bg-[#141110] py-12 sm:py-16", className)}>
      <Image src={bannerImage} alt="" fill priority sizes="100vw" className="object-cover opacity-[0.18] grayscale" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      <Container className="relative text-center">
        <h1 className="mx-auto max-w-4xl font-display text-4xl text-balance text-white sm:text-5xl lg:text-[56px] lg:leading-tight">
          {title}
        </h1>

        <nav aria-label="Breadcrumb" className="mt-3">
          <ol className="flex flex-wrap items-center justify-center gap-2 font-eyebrow text-[14px] text-white/80">
            {trail.map((crumb, i) => (
              <li key={crumb.label + i} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden="true">/</span> : null}
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
