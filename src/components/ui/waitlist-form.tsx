"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, CheckCircle, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  variant?: "dark" | "light";
  source?: string;
}

export function WaitlistForm({ variant = "dark", source = "unknown" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "exists">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [position, setPosition] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      if (data.alreadyExists) {
        setStatus("exists");
      } else {
        setStatus("success");
        setPosition(data.position);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Connection failed. Please try again.");
    }
  };

  if (status === "success" || status === "exists") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-500/20 mb-4"
        >
          {status === "success" ? (
            <CheckCircle className="w-8 h-8 text-brand-400" />
          ) : (
            <Heart className="w-8 h-8 text-brand-400" />
          )}
        </motion.div>
        <h3 className={`text-xl font-semibold mb-2 ${variant === "dark" ? "text-white" : "text-gray-900"}`}>
          {status === "success" ? "You're in!" : "Already on the list!"}
        </h3>
        <p className={variant === "dark" ? "text-white/60" : "text-gray-500"}>
          {status === "success"
            ? `You're #${position} on the waitlist. We'll reach out soon.`
            : "We already have your email. Stay tuned!"}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          variant={variant === "dark" ? "dark" : "default"}
          error={status === "error" ? errorMsg : undefined}
          required
        />
        <Button
          type="submit"
          variant={variant === "dark" ? "glow" : "primary"}
          size="md"
          disabled={status === "loading"}
          className="whitespace-nowrap sm:w-auto w-full"
        >
          <AnimatePresence mode="wait">
            {status === "loading" ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="w-4 h-4 animate-spin" />
              </motion.span>
            ) : (
              <motion.span
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Reserve Your Spot
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </form>
  );
}
