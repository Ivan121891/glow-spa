import { Link } from "react-router-dom";
import { products, categories, treatments, testimonials } from "../data";

export default function Home() {
  const featured = products.slice(0, 4);
  const topTestimonials = testimonials.slice(0, 3);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/img-unsplash-1.jpg"
            alt="Skincare products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-6 uppercase tracking-wider border border-white/20">
                <span className="w-2 h-2 bg-rose-300 rounded-full animate-pulse" />
                Premium Skincare
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Your Skin Deserves
                <br />
                <span className="bg-gradient-to-r from-rose-200 to-amber-200 bg-clip-text text-transparent">
                  To Glō
                </span>
              </h1>
              <p className="text-stone-300 text-lg max-w-lg leading-relaxed mb-10">
                Discover clean, effective skincare and transformative facial treatments
                designed to reveal your natural radiance. No compromises. Just glow.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to="/products"
                  className="px-8 py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-rose-500/30"
                >
                  Shop Now
                </Link>
                <Link
                  to="/facial"
                  className="px-8 py-3 border-2 border-white/40 hover:border-white/80 text-white font-medium rounded-full transition-colors backdrop-blur-sm"
                >
                  Book a Facial
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-10 text-stone-400 text-sm">
                <span className="flex items-center gap-1.5">🌱 Clean Ingredients</span>
                <span className="flex items-center gap-1.5">🐰 Cruelty-Free</span>
                <span className="flex items-center gap-1.5">♻️ Sustainable</span>
              </div>
            </div>

            {/* Right: Large product image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="/img-unsplash-3.jpg"
                  alt="Face cream jar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-stone-800 text-xs font-semibold">Vitamin C Brightening Cream</p>
                  <p className="text-rose-500 text-sm font-bold mt-0.5">$42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-12 shadow-xl shadow-stone-200/50">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-900">Featured Products</h2>
              <p className="text-stone-500 text-sm mt-1">Best-sellers loved by our community</p>
            </div>
            <Link
              to="/products"
              className="text-rose-500 hover:text-rose-600 text-sm font-medium"
            >
              View All &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <div key={p.id} className="group bg-stone-50 rounded-xl overflow-hidden hover:bg-rose-50 transition-all hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.id === 1 ? "/img-unsplash-1.jpg" : p.id === 2 ? "/img-unsplash-3.jpg" : p.id === 9 ? "/img-unsplash-6.jpg" : "/img-unsplash-8.jpg"}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-stone-800 text-sm">{p.name}</h3>
                  <p className="text-rose-500 font-bold text-sm mt-1">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SHOP BY CATEGORY ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <div className="text-center mb-12">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Shop by</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-1">Category</h2>
          <p className="text-stone-500 mt-2">Find exactly what your skin needs</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?cat=${cat.id}`}
              className="group bg-white rounded-2xl border border-stone-200 p-6 text-center hover:border-rose-200 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-sm text-stone-900 group-hover:text-rose-500 transition-colors">{cat.name}</h3>
              <p className="text-xs text-stone-400 mt-1">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== TREATMENTS PREVIEW ===== */}
      <section className="relative mt-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/img-unsplash-5.jpg"
            alt="Facial treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/75" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-10">
            <span className="text-rose-300 text-sm font-semibold uppercase tracking-wider">Treatments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">Facial Treatments</h2>
            <p className="text-stone-300 mt-2">Expert care tailored to your skin's needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatments.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white">{t.name}</h3>
                  <span className="bg-rose-400/80 text-white text-xs font-bold px-3 py-1 rounded-full">${t.price}</span>
                </div>
                <span className="text-stone-400 text-xs">{t.duration}</span>
                <p className="text-stone-300 text-sm mt-3 leading-relaxed">{t.description}</p>
                <ul className="mt-4 space-y-1">
                  {t.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="text-xs text-stone-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-rose-300 rounded-full" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/facial"
              className="inline-block px-6 py-3 border-2 border-white/40 hover:border-white/80 text-white font-medium rounded-full transition-colors backdrop-blur-sm"
            >
              View All Treatments &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <div className="bg-gradient-to-br from-rose-50 to-stone-50 rounded-3xl p-10 md:p-16">
          <div className="text-center mb-10">
            <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Real Reviews</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-1">Loved by Our Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topTestimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 border border-stone-100">
                <div className="flex text-amber-400 text-sm mb-3">
                  {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic">"{t.text}"</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-stone-800">{t.name}</span>
                  <span className="text-xs text-stone-400">{t.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="/img-unsplash-8.jpg"
            alt="Skincare routine"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 via-rose-800/60 to-amber-800/70" />
          <div className="relative z-10 p-10 md:p-16 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <span className="text-rose-200 text-sm font-semibold uppercase tracking-wider">Our Promise</span>
              <h2 className="text-3xl font-bold mt-1 mb-4">Clean Ingredients, Real Results</h2>
              <p className="text-stone-200 leading-relaxed">
                Every product is formulated without parabens, sulfates, or synthetic fragrances.
                We believe skincare should be as good for your skin as it feels.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-stone-200">
                <span className="flex items-center gap-2">
                  <span className="text-lg">🌱</span> Plant-Based
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">🧪</span> Dermatologist-Tested
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">🌍</span> Eco-Friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-24 mb-20">
        <div className="bg-stone-900 rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Get 15% Off Your First Order</h2>
          <p className="text-stone-400 max-w-lg mx-auto mb-8">
            Join the Glō community and be the first to know about new products, exclusive offers, and skincare tips.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-md mx-auto flex gap-3"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-rose-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-stone-500 mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
