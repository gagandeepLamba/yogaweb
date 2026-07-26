import { Container } from "@/components/ui/container";
import { BlobField } from "@/components/ui/blob-field";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden py-16 sm:py-20", className)}>
      <BlobField />
      <Container className="text-center">
        {eyebrow ? (
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-500">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-medium text-balance text-charcoal sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-soft">{description}</p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
