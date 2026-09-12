"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/data/testimonials";

function StoryBody({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="space-y-5">
      {testimonial.fullStory.map((part, i) => (
        <div key={i}>
          {part.question && (
            <p className="mb-1.5 text-sm font-semibold text-secondary">
              {part.question}
            </p>
          )}
          <p className="text-body-lg text-gray-600">{part.answer}</p>
        </div>
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
          onClick={() => setOpen((v) => !v)}
          aria-expanded={expandMode === "inline" ? open : undefined}
          className="focus-ring inline-flex items-center gap-1.5 self-start text-sm font-semibold text-secondary hover:text-primary"
        >
          {expandMode === "inline" && open ? "Show less" : "Read full story"}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              expandMode === "inline" && open && "rotate-180"
            )}
          />
        </button>

        {expandMode === "inline" && (
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
                <div className="border-t border-gray-100 pt-5">
                  <StoryBody testimonial={testimonial} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </Card>

      {expandMode === "modal" && (
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
      )}
    </>
  );
}
