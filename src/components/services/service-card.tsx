import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Service } from "@/types";
import { StyleIcon } from "@/components/ui/style-icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-3xl border border-charcoal/8 bg-white/70 p-7 shadow-sm shadow-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta-300 hover:shadow-lg hover:shadow-terracotta-900/10"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta-100 text-terracotta-600 transition-colors group-hover:bg-terracotta-500 group-hover:text-cream">
          <StyleIcon icon={service.icon} />
        </div>
        <ArrowUpRight className="h-5 w-5 text-charcoal/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta-500" />
      </div>

      <h3 className="mt-5 font-display text-xl font-medium text-charcoal">{service.title}</h3>
      <p className="mt-1 text-sm font-medium text-sage-700">{service.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-soft">{service.summary}</p>

      <ul className="mt-5 space-y-2 border-t border-charcoal/8 pt-4">
        {service.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-charcoal-soft">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
            {feature}
          </li>
        ))}
      </ul>
    </Link>
  );
}
