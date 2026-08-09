"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   ICONS — homepage-style abstract geometric SVGs
   ───────────────────────────────────────────────────────────── */
const IconVision = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M10 20s4.5-8 10-8 10 8 10 8-4.5 8-10 8-10-8-10-8z" stroke="white" strokeWidth="1.3" strokeOpacity="0.6" fill="#1a3a5c" />
    <circle cx="20" cy="20" r="4" fill="#071220" stroke="white" strokeWidth="1" />
    <circle cx="20" cy="20" r="1.8" fill="#dc2626" />
  </svg>
);

const IconMission = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" fill="#1a3a5c" />
    <circle cx="20" cy="20" r="6" stroke="#dc2626" strokeWidth="1.2" />
    <circle cx="20" cy="20" r="2.2" fill="#dc2626" />
    <path d="M20 7v3M20 30v3M7 20h3M30 20h3" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
  </svg>
);

const IconIntegrity = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M20 9l8 3.5v7.5c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11v-7.5L20 9z" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
    <path d="M16 20l3 3 5-5" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconProfessionalism = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <rect x="11" y="14" width="18" height="15" rx="2" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
    <path d="M16 14v-2a2 2 0 012-2h4a2 2 0 012 2v2" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" />
    <rect x="18" y="19" width="4" height="3" rx="0.5" fill="#dc2626" />
  </svg>
);

const IconCustomerFocus = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <circle cx="20" cy="15" r="4.5" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
    <path d="M12 29c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="1.3" strokeOpacity="0.6" strokeLinecap="round" />
    <circle cx="20" cy="15" r="1.5" fill="#dc2626" />
  </svg>
);

const IconExcellence = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <circle cx="20" cy="17" r="7.5" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
    <path d="M16 27l4-2 4 2-1-4.5 3.5-3.5-4.5-.5L20 14.5 18 18.5l-4.5.5 3.5 3.5z" fill="#dc2626" />
  </svg>
);

const IconInnovation = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M15 19a5 5 0 1110 0c0 2.5-1.5 4-2.5 5.5h-5C16.5 23 15 21.5 15 19z" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
    <path d="M17.5 28.5h5M18.5 31h3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="20" cy="19" r="2" fill="#dc2626" />
  </svg>
);

const IconAccountability = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <rect x="12" y="11" width="16" height="20" rx="2" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
    <rect x="16" y="9" width="8" height="4" rx="1" fill="#dc2626" />
    <path d="M16 19l2.5 2.5 5.5-5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
  },
};

