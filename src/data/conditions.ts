export type ConditionIcon =
  | "droplet"
  | "scale"
  | "moon"
  | "brain"
  | "cloud"
  | "battery"
  | "wind"
  | "activity"
  | "bone"
  | "heart"
  | "dumbbell"
  | "spine";

export interface Condition {
  name: string;
  icon: ConditionIcon;
  summary: string;
}

/** Wellness goals the studio supports. Yoga complements — it does not replace — medical care. */
export const conditions: Condition[] = [
  { name: "Blood Sugar Balance", icon: "droplet", summary: "Gentle, regular movement and breathwork that support healthy lifestyle habits alongside medical care." },
  { name: "Weight Management", icon: "scale", summary: "Strength-building flows and mindful practice that support a sustainable, balanced routine." },
  { name: "Better Sleep", icon: "moon", summary: "Yin, restorative and breathing practices that help the body wind down for deeper rest." },
  { name: "Anxiety & Stress", icon: "brain", summary: "Pranayama and meditation to calm the nervous system and build resilience." },
  { name: "Low Mood", icon: "cloud", summary: "Uplifting movement and community practice to lift energy and connection." },
  { name: "Fatigue & Energy", icon: "battery", summary: "Energising sequences and breath techniques to restore vitality through the day." },
  { name: "Breathing & Allergies", icon: "wind", summary: "Breath-focused practices that open the chest and encourage easy, steady breathing." },
  { name: "Chronic Pain", icon: "activity", summary: "Slow, adaptive sessions that ease tension and build body awareness at your pace." },
  { name: "Joint Care", icon: "bone", summary: "Low-impact mobility work to keep joints supple, supported and moving well." },
  { name: "Hormonal Wellness", icon: "heart", summary: "Restorative and balancing practices that support cycle awareness and calm." },
  { name: "Sports Recovery", icon: "dumbbell", summary: "Mobility, alignment and recovery work for athletes and active people." },
  { name: "Back & Posture", icon: "spine", summary: "Alignment-led classes that strengthen the core and relieve desk-bound stiffness." },
];

export const conditionsDisclaimer =
  "Yoga is a complementary practice and is not a substitute for medical advice, diagnosis or treatment. Please consult your doctor before beginning any new exercise program.";

export const commonGoals: string[] = [
  "Blood sugar balance",
  "Weight management",
  "Hormonal wellness",
  "Better sleep",
  "Anxiety & stress",
  "Low mood",
  "Fatigue & low energy",
  "Breathing & allergies",
  "Chronic pain",
  "Joint care",
  "Sports recovery",
  "Back & posture",
  "Blood pressure support",
  "Digestive comfort",
  "Focus & concentration",
];

export const goalAreas: { name: string; items: string[] }[] = [
  { name: "Head", items: ["Tension headaches", "Migraine support", "Focus & clarity"] },
  { name: "Neck & Shoulders", items: ["Stiff neck", "Shoulder tension", "Frozen shoulder mobility"] },
  { name: "Back", items: ["Lower back ache", "Posture correction", "Sciatic comfort", "Spinal mobility"] },
  { name: "Knees & Legs", items: ["Stiff knees", "Joint pain", "Ankle mobility", "Leg strength"] },
  { name: "Chest & Breath", items: ["Chest tightness", "Breathing capacity", "Asthma-friendly breathwork"] },
  { name: "Stomach", items: ["Digestive comfort", "Bloating", "Core strength"] },
  { name: "Mind", items: ["Anxiety", "Stress", "Anger management", "Restful sleep"] },
  { name: "Skin & Glow", items: ["Circulation", "Stress-related skin flare-ups"] },
  { name: "Women's Health", items: ["Cycle awareness", "Prenatal care", "Postnatal recovery"] },
];
