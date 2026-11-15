import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { QuickLinks } from "@/components/home/quick-links";
import { AboutIntro } from "@/components/home/about-intro";
import { WhyChoose } from "@/components/home/why-choose";
import { StudentStories } from "@/components/home/student-stories";
import { Timeline } from "@/components/home/timeline";
import { Courses } from "@/components/home/courses";
import { Credentials } from "@/components/home/credentials";
import { WhyPractice } from "@/components/home/why-practice";
import { Workshops } from "@/components/home/workshops";
import { StylesCarousel } from "@/components/home/styles-carousel";
import { ClassStructure } from "@/components/home/class-structure";
import { ArchCards } from "@/components/home/arch-cards";
import { StudioLife } from "@/components/home/studio-life";
import { Team } from "@/components/home/team";
import { JoinBanner } from "@/components/home/join-banner";
import { Gallery } from "@/components/home/gallery";
import { Reviews } from "@/components/home/reviews";
import { FaqSection } from "@/components/home/faq-section";
import { HomeContact } from "@/components/home/home-contact";
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
      <QuickLinks />
      <AboutIntro />
      <WhyChoose />
      <StudentStories />
      <Timeline />
      <Courses />
      <Credentials />
      <WhyPractice />
      <Workshops />
      <StylesCarousel />
      <ClassStructure />
      <ArchCards />
      <StudioLife />
      <Team />
      <JoinBanner />
      <Gallery />
      <Reviews />
      <FaqSection />
      <HomeContact />
    </>
  );
}
