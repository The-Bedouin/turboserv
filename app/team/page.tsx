import type { Metadata } from "next";
import Header from "../components/Header";
import MegaFooter from "../components/MegaFooter";
import TeamHero from "./components/TeamHero";
import LeadershipSpotlight from "./components/LeadershipSpotlight";
import CoreTeamGrid from "./components/CoreTeamGrid";
import TeamCTA from "./components/TeamCTA";

export const metadata: Metadata = {
  title: "Our Team | Turboserv Insurance Brokers Limited",
  description:
    "Meet the seasoned risk advisors, certified brokers, and client champions behind Turboserv Insurance Brokers Limited — Nigeria's most trusted corporate insurance brokerage.",
  keywords: [
    "Turboserv team",
    "insurance brokers Nigeria",
    "risk management experts Lagos",
    "Moses Femi Amupitan",
    "corporate insurance advisors Nigeria",
  ],
  alternates: { canonical: "https://turboservbrokers.com/team" },
  openGraph: {
    title: "Our Team | Turboserv Insurance Brokers Limited",
    description:
      "Meet the seasoned risk advisors and certified brokers behind Nigeria's most trusted corporate insurance brokerage.",
    url: "https://turboservbrokers.com/team",
  },
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-white about-page-theme">
        <TeamHero />
        <LeadershipSpotlight />
        <CoreTeamGrid />
        <TeamCTA />
        <MegaFooter hideCTA />
      </main>
    </>
  );
}
