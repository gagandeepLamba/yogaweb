import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionEdge } from "@/components/ui/decor";
import { galleryImages } from "@/lib/home-images";

export function Gallery() {
  return (
    <section id="gallery" className="relative mt-10 scroll-mt-24 bg-cream-deeper py-16 sm:py-20">
      <SectionEdge variant="wave" position="top" className="text-cream-deeper" />

      <Container>
        <SectionHeading eyebrow="Photos" title="Our Gallery" />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-square overflow-hidden rounded-xl border-2 border-sage-600 bg-cream-deep"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
