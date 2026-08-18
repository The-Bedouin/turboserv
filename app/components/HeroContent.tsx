"use client";

import { motion } from "framer-motion";

/* ---- Animation Orchestration ---- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
};

const fadeSlideUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1] as const,
      delay: 0.3,
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      className="relative z-10 w-full max-w-[280px] sm:max-w-[300px] mx-auto"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-6 sm:px-6 sm:py-7 shadow-[0_8px_60px_rgba(0,0,0,0.12)]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pre-heading badge */}
        <motion.div variants={fadeSlideUp}>
          <span className="inline-block px-2.5 py-1 bg-red-50 text-red-600 border border-red-100 text-[0.65rem] font-semibold tracking-wider uppercase rounded mb-3">
            Established Risk Vanguard
          </span>
        </motion.div>

        {/* Main heading — smaller serif */}
        <motion.h1
          className="font-[var(--font-display)] text-xl sm:text-2xl font-semibold leading-[1.12] tracking-[-0.02em] text-navy-950 mb-3"
          style={{ fontFamily: "var(--font-display)" }}
          variants={fadeSlideUp}
        >
          Corporate
          <br />
          Insurance
          <br />
          Brokers
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-500 text-[0.75rem] sm:text-[0.8rem] leading-snug mb-4 max-w-[240px]"
          variants={fadeSlideUp}
        >
          Global risk protection and tailored insurance solutions for corporate leaders and innovators
        </motion.p>

        {/* CTA Button — outlined pill */}
        <motion.div variants={fadeSlideUp}>
          <a
            href="#contact"
            id="cta-schedule-consultation"
            className="group inline-flex items-center justify-between gap-2 w-full border border-gray-300 rounded-full px-3.5 py-2 text-[0.75rem] font-medium text-navy-900 transition-all duration-300 hover:border-red-500 hover:text-red-600 hover:shadow-sm"
            aria-label="Schedule a consultation with Turboserv Insurance Brokers"
          >
            <span>Schedule Consultation</span>
            <span className="w-6 h-6 rounded-full bg-navy-950 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
              <svg
                width="10"
                height="10"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7H11M11 7L8 4M11 7L8 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <div className="text-center mt-2">
            <span className="text-[0.6rem] text-gray-400 font-medium tracking-wide">
              (RC: 1898699)
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
