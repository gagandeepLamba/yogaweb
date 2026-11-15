import Link from "next/link";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { footerNav } from "@/lib/nav";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/social-icon";
import { LogoMark } from "@/components/layout/logo-mark";

function FooterCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-terracotta-300">{children}</p>;
}

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item.href + item.label}>
          <Link href={item.href} className="text-[14.5px] text-white/80 transition-colors hover:text-terracotta-300">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const badges = ["E-RYT 500", "RYT 500", "CE Provider"];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { address, phoneDisplay, phoneHref, email } = siteConfig.contact;
  const social = [
    { network: "facebook", href: siteConfig.social.facebook, label: "Facebook" },
    { network: "instagram", href: siteConfig.social.instagram, label: "Instagram" },
    { network: "youtube", href: siteConfig.social.youtube, label: "YouTube" },
  ] as const;

  return (
    <footer className="relative mt-auto overflow-hidden bg-gradient-to-b from-sage-600 via-sage-700 to-sage-900 text-white">
      <Container className="relative pt-16">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_1.75fr_0.7fr_0.7fr]">
          <FooterCard>
            <LogoMark light />
            <p className="mt-6 font-display text-2xl leading-snug text-white">Where the breath keeps the rhythm.</p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-white/75">
              Hatha, Vinyasa, Yin, prenatal and 10+ more yoga styles — taught in small groups, privately, and online by
              certified instructors.
            </p>
            <Button href="/services" variant="secondary" size="sm" className="mt-6">
              Explore classes
            </Button>
          </FooterCard>

          <FooterCard>
            <CardLabel>Services &amp; Styles</CardLabel>
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              <LinkList items={footerNav.services} />
              <LinkList items={footerNav.styles} />
            </div>
          </FooterCard>

          <FooterCard>
            <CardLabel>Menu</CardLabel>
            <LinkList items={footerNav.menu.slice(0, 5)} />
          </FooterCard>

          <FooterCard>
            <CardLabel>More</CardLabel>
            <LinkList items={footerNav.menu.slice(5)} />
          </FooterCard>
        </div>

        <div className="mt-5 grid items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[1.6fr_1fr_1.2fr_auto] md:gap-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta-400 text-sage-800">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <CardLabel>Find us</CardLabel>
              <p className="mt-1 text-[15px] font-medium leading-snug">
                {address.line1}, {address.line2}, {address.city}, {address.region} {address.postalCode}
              </p>
            </div>
          </div>
          <div className="md:border-l md:border-white/10 md:pl-6">
            <CardLabel>Call us</CardLabel>
            <a href={phoneHref} className="mt-1 block text-[15px] font-medium hover:text-terracotta-300">
              {phoneDisplay}
            </a>
          </div>
          <div className="md:border-l md:border-white/10 md:pl-6">
            <CardLabel>Mail us</CardLabel>
            <a href={`mailto:${email}`} className="mt-1 block break-all text-[15px] font-medium hover:text-terracotta-300">
              {email}
            </a>
          </div>
          <div className="md:border-l md:border-white/10 md:pl-6">
            <CardLabel>Stay connected</CardLabel>
            <div className="mt-2 flex gap-2">
              {social.map(({ network, href, label }) => (
                <a
                  key={network}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/15"
                >
                  <SocialIcon network={network} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 py-10 sm:flex-row sm:items-center">
          <div>
            <CardLabel>Certified &amp; trusted</CardLabel>
            <p className="mt-2 font-display text-2xl text-white sm:text-3xl">Taught by certified instructors.</p>
          </div>
          <div className="flex gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-terracotta-300/50 p-1 text-center text-[11px] font-bold uppercase leading-tight tracking-wide text-terracotta-200 ring-1 ring-terracotta-300/20 ring-offset-4 ring-offset-transparent"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-black/20">
        <Container className="py-4 text-[13px] text-white/70">
          © {year} <span className="font-semibold text-white">{siteConfig.name}</span>. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
