"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";
import { ACCENT_TINTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5000;

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isHovering) return;
    const interval = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [emblaApi, isHovering]);

  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <SectionHeading eyebrow="Testimonials" title="Real stories, real impact" />

        <div
          className="relative mt-14"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-6 flex">
              {testimonials.map((testimonial, i) => (
                <div
                  key={testimonial.name}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-6 sm:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    accentColor={ACCENT_TINTS[i % ACCENT_TINTS.length]}
                    className="min-h-[240px]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonials"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-ink transition-colors hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    selectedIndex === i ? "w-6 bg-primary" : "w-2.5 bg-gray-100"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonials"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-ink transition-colors hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="focus-ring text-sm font-semibold text-secondary hover:text-primary"
          >
            Read More Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
