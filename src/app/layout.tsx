import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { Navigation } from "@/components/navigation";
import { WhatsAppFloatingWidget } from "@/components/whatsapp-floating";
import { GlobalAgencySchema } from "@/components/seo/json-ld";
import { AGENCY_INFO } from "@/data/seo-data";

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
  metadataBase: new URL(AGENCY_INFO.url),
  title: {
    default: "GrowDesk Media | #1 Digital Marketing, Performance Ads & Automation Agency in Chhattisgarh",
    template: "%s | GrowDesk Media",
  },
  description:
    "GrowDesk Media (Growdex) is Central India & Chhattisgarh's premier digital marketing, paid advertising, and business automation agency. Serving Raipur, Bilaspur, Durg, Bhilai, Korba, Nagpur, MP & Odisha. Meta & Google Ads, Lead Gen, Reel Production, Web Dev, SEO, WhatsApp Marketing & AI Chatbots.",
  applicationName: "GrowDesk Media",
  authors: [{ name: "GrowDesk Media", url: AGENCY_INFO.url }],
  generator: "Next.js",
  keywords: [
    "digital marketing agency in Chhattisgarh",
    "Growdex Media",
    "GrowDesk Media",
    "paid advertisement agency Raipur",
    "lead generation agency Bilaspur",
    "social media marketing Chhattisgarh",
    "Instagram reel production Raipur",
    "video production agency Bilaspur",
    "graphic designing company Chhattisgarh",
    "copywriting services Central India",
    "web development company Raipur",
    "SEO agency in Chhattisgarh",
    "best SEO company Durg Bhilai",
    "business automation agency Raipur",
    "WhatsApp marketing agency Chhattisgarh",
    "AI chatbots for business Bilaspur",
    "branding and offline marketing Raipur",
    "billboard advertising Chhattisgarh",
    "digital marketing agency Nagpur",
    "performance marketing agency Madhya Pradesh",
    "digital marketing company Odisha",
    "student admission lead generation",
    "real estate marketing Raipur"
  ],
  referrer: "origin-when-cross-origin",
  creator: "GrowDesk Media",
  publisher: "GrowDesk Media",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: AGENCY_INFO.url,
    siteName: "GrowDesk Media",
    title: "GrowDesk Media | #1 Digital Marketing, Performance Ads & Automation Agency",
    description:
      "GrowDesk Media powers ambitious brands with paid advertising, lead generation, viral Instagram reels, custom web development, SEO, and WhatsApp AI automation across Chhattisgarh and Central India.",
    images: [
      {
        url: "/images/growdesk-w-logo.png",
        width: 1200,
        height: 630,
        alt: "GrowDesk Media - Digital Marketing & Business Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowDesk Media | Digital Marketing & Automation Agency",
    description:
      "Leading digital marketing, paid ads, web development, SEO, and business automation agency across Raipur, Bilaspur, Durg, Bhilai, Nagpur, MP & Odisha.",
    images: ["/images/growdesk-w-logo.png"],
    creator: "@growdeskmedia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/growdesk-icon.svg", type: "image/svg+xml" },
      { url: "/images/growdesk-w-logo.png", type: "image/png" },
    ],
    shortcut: "/images/growdesk-icon.svg",
    apple: "/images/growdesk-w-logo.png",
  },
  other: {
    "geo.region": "IN-CT",
    "geo.placename": "Raipur, Chhattisgarh, India",
    "geo.position": "21.2514;81.6296",
    ICBM: "21.2514, 81.6296",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${cormorant.variable}`}>
      <head>
        <GlobalAgencySchema />
      </head>
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
