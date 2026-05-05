"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardCheck, Users, Rocket, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/components/LangProvider";

const icons: LucideIcon[] = [ClipboardCheck, Users, Heart, Rocket];

function StatCard({
  value,
  label,
  Icon,
  index,
  inView,
}: {
  value: string;
  label: string;
  Icon: LucideIcon;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
      className="flex flex-col items-center text-center px-4 py-8"
    >
      <div className="w-11 h-11 rounded-xl bg-[#EADFF0] flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-[#7A3A8E]" strokeWidth={2} />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-[#1B0A24] leading-none tracking-tight">
        {value}
      </div>
      <div className="text-sm text-gray-500 mt-3 font-medium">{label}</div>
    </motion.div>
  );
}

function FeatureStatCard({
  value,
  label,
  caption,
  inView,
}: {
  value: string;
  label: string;
  caption: string;
  inView: boolean;
}) {
  // Gauge geometry — near-full circle (~97% arc) for the 98% mark
  const size = 220;
  const radius = 96;
  const stroke = 7;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.98 * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="relative lg:-my-6 xl:-my-8"
    >
      {/* Outer glow */}
      <div
        aria-hidden
        className="absolute -inset-2 rounded-3xl bg-[#AD74C3]/25 blur-2xl"
      />

      {/* Card */}
      <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#AD74C3] via-[#7A3A8E]/60 to-[#AD74C3]/40 shadow-2xl shadow-[#7A3A8E]/30">
        <div className="rounded-[calc(1.5rem-1.5px)] bg-gradient-to-b from-white to-[#F8EDFB] px-6 py-8 flex flex-col items-center">
          {/* Gauge + value */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
          >
            <svg
              viewBox={`0 0 ${size} ${size}`}
              className="absolute inset-0 -rotate-[95deg]"
              aria-hidden
            >
              <defs>
                <linearGradient id="gaugeStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#AD74C3" />
                  <stop offset="100%" stopColor="#522566" />
                </linearGradient>
              </defs>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#EADFF0"
                strokeWidth={stroke}
                fill="none"
              />
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="url(#gaugeStroke)"
                strokeWidth={stroke}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={
                  inView
                    ? { strokeDashoffset: circumference - progress }
                    : { strokeDashoffset: circumference }
                }
                transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
              />
            </svg>

            <div className="relative flex flex-col items-center">
              <div className="text-[3.5rem] md:text-6xl font-bold text-[#522566] leading-none tracking-tight">
                {value}
              </div>
              <div className="text-sm text-gray-500 mt-2 font-medium">{label}</div>
            </div>
          </div>

          {/* Caption pill */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8EDFB] border border-[#EADFF0]">
            <Heart className="w-3.5 h-3.5 text-[#AD74C3] fill-[#AD74C3]" />
            <span className="text-[11px] font-medium text-[#522566] tracking-wide">
              {caption}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MetricsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();
  const stats = t.trust.stats;

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-[#F8EDFB] via-[#F8EDFB] to-[#F1E3F7] py-20 md:py-24 px-6 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="absolute top-10 -left-24 w-72 h-72 rounded-full bg-[#AD74C3]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -right-24 w-80 h-80 rounded-full bg-[#7A3A8E]/10 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-[11px] md:text-xs font-bold tracking-[0.22em] uppercase text-[#AD74C3] mb-4">
            {t.trust.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            <span className="text-[#1B0A24]">{t.trust.heading1} </span>
            <span className="bg-gradient-to-r from-[#AD74C3] to-[#7A3A8E] bg-clip-text text-transparent">
              {t.trust.heading2}
            </span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-center">
          <div className="rounded-3xl bg-white border border-[#EADFF0] shadow-lg shadow-[#522566]/5">
            <StatCard
              value={stats[0].value}
              label={stats[0].label}
              Icon={icons[0]}
              index={0}
              inView={inView}
            />
          </div>

          <div className="rounded-3xl bg-white border border-[#EADFF0] shadow-lg shadow-[#522566]/5">
            <StatCard
              value={stats[1].value}
              label={stats[1].label}
              Icon={icons[1]}
              index={1}
              inView={inView}
            />
          </div>

          <FeatureStatCard
            value={stats[2].value}
            label={stats[2].label}
            caption={t.trust.gaugeCaption}
            inView={inView}
          />

          <div className="rounded-3xl bg-white border border-[#EADFF0] shadow-lg shadow-[#522566]/5">
            <StatCard
              value={stats[3].value}
              label={stats[3].label}
              Icon={icons[3]}
              index={3}
              inView={inView}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
