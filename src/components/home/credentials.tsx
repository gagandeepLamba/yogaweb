import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/section-heading";

const bannerImage =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&h=700&q=70";

const badges = [
  { top: "E-RYT", main: "500", sub: "Lead instructor" },
  { top: "RYT", main: "500", sub: "Senior instructor" },
  { top: "Prenatal", main: "RPYT", sub: "Registered teacher" },
  { top: "Ashtanga", main: "CERT", sub: "Certified teacher" },
  { top: "Yoga CE", main: "PRO", sub: "Continuing-ed provider" },
];

export function Credentials() {
  return (
    <section className="relative overflow-hidden bg-sage-700 py-20 sm:py-24">
      <Image src={bannerImage} alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-sage-800/60 to-sage-800/90" />

      <Container className="relative text-center">
        <SectionBadge light>Credentials &amp; training</SectionBadge>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-tight text-balance text-white sm:text-4xl lg:text-[44px]">
          Certified Teachers, Rooted in Tradition
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16.5px] leading-relaxed text-white/80">
          Our instructors hold internationally recognised teaching credentials and keep studying — so the guidance you
          get on your mat is safe, current and grounded in real experience.
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-7">
          {badges.map((badge) => (
            <li key={badge.top} className="flex flex-col items-center">
              <span className="flex h-[104px] w-[104px] flex-col items-center justify-center rounded-full border-2 border-terracotta-300/60 text-terracotta-200 ring-1 ring-terracotta-300/25 ring-offset-[5px] ring-offset-transparent">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em]">{badge.top}</span>
                <span className="font-display text-2xl font-bold leading-none text-white">{badge.main}</span>
              </span>
              <span className="mt-3 text-[12px] text-white/70">{badge.sub}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
