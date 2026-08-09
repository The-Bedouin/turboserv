"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faPhoneVolume,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.14, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

export default function ClaimsHero() {
  return (
    <section
      className="relative min-h-[90vh] pt-32 md:pt-40 pb-24 flex items-center justify-center overflow-hidden"
      id="claims-hero"
      aria-label="Claims advocacy hero"
    >
      {/* Light background */}
      <div className="absolute inset-0 bg-white" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
      >
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 mb-8 shadow-sm"
          variants={fadeUp}
          custom={0}
        >
          <FontAwesomeIcon icon={faShieldHeart} className="w-8 h-8 text-red-600" />
        </motion.div>

        <motion.span
          className="block px-4 py-1.5 mx-auto w-fit bg-red-500/10 text-red-600 border border-red-500/20 text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8"
          variants={fadeUp}
          custom={0.5}
        >
          Claims &amp; Advocacy
        </motion.span>

        <motion.h1
          className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-navy-950 mb-6"
          style={{ fontFamily: "var(--font-display)" }}
          variants={fadeUp}
          custom={1}
        >
          Dedicated Insurance Claims
          <br />
          <span className="text-red-600">Advocacy &amp; Support</span>
        </motion.h1>

        <motion.p
          className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
          variants={fadeUp}
          custom={2}
        >
          We provide active claims advocacy to ensure your claims are resolved
          swiftly and fairly&nbsp;&mdash; without unnecessary operational stress.
          Your peace of mind is our priority.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp}
          custom={3}
        >
          <a
            href="#submission-hub"
            id="cta-report-incident"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-red-600 hover:bg-red-500 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 active:scale-[0.98]"
          >
            <span>Report an Incident Now</span>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1 text-white/90"
            />
          </a>
          <a
            href="tel:+2348177402607"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-slate-200 hover:border-slate-300 rounded-full text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-slate-50 active:scale-[0.98]"
          >
            <FontAwesomeIcon icon={faPhoneVolume} className="w-4 h-4 text-red-600" />
            <span>24/7 Hotline</span>
          </a>
        </motion.div>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
