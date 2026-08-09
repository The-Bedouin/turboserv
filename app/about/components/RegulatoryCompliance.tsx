"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   ICONS — homepage-style abstract geometric SVGs
   ───────────────────────────────────────────────────────────── */
const IconNAICOM = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M10 15l10-6 10 6v2H10v-2z" fill="#1a3a5c" stroke="white" strokeWidth="0.8" />
    <rect x="12" y="17" width="2.5" height="10" fill="white" fillOpacity="0.5" />
    <rect x="18.75" y="17" width="2.5" height="10" fill="#dc2626" />
    <rect x="25.5" y="17" width="2.5" height="10" fill="white" fillOpacity="0.5" />
    <rect x="9" y="27" width="22" height="2.5" rx="0.5" fill="#1a3a5c" />
  </svg>
);

const IconNCRIB = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <rect x="11" y="10" width="18" height="20" rx="2" fill="#1a3a5c" stroke="white" strokeWidth="0.8" />
    <circle cx="20" cy="20" r="5" stroke="#dc2626" strokeWidth="1.2" fill="#071220" />
    <path d="M18.5 20l1 1 2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCIIN = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M20 10v18M12 15h16" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" strokeLinecap="round" />
    <path d="M12 15l-3 7h6l-3-7zM28 15l-3 7h6l-3-7z" fill="#1a3a5c" stroke="#dc2626" strokeWidth="1" />
    <rect x="16" y="28" width="8" height="2" rx="1" fill="#dc2626" />
  </svg>
);

const IconNIA = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M20 9l9 4v7c0 5.5-4.2 10.5-9 12-4.8-1.5-9-6.5-9-12v-7l9-4z" fill="#1a3a5c" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
    <path d="M18 20l2 2 4-4" stroke="#dc2626" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const affiliations: { name: string; icon: React.ReactNode }[] = [
  { name: "National Insurance Commission (NAICOM)", icon: <IconNAICOM /> },
  { name: "Nigerian Council of Registered Insurance Brokers (NCRIB)", icon: <IconNCRIB /> },
  { name: "Chartered Insurance Institute of Nigeria (CIIN)", icon: <IconCIIN /> },
  { name: "Nigerian Insurers Association (NIA)", icon: <IconNIA /> },
];

export default function RegulatoryCompliance() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white" id="regulatory">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-navy-50 text-navy-800 border border-navy-100 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-6"
            variants={fadeUp}
            custom={0}
          >
            Compliance
          </motion.span>
          <motion.h2
            className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-950 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
            custom={1}
          >
            NAICOM Accredited &{" "}
            <span className="text-red-500">Regulated Insurance Brokers</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 text-[0.9375rem] leading-relaxed max-w-2xl mx-auto"
            variants={fadeUp}
            custom={2}
          >
            Turboserv operates in full compliance with directives issued by the
            National Insurance Commission (NAICOM), ensuring the highest
            standards of regulatory adherence and client protection.
          </motion.p>
        </motion.div>

        {/* Affiliations Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {affiliations.map((item, idx) => (
            <motion.div
              key={item.name}
              className="bg-slate-50 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-navy-200 transition-all duration-300"
              variants={fadeUp}
              custom={3 + idx * 0.3}
            >
              <div className="mb-1">
                {item.icon}
              </div>
              <p className="text-navy-950 text-xs font-semibold leading-snug">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Box */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={5}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-navy-950" aria-hidden="true">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
            <div
              className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.08]"
              style={{
                background: "radial-gradient(circle, rgba(220,38,38,0.5) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 px-8 py-14 md:px-16 md:py-20 text-center">
            <h3
              className="text-[clamp(1.4rem,3vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Partner with a broker that puts
              <br />
              <span className="text-red-500">your interests first.</span>
            </h3>
            <p className="text-slate-400 text-[0.9375rem] leading-relaxed max-w-lg mx-auto mb-8">
              Discover how Turboserv&apos;s expertise can safeguard your
              business. Schedule a complimentary risk assessment with our
              senior consultants today.
            </p>
            <a
              href="#contact"
              id="about-cta-risk-audit"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 rounded-full text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 active:scale-[0.98]"
            >
              <svg className="w-4 h-4 text-white/90" viewBox="0 0 20 20" fill="none">
                <rect x="4" y="3" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 8h6M7 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Request a Free Risk Audit</span>
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
