export type SiteImage = {
  src: string;
  alt: string;
};

const unsplash = (id: string, width = 1200, height = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=85`;

export const homeHeroImage: SiteImage = {
  src: unsplash("photo-1544367567-0f2fcb009e0b", 1400, 1500),
  alt: "Yoga student practicing a calm seated pose in a bright studio",
};

export const yogaStyleImages: Record<string, SiteImage> = {
  "hatha-yoga": {
    src: unsplash("photo-1506126613408-eca07ce68773"),
    alt: "Yoga student holding a steady Hatha pose on a mat",
  },
  "vinyasa-flow-yoga": {
    src: unsplash("photo-1599901860904-17e6ed7083a0"),
    alt: "Yoga class moving through a flowing sequence",
  },
  "ashtanga-yoga": {
    src: unsplash("photo-1518611012118-696072aa579a"),
    alt: "Focused yoga practice with a strong athletic posture",
  },
  "kundalini-yoga": {
    src: unsplash("photo-1524863479829-916d8e77f114"),
    alt: "Meditative yoga practice with hands resting peacefully",
  },
  "yin-yoga": {
    src: unsplash("photo-1588286840104-8957b019727f"),
    alt: "Restful floor-based yoga stretch in a peaceful room",
  },
  "restorative-yoga": {
    src: unsplash("photo-1510894347713-fc3ed6fdf539"),
    alt: "Relaxed restorative yoga practice with soft natural light",
  },
  "power-yoga": {
    src: unsplash("photo-1552196563-55cd4e45efb3"),
    alt: "Strong yoga pose showing balance and core strength",
  },
  "iyengar-yoga": {
    src: unsplash("photo-1593811167562-9cef47bfc4d7"),
    alt: "Alignment-focused yoga practice using careful form",
  },
  "hot-yoga": {
    src: unsplash("photo-1575052814086-f385e2e2ad1b"),
    alt: "Energetic yoga practice in a warm studio setting",
  },
  "prenatal-yoga": {
    src: unsplash("photo-1599447421416-3414500d18a5"),
    alt: "Gentle prenatal yoga practice for an expecting parent",
  },
  "aerial-yoga": {
    src: unsplash("photo-1593810451137-5dc55105dace"),
    alt: "Aerial yoga student stretching with a suspended hammock",
  },
  "chair-yoga": {
    src: unsplash("photo-1603988363607-e1e4a66962c6"),
    alt: "Accessible yoga practice with supported seated movement",
  },
  "kids-teen-yoga": {
    src: unsplash("photo-1503454537195-1dcabb73ffb9"),
    alt: "Young student enjoying playful yoga movement",
  },
  "meditation-pranayama": {
    src: unsplash("photo-1508672019048-805c876b67e2"),
    alt: "Calm meditation and breathing practice outdoors",
  },
};

export const serviceImages: Record<string, SiteImage> = {
  "private-yoga-sessions": {
    src: unsplash("photo-1593811167562-9cef47bfc4d7"),
    alt: "Private yoga instruction with close alignment guidance",
  },
  "group-classes": {
    src: unsplash("photo-1599901860904-17e6ed7083a0"),
    alt: "Small group yoga class practicing together in a studio",
  },
  "online-yoga-classes": {
    src: unsplash("photo-1593810451137-5dc55105dace"),
    alt: "Yoga practice arranged for a flexible at-home session",
  },
  "corporate-yoga": {
    src: unsplash("photo-1573496359142-b8d87734a5a2"),
    alt: "Workplace wellness session with mindful movement",
  },
  "retreats-and-workshops": {
    src: unsplash("photo-1500530855697-b586d89ba3ee"),
    alt: "Peaceful retreat setting for immersive yoga workshops",
  },
};

export const instructorImages: Record<string, SiteImage> = {
  "Maya Ferreira": {
    src: unsplash("photo-1494790108377-be9c29b29330", 900, 1100),
    alt: "Portrait of Maya Ferreira, lead yoga instructor",
  },
  "Daniel Okoye": {
    src: unsplash("photo-1500648767791-00dcc994a43e", 900, 1100),
    alt: "Portrait of Daniel Okoye, senior yoga instructor",
  },
  "Sophia Ramirez": {
    src: unsplash("photo-1534528741775-53994a69daeb", 900, 1100),
    alt: "Portrait of Sophia Ramirez, restorative and prenatal yoga instructor",
  },
};

export const blogImages: Record<string, SiteImage> = {
  "which-yoga-style-is-right-for-you": {
    src: unsplash("photo-1545389336-cf090694435e"),
    alt: "Yoga mats prepared in a bright studio before class",
  },
  "vinyasa-vs-hatha-whats-the-difference": {
    src: unsplash("photo-1506126613408-eca07ce68773"),
    alt: "Yoga student comparing steady posture and flowing movement",
  },
  "group-vs-private-yoga-sessions": {
    src: unsplash("photo-1599901860904-17e6ed7083a0"),
    alt: "Group yoga class practicing together in a studio",
  },
  "5-benefits-of-a-daily-yoga-practice": {
    src: unsplash("photo-1518611012118-696072aa579a"),
    alt: "Consistent yoga practice with focused movement on a mat",
  },
  "preparing-for-your-first-prenatal-class": {
    src: unsplash("photo-1599447421416-3414500d18a5"),
    alt: "Gentle prenatal yoga setup with supportive props",
  },
  "yin-yoga-evening-routine-for-better-sleep": {
    src: unsplash("photo-1508672019048-805c876b67e2"),
    alt: "Peaceful meditation practice for stress relief",
  },
};
