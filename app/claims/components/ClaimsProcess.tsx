"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faFileShield,
  faScaleBalanced,
  faHandshakeAngle,
  faMoneyBillTransfer,
  faChevronLeft,
  faChevronRight,
  faCircleCheck,
  faArrowUpRightFromSquare,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

interface ProcessStep {
  icon: IconDefinition;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  turnaround: string;
  highlights: string[];
  keyOutcome: string;
}

const steps: ProcessStep[] = [
  {
    icon: faHeadset,
    label: "01",
    title: "Client Notification",
    subtitle: "Immediate Intake & Case Logging",
    description:
      "Immediately report the incident to Turboserv via phone, email, or our digital submission portal. Our emergency claims intake team logs the notification instantly and assigns a dedicated senior claims officer to direct your file.",
    turnaround: "< 1 Hour Response",
    highlights: [
      "1-on-1 dedicated claims officer assigned",
      "Immediate incident assessment & advice",
      "Initial loss mitigation guidance",
    ],
    keyOutcome: "Case File Opened & Officer Assigned",
  },
  {
    icon: faFileShield,
    label: "02",
    title: "Documentation & Evidence",
    subtitle: "Turnkey Document Collection",
    description:
      "We compile and audit all required claim forms, police reports, incident photographs, expert estimates, and legal documentation on your behalf — eliminating administrative friction so you can focus on your operations.",
    turnaround: "24 – 48 Hours",
    highlights: [
      "Zero paperwork burden on your team",
      "Expert verification of claim validity",
      "Pre-submission audit to eliminate delays",
    ],
    keyOutcome: "100% Verified Claims Package",
  },
  {
    icon: faScaleBalanced,
    label: "03",
    title: "Assessment & Valuation",
    subtitle: "Independent Loss & Value Audit",
    description:
      "An independent valuation is conducted in direct coordination with accredited loss adjusters and underwriters to determine the true, maximum recoverable value of your loss without lowball settlements.",
    turnaround: "3 – 5 Business Days",
    highlights: [
      "Rigorous loss adjuster negotiation",
      "Full coverage policy clause enforcement",
      "Fair market value replacement advocacy",
    ],
    keyOutcome: "Maximum Value Agreement",
  },
  {
    icon: faHandshakeAngle,
    label: "04",
    title: "Active Underwriter Advocacy",
    subtitle: "Proactive Escalation & Tracking",
    description:
      "We continuously track claim status with insurer management and exert firm corporate pressure to prevent arbitrary repudiations, unnecessary hold-ups, or unbudgeted deductions at decision stage.",
    turnaround: "Daily Status Tracking",
    highlights: [
      "Direct line to underwriter executives",
      "Resolution of technical disputes & exceptions",
      "Clear, transparent progress reports",
    ],
    keyOutcome: "Uncompromising Advocacy",
  },
  {
    icon: faMoneyBillTransfer,
    label: "05",
    title: "Settlement & Disbursement",
    subtitle: "Swift Fund Transfer & Closure",
    description:
      "Discharge vouchers are issued promptly upon offer acceptance, and settlement funds are wire-transferred directly to your designated bank account without unauthorized deductions or processing delays.",
    turnaround: "Direct Bank Deposit",
    highlights: [
      "Prompt discharge voucher execution",
      "Direct electronic fund transfer",
      "Final claim audit & closure summary",
    ],
    keyOutcome: "Full & Prompt Payout",
  },
];

