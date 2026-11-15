import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck, Users } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FeatureRows, InfoPair } from "@/components/ui/price-boxes";
import { JoinBanner } from "@/components/home/join-banner";
import { programs } from "@/data/programs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Programs & Workshops",
  description: `Retreats, workshops and wellness programs at ${siteConfig.name} — designed for deeper practice and lasting change.`,
  alternates: { canonical: "/workshop" },
};

export default function WorkshopPage() {
  return (
    <>
      <PageHero title="Workshop" />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Join now"
            title="Programs & Workshops"
            description="Join our specialised retreats and workshops, designed for deeper practice."
          />

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const [type, length] = program.tag.split("·").map((part) => part.trim());
              return (
                <article
                  key={program.title}
                  className="flex flex-col overflow-hidden rounded-3xl border border-charcoal/5 bg-white shadow-md shadow-sage-900/5"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={program.image.src}
                      alt={program.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-semibold text-sage-600">{program.title}</h2>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal-soft">{program.summary}</p>
                    <div className="mt-5">
                      <InfoPair items={[{ label: "Format", value: type }, { label: "Length", value: length ?? "Flexible" }]} />
                    </div>
                    <FeatureRows
                      rows={[
                        { icon: Users, text: "Small groups, all levels" },
                        { icon: CalendarCheck, text: "Dates announced monthly" },
                      ]}
                    />
                    <Button
                      href={siteConfig.contact.whatsappHref(`Hi! I'd like to join: ${program.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      arrow
                      className="mt-5 w-full"
                    >
                      Enquire Now
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <JoinBanner />
    </>
  );
}
