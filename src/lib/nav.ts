import { services } from "@/data/services";
import { yogaStyles } from "@/data/yoga-styles";

export type NavChild = { label: string; href: string; hint?: string };
export type NavItem = { label: string; href: string; children?: NavChild[]; columns?: 1 | 2 };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About the Studio", href: "/about" },
      { label: "Our Instructors", href: "/about#instructors" },
      { label: "We Help With", href: "/we-help" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    label: "Yoga Styles",
    href: "/yoga-styles",
    columns: 2,
    children: yogaStyles.map((s) => ({ label: s.name, href: `/yoga-styles/${s.slug}` })),
  },
  { label: "Workshop", href: "/workshop" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact Us", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
];

export const footerNav = {
  menu: [
    { label: "About Us", href: "/about" },
    { label: "Our Instructors", href: "/about#instructors" },
    { label: "Workshop", href: "/workshop" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  styles: yogaStyles.slice(0, 8).map((s) => ({ label: s.name, href: `/yoga-styles/${s.slug}` })),
};
