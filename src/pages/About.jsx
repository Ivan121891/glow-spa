export default function About() {
  const team = [
    { name: "Sophia Chen", role: "Founder & Lead Esthetician", emoji: "👩‍⚕️" },
    { name: "Marcus Liu", role: "Product Development", emoji: "🧪" },
    { name: "Aria Patel", role: "Head of Customer Experience", emoji: "💬" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pt-12">
      {/* Our Story */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Our Story</h1>
        <p className="text-stone-500 text-lg leading-relaxed">
          Glō was born from a simple belief: great skincare shouldn't be complicated.
          Our founder, Sophia Chen, spent a decade as an esthetician watching clients
          struggle with overwhelming routines and harsh products. She set out to create
          a line of essentials that actually work — clean, effective, and beautiful to use.
        </p>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-stone-50 rounded-2xl p-8 text-center">
          <div className="text-3xl mb-4">🌱</div>
          <h3 className="font-bold text-stone-900 mb-2">Clean Ingredients</h3>
          <p className="text-stone-500 text-sm leading-relaxed">
            No parabens, sulfates, phthalates, or synthetic fragrances. Every ingredient is thoughtfully sourced.
          </p>
        </div>
        <div className="bg-stone-50 rounded-2xl p-8 text-center">
          <div className="text-3xl mb-4">♻️</div>
          <h3 className="font-bold text-stone-900 mb-2">Sustainable Packaging</h3>
          <p className="text-stone-500 text-sm leading-relaxed">
            Our bottles are made from 100% post-consumer recycled glass and are fully refillable.
          </p>
        </div>
        <div className="bg-stone-50 rounded-2xl p-8 text-center">
          <div className="text-3xl mb-4">🐰</div>
          <h3 className="font-bold text-stone-900 mb-2">Cruelty-Free</h3>
          <p className="text-stone-500 text-sm leading-relaxed">
            We never test on animals. Ever. Certified cruelty-free by Leaping Bunny.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl border border-stone-200 p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{m.emoji}</div>
              <h3 className="font-semibold text-stone-900">{m.name}</h3>
              <p className="text-stone-500 text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
