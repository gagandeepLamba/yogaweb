import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { InstructorCard } from "@/components/about/instructor-card";
import { AboutIntro } from "@/components/home/about-intro";
import { Mission } from "@/components/home/mission";
import { JoinBanner } from "@/components/home/join-banner";
import { instructors } from "@/data/instructors";
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
      <AboutIntro />
      <Mission />

      <section id="instructors" className="scroll-mt-24 bg-cream-deep py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Meet the Team" title="Certified instructors who genuinely care" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor, index) => (
              <Reveal key={instructor.name} delay={index * 90}>
                <InstructorCard instructor={instructor} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <JoinBanner />
    </>
  );
}
