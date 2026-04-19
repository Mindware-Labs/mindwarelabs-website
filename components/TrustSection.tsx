"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/components/LangProvider";

const stack = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Supabase"];

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { t } = useLang();

  return (
    <section className="bg-[#F8EDFB] py-16 px-8 lg:px-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#EADFF0] shadow-xl shadow-[#522566]/10 overflow-hidden"
      >
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#F5EDF9]">
          {t.trust.stats.map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center">
              <div className="text-4xl font-bold text-[#522566] leading-none">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="border-t-2 border-[#F5EDF9] bg-[#FAF4FC] px-8 py-4 flex flex-wrap items-center gap-x-1 gap-y-1">
          <span className="text-[#AD74C3]/60 text-xs uppercase tracking-widest font-semibold mr-3">
            {t.trust.builtWith}
          </span>
          {stack.map((tech, i) => (
            <span key={tech} className="text-gray-400 text-sm">
              {tech}{i < stack.length - 1 ? <span className="mx-2 text-[#EADFF0]">·</span> : null}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
