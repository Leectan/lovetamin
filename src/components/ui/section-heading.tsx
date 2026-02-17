"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" ? "text-center" : "text-left")}>
      {badge && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "text-sm font-medium tracking-wider uppercase mb-3",
            dark ? "text-brand-400" : "text-brand-500"
          )}
        >
          {badge}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight",
          dark ? "text-white" : "text-gray-900",
          align === "center" && "max-w-3xl mx-auto"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-lg md:text-xl mt-4 leading-relaxed",
            dark ? "text-white/60" : "text-gray-500",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
