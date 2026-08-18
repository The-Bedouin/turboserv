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

export default function TeamHero() {
  return (
    <section
      className="relative min-h-[55vh] pt-36 md:pt-44 pb-20 flex items-center justify-center overflow-hidden"
      id="team-hero"
      aria-label="Our team hero"
    >
      {/* Background — white with subtle texture */}
      <div className="absolute inset-0 bg-white" aria-hidden="true">
        {/* Fine grid texture */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
        {/* Radial highlight top-center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.2]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(220,38,38,0.15) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow badge */}
        <motion.span
          className="inline-block px-4 py-1.5 bg-red-500/10 text-red-600 border border-red-500/20 text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8"
          variants={fadeUp}
          custom={0}
        >
          Our Team
        </motion.span>

        {/* Serif headline */}
        <motion.h1
          className="text-[clamp(2rem,5.5vw,3.8rem)] font-bold leading-[1.07] tracking-[-0.03em] text-navy-950 mb-6"
          style={{ fontFamily: "var(--font-display)" }}
          variants={fadeUp}
          custom={1}
        >
          The People Behind{" "}
          <br className="hidden sm:block" />
          <span className="text-red-500">the Promise</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          variants={fadeUp}
          custom={2}
        >
          Turboserv&apos;s greatest asset is its people. Our team of seasoned
          risk advisors, certified brokers, and client advocates bring decades
          of combined expertise — working tirelessly to protect what matters
          most to our clients.
        </motion.p>

        {/* CTA links */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp}
          custom={3}
        >
          <a
            href="#leadership"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-red-600 hover:bg-red-500 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 active:scale-[0.98]"
          >
            <span>Meet Our Leadership</span>
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
            href="/contact"
            className="group inline-flex items-center gap-3 px-7 py-3.5 border border-slate-200 hover:border-slate-300 rounded-full text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-slate-50 active:scale-[0.98]"
          >
            <span>Work With Us</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade into white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
