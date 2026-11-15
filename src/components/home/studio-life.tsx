import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/ui/carousel";
import { SectionBadge } from "@/components/ui/section-heading";
import { galleryImages } from "@/lib/home-images";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { value: "06:00", label: "First class" },
  { value: "14", label: "Yoga styles" },
  { value: "3", label: "Lead teachers" },
  { value: "7", label: "Days a week" },
];

export function StudioLife() {
  return (
    <section className="bg-sage-600 py-16 text-white sm:py-24">
      <Container>
        <SectionBadge light>Life at the studio</SectionBadge>
        <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-[56px]">
          Discover life at
          <br />
          <span className="text-terracotta-300">{siteConfig.name}</span>
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-[90px_1fr]">
          <span className="pt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">— Note</span>
          <p className="max-w-2xl text-[16px] leading-relaxed text-white/80">
            Practice here is as much about the room as the poses. Mornings start early with breath and movement, tea is
            always on, and there is quiet time to rest before and after class. Students arrive as strangers and rarely
            leave as one.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[200px_1fr]">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-1 lg:block">
            <p className="col-span-2 mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              At a glance
            </p>
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3.5">
                <dt className="order-2 text-[12.5px] text-white/60">{stat.label}</dt>
                <dd className="font-display text-3xl font-medium text-terracotta-300">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <Carousel light itemClassName="basis-full sm:basis-1/2 lg:basis-1/3">
            {galleryImages.map((image, i) => (
              <figure key={image.src} className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-3 top-3 rounded-md bg-sage-700/80 px-2 py-1 text-[10.5px] font-semibold tracking-widest text-white backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
