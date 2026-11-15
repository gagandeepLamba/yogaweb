import { cn } from "@/lib/utils";
import { GoldOrnament } from "@/components/ui/decor";

export function SectionBadge({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-4 py-1.5 font-sans text-[12px] font-semibold uppercase tracking-[0.16em]",
        light ? "border border-terracotta-300/40 bg-white/5 text-terracotta-300" : "bg-cream-deeper/70 text-sage-600"
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? <SectionBadge light={light}>{eyebrow}</SectionBadge> : null}
      <h2
        className={cn(
          "mt-4 font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-[44px]",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <GoldOrnament className={cn("mt-5", align === "center" ? "mx-auto" : "")} />
      {description ? (
        <p
          className={cn(
            "mt-5 text-[16px] leading-relaxed sm:text-[17px]",
            light ? "text-white/80" : "text-charcoal-soft"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
