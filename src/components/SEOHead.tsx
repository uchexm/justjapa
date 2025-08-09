import Head from 'next/head';

export function SEOHead() {
  return (
    <Head>
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="NG" />
      <meta name="geo.country" content="Nigeria" />
      <meta name="language" content="English" />
      <meta name="target_country" content="US,UK,CA,AU,DE,FR,IT,ES,NL" />
      
      {/* Location-specific meta tags */}
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Travel and Immigration specific meta tags */}
      <meta name="travel.destination" content="UK,USA,Canada,Australia,Europe" />
      <meta name="visa.types" content="student,work,tourist,family,business" />
      <meta name="immigration.services" content="visa application,document scanning,expert guidance" />
      
      {/* Japa-specific meta tags for Nigerian market */}
      <meta name="nigeria.japa" content="immigration assistance,visa guidance,travel abroad" />
      <meta name="target.audience" content="Nigerian travelers,immigrants,students,professionals" />
      
      {/* Additional relevant meta tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#0178FF" />
      
      {/* Schema.org meta tags */}
      <meta property="business:contact_data:country_name" content="Nigeria" />
      <meta property="business:contact_data:region" content="Lagos" />
      
      {/* Additional Open Graph tags for better social sharing */}
      <meta property="og:country-name" content="Nigeria" />
      <meta property="og:email" content="hello@justjapa.com" />
      <meta property="article:author" content="JustJapa Team" />
      <meta property="article:publisher" content="https://justjapa.com" />
      
      {/* Twitter additional tags */}
      <meta name="twitter:domain" content="justjapa.com" />
      <meta name="twitter:url" content="https://justjapa.com" />
      
      {/* Canonical and alternate URLs */}
      <link rel="canonical" href="https://justjapa.com" />
      <link rel="alternate" href="https://justjapa.com" hrefLang="en" />
      <link rel="alternate" href="https://justjapa.com" hrefLang="en-ng" />
      
      {/* Preconnect to important domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//vercel.live" />
    </Head>
  );
}
