export function getOrganizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JustJapa",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    logo: "/icons/manifest-icon-512.maskable.png",
  };
}

export function getWebsiteJsonLd(): Record<string, unknown> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "JustJapa",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getFaqJsonLd(faqs: Array<{ question: string; answer: string }>): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
