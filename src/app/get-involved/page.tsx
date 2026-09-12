import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pathways } from "@/lib/data/get-involved";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Become a member, mentor, volunteer, or partner with InterProFinland — or join our 1,000+ member community.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved"
        subtitle="There are many ways to be part of the InterProFinland community."
      />

      <section className="section-y bg-white">
        <div className="container-page space-y-8">
          {pathways.map((pathway, i) => {
            const Icon = pathway.icon;
            return (
              <RevealOnScroll key={pathway.title} delay={i * 0.05}>
                <Card
                  hover={false}
                  className="flex flex-col gap-6 md:flex-row md:items-center"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-h3-lg font-semibold text-ink">
                      {pathway.title}
                    </h2>
                    <p className="mt-2 text-body-lg text-gray-600">
                      {pathway.description}
                    </p>
                    {pathway.benefits && (
                      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {pathway.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <Check
                              className="h-4 w-4 shrink-0 text-secondary"
                              aria-hidden="true"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="shrink-0">
                    <Button
                      href={pathway.cta.href}
                      external={pathway.cta.external}
                    >
                      {pathway.cta.label}
                    </Button>
                  </div>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>
    </>
  );
}
