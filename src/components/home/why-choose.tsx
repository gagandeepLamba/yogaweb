import Image from "next/image";
import { Award, HeartHandshake, Leaf, ShieldCheck, Users, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeHeroImage } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

const left = [
  {
    icon: Award,
    title: "Certified, experienced teachers",
    body: "Every instructor holds recognised teaching credentials and keeps training — so you learn alignment and safety from people who know the craft.",
  },
  {
    icon: Users,
    title: "Small, personal classes",
    body: "We keep groups small enough that you are seen. Expect hands-on adjustments, modifications and teachers who remember your name.",
  },
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    body: "Injuries, pregnancy, stiff joints — we adapt every class so your body's limits are respected and progress is steady.",
  },
];

const right = [
  {
    icon: Leaf,
    title: "A complete yoga education",
    body: "Posture, breath, meditation and philosophy all get equal weight, so you understand why a practice works — not only how to perform it.",
  },
  {
    icon: Sparkles,
    title: "Fourteen styles to grow into",
    body: "Start with gentle Hatha, explore Vinyasa or Yin, add aerial or breathwork. The variety keeps practice fresh for years.",
  },
  {
    icon: HeartHandshake,
    title: "Flexible plans that fit your life",
    body: "Drop-in, class packs, weekly and monthly plans — in the studio, at home or online — with no pressure and no long contracts.",
  },
];

function Feature({
  icon: Icon,
  title,
  body,
  align,
}: {
  icon: typeof Award;
  title: string;
  body: string;
  align: "left" | "right";
}) {
  return (
    <div className={`flex gap-4 ${align === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-charcoal/5 bg-white text-sage-600 shadow-sm shadow-sage-900/5">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <div>
        <h3 className="font-display text-[19px] font-semibold leading-snug text-sage-600">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">{body}</p>
      </div>
    </div>
  );
}

/** Concentric gold sun-mandala with the studio's photo at its centre. */
function Mandala() {
  const rays = Array.from({ length: 24 }, (_, i) => i * 15);
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full text-gold-500" fill="none" stroke="currentColor" aria-hidden="true">
        <circle cx="200" cy="200" r="196" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="150" strokeWidth="1" strokeDasharray="2 6" />
        {rays.map((deg) => (
          <g key={deg} transform={`rotate(${deg} 200 200)`}>
            <path d="M200 14 L208 62 L200 54 L192 62 Z" strokeWidth="1.2" fill="rgba(207,167,63,0.12)" />
          </g>
        ))}
        <circle cx="200" cy="200" r="112" strokeWidth="1.5" />
      </svg>
      <div className="absolute inset-[24%] overflow-hidden rounded-full border-4 border-white shadow-lg shadow-sage-900/15">
        <Image
          src={homeHeroImage.src}
          alt={homeHeroImage.alt}
          fill
          sizes="(min-width: 1024px) 200px, 40vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export function WhyChoose() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="About the studio"
          title={`Why Choose ${siteConfig.name}?`}
          description={`${siteConfig.name} is a certified yoga studio in ${siteConfig.contact.address.city} where students of every level come to build strength, calm and community. These are the things we are known for.`}
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,420px)_1fr] lg:gap-10">
          <div className="space-y-10">
            {left.map((f) => (
              <Feature key={f.title} {...f} align="right" />
            ))}
          </div>
          <div className="order-first lg:order-none">
            <Mandala />
          </div>
          <div className="space-y-10">
            {right.map((f) => (
              <Feature key={f.title} {...f} align="left" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
