import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Programs & Workshops",
  description: `Retreats, workshops and wellness programs at ${siteConfig.name} — designed for deeper practice and lasting change.`,
  alternates: { canonical: "/workshop" },
};

export default function WorkshopPage() {
  return (
    <>
      <PageHero title="Workshop" />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Join Now"
            title="Programs & Workshops"
            description="Join our specialized retreats & workshops designed for deeper healing"
          />

          <div className="mx-auto mt-10 grid max-w-[1192px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={program.image.src}
                    alt={program.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-4 font-display text-xl text-charcoal">{program.title}</h2>
                <p className="mt-1 font-eyebrow text-[13px] text-sage-600">{program.tag}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">{program.summary}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              href={siteConfig.contact.whatsappHref("Hi! I'd like to join a program or workshop.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join a Program
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
