import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { CtaBanner } from "@/components/home/cta-banner";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";
import { jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Answers to common questions about classes, pricing, booking, and policies at ${siteConfig.name}.`,
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const categories = [...new Set(faqs.map((faq) => faq.category))];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script {...jsonLdScriptProps(jsonLd)} />
      <PageHero
        eyebrow="Help Center"
        title="Frequently asked questions"
        description="Can't find what you're looking for? Chat with our assistant in the corner, or reach out on WhatsApp."
      />

      <section className="pb-20 sm:pb-28">
        <Container className="max-w-3xl space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="font-display text-2xl font-medium text-charcoal">{category}</h2>
              <div className="mt-6">
                <FaqAccordion items={faqs.filter((faq) => faq.category === category)} />
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
