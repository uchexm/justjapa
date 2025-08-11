import { MetadataRoute } from "next";

import CONSTANTS from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl: string = CONSTANTS.appUrl;

    // JustJapa static pages
    const staticPages = ["", "/coming-soon", "/success"];

    // Static pages sitemap entries
    const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: page === "" ? 1 : 0.8,
    }));

    return staticEntries;
}
