"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/components/LangProvider";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLang();
  const c = t.cta;

  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden bg-linear-to-b from-[#F8EDFB] via-[#F8EDFB] to-[#F1E3F7]"
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
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl shadow-[#522566]/20"
        >
          <div className="flex flex-col lg:flex-row min-h-115">

            {/* CTA panel */}
            <div className="flex-1 bg-linear-to-br from-[#522566] to-[#7A3A8E] px-8 py-12 lg:px-12 lg:py-14 flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#AD74C3]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <p className="text-[#AD74C3] text-xs font-bold uppercase tracking-widest mb-4">
                  {c.eyebrow}
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                  {c.heading1}
                  <br />
                  <span className="text-[#AD74C3]">{c.heading2}</span>
                </h2>

                <p className="text-white/65 text-base leading-relaxed mb-5">
                  {c.body}
                </p>

                <p className="text-white/40 text-sm italic mb-8">
                  {c.quote}
                </p>

                <a
                  href="mailto:labsmindware@gmail.com"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-white text-[#522566] font-bold text-base hover:bg-[#EADFF0] transition-all duration-300 shadow-xl shadow-black/20 w-fit"
                >
                  {c.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>

                <p className="text-white/25 text-xs mt-4">{c.fine}</p>
              </div>
            </div>

            {/* Portrait panel */}
            <div className="relative lg:w-72 shrink-0 bg-[#2A0E3F] flex flex-col">
              <div className="relative flex-1 min-h-80">
                <Image
                  src="/images/team/sebastian_transparent_background.png"
                  alt={c.name}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 100vw, 288px"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16 bg-linear-to-t from-[#2A0E3F] via-[#2A0E3F]/80 to-transparent">
                <p className="text-white font-bold text-base leading-tight">{c.name}</p>
                <p className="text-[#AD74C3] text-xs font-medium mt-0.5">{c.role}</p>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/45 text-xs">{c.available}</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
