const faqs = [
  { q: "What is your return policy?", a: "We offer a 30-day satisfaction guarantee. If you're not completely happy, return any product for a full refund — no questions asked." },
  { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express shipping is 1-2 business days. Free shipping on orders over $50." },
  { q: "Do you offer virtual consultations?", a: "Yes! Book a free 15-minute virtual consultation with one of our estheticians to get personalized product or treatment recommendations." },
  { q: "Are your products safe for sensitive skin?", a: "Absolutely. All Glō products are formulated without common irritants and are dermatologist-tested. We recommend patch testing for first-time users." },
  { q: "Can I cancel or reschedule a facial appointment?", a: "You can cancel or reschedule up to 24 hours before your appointment at no charge. Late cancellations may incur a 50% fee." },
  { q: "Do you offer gift cards?", a: "Yes! Digital gift cards are available in any amount and are delivered instantly via email. They never expire." },
];

export default function Contact() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-amber-50 pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Connect</span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">Get in Touch</h1>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Have a question, feedback, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ===== CONTACT GRID ===== */}
      <section className="max-w-6xl mx-auto px-4 -mt-6 relative z-10 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-2xl border border-stone-200 p-8 mb-6">
              <h2 className="text-xl font-bold text-stone-900 mb-6">Visit Our Studio</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                  <span className="text-xl flex-shrink-0">📍</span>
                  <div>
                    <h3 className="font-medium text-stone-800 text-sm">Address</h3>
                    <p className="text-stone-500 text-sm">123 Beauty Lane, Suite 200<br />Los Angeles, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                  <span className="text-xl flex-shrink-0">📧</span>
                  <div>
                    <h3 className="font-medium text-stone-800 text-sm">Email</h3>
                    <p className="text-stone-500 text-sm">hello@glowspa.com</p>
                    <p className="text-stone-500 text-sm">bookings@glowspa.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                  <span className="text-xl flex-shrink-0">📞</span>
                  <div>
                    <h3 className="font-medium text-stone-800 text-sm">Phone</h3>
                    <p className="text-stone-500 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                  <span className="text-xl flex-shrink-0">🕐</span>
                  <div>
                    <h3 className="font-medium text-stone-800 text-sm">Hours</h3>
                    <p className="text-stone-500 text-sm">Mon - Fri: 9am - 7pm</p>
                    <p className="text-stone-500 text-sm">Saturday: 10am - 5pm</p>
                    <p className="text-stone-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Social */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6">
              <h3 className="font-semibold text-stone-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {["📷 Instagram", "📘 Facebook", "🐦 Twitter", "🎵 TikTok"].map((s) => (
                  <span key={s} className="px-4 py-2 bg-stone-50 rounded-full text-sm text-stone-600 hover:bg-rose-50 hover:text-rose-500 transition-colors cursor-pointer">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-2xl border border-stone-200 p-8 space-y-5"
          >
            <h2 className="text-xl font-bold text-stone-900 mb-2">Send a Message</h2>
            <p className="text-stone-500 text-sm -mt-2 mb-4">We'll get back to you within 24 hours</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                placeholder="jane@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
              <select className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 bg-white text-stone-600">
                <option>General Inquiry</option>
                <option>Product Question</option>
                <option>Book Appointment</option>
                <option>Order Issue</option>
                <option>Partnership</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="text-center mb-10">
          <span className="text-rose-500 text-sm font-semibold uppercase tracking-wider">Questions?</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-1">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-stone-200 overflow-hidden">
              <summary className="px-6 py-4 font-medium text-stone-800 cursor-pointer flex items-center justify-between hover:bg-stone-50 transition-colors list-none">
                {faq.q}
                <span className="text-rose-400 text-xl transform group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-4 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}