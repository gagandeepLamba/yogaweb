import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { FeaturedStyles } from "@/components/home/featured-styles";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ServicesPreview } from "@/components/home/services-preview";
import { PricingPreview } from "@/components/home/pricing-preview";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import { FaqTeaser } from "@/components/home/faq-teaser";
import { CtaBanner } from "@/components/home/cta-banner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedStyles />
      <WhyChooseUs />
      <ServicesPreview />
      <PricingPreview />
      <TestimonialsPreview />
      <BlogPreview />
      <FaqTeaser />
      <CtaBanner />
    </>
  );
}
