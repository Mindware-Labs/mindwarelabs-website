"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/components/LangProvider";

const metricIcons: LucideIcon[][] = [
  [TrendingUp, CheckCircle2],
  [Clock, TrendingUp],
  [CheckCircle2, TrendingUp],
];

function ProjectCard({
  index,
  category,
  title,
  tag,
  problem,
  solution,
  metrics,
  problemLabel,
  solutionLabel,
}: {
  index: number;
  category: string;
  title: string;
  tag: string;
  problem: string;
  solution: string;
  metrics: { value: string; label: string }[];
  problemLabel: string;
  solutionLabel: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const icons = metricIcons[index] ?? [TrendingUp, TrendingUp];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-[10px] font-bold text-[#AD74C3] uppercase tracking-widest">{category}</span>
        <span className="text-[10px] px-3 py-1.5 rounded-full bg-white/10 text-white/60 font-medium">{tag}</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-6">{title}</h3>

      <div className="space-y-5 flex-1">
        <div>
          <span className="text-[10px] font-bold text-rose-400/80 uppercase tracking-widest">{problemLabel}</span>
          <p className="text-white/50 text-sm mt-1.5 leading-relaxed">{problem}</p>
        </div>
        <div>
          <span className="text-[10px] font-bold text-[#AD74C3] uppercase tracking-widest">{solutionLabel}</span>
          <p className="text-white/70 text-sm mt-1.5 leading-relaxed">{solution}</p>
        </div>
      </div>

      <div className="flex gap-6 mt-8 pt-6 border-t border-white/10">
        {metrics.map((metric, mi) => {
          const Icon = icons[mi];
          return (
            <div key={metric.label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-[#AD74C3] shrink-0" />
              <div>
                <div className="text-lg font-bold text-white leading-none">{metric.value}</div>
                <div className="text-white/40 text-[11px] mt-0.5">{metric.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLang();
  const p = t.projects;

  return (
    <section id="projects" className="py-20 px-6 bg-[#522566]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-[10px] font-bold text-[#AD74C3] uppercase tracking-widest">{p.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3 leading-tight">
            {p.heading1}{" "}
            <span className="text-[#AD74C3]">{p.heading2}</span>
          </h2>
          <p className="text-white/50 text-base max-w-lg">{p.sub}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {p.items.map((project, i) => (
            <ProjectCard
              key={i}
              index={i}
              category={project.category}
              title={project.title}
              tag={project.tag}
              problem={project.problem}
              solution={project.solution}
              metrics={project.metrics}
              problemLabel={p.problem}
              solutionLabel={p.solution}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
