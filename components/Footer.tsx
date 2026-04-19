"use client";

import Image from "next/image";
import { useLang } from "@/components/LangProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#1E0A2E] px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <a href="#" className="shrink-0">
          <Image
            src="/images/logos/white_logo_transparent_background.png"
            alt="Mindware Labs"
            width={140}
            height={48}
            className="h-8 w-auto opacity-80"
          />
        </a>

        <div className="flex items-center gap-6 text-xs text-white/30">
          {t.footer.links.map((label, i) => (
            <a
              key={t.footer.hrefs[i]}
              href={t.footer.hrefs[i]}
              className="hover:text-white/60 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs text-white/25">
          <a
            href="mailto:labsmindware@gmail.com"
            className="hover:text-white/50 transition-colors duration-200"
          >
            labsmindware@gmail.com
          </a>
          <span>·</span>
          <span>© {new Date().getFullYear()} Mindware Labs</span>
        </div>

      </div>
    </footer>
  );
}
