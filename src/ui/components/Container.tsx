import React from "react";
import { cn } from "../lib/cn";

export function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div className={cn("mx-auto w-full max-w-6xl px-4", className)} {...rest} />;
}
