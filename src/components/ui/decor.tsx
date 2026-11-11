import { cn } from "@/lib/utils";

/** Outline flower used as a corner ornament (gold line art). */
export function FlowerArt({ className }: { className?: string }) {
  const petal = "rgba(255,255,255,.75)";
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-gold-500", className)}
      aria-hidden="true"
    >
      <path d="M100 110C80 90 70 60 90 30c10 10 25 30 10 80Z" fill={petal} />
      <path d="M100 110C130 100 160 70 150 40c-20 0-45 25-50 70Z" fill={petal} />
      <path d="M100 110C70 100 30 105 15 85c20-15 55-10 85 25Z" fill={petal} />
      <path d="M100 110C75 130 55 165 70 185c25-5 40-40 30-75Z" fill={petal} />
      <path d="M100 110C125 125 165 130 185 115c-10-25-50-30-85-5Z" fill={petal} />
      <circle cx="100" cy="110" r="5" />
    </svg>
  );
}

/** Slim leafy branch ornament. */
export function LeafArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 240"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-gold-500", className)}
      aria-hidden="true"
    >
      <path d="M40 235C40 160 42 90 40 15" />
      {[60, 100, 140, 180, 220].map((y, i) => {
        const dir = i % 2 ? -1 : 1;
        return (
          <path
            key={y}
            d={`M40 ${y}C${40 + dir * 30} ${y - 8} ${40 + dir * 36} ${y - 32} ${40 + dir * 28} ${y - 38}C${40 + dir * 10} ${y - 32} 40 ${y - 14} 40 ${y}Z`}
          />
        );
      })}
    </svg>
  );
}

type EdgeVariant = "brush" | "zigzag" | "wave";

const zigzag =
  "M0 60 L0 20 " +
  Array.from({ length: 48 }, (_, i) => `L${i * 30 + 15} ${i % 2 ? 20 : 4} L${(i + 1) * 30} 20`).join(" ") +
  " L1440 60Z";

const edgePaths: Record<EdgeVariant, string> = {
  brush:
    "M0 40 L30 30 L70 38 L120 26 L190 36 L260 24 L330 34 L420 22 L520 32 L610 24 L700 34 L800 22 L900 32 L1000 24 L1100 34 L1200 26 L1300 36 L1440 28 L1440 60 L0 60Z",
  zigzag,
  wave: "M0 40 C240 0 480 0 720 22 C960 44 1200 40 1440 10 L1440 60 L0 60Z",
};

/**
 * Decorative section edge. It is drawn in `currentColor`, so give it the same text
 * colour as the section's background (e.g. `text-cream-deep`) and place it inside a
 * `relative` section — it sits just above the top edge or below the bottom edge.
 */
export function SectionEdge({
  variant,
  position = "top",
  className,
}: {
  variant: EdgeVariant;
  position?: "top" | "bottom";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 h-[34px] w-full fill-current sm:h-[50px]",
        position === "top"
          ? "top-0 -translate-y-[calc(100%-1px)]"
          : "bottom-0 translate-y-[calc(100%-1px)] rotate-180",
        className
      )}
    >
      <path d={edgePaths[variant]} />
    </svg>
  );
}
