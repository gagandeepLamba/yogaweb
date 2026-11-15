import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/ui/section-heading";
import { GoldOrnament } from "@/components/ui/decor";
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
      <Container className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
        <div>
          <SectionBadge>{siteConfig.name}</SectionBadge>
          <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl lg:text-[42px] lg:leading-tight">{title}</h2>
          <GoldOrnament className="mt-5" />

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((line) => (
              <span
                key={line}
                className="rounded-full bg-cream-deep px-4 py-1.5 text-[13.5px] font-semibold text-sage-600"
              >
                {line}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-4 text-[16.5px] leading-[1.8] text-charcoal-soft">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <Button
            href={siteConfig.contact.whatsappHref(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            arrow
            className="mt-7"
          >
            Enquire Now
          </Button>
        </div>

        {image ? (
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-3xl shadow-xl shadow-sage-900/10">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 32vw, 90vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
