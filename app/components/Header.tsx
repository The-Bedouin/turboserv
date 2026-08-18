"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { 
    label: "About Us", 
    href: "#",
    subLinks: [
      { label: "Company Overview", href: "/about" },
      { label: "Our Team", href: "/team" },
    ]
  },
  { 
    label: "Insurance Solutions", 
    href: "#",
    subLinks: [
      { label: "Corporate Insurance", href: "/solutions/corporate-insurance" },
      { label: "Life & Health", href: "/solutions/life-health" },
      { label: "Motor Insurance", href: "/solutions/motor" },
      { label: "Employee Benefits", href: "/solutions/employee-benefits" },
      { label: "Specialized Solutions", href: "/solutions/specialized" },
    ]
  },
  { label: "Claims Advocacy", href: "/claims" },
  { label: "Contact", href: "/contact" },
];

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 lg:px-14"
      variants={fadeDown}
      initial="hidden"
      animate="visible"
    >
      {/* Logo — white pill with official Turboserv Logo */}
      <motion.a
        href="/"
        className="flex items-center bg-white/95 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-gray-100/80 hover:bg-white transition-all"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        aria-label="Turboserv Insurance Brokers Home"
      >
        <Image
          src="/TURBOSERVLOGO.png"
          alt="Turboserv Insurance Brokers Logo"
          width={180}
          height={40}
          className="h-7 sm:h-8 w-auto object-contain"
          priority
        />
      </motion.a>

      {/* Navigation — white pill */}
      <motion.nav
        className="hidden md:flex items-center bg-white/95 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] as const }}
      >
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              {link.subLinks ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className="flex items-center gap-1.5 px-4 py-2 text-[0.8125rem] font-medium text-navy-900 rounded-full transition-colors duration-300 hover:text-red-600 hover:bg-navy-50/60"
                  >
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`}>
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        <ul className="py-2">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.label}>
                              <a
                                href={subLink.href}
                                className="block px-5 py-2.5 text-[0.8125rem] text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subLink.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-[0.8125rem] font-medium text-navy-900 rounded-full transition-colors duration-300 hover:text-red-600 hover:bg-navy-50/60"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 mx-2" />

        {/* CTA */}
        <a
          href="/contact"
          className="group flex items-center gap-2.5 pl-4 pr-2 py-2 text-[0.8125rem] font-medium text-navy-900 rounded-full transition-colors duration-300 hover:text-red-600"
        >
          <span>Schedule a Consultation</span>
          <span className="w-8 h-8 rounded-full bg-navy-950 group-hover:bg-red-600 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm">
            <svg
              width="14"
              height="14"
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
      </motion.nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 bg-white/95 backdrop-blur-md rounded-full p-3 shadow-lg"
        aria-label="Open menu"
      >
        <span className="w-5 h-0.5 bg-gray-800 rounded-full" />
        <span className="w-5 h-0.5 bg-gray-800 rounded-full" />
        <span className="w-3.5 h-0.5 bg-gray-800 rounded-full" />
      </button>
    </motion.header>
  );
}
