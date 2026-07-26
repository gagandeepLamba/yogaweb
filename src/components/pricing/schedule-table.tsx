import Link from "next/link";
import { schedule, scheduleDays } from "@/data/schedule";
import { Badge } from "@/components/ui/badge";

export function ScheduleTable() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-charcoal/8 bg-white/70 shadow-sm shadow-charcoal/5">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-charcoal/8 bg-cream-deep/60">
            <th className="px-5 py-4 font-display font-medium text-charcoal">Day</th>
            <th className="px-5 py-4 font-display font-medium text-charcoal">Time</th>
            <th className="px-5 py-4 font-display font-medium text-charcoal">Class</th>
            <th className="px-5 py-4 font-display font-medium text-charcoal">Instructor</th>
          </tr>
        </thead>
        <tbody>
          {scheduleDays.map((day) => {
            const slots = schedule.filter((slot) => slot.day === day);
            if (slots.length === 0) return null;

            return slots.map((slot, index) => (
              <tr key={`${day}-${slot.time}`} className="border-b border-charcoal/6 last:border-0">
                <td className="px-5 py-3 font-medium text-charcoal">{index === 0 ? day : ""}</td>
                <td className="px-5 py-3 text-charcoal-soft">{slot.time}</td>
                <td className="px-5 py-3">
                  <Link href={`/yoga-styles/${slot.styleSlug}`} className="text-sage-700 hover:underline">
                    {slot.className}
                  </Link>
                  <Badge variant="cream" className="ml-2">{slot.type}</Badge>
                </td>
                <td className="px-5 py-3 text-charcoal-soft">{slot.instructor}</td>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
}
