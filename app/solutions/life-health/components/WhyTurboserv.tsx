"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    id: "talent-retention",
    number: "01",
    title: "Talent Retention & Attraction",
    subtitle: "Benefits that make top performers stay — and competitors' talent look twice.",
    body: "In a competitive labour market, salary alone no longer wins the talent war. A comprehensive, well-communicated employee benefits package — group life, HMO, and accident cover — is a powerful retention lever that directly reduces attrition costs and positions your employer brand as one that genuinely invests in its people. Turboserv benchmarks your benefits portfolio against market leaders in your sector, identifying gaps that may be silently driving talent to competitors with stronger propositions.",
    accent: "bg-navy-950",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    id: "regulatory-compliance",
    number: "02",
    title: "Regulatory Compliance",
    subtitle: "Meeting statutory obligations before they become enforcement actions.",
    body: "Nigerian pension reform legislation mandates Group Life Assurance for all employees with a minimum benefit of three times annual emolument. The National Health Insurance Authority Act requires employers with a defined number of employees to provide health insurance. Non-compliance exposes your organisation to regulatory sanctions, reputational damage, and potential personal liability for directors. Turboserv ensures your benefits programme meets every statutory requirement while optimising the commercial terms — because compliance should never cost more than it needs to.",
    accent: "bg-red-600",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "cost-optimisation",
    number: "03",
    title: "Premium Cost Optimisation",
    subtitle: "Maximum cover. Minimum waste. Professionally negotiated.",
    body: "Group life and health premiums represent a significant recurring cost line — and without professional brokerage, corporations routinely overpay through unoptimised plan designs, redundant cover layers, and failure to leverage competitive market pricing. Turboserv's benefits specialists conduct actuarial-informed reviews of your demographics, claims history, and utilisation patterns, then negotiate with multiple insurers and HMOs simultaneously to secure the best combination of scope, network quality, and premium. We return savings to your benefit budget — not to the insurer's bottom line.",
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

export default function WhyTurboserv() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="why-turboserv-benefits"
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
            Why Your Benefits Programme{" "}
            <span className="text-red-600">Deserves a Specialist Broker</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Direct-to-insurer placement is convenient — until a claim is
            contested, premiums escalate without explanation, or your HMO
            network quietly drops your employees&apos; preferred hospitals.
            Turboserv sits between your HR team and the market, advocating for
            your interests at every stage.
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
            { value: "15,000+", label: "Employees covered" },
            { value: "30+", label: "HMO & insurer partnerships" },
            { value: "100%", label: "Statutory compliance rate" },
            { value: "48hrs", label: "Average claims turnaround" },
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
