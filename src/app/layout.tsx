import { Suspense } from "react";

import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Geist_Mono, Work_Sans } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import { HydrationFix } from "@/components/HydrationFix";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { siteMetadata } from "@/lib/metadata";
import "@/styles/globals.css";

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

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${dmSans.variable} ${geistMono.variable} ${workSans.variable} ${cormorantGaramond.variable} antialiased`}
                suppressHydrationWarning={true}
            >
                <Suspense fallback={null}>
                    <SEOHead />
                    <StructuredData />
                </Suspense>

                <HydrationFix />

                {children}

                <Suspense fallback={null}>
                    <Analytics />
                </Suspense>
            </body>
        </html>
    );
}
