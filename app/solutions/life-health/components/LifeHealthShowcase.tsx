"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ============================================================
   ICON COMPONENTS
   ============================================================ */
function HeartPulseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1112 5.006a5 5 0 017.5 7.566z" />
      <path d="M3 12h4l2-3 4 6 2-3h6" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
      <line x1="5" y1="15" x2="9" y2="15" />
    </svg>
  );
}

/* ============================================================
   DATA — 5 Life & Health Covers
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
    title: "Group Life Assurance",
    tagline: "Financial protection for the families behind your workforce.",
    description:
      "Group Life Assurance provides a guaranteed lump-sum death benefit to the families and dependants of employees who pass away during their term of employment — a statutory obligation under Nigerian pension reform legislation and a fundamental pillar of any responsible employer's benefits architecture. Beyond regulatory compliance, a well-structured group life programme signals to current and prospective employees that the organisation values their welfare beyond their productive output, directly strengthening retention rates and your position in competitive talent markets.",
    icon: <ShieldCheckIcon />,
    accentColor: "from-navy-900 to-navy-800",
    features: ["Pension Reform Act compliant", "Multiple of annual salary cover", "24-hour worldwide protection"],
  },
  {
    id: 2,
    title: "Health Insurance / HMO",
    tagline: "Comprehensive healthcare that keeps your workforce performing at peak.",
    description:
      "Corporate Health Insurance — delivered through a curated panel of licensed Health Maintenance Organisations — provides your employees and their registered dependants with access to quality medical care across outpatient, inpatient, dental, optical, and specialist services. In an economy where quality healthcare remains a decisive differentiator in talent acquisition, a robust HMO programme is no longer a discretionary perk — it is a non-negotiable infrastructure investment. Turboserv negotiates plan designs, provider networks, and premium rates that maximise clinical value while keeping your per-capita cost within budget.",
    icon: <HeartPulseIcon />,
    accentColor: "from-red-600 to-red-500",
    features: ["Outpatient & inpatient cover", "Dependant enrolment", "Nationwide hospital network"],
  },
  {
    id: 3,
    title: "Group Personal Accident",
    tagline: "24-hour accident cover that extends beyond the workplace.",
    description:
      "Workplace injuries attract employer liability, but accidents do not confine themselves to office hours or factory floors. Group Personal Accident insurance provides defined benefits for accidental death, permanent total or partial disability, and temporary disability — covering your employees around the clock, worldwide. For organisations with field operatives, drivers, site workers, or frequent travellers, GPA is the essential safety net that fills the gap between your health plan and your life assurance programme, ensuring that a disabling accident does not leave your employee — or your organisation — financially exposed.",
    icon: <UsersIcon />,
    accentColor: "from-slate-700 to-slate-600",
    features: ["24-hour worldwide cover", "Disability benefit scales", "Medical expense reimbursement"],
  },
  {
    id: 4,
    title: "Keyman Insurance",
    tagline: "Protecting the irreplaceable individuals who drive enterprise value.",
    description:
      "Every organisation depends on a handful of individuals whose expertise, relationships, or leadership are so critical that their sudden death or incapacitation would trigger measurable financial harm — lost revenue, collapsed deals, disrupted projects, or a crisis of market confidence. Keyman Insurance provides a capital sum to the company itself upon the death or permanent disability of a designated key person, funding the recruitment of a replacement, bridging revenue gaps, and stabilising stakeholder confidence during the transition. This is not employee benefits — this is balance sheet protection for the intellectual capital that your financial statements never quantify.",
    icon: <KeyIcon />,
    accentColor: "from-navy-950 to-navy-900",
    features: ["Company-owned policy", "Board & C-suite protection", "Revenue gap funding"],
  },
  {
    id: 5,
    title: "Credit Life Assurance",
    tagline: "Securing loan obligations against the ultimate borrower risk.",
    description:
      "When a borrower — whether an individual employee with a staff loan, a director with personal guarantees, or a corporate entity with significant debt exposure — dies or becomes permanently disabled before a loan is fully repaid, the outstanding balance becomes an immediate liability for the estate, the guarantor, or the lending institution. Credit Life Assurance extinguishes the outstanding loan balance upon death or permanent disability, protecting both the borrower's family from inherited debt and the lender from default risk. For organisations that operate staff loan schemes or carry significant credit facilities, credit life is the structural safeguard that prevents a human tragedy from compounding into a financial crisis.",
    icon: <CreditCardIcon />,
    accentColor: "from-red-700 to-red-600",
    features: ["Loan balance settlement", "Staff loan scheme cover", "Lender & borrower protection"],
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
                  <span>Request a quotation</span>
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
export default function LifeHealthShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      ref={ref}
      id="life-health-solutions"
      className="py-24 md:py-32 bg-white"
      aria-label="Corporate life and health insurance solutions"
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
            5 Essential Covers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(1.6rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Corporate Life &amp; Health{" "}
            <span className="text-red-600">Insurance Programme</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            Each product below addresses a distinct dimension of human capital
            risk. Click any card to read a detailed breakdown of what it covers,
            why it matters to your organisation, and how Turboserv structures it
            for maximum impact.
          </motion.p>
        </motion.div>

        {/* Cards — stacked list for readability on this more personal content */}
        <div className="space-y-5">
          {covers.map((cover, i) => (
            <SolutionCard key={cover.id} cover={cover} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
