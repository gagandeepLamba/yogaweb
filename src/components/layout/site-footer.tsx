import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { footerNav } from "@/lib/nav";
import { Container } from "@/components/ui/container";
import { StyleIcon } from "@/components/ui/style-icon";
import { SocialIcon } from "@/components/ui/social-icon";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/8 bg-cream-deep">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-charcoal">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-600 text-cream">
              <StyleIcon icon="lotus" className="h-5 w-5" />
            </span>
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-soft">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-charcoal-soft transition-colors hover:bg-sage-600 hover:text-cream"
            >
              <SocialIcon network="instagram" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-charcoal-soft transition-colors hover:bg-sage-600 hover:text-cream"
            >
              <SocialIcon network="facebook" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-charcoal-soft transition-colors hover:bg-sage-600 hover:text-cream"
            >
              <SocialIcon network="youtube" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-charcoal">Studio</h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.studio.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-charcoal-soft transition-colors hover:text-sage-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-charcoal">Popular Styles</h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.yoga.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-charcoal-soft transition-colors hover:text-sage-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-charcoal">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-charcoal-soft">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
              <span>
                {siteConfig.contact.address.line1}, {siteConfig.contact.address.city},{" "}
                {siteConfig.contact.address.region} {siteConfig.contact.address.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-sage-600" />
              <a href={siteConfig.contact.phoneHref} className="hover:text-sage-700">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-sage-600" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-sage-700">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
              <span>
                {siteConfig.contact.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-charcoal/8">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-charcoal-faint sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with care for a calmer, stronger you.</p>
        </Container>
      </div>
    </footer>
  );
}
