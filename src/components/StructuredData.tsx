import { JsonLd } from "@/components/JsonLd";
import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/seo";

export function StructuredData() {
    const org = getOrganizationJsonLd();
    const site = getWebsiteJsonLd();

    return (
        <>
            <JsonLd data={org} />
            <JsonLd data={site} />
        </>
    );
}
