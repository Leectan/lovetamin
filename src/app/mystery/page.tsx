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
  const [branchCopy, setBranchCopy] = useState<string | null>(null);
  const [flowLocked, setFlowLocked] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLearnMore = () => {
    if (phase === "typewriter") setPhase("reveal");
    setTimeout(() => scrollToId("reveal-block"), 50);
  };

  const choosePath = (choice: "yes" | "no") => {
    setFlowLocked(true);
    if (choice === "no") {
      setBranchCopy(
        "We get it — everyone’s tired. That’s why Lovetamin exists. Drop your email and we’ll open the door."
      );
    } else {
      setBranchCopy(null);
    }

    setPhase("cta");
    setTimeout(() => scrollToId("email-cta"), 150);
  };

  useEffect(() => {
    if (flowLocked) return;
    if (completedLines >= LINES.length) {
      const timer = setTimeout(() => setPhase("reveal"), 1200);
      return () => clearTimeout(timer);
    }
  }, [completedLines, flowLocked]);

  useEffect(() => {
    if (flowLocked) return;
    if (phase === "reveal") {
      const timer = setTimeout(() => setPhase("cta"), 4000);
      return () => clearTimeout(timer);
    }
  }, [phase, flowLocked]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-midnight-950 via-[#120818] to-midnight-950">
      {/* Elegant gradient mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(900px circle at 20% 20%, rgba(232,69,112,0.16), transparent 55%)," +
            "radial-gradient(700px circle at 85% 30%, rgba(255,167,38,0.12), transparent 55%)," +
            "radial-gradient(800px circle at 55% 85%, rgba(255,107,138,0.10), transparent 60%)",
        }}
      />
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-warm-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </div>

      {/* Relationship-themed line art (subtle, mysterious) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
          width="1200"
          height="800"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M330 410c0-110 90-200 200-200 75 0 140 43 175 105 35-62 100-105 175-105 110 0 200 90 200 200 0 175-220 265-375 380-155-115-375-205-375-380z"
            stroke="white"
            strokeWidth="1"
          />
          <circle cx="520" cy="380" r="210" stroke="white" strokeWidth="1" opacity="0.6" />
          <circle cx="680" cy="380" r="210" stroke="white" strokeWidth="1" opacity="0.6" />
        </svg>

        <motion.div
          className="absolute top-24 right-16 w-40 h-40 rounded-full bg-brand-500/10 blur-2xl"
          animate={{ y: [0, 18, 0], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 left-16 w-44 h-44 rounded-full bg-warm-500/10 blur-2xl"
          animate={{ y: [0, -16, 0], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
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
        <Link href="/" className="text-white/85 hover:text-white transition-colors">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.14em] drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]">
            Lovetamin
          </span>
        </Link>
        <button
          type="button"
          onClick={handleLearnMore}
          className="text-white/60 hover:text-white text-sm flex items-center gap-1.5 transition-colors"
        >
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </nav>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 -mt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Typewriter + Yes/No interaction */}
          <AnimatePresence>
            {phase === "typewriter" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-6 mb-10 min-h-[200px] flex flex-col justify-center">
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

                {completedLines >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4"
                  >
                    <p className="text-white/50 text-sm mb-4">Answer in one tap.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <motion.button
                        type="button"
                        onClick={() => choosePath("yes")}
                        whileHover={{
                          y: -2,
                          boxShadow:
                            "0 0 0 1px rgba(232,69,112,0.28), 0 18px 45px rgba(232,69,112,0.12)",
                        }}
                        whileTap={{ scale: 0.98, y: 0 }}
                        transition={{ type: "spring", stiffness: 420, damping: 28 }}
                        className="relative px-5 py-3 rounded-xl text-white backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-950"
                      >
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-500/20 via-white/5 to-warm-500/15 opacity-100" />
                        <span className="absolute inset-[1px] rounded-[11px] bg-white/10 border border-white/10" />
                        <span className="relative font-medium tracking-wide">Yes</span>
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => choosePath("no")}
                        whileHover={{
                          y: -2,
                          boxShadow:
                            "0 0 0 1px rgba(255,167,38,0.20), 0 18px 45px rgba(255,167,38,0.10)",
                        }}
                        whileTap={{ scale: 0.98, y: 0 }}
                        transition={{ type: "spring", stiffness: 420, damping: 28 }}
                        className="relative px-5 py-3 rounded-xl text-white/90 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-950"
                      >
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 via-white/3 to-warm-500/10 opacity-100" />
                        <span className="absolute inset-[1px] rounded-[11px] bg-white/5 border border-white/10" />
                        <span className="relative font-medium tracking-wide">No</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  onClick={() => {
                    setFlowLocked(true);
                    setPhase("cta");
                    setTimeout(() => scrollToId("email-cta"), 150);
                  }}
                  className="text-white/20 hover:text-white/50 text-sm transition-colors mt-8"
                >
                  Skip animation
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reveal phase */}
          <AnimatePresence>
            {(phase === "reveal" || phase === "cta") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mb-12"
                id="reveal-block"
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
                id="email-cta"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-brand-400" />
                  <p className="text-brand-400 text-sm font-medium tracking-wider uppercase">
                    Join the movement
                  </p>
                  <Sparkles className="w-4 h-4 text-brand-400" />
                </div>

                {branchCopy && (
                  <p className="text-white/65 text-sm md:text-base mb-4">{branchCopy}</p>
                )}

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
        </div>
      </main>
    </div>
  );
}