export default function ClaimsProcess() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white" id="claims-process">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-20">
          <motion.div
            className="lg:col-span-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              How It Works
            </div>
            <h2
              className="text-[clamp(2.5rem,5.5vw,4.2rem)] font-medium leading-[1.05] tracking-tight text-navy-950"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our 5-Step Claims
              <br />
              Resolution Roadmap
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-4 flex flex-col justify-end"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.5}
          >
            <p className="text-slate-600 text-base leading-relaxed max-w-md lg:ml-auto mb-6">
              From initial notification to final payout, our structured advocacy framework ensures your claims are processed with urgency, transparency, and zero operational friction.
            </p>
            {/* Nav Controls for Desktop */}
            <div className="hidden lg:flex items-center gap-3 lg:ml-auto">
              <button
                onClick={handlePrev}
                aria-label="Previous step"
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-navy-950 hover:bg-navy-950 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-700"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-slate-400 tracking-widest px-2">
                0{activeStep + 1} / 0{steps.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next step"
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-navy-950 hover:bg-navy-950 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-700"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Interactive Steps — Desktop */}
        <motion.div
          className="hidden lg:block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
        >
          {/* Step Selector Bar */}
          <div className="grid grid-cols-5 border-b border-slate-200 mb-0">
            {steps.map((step, i) => (
              <button
                key={step.title}
                onClick={() => setActiveStep(i)}
                className={`text-left px-6 py-5 relative transition-colors duration-300 group ${
                  activeStep === i ? "bg-slate-50/70 text-navy-950" : "text-slate-400 hover:text-slate-700"
                }`}
              >
                <span
                  className={`block text-[0.7rem] font-bold tracking-[0.2em] uppercase mb-1 ${
                    activeStep === i ? "text-red-600" : "text-slate-400"
                  }`}
                >
                  Step {step.label}
                </span>
                <span className="block text-sm font-semibold tracking-tight truncate flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={step.icon}
                    className={`w-3.5 h-3.5 transition-colors ${
                      activeStep === i ? "text-red-600" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  />
                  {step.title}
                </span>
                {/* Active Indicator */}
                {activeStep === i && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-red-600"
                    layoutId="activeStepIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active Step Showcase Card */}
          <div className="bg-white border border-slate-200/90 shadow-2xl rounded-b-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] as const }}
                className="grid grid-cols-12 min-h-[300px]"
              >
                {/* Left Dark Accent Column */}
                <div className="col-span-5 bg-navy-950 p-6 lg:p-8 relative flex flex-col justify-between overflow-hidden">
                  {/* Subtle Grid overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Ambient Glow */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[4rem] font-black leading-none text-white/20 tracking-tighter">
                        {steps[activeStep].label}
                      </span>
                      <div className="w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center shadow-inner">
                        <FontAwesomeIcon icon={steps[activeStep].icon} className="w-7 h-7 text-red-400" />
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 text-white/90 text-xs font-semibold mb-4 border border-white/10">
                      <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5 text-red-400" />
                      {steps[activeStep].turnaround}
                    </span>

                    <h3
                      className="text-white text-2xl font-medium tracking-tight mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {steps[activeStep].subtitle}
                    </p>
                  </div>

                  <div className="relative z-10 pt-5 border-t border-white/10">
                    <span className="text-white/50 text-xs uppercase tracking-widest block mb-1">
                      Key Milestone Outcome
                    </span>
                    <span className="text-white font-semibold text-sm flex items-center gap-2">
                      <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-red-500" />
                      {steps[activeStep].keyOutcome}
                    </span>
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="col-span-7 p-6 lg:p-8 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-red-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                      Phase {steps[activeStep].label} Execution
                    </span>
                    <h4
                      className="text-navy-950 text-2xl font-medium tracking-tight mb-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {steps[activeStep].subtitle}
                    </h4>
                    <p className="text-slate-600 text-base leading-[1.8] mb-6">
                      {steps[activeStep].description}
                    </p>

                    {/* Highlights Checklist */}
                    <div className="space-y-3 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Deliverables & Actions:
                      </span>
                      {steps[activeStep].highlights.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FontAwesomeIcon icon={faCircleCheck} className="w-3.5 h-3.5 text-red-600" />
                          </div>
                          <span className="text-slate-700 text-sm font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="#submission-hub"
                      className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm hover:text-red-700 group transition-colors"
                    >
                      <span>Initiate A Claim Direct</span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                      >
                        <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
                        Previous
                      </button>
                      <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-navy-950 text-white rounded-lg text-xs font-semibold hover:bg-navy-900 transition-colors flex items-center gap-1.5"
                      >
                        Next
                        <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile Steps — Stacked Rich Cards */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => {
            return (
              <motion.div
                key={step.title}
                className="bg-white border border-slate-200/90 shadow-xl rounded-2xl overflow-hidden"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 1}
              >
                {/* Mobile Top Header */}
                <div className="bg-navy-950 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={step.icon} className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <span className="text-red-400 text-[0.65rem] font-bold tracking-[0.2em] uppercase block">
                        Step {step.label}
                      </span>
                      <h3 className="text-white font-medium text-base tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-white/20 tracking-tighter">
                    {step.label}
                  </span>
                </div>

                {/* Mobile Content Body */}
                <div className="p-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
                    <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5 text-red-600" />
                    {step.turnaround}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                    {step.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span className="text-slate-700 text-xs font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#submission-hub"
                    className="w-full py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Start Claim Process</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
