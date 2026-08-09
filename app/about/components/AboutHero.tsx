"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[90vh] pt-32 md:pt-40 pb-24 flex items-center justify-center overflow-hidden"
      id="about-hero"
      aria-label="About Turboserv hero"
    >
      {/* Light background with subtle patterns */}
      <div className="absolute inset-0 bg-white" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="inline-block px-4 py-1.5 bg-red-500/10 text-red-600 border border-red-500/20 text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8"
          variants={fadeUp}
          custom={0}
        >
          About Turboserv
        </motion.span>

        <motion.h1
          className="text-[clamp(1.8rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-navy-950 mb-6"
          style={{ fontFamily: "var(--font-display)" }}
          variants={fadeUp}
          custom={1}
        >
          Leading Corporate Insurance
          <br />
          <span className="text-red-600">Brokers in Nigeria</span>
        </motion.h1>

        <motion.p
          className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          variants={fadeUp}
          custom={2}
        >
          Turboserv Insurance Brokers Limited is a professional insurance
          brokerage and risk management consulting firm dedicated to protecting
          individuals, businesses, and corporate organizations. We represent
          your interests&nbsp;&mdash; not the insurers&apos;.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp}
          custom={3}
        >
          <a
            href="#executive-message"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-red-600 hover:bg-red-500 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 active:scale-[0.98]"
          >
            <span>Discover Our Story</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M3 7H11M11 7L8 4M11 7L8 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-3.5 border border-slate-200 hover:border-slate-300 rounded-full text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-slate-50 active:scale-[0.98]"
          >
            <svg
              className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="none"
            >
              <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4 6l6 5 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade into white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
