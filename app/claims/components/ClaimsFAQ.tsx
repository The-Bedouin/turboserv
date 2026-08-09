"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPhoneVolume,
  faEnvelopeOpenText,
  faLocationDot,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const faqItems = [
  {
    question: "How does Turboserv support claims?",
    answer:
      "We handle every aspect of the claims process on your behalf — from initial documentation and evidence gathering, through adjuster coordination and underwriter negotiation, to final settlement collection. Our forceful advocacy ensures rapid payout and fair resolution, so you can focus on running your business.",
  },
  {
    question: "How quickly can I expect my claim to be settled?",
    answer:
      "Settlement timelines vary by claim complexity, but our dedicated team works to expedite every case. Simple claims are typically resolved within 2–4 weeks, while more complex cases receive daily follow-up to minimise delays. We provide real-time progress updates throughout.",
  },
  {
    question: "What documents do I need to file a claim?",
    answer:
      "You will typically need a completed claim form, a police report (where applicable), photographs of the damage or incident, repair estimates or invoices, and any relevant policy documents. Our team will guide you through exactly what's needed for your specific case.",
  },
  {
    question: "Can I track the status of my claim?",
    answer:
      "Absolutely. Every claim is assigned a dedicated handler who provides direct communication via phone and email. You'll receive regular status updates, and you can reach your handler at any time for a live progress check.",
  },
];

export default function ClaimsFAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white" id="claims-faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-navy-50 text-navy-800 border border-navy-100 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-6"
            variants={fadeUp}
            custom={0}
          >
            Common Questions
          </motion.span>
          <motion.h2
            className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-950"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
            custom={1}
          >
            Claims <span className="text-red-600">FAQ</span>
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="space-y-3 mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {faqItems.map((item, i) => (
            <motion.div
              key={item.question}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-shadow duration-300 hover:shadow-sm"
              variants={fadeUp}
              custom={i + 2}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="text-navy-950 text-[0.9375rem] font-semibold pr-4 group-hover:text-red-600 transition-colors">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-slate-400 group-hover:text-slate-600"
                >
                  <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] as const }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Contact Block */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={7}
        >
          <div className="absolute inset-0 bg-navy-950" aria-hidden="true">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
            <div
              className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-[0.07]"
              style={{
                background: "radial-gradient(circle, rgba(220,38,38,0.6) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 px-8 py-12 md:px-14 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left: message */}
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/15 text-red-400 border border-red-500/20 text-[0.65rem] font-bold tracking-[0.2em] uppercase rounded-full mb-5">
                  <FontAwesomeIcon icon={faHeadset} className="w-3 h-3 text-red-400" />
                  24/7 Support
                </span>
                <h3
                  className="text-white text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold leading-[1.15] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Emergency Claims Hotline
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  An incident doesn&apos;t wait for business hours. Our
                  emergency line is available around the clock for immediate
                  claims assistance.
                </p>
              </div>

              {/* Right: contact cards */}
              <div className="space-y-3">
                <a
                  href="tel:+2348177402607"
                  className="flex items-center gap-4 bg-white/[0.06] border border-white/[0.08] rounded-xl px-5 py-4 hover:bg-red-600/20 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-500/15 flex items-center justify-center flex-shrink-0 text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faPhoneVolume} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-300">
                      +234 817 740 2607
                    </p>
                    <p className="text-slate-400 text-xs">Click to call now</p>
                  </div>
                </a>

                <a
                  href="mailto:claims@turboservbrokers.com"
                  className="flex items-center gap-4 bg-white/[0.06] border border-white/[0.08] rounded-xl px-5 py-4 hover:bg-red-600/20 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-500/15 flex items-center justify-center flex-shrink-0 text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-300">
                      claims@turboservbrokers.com
                    </p>
                    <p className="text-slate-400 text-xs">Send an email</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-white/[0.06] border border-white/[0.08] rounded-xl px-5 py-4">
                  <div className="w-11 h-11 rounded-xl bg-red-500/15 flex items-center justify-center flex-shrink-0 text-red-400">
                    <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      15B Karimu Kotun Street
                    </p>
                    <p className="text-slate-400 text-xs">Victoria Island, Lagos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
