import type { NextConfig } from "next";
import createNextPWA from "@ducanh2912/next-pwa";

const isDev = process.env.NODE_ENV === "development";

const withPWA = createNextPWA({
  dest: "public",
  disable: isDev,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  workboxOptions: {
    navigateFallback: "/offline",
    clientsClaim: true,
    skipWaiting: true,
  },
});

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ["react", "react-dom", "@vercel/analytics"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "justjapa.com",
      },
    ],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
    {
      source: "/(.*)\\.(css|js|woff2|woff|ttf|svg|png|jpg|jpeg|gif|ico|webp|avif)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
};

export default withPWA(nextConfig);
