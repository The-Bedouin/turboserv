import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Inter, Playfair_Display, Great_Vibes, Merriweather, Montserrat, Roboto } from "next/font/google";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Turboserv Insurance Brokers Limited | Corporate Insurance Brokers in Lagos",
    template: "%s | Turboserv Insurance Brokers Limited",
  },
  description:
    "Turboserv Insurance Brokers Limited is a leading professional insurance brokerage and risk management consulting firm in Victoria Island, Lagos, Nigeria. We provide comprehensive corporate insurance solutions.",
  keywords: [
    "Corporate Insurance Brokers in Lagos",
    "insurance brokers Lagos",
    "risk management Nigeria",
    "corporate insurance solutions",
    "business insurance Lagos",
    "Turboserv Insurance",
    "Victoria Island insurance broker",
  ],
  authors: [{ name: "Turboserv Insurance Brokers Limited" }],
  creator: "Turboserv Insurance Brokers Limited",
  publisher: "Turboserv Insurance Brokers Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/TURBOSERVLOGO.png",
    shortcut: "/TURBOSERVLOGO.png",
    apple: "/TURBOSERVLOGO.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://turboservbrokers.com",
    siteName: "Turboserv Insurance Brokers Limited",
    title:
      "Turboserv Insurance Brokers Limited | Corporate Insurance Brokers in Lagos",
    description:
      "Professional insurance brokerage and risk management consulting firm dedicated to providing comprehensive insurance solutions in Lagos, Nigeria.",
    images: [
      {
        url: "/TURBOSERVLOGO.png",
        width: 800,
        height: 250,
        alt: "Turboserv Insurance Brokers Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turboserv Insurance Brokers Limited",
    description:
      "Professional insurance brokerage and risk management consulting firm in Lagos, Nigeria.",
    images: ["/TURBOSERVLOGO.png"],
  },
  metadataBase: new URL("https://turboservbrokers.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfairDisplay.variable} ${greatVibes.variable} ${merriweather.variable} ${montserrat.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
