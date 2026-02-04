import React from "react";
import { cn } from "../lib/cn";

export function Badge(props: React.HTMLAttributes<HTMLSpanElement> & { tone?: "accent" | "muted" }) {
  const { className, tone = "muted", ...rest } = props;
  const toneCls =
    tone === "accent"
      ? "bg-[rgba(var(--accent),0.12)] text-[rgb(var(--accent))] border-[rgba(var(--accent),0.25)]"
      : "bg-black/5 text-[rgb(var(--muted))] border-[rgb(var(--border))]";
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs", toneCls, className)} {...rest} />
  );
}
