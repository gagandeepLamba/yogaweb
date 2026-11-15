import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { AboutIntro } from "@/components/home/about-intro";
import { WhyChoose } from "@/components/home/why-choose";
import { ClassStructure } from "@/components/home/class-structure";
import { Team } from "@/components/home/team";
import { JoinBanner } from "@/components/home/join-banner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us — Our Story & Instructors",
  description: `Meet the instructors behind ${siteConfig.name} and learn what shapes how we teach — accessible, alignment-focused, and genuinely welcoming yoga for every body.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" />
      <AboutIntro standalone />
      <WhyChoose />
      <ClassStructure />
      <div id="instructors" className="scroll-mt-24">
        <Team />
      </div>
      <JoinBanner />
    </>
  );
}
