import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { YogaStyleCard } from "@/components/yoga/yoga-style-card";
import { yogaStyles } from "@/data/yoga-styles";

export function FeaturedStyles() {
  const featured = yogaStyles.slice(0, 6);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Find Your Practice"
          title="Every style of yoga, under one roof"
          description="From gentle Hatha to vigorous Hot Yoga — discover the right practice for your body, goals, and mood, with full detail on what to expect in every class."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((style, index) => (
            <Reveal key={style.slug} delay={index * 60}>
              <YogaStyleCard style={style} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/yoga-styles" variant="outline" size="lg">
            View All 14 Yoga Styles <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
