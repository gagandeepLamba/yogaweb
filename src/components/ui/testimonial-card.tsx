import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { StarRating } from "@/components/ui/star-rating";
import { Badge } from "@/components/ui/badge";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-charcoal/8 bg-white/70 p-7 shadow-sm shadow-charcoal/5">
      <Quote className="h-6 w-6 text-sage-300" />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-charcoal-soft">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <StarRating rating={testimonial.rating} className="mt-5" />
      <figcaption className="mt-3 flex items-center justify-between">
        <div>
          <p className="font-semibold text-charcoal">{testimonial.name}</p>
          <p className="text-sm text-charcoal-faint">{testimonial.role}</p>
        </div>
        <Badge variant="sage">{testimonial.program}</Badge>
      </figcaption>
    </figure>
  );
}
