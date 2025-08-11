import CONSTANTS from "@/lib/constants";

export function getOrganizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: CONSTANTS.appName,
        description: CONSTANTS.description,
        url: CONSTANTS.appUrl,
        logo: `${CONSTANTS.appUrl}/logo.svg`,
        sameAs: [
            CONSTANTS.socials.twitter,
            CONSTANTS.socials.instagram,
            CONSTANTS.socials.linkedin,
            CONSTANTS.socials.github,
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: CONSTANTS.phoneNumber,
            contactType: "Customer Service",
            email: CONSTANTS.email,
        },
        address: {
            "@type": "PostalAddress",
            addressCountry: "NG",
            addressLocality: CONSTANTS.address,
        },
    };
}

export function getWebsiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: CONSTANTS.appName,
        description: CONSTANTS.description,
        url: CONSTANTS.appUrl,
        author: {
            "@type": "Organization",
            name: CONSTANTS.author.name,
            url: CONSTANTS.author.url,
        },
        publisher: {
            "@type": "Organization",
            name: CONSTANTS.author.name,
            url: CONSTANTS.author.url,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${CONSTANTS.appUrl}?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
}

export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
                "@type": "Answer",
                text: answer,
            },
        })),
    };
}
