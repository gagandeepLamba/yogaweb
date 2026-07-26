import { Plus } from "lucide-react";
import type { FaqItem } from "@/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-charcoal/8 bg-white/70 px-5 py-4 open:shadow-sm open:shadow-charcoal/5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium text-charcoal marker:content-none">
            {item.question}
            <Plus className="h-5 w-5 shrink-0 text-sage-600 transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
