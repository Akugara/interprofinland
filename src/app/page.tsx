import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyWeExist } from "@/components/sections/WhyWeExist";
import { ProgramsOverview } from "@/components/sections/ProgramsOverview";
import { MembershipCTA } from "@/components/sections/MembershipCTA";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";

export const metadata: Metadata = {
  title: "Empowering International Professionals in Finland",
  description:
    "InterProFinland provides tailored guidance, mentorship, and a support network to help international professionals in Finland overcome barriers and build meaningful careers.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyWeExist />
      <ProgramsOverview />
      <MembershipCTA />
      <TestimonialsCarousel />
      <PartnersMarquee />
      <NewsletterCTA />
    </>
  );
}
