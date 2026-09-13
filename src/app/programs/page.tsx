import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Button } from "@/components/ui/Button";
import { programDetails } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Programs & Services",
  description:
    "Explore InterProFinland's programs: Degree AMPLIFY qualification recognition, One Mentor One mentorship, career guidance, Kielikaverit language club, and community projects.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Our Programs & Services" />

      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programDetails.map((program, i) => {
            const { icon: Icon, ...programWithoutIcon } = program;
            return (
              <RevealOnScroll key={program.slug} delay={i * 0.05}>
                <ProgramCard
                  program={programWithoutIcon}
                  icon={<Icon className="h-6 w-6" strokeWidth={1.75} />}
                />
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* Handbook CTA */}
      <section className="relative overflow-hidden border-t border-gray-100 bg-gray-50 py-16 md:py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/[0.06] blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <RevealOnScroll className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BookOpen className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <h2 className="text-h2 font-bold tracking-tight text-ink">
              The Qualifications Recognition in Finland Handbook
            </h2>
            <p className="text-body-lg text-gray-600">
              A key member benefit — our practical, step-by-step handbook for
              getting your qualifications recognized in Finland. Apply for
              membership to receive your copy.
            </p>
            <Button href="/get-involved" size="lg">
              Apply for Membership
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
