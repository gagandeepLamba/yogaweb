import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FlowerArt } from "@/components/ui/decor";
import { homeHeroImage } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

const ticks = ["Certified instructors", "14 yoga styles", "Private, group & online", "Beginners welcome"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf3e4] via-[#fbf6ee] to-white">
      <FlowerArt className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 opacity-30" />

      {/* Photo — fades into the cream panel on large screens */}
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image
          src={homeHeroImage.src}
          alt={homeHeroImage.alt}
          fill
          priority
          sizes="58vw"
          className="object-cover"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 38%)" }}
        />
      </div>

      <Container className="relative grid min-h-[560px] items-center py-14 lg:min-h-[640px] lg:py-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-sage-600 shadow-sm shadow-sage-900/5">
            <span className="h-2 w-2 rounded-full bg-terracotta-400" />
            Certified yoga studio
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-sage-800 sm:text-6xl">{siteConfig.name}</h1>

          <p className="mt-6 text-[17px] leading-relaxed text-charcoal-soft">
            Recognised as a welcoming home for yoga in {siteConfig.contact.address.city}, {siteConfig.shortName} offers
            14 yoga styles through private sessions, small-group classes and live online programs — led by certified
            instructors, for every body and every level.
          </p>

          <Button href="/services" variant="secondary" size="lg" arrow className="mt-8">
            Explore Our Classes
          </Button>

          <ul className="mt-9 grid max-w-md grid-cols-1 gap-x-6 gap-y-3 min-[420px]:grid-cols-2">
            {ticks.map((tick) => (
              <li key={tick} className="flex items-center gap-2.5 text-[14.5px] font-medium text-charcoal-soft">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terracotta-400 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {tick}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Photo for small screens, below the copy */}
      <div className="relative h-72 sm:h-96 lg:hidden">
        <Image
          src={homeHeroImage.src}
          alt={homeHeroImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)" }}
        />
      </div>
    </section>
  );
}
