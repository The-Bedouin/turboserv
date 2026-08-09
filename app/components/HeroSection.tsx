"use client";

import Header from "./Header";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <>
      {/* ================================================================
          FIXED BACKGROUND LAYER
          Stays pinned behind everything. The content scrolls over it.
          ================================================================ */}
      <div
        className="fixed inset-0 w-full h-screen z-0"
        aria-hidden="true"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/turboserveoffice.mp4" type="video/mp4" />
        </video>
        {/* Subtle darkening overlay for contrast */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* ================================================================
          HERO VIEWPORT (scrollable layer on top of the fixed background)
          The hero takes up 100vh and contains the floating header + card.
          As the user scrolls, this entire layer (and the next section)
          slides up OVER the fixed background, creating the parallax.
          ================================================================ */}
      <section
        className="relative z-10 h-screen flex items-center justify-center"
        id="hero"
        aria-label="Hero introduction"
      >
        <Header />
        <HeroContent />
      </section>
    </>
  );
}
