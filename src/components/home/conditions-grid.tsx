import {
  Activity,
  BatteryLow,
  Bone,
  Brain,
  CloudRain,
  Droplet,
  Dumbbell,
  Heart,
  Moon,
  PersonStanding,
  Scale,
  Wind,
} from "lucide-react";
import { conditions, type ConditionIcon } from "@/data/conditions";

const icons: Record<ConditionIcon, typeof Activity> = {
  droplet: Droplet,
  scale: Scale,
  moon: Moon,
  brain: Brain,
  cloud: CloudRain,
  battery: BatteryLow,
  wind: Wind,
  activity: Activity,
  bone: Bone,
  heart: Heart,
  dumbbell: Dumbbell,
  spine: PersonStanding,
};

export function ConditionsGrid({ showSummary = false }: { showSummary?: boolean }) {
  return (
    <ul
      className={
        showSummary
          ? "grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          : "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
      }
    >
      {conditions.map((condition) => {
        const Icon = icons[condition.icon];
        return (
          <li key={condition.name} className="flex flex-col items-center text-center">
            <span className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-gradient-to-b from-[#c79770] to-sage-600 text-white shadow-md shadow-sage-900/10">
              <Icon className="h-11 w-11" strokeWidth={1.4} />
            </span>
            <span className="mt-4 font-display text-xl text-charcoal">{condition.name}</span>
            {showSummary ? (
              <span className="mt-2 max-w-xs text-[15px] leading-relaxed text-charcoal-soft">{condition.summary}</span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
