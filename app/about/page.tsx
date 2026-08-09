import type { Metadata } from "next";
import Header from "../components/Header";
import MegaFooter from "../components/MegaFooter";
import AboutHero from "./components/AboutHero";
import ExecutiveMessage from "./components/ExecutiveMessage";
import VisionMissionValues from "./components/VisionMissionValues";
import CorporateGovernance from "./components/CorporateGovernance";
import QualityCSR from "./components/QualityCSR";
import RegulatoryCompliance from "./components/RegulatoryCompliance";

export const metadata: Metadata = {
  title: "About Us | Turboserv Insurance Brokers Limited",
  description:
    "Learn about Turboserv Insurance Brokers Limited — a leading professional insurance brokerage and risk management consulting firm in Lagos, Nigeria. Discover our vision, leadership, and commitment to corporate excellence.",
  alternates: { canonical: "https://turboservbrokers.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-white about-page-theme">
        <AboutHero />
        <ExecutiveMessage />
        <VisionMissionValues />
        <CorporateGovernance />
        <QualityCSR />
        <RegulatoryCompliance />
        <MegaFooter />
      </main>
    </>
  );
}
