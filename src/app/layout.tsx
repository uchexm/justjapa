import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { DM_Sans, Geist_Mono, Work_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DesignOverlay } from "@/components/DesignOverlay";
import { StructuredData } from "@/components/StructuredData";
import { SEOHead } from "@/components/SEOHead";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://justjapa.app"),
  title: {
    default: "JustJapa — Your Ultimate Immigration Companion App",
    template: "%s | JustJapa",
  },
  description: "Set your migration goal, get matched instantly, and access everything in one place. Just Japa helps with education, work, and tourist migration to UK, USA, Canada, Australia and Europe.",
  applicationName: "JustJapa",
  keywords: [
    "japa", "nigeria japa", "how to japa", "japa process", "japa guide", "japa assistance",
    "immigration", "migration", "relocate", "travel abroad", "study abroad", "work abroad",
    "visa to USA", "visa to UK", "visa to Canada", "visa to Australia", "visa to Europe",
    "UK immigration", "USA immigration", "Canada immigration", "australia immigration",
    "student visa", "work visa", "tourist visa", "family visa", "sponsorship visa",
    "flight to london", "flight to USA", "flight to canada", "cheap flights abroad",
    "travel documents", "passport application", "visa application", "immigration documents",
    "study in UK", "study in USA", "study in canada", "study in australia", "study overseas",
    "work in UK", "work in USA", "work in canada", "work abroad opportunities",
    "nigeria to UK", "nigeria to USA", "nigeria to canada", "nigeria to australia",
    "emigration from nigeria", "leave nigeria", "travel from nigeria", "relocate from nigeria",
    "trump immigration", "UK visa requirements", "USA visa requirements", "schengen visa",
    "document scanning", "visa tracking", "immigration assistant", "migration app",
    "justjapa", "just japa", "japa app", "immigration app", "travel app nigeria", "AI", 
    "AI Immigration agent", "Agents", "agent", "AI Immigration", "AI Immigration assistant", "Immigration agent",
    "Travel agent", "Travel agents", "Travel agency", "Travel agencies", "Travel agency services", "Travel agency services",
  ],
  authors: [{ name: "JustJapa Team" }],
  creator: "JustJapa",
  publisher: "JustJapa",
  category: "Immigration & Travel",
  manifest: "/manifest.webmanifest",
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
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/manifest-icon-192.maskable.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/manifest-icon-512.maskable.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-icon-180.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "JustJapa",
    title: "JustJapa — Your Ultimate Immigration Companion App",
    description: "Set your migration goal, get matched instantly, and access everything in one place. Just Japa helps with education, work, and tourist migration to UK, USA, Canada, Australia and Europe.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "JustJapa - Immigration Companion App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@JustJapa",
    creator: "@JustJapa",
    title: "JustJapa — Your Ultimate Immigration Companion App",
    description: "Set your migration goal, get matched instantly, and access everything in one place. Just Japa helps with education, work, and tourist migration to UK, USA, Canada, Australia and Europe.",
    images: [
      {
        url: "/og",
        alt: "JustJapa - Immigration Companion App",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <SEOHead />
      </head>
      <body className={`${dmSans.variable} ${geistMono.variable} ${workSans.variable} ${cormorantGaramond.variable} antialiased`} suppressHydrationWarning>
        <Suspense fallback={null}>
          <DesignOverlay />
        </Suspense>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
