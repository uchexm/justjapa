const features = [
  { 
    title: "Curated insights", 
    desc: "Up-to-date guidance for smoother relocations.",
    icon: "💡"
  },
  { 
    title: "Checklists", 
    desc: "Stay on top of tasks with structured steps.",
    icon: "✅"
  },
  { 
    title: "Local know‑how", 
    desc: "Tips from people who've done it before.",
    icon: "🌍"
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Why JustJapa
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center text-2xl group-hover:bg-orange-50 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
