import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Handshake,
  Briefcase,
  Network,
  Languages,
  Users,
  Presentation,
  ClipboardCheck,
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
      "Build your career pathway, assess your skills, and grow your professional network in Finland.",
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
  cta: { label: string; href: string; external?: boolean };
};

export const programDetails: ProgramDetail[] = [
  {
    slug: "get-acquainted",
    icon: Presentation,
    eyebrow: "Info webinars & workshops",
    title: "Get Acquainted Info Webinars and Workshops",
    description: [
      "Become familiar with the Finnish labour market, working culture, job search process, and information specific to your own profession.",
      "It's important to understand how qualifications gained abroad can be put to good use in Finland, and how they compare to Finnish terminology and ranking systems.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    slug: "recognition-support",
    icon: ClipboardCheck,
    eyebrow: "Qualification recognition",
    title: "Recognition of Previous Qualifications Support",
    description: [
      "We offer step-by-step individual support through the recognition of previous qualifications process — from preparation to the final application, and beyond.",
      "We help participants find suitable educational institutions as they take concrete steps toward completing any complementary courses recommended by the recognition authority.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    slug: "degree-amplify",
    icon: GraduationCap,
    eyebrow: "Ongoing yearly project",
    title: "Degree AMPLIFY — Qualification Recognition",
    description: [
      "Degree AMPLIFY is an ongoing yearly project that helps international professionals in Finland better understand the process of recognizing their foreign diplomas.",
      "Specialists who have gone through the same process themselves guide new applicants through every stage, step by step, so no one has to navigate it alone.",
      "Degree AMPLIFY was recognized as a finalist in the European Network of Innovation for Inclusion's VII Call for Good Practices, in the socio-labour inclusion category.",
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
    eyebrow: "Mentorship & peer support",
    title: "One Mentor One — Mentorship Program",
    description: [
      "Our mentorship project gives participants the opportunity to benefit from the knowledge and experience of established professionals in their chosen field.",
      "Peer support club sessions are held both in person and online, each focused on a specific area, to provide an all-round support system for participants.",
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
      "We guide international talents in creating their own unique career pathways, or exploring alternative career paths in Finland.",
      "We help assess skills, identify strengths, and work through limitations to building a career here, and organize networking events as an opportunity to make new connections and build a professional network.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    slug: "kielikaverit",
    icon: Languages,
    eyebrow: "Finnish language club · Beginner & advanced",
    title: "Kielikaverit — Finnish Language Club",
    description: [
      "Our Finnish Language Club sessions offer a relaxed, friendly environment to connect with like-minded people — with vocabulary-building exercises, discussions about Finnish history, and team-building activities. Snacks and beverages are provided.",
      "Sessions run at our office at Otavankatu 5A, first floor, with both beginner and advanced levels available.",
    ],
    cta: { label: "Join the Language Club", href: "/get-involved" },
  },
  {
    slug: "connect-integrate",
    icon: Network,
    eyebrow: "Integration project",
    title: "Connect & Integrate Project",
    description: [
      "A peer support club run in cooperation with International House Pori, creating a supportive environment where members can learn, grow, and connect with one another as they integrate into Finnish society.",
      "Each session focuses on a specific area of integration. Sessions are held twice a month and sponsored by the City of Pori.",
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
