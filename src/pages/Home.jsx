import { Link } from "react-router-dom";
import { products, treatments } from "../data";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-stone-100 pt-20 pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 text-xs font-semibold rounded-full mb-6 uppercase tracking-wider">
            Premium Skincare
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-tight mb-6">
            Your Skin Deserves
            <br />
            <span className="text-rose-400">To Glō</span>
          </h1>
          <p className="text-stone-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Discover clean, effective skincare and transformative facial treatments
            designed to reveal your natural radiance.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/products"
              className="px-8 py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/facial"
              className="px-8 py-3 border border-stone-300 hover:border-rose-300 text-stone-700 font-medium rounded-full transition-colors"
            >
              Book a Facial
            </Link>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-t from-rose-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-12">
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
              <div key={p.id} className="bg-stone-50 rounded-xl p-5 text-center hover:bg-rose-50 transition-colors">
                <div className="text-4xl mb-3">{p.image}</div>
                <h3 className="font-medium text-stone-800 text-sm">{p.name}</h3>
                <p className="text-rose-500 font-bold text-sm mt-1">${p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Preview */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-stone-900">Facial Treatments</h2>
          <p className="text-stone-500 mt-2">Expert care tailored to your skin's needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {treatments.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-rose-200 transition-colors"
            >
              <h3 className="font-semibold text-stone-900">{t.name}</h3>
              <p className="text-rose-500 font-bold text-sm mt-1">
                ${t.price} &middot; {t.duration}
              </p>
              <p className="text-stone-500 text-sm mt-3 leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/facial"
            className="inline-block px-6 py-3 border border-stone-300 hover:border-rose-300 text-stone-700 font-medium rounded-full transition-colors"
          >
            View All Treatments
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="bg-gradient-to-r from-rose-100 to-stone-50 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Clean Ingredients, Real Results</h2>
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Every product is formulated without parabens, sulfates, or synthetic fragrances.
            We believe skincare should be as good for your skin as it feels.
          </p>
        </div>
      </section>
    </div>
  );
}
