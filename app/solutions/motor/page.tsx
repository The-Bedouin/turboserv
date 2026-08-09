import type { Metadata } from "next";
import Header from "../../components/Header";
import MegaFooter from "../../components/MegaFooter";
import MotorHero from "./components/MotorHero";
import MotorShowcase from "./components/MotorShowcase";
import WhyMotor from "./components/WhyMotor";
import MotorCTA from "./components/MotorCTA";

export const metadata: Metadata = {
  title: "Corporate Motor & Fleet Insurance | Turboserv Insurance Brokers Limited",
  description:
    "Turboserv structures corporate motor insurance in Nigeria — Comprehensive Motor Cover, Third Party Fire & Theft, Fleet Risk Management, Goods-in-Transit, and Executive Vehicle Insurance.",
  keywords: [
    "comprehensive motor insurance Nigeria",
    "corporate fleet insurance Lagos",
    "third party motor insurance Nigeria",
    "fleet risk management Lagos",
    "NIID motor registration Nigeria",
    "goods in transit motor rider",
    "Turboserv motor insurance",
  ],
  alternates: { canonical: "https://turboservbrokers.com/solutions/motor" },
  openGraph: {
    title: "Corporate Motor & Fleet Insurance | Turboserv Insurance Brokers",
    description:
      "Comprehensive Motor, Third Party, Fleet Risk Management, Goods-in-Transit, and Executive Vehicle covers structured by specialist brokers.",
    url: "https://turboservbrokers.com/solutions/motor",
  },
};

export default function MotorPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-white life-health-page-theme">
        <MotorHero />
        <MotorShowcase />
        <WhyMotor />
        <MotorCTA />
        <MegaFooter hideCTA />
      </main>
    </>
  );
}
