import type { Metadata } from "next";
import { Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { InstructorCard } from "@/components/about/instructor-card";
import { CtaBanner } from "@/components/home/cta-banner";
import { instructors } from "@/data/instructors";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us — Our Story & Instructors",
  description: `Meet the instructors behind ${siteConfig.name} and learn what shapes how we teach — accessible, alignment-focused, and genuinely welcoming yoga for every body.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Leaf,
    title: "Rooted in tradition",
    description: "We honour the lineage of yoga while teaching in a way that's approachable for modern life.",
  },
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    description: "Every instructor is trained to offer modifications — your body's limits are always respected.",
  },
  {
    icon: Users,
    title: "Every body belongs",
    description: "From complete beginners to seasoned practitioners, every class welcomes every kind of body.",
  },
  {
    icon: Sparkles,
    title: "Genuinely personal",
    description: "We remember your name, your goals, and your progress — this isn't a big-box fitness chain.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={`Why ${siteConfig.name} exists`}
        description="We started this studio to make yoga's full breadth — every style, every body, every schedule — genuinely accessible in one place."
      />

      <section className="pb-20 sm:pb-28">
        <Container className="max-w-3xl space-y-5 text-lg leading-relaxed text-charcoal-soft">
          <p>
            {siteConfig.name} was founded on a simple belief: yoga shouldn&rsquo;t be intimidating, and it
            shouldn&rsquo;t be one-size-fits-all. Whether you&rsquo;re recovering from an injury, training for a
            goal, managing stress, or simply curious where to start, there&rsquo;s a style and a format
            here built for you.
          </p>
          <p>
            Today, our instructors teach 14 distinct styles across private sessions, group classes,
            live online programs, corporate wellness partnerships, and seasonal retreats — all under
            one roof, one philosophy, and one team that genuinely knows your name.
          </p>
        </Container>
      </section>

      <section className="bg-cream-deep py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What We Believe" title="The values behind every class" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="flex h-full flex-col rounded-3xl border border-charcoal/8 bg-white p-6 shadow-sm shadow-charcoal/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta-500 text-cream">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium text-charcoal">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Meet the Team" title="Certified instructors who genuinely care" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor, index) => (
              <Reveal key={instructor.name} delay={index * 90}>
                <InstructorCard instructor={instructor} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
