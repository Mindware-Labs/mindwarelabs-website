"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/components/LangProvider";

type Logo = (props: { className?: string }) => React.ReactElement;

const ReactLogo: Logo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <g fill="none" stroke="#61DAFB" strokeWidth="1.2">
      <ellipse cx="12" cy="12" rx="10" ry="3.8" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
    </g>
    <circle cx="12" cy="12" r="1.6" fill="#61DAFB" />
  </svg>
);

const NextLogo: Logo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="12" cy="12" r="11" fill="#0A0A0A" />
    <path d="M8.6 7.5v9M15.4 7.5v6.2L9.2 7.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const NodeLogo: Logo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      d="M12 2 22 7v10l-10 5L2 17V7l10-5Z"
      fill="#3C873A"
    />
    <text
      x="12"
      y="15"
      textAnchor="middle"
      fontFamily="system-ui, sans-serif"
      fontSize="6.4"
      fontWeight="700"
      fill="#fff"
    >
      JS
    </text>
  </svg>
);

const TsLogo: Logo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <text
      x="12"
      y="16.5"
      textAnchor="middle"
      fontFamily="system-ui, sans-serif"
      fontSize="11"
      fontWeight="800"
      fill="#fff"
      letterSpacing="-0.5"
    >
      TS
    </text>
  </svg>
);

const PostgresLogo: Logo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="12" cy="12" r="11" fill="#336791" />
    <path
      d="M7 9.5c0-2.2 2-3.7 5-3.7s5 1.5 5 3.7c0 1.4-.6 2.4-1.5 3 .8.5 1.2 1.2 1.2 2 0 1.6-1.7 2.7-4.7 2.7-1.7 0-3-.4-3.7-1"
      stroke="#fff"
      strokeWidth="1.1"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="9.4" cy="10.5" r="0.7" fill="#fff" />
  </svg>
);

const AwsLogo: Logo = ({ className }) => (
  <svg viewBox="0 0 32 24" className={className} aria-hidden>
    <text
      x="16"
      y="13"
      textAnchor="middle"
      fontFamily="system-ui, sans-serif"
      fontSize="9"
      fontWeight="800"
      fill="#232F3E"
      letterSpacing="-0.3"
    >
      aws
    </text>
    <path
      d="M5 17.5c5 3 17 3 22 0"
      stroke="#FF9900"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const SupabaseLogo: Logo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <defs>
      <linearGradient id="sb" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3ECF8E" />
        <stop offset="1" stopColor="#249361" />
      </linearGradient>
    </defs>
    <path
      d="M13 2 4 13.5h7L10 22l9-11.5h-7L13 2Z"
      fill="url(#sb)"
    />
  </svg>
);

type Tech = { name: string; Logo: Logo; size: string };

const techs: Tech[] = [
  { name: "React", Logo: ReactLogo, size: "w-5 h-5" },
  { name: "Next.js", Logo: NextLogo, size: "w-5 h-5" },
  { name: "Node.js", Logo: NodeLogo, size: "w-5 h-5" },
  { name: "TypeScript", Logo: TsLogo, size: "w-5 h-5" },
  { name: "PostgreSQL", Logo: PostgresLogo, size: "w-5 h-5" },
  { name: "AWS", Logo: AwsLogo, size: "w-7 h-5" },
  { name: "Supabase", Logo: SupabaseLogo, size: "w-5 h-5" },
];

export default function TechStackRow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { t } = useLang();

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#F1E3F7] to-[#F8EDFB] px-6 pt-2 pb-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#AD74C3]">
          {t.trust.builtWith}
        </span>

        {techs.map(({ name, Logo, size }) => (
          <div
            key={name}
            className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            <Logo className={size} />
            <span className="text-sm font-medium text-gray-600">{name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
