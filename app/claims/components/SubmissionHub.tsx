"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faFileLines,
  faCameraRetro,
  faCloudArrowUp,
  faCircleCheck,
  faArrowRight,
  faArrowLeft,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const slideContent = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as const } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.25 } },
};

const stepLabels = ["Your Details", "Incident Info", "Evidence Upload"];

/* ---- Shared input styles ---- */
const inputBase =
  "w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-navy-950 placeholder-slate-400 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/15";

export default function SubmissionHub() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<string[]>([]);

  /* Form data */
  const [form, setForm] = useState({
    policyNumber: "",
    fullName: "",
    email: "",
    phone: "",
    incidentDate: "",
    incidentTime: "",
    description: "",
  });

  const update = useCallback(
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value })),
    []
  );

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));
  const handleSubmit = () => setSubmitted(true);

  /* Drag & drop handlers */
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) {
      const names = Array.from(e.dataTransfer.files).map((f) => f.name);
      setFiles((prev) => [...prev, ...names]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setFiles((prev) => [...prev, ...names]);
    }
  };

  /* Progress bar width */
  const progressPercent = submitted ? 100 : ((step - 1) / 3) * 100;

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white" id="submission-hub">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-red-50 text-red-700 border border-red-100 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-6"
            variants={fadeUp}
            custom={0}
          >
            Claims Portal
          </motion.span>
          <motion.h2
            className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-950"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
            custom={1}
          >
            Submit Your Claim{" "}
            <span className="text-red-600">Securely</span>
          </motion.h2>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-lg"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
        >
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              {stepLabels.map((label, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 text-xs font-medium transition-colors duration-300 ${
                    step > i || submitted ? "text-red-600" : step === i + 1 ? "text-navy-950" : "text-slate-400"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[0.7rem] font-bold border-2 transition-all duration-300 ${
                      step > i || submitted
                        ? "bg-red-600 border-red-600 text-white"
                        : step === i + 1
                        ? "border-red-500 text-red-600 bg-red-50/50"
                        : "border-slate-300 text-slate-400"
                    }`}
                  >
                    {step > i || submitted ? (
                      <FontAwesomeIcon icon={faCircleCheck} className="w-3.5 h-3.5" />
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </div>
              ))}
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-red-600 rounded-full"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              /* ---- Success State ---- */
              <motion.div
                key="success"
                className="text-center py-12"
                {...slideContent}
              >
                <div className="w-16 h-16 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center mx-auto mb-6 text-red-600">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-8 h-8" />
                </div>
                <h3
                  className="text-navy-950 text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Claim Successfully Submitted
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto mb-3">
                  Your claim is now in our system. A dedicated claims handler
                  will be assigned and will contact you within 24 hours.
                </p>
                <p className="text-slate-400 text-xs">
                  An automated confirmation email has been sent to your inbox.
                </p>
              </motion.div>
            ) : step === 1 ? (
              /* ---- Step 1: Client Info ---- */
              <motion.div key="step1" className="space-y-5" {...slideContent}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={faUserCheck} className="w-4 h-4" />
                  </div>
                  <h3 className="text-navy-950 text-sm font-semibold">Your Details</h3>
                </div>
                <div>
                  <label htmlFor="policyNumber" className="block text-xs font-medium text-slate-600 mb-1.5">
                    Policy Number
                  </label>
                  <input
                    id="policyNumber"
                    type="text"
                    placeholder="e.g. TSB-2026-001234"
                    value={form.policyNumber}
                    onChange={update("policyNumber")}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-slate-600 mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={update("fullName")}
                    className={inputBase}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-600 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={update("email")}
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-600 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+234 ..."
                      value={form.phone}
                      onChange={update("phone")}
                      className={inputBase}
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 px-7 py-3 bg-red-600 hover:bg-red-500 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-md hover:shadow-red-600/20 active:scale-[0.98]"
                  >
                    <span>Continue</span>
                    <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ) : step === 2 ? (
              /* ---- Step 2: Incident Info ---- */
              <motion.div key="step2" className="space-y-5" {...slideContent}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={faFileLines} className="w-4 h-4" />
                  </div>
                  <h3 className="text-navy-950 text-sm font-semibold">Incident Information</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="incidentDate" className="block text-xs font-medium text-slate-600 mb-1.5">
                      Date of Incident
                    </label>
                    <input
                      id="incidentDate"
                      type="date"
                      value={form.incidentDate}
                      onChange={update("incidentDate")}
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="incidentTime" className="block text-xs font-medium text-slate-600 mb-1.5">
                      Time of Incident
                    </label>
                    <input
                      id="incidentTime"
                      type="time"
                      value={form.incidentTime}
                      onChange={update("incidentTime")}
                      className={inputBase}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="description" className="block text-xs font-medium text-slate-600 mb-1.5">
                    Description of Incident
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    placeholder="Please describe what happened in as much detail as possible..."
                    value={form.description}
                    onChange={update("description")}
                    className={`${inputBase} resize-none`}
                  />
                </div>
                <div className="flex justify-between pt-2">
                  <button
                    onClick={back}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 hover:border-slate-300 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all duration-300 active:scale-[0.98]"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 px-7 py-3 bg-red-600 hover:bg-red-500 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-md hover:shadow-red-600/20 active:scale-[0.98]"
                  >
                    <span>Continue</span>
                    <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* ---- Step 3: Evidence Upload ---- */
              <motion.div key="step3" className="space-y-5" {...slideContent}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCameraRetro} className="w-4 h-4" />
                  </div>
                  <h3 className="text-navy-950 text-sm font-semibold">Upload Evidence</h3>
                </div>

                {/* Drop zone */}
                <div
                  className={`relative rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
                    dragActive
                      ? "border-red-500 bg-red-50/50"
                      : "border-slate-300 bg-white hover:border-red-400 hover:bg-red-50/30"
                  }`}
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faCloudArrowUp} className="w-6 h-6" />
                  </div>
                  <p className="text-navy-950 text-sm font-semibold mb-1">
                    Drag &amp; drop files here
                  </p>
                  <p className="text-slate-400 text-xs mb-4">
                    Claim forms, photos, estimates &amp; evidence
                  </p>
                  <label
                    htmlFor="file-upload"
                    className="inline-block px-5 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer transition-colors duration-300"
                  >
                    Or browse files
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileInput}
                  />
                </div>

                {/* File list */}
                {files.length > 0 && (
                  <div className="space-y-2">
                    {files.map((name, i) => (
                      <div
                        key={`${name}-${i}`}
                        className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 text-sm"
                      >
                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span className="text-navy-950 text-xs font-medium truncate">{name}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-between pt-2">
                  <button
                    onClick={back}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 hover:border-slate-300 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all duration-300 active:scale-[0.98]"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-500 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 active:scale-[0.98]"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="w-3.5 h-3.5" />
                    <span>Submit Claim</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
