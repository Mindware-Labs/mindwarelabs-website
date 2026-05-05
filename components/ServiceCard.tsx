"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  theProblem: string;
  ourApproach: string;
  index: number;
  inView: boolean;
};

export default function ServiceCard({
  Icon,
  title,
  problem,
  solution,
  theProblem,
  ourApproach,
  index,
  inView,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative h-full"
    >
      {/* Soft hover glow */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#AD74C3]/40 to-[#7A3A8E]/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
      />

      <div className="relative h-full rounded-2xl bg-white/85 backdrop-blur-md border border-[#EADFF0] shadow-[0_4px_24px_-8px_rgba(82,37,102,0.12)] hover:shadow-[0_12px_40px_-12px_rgba(82,37,102,0.25)] hover:-translate-y-1 hover:border-[#AD74C3]/50 transition-all duration-300 p-6 flex flex-col">
        {/* Icon */}
        <div className="relative mb-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center ring-1 ring-[#EADFF0]"
            style={{ background: "linear-gradient(135deg, #F8EDFB 0%, #EADFF0 100%)" }}
          >
            <Icon className="w-5 h-5" style={{ color: "#7A3A8E" }} strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold tracking-tight leading-snug mb-5"
          style={{ color: "#1B0A24" }}
        >
          {title}
        </h3>

        {/* Problem block */}
        <div className="space-y-1.5">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{ color: "#D14D7A" }}
          >
            {theProblem}
          </span>
          <p className="text-[13.5px] leading-relaxed text-gray-600">{problem}</p>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#EADFF0] to-transparent" />

        {/* Approach block */}
        <div className="space-y-1.5">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{ color: "#7A3A8E" }}
          >
            {ourApproach}
          </span>
          <p className="text-[13.5px] leading-relaxed text-gray-700">{solution}</p>
        </div>
      </div>
    </motion.div>
  );
}
