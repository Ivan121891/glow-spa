import { Link } from "react-router-dom";
import { treatments } from "../data";

const benefits = [
  { icon: "🧴", title: "Premium Products", desc: "Medical-grade, clean beauty products free of harsh chemicals." },
  { icon: "👩‍🔬", title: "Expert Estheticians", desc: "Licensed professionals with 10+ years of advanced skincare experience." },
  { icon: "🌿", title: "Personalized Care", desc: "Every facial customized to your skin type, concerns, and goals." },
  { icon: "✨", title: "Proven Results", desc: "Visible improvements in hydration, tone, and texture after one session." },
];

const packages = [
  { name: "Glō Starter", sessions: 3, price: 300, save: 60, desc: "Perfect for first-timers. Pick any 3 facials." },
  { name: "Glō Enthusiast", sessions: 6, price: 540, save: 180, desc: "Our most popular. Get that consistent glow year-round." },
  { name: "Glō Devoted", sessions: 12, price: 960, save: 480, desc: "The ultimate commitment. Monthly facials for a full year." },
];

export default function FacialTreatment() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-stone-50 via-rose-50 to-white pt-20 pb-16 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Rejuvenate</span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">Facial Treatments</h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Rejuvenating facials tailored to your skin's unique needs — from deep cleansing
            to anti-aging lifts, our expert estheticians have you covered.
          </p>
        </div>
      </section>

      {/* ===== ALL TREATMENTS ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatments.map((t) => (
            <div
              key={t.id}
              className="group bg-white rounded-2xl border border-stone-200 p-8 hover:shadow-lg hover:border-rose-200 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-xl font-bold text-stone-900 group-hover:text-rose-500 transition-colors">{t.name}</h2>
                  <span className="inline-block mt-2 px-3 py-1 bg-rose-100 text-rose-600 text-xs font-medium rounded-full">
                    {t.duration}
                  </span>
                </div>
                <span className="text-2xl font-bold text-rose-400">${t.price}</span>
              </div>
              <p className="text-stone-500 mt-4 leading-relaxed">{t.description}</p>
              {t.highlights && (
                <ul className="mt-4 space-y-1.5">
                  {t.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-stone-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rose-300 rounded-full" /> {h}
                    </li>
                  ))}
                </ul>
              )}
              <button className="mt-6 px-6 py-2.5 bg-rose-400 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-colors cursor-pointer">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="text-center mb-10">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Why Us</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-1">Why Our Facials Stand Out</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 text-center hover:border-rose-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="font-semibold text-stone-800 mb-2">{b.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PACKAGES ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="bg-gradient-to-br from-stone-50 to-rose-50 rounded-3xl p-10 md:p-16">
          <div className="text-center mb-10">
            <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Save More</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-1">Treatment Packages</h2>
            <p className="text-stone-500 mt-2">Commit to your skincare journey and save big</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border p-8 text-center hover:shadow-lg transition-all ${
                  i === 1 ? "border-rose-300 shadow-md relative" : "border-stone-200"
                }`}
              >
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-400 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-stone-900">{pkg.name}</h3>
                <p className="text-4xl font-bold text-rose-400 mt-4">${pkg.price}</p>
                <p className="text-stone-400 text-sm">${pkg.sessions} sessions · ${Math.round(pkg.price / pkg.sessions)}/session</p>
                <p className="text-stone-500 text-sm mt-4 leading-relaxed">{pkg.desc}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                  Save ${pkg.save}
                </div>
                <button className="mt-6 w-full py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-colors cursor-pointer">
                  Buy Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-20 mb-20 text-center">
        <div className="bg-stone-900 rounded-3xl p-10 md:p-16 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Glō?</h2>
          <p className="text-stone-400 max-w-lg mx-auto mb-8">
            Book your first facial today and experience the Glō difference.
          </p>
          <button className="px-8 py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-colors cursor-pointer">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}