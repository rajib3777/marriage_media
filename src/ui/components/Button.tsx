import React from "react";
import { cn } from "../lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
    isLoading?: boolean;
  }
) {
  const { className, variant = "primary", size = "md", isLoading, disabled, children, ...rest } = props;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 font-medium transition focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring))] focus:ring-offset-2 focus:ring-offset-[rgb(var(--bg))] disabled:opacity-60 disabled:pointer-events-none";
  const sizes = {
    sm: "h-9 text-sm",
    md: "h-11 text-sm",
    lg: "h-12 text-base"
  }[size];

  const variants = {
    primary: "bg-[rgb(var(--accent))] text-white hover:opacity-95 shadow-soft",
    secondary: "bg-[rgb(var(--card))] text-[rgb(var(--fg))] border border-[rgb(var(--border))] hover:bg-black/5",
    ghost: "bg-transparent text-[rgb(var(--fg))] hover:bg-black/5",
    outline: "bg-transparent text-[rgb(var(--fg))] border border-[rgb(var(--border))] hover:bg-black/5"
  }[variant];

  return (
    <button
      className={cn(base, sizes, variants, className)}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
          Loading
        </span>
      ) : (
        children
      )}
    </button>
  );
}