/* ---- Main Component ---- */
export default function VisionMissionValues() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white" id="vision-mission">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-red-500/10 text-red-600 border border-red-500/20 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-6"
            variants={fadeUp}
            custom={0}
          >
            Brand DNA
          </motion.span>
          <motion.h2
            className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-950 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
            custom={1}
          >
            Our Vision, Mission,{" "}
            <span className="text-red-500">and Core Values</span>
          </motion.h2>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="group relative bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-navy-900/20 transition-all duration-300 overflow-hidden"
            variants={fadeUp}
            custom={2}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-950 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
            <div className="mb-6 w-fit">
              <IconVision />
            </div>
            <h3
              className="text-navy-950 text-xl font-semibold mb-4 group-hover:text-red-600 transition-colors duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Vision
            </h3>
            <p className="text-slate-600 text-[0.9375rem] leading-relaxed">
              To become one of Nigeria&apos;s most trusted insurance brokerage
              firms, recognized for excellence, innovation, integrity, and
              exceptional customer service.
            </p>
          </motion.div>

          <motion.div
            className="group relative bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-navy-900/20 transition-all duration-300 overflow-hidden"
            variants={fadeUp}
            custom={3}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-950 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
            <div className="mb-6 w-fit">
              <IconMission />
            </div>
            <h3
              className="text-navy-950 text-xl font-semibold mb-4 group-hover:text-red-600 transition-colors duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Mission
            </h3>
            <p className="text-slate-600 text-[0.9375rem] leading-relaxed">
              To provide professional insurance brokerage and risk management
              solutions that deliver value, security, and peace of mind to
              every client we serve.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Section Subheader ── */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={4}
        >
          <h3
            className="text-navy-950 text-xl md:text-2xl font-semibold mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Core Values That Define Us
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
            The foundational principles that direct our corporate decisions, client advocacy, and advisory standards.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════
            DYNAMIC ASYMMETRIC BENTO GRID
            Row 1: 2-col Hero Box (Integrity) + 1-col Box (Professionalism)
            Row 2: 1-col (Customer Focus) + 1-col (Excellence) + 1-col Dark Box (Innovation)
            Row 3: 3-col Full-Width Hero Callout (Accountability)
            ═══════════════════════════════════════════════════════ */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Card 1: INTEGRITY — 2-Column Wide Dark Hero Bento Box */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-2 bg-navy-950 rounded-2xl p-7 sm:p-8 border border-navy-900 shadow-xl shadow-navy-950/10 hover:shadow-2xl hover:border-red-600/40 transition-all duration-300 flex flex-col justify-between overflow-hidden text-white"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-navy-800 opacity-80 rounded-t-2xl" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="w-fit transition-transform duration-300 group-hover:scale-105">
                  <IconIntegrity />
                </div>
                <span className="text-[0.62rem] font-semibold tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 uppercase px-3 py-1 rounded-full">
                  Foundation Standard
                </span>
              </div>

              <h4
                className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-red-400 transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Integrity
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl font-normal">
                We uphold the highest ethical standards in every interaction, ensuring absolute transparency, unyielding honesty, and trustworthy counsel form the cornerstone of all client relationships.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-medium">
                ✓ 100% Uncompromising Ethical Conduct
              </span>
              <span className="text-red-400 text-xs font-semibold tracking-wide">
                Non-Negotiable →
              </span>
            </div>
          </motion.div>

          {/* Card 2: PROFESSIONALISM — 1-Column Tall Clean Box */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-1 bg-white rounded-2xl p-7 border border-slate-200 shadow-[0_4px_24px_rgba(7,18,32,0.04)] hover:shadow-2xl hover:border-navy-950/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-950 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-fit transition-transform duration-300 group-hover:scale-105">
                  <IconProfessionalism />
                </div>
                <span className="text-[0.6rem] font-bold tracking-wider text-navy-800 bg-navy-50 uppercase px-2.5 py-1 rounded-md">
                  Expert Rigor
                </span>
              </div>

              <h4
                className="text-lg font-semibold text-navy-950 mb-2 group-hover:text-red-600 transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Professionalism
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                Our team delivers expert-level service with meticulous attention to detail, maintaining the highest standards of professional conduct in every placement.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2">
              <span className="text-red-600 font-bold text-xs">✓</span>
              <span className="text-navy-950 text-xs font-medium">Certified Risk Advisors</span>
            </div>
          </motion.div>

          {/* Card 3: CUSTOMER FOCUS — 1-Column Box */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-1 bg-white rounded-2xl p-7 border border-slate-200 shadow-[0_4px_24px_rgba(7,18,32,0.04)] hover:shadow-2xl hover:border-navy-950/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-950 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-fit transition-transform duration-300 group-hover:scale-105">
                  <IconCustomerFocus />
                </div>
                <span className="text-[0.6rem] font-bold tracking-wider text-navy-800 bg-navy-50 uppercase px-2.5 py-1 rounded-md">
                  Client First
                </span>
              </div>

              <h4
                className="text-lg font-semibold text-navy-950 mb-2 group-hover:text-red-600 transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Customer Focus
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                Every decision we make is guided by our clients&apos; best interests. We listen, understand, and craft protection strategies tailored to your exact needs.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2">
              <span className="text-red-600 font-bold text-xs">✓</span>
              <span className="text-navy-950 text-xs font-medium">Bespoke Policy Structures</span>
            </div>
          </motion.div>

          {/* Card 4: EXCELLENCE — 1-Column Box */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-1 bg-white rounded-2xl p-7 border border-slate-200 shadow-[0_4px_24px_rgba(7,18,32,0.04)] hover:shadow-2xl hover:border-navy-950/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-950 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-fit transition-transform duration-300 group-hover:scale-105">
                  <IconExcellence />
                </div>
                <span className="text-[0.6rem] font-bold tracking-wider text-navy-800 bg-navy-50 uppercase px-2.5 py-1 rounded-md">
                  Benchmark
                </span>
              </div>

              <h4
                className="text-lg font-semibold text-navy-950 mb-2 group-hover:text-red-600 transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Excellence
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                We pursue excellence relentlessly, continuously refining our process and underwriting relationships to exceed expectations and set new market benchmarks.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2">
              <span className="text-red-600 font-bold text-xs">✓</span>
              <span className="text-navy-950 text-xs font-medium">Industry Benchmark Quality</span>
            </div>
          </motion.div>

          {/* Card 5: INNOVATION — 1-Column Dark Accent Bento Box */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-1 bg-gradient-to-br from-navy-950 via-navy-900 to-red-950 rounded-2xl p-7 border border-navy-800 shadow-xl hover:shadow-2xl hover:border-red-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden text-white"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-navy-800 opacity-80 rounded-t-2xl" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-fit transition-transform duration-300 group-hover:scale-105">
                  <IconInnovation />
                </div>
                <span className="text-[0.6rem] font-semibold tracking-widest text-red-400 bg-red-500/15 border border-red-500/25 uppercase px-2.5 py-1 rounded-md">
                  Future Ready
                </span>
              </div>

              <h4
                className="text-lg font-semibold mb-2 group-hover:text-red-400 transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Innovation
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed font-normal">
                We embrace cutting-edge technology and creative structuring to deliver smarter, faster, and more effective risk management strategies.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2">
              <span className="text-red-400 font-bold text-xs">✓</span>
              <span className="text-slate-200 text-xs font-medium">Digital InsurTech Systems</span>
            </div>
          </motion.div>

          {/* Card 6: ACCOUNTABILITY — 3-Column Full-Width Hero Callout Banner */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-3 bg-gradient-to-r from-navy-950 via-navy-900 to-red-950 rounded-2xl p-7 sm:p-8 border border-navy-900 shadow-xl hover:shadow-2xl hover:border-red-600/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-white overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-950 via-red-600 to-navy-950 opacity-90 rounded-t-2xl" />

            <div className="flex items-start sm:items-center gap-5">
              <div className="w-fit flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <IconAccountability />
              </div>
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-1.5">
                  <h4
                    className="text-xl font-semibold group-hover:text-red-400 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Accountability
                  </h4>
                  <span className="text-[0.6rem] font-semibold tracking-widest text-red-400 bg-red-500/15 border border-red-500/25 uppercase px-2.5 py-0.5 rounded-full">
                    Zero Compromise
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  We take full ownership of our commitments, delivering on every promise and holding ourselves to the highest standards of financial and legal responsibility for our clients.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/10 flex items-center justify-end">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                <span>99.4% Settlement Record</span>
                <span>→</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
