export const SITE = {
  name: "InterProFinland",
  fullName: "International Professionals Finland ry",
  url: "https://interprofinland.fi",
  description:
    "InterProFinland helps international professionals in Finland overcome barriers, utilize their skills, and build meaningful careers through mentoring, degree recognition support, and community.",
  locale: "en_US",
};

export const COLORS = {
  primary: "#003580",
  secondary: "#2a77bd",
  yellow: "#f9b121",
  black: "#060709",
  green: "#0da84c",
  red: "#f02c30",
  white: "#ffffff",
  gray50: "#f8fafc",
  gray100: "#f1f5f9",
  gray400: "#94a3b8",
  gray600: "#475569",
};

// Monochrome blue tint scale used for decorative variation (avatars, accent
// icons, ambient blobs) — kept to a blue/white palette by design.
export const ACCENT_TINTS = [
  "#003580",
  "#2a77bd",
  "#5b9bd5",
  "#0a4d9e",
  "#8fbde8",
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Magazine", href: "/magazine" },
  { label: "Events", href: "/upcoming-events" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Magazine", href: "/magazine" },
  { label: "Upcoming Events", href: "/upcoming-events" },
  { label: "Testimonials", href: "/testimonials" },
] as const;

export const FOOTER_GET_INVOLVED_LINKS = [
  { label: "Membership", href: "/get-involved" },
  { label: "Mentoring", href: "/get-involved" },
  { label: "Volunteer", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;

export const EXTERNAL_LINKS = {
  membershipApplication:
    "https://form.jotform.com/InterProFinland/membership-application-form",
  mentorApplication:
    "https://form.jotform.com/InterProFinland/mentor-application-form",
  facebookPage: "https://www.facebook.com/interprofinland",
  facebookGroup: "https://www.facebook.com/groups/interprofinland",
  instagram: "https://www.instagram.com/interprofinland/",
  linkedin:
    "https://www.linkedin.com/company/international-professional-finland-ry-interpro-finland",
  whatsapp: "https://wa.me/358449367069",
};

export const CONTACT = {
  email: "info@interprofinland.fi",
  degreeEmail: "degree.amplify@interprofinland.fi",
  whatsappDisplay: "+358 44 9367069",
  address: "Otavankatu 5 A, 28100 Pori, Finland",
  hours: "Mon–Fri 9:00–15:00 (Sat–Sun closed)",
  visits: "By appointment only on Mondays and Wednesdays",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Otavankatu+5+A,+28100+Pori,+Finland&output=embed",
};
