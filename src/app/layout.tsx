import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { Navigation } from "@/components/navigation";
import { WhatsAppFloatingWidget } from "@/components/whatsapp-floating";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GrowDesk | Strategic Communications & Narrative Advisory",
    template: "%s | GrowDesk",
  },
  description:
    "Flight PR advises founders, businesses, and institutions navigating commercial growth, brand building, and high-stakes inflection points.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-[#000000] text-[#FFFFFF]">
        <SmoothScrollProvider>
          <Navigation />
          {children}
          <WhatsAppFloatingWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
