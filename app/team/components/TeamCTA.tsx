"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.14, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

export default function TeamCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden bg-navy-950"
      aria-label="Contact our team"
      id="team-cta"
    >
      {/* Background accents */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-[0.08]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(220,38,38,0.7) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Eyebrow */}
        <motion.span
          className="inline-block px-4 py-1.5 bg-red-500/15 text-red-400 border border-red-500/25 text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8"
          variants={fadeUp}
          custom={0}
        >
          Partner with Us
        </motion.span>

        {/* Heading */}
        <motion.h2
          className="text-[clamp(1.8rem,5vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white mb-6"
          style={{ fontFamily: "var(--font-display)" }}
          variants={fadeUp}
          custom={1}
        >
          Work with the Best in{" "}
          <span className="text-red-500">Risk Management.</span>
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
          variants={fadeUp}
          custom={2}
        >
          Our specialists are ready to craft a bespoke risk programme that
          evolves with your business — whether you&apos;re an SME, a growing
          corporate, or a large enterprise.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeUp} custom={3}>
          <a
            href="/contact"
            id="team-cta-speak-with-team"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-[0.9375rem] font-semibold text-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]"
            aria-label="Speak with our team"
          >
            {/* Button background */}
            <span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-500 group-hover:from-red-500 group-hover:to-red-600"
              aria-hidden="true"
            />
            {/* Shimmer */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 45%, rgba(255,255,255,0.18) 55%, transparent 60%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2s infinite",
              }}
              aria-hidden="true"
            />
            <span className="relative z-10">Speak with Our Team</span>
            <span className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
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
        </motion.div>

        {/* Trust micro-copy */}
        <motion.p
          className="mt-6 text-slate-600 text-xs"
          variants={fadeUp}
          custom={4}
        >
          No obligation. Free initial risk consultation.
        </motion.p>
      </motion.div>
    </section>
  );
}
