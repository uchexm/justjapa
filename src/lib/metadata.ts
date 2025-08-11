import { Metadata } from "next";

import CONSTANTS from "@/lib/constants";

const appName = CONSTANTS.appName;
const baseUrl = CONSTANTS.appUrl;

export const siteMetadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: `${appName} | ${CONSTANTS.slogan}`,
        template: `%s :: ${appName}`,
    },
    description: CONSTANTS.description,
    keywords: CONSTANTS.keywords,
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow",
    },
    appleWebApp: {
        title: CONSTANTS.appName,
        statusBarStyle: "black-translucent",
        capable: true,
    },
    openGraph: {
        title: {
            default: appName,
            template: `%s :: ${appName}`,
        },
        description: CONSTANTS.description,
        locale: "en_US",
        url: baseUrl,
        type: "website",
        siteName: appName,
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
        title: CONSTANTS.slogan + " | " + appName,
        description: CONSTANTS.description,
        images: ["/og"],
    },
    manifest: "/manifest.webmanifest",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icons/manifest-icon-192.maskable.png", sizes: "192x192", type: "image/png" },
            { url: "/icons/manifest-icon-512.maskable.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [{ url: "/icons/apple-icon-180.png", sizes: "180x180" }],
    },
    applicationName: appName,
    authors: [CONSTANTS.author],
};
