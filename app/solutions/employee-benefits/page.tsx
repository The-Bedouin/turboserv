import type { Metadata } from "next";
import Header from "../../components/Header";
import MegaFooter from "../../components/MegaFooter";
import EmployeeBenefitsHero from "./components/EmployeeBenefitsHero";
import EmployeeBenefitsShowcase from "./components/EmployeeBenefitsShowcase";
import WhyEmployeeBenefits from "./components/WhyEmployeeBenefits";
import EmployeeBenefitsCTA from "./components/EmployeeBenefitsCTA";

export const metadata: Metadata = {
  title: "Employee Benefits & Pension Insurance | Turboserv Insurance Brokers Limited",
  description:
    "Turboserv structures institutional employee benefits in Nigeria — Statutory Group Life Assurance, Pension-related Insurance, HMO Medical Insurance, Gratuity Protection, and Executive Healthcare.",
  keywords: [
    "statutory group life insurance Nigeria",
    "pension related insurance Lagos",
    "comprehensive medical insurance Nigeria",
    "employee benefits broker Lagos",
    "PenCom group life compliance",
    "corporate HMO broker Nigeria",
    "Turboserv employee benefits",
  ],
  alternates: { canonical: "https://turboservbrokers.com/solutions/employee-benefits" },
  openGraph: {
    title: "Employee Benefits & Pension Insurance | Turboserv Insurance Brokers",
    description:
      "Statutory Group Life, Pension-related Insurance, HMO Medical, Gratuity, and Executive Healthcare plans structured by specialist corporate brokers.",
    url: "https://turboservbrokers.com/solutions/employee-benefits",
  },
};

export default function EmployeeBenefitsPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-white life-health-page-theme">
        <EmployeeBenefitsHero />
        <EmployeeBenefitsShowcase />
        <WhyEmployeeBenefits />
        <EmployeeBenefitsCTA />
        <MegaFooter hideCTA />
      </main>
    </>
  );
}
