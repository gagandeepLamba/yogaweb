import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { StyleIcon } from "@/components/ui/style-icon";
import { services } from "@/data/services";

const hints: Record<string, string> = {
  "private-yoga-sessions": "1-on-1 · studio, home or online",
  "group-classes": "Small groups · all levels",
  "online-yoga-classes": "Live from anywhere",
  "corporate-yoga": "Workplace wellness",
  "retreats-and-workshops": "Immersive weekends",
};

const links = [
  ...services.map((s) => ({
    href: `/services/${s.slug}`,
    title: s.title.replace(/^Private 1-on-1 /, "Private ").replace(/^Group Public /, "Group "),
    hint: hints[s.slug] ?? s.tagline,
    icon: s.icon,
  })),
  { href: "/yoga-styles", title: "14 Yoga Styles", hint: "Hatha · Vinyasa · Yin & more", icon: "lotus" as const },
];

/** Overlapping strip of quick links that sits on the bottom edge of the hero. */
export function QuickLinks() {
  return (
    <section className="relative z-10 -mt-10 pb-6">
      <Container>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-charcoal/5 bg-charcoal/10 shadow-xl shadow-sage-700/10 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-4 bg-white p-5 transition-colors hover:bg-cream-deep"
              
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream-deep text-sage-600 transition-colors group-hover:bg-terracotta-100">
                <StyleIcon icon={link.icon} className="h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[16.5px] font-semibold leading-snug text-sage-600">
                  {link.title}
                </span>
                <span className="mt-0.5 block truncate text-[12.5px] text-charcoal-faint">{link.hint}</span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-charcoal-faint transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
