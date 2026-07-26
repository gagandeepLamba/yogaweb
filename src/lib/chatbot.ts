import { siteConfig } from "@/lib/site-config";

export interface QuickReply {
  label: string;
  message: string;
}

export interface ChatTopic {
  id: string;
  keywords: string[];
  answer: string;
  quickReplies?: QuickReply[];
}

export const mainMenuReplies: QuickReply[] = [
  { label: "Pricing & packages", message: "What are your prices?" },
  { label: "Which yoga style is for me?", message: "Which yoga style should I try?" },
  { label: "Book a trial class", message: "How do I book a class?" },
  { label: "Studio hours & location", message: "What are your hours and location?" },
  { label: "Talk to a human", message: "I'd like to talk to a person" },
];

const topics: ChatTopic[] = [
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "fee", "how much", "package", "plan", "membership", "rate"],
    answer:
      "We offer daily drop-ins, weekly plans, and monthly memberships — for both group classes and private 1-on-1 sessions. Group classes start around $28/class, and private sessions start around $95/session. Full pricing with every package is on our Pricing page.",
    quickReplies: [
      { label: "See full pricing page", message: "__nav:/pricing" },
      { label: "Group vs private?", message: "What's the difference between group and private classes?" },
      { label: "Back to main menu", message: "__menu" },
    ],
  },
  {
    id: "styles",
    keywords: [
      "style",
      "styles",
      "type of yoga",
      "which yoga",
      "hatha",
      "vinyasa",
      "ashtanga",
      "kundalini",
      "yin",
      "restorative",
      "power yoga",
      "iyengar",
      "hot yoga",
      "prenatal",
      "aerial",
      "chair yoga",
      "kids yoga",
      "meditation",
      "beginner",
      "new to yoga",
      "never done yoga",
      "first time",
    ],
    answer:
      "We teach 14 styles in total! If you're new, Hatha Yoga or Chair Yoga are the gentlest starting points. Want a workout? Try Vinyasa Flow or Power Yoga. Need deep rest? Yin or Restorative Yoga. See all 14 styles with full details on our Yoga Styles page.",
    quickReplies: [
      { label: "See all yoga styles", message: "__nav:/yoga-styles" },
      { label: "Book a trial class", message: "How do I book a class?" },
      { label: "Back to main menu", message: "__menu" },
    ],
  },
  {
    id: "booking",
    keywords: ["book", "trial", "first class", "join", "sign up", "signup", "schedule a class", "reserve"],
    answer:
      "The fastest way to book is on WhatsApp — tell us your preferred style, day, and time and we'll confirm your spot. You can also fill out the contact form and we'll get back to you within one business day.",
    quickReplies: [
      { label: "Open WhatsApp", message: "__whatsapp:Hi! I'd like to book a trial class." },
      { label: "Go to contact form", message: "__nav:/contact" },
      { label: "Back to main menu", message: "__menu" },
    ],
  },
  {
    id: "hours",
    keywords: ["hours", "open", "timing", "when are you open", "schedule", "weekly schedule", "class schedule"],
    answer: `We're open ${siteConfig.contact.hours.map((h) => `${h.days} ${h.time}`).join(", ")}. Our full weekly class schedule (with every style and time slot) is on the Pricing and Services pages.`,
    quickReplies: [
      { label: "See location & directions", message: "Where is the studio located?" },
      { label: "Back to main menu", message: "__menu" },
    ],
  },
  {
    id: "location",
    keywords: ["location", "address", "where are you", "directions", "map", "studio located"],
    answer: `We're located at ${siteConfig.contact.address.line1}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.region} ${siteConfig.contact.address.postalCode}. Full directions and a map are on our Contact page.`,
    quickReplies: [
      { label: "Open contact page", message: "__nav:/contact" },
      { label: "Back to main menu", message: "__menu" },
    ],
  },
  {
    id: "private-vs-group",
    keywords: [
      "private",
      "one on one",
      "one-on-one",
      "1-on-1",
      "personal training",
      "group vs private",
      "difference between group and private",
    ],
    answer:
      "Group classes are more affordable and full of community energy. Private sessions are fully personalised — great for beginners, injuries, or specific goals. Many students do both! Read our full comparison on the blog, or check the Services page for details on each.",
    quickReplies: [
      { label: "Read the comparison", message: "__nav:/blog/group-vs-private-yoga-sessions" },
      { label: "See services", message: "__nav:/services" },
      { label: "Back to main menu", message: "__menu" },
    ],
  },
  {
    id: "online",
    keywords: ["online", "virtual", "zoom", "from home", "live stream", "remote"],
    answer:
      "Yes! We run fully live (not pre-recorded) online classes, so your instructor can see and cue you in real time. Available as group or private sessions — details are on our Online Yoga Classes page.",
    quickReplies: [
      { label: "See online classes", message: "__nav:/services/online-yoga-classes" },
      { label: "Back to main menu", message: "__menu" },
    ],
  },
  {
    id: "corporate",
    keywords: ["corporate", "company", "office", "workplace", "team wellness", "employees"],
    answer:
      "We design custom on-site or virtual yoga programs for teams of any size — from weekly desk-yoga breaks to full wellness days. Reach out via the contact form for a tailored quote.",
    quickReplies: [
      { label: "See corporate yoga", message: "__nav:/services/corporate-yoga" },
      { label: "Request a quote", message: "__nav:/contact" },
      { label: "Back to main menu", message: "__menu" },
    ],
  },
  {
    id: "human",
    keywords: ["human", "person", "talk to someone", "agent", "representative", "real person", "speak to"],
    answer:
      "Of course — tap below to chat with our team directly on WhatsApp, or use the contact form and we'll reply within one business day.",
    quickReplies: [
      { label: "Open WhatsApp", message: "__whatsapp:Hi! I'd like to speak with someone from the studio." },
      { label: "Go to contact form", message: "__nav:/contact" },
    ],
  },
];

const fallbackAnswer =
  "I don't have a specific answer for that yet, but our team can help directly! Chat with us on WhatsApp, or pick a topic below.";

export function getChatbotReply(rawMessage: string): { answer: string; quickReplies: QuickReply[] } {
  const message = rawMessage.toLowerCase();

  for (const topic of topics) {
    if (topic.keywords.some((keyword) => message.includes(keyword))) {
      return { answer: topic.answer, quickReplies: topic.quickReplies ?? mainMenuReplies };
    }
  }

  return { answer: fallbackAnswer, quickReplies: mainMenuReplies };
}
