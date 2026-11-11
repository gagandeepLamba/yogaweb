import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionEdge } from "@/components/ui/decor";
import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section className="relative mt-10 bg-cream-deeper py-16 sm:py-20">
      <SectionEdge variant="zigzag" position="top" className="text-cream-deeper" />

      <Container>
        <SectionHeading
          eyebrow="Join Now"
          title="Programs & Workshops"
          description="Join our specialized retreats & workshops designed for deeper healing"
        />

        <Carousel className="mt-10">
          {programs.map((program) => (
            <article key={program.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={program.image.src}
                  alt={program.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display text-xl text-charcoal">{program.title}</h3>
              <p className="mt-1 font-eyebrow text-[13px] text-sage-600">{program.tag}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">{program.summary}</p>
            </article>
          ))}
        </Carousel>

        <div className="mt-8 text-center">
          <Button href="/workshop">Join a Program</Button>
        </div>
      </Container>
    </section>
  );
}
