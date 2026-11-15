import Image from "next/image";
import { Activity, Flame, Gauge } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureRows, InfoPair } from "@/components/ui/price-boxes";
import { yogaStyles } from "@/data/yoga-styles";
import { yogaStyleImages } from "@/lib/images";

export function StylesCarousel() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Go further"
          title="Explore Our Yoga Styles"
          description="Every yoga journey is different. Find the style that matches your energy, your goals and your level."
        />

        <Carousel className="mt-12" itemClassName="basis-full sm:basis-1/2 lg:basis-1/4">
          {yogaStyles.map((style) => {
            const image = yogaStyleImages[style.slug];
            return (
              <article
                key={style.slug}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/5 bg-white shadow-md shadow-sage-900/5"
              >
                <div className="relative aspect-[4/3]">
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                      className="object-cover"
                    />
                  ) : null}
                  <span className="absolute left-3 top-3 rounded-full bg-sage-700/90 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    {style.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[19px] font-semibold leading-snug text-sage-600">{style.name}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-[14px] leading-relaxed text-charcoal-soft">
                    {style.tagline}
                  </p>
                  <div className="mt-4">
                    <InfoPair items={[{ label: "Level", value: style.level.split(/[ –/]/)[0] }, { label: "Time", value: style.duration }]} />
                  </div>
                  <FeatureRows
                    rows={[
                      { icon: Gauge, text: `${style.intensity} intensity` },
                      { icon: Activity, text: style.focusAreas[0] ?? "Whole body" },
                      { icon: Flame, text: style.focusAreas[1] ?? "Breath & balance" },
                    ]}
                  />
                  <Button href={`/yoga-styles/${style.slug}`} arrow size="sm" className="mt-4 w-full">
                    View Style
                  </Button>
                </div>
              </article>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}
