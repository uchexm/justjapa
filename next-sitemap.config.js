/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://justjapa.app",
    generateRobotsTxt: true,
    changefreq: "daily",
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ["/auth/*", "/api/*", "/offline"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/auth/", "/api/"],
            },
        ],
        additionalSitemaps: ["https://justjapa.app/sitemap.xml"],
    },
    transform: async (config, path) => {
        // Custom transform for specific paths
        if (path === "/") {
            return {
                loc: path,
                changefreq: "daily",
                priority: 1.0,
                lastmod: new Date().toISOString(),
            };
        }

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString(),
        };
    },
};
