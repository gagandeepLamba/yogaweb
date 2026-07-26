import type { YogaStyle } from "@/types";

export const yogaStyles: YogaStyle[] = [
  {
    slug: "hatha-yoga",
    name: "Hatha Yoga",
    tagline: "The foundation of all yoga styles",
    shortDescription:
      "A slow-paced, gentle practice combining classic postures with mindful breathing — the ideal starting point for anyone new to yoga.",
    level: "Beginner Friendly",
    duration: "60 min",
    intensity: "Low-Medium",
    icon: "lotus",
    focusAreas: ["Flexibility", "Alignment", "Breath awareness", "Grounding"],
    benefits: [
      "Builds a strong, safe foundation in basic postures",
      "Improves flexibility and joint mobility",
      "Teaches proper breathing (pranayama) techniques",
      "Lowers stress and calms the nervous system",
      "Improves posture and body awareness",
    ],
    whoItsFor:
      "First-timers, anyone easing back into movement, and practitioners who want to slow down and refine their alignment.",
    whatToExpect: [
      "A gentle warm-up to mobilise the spine and joints",
      "Standing and seated postures held for 5–8 breaths each",
      "Guided pranayama (breathing) exercises",
      "A full relaxation in Savasana to close the class",
    ],
    goodToKnow:
      "No experience or flexibility required — mats and props are provided, and instructors offer modifications for every pose.",
    relatedSlugs: ["iyengar-yoga", "restorative-yoga", "meditation-pranayama"],
  },
  {
    slug: "vinyasa-flow-yoga",
    name: "Vinyasa Flow Yoga",
    tagline: "Move with your breath",
    shortDescription:
      "A dynamic, flowing practice that links breath to movement, building heat, strength, and mental focus one sequence at a time.",
    level: "All Levels",
    duration: "60–75 min",
    intensity: "Medium-High",
    icon: "flow",
    focusAreas: ["Strength", "Cardio", "Coordination", "Flexibility"],
    benefits: [
      "Builds full-body strength and lean muscle tone",
      "Improves cardiovascular fitness and stamina",
      "Sharpens focus through breath-movement coordination",
      "Burns calories while staying low-impact on joints",
      "Leaves you with a genuine post-workout endorphin lift",
    ],
    whoItsFor:
      "Practitioners who enjoy variety and movement, and anyone wanting a workout that also quiets the mind.",
    whatToExpect: [
      "A warm-up building into sun salutations",
      "Creative, ever-changing sequences linking pose to pose",
      "Balancing postures and core-strengthening work",
      "A cool-down stretch and guided relaxation",
    ],
    goodToKnow:
      "No two classes are the same — instructors design fresh sequences each week, so it never feels repetitive.",
    relatedSlugs: ["power-yoga", "ashtanga-yoga", "hot-yoga"],
  },
  {
    slug: "ashtanga-yoga",
    name: "Ashtanga Yoga",
    tagline: "The disciplined path",
    shortDescription:
      "A physically demanding, traditional practice following a fixed sequence of postures — perfect for building discipline, strength, and stamina.",
    level: "Intermediate–Advanced",
    duration: "75–90 min",
    intensity: "High",
    icon: "discipline",
    focusAreas: ["Strength", "Stamina", "Discipline", "Heat-building"],
    benefits: [
      "Develops significant upper-body and core strength",
      "Builds mental discipline through a set, repeatable sequence",
      "Increases stamina, focus, and internal heat",
      "Deepens flexibility over consistent, long-term practice",
      "Creates a moving meditation once the sequence is memorised",
    ],
    whoItsFor:
      "Committed practitioners with some yoga experience who want a rigorous, athletic, tradition-rooted practice.",
    whatToExpect: [
      "The same structured sequence practiced each session (Primary Series)",
      "Synchronised Ujjayi breath with every movement",
      "Challenging arm balances, binds, and backbends",
      "A brief closing sequence and rest",
    ],
    goodToKnow:
      "Because the sequence repeats, progress is easy to track — instructors will pace new students through modified stages.",
    relatedSlugs: ["power-yoga", "vinyasa-flow-yoga", "hot-yoga"],
  },
  {
    slug: "kundalini-yoga",
    name: "Kundalini Yoga",
    tagline: "Awaken your inner energy",
    shortDescription:
      "A soulful blend of dynamic postures, breathwork, chanting, and meditation designed to release energy and expand awareness.",
    level: "All Levels",
    duration: "60 min",
    intensity: "Medium",
    icon: "energy",
    focusAreas: ["Energy flow", "Breathwork", "Mindfulness", "Spinal strength"],
    benefits: [
      "Releases stored tension and boosts energy levels",
      "Strengthens the nervous and glandular systems",
      "Builds emotional resilience and mental clarity",
      "Combines movement, sound, and stillness for a full reset",
      "Supports a deeper meditation practice over time",
    ],
    whoItsFor:
      "Practitioners curious about the meditative and spiritual dimensions of yoga, beyond the physical postures.",
    whatToExpect: [
      "Repetitive movement sets (kriyas) paired with specific breath patterns",
      "Chanting or mantra work",
      "Extended breathing exercises and meditation",
      "A closing relaxation with soft gong or music",
    ],
    goodToKnow:
      "Classes are often taught in loose, comfortable clothing and may include a head covering — entirely optional and explained on arrival.",
    relatedSlugs: ["meditation-pranayama", "yin-yoga", "hatha-yoga"],
  },
  {
    slug: "yin-yoga",
    name: "Yin Yoga",
    tagline: "Slow down, go deep",
    shortDescription:
      "A quiet, meditative practice where seated and floor postures are held for 3–5 minutes to target deep connective tissue.",
    level: "All Levels",
    duration: "60 min",
    intensity: "Low",
    icon: "moon",
    focusAreas: ["Deep flexibility", "Joint health", "Stillness", "Nervous system reset"],
    benefits: [
      "Increases flexibility in the hips, spine, and shoulders",
      "Improves joint mobility and connective-tissue health",
      "Activates the parasympathetic ('rest and digest') nervous system",
      "Reduces anxiety and improves sleep quality",
      "Complements more active styles by balancing yang energy",
    ],
    whoItsFor:
      "Anyone with a busy, high-stress lifestyle, athletes needing deep recovery, and those who find stillness challenging (in a good way).",
    whatToExpect: [
      "A short centering meditation",
      "5–8 floor postures, each held 3–5 minutes with props for support",
      "Quiet, minimal instruction — space to simply be",
      "An extended closing relaxation",
    ],
    goodToKnow:
      "Bolsters, blocks, and blankets are provided so every held pose feels supported, never strained.",
    relatedSlugs: ["restorative-yoga", "meditation-pranayama", "kundalini-yoga"],
  },
  {
    slug: "restorative-yoga",
    name: "Restorative Yoga",
    tagline: "Deep rest, deep healing",
    shortDescription:
      "A fully supported, prop-heavy practice designed to trigger the body's relaxation response — the closest thing to yoga for your nervous system.",
    level: "All Levels",
    duration: "60 min",
    intensity: "Low",
    icon: "rest",
    focusAreas: ["Rest", "Stress relief", "Nervous system regulation", "Sleep support"],
    benefits: [
      "Dramatically lowers cortisol and stress markers",
      "Improves sleep quality and reduces fatigue",
      "Supports recovery from burnout, illness, or overtraining",
      "Gently opens the body without any exertion",
      "Cultivates a felt sense of safety and calm",
    ],
    whoItsFor:
      "Anyone feeling burnt out or overstimulated, people recovering from injury or illness, and beginners intimidated by 'active' yoga.",
    whatToExpect: [
      "Fully propped postures using bolsters, blankets, and blocks",
      "Long holds of 5–10 minutes per pose",
      "Soft guided breathing or body-scan meditation",
      "Dim lighting and minimal, soothing instruction",
    ],
    goodToKnow:
      "You may fall asleep — that's completely normal and welcomed in this class.",
    relatedSlugs: ["yin-yoga", "meditation-pranayama", "prenatal-yoga"],
  },
  {
    slug: "power-yoga",
    name: "Power Yoga",
    tagline: "Strength meets flow",
    shortDescription:
      "A fitness-driven, athletic style of vinyasa that builds serious strength, endurance, and a hard-earned sweat.",
    level: "Intermediate",
    duration: "60 min",
    intensity: "High",
    icon: "power",
    focusAreas: ["Strength", "Endurance", "Core", "Calorie burn"],
    benefits: [
      "Builds lean muscle across the whole body",
      "Torches calories and elevates cardiovascular fitness",
      "Strengthens core stability and balance",
      "Builds the mental grit to push through discomfort",
      "Delivers a fast, efficient full-body workout",
    ],
    whoItsFor:
      "Fitness-focused practitioners and anyone who wants their yoga class to double as a strength workout.",
    whatToExpect: [
      "A fast-paced warm-up building heat quickly",
      "Strength-focused sequences: planks, chaturangas, squats, arm balances",
      "Minimal rest between postures",
      "A short but necessary final relaxation",
    ],
    goodToKnow:
      "Expect to sweat — bring a towel and water bottle, and come prepared to work.",
    relatedSlugs: ["ashtanga-yoga", "vinyasa-flow-yoga", "hot-yoga"],
  },
  {
    slug: "iyengar-yoga",
    name: "Iyengar Yoga",
    tagline: "Precision & alignment",
    shortDescription:
      "A meticulous, alignment-focused style using props like blocks, straps, and walls to help every body find correct, safe form.",
    level: "All Levels",
    duration: "75 min",
    intensity: "Low-Medium",
    icon: "alignment",
    focusAreas: ["Alignment", "Precision", "Injury prevention", "Body awareness"],
    benefits: [
      "Corrects posture and structural imbalances",
      "Builds strength and stability with precise technique",
      "Reduces injury risk through careful alignment cues",
      "Improves proprioception (body awareness in space)",
      "Adapts to virtually any body, injury, or limitation",
    ],
    whoItsFor:
      "Detail-oriented practitioners, anyone recovering from or managing an injury, and those who want to truly understand each pose.",
    whatToExpect: [
      "Extended holds with detailed alignment instruction",
      "Heavy use of props: blocks, straps, bolsters, and walls",
      "Postures broken down step-by-step",
      "A methodical, unhurried pace throughout",
    ],
    goodToKnow:
      "This is a wonderful style for rehabilitating injuries — many students work with instructors on a modified plan.",
    relatedSlugs: ["hatha-yoga", "chair-yoga", "restorative-yoga"],
  },
  {
    slug: "hot-yoga",
    name: "Hot Yoga",
    tagline: "Sweat, detoxify, transform",
    shortDescription:
      "A vigorous, Bikram-inspired sequence practiced in a heated room (around 38–40°C) to increase flexibility and encourage deep detoxification.",
    level: "Intermediate",
    duration: "75–90 min",
    intensity: "High",
    icon: "flame",
    focusAreas: ["Detoxification", "Flexibility", "Endurance", "Mental resilience"],
    benefits: [
      "Increases flexibility as heat allows deeper stretching",
      "Promotes heavy sweating and a sense of detoxification",
      "Builds serious cardiovascular endurance",
      "Strengthens mental focus and resilience under discomfort",
      "Leaves you with a powerful sense of accomplishment",
    ],
    whoItsFor:
      "Experienced practitioners comfortable with intensity and heat; not recommended for pregnancy or certain heart conditions.",
    whatToExpect: [
      "A heated studio (approx. 38–40°C / 100–104°F)",
      "A fixed 26-posture-style sequence performed twice",
      "Two breathing exercises bookending the class",
      "Mandatory hydration breaks and a final relaxation",
    ],
    goodToKnow:
      "Arrive hydrated, bring a towel and extra water, and listen closely to your body — resting in child's pose is always encouraged.",
    relatedSlugs: ["power-yoga", "ashtanga-yoga", "vinyasa-flow-yoga"],
  },
  {
    slug: "prenatal-yoga",
    name: "Prenatal Yoga",
    tagline: "Nurture yourself and your baby",
    shortDescription:
      "A gentle, trimester-adapted practice that supports strength, breathing, and relaxation throughout pregnancy.",
    level: "All Trimesters",
    duration: "60 min",
    intensity: "Low",
    icon: "baby",
    focusAreas: ["Pelvic floor", "Breathwork", "Hip mobility", "Relaxation"],
    benefits: [
      "Eases common pregnancy discomforts (back, hips, sciatica)",
      "Strengthens the pelvic floor and prepares for labour",
      "Teaches breathing techniques useful during delivery",
      "Builds connection with your changing body and baby",
      "Creates community with other expecting parents",
    ],
    whoItsFor:
      "Expecting parents at any stage of pregnancy (with physician clearance), from first trimester through to full term.",
    whatToExpect: [
      "Gentle postures adapted for each trimester and comfort level",
      "Hip-opening and pelvic floor work",
      "Labour-focused breathing techniques",
      "Relaxation in a supported side-lying position",
    ],
    goodToKnow:
      "Please check with your healthcare provider before starting, and let your instructor know your due date and any complications.",
    relatedSlugs: ["restorative-yoga", "hatha-yoga", "meditation-pranayama"],
  },
  {
    slug: "aerial-yoga",
    name: "Aerial Yoga",
    tagline: "Defy gravity",
    shortDescription:
      "A playful, supported practice using a soft fabric hammock to deepen stretches, decompress the spine, and build core strength.",
    level: "All Levels",
    duration: "60 min",
    intensity: "Medium",
    icon: "aerial",
    focusAreas: ["Core strength", "Spinal decompression", "Flexibility", "Play"],
    benefits: [
      "Decompresses the spine through supported inversions",
      "Builds core and upper-body strength in a fun, novel way",
      "Deepens flexibility beyond what's possible on the mat",
      "Improves balance and body confidence",
      "Adds a genuine sense of play to your practice",
    ],
    whoItsFor:
      "Adventurous practitioners of any level curious about inversions and supported stretching — no aerial or gymnastics background needed.",
    whatToExpect: [
      "An intro to using the hammock safely",
      "Supported floor and standing postures using the fabric",
      "Playful inversions, including supported backbends",
      "A cocooned, hammock-supported final relaxation",
    ],
    goodToKnow:
      "Wear fitted, sleeved clothing (no exposed underarms/knee skin against fabric) and avoid heavy meals for 2 hours beforehand.",
    relatedSlugs: ["vinyasa-flow-yoga", "restorative-yoga", "power-yoga"],
  },
  {
    slug: "chair-yoga",
    name: "Chair Yoga",
    tagline: "Accessible yoga for every body",
    shortDescription:
      "A gentle, seated (or chair-supported) practice that brings the benefits of yoga to bodies with limited mobility.",
    level: "Beginner / Seniors / Accessible",
    duration: "45 min",
    intensity: "Low",
    icon: "chair",
    focusAreas: ["Mobility", "Circulation", "Gentle strength", "Balance"],
    benefits: [
      "Improves joint mobility and circulation without floor work",
      "Builds gentle strength safely, seated or chair-supported",
      "Reduces stiffness and supports better balance",
      "Lowers stress through breathing and mindfulness practices",
      "Makes yoga accessible regardless of mobility or age",
    ],
    whoItsFor:
      "Seniors, individuals with limited mobility, office workers wanting desk-friendly relief, and anyone recovering from surgery or injury.",
    whatToExpect: [
      "Seated warm-ups for the neck, shoulders, and spine",
      "Postures performed seated or using the chair for support while standing",
      "Gentle strengthening and balance work",
      "Seated breathing exercises and relaxation",
    ],
    goodToKnow:
      "No floor transitions required — the entire class can be done comfortably from a sturdy chair.",
    relatedSlugs: ["iyengar-yoga", "restorative-yoga", "meditation-pranayama"],
  },
  {
    slug: "kids-teen-yoga",
    name: "Kids & Teen Yoga",
    tagline: "Fun, focus & confidence",
    shortDescription:
      "A playful, imaginative class that introduces young people to movement, breathing, and mindfulness through games and stories.",
    level: "Ages 5–16",
    duration: "45 min",
    intensity: "Low-Medium",
    icon: "kids",
    focusAreas: ["Focus", "Confidence", "Coordination", "Emotional regulation"],
    benefits: [
      "Builds coordination, balance, and body confidence",
      "Teaches simple tools for managing big emotions",
      "Improves focus and attention span",
      "Encourages teamwork and creativity through games",
      "Introduces healthy movement habits early",
    ],
    whoItsFor:
      "Children and teens ages 5–16, grouped by age band, from complete beginners to returning young yogis.",
    whatToExpect: [
      "Animal-themed poses and partner games",
      "Simple breathing techniques taught as 'calm down tools'",
      "Music, storytelling, and creative movement",
      "A short relaxation with soft music or guided imagery",
    ],
    goodToKnow:
      "Classes are grouped by age (5–8, 9–12, 13–16) to keep games and pacing age-appropriate.",
    relatedSlugs: ["hatha-yoga", "meditation-pranayama", "vinyasa-flow-yoga"],
  },
  {
    slug: "meditation-pranayama",
    name: "Meditation & Pranayama",
    tagline: "Stillness within",
    shortDescription:
      "A seated practice of guided meditation and structured breathing techniques (pranayama), including Yoga Nidra, to train a calm, focused mind.",
    level: "All Levels",
    duration: "45 min",
    intensity: "Low",
    icon: "breath",
    focusAreas: ["Mental clarity", "Stress reduction", "Breath control", "Sleep"],
    benefits: [
      "Reduces anxiety and quiets a busy mind",
      "Improves lung capacity and breath control",
      "Sharpens concentration and mental clarity",
      "Supports better sleep through Yoga Nidra practice",
      "Builds a portable toolkit you can use anywhere, anytime",
    ],
    whoItsFor:
      "Anyone dealing with stress or racing thoughts, and practitioners wanting to deepen the mental/spiritual side of yoga.",
    whatToExpect: [
      "A comfortable seated or lying setup with props as needed",
      "Guided breathing techniques (alternate nostril, box breathing, and more)",
      "Silent or guided meditation",
      "An optional closing Yoga Nidra ('yogic sleep') session",
    ],
    goodToKnow:
      "No prior meditation experience is needed — instructors guide every step, including what to do with a wandering mind.",
    relatedSlugs: ["yin-yoga", "kundalini-yoga", "restorative-yoga"],
  },
];

export function getYogaStyleBySlug(slug: string) {
  return yogaStyles.find((style) => style.slug === slug);
}
