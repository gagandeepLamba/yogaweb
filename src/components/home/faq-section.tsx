import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { faqs } from "@/data/faq";

export function FaqSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-4xl">
        <SectionHeading eyebrow="Frequently asked questions" title="Frequently Asked Questions" />
        <div className="mt-10">
          <FaqAccordion items={faqs.slice(0, 6)} />
        </div>
        <div className="mt-8 text-center">
          <Button href="/faq" variant="outline">
            View All FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}
