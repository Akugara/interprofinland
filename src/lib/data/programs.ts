import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Handshake,
  Briefcase,
  Network,
  Languages,
  Users,
  Presentation,
} from "lucide-react";

export type ProgramOverview = {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
};

export const programsOverview: ProgramOverview[] = [
  {
    slug: "get-acquainted",
    icon: Presentation,
    title: "Get Acquainted Info Webinars",
    summary:
      "Webinars and workshops on the Finnish labour market, work culture, and job search.",
  },
  {
    slug: "degree-recognition",
    icon: GraduationCap,
    title: "Degree Recognition Support",
    summary:
      "Step-by-step guidance to get your qualifications recognized in Finland.",
  },
  {
    slug: "mentorship",
    icon: Handshake,
    title: "Mentorship Program",
    summary:
      "One-on-one mentoring from professionals who've walked the same path.",
  },
  {
    slug: "career-guidance",
    icon: Briefcase,
    title: "Career Guidance",
    summary:
      "CV clinics, coaching, and job market insights tailored to Finland.",
  },
  {
    slug: "networking",
    icon: Network,
    title: "Networking Opportunities",
    summary:
      "Connect with employers, peers, and organizations in our community.",
  },
  {
    slug: "language-support",
    icon: Languages,
    title: "Language Support",
    summary: "Kielikaverit Finnish Language Club and integration resources.",
  },
  {
    slug: "community",
    icon: Users,
    title: "Community & Peer Support",
    summary: "A 1,000+ member community of international professionals.",
  },
];

export type ProgramDetail = {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string[];
  image?: string;
  cta: { label: string; href: string; external?: boolean };
};

export const programDetails: ProgramDetail[] = [
  {
    slug: "get-acquainted",
    icon: Presentation,
    eyebrow: "Info webinars & workshops",
    title: "Get Acquainted Info Webinars and Workshops",
    description: [
      "A series of info webinars and workshops focused on the Finnish labour market, working culture, job search strategies, and profession-specific information.",
      "A practical starting point for newcomers who want to understand how things work in Finland before diving into a job search.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    slug: "degree-amplify",
    icon: GraduationCap,
    eyebrow: "Ongoing yearly project",
    title: "Degree AMPLIFY — Qualification Recognition",
    image: "/images/programs/degree-amplify-finalist.png",
    description: [
      "Degree AMPLIFY is our flagship, ongoing yearly project providing step-by-step guidance through Finland's qualification recognition process.",
      "Participants receive one-on-one mentoring from professionals with similar experiences, and gain access to the Qualifications Recognition Handbook — a practical guide built from real cases.",
      "Degree AMPLIFY was named a finalist in the European Network for Innovation for Inclusion's VII Call for Good Practices.",
    ],
    cta: {
      label: "Apply to Degree AMPLIFY",
      href: "https://form.jotform.com/InterProFinland/degree-amplify-application",
      external: true,
    },
  },
  {
    slug: "one-mentor-one",
    icon: Handshake,
    eyebrow: "Mentorship program",
    title: "One Mentor One — Mentorship Program",
    description: [
      "One Mentor One is a structured mentoring initiative pairing international professionals with experienced mentors.",
      "Mentors share experiences, widen perspectives, and offer practical career and personal development tips throughout the journey.",
    ],
    cta: {
      label: "Become a Mentor or Find a Mentor",
      href: "/get-involved",
    },
  },
  {
    slug: "career-guidance-networking",
    icon: Briefcase,
    eyebrow: "Career development",
    title: "Career Guidance & Networking",
    description: [
      "We run CV clinics, personal coaching sessions, and Career Connect meet & greet events throughout the year.",
      "Labour market seminars, info webinars, and workshops help members understand the Finnish job market and build the right connections.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    slug: "kielikaverit",
    icon: Languages,
    eyebrow: "Finnish language club",
    title: "Kielikaverit — Finnish Language Club",
    description: [
      "Kielikaverit is a peer support language club for practicing Finnish in a relaxed, community-driven setting.",
      "No pressure, no exams — just real conversation practice alongside other learners and native speakers.",
    ],
    cta: { label: "Join the Language Club", href: "/get-involved" },
  },
  {
    slug: "connect-integrate",
    icon: Network,
    eyebrow: "Integration project",
    title: "Connect & Integrate Project",
    description: [
      "Peer support clubs designed to facilitate integration into Finnish society and professional life.",
      "Members build local networks, practice cultural know-how, and find their footing faster with peer support.",
    ],
    cta: { label: "Get Involved", href: "/get-involved" },
  },
  {
    slug: "stronger-communities",
    icon: Users,
    eyebrow: "Current project · 1.10.2024 – 28.2.2026",
    title: "Stronger Communities Project",
    description: [
      "Our current project focused on building stronger, more inclusive communities across the Kankaanpää, Jämijärvi, Merikarvia, Karvia, Pomarkku, and Siikainen municipalities.",
      "Through community-building events, networking sessions, career information, CV workshops, entrepreneurship training, mentoring, and social integration activities, the project has organized 19 events and workshops so far — leading to increased participant engagement, stronger local networks, and positive feedback.",
    ],
    cta: { label: "Learn More", href: "/contact" },
  },
];
