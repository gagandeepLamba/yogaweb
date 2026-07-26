import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-sage-600 text-cream hover:bg-sage-700 shadow-sm shadow-sage-900/10 hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "bg-terracotta-500 text-cream hover:bg-terracotta-600 shadow-sm shadow-terracotta-900/10 hover:shadow-md hover:-translate-y-0.5",
  outline:
    "border-2 border-charcoal/15 text-charcoal hover:border-sage-500 hover:text-sage-700 bg-transparent",
  ghost: "text-charcoal hover:bg-charcoal/5",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-sm hover:shadow-md hover:-translate-y-0.5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href">)
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const linkProps = props as Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
