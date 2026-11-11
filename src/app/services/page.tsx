import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Specialities } from "@/components/home/specialities";
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
      <Specialities all />
      <JoinBanner />
    </>
  );
}
