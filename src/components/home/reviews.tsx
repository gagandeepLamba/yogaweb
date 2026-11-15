import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";

export function Reviews() {
  return (
    <section className="px-3 py-6 sm:px-5">
      <div className="mx-auto max-w-[1360px] rounded-[2rem] bg-cream-deep py-16 sm:rounded-[2.5rem] sm:py-24">
        <Container>
          <SectionHeading eyebrow="Student reviews" title="Our Student Reviews & Success Stories" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-3xl border border-charcoal/5 bg-white p-7 shadow-sm shadow-sage-900/5"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-600 font-display text-lg font-semibold text-terracotta-300">
                    {t.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div>
                    <figcaption className="font-display text-[17px] font-semibold text-sage-600">{t.name}</figcaption>
                    <p className="text-[12.5px] text-charcoal-faint">{t.role}</p>
                  </div>
                </div>
                <StarRating rating={t.rating} className="mt-4" />
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-terracotta-600">
                  {t.program}
                </p>
              </figure>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/testimonials" arrow>
              View More Reviews
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
