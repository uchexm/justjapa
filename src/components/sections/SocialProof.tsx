const testimonials = [
  {
    name: "Adaora K.",
    location: "Nigeria → Canada", 
    text: "JustJapa connected me with the perfect education agent. My study visa was approved in just 3 months!",
    avatar: "🇳🇬"
  },
  {
    name: "Kemi O.",
    location: "Lagos → London",
    text: "The personalized dashboard kept me organized throughout my entire relocation process. Highly recommend!",
    avatar: "🇳🇬"
  },
  {
    name: "Ibrahim S.",
    location: "Kano → Toronto", 
    text: "Thanks to JustJapa, I found verified agents and got my work visa approved. The support was incredible.",
    avatar: "🇳🇬"
  }
];

export function SocialProof() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-600 mb-4">
            Join thousands who have successfully made their move
          </p>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex -space-x-2">
              <div className="w-12 h-12 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white font-semibold">A</div>
              <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-semibold">K</div>
              <div className="w-12 h-12 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white font-semibold">I</div>
              <div className="w-12 h-12 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs">+200</div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Trusted by over 200</p>
              <p className="text-sm text-gray-600">Across Africa</p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
