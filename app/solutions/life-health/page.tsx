import type { Metadata } from "next";
import Header from "../../components/Header";
import MegaFooter from "../../components/MegaFooter";
import LifeHealthHero from "./components/LifeHealthHero";
import LifeHealthShowcase from "./components/LifeHealthShowcase";
import WhyTurboserv from "./components/WhyTurboserv";
import BenefitsCTA from "./components/BenefitsCTA";

export const metadata: Metadata = {
  title: "Corporate Life & Health Insurance | Turboserv Insurance Brokers Limited",
  description:
    "Turboserv structures corporate life and health insurance programmes in Nigeria — Group Life Assurance, HMO Health Insurance, Group Personal Accident, Keyman Insurance, and Credit Life. Expert employee benefits brokerage in Lagos.",
  keywords: [
    "group life assurance Nigeria",
    "corporate health insurance Lagos",
    "HMO insurance Nigeria",
    "group personal accident insurance",
    "keyman insurance Nigeria",
    "credit life assurance",
    "employee benefits broker Lagos",
    "Turboserv life and health",
  ],
  alternates: { canonical: "https://turboservbrokers.com/solutions/life-health" },
  openGraph: {
    title: "Corporate Life & Health Insurance | Turboserv Insurance Brokers",
    description:
      "5 essential employee benefits covers — Group Life, HMO, GPA, Keyman, and Credit Life — structured by specialist brokers.",
    url: "https://turboservbrokers.com/solutions/life-health",
  },
};

export default function LifeHealthPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-white life-health-page-theme">
        <LifeHealthHero />
        <LifeHealthShowcase />
        <WhyTurboserv />
        <BenefitsCTA />
        <MegaFooter hideCTA />
      </main>
    </>
  );
}
