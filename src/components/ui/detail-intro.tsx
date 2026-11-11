import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FlowerArt } from "@/components/ui/decor";
import { siteConfig } from "@/lib/site-config";
import type { SiteImage } from "@/lib/images";

/** Service / style intro: text block on the left, rounded photo on the right. */
export function DetailIntro({
  title,
  highlights,
  paragraphs,
  image,
  ctaMessage,
}: {
  title: string;
  highlights: string[];
  paragraphs: string[];
  image?: SiteImage;
  ctaMessage: string;
}) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <FlowerArt className="pointer-events-none absolute -right-8 bottom-0 hidden h-64 w-64 opacity-40 lg:block" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14">
        <div>
          <span className="block font-eyebrow text-[17px] text-sage-600">{siteConfig.shortName}</span>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">{title}</h2>
          <span className="mt-4 block h-[2px] w-14 bg-sage-600" />

          <div className="mt-5 space-y-1 font-medium text-charcoal">
            {highlights.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-5 space-y-4 text-justify text-[16px] leading-[1.75] text-charcoal-soft">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <Button
            href={siteConfig.contact.whatsappHref(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6"
          >
            Know More
          </Button>
        </div>

        {image ? (
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-xl shadow-lg shadow-charcoal/10">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
