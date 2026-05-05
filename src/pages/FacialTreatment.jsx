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

const processSteps = [
  { step: "01", title: "Consultation", desc: "We analyze your skin type, concerns, and goals to create a personalized treatment plan.", image: "/img-unsplash-8.jpg" },
  { step: "02", title: "Cleanse & Prep", desc: "Double cleansing, gentle exfoliation, and steam open pores for deep treatment.", image: "/facial-1.jpg" },
  { step: "03", title: "Treatment", desc: "Targeted serums, masks, and advanced technology tailored to your skin's needs.", image: "/facial-2.jpg" },
  { step: "04", title: "Finish & Protect", desc: "Hydrating finish, SPF application, and a customized home-care routine.", image: "/facial-5.jpg" },
];

const testimonials = [
  { name: "Sophia L.", text: "The HydraGlow facial changed my skin. I've never gotten so many compliments!", rating: 5, treatment: "HydraGlow Treatment" },
  { name: "Amanda P.", text: "Estheticians listened to my concerns and customized everything. My acne has calmed down significantly.", rating: 5, treatment: "Acne Rescue Facial" },
  { name: "Rachel M.", text: "The Anti-Aging Lift is incredible. I walked out looking 5 years younger. Worth every penny.", rating: 5, treatment: "Anti-Aging Lift Facial" },
];

export default function FacialTreatment() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/facial-4.jpg"
            alt="Facial treatment room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative z-10 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-6 uppercase tracking-wider border border-white/20">
              <span className="w-2 h-2 bg-rose-300 rounded-full animate-pulse" />
              Rejuvenate & Restore
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Facial Treatments
              <br />
              <span className="bg-gradient-to-r from-rose-200 to-amber-200 bg-clip-text text-transparent">
                Designed for You
              </span>
            </h1>
            <p className="text-stone-300 text-lg max-w-xl leading-relaxed mb-10">
              From deep cleansing to anti-aging lifts, our expert estheticians
              tailor every facial to your skin's unique needs.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#treatments"
                className="px-8 py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-rose-500/30"
              >
                View Treatments
              </a>
              <a
                href="#packages"
                className="px-8 py-3 border-2 border-white/40 hover:border-white/80 text-white font-medium rounded-full transition-colors backdrop-blur-sm"
              >
                View Packages
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 text-stone-400 text-sm">
              <span className="flex items-center gap-1.5">🧴 Premium Products</span>
              <span className="flex items-center gap-1.5">👩‍🔬 Expert Estheticians</span>
              <span className="flex items-center gap-1.5">✨ Proven Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TREATMENTS GRID ===== */}
      <section id="treatments" className="max-w-6xl mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-1">Choose Your Treatment</h2>
          <p className="text-stone-500 mt-2 max-w-2xl mx-auto">
            Every facial is customized — pick your focus and we'll handle the rest
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((t, index) => (
            <div
              key={t.id}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-rose-200 transition-all hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`/facial-${(index % 5) + 1}.jpg`}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="bg-rose-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t.duration}
                  </span>
                  <span className="bg-white/90 text-stone-800 text-xs font-bold px-3 py-1 rounded-full">
                    ${t.price}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-rose-500 transition-colors">
                  {t.name}
                </h3>
                <p className="text-stone-500 text-sm mt-2 leading-relaxed">{t.description}</p>
                {t.highlights && (
                  <ul className="mt-4 space-y-1.5">
                    {t.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-stone-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-rose-300 rounded-full" /> {h}
                      </li>
                    ))}
                  </ul>
                )}
                <button className="mt-5 px-6 py-2.5 bg-rose-400 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-colors cursor-pointer">
                  Book This Treatment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <div className="text-center mb-12">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">The Glō Way</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-1">Your Facial Experience</h2>
          <p className="text-stone-500 mt-2">From consultation to the final glow — here's what to expect</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((s) => (
            <div key={s.step} className="group relative">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-rose-400 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {s.step}
                </div>
              </div>
              <h3 className="font-bold text-stone-900 text-lg">{s.title}</h3>
              <p className="text-stone-500 text-sm mt-1 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BEFORE & AFTER / GALLERY ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <div className="bg-gradient-to-br from-stone-50 to-rose-50 rounded-3xl p-10 md:p-16">
          <div className="text-center mb-10">
            <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Gallery</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-1">The Glō Difference</h2>
            <p className="text-stone-500 mt-2">Real results from real clients</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <img src="/img-unsplash-4.jpg" alt="Skincare result" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <img src="/img-unsplash-5.jpg" alt="Facial treatment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <img src="/img-unsplash-6.jpg" alt="Skincare products" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <img src="/img-unsplash-3.jpg" alt="Moisturizer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <div className="text-center mb-10">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Real Reviews</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-1">Loved by Our Community</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-md hover:border-rose-100 transition-all">
              <div className="flex text-amber-400 text-sm mb-3">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-stone-800">{t.name}</span>
                <span className="text-xs text-stone-400 bg-rose-50 px-2 py-0.5 rounded-full">{t.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <div className="text-center mb-10">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Why Us</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-1">Why Our Facials Stand Out</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 text-center hover:border-rose-200 hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="font-semibold text-stone-800 mb-2">{b.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PACKAGES ===== */}
      <section id="packages" className="max-w-6xl mx-auto px-4 mt-24">
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
      <section className="max-w-6xl mx-auto px-4 mt-24 mb-20">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="/facial-3.jpg"
            alt="Relaxing facial"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 via-rose-800/60 to-amber-800/70" />
          <div className="relative z-10 p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Glō?</h2>
            <p className="text-rose-100 max-w-lg mx-auto mb-8">
              Book your first facial today and experience the Glō difference.
              New clients get 15% off their first treatment.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button className="px-8 py-3 bg-white text-rose-600 hover:bg-rose-50 font-medium rounded-full transition-colors cursor-pointer">
                Schedule a Consultation
              </button>
              <Link
                to="/products"
                className="px-8 py-3 border-2 border-white/40 hover:border-white/80 text-white font-medium rounded-full transition-colors backdrop-blur-sm"
              >
                Shop Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
