import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-sage-600 text-white hover:bg-sage-700",
  secondary:
    "bg-gradient-to-r from-[#f5a52e] to-[#d9a521] text-white shadow-sm shadow-terracotta-700/20 hover:from-[#e89a22] hover:to-[#c99618]",
  outline: "border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white bg-transparent",
  light: "bg-white text-sage-600 hover:bg-cream-deep",
  ghost: "text-charcoal hover:bg-charcoal/5",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe57]",
};

const sizes = {
  sm: "px-5 py-2 text-[14px]",
  md: "px-6 py-3 text-[15.5px]",
  lg: "px-7 py-3.5 text-base",
};

const chipSizes = { sm: "h-6 w-6", md: "h-7 w-7", lg: "h-8 w-8" };

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Show the circular arrow chip that the design puts on primary actions. */
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href">)
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], arrow && "pr-2.5", className);
  const content = (
    <>
      {children}
      {arrow ? (
        <span
          className={cn(
            "flex items-center justify-center rounded-full bg-white/20 transition-transform group-hover/btn:rotate-12",
            chipSizes[size]
          )}
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      ) : null}
    </>
  );

  if (href) {
    const linkProps = props as Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
