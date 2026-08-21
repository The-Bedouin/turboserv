"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  MotionValue,
} from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   ICONS — abstract geometric SVGs using Navy + Red brand palette
   ───────────────────────────────────────────────────────────── */
const IconBuilding = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <rect x="10" y="14" width="14" height="20" rx="1" fill="#1a3a5c" />
    <rect x="22" y="8" width="8" height="26" rx="1" fill="#ffffff" fillOpacity="0.1" />
    <rect x="22" y="8" width="8" height="26" rx="1" stroke="#dc2626" strokeWidth="1.2" />
    <rect x="13" y="18" width="3" height="3" rx="0.5" fill="#dc2626" />
    <rect x="18" y="18" width="3" height="3" rx="0.5" fill="#dc2626" />
    <rect x="13" y="23" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.35" />
    <rect x="18" y="23" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.35" />
    <rect x="9" y="33" width="22" height="1.5" rx="0.75" fill="white" fillOpacity="0.15" />
  </svg>
);

const IconCar = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M8 23l3.5-7a1 1 0 01.9-.6h15.2a1 1 0 01.9.6l3.5 7H8z" fill="#1a3a5c" stroke="white" strokeWidth="0.8" strokeOpacity="0.15" />
    <rect x="8" y="23" width="24" height="5" rx="2" fill="#1a3a5c" stroke="white" strokeWidth="0.8" strokeOpacity="0.15" />
    <circle cx="14" cy="28" r="3" fill="#dc2626" />
    <circle cx="26" cy="28" r="3" fill="#dc2626" />
    <circle cx="14" cy="28" r="1.2" fill="#071220" />
    <circle cx="26" cy="28" r="1.2" fill="#071220" />
    <rect x="18" y="17" width="4" height="4" rx="0.5" fill="white" fillOpacity="0.5" />
    <rect x="13" y="17" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.2" />
  </svg>
);

const IconGroup = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <circle cx="12" cy="17" r="3.5" fill="#dc2626" fillOpacity="0.25" stroke="#dc2626" strokeWidth="1" />
    <circle cx="28" cy="17" r="3.5" fill="#dc2626" fillOpacity="0.25" stroke="#dc2626" strokeWidth="1" />
    <path d="M6 32c0-4.4 2.7-8 6-8s6 3.6 6 8" stroke="white" strokeWidth="1.2" strokeOpacity="0.25" strokeLinecap="round" />
    <path d="M22 32c0-4.4 2.7-8 6-8s6 3.6 6 8" stroke="white" strokeWidth="1.2" strokeOpacity="0.25" strokeLinecap="round" />
    <circle cx="20" cy="14" r="5" fill="white" fillOpacity="0.12" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
    <path d="M12 32c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    <rect x="19" y="9" width="1.5" height="5" rx="0.75" fill="#dc2626" />
    <rect x="17.25" y="11.25" width="5" height="1.5" rx="0.75" fill="#dc2626" />
  </svg>
);

