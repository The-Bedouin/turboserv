"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* ── Member Interface ── */
interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin: string;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
}

/* ── Board of Directors data ── */
const boardMembers: TeamMember[] = [
  {
    name: "Ezime Tunde-Imoyo",
    title: "Board of Director",
    image: "/EzimeTunde-Imoyo.jpeg",
    bio: "A seasoned governance professional bringing strategic oversight and deep industry expertise to Turboserv's board.",
    linkedin: "#",
  },
  {
    name: "Prince Aderemi Sijuwade",
    title: "Board of Director",
    image: "/PrinceAderemiSijuwade.jpeg",
    bio: "Provides visionary leadership and broad institutional knowledge that guides Turboserv's long-term growth and client commitments.",
    linkedin: "#",
  },
  {
    name: "Captain Jamil MD Abubakar",
    title: "Board of Director",
    image: "/CaptainJamilAbubakar.jpeg",
    bio: "Brings distinguished leadership experience and a rigorous risk-management perspective to the company's strategic direction.",
    linkedin: "#",
  },
];

/* ── Management Team data ── */
const managementMembers: TeamMember[] = [
  {
    name: "Tobi Shoda",
    title: "Head Finance & IT",
    image: "/TobiShoda.jpeg",
    bio: "Oversees financial planning, reporting, and technology infrastructure — ensuring Turboserv operates with precision and resilience.",
    linkedin: "#",
  },
  {
    name: "Endurance Benson",
    title: "Head of Administration",
    image: "/EnduranceBenson.png",
    bio: "Drives operational excellence across all administrative functions, keeping the business running smoothly day-to-day.",
    linkedin: "#",
    imageStyle: {
      objectPosition: "80% 15%",
      transform: "scale(1.75) translateX(-8%)",
      transformOrigin: "center center",
    },
  },
  {
    name: "Stella Agwu",
    title: "Head Marketing & Sales",
    image: "/StellaAgwu.jpeg",
    bio: "Champions brand growth and client acquisition, translating Turboserv's expertise into compelling market propositions.",
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
  imageClassName,
  imageStyle,
}: TeamMember) {
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
            className={`object-cover ${imageClassName || "object-top"}`}
            style={imageStyle}
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

/* ── Sub-section component ── */
function TeamSection({
  label,
  heading,
  subheading,
  members,
  headingAccent,
  labelCustom,
}: {
  label: string;
  heading: string;
  subheading: string;
  members: typeof boardMembers;
  headingAccent: string;
  labelCustom: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="mb-24 last:mb-0">
      {/* Sub-section header */}
      <motion.div
        className="max-w-2xl mb-14"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.span
          className="inline-block px-4 py-1.5 bg-navy-50 text-navy-800 border border-navy-100 text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-6"
          variants={fadeUp}
          custom={0}
        >
          {label}
        </motion.span>
        <motion.h2
          className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold leading-[1.1] tracking-[-0.025em] text-navy-950 mb-4"
          style={{ fontFamily: "var(--font-display)" }}
          variants={fadeUp}
          custom={1}
        >
          {heading}{" "}
          <span className="text-red-500">{headingAccent}</span>
        </motion.h2>
        <motion.p
          className="text-slate-500 text-[0.9375rem] leading-relaxed"
          variants={fadeUp}
          custom={2}
        >
          {subheading}
        </motion.p>
      </motion.div>

      {/* Staggered card grid */}
      <motion.div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          members.length === 3
            ? "lg:grid-cols-3"
            : "lg:grid-cols-4"
        } gap-6`}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {members.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </motion.div>
    </div>
  );
}

/* ── Main export ── */
export default function CoreTeamGrid() {
  return (
    <section
      id="core-team"
      className="py-24 md:py-32 bg-slate-50 overflow-hidden"
      aria-label="Board of Directors and Management Team"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Board of Directors */}
        <TeamSection
          label="Board of Directors"
          heading="Strategic Governance &"
          headingAccent="Oversight"
          subheading="Our board brings decades of collective leadership, corporate governance, and industry expertise to steer Turboserv's long-term vision."
          members={boardMembers}
          labelCustom={0}
        />

        {/* Divider */}
        <div className="border-t border-slate-200 my-4" aria-hidden="true" />

        {/* Management Team */}
        <TeamSection
          label="Management Team"
          heading="Operational Excellence &"
          headingAccent="Execution"
          subheading="Our management team translates board strategy into measurable results — driving finance, administration, and client growth with precision."
          members={managementMembers}
          labelCustom={3}
        />
      </div>
    </section>
  );
}
