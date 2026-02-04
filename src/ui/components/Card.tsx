import React from "react";
import { cn } from "../lib/cn";

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-soft",
        className
      )}
      {...rest}
    />
  );
}
