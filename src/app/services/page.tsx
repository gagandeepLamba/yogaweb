import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/services/service-card";
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
      <PageHero
        eyebrow="Practice Your Way"
        title="Private, group, online, or company-wide"
        description="However you want to practice, there's a format built for it — each with flexible daily, weekly, and monthly pricing."
      />
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
