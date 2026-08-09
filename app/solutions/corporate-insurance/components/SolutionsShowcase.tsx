"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ============================================================
   ICON COMPONENTS
   ============================================================ */
function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.5-2-2.5-2.5-4-.5 1.5-2.5 2.5-2.5 4z" />
      <path d="M12 2c1.8 3 4.5 4.5 4.5 9a6.5 6.5 0 1 1-13 0c0-4.5 2.7-6 4.5-9 0 2.5 2 4 4 0z" />
    </svg>
  );
}

function ShipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 6" />
      <path d="M12 10V4" />
      <path d="M8 8h8" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function HardHatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M4 15a8 8 0 0 1 16 0" />
    </svg>
  );
}

function CraneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M6 21V3l13 7H6" />
      <path d="M19 10v7" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.1-2.1.7l-.7.7 5.4 3.9-3.2 3.2-2.1-.7c-.4-.1-.9 0-1.2.3l-.5.5 3.5 3.5 3.5 3.5.5-.5c.3-.3.4-.8.3-1.2l-.7-2.1 3.2-3.2 3.9 5.4.7-.7c.6-.5.9-1.3.7-2.1z" />
    </svg>
  );
}

function OilRigIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20" />
      <path d="M7 22l5-15 5 15" />
      <path d="M8.5 13h7" />
      <path d="M10 8h4" />
    </svg>
  );
}

function BriefcaseShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M12 11v4" />
    </svg>
  );
}

function UsersShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ClockAlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ============================================================
   DATA — 11 Corporate Insurance Covers
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
    title: "Fire & Special Perils",
    tagline: "Total property indemnification against fire, explosion, storm, flood, and physical destruction.",
    description:
      "Physical assets represent the tangible backbone of enterprise operations. Fire & Special Perils insurance protects commercial properties, manufacturing facilities, warehouses, and stored inventory against devastating loss caused by fire, lightning, explosion, storm, flood, aircraft damage, and civil commotion. Turboserv structures policy valuations to ensure zero under-insurance penalties, securing full replacement value when disaster strikes.",
    icon: <FlameIcon />,
    accentColor: "from-red-600 to-red-500",
    features: ["Commercial property & inventory cover", "Full replacement value valuation", "Natural disaster & storm extension"],
  },
  {
    id: 2,
    title: "Marine Insurance",
    tagline: "Marine cargo, ocean freight, and transit indemnification for global import-export operations.",
    description:
      "Global supply chains face sea perils, piracy, container damage, and port delays during international transit. Our Marine Cargo policies protect raw materials, machinery, and finished goods shipped via sea, air, or multimodal routes against physical damage, jettison, or total loss. We structure Institute Cargo Clauses (ICC 'A', 'B', or 'C') tailored to your import-export contracts and letter-of-credit requirements.",
    icon: <ShipIcon />,
    accentColor: "from-navy-900 to-navy-800",
    features: ["Institute Cargo Clauses (ICC A/B/C)", "Multimodal shipment protection", "Letter-of-credit bank compliance"],
  },
  {
    id: 3,
    title: "Goods-in-Transit",
    tagline: "Road and inland freight protection for commercial inventory in motion across Africa.",
    description:
      "In-country logistics and overland cargo transport expose inventory to collision, overturning, theft, and highway robbery. Goods-in-Transit insurance indemnifies your commercial freight while being moved by owned fleets or third-party haulers nationwide. Turboserv provides continuous transit cover with flexible open-cover policies that automatically protect all dispatched shipments.",
    icon: <TruckIcon />,
    accentColor: "from-slate-700 to-slate-600",
    features: ["Annual open-cover policies", "Third-party hauler indemnity", "Nationwide cargo risk protection"],
  },
  {
    id: 4,
    title: "Engineering Insurance",
    tagline: "Technical risk protection for machinery breakdown, electrical failure, and boiler explosion.",
    description:
      "Modern industrial and commercial operations rely heavily on complex mechanical, electrical, and electronic installations. Engineering Insurance provides specialized cover for sudden internal machinery breakdown, electrical short-circuiting, boiler explosion, and computer hardware destruction. We ensure swift technical loss adjusting and repair authorizations to minimize expensive plant outages.",
    icon: <GearIcon />,
    accentColor: "from-navy-950 to-navy-900",
    features: ["Machinery breakdown cover", "Electronic equipment protection", "Boiler & pressure vessel indemnity"],
  },
  {
    id: 5,
    title: "Contractors' All Risks (CAR)",
    tagline: "Comprehensive civil engineering and building construction site risk protection.",
    description:
      "Large-scale civil engineering, real estate, and infrastructure projects carry immense site risks. Contractors' All Risks insurance protects principal developers and contractors against accidental physical damage to contract works, temporary site structures, and construction materials, while incorporating robust third-party legal liability cover for surrounding properties and personnel.",
    icon: <HardHatIcon />,
    accentColor: "from-red-700 to-red-600",
    features: ["Contract works & site materials", "Third-party liability incorporation", "Testing & commissioning riders"],
  },
  {
    id: 6,
    title: "Plant All Risks (PAR)",
    tagline: "Operational and transit cover for heavy construction machinery and mobile equipment.",
    description:
      "Heavy construction equipment, cranes, excavators, and generators represent high-capital investments operating in rugged environments. Plant All Risks insurance covers mobile plant and machinery against accidental damage, overturning, theft, and vandalism whether operating on-site, idling in storage yards, or being transported between project locations.",
    icon: <CraneIcon />,
    accentColor: "from-navy-900 to-navy-800",
    features: ["Mobile plant & crane cover", "On-site & transit damage protection", "Hired-in plant liability"],
  },
  {
    id: 7,
    title: "Aviation & Marine Hull",
    tagline: "Specialized hull indemnification, aircraft airworthiness cover, and vessel liability.",
    description:
      "Corporate aircraft, commercial aviation fleets, sea-going vessels, and offshore support craft require ultra-specialized hull and machinery risk underwriting. Turboserv structures international Aviation & Marine Hull covers that protect hull physical integrity, engine breakdown, war risks, passenger liability, and third-party aviation/maritime legal exposures.",
    icon: <PlaneIcon />,
    accentColor: "from-red-600 to-red-500",
    features: ["Aircraft & vessel hull indemnity", "War & piracy risk extensions", "Passenger & third-party liability"],
  },
  {
    id: 8,
    title: "Oil & Gas Energy Covers",
    tagline: "Upstream, midstream, and downstream energy sector asset & liability protection.",
    description:
      "Operating within Africa’s oil and gas sector demands sophisticated energy insurance capable of handling massive capital exposures and strict regulatory mandates. We negotiate comprehensive energy packages covering offshore platforms, drilling rigs, refineries, pipelines, operator extra expense (well control), pollution liability, and energy asset damage across upstream, midstream, and downstream operations.",
    icon: <OilRigIcon />,
    accentColor: "from-navy-950 to-navy-900",
    features: ["Upstream & downstream asset cover", "Operator extra expense (well control)", "Environmental pollution liability"],
  },
  {
    id: 9,
    title: "Professional Indemnity",
    tagline: "Safeguarding professional firms against breach of duty, negligence, and legal defense costs.",
    description:
      "Professional service providers — including engineering consultants, architects, financial advisers, legal practices, and IT firms — face growing exposure to client lawsuits alleging breach of professional duty, errors, or omissions. Professional Indemnity insurance covers legal defense costs, settlements, and court awards, preserving your firm’s balance sheet and reputation.",
    icon: <BriefcaseShieldIcon />,
    accentColor: "from-slate-700 to-slate-600",
    features: ["Negligence & error defence", "Legal representation costs", "Contractual liability coverage"],
  },
  {
    id: 10,
    title: "Public & Product Liability",
    tagline: "Defence against third-party bodily injury, property damage, and product defect claims.",
    description:
      "Commercial operations and manufactured goods carry inherent third-party exposures. Public & Product Liability insurance protects your business against financial claims arising from third-party bodily injury, accidental property damage on your premises, or injuries caused by defective products distributed in the marketplace, including legal defense fees and statutory awards.",
    icon: <UsersShieldIcon />,
    accentColor: "from-red-700 to-red-600",
    features: ["On-premises injury indemnity", "Product defect liability cover", "Court award & legal fee coverage"],
  },
  {
    id: 11,
    title: "Business Interruption",
    tagline: "Consequential loss and gross profit indemnification during forced operational shutdowns.",
    description:
      "Physical property damage is often compounded by loss of revenue, ongoing fixed overheads, and extra operational expenses during repair periods. Business Interruption insurance replaces lost gross profit, covers key employee payroll, and reimburses temporary relocation costs following an insured fire, machinery breakdown, or natural disaster event.",
    icon: <ClockAlertIcon />,
    accentColor: "from-navy-900 to-navy-800",
    features: ["Gross profit loss replacement", "Key employee payroll preservation", "Increased cost of working indemnity"],
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
        delay: index * 0.08,
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
                  <span>Request a corporate quotation</span>
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
export default function SolutionsShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      ref={ref}
      id="corporate-solutions"
      className="py-24 md:py-32 bg-white"
      aria-label="Corporate insurance solutions portfolio"
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
            11 Core Covers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(1.6rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Corporate Insurance &amp;{" "}
            <span className="text-red-600">Enterprise Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            Explore our 11 institutional covers designed to protect corporate assets, engineering projects, international trade, energy infrastructure, and legal liabilities. Click any card below to expand the detailed coverage breakdown.
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
