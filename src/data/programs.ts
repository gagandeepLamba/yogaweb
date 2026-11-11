import type { SiteImage } from "@/lib/images";

export interface Program {
  title: string;
  tag: string;
  summary: string;
  image: SiteImage;
}

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&h=700&q=85`;

export const programs: Program[] = [
  {
    title: "Weekend Immersion Retreat",
    tag: "Retreat · 2 days",
    summary: "Two days of yoga, meditation and nature walks to reset body and mind away from the everyday.",
    image: { src: u("photo-1508672019048-805c876b67e2"), alt: "Person meditating by a mountain lake at a retreat" },
  },
  {
    title: "Beginner's Foundations Workshop",
    tag: "Workshop · 3 hours",
    summary: "Learn alignment, breath and the essential poses in a friendly, step-by-step small-group workshop.",
    image: { src: u("photo-1599901860904-17e6ed7083a0"), alt: "Small group yoga workshop in the studio" },
  },
  {
    title: "Corporate Wellness Series",
    tag: "On-site · 4 weeks",
    summary: "Chair yoga, stress relief and posture sessions designed to fit into the working day.",
    image: { src: u("photo-1573496359142-b8d87734a5a2"), alt: "Workplace wellness session with mindful movement" },
  },
  {
    title: "Breath & Meditation Evening",
    tag: "Workshop · 90 min",
    summary: "Pranayama and guided meditation to calm the nervous system and improve sleep.",
    image: { src: u("photo-1524863479829-916d8e77f114"), alt: "Calm meditation and breathing practice" },
  },
  {
    title: "Prenatal Preparation Workshop",
    tag: "Workshop · 2 hours",
    summary: "Gentle movement, breathing for labour and supportive props for expecting parents.",
    image: { src: u("photo-1599447421416-3414500d18a5"), alt: "Gentle prenatal yoga practice" },
  },
  {
    title: "Kids & Teens Yoga Camp",
    tag: "Camp · 5 days",
    summary: "Playful movement, mindfulness and confidence-building for young students.",
    image: { src: u("photo-1503454537195-1dcabb73ffb9"), alt: "Young student enjoying playful yoga movement" },
  },
];
