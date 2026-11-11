import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/ui/carousel";
import { FlowerArt } from "@/components/ui/decor";
import { StarRating } from "@/components/ui/star-rating";
import { testimonials } from "@/data/testimonials";
import { testimonialImage } from "@/lib/home-images";

export function TestimonialsSlider() {
  return (
    <section className="overflow-hidden py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="relative mx-auto aspect-square w-full max-w-[430px]">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={testimonialImage.src}
              alt={testimonialImage.alt}
              fill
              sizes="(min-width: 1024px) 32vw, 80vw"
              className="object-cover"
            />
          </div>
          <FlowerArt className="absolute -bottom-6 -right-8 h-40 w-40" />
        </div>

        <div className="min-w-0">
          <span className="block font-eyebrow text-[17px] text-sage-600">Our Testimonials</span>
          <h2 className="mt-3 font-display text-4xl text-charcoal lg:text-[40px]">What they say?</h2>
          <span className="mt-4 block h-[2px] w-14 bg-sage-600" />

          <Carousel className="-mx-2.5 mt-8" itemClassName="basis-full md:basis-1/2">
            {testimonials.slice(0, 6).map((t) => (
              <figure key={t.name} className="h-full">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage-600 font-display text-xl text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <figcaption className="font-eyebrow text-[15px] text-charcoal">{t.name}</figcaption>
                    <StarRating rating={t.rating} />
                  </div>
                </div>
                <blockquote className="mt-4 rounded-md bg-[#f4f4f4] p-5 text-[15px] leading-relaxed text-charcoal-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
