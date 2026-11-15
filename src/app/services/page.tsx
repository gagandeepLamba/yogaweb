import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/services/service-card";
import { JoinBanner } from "@/components/home/join-banner";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";
import { jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Yoga Services — Private, Group, Online & Corporate",
  description:
    "From private 1-on-1 sessions to group classes, live online yoga, corporate wellness programs, and retreats — explore every way to practice with " +
    siteConfig.name +
    ".",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/services/${service.slug}`,
      name: service.title,
    })),
  };

  return (
    <>
      <script {...jsonLdScriptProps(jsonLd)} />
      <PageHero title="Services" />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Practise your way"
            title="Private, Group, Online or Company-wide"
            description="However you want to practise, there is a format built for it — each with flexible daily, weekly and monthly pricing."
          />
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <JoinBanner />
    </>
  );
}
