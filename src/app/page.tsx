"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Target,
  MessageCircleHeart,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { cn } from "@/lib/utils";

// --------------- Navbar ---------------
function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/rwlogo.png"
            width={160}
            height={40}
            alt="Lovetamin"
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#philosophy"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="#difference"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            Why Us
          </a>
          <Link href="/mystery">
            <Button variant="primary" size="sm">
              Get Early Access
            </Button>
          </Link>
        </div>

        <Link href="/mystery" className="md:hidden">
          <Button variant="primary" size="sm">
            Join Waitlist
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
}

// --------------- Hero ---------------
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-white to-white" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-warm-100/30 rounded-full blur-[100px]" />

      <motion.div style={{ opacity, y }} className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-8"
          >
            <Heart className="w-4 h-4 text-brand-500" fill="currentColor" />
            <span className="text-brand-600 text-sm font-medium">
              A calling to what makes us human
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6"
          >
            Nurture the Bonds That{" "}
            <span className="text-gradient-light">Make Us Human</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            As technology transforms how we live, authentic connection remains our greatest joy. Lovetamin is your dedicated space to consciously nurture the people who matter most—your partner, your family, and your closest friends. Because real love is a deeply human journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/mystery">
              <Button variant="primary" size="lg">
                Start Nurturing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="#philosophy">
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                Discover Our Philosophy
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 md:mt-24 flex justify-center gap-4 md:gap-6 px-4"
        >
          {["/images/r2.jpg", "/images/r1.jpg", "/images/r3.jpg"].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.15, duration: 0.8 }}
              className={cn(
                "relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-200/30",
                i === 1
                  ? "w-[200px] md:w-[280px] h-[260px] md:h-[360px] -mt-4"
                  : "w-[150px] md:w-[220px] h-[200px] md:h-[300px] mt-4"
              )}
            >
              <Image
                src={src}
                alt="Lovetamin lifestyle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 200px, 280px"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// --------------- Philosophy Section ---------------
