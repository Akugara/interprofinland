import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { upcomingEvents } from "@/lib/data/events";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Recurring events and gatherings from InterProFinland — Kielikaverit language club, the Satakunta International People's Fair, and Career Connect meet & greets.",
};

export default function UpcomingEventsPage() {
  return (
    <>
      <PageHero
        title="Upcoming Events"
        subtitle="Recurring gatherings and community events — join us at any of these."
      />

      <section className="section-y bg-white">
        <div className="container-page space-y-6">
          {upcomingEvents.map((event, i) => {
            const Icon = event.icon;
            return (
              <RevealOnScroll key={event.slug} delay={i * 0.06}>
                <Card hover={false} className="flex flex-col gap-5 md:flex-row md:items-start">
                  {event.image ? (
                    <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-card md:h-24 md:w-32">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
                      {event.cadence}
                    </p>
                    <h2 className="mt-1 text-h3-lg font-semibold text-ink">
                      {event.title}
                    </h2>
                    <p className="mt-2 text-body-lg text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <section className="section-y bg-gray-50">
        <div className="container-page text-center">
          <RevealOnScroll>
            <h2 className="text-h2 font-bold tracking-tight text-ink">
              Want exact dates?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-body-lg text-gray-600">
              Follow our Facebook community for the latest event announcements
              and sign-up links.
            </p>
            <div className="mt-8">
              <Button href={EXTERNAL_LINKS.facebookGroup} external size="lg">
                Join Our Facebook Community
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
