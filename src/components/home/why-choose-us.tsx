import { Award, CalendarClock, HeartHandshake, Users2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const reasons = [
  {
    icon: Award,
    title: "Certified, experienced instructors",
    description: "Every teacher holds recognised certifications (RYT 200–500) and years of real teaching experience.",
  },
  {
    icon: CalendarClock,
    title: "Flexible daily, weekly & monthly plans",
    description: "Drop in whenever, commit weekly, or go unlimited monthly — for group or private sessions.",
  },
  {
    icon: Users2,
    title: "All levels & all bodies welcome",
    description: "From complete beginners to advanced practitioners, chair yoga to aerial — modifications always offered.",
  },
  {
    icon: HeartHandshake,
    title: "In-studio, at-home, or online",
    description: "Practice however fits your life — our instructors meet you where you are, literally and figuratively.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-cream-deep py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Shanti"
          title="A studio built around how real life actually works"
          description="No rigid schedules, no one-size-fits-all sequences — just thoughtful, well-taught yoga that fits your goals and your calendar."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 80}>
              <div className="flex h-full flex-col rounded-3xl border border-charcoal/8 bg-white p-6 shadow-sm shadow-charcoal/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-600 text-cream">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-charcoal">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
