import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/lib/home-images";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Photos" title="Our Gallery" description="A glimpse of classes, practice and community at the studio." />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-cream-deep"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 24vw, 46vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
