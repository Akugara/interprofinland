import type { LucideIcon } from "lucide-react";
import { Languages, Globe, Briefcase } from "lucide-react";

export type UpcomingEvent = {
  slug: string;
  icon: LucideIcon;
  cadence: string;
  title: string;
  description: string;
  image?: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    slug: "kielikaverit",
    icon: Languages,
    cadence: "Weekly",
    title: "Kielikaverit — Finnish Language Club",
    description:
      "A relaxed, peer-support conversation club for practicing Finnish. New members are welcome to join any week — no pressure, no exams.",
  },
  {
    slug: "satakunta-fair",
    icon: Globe,
    cadence: "Annual",
    title: "Satakunta International People's Fair",
    description:
      "A gathering to meet international people living, working, or studying in Satakunta, recognize employers and organizations building an inclusive work life, and celebrate a more inclusive international atmosphere in the region.",
    image: "/images/events/satakunta-fair.jpg",
  },
  {
    slug: "career-connect",
    icon: Briefcase,
    cadence: "Periodic",
    title: "Career Connect Meet & Greet",
    description:
      "Informal meet & greet events connecting international professionals with employers, alongside labour market seminars and info webinars held throughout the year.",
  },
];
