"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
          {
            "bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-400 hover:shadow-lg hover:shadow-brand-500/25":
              variant === "primary",
            "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 focus:ring-white/30":
              variant === "secondary",
            "bg-transparent text-white hover:bg-white/5 focus:ring-white/20":
              variant === "ghost",
            "bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-400 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 animate-glow-pulse":
              variant === "glow",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
