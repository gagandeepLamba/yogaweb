import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import { testimonials } from "@/data/testimonials";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&h=1100&q=85`;

const portraits = [
  { src: u("photo-1524863479829-916d8e77f114"), alt: "Yoga and wellness photo" },
  { src: u("photo-1588286840104-8957b019727f"), alt: "Yoga and wellness photo" },
  { src: u("photo-1510894347713-fc3ed6fdf539"), alt: "Yoga and wellness photo" },
  { src: u("photo-1552196563-55cd4e45efb3"), alt: "Yoga and wellness photo" },
];

export function StudentStories() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="In their own words"
          title="Student Stories"
          description="Short reflections from students on what regular practice has changed for them."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(0, 4).map((t, i) => (
            <figure
              key={t.name}
              className="group relative aspect-[9/16] overflow-hidden rounded-3xl bg-sage-700 shadow-lg shadow-sage-900/10"
            >
              <Image
                src={portraits[i].src}
                alt={portraits[i].alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <Quote className="h-7 w-7 text-terracotta-300" />
                <blockquote className="mt-3 line-clamp-6 text-[15px] leading-relaxed text-white/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 border-t border-white/15 pt-4">
                  <span className="block font-display text-lg font-semibold">{t.name}</span>
                  <span className="block text-[12.5px] text-terracotta-200">{t.program}</span>
                  <StarRating rating={t.rating} className="mt-2" />
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
