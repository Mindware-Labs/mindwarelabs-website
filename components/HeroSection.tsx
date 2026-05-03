"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LangProvider";

const BrainCanvas = dynamic(() => import("@/components/BrainCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative flex items-center overflow-hidden bg-linear-to-br from-[#3D1A4E] via-[#522566] to-[#7A3A8E] min-h-[90vh]">
      {/* Blur orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-120 h-120 bg-[#AD74C3]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-80 h-80 bg-[#3D1A4E]/50 rounded-full blur-3xl" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-32 md:pb-24 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[#AD74C3] text-sm font-semibold uppercase tracking-widest mb-5"
            >
              {h.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-[2.5rem] md:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              {h.line1}
              <br />
              {h.line2}
              <br />
              <span className="text-[#AD74C3]">
                {h.line3}
                <br />
                {h.line4}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base text-white/65 max-w-md mb-9 leading-relaxed"
            >
              {h.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-white text-[#522566] font-semibold text-base hover:bg-[#EADFF0] transition-all duration-300 shadow-lg shadow-black/15"
              >
                {h.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/25 text-white font-medium text-base hover:bg-white/8 hover:border-white/40 transition-all duration-300"
              >
                {h.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Right: 3D brain visualization with HUD overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="hidden md:flex relative items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-[560px]">
              {/* Soft halo behind the brain */}
              <div
                className="absolute inset-10 rounded-full bg-[#AD74C3]/25 blur-3xl"
                aria-hidden
              />

              {/* Faint concentric ring — engineering instrument vibe */}
              <div
                className="absolute inset-4 rounded-full border border-white/[0.07]"
                aria-hidden
              />
              <div
                className="absolute inset-16 rounded-full border border-white/[0.05]"
                aria-hidden
              />

              {/* 3D Canvas */}
              <div className="absolute inset-0 z-10">
                <BrainCanvas />
              </div>

              {/* HUD overlay — fixed red tracker on top of canvas */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                aria-hidden
              >
                {/* Tracking marker positioned over the upper-left lobe */}
                <div
                  className="absolute"
                  style={{ left: "32%", top: "34%" }}
                >
                  <div className="relative w-10 h-10 -translate-x-1/2 -translate-y-1/2">
                    {/* Corner brackets */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-500/85" />
                    <span className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-500/85" />
                    <span className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-500/85" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-500/85" />

                    {/* Pulsing outer ring */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-3 h-3 rounded-full bg-red-500/40 animate-ping" />
                    {/* Solid center dot */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 56L1440 56L1440 28C1200 56 960 0 720 14C480 28 240 56 0 28L0 56Z" fill="#F8EDFB" />
        </svg>
      </div>
    </section>
  );
}
