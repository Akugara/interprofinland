"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import type { ProgramDetail } from "@/lib/data/programs";

export function ProgramCard({
  program,
  icon,
}: {
  program: Omit<ProgramDetail, "icon">;
  icon: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  return (
    <>
      <Card className="flex h-full flex-col text-left">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-secondary">
          {program.eyebrow}
        </p>
        <h2 className="mt-2 text-h3 font-semibold text-ink">{program.title}</h2>
        <p className="mt-2 flex-1 text-body text-gray-600">
          {program.description[0]}
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="focus-ring mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-secondary hover:text-primary"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </button>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy={titleId}>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-secondary">
          {program.eyebrow}
        </p>
        <h2 id={titleId} className="mt-2 text-h3-lg font-semibold text-ink">
          {program.title}
        </h2>
        <div className="mt-4 space-y-4">
          {program.description.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-6">
          <Button href={program.cta.href} external={program.cta.external}>
            {program.cta.label}
          </Button>
        </div>
      </Modal>
    </>
  );
}
