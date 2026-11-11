import Link from "next/link";
import { StyleIcon } from "@/components/ui/style-icon";
import { siteConfig } from "@/lib/site-config";

export function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
      <span
        className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 ${
          light ? "border-terracotta-200 text-terracotta-200" : "border-sage-600 text-sage-600"
        }`}
      >
        <StyleIcon icon="lotus" className="h-6 w-6" />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-eyebrow text-[15px] font-bold uppercase tracking-wide ${
            light ? "text-white" : "text-sage-600"
          }`}
        >
          {siteConfig.name}
        </span>
        <span className={`block font-eyebrow text-[11px] font-semibold ${light ? "text-white/80" : "text-charcoal"}`}>
          &ldquo;{siteConfig.tagline}&rdquo;
        </span>
      </span>
    </Link>
  );
}
