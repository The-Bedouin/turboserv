"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* ── Team member data ── */
const teamMembers = [
  {
    name: "Ezime Tunde-Imoyo",
    title: "Head of Risk Management",
    image: "/EzimeTunde-Imoyo.jpeg",
    bio: "Specialist in enterprise risk assessment and structured insurance programmes for Nigeria's financial services sector.",
    linkedin: "#",
  },
  {
    name: "Endurance Benson",
    title: "Senior Technical Broker",
    image: "/EnduranceBenson.png",
    bio: "Brings deep technical underwriting knowledge across marine, engineering, and property classes for complex commercial risks.",
    linkedin: "#",
  },
  {
    name: "Tobi Shoda",
    title: "Claims Advocacy Lead",
    image: "/TobiShoda.jpeg",
    bio: "Dedicated to securing fair, prompt claim settlements — acting as the client's champion throughout every step of the process.",
    linkedin: "#",
  },
  {
    name: "Stella Agwu",
    title: "Client Relations Director",
    image: "/StellaAgwu.jpeg",
    bio: "Ensures every Turboserv client receives a personalised, consultative experience from on-boarding through renewal.",
    linkedin: "#",
  },
];

/* ── Animation variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

/* ── LinkedIn icon ── */
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ── Individual team card ── */
function TeamCard({
  name,
  title,
  image,
  bio,
  linkedin,
}: {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin: string;
}) {
  return (
    <motion.article
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-shadow duration-500"
      variants={cardVariants}
    >
      {/* Portrait image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-navy-100">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <Image
            src={image}
            alt={`${name} — ${title} at Turboserv Insurance Brokers`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
          />
        </motion.div>

        {/* Gradient overlay at the bottom of image */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/50 to-transparent pointer-events-none" />

        {/* LinkedIn icon — top-right, revealed on hover */}
        <a
          href={linkedin}
          aria-label={`${name} on LinkedIn`}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm border border-white/60 flex items-center justify-center text-navy-950 hover:bg-navy-950 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-md"
        >
          <LinkedInIcon />
        </a>
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="text-navy-950 font-bold text-[1rem] leading-tight mb-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h3>
        <p className="text-red-600 text-[0.75rem] font-semibold tracking-wide uppercase mb-3">
          {title}
        </p>
        <p className="text-slate-500 text-[0.8125rem] leading-relaxed flex-1">
          {bio}
        </p>

        {/* Divider + LinkedIn link (always-visible for accessibility) */}
        <div className="border-t border-slate-100 mt-5 pt-4">
          <a
            href={linkedin}
            aria-label={`Connect with ${name} on LinkedIn`}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-navy-950 text-[0.8125rem] font-medium transition-colors duration-300"
          >
            <LinkedInIcon />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Main export ── */
export default function CoreTeamGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="core-team"
      className="py-24 md:py-32 bg-slate-50 overflow-hidden"
      aria-label="Core team"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-navy-50 text-navy-800 border border-navy-100 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-6"
            variants={fadeUp}
            custom={0}
          >
            Core Team
          </motion.span>
          <motion.h2
            className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.025em] text-navy-950 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
            custom={1}
          >
            Experts Committed to{" "}
            <span className="text-red-500">Your Protection</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 text-[0.9375rem] leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
            Each member of our team brings specialist expertise and a genuine
            commitment to delivering bespoke risk solutions for our clients.
          </motion.p>
        </motion.div>

        {/* Staggered card grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
