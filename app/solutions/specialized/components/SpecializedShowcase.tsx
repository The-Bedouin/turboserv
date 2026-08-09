"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ============================================================
   ICON COMPONENTS
   ============================================================ */
function StorefrontIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ShieldDollarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v8M9.5 10h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 000 3h5" />
    </svg>
  );
}

function CarKeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M6 15h.01M18 15h.01M8 10h8" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function BriefcaseCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

/* ============================================================
   DATA — 5 Specialized Solutions Covers
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
    title: "Microinsurance for SMEs",
    tagline: "Low-barrier, high-impact asset & revenue protection for growing enterprises.",
    description:
      "Small and medium-sized enterprises are the lifeblood of commercial activity, yet traditional insurance policies often impose cost and operational barriers that leave them vulnerable to sudden shocks. Turboserv's SME Microinsurance offers streamlined, modular coverage designed to safeguard inventory, machinery, and daily revenue against fire, theft, flooding, and operational downtime. By structuring affordable premiums with fast-track digital claims processing, we ensure growing businesses build long-term resilience without tying up essential working capital.",
    icon: <StorefrontIcon />,
    accentColor: "from-red-600 to-red-500",
    features: ["Streamlined underwriting", "Flexible premium payment", "Fast-track claims payout"],
  },
  {
    id: 2,
    title: "Loan Protection Insurance",
    tagline: "Shielding commercial credit facilities and borrower balance sheets.",
    description:
      "Unforeseen debt defaults due to key executive incapacity, property destruction, or macroeconomic disruption can compromise bank relationships and trigger forced collateral liquidations. Loan Protection Insurance indemnifies lenders and borrowing entities against catastrophic credit facility defaults by guaranteeing principal and interest repayments during covered loss events. Turboserv collaborates directly with financial institutions to embed customized debt protection clauses, maintaining enterprise creditworthiness and protecting corporate assets.",
    icon: <ShieldDollarIcon />,
    accentColor: "from-navy-900 to-navy-800",
    features: ["Credit default indemnity", "Collateral preservation", "Bank facility alignment"],
  },
  {
    id: 3,
    title: "Car Park & Valet Liability",
    tagline: "Comprehensive third-party liability cover for commercial facilities & valet operations.",
    description:
      "Facility managers, hospitality venues, retail centers, and commercial property operators face substantial legal exposure whenever customer vehicles are parked, moved, or stored on their premises. Car Park & Valet Liability insurance covers third-party property damage, vehicle theft, vandalism, and personal injury claims occurring within managed parking zones or during valet transport. Turboserv constructs broad-indemnity policies that mitigate legal exposure and safeguard corporate brand reputation.",
    icon: <CarKeyIcon />,
    accentColor: "from-slate-700 to-slate-600",
    features: ["Valet transport indemnity", "On-site vehicle damage cover", "Third-party liability defence"],
  },
  {
    id: 4,
    title: "Risk Management Consultancy",
    tagline: "Strategic risk engineering, exposure audits, and loss control advisory.",
    description:
      "Proactive risk management goes far beyond buying an insurance policy — it requires rigorous identification, quantification, and engineering out of operational liabilities before losses occur. Our risk management consultants conduct exhaustive physical site audits, supply chain vulnerability studies, and contractual risk reviews to deliver actionable risk registers and mitigation protocols. This structured advisory enables executive boards to optimize insurable values, reduce premium overheads, and demonstrate institutional governance compliance.",
    icon: <CompassIcon />,
    accentColor: "from-navy-950 to-navy-900",
    features: ["On-site hazard audits", "Contractual risk reviews", "Loss prevention frameworks"],
  },
  {
    id: 5,
    title: "Claims Administration & Advisory",
    tagline: "Dedicated technical claims advocacy to maximize settlement recoveries.",
    description:
      "Navigating complex corporate insurance claims requires technical loss adjusting expertise, legal precision, and resolute market advocacy to overcome insurer pushback. Turboserv’s specialized claims administration team manages the complete claims lifecycle — from loss notification and evidence gathering to loss adjuster negotiations and final settlement recovery. We act exclusively as your enterprise advocate, ensuring zero policy ambiguities and securing full settlement value in the shortest possible timeframe.",
    icon: <BriefcaseCheckIcon />,
    accentColor: "from-red-700 to-red-600",
    features: ["End-to-end loss representation", "Loss adjuster negotiation", "Dispute resolution"],
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
                  <span>Request a specialized consultation</span>
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
export default function SpecializedShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      ref={ref}
      id="specialized-solutions"
      className="py-24 md:py-32 bg-white"
      aria-label="Specialized and SME insurance solutions"
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
            Specialized &amp; Niche Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(1.6rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Niche Solutions &amp;{" "}
            <span className="text-red-600">Risk Advisory</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            Explore our specialized offerings tailored to unique operational demands, credit facilities, SME resilience, and loss administration. Click any card below to expand its full risk breakdown.
          </motion.p>
        </motion.div>

        {/* Cards — stacked list layout matching Life & Health */}
        <div className="space-y-5">
          {covers.map((cover, i) => (
            <SolutionCard key={cover.id} cover={cover} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
