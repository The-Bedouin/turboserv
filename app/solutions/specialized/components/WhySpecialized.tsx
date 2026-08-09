"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    id: "sme-resilience",
    number: "01",
    title: "SME & Niche Focus",
    subtitle: "Accessible, scalable risk protection built for growing enterprises.",
    body: "Standard corporate policies often overlook the agile nature and specific cost structures of SMEs and specialized commercial ventures. Turboserv engineers modular insurance products that fit your operational reality — providing robust protection against credit defaults, vehicle liability, and operational interruptions without imposing prohibitive underwriting friction.",
    accent: "bg-navy-950",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: "risk-engineering",
    number: "02",
    title: "Expert Risk Advisory",
    subtitle: "Uncovering hidden liabilities before they impact your balance sheet.",
    body: "Risk management is a continuous strategic discipline. Our senior consultants deliver granular physical hazard audits, contract review frameworks, and customized loss-prevention recommendations — ensuring your executive leadership maintains full clarity over unmitigated operational liabilities.",
    accent: "bg-red-600",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "claims-advocacy",
    number: "03",
    title: "Rigorous Loss Recovery",
    subtitle: "Standing firmly beside your business during complex claim negotiations.",
    body: "When complex claims or third-party liabilities arise, having an authoritative broker advocate makes the difference between prolonged disputes and prompt recovery. Turboserv manages technical loss adjusting, contests unjustified policy exclusions, and accelerates full cash settlements.",
    accent: "bg-navy-800",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
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

export default function WhySpecialized() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="why-specialized"
      className="py-24 md:py-32 bg-slate-50 border-y border-slate-100"
      aria-label="Why choose Turboserv for specialized solutions"
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
            The Turboserv Edge
          </span>
          <h2
            className="text-[clamp(1.6rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Partner With Turboserv{" "}
            <span className="text-red-600">for Specialized Risk</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            From SME micro-coverage to high-exposure valet liability and corporate credit default protection, Turboserv brings deep technical brokerage and strategic advocacy to every mandate.
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
                <span
                  className={`text-[2.5rem] font-black leading-none opacity-20 ${pillar.textAccent}`}
                >
                  {pillar.number}
                </span>
                <div
                  className={`w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center ${pillar.textAccent}`}
                >
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
                <p
                  className={`text-[0.8125rem] leading-[1.8] opacity-80 ${pillar.textAccent}`}
                >
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
            { value: "500+", label: "SMEs & Commercial Clients" },
            { value: "100%", label: "Advisory Integrity" },
            { value: "99%", label: "Claims Advocacy Success" },
            { value: "A-Rated", label: "Underwriting Panel" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[1.875rem] font-black text-navy-950 leading-none mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-slate-500 text-[0.75rem] leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
