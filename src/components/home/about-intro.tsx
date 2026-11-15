import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FlowerArt } from "@/components/ui/decor";
import { siteConfig } from "@/lib/site-config";

const bannerImage =
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1600&h=700&q=85";

const pillars = [
  {
    n: "01",
    title: "Every style, one studio",
    body: "Hatha, Vinyasa, Ashtanga, Yin, Kundalini, prenatal, aerial and more — fourteen styles taught by specialists.",
  },
  {
    n: "02",
    title: "Private, group & online",
    body: "Practise one-on-one, in small studio groups, or live online — with flexible daily, weekly and monthly plans.",
  },
  {
    n: "03",
    title: "Workshops & retreats",
    body: "Immersive weekends, breathwork evenings and corporate wellness series for deeper, lasting change.",
  },
  {
    n: "04",
    title: "Who can join",
    body: "Complete beginners, returning students, athletes, seniors, expecting parents and teens — every body belongs.",
  },
];

export function AboutIntro({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className="px-3 py-10 sm:px-5 sm:py-14">
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-[2rem] bg-cream-deep py-16 sm:rounded-[2.5rem] sm:py-20">
        <FlowerArt className="pointer-events-none absolute -right-10 top-6 h-56 w-56 opacity-30" />
        <Container className="relative">
          <SectionHeading
            eyebrow={standalone ? siteConfig.name : "All levels welcome"}
            title={standalone ? `About ${siteConfig.shortName}` : `Yoga Classes in ${siteConfig.contact.address.city}`}
          />

          <div className="relative mx-auto mt-10 aspect-[16/7] max-w-5xl overflow-hidden rounded-3xl shadow-lg shadow-sage-900/10">
            <Image
              src={bannerImage}
              alt="Students practising yoga together in a bright studio"
              fill
              sizes="(min-width: 1024px) 1000px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-center text-[16.5px] leading-[1.8] text-charcoal-soft">
            <p>
              {siteConfig.name} is a yoga studio in {siteConfig.contact.address.city} built on a simple belief: yoga
              shouldn&rsquo;t be intimidating, and it shouldn&rsquo;t be one-size-fits-all. Whether you&rsquo;re
              recovering from an injury, training for a goal, managing stress or simply curious where to start, there is
              a style and a format here made for you.
            </p>
            <p>
              Our certified instructors teach fourteen distinct styles across private sessions, group classes, live
              online programs, corporate partnerships and seasonal workshops — all under one roof, one philosophy and
              one team that knows your name.
            </p>
            <p className="font-medium text-charcoal">We offer classes at every stage:</p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.n}
                className="rounded-2xl border border-charcoal/5 bg-white p-7 shadow-sm shadow-sage-900/5"
              >
                <span className="font-display text-3xl italic text-terracotta-400">{pillar.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-sage-600">{pillar.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">{pillar.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
