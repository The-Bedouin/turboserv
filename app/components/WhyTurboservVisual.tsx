"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   NODE DATA — Minimal, non-sensitive, high-impact pillars
   ───────────────────────────────────────────────────────────── */
const nodes = [
  {
    id: "advisory",
    label: "Risk Advisory",
    subtitle: "Tailored Risk Audit",
    position: "-top-4 -left-2 sm:-left-6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "coverage",
    label: "Bespoke Defense",
    subtitle: "Custom Policy Structures",
    position: "-top-4 -right-2 sm:-right-6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "markets",
    label: "Tier-1 Markets",
    subtitle: "Unrestricted Underwriter Access",
    position: "-bottom-6 -left-2 sm:-left-6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "advocacy",
    label: "Claims Advocacy",
    subtitle: "Fast Settlement Priority",
    position: "-bottom-6 -right-2 sm:-right-6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function WhyTurboservVisual() {
  const [activeNode, setActiveNode] = useState<string>("advisory");

  return (
    <div className="relative w-full max-w-lg mx-auto py-6 flex flex-col items-center">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/15 via-navy-800/30 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Main Visual Interactive Stage */}
      <div className="relative w-full aspect-square max-w-[360px] sm:max-w-[400px] flex items-center justify-center">
        {/* Outer Orbit Rings */}
        <div className="absolute inset-0 rounded-full border border-red-500/20 animate-[spin_40s_linear_infinite]" />
        <div className="absolute inset-6 rounded-full border border-dashed border-white/10" />
        <div className="absolute inset-16 rounded-full border border-white/5" />

        {/* Diagonal Tech Crosshairs */}
        <svg className="absolute inset-0 w-full h-full text-white/10 pointer-events-none" viewBox="0 0 400 400">
          <line x1="80" y1="80" x2="320" y2="320" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" />
          <line x1="320" y1="80" x2="80" y2="320" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" />
        </svg>

        {/* Central Core Emblem */}
        <motion.div
          className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-navy-900 border-2 border-red-500/50 shadow-[0_0_35px_rgba(220,38,38,0.35)] flex flex-col items-center justify-center p-2 text-center group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Inner core pulse */}
          <div className="absolute inset-0 rounded-full bg-red-600/20 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
          
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 mb-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="text-[0.62rem] font-bold tracking-widest text-white uppercase">
            TURBOSERV
          </span>
          <span className="text-[0.55rem] text-red-400 font-medium tracking-tight">
            VANGUARD
          </span>
        </motion.div>

        {/* 4 Interactive Nodes */}
        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <motion.button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              onMouseEnter={() => setActiveNode(node.id)}
              className={`absolute z-30 ${node.position} flex items-center gap-2.5 px-3.5 py-2 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                isActive
                  ? "bg-red-950/80 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] scale-105"
                  : "bg-navy-900/80 border-white/10 text-slate-300 hover:border-red-500/50 hover:text-white"
              }`}
              whileHover={{ y: -2 }}
            >
              <span className={`p-1.5 rounded-lg transition-colors ${isActive ? "bg-red-600 text-white" : "bg-navy-800 text-red-400"}`}>
                {node.icon}
              </span>
              <div className="text-left">
                <div className="text-xs font-semibold leading-tight">{node.label}</div>
                <div className="text-[0.65rem] text-slate-400 font-normal leading-tight">{node.subtitle}</div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Trust Badges Bar — Minimalist pill indicators (No cards, No sensitive numbers) */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900/90 border border-navy-800 text-slate-300 text-[0.7rem] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          NAICOM Licensed Broker
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900/90 border border-navy-800 text-slate-300 text-[0.7rem] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Enterprise Risk Protection
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900/90 border border-navy-800 text-slate-300 text-[0.7rem] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Independent Advocacy
        </span>
      </div>
    </div>
  );
}
