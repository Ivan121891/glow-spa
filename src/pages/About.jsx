export default function About() {
  const team = [
    { name: "Sophia Chen", role: "Founder & Lead Esthetician", emoji: "👩‍⚕️", bio: "15 years transforming skin. Former spa director at The Beverly Hills Hotel." },
    { name: "Marcus Liu", role: "Head of Product Development", emoji: "🧪", bio: "Cosmetic chemist who formulates every product with obsessive care." },
    { name: "Aria Patel", role: "Head of Customer Experience", emoji: "💬", bio: "Ensures every interaction with Glō feels as good as our products." },
    { name: "Jade Torres", role: "Senior Esthetician", emoji: "🌸", bio: "Specialist in acne and hyperpigmentation with a gentle touch." },
  ];

  const timeline = [
    { year: "2018", event: "Sophia Chen opens her first studio in Los Angeles with a single treatment room." },
    { year: "2019", event: "Glō launches its first 3 skincare products. Sells out in 48 hours." },
    { year: "2020", event: "Expands to a full spa with 5 treatment rooms and 8 estheticians." },
    { year: "2022", event: "Product line grows to 15 SKUs. Launches nationwide shipping." },
    { year: "2024", event: "Named \"Best Clean Beauty Brand\" by Allure. Opens second location." },
    { year: "2025", event: "10,000+ happy customers. Certified carbon-neutral operations." },
  ];

  const values = [
    { icon: "🌱", title: "Clean Ingredients", desc: "No parabens, sulfates, phthalates, or synthetic fragrances. Ever." },
    { icon: "♻️", title: "Sustainable Packaging", desc: "100% post-consumer recycled glass bottles that are fully refillable." },
    { icon: "🐰", title: "Cruelty-Free", desc: "Never tested on animals. Leaping Bunny certified." },
    { icon: "🤝", title: "Community First", desc: "We donate 1% of every sale to skincare education for underserved communities." },
  ];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-amber-50 pt-20 pb-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">About Glō</h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Glō was born from a simple belief: great skincare shouldn't be complicated.
            Our founder, Sophia Chen, spent a decade as an esthetician watching clients
            struggle with overwhelming routines and harsh products. She set out to create
            a line of essentials that actually work — clean, effective, and beautiful to use.
          </p>
        </div>
      </section>

      {/* ===== MISSION STATS ===== */}
      <section className="max-w-6xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-rose-400">10K+</p>
              <p className="text-xs text-stone-400 mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-rose-400">20+</p>
              <p className="text-xs text-stone-400 mt-1">Products</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-rose-400">15K+</p>
              <p className="text-xs text-stone-400 mt-1">Facials Performed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-rose-400">5★</p>
              <p className="text-xs text-stone-400 mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="text-center mb-10">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">What We Believe</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-1">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="group bg-stone-50 rounded-2xl p-8 text-center hover:bg-rose-50 hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="font-bold text-stone-900 mb-2">{v.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="bg-gradient-to-r from-stone-50 to-rose-50 rounded-3xl p-10 md:p-16">
          <div className="text-center mb-10">
            <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-1">Timeline</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-rose-300 group-hover:bg-rose-400 transition-colors flex-shrink-0" />
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-rose-200 mt-1" />}
                </div>
                <div className="pb-6">
                  <span className="text-sm font-bold text-rose-500">{t.year}</span>
                  <p className="text-stone-600 text-sm mt-1">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-20 mb-20">
        <div className="text-center mb-10">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Meet Us</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-1">The Glō Team</h2>
          <p className="text-stone-500 mt-2">The people behind the glow</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl border border-stone-200 p-6 text-center hover:shadow-lg hover:border-rose-200 transition-all group"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-rose-100 to-stone-100 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {m.emoji}
              </div>
              <h3 className="font-semibold text-stone-900">{m.name}</h3>
              <p className="text-rose-500 text-sm font-medium mt-0.5">{m.role}</p>
              <p className="text-stone-400 text-xs mt-2 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}