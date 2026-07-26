import { Award } from "lucide-react";
import type { Instructor } from "@/types";
import { Badge } from "@/components/ui/badge";

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-charcoal/8 bg-white/70 p-7 shadow-sm shadow-charcoal/5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 font-display text-2xl font-medium text-sage-800">
        {instructor.name
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </div>
      <h3 className="mt-5 font-display text-xl font-medium text-charcoal">{instructor.name}</h3>
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
  );
}
