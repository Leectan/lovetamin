"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  variant?: "default" | "dark";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, variant = "default", ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            "w-full rounded-full px-6 py-3.5 text-base transition-all duration-300 focus:outline-none focus:ring-2",
            {
              "bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-brand-400 focus:border-transparent":
                variant === "default",
              "bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:ring-brand-500/50 focus:border-transparent focus:bg-white/10":
                variant === "dark",
            },
            error && "border-red-400 focus:ring-red-400",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 ml-4 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
