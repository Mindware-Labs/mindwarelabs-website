"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Layers, TrendingUp, Shield, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "No templates. No shortcuts. Every project starts with a deep understanding of your business goals and constraints.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    description: "We write maintainable, well-structured code that your team can understand, extend, and own long-term.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description: "From MVP to enterprise-scale, our architecture grows with your business without costly rewrites.",
  },
  {
    icon: Shield,
    title: "Business Impact First",
    description: "Every technical decision is made through the lens of ROI. We measure success by the results we drive.",
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why-us" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-[#AD74C3] uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              We Don&apos;t Just Write Code.{" "}
              <span className="text-[#522566]">We Solve Problems.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Most agencies treat your project like a task to check off. We treat it like a business
              problem that deserves a real solution. That difference shows in everything we ship.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#522566] text-white font-semibold hover:bg-[#7A3A8E] transition-all duration-300 shadow-md shadow-[#522566]/20"
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Right: Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="p-6 rounded-2xl bg-[#F8EDFB] hover:bg-[#EADFF0] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#522566]/10 flex items-center justify-center mb-4 group-hover:bg-[#522566]/15 transition-colors">
                    <Icon className="w-5 h-5 text-[#522566]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
