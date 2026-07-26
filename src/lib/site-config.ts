/**
 * Central place for brand, contact, and third-party IDs.
 * Swap the placeholder values below (or set the matching env vars) before launch.
 */

const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+15550101234";
const whatsappDigits = rawWhatsApp.replace(/[^\d]/g, "");

export const siteConfig = {
  name: "Shanti Yoga Studio",
  shortName: "Shanti Yoga",
  tagline: "Breathe. Move. Belong.",
  description:
    "Shanti Yoga Studio offers Hatha, Vinyasa, Ashtanga, Yin, prenatal, and 10+ more yoga styles through private sessions, group classes, and online programs — with flexible daily, weekly, and monthly packages.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shantiyogastudio.com",
  locale: "en_US",
  currency: "USD",
  currencySymbol: "$",

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@shantiyogastudio.com",
    phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+1 (555) 010-1234",
    phoneHref: `tel:${process.env.NEXT_PUBLIC_PHONE_HREF ?? "+15550101234"}`,
    whatsappNumber: rawWhatsApp,
    whatsappHref: (message?: string) =>
      `https://wa.me/${whatsappDigits}${message ? `?text=${encodeURIComponent(message)}` : ""}`,
    address: {
      line1: "221 Willow Creek Lane",
      line2: "Suite 4",
      city: "Portland",
      region: "OR",
      postalCode: "97201",
      country: "USA",
      mapsHref: "https://maps.google.com/?q=Shanti+Yoga+Studio",
    },
    hours: [
      { days: "Monday – Friday", time: "6:00 AM – 8:30 PM" },
      { days: "Saturday", time: "7:00 AM – 5:00 PM" },
      { days: "Sunday", time: "8:00 AM – 2:00 PM" },
    ],
  },

  social: {
    instagram: "https://instagram.com/shantiyogastudio",
    facebook: "https://facebook.com/shantiyogastudio",
    youtube: "https://youtube.com/@shantiyogastudio",
  },

  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
  },
};

export type SiteConfig = typeof siteConfig;
