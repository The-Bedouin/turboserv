"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   ICONS — Premium geometric SVGs tailored for Broker vs Direct advantages
   ───────────────────────────────────────────────────────────── */
const IconGuidance = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M20 10l8 6-8 6-8-6 8-6z" fill="#1a3a5c" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" strokeLinejoin="round" />
    <path d="M12 22l8 6 8-6" fill="none" stroke="white" strokeWidth="1.4" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 27l8 5 8-5" fill="none" stroke="#dc2626" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="16" r="2" fill="#dc2626" />
  </svg>
);

const IconAdvocacy = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1.2" strokeOpacity="0.25" />
    <path d="M15 20l3.5 3.5 6.5-6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="27" cy="13" r="3" fill="#dc2626" />
    <circle cx="27" cy="13" r="1" fill="white" />
    <rect x="11" y="29" width="18" height="2" rx="1" fill="#1a3a5c" />
  </svg>
);

const IconSavings = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M11 26l6-6 4 4 8-9" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 15h5v5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="11" y="28" width="18" height="2" rx="1" fill="#dc2626" />
    <circle cx="17" cy="20" r="1.5" fill="#dc2626" />
  </svg>
);

const IconReach = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" />
    <ellipse cx="20" cy="20" rx="4" ry="8" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="12" y1="20" x2="28" y2="20" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
    <circle cx="20" cy="12" r="2" fill="#dc2626" />
    <circle cx="26" cy="23" r="2" fill="#dc2626" />
    <circle cx="14" cy="23" r="2" fill="#1a3a5c" stroke="white" strokeWidth="0.8" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   PILLAR DATA — Concise, scannable, punchy copy
   ───────────────────────────────────────────────────────────── */
const pillars = [
  {
    icon: <IconGuidance />,
    title: "Expert Guidance",
    subtitle: "Tailored advisory built on your unique risk profile.",
    bullet: "No generic policies — 100% bespoke defense.",
    tagline: "Strategic Advisory",
  },
  {
    icon: <IconAdvocacy />,
    title: "Claims Advocacy",
    subtitle: "Forceful representation for swift, undisputed settlements.",
    bullet: "We work for you, not the insurance firm.",
    tagline: "99.4% Settlement Rate",
  },
  {
    icon: <IconSavings />,
    title: "Cost Savings",
    subtitle: "Best market pricing without sacrificing coverage quality.",
    bullet: "Aggressive premium leverage & restructuring.",
    tagline: "Optimized Premiums",
  },
  {
    icon: <IconReach />,
    title: "Market Reach",
    subtitle: "Unrestricted access to top tier-1 global underwriters.",
    bullet: "Comprehensive market benchmarking & placement.",
    tagline: "Tier-1 Underwriters",
  },
];

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
  },
};

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function TurboservAdvantage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-60px 0px", amount: 0.15 });

  return (
    <section className="bg-white py-[76px] md:py-[91px] relative overflow-hidden" ref={ref}>
      {/* Subtle top divider to cleanly transition from Core Solutions (#f7f8fa) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200/60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-red-600 mb-4">
              <span className="block w-5 h-px bg-red-600" />
              The Turboserv Advantage
            </span>
            <h2
              className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-navy-950"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why Partner With a Broker
              <br />
              <span className="text-red-600">Instead of Going Direct?</span>
            </h2>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm md:text-right pb-1">
            Going direct leaves you unshielded against insurer terms. We sit on your side of the table as an uncompromising risk vanguard.
          </p>
        </div>

        {/* ── 4x1 Desktop / 2x2 Tablet Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-[0_4px_24px_rgba(7,18,32,0.04)] hover:shadow-[0_16px_48px_rgba(7,18,32,0.11)] hover:border-navy-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Glow on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-950 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div>
                {/* Icon & Mini Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-fit transition-transform duration-300 group-hover:scale-105">
                    {pillar.icon}
                  </div>
                  <span className="text-[0.62rem] font-semibold tracking-wider text-navy-900/60 bg-navy-50/80 group-hover:bg-red-50 group-hover:text-red-600 uppercase px-2 py-1 rounded-md transition-colors duration-300">
                    {pillar.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold text-navy-950 mb-2 group-hover:text-red-600 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pillar.title}
                </h3>

                {/* 2-line description */}
                <p className="text-gray-600 text-[0.83rem] leading-snug mb-5 font-normal">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Scannable takeaway bullet footbox */}
              <div className="pt-3.5 border-t border-gray-100 mt-auto flex items-start gap-2">
                <span className="text-red-600 text-xs font-bold leading-tight mt-0.5">✓</span>
                <span className="text-navy-900 text-[0.75rem] font-medium leading-tight">
                  {pillar.bullet}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom Broker Guarantee Callout Banner ── */}
        <motion.div
          className="mt-10 sm:mt-12 bg-navy-950 rounded-2xl p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-xl shadow-navy-950/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center font-bold text-sm flex-shrink-0">
              ⚡
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white tracking-wide">
                The Brokerage Guarantee: Zero Additional Cost to You
              </h4>
              <p className="text-slate-400 text-xs mt-0.5">
                Our brokerage compensation is standardized within global market underwriting tariffs — you gain powerful advocacy for free.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-navy-950 hover:bg-red-600 hover:text-white text-xs font-semibold tracking-wide transition-colors duration-300 shadow-sm flex-shrink-0"
          >
            <span>Request Risk Review</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
