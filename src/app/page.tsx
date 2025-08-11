import { JsonLd } from "@/components/JsonLd";
import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { JapaGoals } from "@/components/sections/JapaGoals";
import { JapaFam } from "@/components/sections/JapaFam";
import { JoinWaitlist } from "@/components/sections/JoinWaitlist";

export default function Home() {
  const org = getOrganizationJsonLd();
  const site = getWebsiteJsonLd();

  return (
    <>
      <main id="main" className="min-h-screen" role="main">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded z-50">
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
      
      <JsonLd data={org} />
      <JsonLd data={site} />
    </>
  );
}
