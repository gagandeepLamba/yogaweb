import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { yogaStyleImages } from "@/lib/images";

const picks = [
  { slug: "hatha-yoga", name: "Hatha Yoga", caption: "Foundations" },
  { slug: "vinyasa-flow-yoga", name: "Vinyasa Flow", caption: "Moving breath" },
  { slug: "yin-yoga", name: "Yin Yoga", caption: "Deep release" },
  { slug: "meditation-pranayama", name: "Meditation", caption: "Stillness" },
];

export function ArchCards() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Find your practice"
          title="Four Ways to Begin"
          description="Not sure where to start? These four styles are where most of our new students land first."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {picks.map((pick) => {
            const image = yogaStyleImages[pick.slug];
            return (
              <Link
                key={pick.slug}
                href={`/yoga-styles/${pick.slug}`}
                className="group relative block rounded-t-[999px] rounded-b-3xl border border-terracotta-300/60 p-2 pt-5 transition-colors hover:border-terracotta-400"
              >
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-terracotta-400" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-2xl">
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 45vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/85 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-5 text-center text-white">
                    <p className="font-display text-base font-medium sm:text-xl">{pick.name}</p>
                    <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-terracotta-300">
                      — {pick.caption} —
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
