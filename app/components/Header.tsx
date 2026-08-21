"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Scroll direction detection
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isHome = pathname === "/";
      const threshold = isHome ? window.innerHeight * 0.75 : 80;

      if (currentScrollY <= threshold) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY + 5) {
          // Scrolling down -> hide navbar
          setIsVisible(false);
          setActiveDropdown(null);
        } else if (currentScrollY < lastScrollY - 5) {
          // Scrolling up -> show navbar
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 lg:px-14 pointer-events-none"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible || mobileMenuOpen ? 0 : -100,
          opacity: isVisible || mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Logo — white pill with official Turboserv Logo */}
        <motion.div
          className="pointer-events-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link
            href="/"
            className="flex items-center bg-white/95 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-gray-100/80 hover:bg-white transition-all"
            aria-label="Turboserv Insurance Brokers Home"
          >
            <Image
              src="/TURBOSERVLOGO.png"
              alt="Turboserv Insurance Brokers Logo"
              width={180}
              height={40}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
              loading="eager"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation — white pill */}
        <nav className="hidden md:flex items-center bg-white/95 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-gray-100 pointer-events-auto">
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
                                <Link
                                  href={subLink.href}
                                  className="block px-5 py-2.5 text-[0.8125rem] text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subLink.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-[0.8125rem] font-medium text-navy-900 rounded-full transition-colors duration-300 hover:text-red-600 hover:bg-navy-50/60"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200 mx-2" />

          {/* CTA */}
          <Link
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
          </Link>
        </nav>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-100/80 pointer-events-auto text-navy-950 hover:text-red-600 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </motion.header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy-950/60 backdrop-blur-md z-40 md:hidden pointer-events-auto"
            />

            {/* Mobile Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="fixed left-4 right-4 top-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 z-50 md:hidden pointer-events-auto max-h-[82vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    {link.subLinks ? (
                      <div>
                        <div className="py-1 mb-1">
                          <span className="text-[0.7rem] font-bold uppercase tracking-wider text-red-600">
                            {link.label}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1.5 pl-2">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm font-medium text-navy-950 hover:text-red-600 py-1.5 transition-colors flex items-center justify-between"
                            >
                              <span>{sub.label}</span>
                              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-semibold text-navy-950 hover:text-red-600 block py-1 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3.5 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-semibold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>Schedule a Consultation</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

