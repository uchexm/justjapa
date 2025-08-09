import { WaitlistForm } from "@/components/WaitlistForm";

export function CTA() {
  return (
    <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to Start Your <em className="italic">Japa</em> Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of Nigerians and Africans who are making smarter moves with JustJapa. 
          Get early access and personalized guidance.
        </p>
        <div className="flex justify-center mb-8">
          <WaitlistForm source="cta" />
        </div>
        <p className="text-sm text-blue-200">
          🚀 Early access • ✨ Personalized dashboard • 🎯 Verified agents
        </p>
      </div>
    </section>
  );
}