const IconShield = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <path d="M20 8l10 4v8c0 5.5-4.2 10.6-10 12-5.8-1.4-10-6.5-10-12V12l10-4z" fill="#1a3a5c" stroke="white" strokeWidth="0.8" strokeOpacity="0.2" />
    <path d="M20 8l10 4v8c0 5.5-4.2 10.6-10 12" fill="none" stroke="#dc2626" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M14 20l4 4 8-8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconAnchor = () => (
  <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <circle cx="20" cy="13" r="4" fill="none" stroke="white" strokeWidth="1.4" strokeOpacity="0.5" />
    <circle cx="20" cy="13" r="1.5" fill="#dc2626" />
    <line x1="20" y1="17" x2="20" y2="32" stroke="white" strokeWidth="1.4" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M13 22h14" stroke="white" strokeWidth="1.4" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M13 32c0-4 3.1-7 7-7" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M27 32c0-4-3.1-7-7-7" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="13" cy="32" r="2" fill="#dc2626" />
    <circle cx="27" cy="32" r="2" fill="#dc2626" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */
const topRowCards = [
  {
    href: "/solutions/corporate-insurance",
    icon: <IconBuilding />,
    category: "Industrial & Commercial",
    title: "Corporate Insurance",
    desc: "Comprehensive asset defense spanning Fire & Special Perils, Engineering risks, and Oil & Gas operations for large-scale enterprises.",
  },
  {
    href: "/solutions/motor",
    icon: <IconCar />,
    category: "Fleet & Mobility",
    title: "Motor Insurance",
    desc: "Enterprise fleet management and full comprehensive motor coverage to keep your operations moving safely at every turn.",
  },
  {
    href: "/solutions/employee-benefits",
    icon: <IconGroup />,
    category: "Healthcare & Welfare",
    title: "Employee Benefits",
    desc: "Holistic workforce packages featuring premium HMOs, Group Life, and keyman insurance to protect your most critical asset.",
  },
];

const bottomRowCards = [
  {
    href: "/solutions/specialized",
    icon: <IconShield />,
    category: "Growth & Emerging Risk",
    title: "Specialized Solutions",
    desc: "Innovative risk structures for evolving markets — including SME Microinsurance, Loan Protection, and professional indemnity schemes designed to scale with your ambitions.",
    wide: true,
  },
  {
    href: "/claims",
    icon: <IconAnchor />,
    category: "Risk & Claims",
    title: "Claims Advocacy",
    desc: "End-to-end portfolio risk audits and rigorous claims advocacy, ensuring a 99.4% settlement rate for our corporate clients.",
    wide: false,
  },
];

/* ─────────────────────────────────────────────────────────────
   CARD COMPONENT
   ───────────────────────────────────────────────────────────── */
interface CardProps {
  href: string;
  icon: React.ReactNode;
  category: string;
  title: string;
  desc: string;
  wide?: boolean;
}

function SolutionCard({ href, icon, category, title, desc }: CardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col h-full bg-white rounded-2xl px-6.5 py-6 border border-gray-100/80 shadow-[0_2px_20px_rgba(7,18,32,0.04)] hover:shadow-[0_16px_48px_rgba(7,18,32,0.10)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-950 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      {/* Icon */}
      <div className="mb-4.5 w-fit">{icon}</div>

      {/* Category */}
      <span className="text-[0.6rem] font-bold uppercase tracking-[0.13em] text-gray-400 mb-2 group-hover:text-red-600 transition-colors duration-300">
        {category}
      </span>

      {/* Title */}
      <h3
        className="text-[1.05rem] font-semibold text-navy-950 mb-2 leading-snug group-hover:text-red-600 transition-colors duration-300"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-[0.82rem] leading-relaxed flex-1">
        {desc}
      </p>

      {/* Footer */}
      <div className="mt-4.5 pt-3.5 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[0.72rem] font-medium text-gray-400 group-hover:text-navy-950 transition-colors duration-300">
          View capabilities
        </span>
        <span className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-navy-950 flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" viewBox="0 0 14 14" fill="none">
            <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────
   SCROLL-SCRUBBED ROW — wraps an entire row in a motion.div
   whose x is directly derived from useScroll progress.
   ───────────────────────────────────────────────────────────── */
interface ScrollRowProps {
  children: React.ReactNode;
  x: MotionValue<string>;
  className?: string;
}

function ScrollRow({ children, x, className = "" }: ScrollRowProps) {
  return (
    <motion.div style={{ x }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function CoreSolutions() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // ── Detect mobile so we disable the heavy x-scroll animation ──
  const [isMobile, setIsMobile] = useState(true); // start as true (SSR-safe)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Track scroll progress through the section ──
  // offset: ["start end"] = section bottom hits viewport bottom (section just entering)
  //         ["center center"] = section center aligns with viewport center (fully readable)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Top row: sweeps from far right (100vw) to its natural position (0vw)
  const topRowX = useTransform(scrollYProgress, [0, 1], ["90vw", "0vw"]);
  // Bottom row: sweeps from far left (-100vw) to natural position (0vw)
  const bottomRowX = useTransform(scrollYProgress, [0, 1], ["-90vw", "0vw"]);

  // Mobile fallback: simple useInView fade for the whole section
  const isInView = useInView(sectionRef, { margin: "-60px 0px", amount: 0.1 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#f7f8fa] py-[76px] md:py-[91px] overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ── Section Header ── */}
        <div className="max-w-xl mb-12">
          <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-red-600 mb-4">
            <span className="block w-5 h-px bg-red-600" />
            Core Solutions
          </span>
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-navy-950"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Structured Protection
            <br />
            <span className="text-red-600">Across Every Domain.</span>
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════════════
            DESKTOP — scroll-scrubbed bento grid
            ═══════════════════════════════════════════════════════ */}
        {!isMobile && (
          <>
            {/* Top Row → slides in from RIGHT */}
            <ScrollRow
              x={topRowX}
              className="grid grid-cols-3 gap-4 mb-4"
            >
              {topRowCards.map((card) => (
                <SolutionCard key={card.title} {...card} />
              ))}
            </ScrollRow>

            {/* Bottom Row → slides in from LEFT */}
            <ScrollRow
              x={bottomRowX}
              className="grid grid-cols-3 gap-4"
            >
              {bottomRowCards.map((card) => (
                <div
                  key={card.title}
                  className={card.wide ? "col-span-2" : "col-span-1"}
                >
                  <SolutionCard {...card} />
                </div>
              ))}
            </ScrollRow>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════
            MOBILE — simple stacked fade-in (no x scroll)
            ═══════════════════════════════════════════════════════ */}
        {isMobile && (
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
          >
            {[...topRowCards, ...bottomRowCards].map((card) => (
              <SolutionCard key={card.title} {...card} />
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
