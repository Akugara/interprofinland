import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { Button } from "@/components/ui/Button";
import { programDetails } from "@/lib/data/programs";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Programs & Services",
  description:
    "Explore InterProFinland's programs: Degree AMPLIFY qualification recognition, One Mentor One mentorship, career guidance, Kielikaverit language club, and community projects.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Our Programs & Services" />

      {programDetails.map((program, i) => {
        const Icon = program.icon;
        const reversed = i % 2 === 1;
        return (
          <section
            key={program.slug}
            className={cn("section-y", i % 2 === 0 ? "bg-white" : "bg-gray-50")}
          >
            <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <RevealOnScroll className={reversed ? "lg:order-2" : undefined}>
                {program.image ? (
                  <div className="relative aspect-video overflow-hidden rounded-card bg-white">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <PlaceholderArt icon={Icon} />
                )}
              </RevealOnScroll>
              <RevealOnScroll delay={0.1} className={reversed ? "lg:order-1" : undefined}>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-secondary">
                  {program.eyebrow}
                </p>
                <h2 className="text-h2 font-bold tracking-tight text-ink">{program.title}</h2>
                {program.description.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-body-lg text-gray-600">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8">
                  <Button href={program.cta.href} external={program.cta.external}>
                    {program.cta.label}
                  </Button>
                </div>
              </RevealOnScroll>
            </div>
          </section>
        );
      })}

      {/* Handbook CTA */}
      <section className="section-y bg-gradient-to-br from-primary to-secondary">
        <div className="container-page">
          <RevealOnScroll className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white">
              <BookOpen className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <h2 className="text-h2 font-bold tracking-tight text-white">
              The Qualifications Recognition in Finland Handbook
            </h2>
            <p className="text-body-lg text-white/85">
              A key member benefit — our practical, step-by-step handbook for
              getting your qualifications recognized in Finland. Apply for
              membership to receive your copy.
            </p>
            <Button href="/get-involved" variant="white" size="lg">
              Apply for Membership
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
