import { Check, Sparkles } from "lucide-react";
import type { PricingPlan } from "@/types";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function PriceCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl border p-7 transition-all duration-300",
        plan.popular
          ? "border-terracotta-400 bg-white shadow-xl shadow-terracotta-900/10 sm:-translate-y-2"
          : "border-charcoal/10 bg-white/70 shadow-sm shadow-charcoal/5 hover:-translate-y-1 hover:shadow-md"
      )}
    >
      {plan.popular ? (
        <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-terracotta-500 px-3 py-1 text-xs font-semibold text-cream shadow-sm">
          <Sparkles className="h-3.5 w-3.5" /> Most Popular
        </span>
      ) : null}

      <h3 className="font-display text-xl font-medium text-charcoal">{plan.name}</h3>
      <p className="mt-1 text-sm text-charcoal-soft">{plan.sessionsLabel}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-4xl font-medium text-charcoal">
          {formatPrice(plan.price)}
        </span>
        <span className="text-sm text-charcoal-faint">{plan.billingLabel}</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">{plan.description}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-charcoal-soft">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={siteConfig.contact.whatsappHref(`Hi! I'd like to book the "${plan.name}" plan.`)}
        variant={plan.popular ? "secondary" : "outline"}
        className="mt-7 w-full"
      >
        Book on WhatsApp
      </Button>
    </div>
  );
}
