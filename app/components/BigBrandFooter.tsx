"use client";

import { motion } from "framer-motion";

export default function BigBrandFooter() {
  return (
    <section className="w-full bg-white text-navy-950 pt-16 pb-8 px-6 sm:px-10 lg:px-16 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 text-xs sm:text-sm font-medium text-slate-700">
          {/* Contact Details */}
          <div className="space-y-1">
            <a
              href="mailto:ezime@turboservbrokers.com"
              className="block hover:text-red-600 transition-colors"
            >
              ezime@turboservbrokers.com
            </a>
            <a
              href="tel:08177402607"
              className="block hover:text-red-600 transition-colors"
            >
              +234 817 740 2607
            </a>
          </div>

          {/* Address */}
          <div className="space-y-1">
            <p>15B Karimu Kotun Street,</p>
            <p>Victoria Island, Lagos, Nigeria</p>
          </div>

          {/* Links (Right Aligned on desktop) */}
          <div className="space-y-1 md:text-right">
            <a
              href="#"
              className="block hover:text-red-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block hover:text-red-600 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Massive Brand Name Centerpiece */}
        <div className="w-full py-4 md:py-8 my-2 overflow-hidden flex justify-center items-center">
          <motion.h2
            className="text-[13.5vw] font-black uppercase tracking-[-0.04em] leading-[0.82] text-navy-950 text-center select-none w-full"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as const }}
          >
            TURBOSERV
          </motion.h2>
        </div>

        {/* Sub-Footer Copyright */}
        <div className="flex justify-end pt-6 border-t border-slate-100 text-[0.75rem] font-medium text-slate-500">
          <p>© {new Date().getFullYear()} TURBOSERV INSURANCE BROKERS. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
