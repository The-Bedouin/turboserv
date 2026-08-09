"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, ArrowRight, Lock, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

export default function ContactContent() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    intent: "Request a Free Risk Audit",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row pt-28 pb-12 md:pt-36 md:pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto bg-white items-center justify-between gap-12 lg:gap-16">
      {/* ================================================================
          LEFT COLUMN: Clean Minimalist Brand & Contact Info
          ================================================================ */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center"
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-lg">
          {/* Main Title */}
          <motion.h1
            className="text-[clamp(2.75rem,5.5vw,4.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy-950 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
            custom={0}
          >
            Let&apos;s <br />
            Connect
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 max-w-md"
            variants={fadeUp}
            custom={1}
          >
            Reach out for a complimentary consultation and see how we translate risk management into sustainable growth.
          </motion.p>

          {/* Contact Details List */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            custom={2}
          >
            {/* Address */}
            <div>
              <p className="font-bold text-navy-950 text-lg sm:text-xl leading-snug">
                15B Karimu Kotun Street,
              </p>
              <p className="font-bold text-navy-950 text-lg sm:text-xl leading-snug">
                Victoria Island, Lagos, Nigeria
              </p>
            </div>

            {/* Email & Phone */}
            <div className="space-y-1 pt-1">
              <a
                href="mailto:ezime@turboservbrokers.com"
                className="block font-bold text-navy-950 text-lg sm:text-xl hover:text-red-600 transition-colors"
                aria-label="Email ezime@turboservbrokers.com"
              >
                ezime@turboservbrokers.com
              </a>
              <a
                href="tel:08177402607"
                className="block font-bold text-navy-950 text-lg sm:text-xl hover:text-red-600 transition-colors"
                aria-label="Call Turboserv at +234 817 740 2607"
              >
                +234 817 740 2607
              </a>
            </div>
          </motion.div>

          {/* Trust Signal Badge */}
          <motion.div
            className="mt-10 pt-2"
            variants={fadeUp}
            custom={3}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-100/80 border border-slate-200/80 rounded-xl text-slate-700 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>NAICOM-Approved Insurance Brokers</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ================================================================
          RIGHT COLUMN: Contact Card (Form preserved as requested)
          ================================================================ */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <motion.div
          className="w-full max-w-md bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] as const }}
        >
          {formSubmitted ? (
            <motion.div
              className="py-8 text-center space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto border border-red-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3
                className="text-xl font-semibold text-navy-950"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Inquiry Received
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                Thank you, <strong className="text-navy-950">{formData.fullName}</strong>. A dedicated advisor will reach out to you within 2 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 text-xs font-semibold text-red-600 hover:text-red-700 underline"
              >
                Submit another inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-2">
                <h2
                  className="text-xl font-semibold text-navy-950 tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Consult an Advisor
                </h2>
                <p className="text-slate-500 text-xs mt-0.5">
                  Complete the form below for immediate corporate assistance.
                </p>
              </div>

              {/* 1. Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold text-navy-900 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Adebayo Okonjo"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
                />
              </div>

              {/* 2. Corporate Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-navy-900 mb-1"
                >
                  Corporate Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
                />
              </div>

              {/* 3. Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-navy-900 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
                />
              </div>

              {/* 4. Intent Dropdown */}
              <div>
                <label
                  htmlFor="intent"
                  className="block text-xs font-semibold text-navy-900 mb-1"
                >
                  How can we help you? <span className="text-red-500">*</span>
                </label>
                <select
                  id="intent"
                  name="intent"
                  value={formData.intent}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 cursor-pointer"
                >
                  <option value="Request a Free Risk Audit">
                    Request a Free Risk Audit
                  </option>
                  <option value="Policy Review">Policy Review</option>
                  <option value="Claims Support">Claims Support</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm shadow-md hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span>Speak to an Advisor</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Micro-copy */}
              <div className="pt-2 text-center flex items-center justify-center gap-1.5 text-slate-400 text-[0.725rem]">
                <Lock className="w-3 h-3 text-slate-400 flex-shrink-0" />
                <span>Your information is secure. We typically respond within 2 hours.</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
