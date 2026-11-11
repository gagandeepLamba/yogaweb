"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroSlides } from "@/lib/home-images";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const go = (next: number) => setIndex((next + heroSlides.length) % heroSlides.length);

  return (
    <section
      className="relative h-[460px] overflow-hidden bg-charcoal sm:h-[520px] lg:h-[580px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Studio highlights"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={cn("absolute inset-0 transition-opacity duration-1000", i === index ? "opacity-100" : "opacity-0")}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/5" />

          <Container className="relative flex h-full items-center">
            <div className="max-w-xl text-white">
              <span className="block font-eyebrow text-[17px] text-terracotta-200">{slide.eyebrow}</span>
              <h1 className="mt-3 font-display text-4xl leading-tight text-balance sm:text-5xl lg:text-[56px]">
                {slide.title}
              </h1>
              <span className="mt-5 block h-[2px] w-14 bg-terracotta-200" />
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">{slide.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={siteConfig.contact.whatsappHref("Hi! I'd like to book a trial class.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={i === index ? 0 : -1}
                >
                  Book a Session
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  tabIndex={i === index ? 0 : -1}
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ))}

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/40 md:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/40 md:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === index ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </section>
  );
}
