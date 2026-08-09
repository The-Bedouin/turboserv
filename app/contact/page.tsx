import type { Metadata } from "next";
import Header from "../components/Header";
import MegaFooter from "../components/MegaFooter";
import ContactContent from "./components/ContactContent";
import BigBrandFooter from "../components/BigBrandFooter";

export const metadata: Metadata = {
  title: "Contact Us | Turboserv Insurance Brokers Limited",
  description:
    "Get in touch with Turboserv Insurance Brokers Limited in Victoria Island, Lagos. Request a free risk audit, policy review, or claims support today.",
  alternates: { canonical: "https://turboservbrokers.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-white contact-page-theme">
        <ContactContent />
        <BigBrandFooter />
        <MegaFooter hideCTA={true} />
      </main>
    </>
  );
}
