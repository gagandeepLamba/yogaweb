import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FlowerArt } from "@/components/ui/decor";
import { missionImage } from "@/lib/home-images";
import { siteConfig } from "@/lib/site-config";

const aims = [
  ["Promote healing and resilience", "through gentle, sustainable practice."],
  ["Cultivate inner balance", "through mindful movement, breath, and meditation."],
  ["Educate and inspire", "people to take charge of their health and happiness."],
  ["Serve the community", "with compassion, authenticity, and purpose."],
];

export function Mission() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="A Yoga Studio" title="Our Mission" />
        <p className="mx-auto mt-6 max-w-5xl text-center text-[17px] leading-relaxed text-charcoal-soft">
          At <strong className="font-medium text-charcoal">{siteConfig.name}</strong>, our mission is to guide
          individuals toward complete well-being — physical, mental, &amp; spiritual — through the timeless wisdom
          of <strong className="font-medium text-charcoal">Yoga, Meditation, Breathwork, &amp; Mindful Living.</strong>
        </p>

        <div className="relative mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <FlowerArt className="pointer-events-none absolute -bottom-10 left-1/3 hidden h-72 w-72 opacity-40 lg:block" />
          <div className="relative">
            <p className="text-justify text-[16px] leading-[1.75] text-charcoal-soft">
              We believe that true health is not just the absence of disease, but a harmonious balance between body,
              mind, and spirit. Rooted in ancient traditions and adapted for modern life, our holistic approach
              empowers people to reconnect with their inner rhythm and live with greater awareness, vitality, and
              peace.
            </p>

            <h3 className="mt-7 font-display text-[22px] text-charcoal">Through our integrated offerings, we aim to:</h3>
            <span className="mt-3 block h-[2px] w-10 bg-sage-600" />

            <ul className="mt-6 space-y-4">
              {aims.map(([lead, rest]) => (
                <li key={lead} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-600 text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span className="text-[16px] text-charcoal-soft">
                    <strong className="font-medium text-charcoal">{lead}</strong> {rest}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[16px] leading-[1.75] text-charcoal-soft">
              We are committed to creating a nurturing space where everyone — regardless of age or background — can
              feel safe, supported, and inspired. Welcome to {siteConfig.shortName}. Come as you are, leave renewed.
            </p>
            <Button href="/about" className="mt-6">
              Know More
            </Button>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-xl">
            <Image
              src={missionImage.src}
              alt={missionImage.alt}
              fill
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
