import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BlobField } from "@/components/ui/blob-field";
import { StyleIcon } from "@/components/ui/style-icon";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
      <BlobField />
      <Container className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-sage-100 text-sage-700">
          <StyleIcon icon="moon" className="h-10 w-10" />
        </div>
        <h1 className="mt-6 font-display text-4xl font-medium text-charcoal sm:text-5xl">
          This page took an unplanned Savasana
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-charcoal-soft">
          We couldn&rsquo;t find the page you were looking for. Let&rsquo;s guide you back to solid ground.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg">
            Back to Home <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/yoga-styles" variant="outline" size="lg">
            Explore Yoga Styles
          </Button>
        </div>
      </Container>
    </section>
  );
}
