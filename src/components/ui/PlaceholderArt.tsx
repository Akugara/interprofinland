import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PlaceholderArtProps = {
  icon: LucideIcon;
  className?: string;
  variant?: "blue" | "light";
};

export function PlaceholderArt({
  icon: Icon,
  className,
  variant = "blue",
}: PlaceholderArtProps) {
  return (
    <div
      className={cn(
        "relative isolate flex aspect-[4/3] items-center justify-center overflow-hidden rounded-card",
        variant === "blue"
          ? "bg-gradient-to-br from-primary to-secondary"
          : "bg-gradient-to-br from-gray-100 to-gray-50",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <Icon
        className={cn(
          "h-20 w-20",
          variant === "blue" ? "text-white/90" : "text-primary/70"
        )}
        strokeWidth={1.5}
      />
    </div>
  );
}
