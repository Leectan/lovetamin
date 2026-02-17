"use client";

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "glass-dark" | "solid";
}

function Card({ className, variant = "glass", children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        {
          "bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl":
            variant === "glass",
          "bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20":
            variant === "glass-dark",
          "bg-white shadow-lg hover:shadow-xl":
            variant === "solid",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