function PhilosophySection() {
  const comparisons = [
    {
      old: "Disposable Connections",
      oldDesc: "The endless cycle of surface-level interactions and fleeting moments.",
      new: "Lifelong Companionship",
      newDesc: "Deep, meaningful interactions that build resilient, real-world bonds.",
      icon: RefreshCw,
    },
    {
      old: "Digital Distraction",
      oldDesc: "Endless scrolling that keeps you disconnected from the present.",
      new: "Authentic Vulnerability",
      newDesc: "Honest, unfiltered conversations that reveal the depths of who you really are.",
      icon: Heart,
    },
    {
      old: "Passive Engagement",
      oldDesc: "Letting algorithms decide how and when you connect with others.",
      new: "Real-World Presence",
      newDesc: "Technology designed to get you off the screen and into each other's lives.",
      icon: Target,
    },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Our Manifesto"
          title="Technology Evolves. The Human Heart Remains."
          subtitle="We are living in an era of incredible digital advancement. Lovetamin is your quiet room—a mindful space built to cultivate deep, intentional relationships that ground you in the real world and celebrate our shared humanity."
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Card variant="solid" className="h-full p-8 group hover:border-brand-100 border border-transparent">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Old way */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <span className="text-sm font-medium text-gray-400 line-through">
                      {item.old}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.oldDesc}</p>
                </div>

                {/* New way */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-brand-500" />
                    <span className="text-sm font-medium text-brand-600">{item.new}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.newDesc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --------------- Features Section ---------------
function FeaturesSection() {
  const features = [
    {
      icon: Target,
      title: "Shared Evolution",
      description:
        "Grow together, not apart. Whether it's training for a marathon, learning a language, or mastering a recipe, turn 'getting to know you' into 'building a life with you'.",
      gradient: "from-brand-500 to-brand-600",
    },
    {
      icon: MessageCircleHeart,
      title: "Soul-Deep Prompts",
      description:
        "Move past surface-level small talk. Explore guided, psychologically-backed questions that uncover values, childhood dreams, and the perspectives that truly matter.",
      gradient: "from-warm-500 to-brand-500",
    },
    {
      icon: Users,
      title: "The Village Mode",
      description:
        "Love isn't just romantic. Strengthen the core pillars of your life—your lifelong friendships, your siblings, your parents. Every vital connection deserves a sanctuary.",
      gradient: "from-brand-400 to-warm-400",
    },
    {
      icon: ShieldCheck,
      title: "A Sacred Digital Space",
      description:
        "No endless scrolling. No gamification. Just a calm, highly intentional environment designed exclusively for authentic interactions between real people.",
      gradient: "from-brand-600 to-brand-400",
    },
    {
      icon: Zap,
      title: "Relationship Insights",
      description:
        "Track the health of your connections over time. See what's working, what needs attention, and celebrate your growth together as you build lasting memories.",
      gradient: "from-warm-400 to-brand-400",
    },
    {
      icon: Sparkles,
      title: "Unapologetically Human",
      description:
        "In a world where convenience often replaces effort, we fiercely protect and celebrate the beautiful, messy, irreplaceable nature of genuine human connection.",
      gradient: "from-brand-500 to-warm-500",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-brand-50/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="The Architecture of Connection"
          title="Technology That Serves The Heart"
          subtitle="Technology shouldn't replace human effort; it should facilitate it. Every element of Lovetamin is designed to bridge the gap between digital convenience and profound, real-world intimacy."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card
                variant="glass"
                className="h-full p-8 group hover:shadow-xl hover:shadow-brand-100/20 transition-all duration-300"
              >
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br text-white mb-5",
                    feature.gradient
                  )}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --------------- Difference Section (Social Proof / Why) ---------------
function DifferenceSection() {
  const stats = [
    { number: "80%", label: "of people crave deeper, more meaningful interactions" },
    { number: "3x", label: "longer conversations when started with a shared goal" },
    { number: "92%", label: "of couples say shared activities strengthened their bond" },
  ];

  return (
    <section
      id="difference"
      className="py-24 md:py-32 bg-midnight-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brand-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-warm-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="The Paradigm Shift"
          title="The Ultimate Luxury is Undivided Human Presence"
          subtitle="In a fast-paced digital world, the most valuable gift we can offer one another is our authentic, focused attention."
          dark
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <Card variant="glass-dark" className="p-8">
                <p className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-3">
                  {stat.number}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonial-style quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Card variant="glass-dark" className="p-10 md:p-14">
            <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic">
              &ldquo;We didn&apos;t build Lovetamin just to help you find someone new. We built it to help you profoundly discover the people who are already right in front of you—and celebrate the beautiful journey of growing together.&rdquo;
            </p>
            <p className="text-brand-400 mt-6 font-medium">— The Lovetamin Team</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// --------------- CTA Section ---------------
function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6"
        >
          <Sparkles className="w-4 h-4 text-brand-500" />
          <span className="text-brand-600 text-sm font-medium">
            Join The Movement
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
        >
          Nurture Your Human Connections
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 mb-10 max-w-xl mx-auto"
        >
          Step into a space built to celebrate and deepen the relationships that make life beautiful. Join the waitlist today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <WaitlistForm variant="light" source="main-cta" />
        </motion.div>
      </div>
    </section>
  );
}

// --------------- Footer ---------------
function FooterSection() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "#features" },
        { text: "Philosophy", href: "#philosophy" },
        { text: "Mystery", href: "/mystery" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Contact", href: "/contact" },
        { text: "Terms & Privacy", href: "/terms-and-privacy" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", href: "#" },
        { text: "Instagram", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Image
              src="/images/rwlogo.png"
              alt="Lovetamin"
              width={140}
              height={35}
              className="object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Nurturing relationships for couples, friends, and family.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="text-gray-900 font-medium text-sm mb-4">{section.title}</p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-500 text-sm transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} LoveTamin Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Image
              src="/images/applestoreimg.webp"
              alt="App Store"
              width={120}
              height={40}
              className="object-contain opacity-50 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/playstoreimg.png"
              alt="Play Store"
              width={120}
              height={40}
              className="object-contain rounded-md border border-gray-200 opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

// --------------- Main Page ---------------
export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <FeaturesSection />
      <DifferenceSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
