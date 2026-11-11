import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ConditionsGrid } from "@/components/home/conditions-grid";
import { conditionsDisclaimer } from "@/data/conditions";

export function HelpSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Common Goals" title="We Help With" />
        <div className="mt-12">
          <ConditionsGrid />
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-[13px] leading-relaxed text-charcoal-faint">
          {conditionsDisclaimer}
        </p>
      </Container>
    </section>
  );
}
