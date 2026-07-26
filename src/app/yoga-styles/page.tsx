import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { StylesExplorer } from "@/components/yoga/styles-explorer";
import { yogaStyles } from "@/data/yoga-styles";
import { siteConfig } from "@/lib/site-config";
import { jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "All Yoga Styles — Hatha, Vinyasa, Ashtanga & More",
  description:
    "Explore all 14 yoga styles we teach at " +
    siteConfig.name +
    ": Hatha, Vinyasa, Ashtanga, Kundalini, Yin, Restorative, Power, Iyengar, Hot Yoga, Prenatal, Aerial, Chair, Kids, and Meditation — with full details on benefits and what to expect.",
  alternates: { canonical: "/yoga-styles" },
};

export default function YogaStylesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: yogaStyles.map((style, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/yoga-styles/${style.slug}`,
      name: style.name,
    })),
  };

  return (
    <>
      <script {...jsonLdScriptProps(jsonLd)} />
      <PageHero
        eyebrow="14 Styles, One Studio"
        title="Find the yoga style that fits your body and your day"
        description="Every style below includes a full breakdown of benefits, intensity, who it's for, and exactly what to expect in your first class."
      />
      <section className="pb-20 sm:pb-28">
        <Container>
          <StylesExplorer styles={yogaStyles} />
        </Container>
      </section>
    </>
  );
}
