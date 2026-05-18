"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, LayoutGrid, Zap, Link2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/components/LangProvider";
import ServiceCard from "@/components/ServiceCard";

const icons: LucideIcon[] = [Globe, LayoutGrid, Zap, Link2];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();
  const s = t.services;

  return (
    <section
      ref={ref}
      id="services"
      className="relative bg-gradient-to-b from-[#F8EDFB] to-[#F1E3F7] py-24 px-6 overflow-hidden"
    >
      {/* Ambient background shapes */}
      <div
        aria-hidden
        className="absolute top-20 right-[-8rem] w-[28rem] h-[28rem] rounded-full bg-[#AD74C3]/12 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-10 left-[-6rem] w-80 h-80 rounded-full bg-[#7A3A8E]/10 blur-3xl"
      />
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14 md:mb-16"
        >
          <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-[#AD74C3]">
            {s.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
            <span className="text-[#1B0A24]">{s.heading1} </span>
            <span className="bg-gradient-to-r from-[#AD74C3] to-[#7A3A8E] bg-clip-text text-transparent">
              {s.heading2}
            </span>
          </h2>
          <p className="mt-5 text-base text-gray-500 max-w-md leading-relaxed">
            {s.sub}
          </p>
        </motion.div>

        {/* Grid: 1 / 2 / 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {s.items.map((item, i) => (
            <ServiceCard
              key={item.title}
              Icon={icons[i]}
              title={item.title}
              problem={item.problem}
              solution={item.solution}
              theProblem={s.theProblem}
              ourApproach={s.ourApproach}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
