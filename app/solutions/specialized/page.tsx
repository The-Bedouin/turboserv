import type { Metadata } from "next";
import Header from "../../components/Header";
import MegaFooter from "../../components/MegaFooter";
import SpecializedHero from "./components/SpecializedHero";
import SpecializedShowcase from "./components/SpecializedShowcase";
import WhySpecialized from "./components/WhySpecialized";
import SpecializedCTA from "./components/SpecializedCTA";

export const metadata: Metadata = {
  title: "Specialized Insurance & SME Solutions | Turboserv Insurance Brokers Limited",
  description:
    "Turboserv provides specialized insurance solutions in Nigeria — SME Microinsurance, Loan Protection, Car Park & Valet Liability, Risk Management Consultancy, and Claims Administration & Advisory.",
  keywords: [
    "SME microinsurance Nigeria",
    "loan protection insurance Lagos",
    "car park valet liability insurance",
    "risk management consultancy Nigeria",
    "claims administration advisory Lagos",
    "specialized insurance broker Nigeria",
    "Turboserv specialized solutions",
  ],
  alternates: { canonical: "https://turboservbrokers.com/solutions/specialized" },
  openGraph: {
    title: "Specialized Insurance & SME Solutions | Turboserv Insurance Brokers",
    description:
      "5 niche corporate & SME risk covers — Microinsurance for SMEs, Loan Protection, Car Park Liability, Risk Advisory, and Claims Administration.",
    url: "https://turboservbrokers.com/solutions/specialized",
  },
};

export default function SpecializedPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-white life-health-page-theme">
        <SpecializedHero />
        <SpecializedShowcase />
        <WhySpecialized />
        <SpecializedCTA />
        <MegaFooter hideCTA />
      </main>
    </>
  );
}
