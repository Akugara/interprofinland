import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Card } from "@/components/ui/Card";
import { programsOverview } from "@/lib/data/programs";

export function ProgramsOverview() {
  return (
    <section className="section-y bg-gray-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Programs built around your journey"
          description="From degree recognition to community, every program meets you where you are."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programsOverview.map((program, i) => {
            const Icon = program.icon;
            return (
              <RevealOnScroll key={program.slug} delay={i * 0.06}>
                <Card className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-btn bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-h3 font-semibold text-ink">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-body text-gray-600">
                    {program.summary}
                  </p>
                  <Link
                    href="/programs"
                    className="focus-ring mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
