"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ============================================================
   ICON COMPONENTS
   ============================================================ */
function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function PiggyBankIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-3.5c1-.8 2.3-2 2-4.5 0-2.5-.5-6-2-6z" />
      <circle cx="14" cy="9" r="1" />
    </svg>
  );
}

function StethoscopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 0 0 4.5 2h-1a.3.3 0 0 0-.3.3v7.4a4.5 4.5 0 0 0 9 0V2.3a.3.3 0 0 0-.3-.3h-1a.3.3 0 0 0-.3.3v7.4a2.5 2.5 0 0 1-5 0V2.3z" />
      <path d="M8 14v4a4 4 0 0 0 8 0v-3" />
      <circle cx="18" cy="12" r="2" />
    </svg>
  );
}

function AwardRibbonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function GlobeHeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8a2.5 2.5 0 0 0-2.5 2.5c0 2 2.5 4.5 2.5 4.5s2.5-2.5 2.5-4.5A2.5 2.5 0 0 0 12 8z" />
    </svg>
  );
}

/* ============================================================
   DATA — 5 Employee Benefits Covers
   ============================================================ */
interface Cover {
  id: number;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  features: string[];
}

const covers: Cover[] = [
  {
    id: 1,
    title: "Statutory Group Life",
    tagline: "Guaranteed death-in-service protection meeting strict PenCom mandates.",
    description:
      "Under the Pension Reform Act of 2014, corporate employers in Nigeria are legally required to maintain a Group Life policy providing a minimum benefit of three times an employee's total annual emolument. Turboserv structures fully compliant, cost-effective Group Life programmes that guarantee swift capital disbursements to surviving families, shielding your enterprise from statutory penalties and demonstrating genuine corporate care.",
    icon: <ShieldCheckIcon />,
    accentColor: "from-navy-900 to-navy-800",
    features: ["Pension Reform Act 2014 compliant", "3x annual emolument multiplier", "24-hour global death-in-service cover"],
  },
  {
    id: 2,
    title: "Pension-related Insurance",
    tagline: "Securing retirement assets, annuity guarantees, and post-employment stability.",
    description:
      "Corporate pension schemes require robust risk-mitigation structures to protect retirement funds against premature employee invalidity, permanent disability, and mortality events prior to retirement age. We structure comprehensive pension-linked insurance solutions — including group personal accident riders, deferred annuities, and invalidity indemnities — that integrate seamlessly with your PFA contributions and ensure employee retirement security.",
    icon: <PiggyBankIcon />,
    accentColor: "from-red-600 to-red-500",
    features: ["PFA contribution integration", "Disability & invalidity riders", "Annuity & retirement protection"],
  },
  {
    id: 3,
    title: "Comprehensive Medical Insurance",
    tagline: "Enterprise healthcare coverage delivering nationwide hospital access and wellness management.",
    description:
      "High-performing corporate entities rely on comprehensive medical insurance to maintain workforce health, lower absenteeism, and attract executive-level talent. In partnership with premier Health Maintenance Organisations (HMOs), Turboserv tailors medical plans encompassing inpatient care, specialist consultations, chronic disease management, optical, dental, and emergency evacuation services across tiered nationwide provider networks.",
    icon: <StethoscopeIcon />,
    accentColor: "from-slate-700 to-slate-600",
    features: ["Inpatient & outpatient HMO cover", "Dependant extension options", "Tiered hospital network access"],
  },
  {
    id: 4,
    title: "Gratuity & Terminal Benefits Insurance",
    tagline: "Protecting end-of-service liabilities and contractual severance obligations.",
    description:
      "End-of-service gratuity and severance obligations represent substantial long-term financial liabilities for corporate balance sheets. Turboserv assists corporate finance and HR teams in ring-fencing gratuity liabilities through insured fund management and group payout policies, eliminating unexpected cash flow strain when senior personnel retire or transition out of the business.",
    icon: <AwardRibbonIcon />,
    accentColor: "from-navy-950 to-navy-900",
    features: ["Liability ring-fencing", "Insured fund management", "Balance sheet protection"],
  },
  {
    id: 5,
    title: "Executive Health & International Care",
    tagline: "Offshore medical coverage and specialized healthcare for C-suite leadership.",
    description:
      "C-suite executives and key decision-makers require global medical coverage that extends beyond domestic hospital networks. We structure bespoke international health insurance plans featuring global emergency medical evacuation, specialist treatment in top-tier international facilities, and comprehensive executive health screenings.",
    icon: <GlobeHeartIcon />,
    accentColor: "from-red-700 to-red-600",
    features: ["Offshore medical cover", "Global emergency evacuation", "Executive wellness screenings"],
  },
];

