import Image from "next/image";
import { Award, CalendarCheck, Clock, Laptop, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureRows, InfoPair } from "@/components/ui/price-boxes";
import { pricing } from "@/data/pricing";
import { serviceImages } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const fmt = (n: number) => `${siteConfig.currencySymbol}${n}`;

const dropIn = pricing.group.daily[0].price;
const pack10 = pricing.group.daily[2].price;
const monthly = pricing.group.monthly[0].price;
const privateSingle = pricing.private.daily[0].price;
const privateWeekly = pricing.private.weekly[0].price;

const cards = [
  {
    slug: "group-classes",
    duration: "45–90 min",
    title: "Group Classes",
    body: "Small-group studio classes across every style we teach — a supportive, energising room for beginners and regulars alike.",
    pair: [
      { label: "Drop-in", value: fmt(dropIn) },
      { label: "Monthly from", value: fmt(monthly) },
    ] as const,
    rows: [
      { icon: Users, text: "All 14 styles" },
      { icon: Clock, text: "7 days a week" },
      { icon: CalendarCheck, text: `10-class pack ${fmt(pack10)}` },
    ],
    cta: "View Group Classes",
    popular: true,
  },
  {
    slug: "private-yoga-sessions",
    duration: "60 min",
    title: "Private 1-on-1 Sessions",
    body: "A dedicated instructor and a practice designed around your body, your goals and your schedule — ideal for injury recovery.",
    pair: [
      { label: "Single session", value: fmt(privateSingle) },
      { label: "Weekly from", value: fmt(privateWeekly) },
    ] as const,
    rows: [
      { icon: Award, text: "Fully customised plan" },
      { icon: Clock, text: "Studio, home or online" },
      { icon: CalendarCheck, text: "Flexible scheduling" },
    ],
    cta: "View Private Sessions",
    popular: false,
  },
  {
    slug: "online-yoga-classes",
    duration: "45–60 min",
    title: "Online Live Classes",
    body: "Practise live with your teacher from anywhere — real-time cues, a friendly class community and flexible times.",
    pair: [
      { label: "Drop-in", value: fmt(dropIn) },
      { label: "Monthly from", value: fmt(monthly) },
    ] as const,
    rows: [
      { icon: Laptop, text: "Live video, any device" },
      { icon: Clock, text: "Morning & evening slots" },
      { icon: CalendarCheck, text: "Same plans as in-studio" },
    ],
    cta: "View Online Classes",
    popular: false,
  },
];

export function Courses() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our classes"
          title="Certified Yoga Classes & Programs"
          description="Explore the three ways to practise with us — each blending traditional yoga, hands-on teaching and flexible pricing."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-3 lg:items-start">
          {cards.map((card) => {
            const image = serviceImages[card.slug];
            return (
              <article
                key={card.slug}
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-lg shadow-sage-900/5",
                  card.popular ? "border-sage-600 lg:-mt-3" : "border-charcoal/5"
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  ) : null}
                  <span className="absolute left-4 top-4 rounded-full bg-sage-700/90 px-3 py-1 text-[11.5px] font-semibold text-white backdrop-blur">
                    {card.duration}
                  </span>
                  {card.popular ? (
                    <span className="absolute right-0 top-4 rounded-l-full bg-gradient-to-r from-[#f5a52e] to-[#d9a521] px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-sage-600">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">{card.body}</p>
                  <div className="mt-5">
                    <InfoPair items={[card.pair[0], card.pair[1]]} />
                  </div>
                  <FeatureRows rows={card.rows} />
                  <Button href={`/services/${card.slug}`} arrow className="mt-5 w-full">
                    {card.cta}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
