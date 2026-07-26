import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { faqs } from "@/data/faq";

export function FaqTeaser() {
  const featured = faqs.slice(0, 5);

  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Questions?" title="Answers before you even have to ask" />

        <div className="mt-10">
          <FaqAccordion items={featured} />
        </div>

        <div className="mt-8 text-center">
          <Button href="/faq" variant="outline">
            View All FAQs <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
