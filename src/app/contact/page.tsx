import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { HomeContact } from "@/components/home/home-contact";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us — Book a Class or Ask a Question",
  description: `Get in touch with ${siteConfig.name} via WhatsApp, phone, email, or our contact form. Find our studio address, hours, and directions.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { address, hours } = siteConfig.contact;
  const mapQuery = encodeURIComponent(
    `${address.line1}, ${address.city}, ${address.region} ${address.postalCode}`
  );

  return (
    <>
      <PageHero title="Contact Us" />

      <HomeContact
        plain
        heading="Have Any Questions"
        subheading="Feel free to contact us through anywhere."
        title="Let’s Talk — Ask Us Anything"
        topic="Contact page enquiry"
      />

      <section className="pb-4">
        <Container>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-cream-deep px-6 py-6 text-center sm:flex-row sm:justify-center sm:gap-8">
            <Clock className="h-6 w-6 text-sage-600" />
            {hours.map((h) => (
              <p key={h.days} className="text-[15px] text-charcoal-soft">
                <span className="font-medium text-charcoal">{h.days}:</span> {h.time}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-12" aria-label="Studio location map">
        <iframe
          title="Studio location map"
          src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
          width="100%"
          height="380"
          loading="lazy"
          className="block w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