/* ============================================================
   SOLUTION CARD
   ============================================================ */
function SolutionCard({ cover, index }: { cover: Cover; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group relative"
    >
      <div
        className={`relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer
          ${expanded
            ? "shadow-xl shadow-slate-200/80 border border-red-200/60"
            : "shadow-md shadow-slate-100/60 border border-slate-200 hover:shadow-lg hover:border-slate-300"
          }`}
        onClick={() => setExpanded(!expanded)}
        role="button"
        aria-expanded={expanded}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setExpanded(!expanded)}
      >
        {/* Top accent strip with gradient */}
        <div className={`h-1 bg-gradient-to-r ${cover.accentColor}`} />

        {/* Card body */}
        <div className="bg-white p-7 md:p-8">
          {/* Header row */}
          <div className="flex items-start gap-5 mb-5">
            {/* Icon container */}
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cover.accentColor} flex items-center justify-center flex-shrink-0 text-white shadow-md transition-transform duration-300 ${
                expanded ? "scale-105" : "group-hover:scale-105"
              }`}
            >
              {cover.icon}
            </div>

            <div className="flex-1 min-w-0">
              <h3
                className="text-navy-950 text-[1.0625rem] font-bold leading-tight mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cover.title}
              </h3>
              <p className="text-slate-500 text-[0.8125rem] italic leading-relaxed">
                {cover.tagline}
              </p>
            </div>

            {/* Expand chevron */}
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-50 transition-colors"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-slate-500 group-hover:text-red-600 transition-colors"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* Feature pills — always visible */}
          <div className="flex flex-wrap gap-2 mb-4">
            {cover.features.map((feature) => (
              <span
                key={feature}
                className="inline-block px-3 py-1 bg-slate-50 border border-slate-100 text-[0.7rem] font-semibold tracking-wide text-slate-500 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Expandable full description */}
          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100 pt-5 mt-1">
              <p className="text-slate-600 text-[0.8125rem] leading-[1.85]">
                {cover.description}
              </p>
              <div className="mt-5">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-red-600 hover:text-red-500 transition-colors group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Request a benefits proposal</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
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
              </div>
            </div>
          </motion.div>

          {/* Read more cue when collapsed */}
          {!expanded && (
            <div className="flex items-center gap-1.5">
              <span className="text-[0.7rem] font-semibold text-red-600 uppercase tracking-wide">
                Learn more
              </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                className="text-red-600"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ============================================================
   MAIN EXPORT
   ============================================================ */
export default function EmployeeBenefitsShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      ref={ref}
      id="employee-benefits-solutions"
      className="py-24 md:py-32 bg-white"
      aria-label="Corporate employee benefits solutions"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section intro */}
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block px-4 py-1.5 bg-red-50 text-red-700 border border-red-100 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-6"
          >
            Statutory &amp; Voluntary Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(1.6rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Employee Benefits &amp;{" "}
            <span className="text-red-600">Pension Scheme Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            Explore our core benefits portfolio engineered to fulfill PenCom regulations, enhance employee wellbeing, and safeguard corporate liquidity. Click any card below to expand the detailed solution breakdown.
          </motion.p>
        </motion.div>

        {/* Cards — stacked list layout */}
        <div className="space-y-5">
          {covers.map((cover, i) => (
            <SolutionCard key={cover.id} cover={cover} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
