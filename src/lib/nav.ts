import { services } from "@/data/services";

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About the Studio", href: "/about" },
      { label: "Our Instructors", href: "/about#instructors" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      ...services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
      { label: "Yoga Styles", href: "/yoga-styles" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  { label: "Workshop", href: "/workshop" },
  { label: "We Help With", href: "/we-help" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = {
  links: [
    { label: "About Us", href: "/about" },
    { label: "Our Gallery", href: "/#gallery" },
    { label: "Yoga Styles", href: "/yoga-styles" },
    { label: "Workshop", href: "/workshop" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    ...services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  ],
};
