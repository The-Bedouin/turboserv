"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   TESTIMONIAL DATA
   ───────────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "Turboserv simplified our corporate fleet and health policies seamlessly while cutting premium costs significantly. Their advocacy during our largest claim was nothing short of exceptional.",
    author: "Adebayo Ogunlade",
    role: "Group CFO",
    company: "Pan-African Logistics PLC",
    metric: "₦2.4B",
    metricLabel: "Coverage Managed",
  },
  {
    quote:
      "We switched from going direct to using Turboserv and within one renewal cycle, they restructured our entire risk portfolio — better coverage, lower premiums, zero disruption.",
    author: "Chioma Eze-Okoli",
    role: "Head of Operations",
    company: "Meridian Energy Group",
    metric: "32%",
    metricLabel: "Premium Reduction",
  },
  {
    quote:
      "Their Oil & Gas expertise is unmatched. Turboserv placed coverage for our offshore operations that three other brokers said was impossible to underwrite in this market.",
    author: "Emeka Nwachukwu",
    role: "Managing Director",
    company: "Atlantic Deepwater Services",
    metric: "₦8.1B",
    metricLabel: "Specialized Placement",
  },
];

/* ─────────────────────────────────────────────────────────────
   TRUST LOGOS — Real PNG logos for the sliding marquee
   ───────────────────────────────────────────────────────────── */
