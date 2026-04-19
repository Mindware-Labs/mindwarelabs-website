"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/components/LangProvider";

const navHrefs = ["#services", "#process", "#projects"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    let threshold = 0;
    const recalc = () => {
      const hero = document.querySelector<HTMLElement>("section");
      threshold = hero ? Math.max(hero.offsetHeight - 80, 0) : window.innerHeight * 0.85;
    };
    recalc();
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recalc);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recalc);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-gray-100/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src={
              scrolled
                ? "/images/logos/logo_transparent_background.png"
                : "/images/logos/white_logo_transparent_background.png"
            }
            alt="Mindware Labs"
            width={180}
            height={52}
            className="h-11 w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {t.nav.links.map((label, i) => (
            <a
              key={navHrefs[i]}
              href={navHrefs[i]}
              className={`text-sm font-medium transition-colors hover:text-[#AD74C3] ${
                scrolled ? "text-gray-600" : "text-white/85"
              }`}
            >
              {label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className={`flex items-center gap-0.5 rounded-full p-0.5 text-xs font-semibold transition-all duration-200 border ${
              scrolled ? "border-gray-200 bg-gray-50" : "border-white/20 bg-white/10"
            }`}
            aria-label="Switch language"
          >
            <span
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "en"
                  ? "bg-[#522566] text-white shadow-sm"
                  : scrolled ? "text-gray-400" : "text-white/50"
              }`}
            >
              EN
            </span>
            <span
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "es"
                  ? "bg-[#522566] text-white shadow-sm"
                  : scrolled ? "text-gray-400" : "text-white/50"
              }`}
            >
              ES
            </span>
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#522566] text-white hover:bg-[#7A3A8E] transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-[#522566]" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-4">
              {t.nav.links.map((label, i) => (
                <a
                  key={navHrefs[i]}
                  href={navHrefs[i]}
                  className="block text-gray-700 font-medium hover:text-[#522566] transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-2 py-1">
                <span className="text-gray-400 text-sm font-medium">Language:</span>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    lang === "en" ? "bg-[#522566] text-white" : "text-gray-400 hover:text-[#522566]"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("es")}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    lang === "es" ? "bg-[#522566] text-white" : "text-gray-400 hover:text-[#522566]"
                  }`}
                >
                  ES
                </button>
              </div>
              <a
                href="#contact"
                className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold bg-[#522566] text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
