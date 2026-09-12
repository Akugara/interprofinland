import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Card } from "@/components/ui/Card";
import { magazineIssues } from "@/lib/data/magazine";

export const metadata: Metadata = {
  title: "Magazine",
  description:
    "InterProFinland Magazine — inspiring, enlightening, and celebrating international people in Finland.",
};

export default function MagazinePage() {
  return (
    <>
      <PageHero
        title="InterProFinland Magazine"
        subtitle="Inspiring, Enlightening, and Celebrating International People in Finland"
      />

      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {magazineIssues.map((issue, i) => (
            <RevealOnScroll key={issue.issueNumber} delay={i * 0.06}>
              <Card className="flex h-full flex-col overflow-hidden" hover>
                <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-gray-100">
                  <Image
                    src={issue.cover}
                    alt={`${issue.title} — ${issue.issueNumber} cover`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-secondary">
                  {issue.issueNumber} · {issue.publishDate}
                </p>
                <h2 className="mt-1 text-h3 font-semibold text-ink">
                  {issue.title}
                </h2>
                <a
                  href={issue.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary"
                >
                  Read <ArrowUpRight className="h-4 w-4" />
                </a>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
