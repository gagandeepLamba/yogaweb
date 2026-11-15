"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { primaryNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/social-icon";
import { LogoMark } from "@/components/layout/logo-mark";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  const path = href.split("#")[0] || "/";
  if (href.includes("#")) return false;
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setMobileSection(null);
    setOpenMenu(null);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const social = [
    { network: "facebook", href: siteConfig.social.facebook, label: "Facebook" },
    { network: "instagram", href: siteConfig.social.instagram, label: "Instagram" },
    { network: "youtube", href: siteConfig.social.youtube, label: "YouTube" },
  ] as const;

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-sage-700 text-white">
        <Container className="flex items-center justify-between gap-4 py-2 text-[13.5px]">
          <div className="flex items-center gap-5">
            <a href={`mailto:${siteConfig.contact.email}`} className="hidden items-center gap-2 hover:text-terracotta-300 sm:flex">
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.contact.email}
            </a>
            <a href={siteConfig.contact.phoneHref} className="flex items-center gap-2 whitespace-nowrap hover:text-terracotta-300">
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-2 hidden rounded-full border border-terracotta-300/50 bg-terracotta-300/10 px-3 py-0.5 text-[11px] font-semibold text-terracotta-200 md:inline">
              Free trial class for new students
            </span>
            {social.map(({ network, href, label }) => (
              <a
                key={network}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15"
              >
                <SocialIcon network={network} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-charcoal/5 bg-white shadow-[0_2px_14px_rgba(21,33,36,0.05)]">
        <Container className="flex h-[78px] items-center justify-between gap-4">
          <LogoMark />

          <nav className="hidden items-center xl:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              const linkClass = cn(
                "relative flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-sage-600 transition-colors hover:text-terracotta-600",
                active &&
                  "after:absolute after:inset-x-3 after:-bottom-1.5 after:h-[2px] after:rounded-full after:bg-terracotta-400"
              );

              if (!item.children) {
                return (
                  <Link key={item.label} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={linkClass}
                    onFocus={() => setOpenMenu(item.label)}
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  </Link>

                  {openMenu === item.label ? (
                    <div className="absolute left-0 top-full pt-3">
                      <ul
                        className={cn(
                          "grid gap-0.5 rounded-2xl border border-charcoal/5 bg-white p-2 shadow-xl shadow-sage-700/10",
                          item.columns === 2 ? "w-[520px] grid-cols-2" : "min-w-[270px]"
                        )}
                      >
                        {item.children.map((child) => (
                          <li key={child.href + child.label}>
                            <Link
                              href={child.href}
                              className="block rounded-xl px-4 py-2.5 text-[14px] font-medium text-charcoal-soft transition-colors hover:bg-cream-deep hover:text-sage-600"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href={siteConfig.contact.whatsappHref("Hi! I'd like to enquire about your classes.")}
              target="_blank"
              rel="noopener noreferrer"
              arrow
              size="md"
              className="hidden sm:inline-flex"
            >
              Enquire Now
            </Button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-deep text-sage-600 xl:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>

        {mobileOpen ? (
          <div className="max-h-[calc(100vh-110px)] overflow-y-auto border-t border-charcoal/5 bg-white xl:hidden">
            <Container className="flex flex-col py-3">
              {primaryNav.map((item) => {
                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="border-b border-charcoal/5 px-1 py-3.5 text-[16px] font-medium text-sage-600"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className="border-b border-charcoal/5">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-1 py-3.5 text-[16px] font-medium text-sage-600"
                      onClick={() => setMobileSection((prev) => (prev === item.label ? null : item.label))}
                      aria-expanded={mobileSection === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", mobileSection === item.label && "rotate-180")}
                      />
                    </button>
                    {mobileSection === item.label ? (
                      <div className="mb-2 ml-2 flex flex-col border-l-2 border-terracotta-300 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className="py-2 text-[14.5px] text-charcoal-soft hover:text-sage-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}

              <Button
                href={siteConfig.contact.whatsappHref("Hi! I'd like to enquire about your classes.")}
                target="_blank"
                rel="noopener noreferrer"
                arrow
                className="mt-4 w-full"
              >
                Enquire Now
              </Button>
            </Container>
          </div>
        ) : null}
      </header>
    </>
  );
}
