"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    id: "claims-advocacy",
    number: "01",
    title: "Rapid Repairs & Advocacy",
    subtitle: "Direct OEM dealership authorization & hassle-free claim settlement.",
    body: "Vehicle downtime costs your enterprise money every hour a car sits in an auto shop. Turboserv expedites loss adjusting, secures repair authorizations with certified OEM dealership workshops, and ensures genuine replacement parts are fitted without delay.",
    accent: "bg-navy-950",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: "niid-fleet-admin",
    number: "02",
    title: "NIID & Fleet Admin",
    subtitle: "Automated road compliance & instant digital certificate issuance.",
    body: "Eliminate law enforcement harassment and administrative friction across your commercial fleet. We handle automated National Insurance Insurance Database (NIID) registrations, instant digital certificate issuance, and frictionless vehicle mid-term additions or deletions.",
    accent: "bg-red-600",
    textAccent: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    id: "fleet-rate-optimization",
    number: "03",
    title: "Fleet Premium Optimisation",
    subtitle: "Experience-rated discounts & telematics loss-control advisory.",
    body: "Large corporate fleets command significant negotiating leverage. We structure experience-rated fleet policies with no-claims discounts, telematics driver score tracking, and structured risk pooling to minimize annual motor premium expenditure.",
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

export default function WhyMotor() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="why-motor"
      className="py-24 md:py-32 bg-slate-50 border-y border-slate-100"
      aria-label="Why choose Turboserv for motor insurance"
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
            <span className="text-red-600">for Motor Insurance</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            From rapid OEM repairs to NIID digital verification and fleet loss control, Turboserv delivers unmatched motor brokerage efficiency and advocacy.
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
            { value: "2,500+", label: "Vehicles Managed Nationwide" },
            { value: "100%", label: "NIID Compliance Verification" },
            { value: "48-Hour", label: "Average Repair Authorization" },
            { value: "OEM Direct", label: "Workshop Network Access" },
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
