import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FlowerArt } from "@/components/ui/decor";
import { communityImage } from "@/lib/home-images";

const actions = [
  "Free community yoga classes in local parks and schools",
  "Subsidised memberships for students, seniors and carers",
  "Seasonal wellness drives and donation days",
];

export function Community() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <FlowerArt className="pointer-events-none absolute -left-10 top-8 h-56 w-56 opacity-50" />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-xl border-4 border-terracotta-200">
          <Image
            src={communityImage.src}
            alt={communityImage.alt}
            fill
            sizes="(min-width: 1024px) 35vw, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="block font-eyebrow text-[17px] text-sage-600">Get to know us</span>
          <h2 className="mt-3 font-display text-4xl text-charcoal lg:text-[40px]">Community Activities</h2>
          <span className="mt-4 block h-[2px] w-14 bg-sage-600" />
          <p className="mt-5 font-display text-lg text-charcoal">Our Community Work: Wellness with a Heart</p>
          <p className="mt-4 text-justify text-[16px] leading-[1.75] text-charcoal-soft">
            At Shanti Yoga Studio, our mission goes beyond promoting personal well-being — we are committed to
            lifting up the neighbourhood around us. Guided by compassion and a sense of social responsibility,
            we dedicate part of our time and resources to community programs.
          </p>
          <p className="mt-4 font-medium text-charcoal">We actively support our community by offering:</p>
          <ul className="mt-3 space-y-2 text-[16px] text-charcoal-soft">
            {actions.map((action) => (
              <li key={action} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-600" />
                {action}
              </li>
            ))}
          </ul>
          <Button href="/contact" className="mt-6">
            Get Involved
          </Button>
        </div>
      </Container>
    </section>
  );
}
