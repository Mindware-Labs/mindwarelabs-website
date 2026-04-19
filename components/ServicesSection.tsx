"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, LayoutGrid, Zap, Link2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/components/LangProvider";

const icons: LucideIcon[] = [Globe, LayoutGrid, Zap, Link2];
const accents = ["#522566", "#7A3A8E", "#522566", "#7A3A8E"];

function ServiceCard({
  icon: Icon,
  accent,
  title,
  problem,
  solution,
  theProblem,
  ourApproach,
  index,
}: {
  icon: LucideIcon;
  accent: string;
  title: string;
  problem: string;
  solution: string;
  theProblem: string;
  ourApproach: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#EADFF0] hover:border-[#AD74C3]/40"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: accent + "12" }}
      >
        <Icon className="w-5 h-5" style={{ color: accent }} />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>

      <div className="space-y-3">
        <div>
          <span className="text-[9px] font-bold text-rose-400 uppercase tracking-widest">{theProblem}</span>
          <p className="text-gray-400 text-sm mt-1 leading-relaxed">{problem}</p>
        </div>
        <div className="h-px bg-[#F0E6F7]" />
        <div>
          <span className="text-[9px] font-bold text-[#522566] uppercase tracking-widest">{ourApproach}</span>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">{solution}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLang();
  const s = t.services;

  return (
    <section id="services" className="bg-[#F8EDFB] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <span className="text-xs font-bold text-[#AD74C3] uppercase tracking-widest">{s.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            {s.heading1}{" "}
            <span className="text-[#522566]">{s.heading2}</span>
          </h2>
          <p className="text-gray-400 text-base max-w-lg leading-relaxed">{s.sub}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {s.items.map((item, i) => (
            <ServiceCard
              key={i}
              icon={icons[i]}
              accent={accents[i]}
              title={item.title}
              problem={item.problem}
              solution={item.solution}
              theProblem={s.theProblem}
              ourApproach={s.ourApproach}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
