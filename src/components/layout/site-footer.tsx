import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { footerNav } from "@/lib/nav";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";
import { FlowerArt } from "@/components/ui/decor";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="font-display text-[22px] text-white">{children}</h3>
      <span className="mt-3 block h-[2px] w-10 bg-terracotta-200" />
    </>
  );
}

function ContactRow({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-600 text-white">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="text-[15px] leading-snug text-white/90">
        <span className="block font-medium text-white">{title}</span>
        {children}
      </span>
    </li>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { address } = siteConfig.contact;

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#221d1a] text-white">
      <FlowerArt className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 text-white/[0.06]" />

      <Container className="relative grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.3fr]">
        <div>
          <FooterHeading>{siteConfig.shortName}</FooterHeading>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/90">
            At {siteConfig.name}, we believe in creating a nurturing space where individuals can reconnect with their
            inner selves, build strength, and find balance in body and mind.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-sage-600 text-white transition-colors hover:bg-sage-500"
            >
              <SocialIcon network="facebook" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-sage-600 text-white transition-colors hover:bg-sage-500"
            >
              <SocialIcon network="instagram" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-sage-600 text-white transition-colors hover:bg-sage-500"
            >
              <SocialIcon network="youtube" />
            </a>
          </div>
        </div>

        <div>
          <FooterHeading>Useful Links</FooterHeading>
          <ul className="mt-5 space-y-2.5">
            {footerNav.links.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="font-eyebrow text-[14px] text-white/85 transition-colors hover:text-terracotta-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Our Services</FooterHeading>
          <ul className="mt-5 space-y-2.5">
            {footerNav.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-eyebrow text-[14px] text-white/85 transition-colors hover:text-terracotta-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-5 space-y-5">
            <ContactRow icon={MapPin} title="Our Location">
              {address.line1}, {address.line2}, {address.city}, {address.region} {address.postalCode}
            </ContactRow>
            <ContactRow icon={Phone} title="Looking For Consultation">
              <a href={siteConfig.contact.phoneHref} className="hover:text-terracotta-200">
                {siteConfig.contact.phoneDisplay}
              </a>
            </ContactRow>
            <ContactRow icon={Mail} title="Email Us">
              <a href={`mailto:${siteConfig.contact.email}`} className="break-all hover:text-terracotta-200">
                {siteConfig.contact.email}
              </a>
            </ContactRow>
          </ul>
        </div>
      </Container>

      <div className="relative bg-terracotta-200 py-3 text-center text-[15px] text-charcoal">
        © {year} {siteConfig.name}. All rights reserved
      </div>
    </footer>
  );
}
