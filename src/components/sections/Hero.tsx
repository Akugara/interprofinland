"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const glowOrbs = [
  { color: "#2a77bd", top: "8%", left: "12%", size: 380, delay: 0, opacity: 0.08 },
  { color: "#003580", top: "58%", left: "82%", size: 460, delay: 0.8, opacity: 0.06 },
  { color: "#5b9bd5", top: "72%", left: "20%", size: 260, delay: 1.4, opacity: 0.07 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {glowOrbs.map((orb, i) => (
          <span
            key={i}
            className="absolute animate-float-slow rounded-full blur-3xl"
            style={{
              backgroundColor: orb.color,
              top: orb.top,
              left: orb.left,
              width: orb.size,
              height: orb.size,
              opacity: orb.opacity,
              animationDelay: `${orb.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container-page relative z-10 flex flex-col items-center py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl text-h1 md:text-h1-lg font-bold tracking-tight text-primary"
        >
          Empowering International Professionals in Finland
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-body-lg text-gray-600"
        >
          We provide tailored guidance and a support network to help you
          overcome barriers, utilize your skills, and build a meaningful
          career.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-6 sm:flex-row"
        >
          <Button href="/get-involved" size="lg">
            Become a Member
          </Button>
          <a
            href="/programs"
            className="focus-ring inline-flex items-center gap-1.5 text-[15px] font-semibold text-secondary transition-colors hover:text-primary"
          >
            Explore Our Programs <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
