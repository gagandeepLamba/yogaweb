import { Calendar, Clock, Home, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Two side-by-side labelled values (e.g. "DROP-IN / $28") used inside course cards. */
export function InfoPair({ items }: { items: [{ label: string; value: string }, { label: string; value: string }] }) {
  return (
    <div className="grid grid-cols-2 divide-x divide-charcoal/10 overflow-hidden rounded-xl bg-cream-deep text-center">
      {items.map((item) => (
        <div key={item.label} className="px-3 py-3">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal-faint">{item.label}</p>
          <p className="mt-0.5 font-display text-[17px] font-bold text-sage-600">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function FeatureRows({
  rows,
}: {
  rows: { icon?: LucideIcon; text: string }[];
}) {
  const icons = [Home, Clock, Calendar];
  return (
    <ul className="mt-4 divide-y divide-charcoal/8">
      {rows.map((row, i) => {
        const Icon = row.icon ?? icons[i % icons.length];
        return (
          <li key={row.text} className={cn("flex items-center gap-3 py-2.5 text-[14.5px] text-charcoal-soft")}>
            <Icon className="h-4 w-4 shrink-0 text-sage-600" />
            {row.text}
          </li>
        );
      })}
    </ul>
  );
}
