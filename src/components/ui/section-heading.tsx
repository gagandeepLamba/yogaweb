import { cn } from "@/lib/utils";

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
      {eyebrow ? (
        <span
          className={cn(
            "block font-eyebrow text-[17px]",
            light ? "text-terracotta-200" : "text-sage-600"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-display text-3xl text-balance sm:text-4xl lg:text-[40px] lg:leading-[1.2]",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <span
        className={cn(
          "mt-4 block h-[2px] w-14",
          light ? "bg-terracotta-200" : "bg-sage-600",
          align === "center" && "mx-auto"
        )}
      />
      {description ? (
        <p
          className={cn(
            "mt-5 font-display text-base sm:text-lg",
            light ? "text-white/85" : "text-charcoal-soft"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
