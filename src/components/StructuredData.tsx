import Script from 'next/script';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://justjapa.app/#website",
        "url": "https://justjapa.app/",
        "name": "JustJapa",
        "description": "Your Ultimate Immigration Companion App",
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://justjapa.app/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://justjapa.app/#organization",
        "name": "JustJapa",
        "url": "https://justjapa.app/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://justjapa.app/#/schema/logo/image/",
          "url": "https://justjapa.app/logo.svg",
          "contentUrl": "https://justjapa.app/logo.svg",
          "width": 512,
          "height": 512,
          "caption": "JustJapa"
        },
        "image": {
          "@id": "https://justjapa.app/#/schema/logo/image/"
        },
        "sameAs": [
          "https://twitter.com/JustJapa",
          "https://facebook.com/JustJapa",
          "https://instagram.com/JustJapa",
          "https://linkedin.com/company/JustJapa"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://justjapa.app/#webpage",
        "url": "https://justjapa.app/",
        "name": "JustJapa — Your Ultimate Immigration Companion App",
        "isPartOf": {
          "@id": "https://justjapa.app/#website"
        },
        "about": {
          "@id": "https://justjapa.app/#organization"
        },
        "description": "Join thousands on the JustJapa waitlist. Get early access to the ultimate immigration app with document scanning, AI chat agents, visa tracking, and expert guidance for your relocation journey.",
        "breadcrumb": {
          "@id": "https://justjapa.app/#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "JustJapa",
        "description": "Ultimate immigration companion app with document scanning, AI chat agents, visa tracking, and expert guidance",
        "applicationCategory": "Travel",
        "operatingSystem": "iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "ratingCount": "1000"
        }
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
