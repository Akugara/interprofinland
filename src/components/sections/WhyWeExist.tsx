import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/lib/data/values";

export function WhyWeExist() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <RevealOnScroll>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-secondary">
              Why We Exist
            </p>
            <h2 className="text-h2 md:text-h2-lg font-bold tracking-tight text-ink">
              Skilled professionals shouldn&apos;t be left on the sidelines
            </h2>
            <p className="mt-5 text-left text-body-lg text-gray-600">
              Every year, qualified international professionals move to
              Finland — bringing valuable skills, education, and experience.
              Yet many face unemployment or underemployment, stuck in roles
              far below their qualifications simply because the path to
              recognition and opportunity isn&apos;t clear.
            </p>
            <p className="mt-4 text-left text-body-lg text-gray-600">
              InterProFinland exists to close that gap: connecting talent
              with opportunity, and guidance with real, lived experience.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.1} className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-100 pt-12 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
