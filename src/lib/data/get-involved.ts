import type { LucideIcon } from "lucide-react";
import { UserCheck, Handshake, HeartHandshake, Building2, Users } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/constants";

export type GetInvolvedPathway = {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits?: string[];
  cta: { label: string; href: string; external?: boolean };
};

export const pathways: GetInvolvedPathway[] = [
  {
    icon: UserCheck,
    title: "Become a Member",
    description:
      "Open to individuals, organizations, and companies aligned with our mission of an inclusive Finnish workforce.",
    benefits: [
      "Qualifications Recognition Handbook",
      "A personal mentor",
      "Members-only webinars & workshops",
      "Language lessons",
      "Labour market insights",
    ],
    cta: {
      label: "Apply for Membership",
      href: EXTERNAL_LINKS.membershipApplication,
      external: true,
    },
  },
  {
    icon: Handshake,
    title: "Become a Mentor",
    description:
      "Share your experience to help mentees build skills, grow professionally, and meet their career goals.",
    cta: {
      label: "Apply as a Mentor",
      href: EXTERNAL_LINKS.mentorApplication,
      external: true,
    },
  },
  {
    icon: HeartHandshake,
    title: "Volunteer With Us",
    description:
      "We're open to new ideas and fresh perspectives. Join as a volunteer and help shape the lives of international talents.",
    cta: { label: "Contact Us to Volunteer", href: "/contact" },
  },
  {
    icon: Building2,
    title: "Partner With Us",
    description:
      "Organizations and companies can collaborate with InterProFinland on mutual initiatives that support international talent.",
    cta: { label: "Discuss Partnership", href: "/contact" },
  },
  {
    icon: Users,
    title: "Join the Community",
    description:
      "Join the 1,000+ member Facebook group for international professionals across Finland.",
    cta: {
      label: "Join Facebook Group",
      href: EXTERNAL_LINKS.facebookGroup,
      external: true,
    },
  },
];
