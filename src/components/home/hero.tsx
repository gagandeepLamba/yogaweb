import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BlobField } from "@/components/ui/blob-field";
import { StyleIcon } from "@/components/ui/style-icon";
import { siteConfig } from "@/lib/site-config";
import { homeHeroImage } from "@/lib/images";
import { yogaStyles } from "@/data/yoga-styles";

export function Hero() {
  const previewStyles = yogaStyles.slice(0, 6);

  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-20 lg:pb-28 lg:pt-24">
      <BlobField />
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-4 py-1.5 text-sm font-semibold text-sage-800">
            <StyleIcon icon="lotus" className="h-4 w-4" />
            14 Yoga Styles · Private, Group &amp; Online
          </span>

          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.08] text-balance text-charcoal sm:text-5xl lg:text-6xl">
            Breathe deeper.
            <br />
            Move with <span className="text-terracotta-500">purpose.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal-soft">
            {siteConfig.name} brings together every path of yoga — from grounding Hatha to
            energising Vinyasa — through private sessions, group classes, and live online
            programs. Flexible daily, weekly, and monthly plans for every kind of practice.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              href={siteConfig.contact.whatsappHref("Hi! I'd like to book a trial class.")}
              size="lg"
            >
              Book a Trial Class <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/yoga-styles" variant="outline" size="lg">
              <PlayCircle className="h-4 w-4" /> Explore Yoga Styles
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-charcoal-soft">
            <div>
              <span className="font-display text-2xl font-medium text-charcoal">14</span> Yoga Styles
            </div>
            <div>
              <span className="font-display text-2xl font-medium text-charcoal">500+</span> Students
            </div>
            <div>
              <span className="font-display text-2xl font-medium text-charcoal">4.9★</span> Average Rating
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-sage-100 shadow-2xl shadow-sage-900/15">
            <Image
              src={homeHeroImage.src}
              alt={homeHeroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-cream sm:p-8">
              <p className="font-display text-2xl font-medium">Daily practice, calm guidance</p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/85">
                Studio, online, private, and group classes shaped around how you want to move.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-8 left-4 right-4 grid grid-cols-2 gap-3 sm:left-8 sm:right-8 sm:grid-cols-3">
            {previewStyles.map((style, index) => (
              <div
                key={style.slug}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/70 bg-white/90 p-4 text-center shadow-lg shadow-charcoal/10 backdrop-blur"
                style={{ marginTop: index % 2 === 0 ? 0 : "1.5rem" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                  <StyleIcon icon={style.icon} className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-charcoal">{style.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
