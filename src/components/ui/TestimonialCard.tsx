"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/data/testimonials";

function StoryPart({ part }: { part: { question?: string; answer: string } }) {
  return (
    <div>
      {part.question && (
        <p className="mb-1.5 text-sm font-semibold text-secondary">
          {part.question}
        </p>
      )}
      <p className="text-body-lg text-gray-600">{part.answer}</p>
    </div>
  );
}

function StoryBody({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="space-y-5">
      {testimonial.fullStory.map((part, i) => (
        <StoryPart key={i} part={part} />
      ))}
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  accentColor,
  className,
  expandMode = "modal",
}: {
  testimonial: Testimonial;
  accentColor: string;
  className?: string;
  expandMode?: "modal" | "inline";
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  if (expandMode === "inline") {
    const [first, ...rest] = testimonial.fullStory;
    return (
      <Card className={cn("flex h-full flex-col gap-5", className)}>
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white">
            <Image
              src={testimonial.photo}
              alt={testimonial.name}
              fill
              sizes="80px"
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-ink">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.background}</p>
          </div>
          <Quote
            aria-hidden="true"
            className="ml-auto h-7 w-7 shrink-0"
            style={{ color: accentColor }}
            strokeWidth={2.5}
          />
        </div>

        <div
          className="border-l-2 pl-4"
          style={{ borderColor: accentColor }}
        >
          <StoryPart part={first} />
        </div>

        {rest.length > 0 && (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="focus-ring inline-flex items-center gap-1.5 self-start text-sm font-semibold text-secondary hover:text-primary"
            >
              {open ? "Show less" : "Read more"}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="story"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-5 border-t border-gray-100 pt-5">
                    {rest.map((part, i) => (
                      <StoryPart key={i} part={part} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Card>
    );
  }

  return (
    <>
      <Card className={cn("flex h-full flex-col gap-4", className)}>
        <Quote
          aria-hidden="true"
          className="h-8 w-8"
          style={{ color: accentColor }}
          strokeWidth={2.5}
        />
        <p className="flex-1 text-body-lg italic text-ink">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-2">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white">
            <Image
              src={testimonial.photo}
              alt={testimonial.name}
              fill
              sizes="44px"
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
          <div>
            <p className="font-semibold text-ink">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.background}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="focus-ring inline-flex items-center gap-1.5 self-start text-sm font-semibold text-secondary hover:text-primary"
        >
          Read full story <ChevronDown className="h-4 w-4" />
        </button>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy={titleId}>
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white">
            <Image
              src={testimonial.photo}
              alt={testimonial.name}
              fill
              sizes="56px"
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
          <div>
            <h2 id={titleId} className="text-h3 font-semibold text-ink">
              {testimonial.name}
            </h2>
            <p className="text-sm text-gray-600">{testimonial.background}</p>
          </div>
        </div>
        <div className="mt-6">
          <StoryBody testimonial={testimonial} />
        </div>
      </Modal>
    </>
  );
}
