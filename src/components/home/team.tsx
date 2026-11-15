import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GoldOrnament } from "@/components/ui/decor";
import { instructors } from "@/data/instructors";
import { instructorImages } from "@/lib/images";

export function Team() {
  const [lead, ...rest] = instructors;
  const leadImage = instructorImages[lead.name];

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our team"
          title="Learn from Certified Yoga Instructors"
          description="You will only ever learn yoga from teachers who have practised, trained and taught for years — and who genuinely care how you feel on the mat."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <article className="relative min-h-[520px] overflow-hidden rounded-3xl bg-sage-700 shadow-xl shadow-sage-900/15">
            {leadImage ? (
              <Image
                src={leadImage.src}
                alt={leadImage.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-center text-white">
              <h3 className="font-display text-3xl font-medium">{lead.name}</h3>
              <p className="mt-2 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-terracotta-300">
                {lead.role}
              </p>
              <GoldOrnament className="mx-auto mt-4" />
              <p className="mx-auto mt-4 max-w-sm text-[14.5px] leading-relaxed text-white/85">{lead.bio}</p>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((person, i) => {
              const image = instructorImages[person.name];
              return (
                <article
                  key={person.name}
                  className={`overflow-hidden rounded-3xl border border-charcoal/5 bg-white shadow-md shadow-sage-900/5 ${
                    i === 1 ? "sm:mt-12" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5]">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-sage-600">{person.name}</h3>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-terracotta-600">
                      {person.role}
                    </p>
                    <p className="mt-3 line-clamp-4 text-[14.5px] leading-relaxed text-charcoal-soft">{person.bio}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
