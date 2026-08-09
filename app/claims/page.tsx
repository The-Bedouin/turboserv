import type { Metadata } from "next";
import Header from "../components/Header";
import MegaFooter from "../components/MegaFooter";
import ClaimsHero from "./components/ClaimsHero";
import BrokerAdvantage from "./components/BrokerAdvantage";
import ClaimsProcess from "./components/ClaimsProcess";
import SubmissionHub from "./components/SubmissionHub";
import ClaimsFAQ from "./components/ClaimsFAQ";

export const metadata: Metadata = {
  title: "Claims & Advocacy | Turboserv Insurance Brokers Limited",
  description:
    "Dedicated insurance claims advocacy and support from Turboserv. We handle everything from documentation to settlement, ensuring your claims are resolved swiftly and fairly.",
  alternates: { canonical: "https://turboservbrokers.com/claims" },
};

export default function ClaimsPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-white claims-page-theme">
        <ClaimsHero />
        <BrokerAdvantage />
        <ClaimsProcess />
        <SubmissionHub />
        <ClaimsFAQ />
        <MegaFooter />
      </main>
    </>
  );
}
