import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
  divider?: "bottom" | "top" | "none";
};

export function Card({
  children,
  className,
  hover = true,
  divider = "bottom",
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "py-7",
        divider === "bottom" && "border-b border-ink/10",
        divider === "top" && "border-t border-ink/10",
        hover && "transition-colors duration-300 hover:border-ink/20",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
