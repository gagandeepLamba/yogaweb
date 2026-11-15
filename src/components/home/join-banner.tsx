import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const bannerImage =
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1920&h=700&q=70";

const points = ["Free trial class for new students", "Mats and props provided", "Flexible plans — no long contracts"];

export function JoinBanner() {
  return (
    <section className="relative overflow-hidden bg-sage-700 py-20 sm:py-24">
      <Image src={bannerImage} alt="" fill sizes="100vw" className="object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-sage-800/95 via-sage-800/80 to-sage-800/50" />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="text-white">
          <SectionBadge light>Certified studio</SectionBadge>
          <h2 className="mt-5 text-balance font-display text-3xl leading-tight sm:text-4xl lg:text-[46px]">
            Begin Your Practice at a Certified Yoga Studio
          </h2>
          <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/80">
            Join a community of students who practise with trained, caring teachers. Your first class is one message away.
          </p>
          <ul className="mt-6 space-y-2.5">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-[15.5px] text-white/90">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-terracotta-400 text-sage-800">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
          <Button
            href={siteConfig.contact.whatsappHref("Hi! I'd like to book a session.")}
            variant="secondary"
            size="lg"
            arrow
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Session
          </Button>
          <Button href="/contact" variant="light" size="lg">
            Send a Message
          </Button>
        </div>
      </Container>
    </section>
  );
}
