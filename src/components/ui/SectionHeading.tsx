import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-medium uppercase tracking-widest",
            light ? "text-white/70" : "text-secondary"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-h2 md:text-h2-lg font-bold tracking-tight",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-body-lg",
            light ? "text-white/80" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
