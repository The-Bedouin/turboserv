"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.14, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, delay: 0.15, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export default function LeadershipSpotlight() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="leadership"
      className="py-24 md:py-32 bg-white overflow-hidden"
      aria-label="Leadership spotlight"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <motion.span
          className="inline-block px-4 py-1.5 bg-navy-50 text-navy-800 border border-navy-100 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          Leadership Spotlight
        </motion.span>

        {/* Asymmetric split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
          {/* ─── Left: Image column ─── */}
          <motion.div
            className="relative"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideLeft}
          >
            {/* Decorative background accent */}
            <div
              className="absolute -top-8 -left-8 w-40 h-40 bg-red-500/6 rounded-3xl -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-navy-100 rounded-3xl -z-10"
              aria-hidden="true"
            />

            {/* Photo frame */}
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-navy-950/8">
              <Image
                src="/MosesFemiAmupitan.jpeg"
                alt="Moses Femi Amupitan — Managing Director & CEO, Turboserv Insurance Brokers"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 380px"
                priority
              />
              {/* Gradient overlay at bottom for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950/60 to-transparent" />
              {/* Floating title badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-[0.6875rem] font-semibold tracking-[0.12em] uppercase rounded-full">
                  Managing Director & CEO
                </span>
              </div>
            </div>
          </motion.div>

          {/* ─── Right: Content column ─── */}
          <motion.div
            className="flex flex-col"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideRight}
          >
            {/* Name */}
            <motion.h2
              className="text-[clamp(1.75rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-navy-950 mb-2"
              style={{ fontFamily: "var(--font-display)" }}
              variants={fadeUp}
              custom={1}
            >
              Moses Femi Amupitan
            </motion.h2>

            {/* Title badge */}
            <motion.p
              className="text-red-600 font-semibold text-sm tracking-wide uppercase mb-8"
              variants={fadeUp}
              custom={2}
            >
              Managing Director & CEO
            </motion.p>

            {/* Vision quote */}
            <motion.blockquote
              className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 border-l-4 border-red-500/30 pl-6 italic"
              style={{ fontFamily: "var(--font-display)" }}
              variants={fadeUp}
              custom={3}
            >
              &ldquo;Our mandate is simple: to be the most trusted voice in the
              room when risk decisions are being made. Every policy we place,
              every claim we advocate, must deliver measurable peace of mind to
              our clients.&rdquo;
            </motion.blockquote>

            {/* Bio paragraphs */}
            <motion.p
              className="text-slate-500 text-[0.9375rem] leading-relaxed mb-4"
              variants={fadeUp}
              custom={4}
            >
              With over two decades of experience navigating Nigeria&apos;s
              complex insurance landscape, Moses Femi Amupitan has built
              Turboserv into a formidable force in corporate risk management.
              His leadership philosophy centres on proactive client advocacy and
              rigorous technical underwriting standards that consistently
              outperform market expectations.
            </motion.p>
            <motion.p
              className="text-slate-500 text-[0.9375rem] leading-relaxed mb-10"
              variants={fadeUp}
              custom={5}
            >
              Under his stewardship, Turboserv has forged relationships with
              Nigeria&apos;s top underwriters and expanded its portfolio to
              cover some of the nation&apos;s most ambitious enterprises —
              bringing world-class brokerage services to Victoria Island, Lagos,
              and beyond.
            </motion.p>

            {/* Signature + credentials row */}
            <motion.div
              className="flex items-end gap-8 border-t border-slate-100 pt-8"
              variants={fadeUp}
              custom={6}
            >
              <div>
                <p
                  className="text-4xl text-navy-950 mb-1 leading-none"
                  style={{ fontFamily: "var(--font-signature)" }}
                >
                  Moses Femi Amupitan
                </p>
                <p className="text-slate-500 text-xs font-medium tracking-wide mt-1">
                  Turboserv Insurance Brokers Limited
                </p>
              </div>
              {/* LinkedIn subtle link */}
              <a
                href="#"
                aria-label="Moses Femi Amupitan on LinkedIn"
                className="ml-auto flex-shrink-0 w-10 h-10 rounded-xl bg-navy-950 hover:bg-red-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-105 shadow-md"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
