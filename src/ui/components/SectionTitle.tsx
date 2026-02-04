import React from "react";
import { cn } from "../lib/cn";

export function SectionTitle({
  title,
  subtitle,
  className
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-6", className)}>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm text-[rgb(var(--muted))]">{subtitle}</p> : null}
    </div>
  );
}
