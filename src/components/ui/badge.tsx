import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "sage",
  className,
}: {
  children: React.ReactNode;
  variant?: "sage" | "terracotta" | "gold" | "cream";
  className?: string;
}) {
  const variants = {
    sage: "bg-sage-100 text-sage-800",
    terracotta: "bg-terracotta-100 text-terracotta-700",
    gold: "bg-gold-300/50 text-terracotta-800",
    cream: "bg-cream-deep text-charcoal-soft",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
