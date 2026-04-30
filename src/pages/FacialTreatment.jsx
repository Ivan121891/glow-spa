import { treatments } from "../data";

export default function FacialTreatment() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-stone-900">Facial Treatments</h1>
        <p className="text-stone-500 mt-2">Rejuvenating facials tailored to your skin's unique needs</p>
      </div>

      {/* Treatment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {treatments.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl border border-stone-200 p-8 hover:shadow-lg hover:border-rose-200 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-bold text-stone-900">{t.name}</h2>
              <span className="text-lg font-bold text-rose-500">${t.price}</span>
            </div>
            <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 text-xs font-medium rounded-full">
              {t.duration}
            </span>
            <p className="text-stone-500 mt-4 leading-relaxed">{t.description}</p>
            <button className="mt-6 px-6 py-2.5 bg-rose-400 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-colors cursor-pointer">
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="mt-20 bg-gradient-to-r from-stone-50 to-rose-50 rounded-3xl p-10 md:p-14">
        <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">Why Our Facials Stand Out</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">🧴</div>
            <h3 className="font-semibold text-stone-800 mb-2">Premium Products</h3>
            <p className="text-stone-500 text-sm">We use only medical-grade, clean beauty products free of harsh chemicals.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">👩‍🔬</div>
            <h3 className="font-semibold text-stone-800 mb-2">Expert Estheticians</h3>
            <p className="text-stone-500 text-sm">Our licensed professionals have 10+ years of experience in advanced skincare.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🌿</div>
            <h3 className="font-semibold text-stone-800 mb-2">Personalized Care</h3>
            <p className="text-stone-500 text-sm">Every facial is customized to your skin type, concerns, and goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
