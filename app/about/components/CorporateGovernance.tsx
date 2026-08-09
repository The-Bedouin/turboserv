"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   ICONS — homepage-style abstract geometric SVGs
   ───────────────────────────────────────────────────────────── */
const IconBoard = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <rect x="15" y="9" width="10" height="7" rx="1.5" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
    <circle cx="20" cy="12.5" r="1.5" fill="#dc2626" />
    <path d="M20 16v5M12 21h16M12 21v4M20 21v4M28 21v4" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
    <rect x="8" y="25" width="8" height="6" rx="1" fill="#1a3a5c" />
    <rect x="16" y="25" width="8" height="6" rx="1" fill="#1a3a5c" />
    <rect x="24" y="25" width="8" height="6" rx="1" fill="#1a3a5c" />
  </svg>
);

const IconCEO = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <circle cx="20" cy="15" r="5" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
    <circle cx="20" cy="15" r="2" fill="#dc2626" />
    <path d="M11 31c0-4.5 4-7 9-7s9 2.5 9 7" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M19 24l1 3 1-3" stroke="#dc2626" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTechnical = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <circle cx="20" cy="20" r="8" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
    <circle cx="20" cy="20" r="3.5" fill="#071220" stroke="#dc2626" strokeWidth="1.2" />
    <circle cx="20" cy="20" r="1.2" fill="#dc2626" />
    <path d="M20 9v3M20 28v3M9 20h3M28 20h3M12.2 12.2l2.1 2.1M25.7 25.7l2.1 2.1M12.2 27.8l2.1-2.1M25.7 14.3l2.1-2.1" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
  </svg>
);

const IconClaimsDiv = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M12 10h16v20H12z" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
    <path d="M16 16h8M16 20h8M16 24h5" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" strokeLinecap="round" />
    <circle cx="27" cy="26" r="4.5" fill="#dc2626" />
    <path d="M25.2 26l1.2 1.2 2.4-2.4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCX = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M12 21a8 8 0 0116 0v5a2 2 0 01-2 2h-1" stroke="white" strokeWidth="1.3" strokeOpacity="0.6" strokeLinecap="round" />
    <rect x="10" y="19" width="4" height="7" rx="1.5" fill="#dc2626" />
    <rect x="26" y="19" width="4" height="7" rx="1.5" fill="#dc2626" />
    <path d="M22 28a3 3 0 01-4 0" stroke="#dc2626" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

/* ---- Org-chart node ---- */
function OrgNode({
  icon,
  title,
  subtitle,
  accent = false,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accent?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      className={`relative rounded-2xl border px-6 py-5 text-center shadow-lg transition-shadow duration-300 hover:shadow-2xl ${
        accent
          ? "bg-navy-950 border-navy-800 text-white"
          : "bg-white border-slate-200 text-navy-950"
      }`}
      variants={scaleIn}
      custom={delay}
    >
      <div className="mb-3 flex items-center justify-center">
        {icon}
      </div>
      <h4 className="text-sm font-semibold mb-0.5">{title}</h4>
      <p className={`text-xs ${accent ? "text-slate-400" : "text-slate-500"}`}>{subtitle}</p>
    </motion.div>
  );
}

export default function CorporateGovernance() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white" id="governance">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-navy-50 text-navy-800 border border-navy-100 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-6"
            variants={fadeUp}
            custom={0}
          >
            Governance
          </motion.span>
          <motion.h2
            className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-950 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
            custom={1}
          >
            Corporate Governance &{" "}
            <span className="text-red-500">Organizational Structure</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 text-[0.9375rem] leading-relaxed max-w-2xl mx-auto"
            variants={fadeUp}
            custom={2}
          >
            Our team consists of seasoned risk managers, certified brokers, and
            financial specialists committed to standard corporate governance,
            transparency, and ethical business conduct.
          </motion.p>
        </motion.div>

        {/* Org Chart */}
        <motion.div
          className="relative"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Level 1 — Board */}
          <div className="flex justify-center mb-4">
            <div className="w-full max-w-xs">
              <OrgNode
                icon={<IconBoard />}
                title="Board of Directors"
                subtitle="Strategic Oversight"
                accent
                delay={3}
              />
            </div>
          </div>

          {/* Connector line */}
          <motion.div
            className="flex justify-center mb-4"
            variants={fadeUp}
            custom={3.5}
          >
            <div className="w-px h-10 bg-slate-300" />
          </motion.div>

          {/* Level 2 — MD/CEO */}
          <div className="flex justify-center mb-4">
            <div className="w-full max-w-xs">
              <OrgNode
                icon={<IconCEO />}
                title="Managing Director / CEO"
                subtitle="Executive Leadership"
                accent
                delay={4}
              />
            </div>
          </div>

          {/* Branching connector */}
          <motion.div
            className="flex justify-center mb-4"
            variants={fadeUp}
            custom={4.5}
          >
            <div className="relative w-full max-w-2xl">
              {/* Vertical stem */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-5 bg-slate-300" />
              {/* Horizontal bar */}
              <div className="absolute top-5 left-[16.67%] right-[16.67%] h-px bg-slate-300" />
              {/* Three vertical drops */}
              <div className="absolute top-5 left-[16.67%] w-px h-5 bg-slate-300" />
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-px h-5 bg-slate-300" />
              <div className="absolute top-5 right-[16.67%] w-px h-5 bg-slate-300" />
              {/* Spacer */}
              <div className="h-10" />
            </div>
          </motion.div>

          {/* Level 3 — Divisions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <OrgNode
              icon={<IconTechnical />}
              title="Technical Division"
              subtitle="Underwriting & Risk"
              delay={5}
            />
            <OrgNode
              icon={<IconClaimsDiv />}
              title="Claims Division"
              subtitle="Claims Advocacy"
              delay={5.5}
            />
            <OrgNode
              icon={<IconCX />}
              title="Customer Experience"
              subtitle="Client Relations"
              delay={6}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
