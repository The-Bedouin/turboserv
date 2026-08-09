"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

export default function SpecializedHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16"
      id="specialized-hero"
      aria-label="Specialized Corporate & SME Insurance Solutions hero"
    >
      {/* White base */}
      <div className="absolute inset-0 bg-white" aria-hidden="true" />

      {/* Soft cross-hatch texture */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Warm radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(185,28,28,0.04) 0%, rgba(185,28,28,0.01) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Secondary warm orb — bottom left */}
      <div
        className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.4]"
        style={{
          background:
            "radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.span
          className="inline-block px-5 py-1.5 bg-red-50 text-red-700 border border-red-100 text-[0.7rem] font-semibold tracking-[0.22em] uppercase rounded-full mb-10"
          variants={fadeUp}
          custom={0}
        >
          Insurance Solutions — Specialized &amp; Advisory
        </motion.span>

        {/* H1 */}
        <motion.h1
          className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-navy-950 mb-6"
          style={{ fontFamily: "var(--font-display)" }}
          variants={fadeUp}
          custom={1}
        >
          Bespoke Risk &amp;{" "}
          <span className="text-red-600 italic">Specialized</span>
          <br />
          Solutions
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-slate-600 text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
          variants={fadeUp}
          custom={2}
        >
          Targeted protection frameworks engineered for unique operational risks, commercial loan structures, valet liability, SME micro-coverage, and senior executive advisory. Turboserv bridges niche coverage gaps with precision underwriting and dedicated claims advocacy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp}
          custom={3}
        >
          <a
            href="#specialized-solutions"
            id="specialized-hero-explore-btn"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-red-600/30 active:scale-[0.98]"
            aria-label="Explore specialized insurance solutions"
          >
            <span>Explore Specialized Solutions</span>
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7H11M11 7L8 4M11 7L8 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            href="/contact"
            id="specialized-hero-contact-btn"
            className="inline-flex items-center gap-2 px-8 py-4 border border-slate-200 hover:border-slate-300 rounded-full text-sm font-semibold text-slate-700 hover:text-navy-950 hover:bg-slate-50 transition-all duration-300 active:scale-[0.98]"
          >
            Request a Risk Audit
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
          variants={fadeUp}
          custom={4}
        >
          <span className="text-slate-500 text-[0.65rem] tracking-[0.18em] uppercase">
            Scroll to explore
          </span>
          <motion.div
            className="w-px h-8 bg-slate-300"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade into white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
