import Link from "next/link";
import { StyleIcon } from "@/components/ui/style-icon";
import { siteConfig } from "@/lib/site-config";

export function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
          light ? "bg-terracotta-400 text-sage-700" : "bg-sage-600 text-terracotta-300"
        }`}
      >
        <StyleIcon icon="lotus" className="h-6 w-6" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[22px] font-bold tracking-tight ${
            light ? "text-white" : "text-sage-600"
          }`}
        >
          Shanti
        </span>
        <span
          className={`mt-0.5 block text-[11px] font-bold uppercase tracking-[0.2em] ${
            light ? "text-white/80" : "text-charcoal"
          }`}
        >
          Yoga Studio
        </span>
      </span>
    </Link>
  );
}
