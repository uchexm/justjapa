import { JsonLd } from "@/components/JsonLd";
import { getFaqJsonLd } from "@/lib/seo";

const faqs = [
  { question: "What is JustJapa?", answer: "A smarter way to plan and track your relocation." },
  { question: "When will it launch?", answer: "Join the waitlist to get early access invites." },
];

export function FAQ() {
  const jsonLd = getFaqJsonLd(faqs);
  return (
    <section id="faq" className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Frequently asked questions</h2>
        <dl className="mt-8 space-y-6">
          {faqs.map((f) => (
            <div key={f.question}>
              <dt className="font-medium">{f.question}</dt>
              <dd className="text-neutral-600 mt-2 text-sm">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
      <JsonLd data={jsonLd} />
    </section>
  );
}
