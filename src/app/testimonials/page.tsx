import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/lib/data/testimonials";
import { ACCENT_TINTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Read testimonials from international professionals who found guidance, mentorship, and community through InterProFinland.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero title="Success Stories" subtitle="Real journeys from members of our community." />

      <section className="section-y bg-white">
        <div className="container-page mx-auto max-w-2xl space-y-6">
          {testimonials.map((testimonial, i) => (
            <RevealOnScroll key={testimonial.name} delay={(i % 4) * 0.06}>
              <TestimonialCard
                testimonial={testimonial}
                accentColor={ACCENT_TINTS[i % ACCENT_TINTS.length]}
                expandMode="inline"
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="section-y bg-gray-50">
        <div className="container-page text-center">
          <RevealOnScroll>
            <h2 className="text-h2 font-bold tracking-tight text-ink">
              Your story could be next
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-body-lg text-gray-600">
              Join a community of professionals who&apos;ve found their path
              in Finland.
            </p>
            <div className="mt-8">
              <Button href="/get-involved" size="lg">
                Get Involved
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
