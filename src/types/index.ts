export type Intensity = "Low" | "Low-Medium" | "Medium" | "Medium-High" | "High";

export interface YogaStyle {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  level: string;
  duration: string;
  intensity: Intensity;
  icon: IconKey;
  focusAreas: string[];
  benefits: string[];
  whoItsFor: string;
  whatToExpect: string[];
  goodToKnow: string;
  relatedSlugs: string[];
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  icon: IconKey;
  description: string[];
  features: string[];
  idealFor: string;
  format: string;
  relatedStyleSlugs: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billingLabel: string;
  sessionsLabel: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export type SessionType = "group" | "private";
export type Frequency = "daily" | "weekly" | "monthly";

export interface PricingContent {
  group: Record<Frequency, PricingPlan[]>;
  private: Record<Frequency, PricingPlan[]>;
}

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  content: ContentBlock[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  program: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ScheduleSlot {
  day: string;
  time: string;
  className: string;
  styleSlug: string;
  type: "Group" | "Private";
  instructor: string;
}

export interface Instructor {
  name: string;
  role: string;
  bio: string;
  certifications: string[];
  specialties: string[];
}

export type IconKey =
  | "lotus"
  | "flow"
  | "discipline"
  | "energy"
  | "moon"
  | "rest"
  | "power"
  | "alignment"
  | "flame"
  | "baby"
  | "aerial"
  | "chair"
  | "kids"
  | "breath"
  | "private"
  | "group"
  | "online"
  | "corporate"
  | "retreat";
