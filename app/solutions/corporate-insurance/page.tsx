import type { Metadata } from "next";
import Header from "../../components/Header";
import MegaFooter from "../../components/MegaFooter";
import CorporateHero from "./components/CorporateHero";
import SolutionsShowcase from "./components/SolutionsShowcase";
import BrokersEdge from "./components/BrokersEdge";
import EnterpriseCTA from "./components/EnterpriseCTA";

export const metadata: Metadata = {
  title: "Corporate Insurance Solutions | Turboserv Insurance Brokers Limited",
  description:
    "Turboserv provides comprehensive corporate insurance solutions in Nigeria — including Fire & Special Perils, Marine, Engineering, CAR, Professional Indemnity, Oil & Gas, and Business Interruption. Structured by expert risk management brokers in Lagos.",
  keywords: [
    "corporate insurance Nigeria",
    "corporate insurance solutions Lagos",
    "fire and special perils insurance Nigeria",
    "marine insurance Lagos",
    "engineering insurance Nigeria",
    "professional indemnity Nigeria",
    "business interruption insurance",
    "oil and gas insurance Nigeria",
    "Turboserv corporate insurance",
  ],
  alternates: { canonical: "https://turboservbrokers.com/solutions/corporate-insurance" },
  openGraph: {
    title: "Corporate Insurance Solutions | Turboserv Insurance Brokers",
    description:
      "11 corporate insurance covers, structured by expert brokers. Fire & Perils, Marine, Engineering, CAR, PI, Oil & Gas, Business Interruption, and more.",
    url: "https://turboservbrokers.com/solutions/corporate-insurance",
  },
};

export default function CorporateInsurancePage() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-white life-health-page-theme">
        <CorporateHero />
        <SolutionsShowcase />
        <BrokersEdge />
        <EnterpriseCTA />
        <MegaFooter hideCTA />
      </main>
    </>
  );
}
