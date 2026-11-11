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
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
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

  const bookHref = siteConfig.contact.whatsappHref("Hi! I'd like to book a session.");

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-sage-600 text-white">
        <Container className="flex items-center justify-between gap-4 py-1.5 text-[14px]">
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25 transition-colors hover:bg-white/40"
            >
              <SocialIcon network="facebook" className="h-3 w-3" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25 transition-colors hover:bg-white/40"
            >
              <SocialIcon network="instagram" className="h-3 w-3" />
            </a>
          </div>
          <div className="flex items-center gap-4 font-display">
            <a href={siteConfig.contact.phoneHref} className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{siteConfig.contact.phoneDisplay}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <span className="hidden h-4 w-px bg-white/40 sm:block" />
            <a href={`mailto:${siteConfig.contact.email}`} className="hidden items-center gap-1.5 hover:underline sm:flex">
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.contact.email}
            </a>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-charcoal/8 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <Container className="flex h-[76px] items-center justify-between">
          <LogoMark />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              const linkClass = cn(
                "relative flex items-center gap-1 px-3 py-2 font-eyebrow text-[15px] text-charcoal transition-colors hover:text-sage-600",
                active && "text-sage-600 after:absolute after:inset-x-3 after:bottom-0.5 after:h-[2px] after:bg-sage-600"
              );

              if (!item.children) {
                return (
                  <Link key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.href}
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
                    <div className="absolute left-0 top-full min-w-[260px] pt-2">
                      <ul className="border-t-2 border-sage-600 bg-white py-2 shadow-xl shadow-charcoal/10">
                        {item.children.map((child) => (
                          <li key={child.href + child.label}>
                            <Link
                              href={child.href}
                              className="block px-5 py-2.5 font-eyebrow text-[14px] text-charcoal-soft transition-colors hover:bg-cream-deep hover:text-sage-600"
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

            <Button href={bookHref} size="sm" className="ml-3" target="_blank" rel="noopener noreferrer">
              Book a Session
            </Button>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-charcoal lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>

        {mobileOpen ? (
          <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-charcoal/8 bg-white lg:hidden">
            <Container className="flex flex-col py-3">
              {primaryNav.map((item) => {
                if (!item.children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="border-b border-charcoal/5 px-1 py-3.5 font-eyebrow text-[15px] text-charcoal"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.href} className="border-b border-charcoal/5">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-1 py-3.5 font-eyebrow text-[15px] text-charcoal"
                      onClick={() => setMobileSection((prev) => (prev === item.label ? null : item.label))}
                      aria-expanded={mobileSection === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", mobileSection === item.label && "rotate-180")}
                      />
                    </button>
                    {mobileSection === item.label ? (
                      <div className="mb-2 ml-2 flex flex-col border-l-2 border-sage-200 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className="py-2 text-[14px] text-charcoal-soft hover:text-sage-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}

              <Button href={bookHref} className="mt-4 w-full" target="_blank" rel="noopener noreferrer">
                Book a Session
              </Button>
            </Container>
          </div>
        ) : null}
      </header>
    </>
  );
}
