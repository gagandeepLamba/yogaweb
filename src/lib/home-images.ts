import type { SiteImage } from "@/lib/images";

const u = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=85`;

export const heroSlides: (SiteImage & { eyebrow: string; title: string; text: string })[] = [
  {
    src: u("photo-1544367567-0f2fcb009e0b", 1920, 900),
    alt: "Yoga student in a calm seated pose in a bright studio",
    eyebrow: "Welcome to Shanti Yoga Studio",
    title: "Breathe deeper. Move with purpose.",
    text: "Fourteen yoga styles taught through private sessions, group classes and live online programs.",
  },
  {
    src: u("photo-1506126613408-eca07ce68773", 1920, 900),
    alt: "Yoga student holding a steady pose on a mat",
    eyebrow: "Every body is welcome",
    title: "A practice that meets you where you are",
    text: "From grounding Hatha to restorative evenings — find the rhythm that fits your life.",
  },
  {
    src: u("photo-1508672019048-805c876b67e2", 1920, 900),
    alt: "Calm outdoor meditation at sunrise",
    eyebrow: "Mind · Body · Spirit",
    title: "Find stillness in a busy world",
    text: "Meditation, pranayama and mindful movement for complete well-being.",
  },
];

export const aboutImages = {
  main: { src: u("photo-1599901860904-17e6ed7083a0", 900, 1000), alt: "Small group yoga class practicing together" },
  inset: { src: u("photo-1518611012118-696072aa579a", 600, 700), alt: "Focused yoga practice with a strong posture" },
};

export const missionImage: SiteImage = {
  src: u("photo-1545389336-cf090694435e", 900, 1000),
  alt: "Yoga mats prepared in a bright studio before class",
};

export const joinBannerImage: SiteImage = {
  src: u("photo-1508672019048-805c876b67e2", 1920, 700),
  alt: "Silhouette of a person meditating at sunrise",
};

export const founderImage: SiteImage = {
  src: u("photo-1494790108377-be9c29b29330", 700, 900),
  alt: "Portrait of Maya Ferreira, lead instructor and studio founder",
};

export const communityImage: SiteImage = {
  src: u("photo-1503454537195-1dcabb73ffb9", 900, 1000),
  alt: "Young students enjoying a playful community yoga class",
};

export const testimonialImage: SiteImage = {
  src: u("photo-1593811167562-9cef47bfc4d7", 900, 900),
  alt: "Yoga student practicing with careful alignment",
};

export const galleryImages: SiteImage[] = [
  { src: u("photo-1544367567-0f2fcb009e0b", 700, 700), alt: "Seated yoga pose in the studio" },
  { src: u("photo-1599901860904-17e6ed7083a0", 700, 700), alt: "Flowing group class" },
  { src: u("photo-1524863479829-916d8e77f114", 700, 700), alt: "Meditative practice" },
  { src: u("photo-1588286840104-8957b019727f", 700, 700), alt: "Restful floor stretch" },
  { src: u("photo-1552196563-55cd4e45efb3", 700, 700), alt: "Strong balancing pose" },
  { src: u("photo-1575052814086-f385e2e2ad1b", 700, 700), alt: "Energetic studio practice" },
  { src: u("photo-1510894347713-fc3ed6fdf539", 700, 700), alt: "Restorative practice in soft light" },
  { src: u("photo-1593810451137-5dc55105dace", 700, 700), alt: "Aerial yoga stretch" },
];
