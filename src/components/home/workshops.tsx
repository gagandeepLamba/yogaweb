import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureRows, InfoPair } from "@/components/ui/price-boxes";
import { programs } from "@/data/programs";
import { siteConfig } from "@/lib/site-config";
import { CalendarCheck, Users } from "lucide-react";

export function Workshops() {
  return (
    <section className="px-3 py-6 sm:px-5">
      <div className="mx-auto max-w-[1360px] rounded-[2rem] bg-cream-deep py-16 sm:rounded-[2.5rem] sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Workshops & retreats"
            title="Yoga Workshops & Retreats"
            description="Step away from routine with immersive workshops, retreats and wellness series built for deeper practice."
          />

          <Carousel className="mt-12" itemClassName="basis-full sm:basis-1/2 lg:basis-1/3">
            {programs.map((program) => {
              const [type, length] = program.tag.split("·").map((part) => part.trim());
              return (
                <article
                  key={program.title}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/5 bg-white shadow-md shadow-sage-900/5"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={program.image.src}
                      alt={program.image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-sage-600">{program.title}</h3>
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
                      size="md"
                      className="mt-5 w-full"
                    >
                      Enquire Now
                    </Button>
                  </div>
                </article>
              );
            })}
          </Carousel>
        </Container>
      </div>
    </section>
  );
}
