"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { yogaStyles } from "@/data/yoga-styles";
import { services } from "@/data/services";
import { primaryNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { StyleIcon } from "@/components/ui/style-icon";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"styles" | "services" | null>(null);
  const [mobileSection, setMobileSection] = useState<"styles" | "services" | null>(null);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setMobileSection(null);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/8 bg-cream/85 backdrop-blur-md">
      <Container className="flex h-[4.5rem] items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-charcoal">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-600 text-cream">
            <StyleIcon icon="lotus" className="h-5 w-5" />
          </span>
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const hasMega = item.label === "Yoga Styles" || item.label === "Services";
            const key = item.label === "Yoga Styles" ? "styles" : "services";

            if (!hasMega) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-charcoal-soft transition-colors hover:bg-sage-100 hover:text-sage-800"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(key)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-charcoal-soft transition-colors hover:bg-sage-100 hover:text-sage-800"
                  onFocus={() => setOpenMenu(key)}
                  aria-expanded={openMenu === key}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>

                {openMenu === key ? (
                  <div className="absolute left-1/2 top-full w-[min(90vw,640px)] -translate-x-1/2 pt-3">
                    <div className="rounded-3xl border border-charcoal/8 bg-white p-5 shadow-xl shadow-charcoal/10">
                      {key === "styles" ? (
                        <div className="grid grid-cols-2 gap-1">
                          {yogaStyles.map((style) => (
                            <Link
                              key={style.slug}
                              href={`/yoga-styles/${style.slug}`}
                              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-charcoal-soft transition-colors hover:bg-sage-50 hover:text-sage-800"
                            >
                              <StyleIcon icon={style.icon} className="h-5 w-5 shrink-0 text-sage-600" />
                              {style.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-charcoal-soft transition-colors hover:bg-terracotta-50 hover:text-terracotta-700"
                            >
                              <StyleIcon icon={service.icon} className="h-5 w-5 shrink-0 text-terracotta-500" />
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                      <Link
                        href={item.href}
                        className="mt-3 block rounded-xl bg-cream-deep px-3 py-2 text-center text-sm font-semibold text-charcoal transition-colors hover:bg-cream-deeper"
                      >
                        View all {item.label.toLowerCase()} →
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="outline" size="sm">
            Contact
          </Button>
          <Button href={siteConfig.contact.whatsappHref("Hi! I'd like to book a class.")} variant="primary" size="sm">
            Book a Class
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen ? (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-charcoal/8 bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => {
              const hasSection = item.label === "Yoga Styles" || item.label === "Services";
              const key = item.label === "Yoga Styles" ? "styles" : "services";

              if (!hasSection) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-3 text-base font-medium text-charcoal hover:bg-sage-50"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-charcoal hover:bg-sage-50"
                    onClick={() => setMobileSection((prev) => (prev === key ? null : key))}
                    aria-expanded={mobileSection === key}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSection === key && "rotate-180")} />
                  </button>
                  {mobileSection === key ? (
                    <div className="ml-3 flex flex-col gap-0.5 border-l border-charcoal/10 pl-3">
                      {(key === "styles" ? yogaStyles : services).map((entry) => (
                        <Link
                          key={entry.slug}
                          href={`/${key === "styles" ? "yoga-styles" : "services"}/${entry.slug}`}
                          className="rounded-lg px-3 py-2 text-sm text-charcoal-soft hover:bg-sage-50"
                        >
                          {"name" in entry ? entry.name : entry.title}
                        </Link>
                      ))}
                      <Link href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-sage-700">
                        View all →
                      </Link>
                    </div>
                  ) : null}
                </div>
              );
            })}

            <div className="mt-3 flex flex-col gap-3 border-t border-charcoal/8 pt-4">
              <Button href="/contact" variant="outline" className="w-full">
                Contact
              </Button>
              <Button
                href={siteConfig.contact.whatsappHref("Hi! I'd like to book a class.")}
                variant="primary"
                className="w-full"
              >
                Book a Class
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
