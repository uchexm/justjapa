import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { JapaFam } from "@/components/sections/JapaFam";
import { JapaGoals } from "@/components/sections/JapaGoals";
import { JoinWaitlist } from "@/components/sections/JoinWaitlist";
import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/seo";

export default function HomePage() {
    const org = getOrganizationJsonLd();
    const site = getWebsiteJsonLd();

    return (
        <>
            <Header />

            <main id='main' className='min-h-screen' role='main'>
                <a
                    href='#main'
                    className='sr-only z-50 rounded bg-black px-3 py-2 text-white focus:not-sr-only focus:absolute focus:left-2 focus:top-2'
                >
                    Skip to content
                </a>

                <article>
                    <Hero />
                    <HowItWorks />
                    <JapaGoals />
                    <JapaFam />
                    <JoinWaitlist />
                </article>
            </main>

            <Footer />

            <JsonLd data={org} />
            <JsonLd data={site} />
        </>
    );
}
