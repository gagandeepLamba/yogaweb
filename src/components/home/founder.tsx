import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeafArt } from "@/components/ui/decor";
import { instructors } from "@/data/instructors";
import { founderImage } from "@/lib/home-images";
import { siteConfig } from "@/lib/site-config";

export function Founder() {
  const founder = instructors[0];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <LeafArt className="pointer-events-none absolute -left-2 bottom-8 hidden h-64 w-20 lg:block" />
      <LeafArt className="pointer-events-none absolute -right-4 top-20 hidden h-72 w-24 rotate-12 text-charcoal/10 lg:block" />

      <Container>
        <SectionHeading eyebrow={siteConfig.shortName} title="About the Founder" />

        <div className="mt-12 grid items-center gap-10 md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl">
            <Image
              src={founderImage.src}
              alt={founderImage.alt}
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-justify text-[16px] leading-[1.75] text-charcoal-soft">
              <strong className="font-medium text-charcoal">{founder.name}</strong> is the founder of{" "}
              {siteConfig.name} and understands the essential harmony between physical, mental, and spiritual
              well-being. {founder.bio}
            </p>
            <p className="mt-5 text-justify text-[16px] leading-[1.75] text-charcoal-soft">
              Having taught with studios, corporate teams, and community groups across the globe, Maya brings a rich
              blend of traditional knowledge and real-world insight. Her time teaching across three continents
              exposed her to diverse cultures and healing practices, shaping the inclusive and intuitive approach she
              embodies today.
            </p>
            <Button href="/about#instructors" className="mt-6">
              Discover More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
