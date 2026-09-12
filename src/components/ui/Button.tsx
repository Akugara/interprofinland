import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "outline-white" | "white" | "ghost";

type BaseProps = {
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-sm",
  secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-sm",
  outline:
    "border border-primary/25 text-primary bg-white hover:border-primary hover:bg-primary hover:text-white",
  "outline-white":
    "border border-white/40 text-white bg-transparent hover:border-white hover:bg-white/10",
  white: "bg-white text-primary hover:bg-white/90 shadow-sm",
  ghost: "bg-primary/[0.06] text-primary hover:bg-primary/10",
};

const sizeClasses = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] min-h-[44px]",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={props.onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
