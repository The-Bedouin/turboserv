"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IconExecutive = () => (
  <svg width="56" height="56" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#071220" />
    <circle cx="20" cy="14" r="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
    <circle cx="20" cy="14" r="2" fill="#dc2626" />
    <path d="M12 30c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M19 22l1 3 1-3" stroke="#dc2626" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

export default function ExecutiveMessage() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="executive-message" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.span
          className="inline-block px-4 py-1.5 bg-navy-50 text-navy-800 border border-navy-100 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          Leadership
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* MD headshot placeholder */}
          <motion.div
            className="relative"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-navy-100 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-200 via-navy-100 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-navy-950 border-4 border-white/60 mx-auto mb-4 flex items-center justify-center shadow-md">
                    <IconExecutive />
                  </div>
                  <p className="text-navy-800 text-sm font-medium">Managing Director</p>
                  <p className="text-navy-800/60 text-xs">Professional Headshot</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500/10 rounded-2xl -z-10" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-navy-200 rounded-2xl -z-10" aria-hidden="true" />
          </motion.div>

          {/* Message */}
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h2
              className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-navy-950 mb-8"
              style={{ fontFamily: "var(--font-display)" }}
              variants={fadeUp}
              custom={2}
            >
              A Message From Our
              <br />
              <span className="text-red-500">Managing Director</span>
            </motion.h2>

            <motion.blockquote
              className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 border-l-4 border-red-500/30 pl-6"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
              variants={fadeUp}
              custom={3}
            >
              &ldquo;Risk management is not a luxury&nbsp;&mdash; it is
              fundamental to business continuity. At Turboserv, we serve as
              trusted advisors, helping our clients navigate complex risk
              landscapes and make informed decisions that protect their most
              valuable assets.&rdquo;
            </motion.blockquote>

            <motion.p
              className="text-slate-500 text-[0.9375rem] leading-relaxed mb-8"
              variants={fadeUp}
              custom={4}
            >
              Our commitment goes beyond placing insurance policies. We take
              the time to understand each client&apos;s unique risk profile,
              industry challenges, and growth objectives. This allows us to
              craft bespoke protection strategies that evolve with your
              business.
            </motion.p>

            <motion.div className="border-t border-slate-200 pt-6" variants={fadeUp} custom={5}>
              <p className="text-3xl text-navy-950 mb-1" style={{ fontFamily: "var(--font-signature)" }}>
                Ezime Onuigbo
              </p>
              <p className="text-slate-500 text-sm font-medium tracking-wide">
                Managing Director / CEO
              </p>
              <p className="text-slate-400 text-xs">
                Turboserv Insurance Brokers Limited
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
