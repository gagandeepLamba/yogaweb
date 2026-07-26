import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PriceCard } from "@/components/pricing/price-card";
import { pricing } from "@/data/pricing";

export function PricingPreview() {
  const highlights = [
    pricing.group.daily[0],
    pricing.group.monthly[1],
    pricing.private.monthly[1],
  ];

  return (
    <section className="bg-cream-deep py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Simple, Flexible Pricing"
          title="Daily, weekly, or monthly — group or private"
          description="Every package below is available across daily, weekly, and monthly billing, for both group and private sessions. See the full breakdown and toggle between every combination."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 80}>
              <PriceCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/pricing" size="lg">
            See Full Pricing &amp; Packages <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
