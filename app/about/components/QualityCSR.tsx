"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   ICONS — homepage-style abstract geometric SVGs
   ───────────────────────────────────────────────────────────── */
const IconQualityTab = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#071220" />
    <circle cx="12" cy="10" r="4" stroke="white" strokeWidth="1" fill="#1a3a5c" />
    <path d="M9 16l3-1.5 3 1.5v3l-3-1.5-3 1.5v-3z" fill="#dc2626" />
  </svg>
);

const IconCSRTab = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#071220" />
    <path d="M12 16.5c-3-2.5-5-4.5-5-6.5a3 3 0 015-2.2A3 3 0 0117 10c0 2-2 4-5 6.5z" fill="#dc2626" stroke="white" strokeWidth="0.8" />
  </svg>
);

const IconCheckRed = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="4" fill="#071220" />
    <path d="M5 9l3 3 5-5" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconAwareness = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="8" fill="#071220" />
    <path d="M10 13a2 2 0 012-2h5v14h-5a2 2 0 01-2-2V13z" fill="#1a3a5c" stroke="white" strokeWidth="0.8" />
    <path d="M26 13a2 2 0 00-2-2h-5v14h5a2 2 0 002-2V13z" fill="#1a3a5c" stroke="white" strokeWidth="0.8" />
    <circle cx="18" cy="18" r="2" fill="#dc2626" />
  </svg>
);

const IconCommunity = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="8" fill="#071220" />
    <path d="M9 14l9-5 9 5v2H9v-2z" fill="#1a3a5c" stroke="white" strokeWidth="0.8" />
    <rect x="11" y="16" width="2" height="9" fill="white" fillOpacity="0.5" />
    <rect x="17" y="16" width="2" height="9" fill="#dc2626" />
    <rect x="23" y="16" width="2" height="9" fill="white" fillOpacity="0.5" />
    <rect x="9" y="25" width="18" height="2" rx="0.5" fill="#1a3a5c" />
  </svg>
);

const IconYouth = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="8" fill="#071220" />
    <path d="M18 11l10 5-10 5-10-5 10-5z" fill="#1a3a5c" stroke="white" strokeWidth="0.8" />
    <path d="M12 18v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" stroke="white" strokeWidth="1" strokeOpacity="0.6" fill="none" />
    <circle cx="26" cy="18" r="1.5" fill="#dc2626" />
  </svg>
);

const IconEducation = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="8" fill="#071220" />
    <path d="M18 24.5c-4.5-3.5-7.5-6-7.5-9a4.5 4.5 0 017.5-3.4 4.5 4.5 0 017.5 3.4c0 3-3 5.5-7.5 9z" fill="#dc2626" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
  </svg>
);

const IconEthical = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="8" fill="#071220" />
    <path d="M18 10v16M11 14h14" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" strokeLinecap="round" />
    <path d="M11 14l-3 6h6l-3-6zM25 14l-3 6h6l-3-6z" fill="#1a3a5c" stroke="#dc2626" strokeWidth="0.8" />
    <rect x="15" y="25" width="6" height="2" rx="1" fill="#dc2626" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const tabContent = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

const qualityItems = [
  "Continuous enhancement of service delivery across all client touchpoints",
  "Adoption of cutting-edge insurance technology for seamless operations",
  "Alignment with global quality benchmarks and best practices",
  "Regular training and professional development for our team",
  "Systematic client feedback integration into service improvement",
];

const csrPillars: { icon: React.ReactNode; title: string; desc: string }[] = [
  { icon: <IconAwareness />, title: "Insurance Awareness", desc: "Educating communities and businesses on the value of adequate insurance coverage." },
  { icon: <IconCommunity />, title: "Community Development", desc: "Investing in local infrastructure and sustainable community projects across Nigeria." },
  { icon: <IconYouth />, title: "Youth Empowerment", desc: "Sponsoring internship programs and mentorship opportunities for young professionals." },
  { icon: <IconEducation />, title: "Educational Support", desc: "Providing scholarships and educational materials to underprivileged students." },
  { icon: <IconEthical />, title: "Ethical Business Practices", desc: "Championing fair and transparent business standards across the insurance industry." },
];

const tabs = [
  { id: "quality", label: "Our Quality Standard", icon: <IconQualityTab /> },
  { id: "csr", label: "Social Responsibility", icon: <IconCSRTab /> },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function QualityCSR() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [activeTab, setActiveTab] = useState<TabId>("quality");

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white" id="quality-csr">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-red-500/10 text-red-600 border border-red-500/20 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-6"
            variants={fadeUp}
            custom={0}
          >
            Standards &amp; Responsibility
          </motion.span>
          <motion.h2
            className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-950"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
            custom={1}
          >
            Quality Assurance &{" "}
            <span className="text-red-500">Corporate Social Responsibility</span>
          </motion.h2>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          className="flex justify-center mb-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
        >
          <div className="inline-flex bg-white border border-slate-200 rounded-full p-1.5 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-slate-500 hover:text-navy-950"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    className="absolute inset-0 bg-navy-950 rounded-full shadow-md"
                    layoutId="activeTab"
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] as const }}
                  />
                )}
                <span className="relative z-10 flex items-center">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab content */}
        <motion.div
          className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[320px]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={3}
        >
          <AnimatePresence mode="wait">
            {activeTab === "quality" ? (
              <motion.div key="quality" {...tabContent}>
                <h3
                  className="text-navy-950 text-xl font-semibold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Committed to Continuous Excellence
                </h3>
                <p className="text-slate-500 text-[0.9375rem] leading-relaxed mb-8">
                  At Turboserv, quality is not an afterthought&nbsp;&mdash;
                  it is embedded into every process. We are dedicated to
                  continuous service enhancement, technological innovation, and
                  alignment with global quality benchmarks.
                </p>
                <ul className="space-y-4">
                  {qualityItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5"><IconCheckRed /></span>
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.div key="csr" {...tabContent}>
                <h3
                  className="text-navy-950 text-xl font-semibold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Making a Meaningful Impact
                </h3>
                <p className="text-slate-500 text-[0.9375rem] leading-relaxed mb-8">
                  We believe that corporate success carries a responsibility to
                  give back. Our CSR initiatives focus on five key pillars that
                  drive positive change across Nigerian communities.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {csrPillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-navy-100 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex-shrink-0">
                          {pillar.icon}
                        </div>
                        <h4 className="text-navy-950 text-sm font-semibold">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed pl-12">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
