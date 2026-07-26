import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us — Book a Class or Ask a Question",
  description: `Get in touch with ${siteConfig.name} via WhatsApp, phone, email, or our contact form. Find our studio address, hours, and directions.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.region} ${siteConfig.contact.address.postalCode}`
  );

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd love to hear from you"
        description="Questions about a class, pricing, or a corporate program? Reach out — most messages get a reply within one business day."
      />

      <section className="pb-20 sm:pb-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-charcoal/8 bg-white/70 p-7 shadow-sm shadow-charcoal/5 sm:p-9">
              <h2 className="font-display text-2xl font-medium text-charcoal">Send us a message</h2>
              <p className="mt-2 text-sm text-charcoal-soft">
                Fill out the form and we&rsquo;ll get back to you by email — or skip the wait and message
                us directly on WhatsApp.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-charcoal/8 bg-white p-7 shadow-sm shadow-charcoal/5">
              <h3 className="font-display text-lg font-medium text-charcoal">Contact details</h3>
              <ul className="mt-5 space-y-4 text-sm text-charcoal-soft">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sage-600" />
                  <span>
                    {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
                    <br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.region}{" "}
                    {siteConfig.contact.address.postalCode}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-sage-600" />
                  <a href={siteConfig.contact.phoneHref} className="hover:text-sage-700">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-sage-600" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-sage-700">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sage-600" />
                  <span>
                    {siteConfig.contact.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>

              <Button
                href={siteConfig.contact.whatsappHref("Hi! I have a question about your classes.")}
                variant="whatsapp"
                className="mt-6 w-full"
              >
                Chat on WhatsApp
              </Button>
            </div>

            <div className="overflow-hidden rounded-3xl border border-charcoal/8 shadow-sm shadow-charcoal/5">
              <iframe
                title="Studio location map"
                src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="280"
                loading="lazy"
                className="block"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
