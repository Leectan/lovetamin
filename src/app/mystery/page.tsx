"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const LINES = [
  { text: "Are you tired of swiping left and right?", delay: 0 },
  { text: "Of conversations that go nowhere?", delay: 2.5 },
  { text: "Of an algorithm that treats love like a game?", delay: 5 },
];

const REVEAL_LINES = [
  "What if there was an app designed for real human connection?",
  "What if you and someone you like could achieve a goal together?",
  "Instead of just swiping... actually building something meaningful.",
];

function TypewriterText({
  text,
  delay,
  onComplete,
}: {
  text: string;
  delay: number;
  onComplete?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 40);
      return () => clearTimeout(timer);
    } else {
      onComplete?.();
    }
  }, [started, displayed, text, onComplete]);

  if (!started) return null;

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-brand-400 ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
}

export default function MysteryPage() {
  const [phase, setPhase] = useState<"typewriter" | "reveal" | "cta">("typewriter");
  const [completedLines, setCompletedLines] = useState(0);

  useEffect(() => {
    if (completedLines >= LINES.length) {
      const timer = setTimeout(() => setPhase("reveal"), 1200);
      return () => clearTimeout(timer);
    }
  }, [completedLines]);

  useEffect(() => {
    if (phase === "reveal") {
      const timer = setTimeout(() => setPhase("cta"), 4000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <div className="min-h-screen bg-midnight-950 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-warm-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </div>

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:px-12">
        <Link href="/" className="text-white/80 hover:text-white transition-colors">
          <span className="font-serif text-xl tracking-wide">Lovetamin</span>
        </Link>
        <Link
          href="/"
          className="text-white/50 hover:text-white text-sm flex items-center gap-1.5 transition-colors"
        >
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </nav>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 -mt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Typewriter phase */}
          <div className="space-y-6 mb-16 min-h-[200px] flex flex-col justify-center">
            {LINES.map((line, i) => (
              <motion.p
                key={i}
                className="text-2xl md:text-4xl lg:text-5xl font-serif text-white/90 leading-tight"
              >
                <TypewriterText
                  text={line.text}
                  delay={line.delay}
                  onComplete={() => setCompletedLines((prev) => prev + 1)}
                />
              </motion.p>
            ))}
          </div>

          {/* Reveal phase */}
          <AnimatePresence>
            {(phase === "reveal" || phase === "cta") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mb-12"
              >
                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-24 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent mx-auto mb-10"
                />

                <div className="space-y-4">
                  {REVEAL_LINES.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.6, duration: 0.8 }}
                      className="text-lg md:text-xl text-white/60 leading-relaxed"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA phase */}
          <AnimatePresence>
            {phase === "cta" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-brand-400" />
                  <p className="text-brand-400 text-sm font-medium tracking-wider uppercase">
                    Join the movement
                  </p>
                  <Sparkles className="w-4 h-4 text-brand-400" />
                </div>

                <h2 className="text-xl md:text-2xl text-white font-semibold mb-6">
                  Be the first to experience dating,{" "}
                  <span className="text-gradient">reimagined</span>.
                </h2>

                <WaitlistForm variant="dark" source="mystery" />

                <p className="text-white/30 text-xs mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip link for impatient users */}
          {phase === "typewriter" && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              onClick={() => setPhase("cta")}
              className="text-white/20 hover:text-white/50 text-sm transition-colors mt-8"
            >
              Skip animation
            </motion.button>
          )}
        </div>
      </main>
    </div>
  );
}
