import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingTables } from "@/components/pricing/pricing-tables";
import { ScheduleTable } from "@/components/pricing/schedule-table";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { CtaBanner } from "@/components/home/cta-banner";
import { pricing } from "@/data/pricing";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing — Daily, Weekly & Monthly Yoga Packages",
  description:
    "Compare group and private yoga pricing at " +
    siteConfig.name +
    ": daily drop-ins, weekly plans, and monthly memberships, for both group classes and 1-on-1 private sessions.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const pricingFaqs = faqs.filter((faq) => faq.category === "Pricing & Packages");

  return (
    <>
      <PageHero
        eyebrow="Pricing & Packages"
        title="Simple pricing for every kind of practice"
        description="Toggle between group and private sessions, and daily, weekly, or monthly billing, to find your perfect fit."
      />

      <section className="pb-20 sm:pb-28">
        <Container>
          <PricingTables pricing={pricing} />
        </Container>
      </section>

      <section className="bg-cream-deep py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Plan Your Week"
            title="Weekly group class schedule"
            description="All group classes below are included in your group membership or class pack. Private sessions are scheduled directly with your instructor."
          />
          <div className="mt-10">
            <ScheduleTable />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Pricing Questions" title="Common questions about packages & billing" />
          <div className="mt-10">
            <FaqAccordion items={pricingFaqs} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
