export const primaryNav = [
  { label: "Yoga Styles", href: "/yoga-styles" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;

export const footerNav = {
  studio: [
    { label: "About Us", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  yoga: [
    { label: "All Yoga Styles", href: "/yoga-styles" },
    { label: "Hatha Yoga", href: "/yoga-styles/hatha-yoga" },
    { label: "Vinyasa Flow", href: "/yoga-styles/vinyasa-flow-yoga" },
    { label: "Yin Yoga", href: "/yoga-styles/yin-yoga" },
    { label: "Prenatal Yoga", href: "/yoga-styles/prenatal-yoga" },
  ],
  services: [
    { label: "Private Sessions", href: "/services/private-yoga-sessions" },
    { label: "Group Classes", href: "/services/group-classes" },
    { label: "Online Classes", href: "/services/online-yoga-classes" },
    { label: "Corporate Yoga", href: "/services/corporate-yoga" },
    { label: "Retreats & Workshops", href: "/services/retreats-and-workshops" },
  ],
};
