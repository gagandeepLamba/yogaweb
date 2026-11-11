import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FlowerArt, SectionEdge } from "@/components/ui/decor";
import { aboutImages } from "@/lib/home-images";
import { siteConfig } from "@/lib/site-config";

export function AboutIntro() {
  return (
    <section className="relative mt-8 bg-cream-deep py-16 sm:py-20">
      <SectionEdge variant="brush" position="top" className="text-cream-deep" />
      <SectionEdge variant="brush" position="bottom" className="text-cream-deep" />

      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative mx-auto w-full max-w-[520px] pb-10 pr-8 sm:pr-14">
          <FlowerArt className="absolute -left-6 -top-10 z-10 h-44 w-44 sm:-left-10 sm:h-56 sm:w-56" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={aboutImages.main.src}
              alt={aboutImages.main.alt}
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 aspect-[4/5] w-[40%] overflow-hidden rounded-2xl border-4 border-cream-deep">
            <Image
              src={aboutImages.inset.src}
              alt={aboutImages.inset.alt}
              fill
              sizes="(min-width: 1024px) 15vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="block font-eyebrow text-[17px] text-sage-600">About Us</span>
          <h2 className="mt-3 font-display text-4xl text-charcoal lg:text-[40px]">{siteConfig.shortName}</h2>
          <span className="mt-4 block h-[2px] w-14 bg-sage-600" />

          <div className="mt-6 space-y-5 text-justify text-[16px] leading-[1.75] text-charcoal-soft">
            <p>
              At {siteConfig.name}, we believe in creating a nurturing space where individuals can reconnect with
              their inner selves, build strength, and find balance in body and mind. Our studio is more than just a
              place to practice yoga — it&rsquo;s a welcoming sanctuary that supports growth, healing, and
              transformation across fourteen different yoga styles.
            </p>
            <p>
              Our vision is to inspire a deeper connection between individuals and their overall well-being through
              movement, breath, and mindful living. We strive to be a place for those seeking a pause from the fast
              pace of modern life — where people feel seen, supported, and empowered.
            </p>
          </div>

          <div className="mt-6 border-t border-sage-600/30 pt-6">
            <Button href="/about">Know More</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
