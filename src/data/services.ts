import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "private-yoga-sessions",
    title: "Private 1-on-1 Yoga Sessions",
    tagline: "Personalised attention, your pace, your goals",
    summary:
      "One-on-one sessions built entirely around you — your body, your goals, your schedule. Ideal for beginners, injury recovery, or accelerating an existing practice.",
    icon: "private",
    description: [
      "Private sessions pair you with a dedicated instructor for a practice designed specifically around your body, goals, and experience level.",
      "Whether you're brand new to yoga, recovering from an injury, training for a specific goal, or simply prefer individual attention, private sessions offer the fastest path to progress.",
      "Sessions can be held at our studio, at your home, or online — whichever fits your life best.",
    ],
    features: [
      "A full intake and goals conversation before your first session",
      "Fully customised sequence — any style, any focus",
      "Real-time alignment corrections and hands-on cues",
      "Flexible scheduling, including early morning and evening slots",
      "Available in-studio, at home, or via live video",
    ],
    idealFor:
      "Beginners wanting a confident start, injury recovery, pregnancy, athletes with specific goals, or anyone who prefers individual attention over a group setting.",
    format: "1-on-1 · in-studio, at-home, or online · 45–75 min",
    relatedStyleSlugs: ["hatha-yoga", "iyengar-yoga", "prenatal-yoga"],
  },
  {
    slug: "group-classes",
    title: "Group Public Classes",
    tagline: "Shared energy, community motivation",
    summary:
      "Small-group studio classes across every style we teach — a supportive, energising environment led by our senior instructors.",
    icon: "group",
    description: [
      "Our group classes run daily across all 14 styles, capped at a small class size so every student still gets individual attention.",
      "Classes are organised by level — from gentle beginner sessions to advanced power flow — so you can always find the right fit.",
      "It's the most affordable way to build a consistent practice while enjoying the motivation and community of practicing alongside others.",
    ],
    features: [
      "Daily classes across morning, midday, and evening slots",
      "Small class sizes (capped at 16) for personal attention",
      "All levels welcome, with modifications always offered",
      "Rotating instructors so you experience different teaching styles",
      "Mats and props provided",
    ],
    idealFor:
      "Anyone who thrives on community energy, wants an affordable and consistent routine, or enjoys the accountability of a scheduled class.",
    format: "Group · in-studio · 45–90 min · see full schedule",
    relatedStyleSlugs: ["vinyasa-flow-yoga", "power-yoga", "yin-yoga"],
  },
  {
    slug: "online-yoga-classes",
    title: "Online Live Yoga Classes",
    tagline: "Studio quality, wherever you are",
    summary:
      "Real-time, instructor-led classes streamed live — practice from home, on the road, or anywhere with an internet connection.",
    icon: "online",
    description: [
      "Can't make it to the studio? Our live-streamed classes bring the same instructors and energy straight to your living room.",
      "Join from any device — every session is interactive, with instructors able to see and cue you directly, unlike a pre-recorded video.",
      "A great option for travellers, remote workers, or anyone building a home practice alongside their studio visits.",
    ],
    features: [
      "Fully live and interactive — not pre-recorded",
      "Small group or private online formats available",
      "Instructor feedback via camera, just like in-studio",
      "Replay access for select classes",
      "Works on any laptop, tablet, or phone",
    ],
    idealFor:
      "Busy professionals, frequent travellers, remote or out-of-town students, and anyone building a flexible home practice.",
    format: "Group or private · live video · 45–60 min",
    relatedStyleSlugs: ["meditation-pranayama", "hatha-yoga", "chair-yoga"],
  },
  {
    slug: "corporate-yoga",
    title: "Corporate Yoga Programs",
    tagline: "Healthier, happier, more focused teams",
    summary:
      "On-site or virtual yoga and mindfulness programs designed to reduce workplace stress and boost team wellbeing.",
    icon: "corporate",
    description: [
      "We partner with companies to bring regular yoga, breathwork, and mindfulness sessions directly to the workplace — on-site or virtual.",
      "Programs are tailored to your team's schedule and space, from short desk-yoga breaks to full weekly class series.",
      "Investing in team wellbeing has been shown to reduce burnout, improve focus, and boost morale — we handle everything from instructor scheduling to equipment.",
    ],
    features: [
      "Flexible scheduling: weekly, bi-weekly, or one-off wellness days",
      "On-site, at your office, or fully virtual",
      "Desk-friendly chair yoga options for busy teams",
      "Custom packages based on team size and goals",
      "Dedicated account coordinator for scheduling and billing",
    ],
    idealFor:
      "HR and People teams looking to invest in employee wellbeing, reduce stress-related absenteeism, and build a healthier workplace culture.",
    format: "Group · on-site or virtual · custom scheduling",
    relatedStyleSlugs: ["chair-yoga", "meditation-pranayama", "hatha-yoga"],
  },
  {
    slug: "retreats-and-workshops",
    title: "Yoga Retreats & Workshops",
    tagline: "Immersive practice, lasting transformation",
    summary:
      "Weekend workshops and multi-day retreats that go deeper than a weekly class — dedicated time to rest, learn, and reconnect.",
    icon: "retreat",
    description: [
      "A few times a year, we host immersive workshops and retreats focused on a specific theme — backbends, inversions, Yoga Nidra, or a full weekend of rest and reflection.",
      "Retreats combine multiple daily practices with nourishing meals, downtime, and community — a genuine reset for body and mind.",
      "Workshops are shorter, focused deep-dives (2–4 hours) perfect for building a specific skill without a full weekend commitment.",
    ],
    features: [
      "Seasonal themed workshops (2–4 hours)",
      "Weekend and multi-day retreats, in-town or destination",
      "Small group sizes for a personal, immersive experience",
      "Meals, materials, and takeaway resources included on retreats",
      "Early-bird pricing for members",
    ],
    idealFor:
      "Dedicated practitioners wanting to go deeper, anyone craving a genuine reset, and students working toward a specific skill or milestone pose.",
    format: "Group · in-studio or destination · half-day to multi-day",
    relatedStyleSlugs: ["ashtanga-yoga", "yin-yoga", "kundalini-yoga"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
