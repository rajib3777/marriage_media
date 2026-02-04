import React from "react";
import { cn } from "../lib/cn";

export function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }
) {
  const { className, label, error, ...rest } = props;
  return (
    <label className="block">
      {label ? <div className="mb-1 text-sm text-[rgb(var(--muted))]">{label}</div> : null}
      <input
        className={cn(
          "h-11 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-3 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]",
          className
        )}
        {...rest}
      />
      {error ? <div className="mt-1 text-xs text-red-500">{error}</div> : null}
    </label>
  );
}
