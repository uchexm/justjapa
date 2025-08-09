/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://justjapa.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/offline'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      { 
        userAgent: '*', 
        allow: '/',
        disallow: ['/api/', '/offline']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/offline']
      }
    ],
  },
  transform: async (config, path) => {
    // Custom priority for specific paths
    const priorities = {
      '/': 1.0,
      '/coming-soon': 0.8,
      '/success': 0.6,
    };

    const changefreqs = {
      '/': 'daily',
      '/coming-soon': 'weekly',
      '/success': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
