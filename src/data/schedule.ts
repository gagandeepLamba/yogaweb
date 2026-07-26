import type { ScheduleSlot } from "@/types";

export const schedule: ScheduleSlot[] = [
  { day: "Monday", time: "6:30 AM", className: "Hatha Yoga", styleSlug: "hatha-yoga", type: "Group", instructor: "Maya Ferreira" },
  { day: "Monday", time: "9:00 AM", className: "Prenatal Yoga", styleSlug: "prenatal-yoga", type: "Group", instructor: "Sophia Ramirez" },
  { day: "Monday", time: "6:00 PM", className: "Vinyasa Flow", styleSlug: "vinyasa-flow-yoga", type: "Group", instructor: "Daniel Okoye" },
  { day: "Monday", time: "7:30 PM", className: "Yin Yoga", styleSlug: "yin-yoga", type: "Group", instructor: "Sophia Ramirez" },
  { day: "Tuesday", time: "6:30 AM", className: "Power Yoga", styleSlug: "power-yoga", type: "Group", instructor: "Daniel Okoye" },
  { day: "Tuesday", time: "10:00 AM", className: "Chair Yoga", styleSlug: "chair-yoga", type: "Group", instructor: "Maya Ferreira" },
  { day: "Tuesday", time: "5:30 PM", className: "Ashtanga Yoga", styleSlug: "ashtanga-yoga", type: "Group", instructor: "Daniel Okoye" },
  { day: "Tuesday", time: "7:00 PM", className: "Meditation & Pranayama", styleSlug: "meditation-pranayama", type: "Group", instructor: "Maya Ferreira" },
  { day: "Wednesday", time: "7:00 AM", className: "Vinyasa Flow", styleSlug: "vinyasa-flow-yoga", type: "Group", instructor: "Daniel Okoye" },
  { day: "Wednesday", time: "12:00 PM", className: "Hot Yoga", styleSlug: "hot-yoga", type: "Group", instructor: "Daniel Okoye" },
  { day: "Wednesday", time: "6:00 PM", className: "Restorative Yoga", styleSlug: "restorative-yoga", type: "Group", instructor: "Sophia Ramirez" },
  { day: "Thursday", time: "6:30 AM", className: "Hatha Yoga", styleSlug: "hatha-yoga", type: "Group", instructor: "Maya Ferreira" },
  { day: "Thursday", time: "4:30 PM", className: "Kids & Teen Yoga", styleSlug: "kids-teen-yoga", type: "Group", instructor: "Sophia Ramirez" },
  { day: "Thursday", time: "6:00 PM", className: "Kundalini Yoga", styleSlug: "kundalini-yoga", type: "Group", instructor: "Maya Ferreira" },
  { day: "Thursday", time: "7:30 PM", className: "Aerial Yoga", styleSlug: "aerial-yoga", type: "Group", instructor: "Daniel Okoye" },
  { day: "Friday", time: "6:30 AM", className: "Vinyasa Flow", styleSlug: "vinyasa-flow-yoga", type: "Group", instructor: "Daniel Okoye" },
  { day: "Friday", time: "9:30 AM", className: "Iyengar Yoga", styleSlug: "iyengar-yoga", type: "Group", instructor: "Maya Ferreira" },
  { day: "Friday", time: "6:00 PM", className: "Power Yoga", styleSlug: "power-yoga", type: "Group", instructor: "Daniel Okoye" },
  { day: "Saturday", time: "8:00 AM", className: "Hatha Yoga", styleSlug: "hatha-yoga", type: "Group", instructor: "Maya Ferreira" },
  { day: "Saturday", time: "9:30 AM", className: "Vinyasa Flow", styleSlug: "vinyasa-flow-yoga", type: "Group", instructor: "Daniel Okoye" },
  { day: "Saturday", time: "11:00 AM", className: "Prenatal Yoga", styleSlug: "prenatal-yoga", type: "Group", instructor: "Sophia Ramirez" },
  { day: "Saturday", time: "1:00 PM", className: "Yin Yoga", styleSlug: "yin-yoga", type: "Group", instructor: "Sophia Ramirez" },
  { day: "Sunday", time: "9:00 AM", className: "Restorative Yoga", styleSlug: "restorative-yoga", type: "Group", instructor: "Sophia Ramirez" },
  { day: "Sunday", time: "11:00 AM", className: "Meditation & Pranayama", styleSlug: "meditation-pranayama", type: "Group", instructor: "Maya Ferreira" },
];

export const scheduleDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
