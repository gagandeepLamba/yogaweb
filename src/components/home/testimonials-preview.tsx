import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Real Students, Real Results"
          title="Loved by beginners and lifelong practitioners alike"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 90}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
