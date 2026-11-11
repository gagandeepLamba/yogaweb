import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { joinBannerImage } from "@/lib/home-images";
import { siteConfig } from "@/lib/site-config";

export function JoinBanner() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <Image src={joinBannerImage.src} alt={joinBannerImage.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative flex flex-col items-start justify-between gap-8 py-16 sm:py-20 md:flex-row md:items-center">
        <div className="max-w-2xl text-white">
          <span className="block font-eyebrow text-[17px] text-terracotta-200">Join Us</span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-balance sm:text-5xl">
            Start Your Journey to Complete Well-being Today
          </h2>
          <span className="mt-5 block h-[2px] w-14 bg-terracotta-200" />
        </div>
        <Button
          href={siteConfig.contact.whatsappHref("Hi! I'd like to book a session.")}
          variant="primary"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          Book a Session
        </Button>
      </Container>
    </section>
  );
}
