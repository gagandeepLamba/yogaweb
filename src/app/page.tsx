import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Specialities } from "@/components/home/specialities";
import { AboutIntro } from "@/components/home/about-intro";
import { Mission } from "@/components/home/mission";
import { JoinBanner } from "@/components/home/join-banner";
import { Founder } from "@/components/home/founder";
import { Programs } from "@/components/home/programs";
import { Community } from "@/components/home/community";
import { Gallery } from "@/components/home/gallery";
import { HelpSection } from "@/components/home/help-section";
import { HomeContact } from "@/components/home/home-contact";
import { TestimonialsSlider } from "@/components/home/testimonials-slider";
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
      <Specialities />
      <AboutIntro />
      <Mission />
      <JoinBanner />
      <Founder />
      <Programs />
      <Community />
      <Gallery />
      <HelpSection />
      <HomeContact />
      <TestimonialsSlider />
    </>
  );
}
