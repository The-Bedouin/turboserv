"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 7H11M11 7L8 4M11 7L8 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BenefitsCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="benefits-cta"
      className="relative py-28 md:py-36 bg-navy-950 overflow-hidden"
      aria-label="Employee benefits CTA — Invest in your people"
    >
      {/* Background decorations */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, rgba(220,38,38,0.6) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Decorative lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Badge */}
        <motion.span
          className="inline-block px-5 py-1.5 bg-red-500/15 text-red-400 border border-red-500/25 text-[0.7rem] font-semibold tracking-[0.2em] uppercase rounded-full mb-10"
          variants={fadeUp}
          custom={0}
        >
          Invest in Your People
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="text-[clamp(2rem,5.5vw,4rem)] font-black leading-[1.05] tracking-[-0.035em] text-white mb-6"
          style={{ fontFamily: "var(--font-display)" }}
          variants={fadeUp}
          custom={1}
        >
          Build the Benefits Programme{" "}
          <span className="text-red-500">Your Team Deserves.</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14"
          variants={fadeUp}
          custom={2}
        >
          Whether you&apos;re building a benefits programme from scratch or
          reviewing an existing one that no longer serves your workforce,
          Turboserv&apos;s employee benefits specialists will design a solution
          that balances duty of care with commercial pragmatism.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          custom={3}
        >
          {/* Primary CTA */}
          <a
            href="/contact"
            id="benefits-cta-review-btn"
            className="group relative inline-flex items-center gap-3 px-9 py-4.5 rounded-full text-[0.9375rem] font-bold text-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]"
            aria-label="Request a benefits programme review"
          >
            <span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-500 group-hover:from-red-500 group-hover:to-red-600"
              aria-hidden="true"
            />
            {/* Shimmer */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2.5s infinite",
              }}
              aria-hidden="true"
            />
            <span className="relative z-10">
              Request a Benefits Programme Review
            </span>
            <span className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="tel:+2348177402607"
            id="benefits-cta-speak-broker-btn"
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full text-[0.9375rem] font-semibold text-white border border-white/25 hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            aria-label="Speak to a benefits specialist"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 text-red-400"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.64 19.79 19.79 0 01.01 1 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>Speak to a Benefits Specialist</span>
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs"
          variants={fadeUp}
          custom={4}
        >
          {[
            "NAICOM Registered Broker",
            "NHIA Compliant Programmes",
            "No-Obligation Consultation",
            "Confidentiality Guaranteed",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-red-500/60" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
