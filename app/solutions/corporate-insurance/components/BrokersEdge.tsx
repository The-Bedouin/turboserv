"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    id: "risk-audit",
    number: "01",
    title: "Comprehensive Risk Auditing",
    subtitle: "Exposing what you don't know you've exposed.",
    body: "Most corporations carry silent coverage gaps — exposures that existing policies quietly exclude, underinsured asset values that create phantom protection, and emerging risks entirely absent from the risk register. Our senior risk engineers conduct granular, on-site audits of your operations, contracts, assets, and revenue streams, identifying and prioritising every material exposure. The outcome is a precise risk map, not a sales pitch — giving you executive-level clarity on exactly where the enterprise is vulnerable and the financial magnitude of each unmitigated risk.",
    accent: "bg-navy-950",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    id: "bespoke-tailoring",
    number: "02",
    title: "Bespoke Policy Tailoring",
    subtitle: "Built for your business model. Not the market average.",
    body: "Off-the-shelf insurance policies are written for hypothetical average businesses — which means they inevitably contain conditions, exclusions, and sub-limits that create dangerous mismatches with how your specific enterprise actually operates. Turboserv's technical team negotiates bespoke policy wordings, manuscript clauses, and extended definitions directly with underwriters, engineering coverage that aligns precisely with your contracts, supply chain structure, regulatory obligations, and risk tolerance. The result is a programme where you pay premium only for risk you actually carry, and where coverage exists exactly where your operations require it.",
    accent: "bg-red-600",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: "claims-advocacy",
    number: "03",
    title: "Aggressive Claims Advocacy",
    subtitle: "We fight for your settlement. Not the insurer's.",
    body: "The real test of an insurance programme is not the policy wording — it is what happens when you make a claim. Insurers employ loss adjusters whose mandate is to protect the insurer's interests; your interests require a dedicated advocate with equal technical depth and commercial leverage. Turboserv's claims management team challenges adjuster positions, contests unreasonable deductions, marshals supporting evidence, and escalates to market arbitration where necessary. Our track record of recovering contested claims on behalf of corporate clients is our most compelling business case — we are measured not by policies sold, but by settlements achieved.",
    accent: "bg-navy-800",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

export default function BrokersEdge() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="brokers-edge"
      className="py-24 md:py-32 bg-slate-50 border-y border-slate-100"
      aria-label="Why Turboserv — The Broker's Edge"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <span className="inline-block px-4 py-1.5 bg-navy-950 text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-6">
            The Broker&apos;s Edge
          </span>
          <h2
            className="text-[clamp(1.6rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Corporations Choose{" "}
            <span className="text-red-600">a Turboserv Mandate</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Insurance is a commodity. Risk management is a discipline. Any underwriter can sell you a policy — only Turboserv embeds as your strategic partner across the entire risk lifecycle, from exposure identification through to settlement.
          </p>
        </motion.div>

        {/* Pillars — 3 column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl p-8 flex flex-col gap-5 overflow-hidden cursor-default ${pillar.accent}`}
            >
              {/* Subtle pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.6) 0%, transparent 50%)`,
                }}
                aria-hidden="true"
              />

              {/* Number + Icon */}
              <div className="relative z-10 flex items-center justify-between">
                <span className={`text-[2.5rem] font-black leading-none opacity-20 ${pillar.textAccent}`}>
                  {pillar.number}
                </span>
                <div className={`w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center ${pillar.textAccent}`}>
                  {pillar.icon}
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3
                  className={`text-lg font-bold leading-tight mb-1.5 ${pillar.textAccent}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-white/60 text-[0.775rem] font-medium italic mb-4">
                  {pillar.subtitle}
                </p>
                <p className={`text-[0.8125rem] leading-[1.8] opacity-80 ${pillar.textAccent}`}>
                  {pillar.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={4}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl border border-slate-200 px-8 py-8 shadow-sm"
        >
          {[
            { value: "20+", label: "Years of market relationships" },
            { value: "₦50Bn+", label: "Corporate assets under management" },
            { value: "98%", label: "Claims satisfaction rate" },
            { value: "A-Rated", label: "Insurer panel only" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[1.875rem] font-black text-navy-950 leading-none mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-slate-500 text-[0.75rem] leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
