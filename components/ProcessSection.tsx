"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Pencil, Code2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/components/LangProvider";

const icons: LucideIcon[] = [Search, Pencil, Code2, Rocket];
const numbers = ["01", "02", "03", "04"];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLang();
  const p = t.process;

  return (
    <section
      id="process"
      className="relative py-24 px-6 overflow-hidden bg-linear-to-b from-[#F1E3F7] via-[#F8EDFB] to-[#F8EDFB]"
    >
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="absolute top-10 -left-24 w-72 h-72 rounded-full bg-[#AD74C3]/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -right-24 w-80 h-80 rounded-full bg-[#7A3A8E]/10 blur-3xl pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-14"
        >
          <span className="text-xs font-bold text-[#AD74C3] uppercase tracking-widest">{p.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B0A24] mt-2 mb-3 leading-tight">
            {p.heading1}{" "}
            <span className="text-[#522566]">{p.heading2}</span>
          </h2>
          <p className="text-gray-500 text-base max-w-lg">{p.sub}</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-11 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-[#AD74C3]/30 to-transparent" />

          <div className="grid md:grid-cols-4 gap-10">
            {p.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.15 + 0.1 }}
                  className="relative text-center group"
                >
                  <div className="relative z-10 w-22 h-22 mx-auto rounded-full bg-white border-2 border-[#EADFF0] group-hover:border-[#AD74C3]/50 flex flex-col items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <Icon className="w-6 h-6 text-[#522566] mb-1" />
                    <span className="text-[10px] font-bold text-[#AD74C3] tracking-widest">{numbers[i]}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1B0A24] mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
