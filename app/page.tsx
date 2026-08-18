import type { Metadata } from "next";
import WhyTurboservVisual from "./components/WhyTurboservVisual";
import HeroSection from "./components/HeroSection";
import CoreSolutions from "./components/CoreSolutions";
import TurboservAdvantage from "./components/TurboservAdvantage";
import Testimonials from "./components/Testimonials";
import MegaFooter from "./components/MegaFooter";

/* ============================================================
   PAGE-LEVEL SEO METADATA
   Primary keyword: "Corporate Insurance Brokers in Lagos"
   ============================================================ */
export const metadata: Metadata = {
  title:
    "Corporate Insurance Brokers in Lagos | Turboserv Insurance Brokers Limited",
  description:
    "Turboserv Insurance Brokers Limited is a leading corporate insurance brokerage and risk management consulting firm in Victoria Island, Lagos. We provide comprehensive insurance solutions for businesses, individuals, and corporate organizations across Nigeria.",
  alternates: {
    canonical: "https://turboservbrokers.com",
  },
};

/* ============================================================
   JSON-LD STRUCTURED DATA — InsuranceAgency + FinancialService
   ============================================================ */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InsuranceAgency",
      "@id": "https://turboservbrokers.com/#organization",
      name: "Turboserv Insurance Brokers Limited",
      alternateName: "Turboserv Brokers",
      url: "https://turboservbrokers.com",
      description:
        "Turboserv Insurance Brokers Limited is a professional insurance brokerage and risk management consulting firm dedicated to providing comprehensive insurance solutions that protect individuals, businesses, and corporate organizations.",
      foundingDate: "2010",
      telephone: "+234-817-740-2607",
      email: "ezime@turboservbrokers.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "15B Karimu Kotun Street",
        addressLocality: "Victoria Island",
        addressRegion: "Lagos",
        addressCountry: "NG",
        postalCode: "101241",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "6.4281",
        longitude: "3.4219",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Nigeria",
        },
        {
          "@type": "City",
          name: "Lagos",
        },
      ],
      knowsAbout: [
        "Corporate Insurance",
        "Risk Management",
        "Insurance Brokerage",
        "Life Insurance",
        "Property Insurance",
        "Liability Insurance",
        "Marine Insurance",
        "Aviation Insurance",
        "Oil and Gas Insurance",
        "Professional Indemnity Insurance",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://turboservbrokers.com/#website",
      url: "https://turboservbrokers.com",
      name: "Turboserv Insurance Brokers Limited",
      publisher: {
        "@id": "https://turboservbrokers.com/#organization",
      },
    },
  ],
};

/* ============================================================
   PAGE COMPONENT — React Server Component
   ============================================================

   CURTAIN-REVEAL FOOTER ARCHITECTURE:
   ─────────────────────────────────────
   The <main> element has a solid bg-white + relative z-10,
   so it visually sits ABOVE the footer. The MegaFooter uses
   sticky bottom-0 -z-10, pinning it behind the content.

   As the user scrolls past all main content, <main> slides
   up and out of view, smoothly revealing the footer fixed
   underneath — like pulling back a curtain.
   ============================================================ */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* ================================================================
          MAIN CONTENT — solid background, higher z-index.
          This scrolls OVER the sticky footer, hiding it until
          the user reaches the very bottom of the page.
          ================================================================ */}
      <main className="relative z-10 bg-white home-page-theme">
        {/* ---- Hero Section (with parallax) ---- */}
        <HeroSection />

        {/* ---- About Section — scrolls OVER the fixed background ---- */}
        <section
          className="relative z-10 bg-navy-950 text-white"
          id="about"
        >
          {/* About & Risk Advisory intro */}
          <div className="max-w-6xl mx-auto px-6 py-12 md:px-12 md:py-14 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold tracking-wider uppercase rounded-md mb-5">
                  Why Turboserv
                </span>
                <h2
                  className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Protecting Assets.
                  <br />
                  <span className="text-red-500">Securing Corporate Growth.</span>
                </h2>
                <p className="text-slate-300 text-[0.95rem] leading-relaxed mb-6 max-w-lg">
                  Turboserv Insurance Brokers Limited is a professional insurance brokerage and risk management consulting firm based in Victoria Island, Lagos. We deliver tailored insurance portfolios, comprehensive risk audits, and prompt claims settlement for leading businesses across Nigeria.
                </p>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-3 text-[0.875rem] font-semibold text-white transition-colors duration-300 hover:text-red-400"
                >
                  <span>Explore Insurance Solutions</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <div className="w-full flex justify-center">
                <WhyTurboservVisual />
              </div>
            </div>
          </div>

          <CoreSolutions />
          <TurboservAdvantage />
          <Testimonials />
        </section>

        {/* Mega Footer sitting above background layer */}
        <MegaFooter />
      </main>
    </>
  );
}
