import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { JoinBanner } from "@/components/home/join-banner";
import { commonGoals, goalAreas, conditionsDisclaimer } from "@/data/conditions";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "We Help With",
  description: `Common wellness goals ${siteConfig.name} supports — stress, sleep, back care, joint mobility, recovery and more.`,
  alternates: { canonical: "/we-help" },
};

function ArrowItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-[15px] text-charcoal">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-600 text-white">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
      {children}
    </li>
  );
}

export default function WeHelpPage() {
  return (
    <>
      <PageHero title="We Help With" />

      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="text-center font-display text-2xl text-charcoal sm:text-3xl">Common Goals</h2>
          <span className="mx-auto mt-3 block h-[2px] w-14 bg-sage-600" />
          <ul className="mx-auto mt-10 grid max-w-5xl gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {commonGoals.map((goal) => (
              <ArrowItem key={goal}>{goal}</ArrowItem>
            ))}
          </ul>

          <div className="mt-16">
            <SectionHeading title="Other Areas" className="[&_h2]:text-2xl sm:[&_h2]:text-3xl" />
            <div className="mx-auto mt-10 grid max-w-5xl gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {goalAreas.map((area) => (
                <div key={area.name}>
                  <ArrowItem>
                    <span className="font-display text-lg">{area.name}</span>
                  </ArrowItem>
                  <ul className="ml-9 mt-3 space-y-2 text-[15px] text-charcoal-soft">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-[13px] leading-relaxed text-charcoal-faint">
            {conditionsDisclaimer}
          </p>
        </Container>
      </section>

      <JoinBanner />
    </>
  );
}
