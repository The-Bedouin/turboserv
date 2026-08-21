"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* ============================================================
   MEGA FOOTER — "Curtain Reveal" Footer
   Sits fixed behind <main>, revealed as content scrolls away.
   ============================================================ */

/* ---- Animation Variants ---- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const linkHover = {
  rest: { x: 0 },
  hover: { x: 6, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] as const } },
};

/* ---- Navigation Data ---- */
const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/contact" },
];

const servicesLinks = [
  { label: "Corporate Insurance", href: "/solutions/corporate-insurance" },
  { label: "Life & Health", href: "/solutions/life-health" },
  { label: "Motor Insurance", href: "/solutions/motor" },
  { label: "Employee Benefits", href: "/solutions/employee-benefits" },
  { label: "Specialized Solutions", href: "/solutions/specialized" },
];

const practiceAreas = [
  { label: "Banking & Financial Services", href: "#" },
  { label: "Construction & Infrastructure", href: "#" },
  { label: "Manufacturing & Industrial", href: "#" },
  { label: "Education & Academies", href: "#" },
  { label: "Healthcare & Pharmaceuticals", href: "#" },
  { label: "Hospitality & Leisure", href: "#" },
  { label: "Logistics & Transportation", href: "#" },
  { label: "SMEs & Commercial Business", href: "#" },
  { label: "Oil & Gas Energy Sector", href: "#" },
  { label: "Agriculture & Agribusiness", href: "#" },
  { label: "Government & Public Sector", href: "#" },
  { label: "Religious Organizations", href: "#" },
];

/* ---- Social Icons ---- */
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/* ---- Arrow Icon ---- */
function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 7H11M11 7L8 4M11 7L8 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function MegaFooter({ hideCTA = false }: { hideCTA?: boolean }) {
  const ctaRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.15 });

  return (
    <footer
      className="relative z-20 w-full bg-navy-950 text-white overflow-hidden"
      id="contact"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ================================================================
          MEGA CTA SECTION
          ================================================================ */}
      {!hideCTA && (
        <div
          ref={ctaRef}
          className="relative px-6 pt-24 pb-20 md:px-12 md:pt-32 md:pb-28 lg:px-20 lg:pt-40 lg:pb-32 overflow-hidden"
        >
          {/* Decorative background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(220,38,38,0.5) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-1.5 bg-red-500/15 text-red-400 border border-red-500/25 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-8"
            variants={fadeUp}
            custom={0}
          >
            Let&apos;s Build Your Shield
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
            custom={1}
          >
            Ready to protect
            <br />
            <span className="text-red-500">what matters most?</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
            variants={fadeUp}
            custom={2}
          >
            Partner with Nigeria&apos;s most trusted insurance brokerage. We
            craft bespoke coverage that shields your business, your assets, and
            your future.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeUp} custom={3}>
            <a
              href="/contact"
              id="footer-cta-schedule-consultation"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-[0.9375rem] font-semibold text-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
              aria-label="Schedule a consultation"
            >
              {/* Button background with gradient */}
              <span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-500 group-hover:from-red-500 group-hover:to-red-600"
                aria-hidden="true"
              />
              {/* Shimmer effect */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.15) 55%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s infinite",
                }}
                aria-hidden="true"
              />
              <span className="relative z-10">Schedule a Consultation</span>
              <span className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      )}

      {/* ================================================================
          NAVIGATION GRID
          ================================================================ */}
      <div
        ref={gridRef}
        className="border-t border-white/[0.06] px-6 py-16 md:px-12 md:py-20 lg:px-20"
      >
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* ---- Col 1: Brand ---- */}
          <motion.div variants={fadeUp} custom={0} className="lg:pr-8">
            <div className="mb-6">
              <div className="bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-xl shadow-md inline-flex items-center">
                <Image
                  src="/TURBOSERVLOGO.png"
                  alt="Turboserv Insurance Brokers Logo"
                  width={160}
                  height={36}
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              A leading professional insurance brokerage and risk management
              consulting firm, delivering tailored protection for
              Nigeria&apos;s most ambitious enterprises.
            </p>
            {/* Address */}
            <div className="text-slate-500 text-xs leading-relaxed space-y-1">
              <p>15B Karimu Kotun Street</p>
              <p>Victoria Island, Lagos, Nigeria</p>
              <p className="mt-2">
                <a
                  href="tel:+2348177402607"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  +234 817 740 2607
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@turboservbrokers.com"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  info@turboservbrokers.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* ---- Col 2: Company ---- */}
          <motion.div variants={fadeUp} custom={1}>
            <h3 className="text-white text-sm font-semibold tracking-wide uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-slate-400 text-[0.8125rem] transition-colors duration-300 hover:text-white group"
                    variants={linkHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>

            <h3 className="text-white text-sm font-semibold tracking-wide uppercase mt-10 mb-6">
              Practice Areas
            </h3>
            <ul className="space-y-3.5">
              {practiceAreas.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-slate-400 text-[0.8125rem] transition-colors duration-300 hover:text-white group"
                    variants={linkHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ---- Col 3: Services ---- */}
          <motion.div variants={fadeUp} custom={2}>
            <h3 className="text-white text-sm font-semibold tracking-wide uppercase mb-6">
              Insurance Solutions
            </h3>
            <ul className="space-y-3.5">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-slate-400 text-[0.8125rem] transition-colors duration-300 hover:text-white group"
                    variants={linkHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ---- Col 4: Newsletter & Social ---- */}
          <motion.div variants={fadeUp} custom={3}>
            <h3 className="text-white text-sm font-semibold tracking-wide uppercase mb-6">
              Stay Informed
            </h3>
            <p className="text-slate-400 text-[0.8125rem] leading-relaxed mb-5">
              Get the latest insights on corporate risk management and insurance
              trends delivered to your inbox.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mb-8"
              aria-label="Newsletter signup"
            >
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Your email address"
                    id="footer-newsletter-email"
                    className="w-full px-4 py-2.5 bg-white/[0.06] border border-white/[0.1] rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-red-500/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-red-500/20"
                    aria-label="Email address for newsletter"
                  />
                </div>
                <button
                  type="submit"
                  id="footer-newsletter-submit"
                  className="px-4 py-2.5 bg-red-600 hover:bg-red-500 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 flex-shrink-0"
                  aria-label="Subscribe to newsletter"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <h3 className="text-white text-sm font-semibold tracking-wide uppercase mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {[
                { icon: <LinkedInIcon />, label: "LinkedIn", href: "#" },
                { icon: <TwitterIcon />, label: "X (Twitter)", href: "#" },
                { icon: <InstagramIcon />, label: "Instagram", href: "#" },
                { icon: <FacebookIcon />, label: "Facebook", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600/20 hover:border-red-500/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================================================================
          SUB-FOOTER
          ================================================================ */}
      <div className="border-t border-white/[0.06] px-6 py-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Turboserv Insurance Brokers Limited.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-slate-500 text-xs hover:text-slate-300 transition-colors duration-300"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>

    </footer>
  );
}
