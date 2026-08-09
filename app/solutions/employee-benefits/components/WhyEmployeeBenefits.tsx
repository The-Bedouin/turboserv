"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    id: "compliance",
    number: "01",
    title: "100% Statutory Compliance",
    subtitle: "PenCom alignment & regulatory penalty prevention.",
    body: "Navigating Nigeria's Pension Reform Act of 2014 and labor requirements demands strict policy compliance. Turboserv ensures your Group Life and pension-linked covers satisfy all National Pension Commission (PenCom) guidelines — preventing regulatory fines and ensuring seamless audit verification.",
    accent: "bg-navy-950",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: "talent-retention",
    number: "02",
    title: "Talent Retention & Care",
    subtitle: "Differentiating your employer brand with premium benefits.",
    body: "In competitive corporate environments, robust benefits programmes directly influence executive recruitment and workforce loyalty. We structure comprehensive healthcare, group life, and disability plans that position your company as an employer of choice.",
    accent: "bg-red-600",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    id: "cost-optimization",
    number: "03",
    title: "Cost & Premium Optimisation",
    subtitle: "Aggressive underwriter negotiation & loss ratio management.",
    body: "Employee benefits represent significant annual budget allocations. Turboserv leverages market scale to negotiate optimal premium rates across top-tier underwriters and HMO providers — delivering enhanced coverage limits without inflating corporate expenditure.",
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

export default function WhyEmployeeBenefits() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="why-employee-benefits"
      className="py-24 md:py-32 bg-slate-50 border-y border-slate-100"
      aria-label="Why choose Turboserv for employee benefits"
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
            The Turboserv Advantage
          </span>
          <h2
            className="text-[clamp(1.6rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Partner With Turboserv{" "}
            <span className="text-red-600">for Employee Benefits</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            From PenCom compliance audits to HMO network negotiation and claim disbursements, Turboserv provides end-to-end advisory for enterprise benefits portfolios.
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
            { value: "100%", label: "PenCom Compliance Guarantee" },
            { value: "15,000+", label: "Employees Covered Nationwide" },
            { value: "24-48 Hours", label: "Fast Claims Settlement" },
            { value: "Top-Tier", label: "HMO & Underwriter Panel" },
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
