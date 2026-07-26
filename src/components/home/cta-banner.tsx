import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { StyleIcon } from "@/components/ui/style-icon";
import { siteConfig } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-sage-700 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-10 -top-10 opacity-10">
            <StyleIcon icon="lotus" className="h-56 w-56 text-cream" />
          </div>
          <div className="pointer-events-none absolute -bottom-14 -right-10 opacity-10">
            <StyleIcon icon="energy" className="h-56 w-56 text-cream" />
          </div>

          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-medium text-balance text-cream sm:text-4xl">
            Your first class is one message away
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/85">
            Tell us your goals, your schedule, and what feels good in your body — we&rsquo;ll match you
            with the right style, instructor, and package.
          </p>

          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href={siteConfig.contact.whatsappHref("Hi! I'd like to book a trial class.")}
              variant="whatsapp"
              size="lg"
            >
              Chat on WhatsApp
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-cream/30 text-cream hover:border-cream hover:text-cream">
              Send a Message <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
