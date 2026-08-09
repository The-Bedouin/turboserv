"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faBoltLightning,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

interface Advantage {
  title: string;
  description: string;
  icon: IconDefinition;
}

const topAdvantages: Advantage[] = [
  {
    title: "Forceful Advocacy",
    description:
      "We negotiate aggressively on your behalf to guarantee the fairest possible settlement from underwriters.",
    icon: faGavel,
  },
  {
    title: "Speedy Settlements",
    description:
      "Our streamlined process and industry relationships ensure claims are resolved within the shortest timeframe.",
    icon: faBoltLightning,
  },
  {
    title: "End-to-End Management",
    description:
      "From initial incident report through to final payment, we own the entire claims lifecycle on your behalf.",
    icon: faShieldHalved,
  },
];

export default function BrokerAdvantage() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-navy-950 text-white" id="broker-advantage">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight mb-8">
                The Broker
                <br />
                Advantage for Fast
                <br />
                &amp; Fair Claims
              </h2>
            </motion.div>
            
            <motion.div
              className="hidden lg:block pb-2"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={1}
            >
              <p className="text-sm font-medium tracking-wide text-white/60">
                Dedicated Claims
                <br />
                Advocacy
              </p>
            </motion.div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              className="flex lg:justify-end mb-12 lg:mb-24"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={0.5}
            >
              <p className="text-white/80 text-sm md:text-base max-w-[280px] leading-relaxed">
                As your dedicated broker, we provide forceful advocacy to guarantee a fair settlement — managing every step from the initial report through to payment.
              </p>
            </motion.div>
            
            {/* Cards Row */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-auto"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={stagger}
            >
              {topAdvantages.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="bg-white text-navy-950 p-6 md:p-8 flex flex-col min-h-[300px] md:min-h-[380px] group transition-transform duration-300 hover:-translate-y-1 shadow-lg"
                  variants={fadeUp}
                  custom={idx + 2}
                >
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="text-[1.35rem] md:text-2xl font-medium leading-tight max-w-[150px] tracking-tight">
                      {item.title}
                    </h3>
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                      <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <p className="text-[0.875rem] text-slate-700 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
