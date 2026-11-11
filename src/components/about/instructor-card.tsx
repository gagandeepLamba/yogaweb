import Image from "next/image";
import { Award } from "lucide-react";
import type { Instructor } from "@/types";
import { Badge } from "@/components/ui/badge";
import { instructorImages } from "@/lib/images";

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  const image = instructorImages[instructor.name];

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/8 bg-white/70 shadow-sm shadow-charcoal/5">
      {image ? (
        <div className="relative aspect-[4/3] bg-sage-100">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-medium text-charcoal">{instructor.name}</h3>
        <p className="text-sm font-medium text-terracotta-600">{instructor.role}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-soft">{instructor.bio}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {instructor.specialties.map((specialty) => (
            <Badge key={specialty} variant="sage">{specialty}</Badge>
          ))}
        </div>

        <ul className="mt-5 space-y-1.5 border-t border-charcoal/8 pt-4">
          {instructor.certifications.map((cert) => (
            <li key={cert} className="flex items-start gap-2 text-xs text-charcoal-faint">
              <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
