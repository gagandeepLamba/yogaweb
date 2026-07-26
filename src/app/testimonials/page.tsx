import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CtaBanner } from "@/components/home/cta-banner";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site-config";
import { jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Student Testimonials & Reviews",
  description: `Read what students say about their experience at ${siteConfig.name} — from beginners to long-time practitioners.`,
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  const averageRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      reviewBody: t.quote,
    })),
  };

  return (
    <>
      <script {...jsonLdScriptProps(jsonLd)} />
      <PageHero
        eyebrow="Student Stories"
        title="Real students, real transformations"
        description={`Rated ${averageRating.toFixed(1)}/5 by ${testimonials.length}+ students across private sessions, group classes, and corporate programs.`}
      />
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 70}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