const partnerLogos = [
  { name: "AXA Mansard", src: "/trusted partners/axalogo.png" },
  { name: "Cornerstone Insurance", src: "/trusted partners/cornerstone.png" },
  { name: "Leadway Assurance", src: "/trusted partners/leadway.png" },
  { name: "Linkage Assurance", src: "/trusted partners/linkage.png" },
  { name: "NEM Insurance", src: "/trusted partners/nem.png" },
  { name: "Sovereign Trust Insurance", src: "/trusted partners/sovereigntrust.png" },
];

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-80px 0px", amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  return (
    <section
      ref={ref}
      className="bg-white py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* ── Outer Repeating SVG "O" Logo Pattern ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] select-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="turboserv-o-pattern"
              x="0"
              y="0"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(15)"
            >
              {/* 
                ─────────────────────────────────────────────────────────────
                STYLIZED "O" TURBINE LOGO MARK (REPEATING GEOMETRIC ELEMENT)
                To replace with your exact SVG path later, replace the <g> 
                contents below with your custom SVG path data.
                ─────────────────────────────────────────────────────────────
              */}
              <g transform="translate(8, 8)">
                {/* Outer Turbocharger Housing Contour */}
                <path
                  d="M 24 4 C 12.95 4 4 12.95 4 24 C 4 35.05 12.95 44 24 44 C 35.05 44 44 35.05 44 24 C 44 17.5 44 9 39 4 C 34 4 29 4 24 4 Z"
                  fill="none"
                  stroke="#071220"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                {/* Turbo Outlet Horn Detail */}
                <path
                  d="M 34 4 L 42 4 C 43.1 4 44 4.9 44 6 L 44 14"
                  fill="none"
                  stroke="#071220"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Central Impeller Core */}
                <circle cx="24" cy="24" r="7" fill="#dc2626" />
                {/* Impeller Blades / Fins */}
                <path
                  d="M24 11V17 M24 31V37 M11 24H17 M31 24H37 M15 15L19 19 M29 29L33 33 M15 33L19 29 M29 19L33 15"
                  stroke="#071220"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#turboserv-o-pattern)" />
        </svg>
      </div>

      {/* ── THE MASTER CONTAINER (Giant Card — sits on top of pattern) ── */}
      <div className="w-[95%] max-w-[1360px] mx-auto relative z-10 bg-navy-950 rounded-3xl md:rounded-[40px] px-6 py-12 sm:px-10 sm:py-14 md:p-14 lg:p-16 overflow-hidden shadow-2xl shadow-navy-950/15 border border-navy-900/80">
        {/* ── Background texture — subtle radial glow inside the Master Container ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-radial from-navy-800/30 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-radial from-red-900/15 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* ── Section Tag ── */}
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-red-500 mb-2.5">
              <span className="block w-4 h-px bg-red-500" />
              Client Testimonials
              <span className="block w-4 h-px bg-red-500" />
            </span>
            <h2
              className="text-[clamp(1.35rem,2.3vw,1.85rem)] font-semibold leading-tight tracking-[-0.02em] text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted by Corporate Leaders
            </h2>
          </motion.div>

          {/* ── Scaled-Down Inner Testimonial Card ── */}
          <motion.div
            className="relative max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Decorative quotation marks — top left */}
            <div className="absolute -top-3.5 left-3 md:left-6 select-none pointer-events-none" aria-hidden="true">
              <svg width="52" height="40" viewBox="0 0 64 48" fill="none">
                <path
                  d="M0 48V28.8C0 19.2 2.4 12 7.2 7.2C12 2.4 18.4 0 26.4 0V12C22.4 12 19.2 13.2 16.8 15.6C14.4 18 13.2 21.2 13.2 25.2H26.4V48H0ZM37.6 48V28.8C37.6 19.2 40 12 44.8 7.2C49.6 2.4 56 0 64 0V12C60 12 56.8 13.2 54.4 15.6C52 18 50.8 21.2 50.8 25.2H64V48H37.6Z"
                  fill="url(#quote-gradient)"
                  fillOpacity="0.12"
                />
                <defs>
                  <linearGradient id="quote-gradient" x1="0" y1="0" x2="64" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#dc2626" />
                    <stop offset="1" stopColor="#ffffff" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Inner Card body */}
            <div className="relative bg-white/[0.035] backdrop-blur-md border border-white/[0.08] rounded-2xl md:rounded-3xl px-6 py-8 sm:px-10 sm:py-9 md:px-12 md:py-10">
              {/* Animated quote block */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] as const }}
                >
                  {/* Quote text */}
                  <blockquote
                    className="text-white/95 text-[clamp(0.95rem,1.5vw,1.2rem)] leading-relaxed font-normal tracking-[-0.01em] mb-7"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  {/* Author row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                    <div className="flex items-center gap-3.5">
                      {/* Avatar placeholder — initials */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0 shadow-md shadow-red-900/25">
                        {current.author.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                          {current.author}
                        </div>
                        <div className="text-slate-400 text-[0.7rem] sm:text-xs">
                          {current.role}, <span className="text-slate-500">{current.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key metric */}
                    <div className="flex items-center gap-3 sm:text-right pl-13.5 sm:pl-0">
                      <div className="w-px h-7 bg-white/10 hidden sm:block" />
                      <div>
                        <div className="text-white text-base sm:text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                          {current.metric}
                        </div>
                        <div className="text-slate-500 text-[0.6rem] uppercase tracking-wider font-semibold">
                          {current.metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dot navigation */}
              <div className="flex items-center justify-center gap-2 mt-7">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`View testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-6 h-1.5 bg-red-600"
                        : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Closing quotation mark — bottom right */}
            <div className="absolute -bottom-2.5 right-3 md:right-6 select-none pointer-events-none rotate-180" aria-hidden="true">
              <svg width="40" height="30" viewBox="0 0 64 48" fill="none">
                <path
                  d="M0 48V28.8C0 19.2 2.4 12 7.2 7.2C12 2.4 18.4 0 26.4 0V12C22.4 12 19.2 13.2 16.8 15.6C14.4 18 13.2 21.2 13.2 25.2H26.4V48H0ZM37.6 48V28.8C37.6 19.2 40 12 44.8 7.2C49.6 2.4 56 0 64 0V12C60 12 56.8 13.2 54.4 15.6C52 18 50.8 21.2 50.8 25.2H64V48H37.6Z"
                  fill="white"
                  fillOpacity="0.06"
                />
              </svg>
            </div>
          </motion.div>

          {/* ── Trust bar — Infinite Logo Marquee ── */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/[0.06] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <p className="text-center text-slate-500 text-[0.6rem] uppercase tracking-[0.2em] font-semibold mb-6">
              Trusted by enterprises across key sectors
            </p>
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div className="animate-marquee flex gap-12 items-center">
                {/* Render the logos list multiple times for seamless looping */}
                {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
                  <div
                    key={`${logo.name}-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-16 w-36 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.05] transition-all duration-300 group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-8 max-w-full object-contain transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
