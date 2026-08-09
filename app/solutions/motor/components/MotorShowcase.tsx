"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ============================================================
   ICON COMPONENTS
   ============================================================ */
function CarShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 12 10s-6.7.6-8.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M5 10l2-5h10l2 5" />
    </svg>
  );
}

function ShieldAlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function FleetTruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function PackageTransitIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function CrownCarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 18H3c-.6 0-1-.4-1-1v-3c0-.9.7-1.7 1.5-1.9C5.3 11.6 8 11 12 11s6.7.6 8.5 1.1c.8.2 1.5 1 1.5 1.9v3c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M2 4l3 2 3-3 4 3 4-3 3 3 3-2v3H2V4z" />
    </svg>
  );
}

/* ============================================================
   DATA — 5 Motor Insurance Covers
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
    title: "Comprehensive Motor Insurance",
    tagline: "Full-spectrum vehicular protection covering accidental damage, theft, fire, and liabilities.",
    description:
      "Corporate vehicular assets are exposed to daily operational hazards on African roads. Turboserv structures Comprehensive Motor Insurance policies that cover own-vehicle accidental damage, total loss, fire destruction, theft, and unlimited third-party bodily injury and property damage liabilities. We secure rapid repair approvals with authorized dealership workshops and guarantee genuine OEM replacement parts to keep your executive and logistics fleets moving.",
    icon: <CarShieldIcon />,
    accentColor: "from-red-600 to-red-500",
    features: ["Own-damage & theft cover", "OEM dealership repair authorization", "Unlimited third-party liability"],
  },
  {
    id: 2,
    title: "Third Party Only & Third Party Fire/Theft",
    tagline: "Statutory legal compliance and targeted fire/theft protection for commercial vehicles.",
    description:
      "For commercial fleets requiring essential risk mitigation or statutory compliance under the Insurance Act, Third Party coverage protects your business against legal liabilities arising from third-party property damage, bodily injury, or death caused by your vehicles. Our Third Party Fire & Theft extensions add vital protection against total loss caused by vehicle arson or theft, delivering cost-effective risk transfer for utility and operational vehicles.",
    icon: <ShieldAlertIcon />,
    accentColor: "from-navy-900 to-navy-800",
    features: ["Statutory NIID registration", "Third-party property & injury indemnity", "Arson & theft extensions"],
  },
  {
    id: 3,
    title: "Corporate Fleet Management & Insurance",
    tagline: "Tailored fleet risk pooling, telematics integration, and centralized premium management.",
    description:
      "Managing insurance across large commercial fleets requires specialized group underwriting, administrative centralization, and active loss control. Turboserv consolidates corporate vehicle portfolios into single-policy fleet structures with flexible vehicle additions/deletions, experience-rated premium discounts, telematics data integration, and automated NIID (National Insurance Insurance Database) certificate registration for seamless road compliance.",
    icon: <FleetTruckIcon />,
    accentColor: "from-slate-700 to-slate-600",
    features: ["Single-policy fleet structure", "Telematics & loss control integration", "Volume premium discounts"],
  },
  {
    id: 4,
    title: "Goods-in-Transit Motor Rider",
    tagline: "End-to-end cargo and inventory protection for goods transported by road.",
    description:
      "Vehicular collisions or hijacking during transport can lead to devastating inventory losses and supply chain disruption. We integrate specialized Goods-in-Transit motor riders into your commercial fleet policy, indemnifying raw materials, finished inventory, and transit cargo against accidental damage, overturning, fire, or theft while in transit nationwide.",
    icon: <PackageTransitIcon />,
    accentColor: "from-navy-950 to-navy-900",
    features: ["Transit cargo indemnity", "Overturning & collision cover", "Nationwide logistics protection"],
  },
  {
    id: 5,
    title: "Executive Vehicle & Luxury Transport Cover",
    tagline: "Specialized high-value vehicle indemnification, chauffeur protection, and courtesy cars.",
    description:
      "Executive company cars and C-suite vehicles demand enhanced coverage terms that standard motor policies fail to provide. Our Executive Motor Cover includes zero-depreciation claims settlements, immediate courtesy vehicle provision during repairs, chauffeur personal accident riders, and international travel extensions across ECOWAS corridors.",
    icon: <CrownCarIcon />,
    accentColor: "from-red-700 to-red-600",
    features: ["Zero-depreciation claim payout", "Courtesy vehicle provision", "Chauffeur personal accident rider"],
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
                  <span>Request a motor quotation</span>
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
export default function MotorShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      ref={ref}
      id="motor-solutions"
      className="py-24 md:py-32 bg-white"
      aria-label="Corporate motor and fleet insurance solutions"
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
            Motor &amp; Fleet Protection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(1.6rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Motor Insurance &amp;{" "}
            <span className="text-red-600">Fleet Management</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            Explore our motor insurance products structured for corporate executive fleets, commercial utility vehicles, third-party liability compliance, and transit cargo protection. Click any card below to expand the detailed coverage terms.
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
