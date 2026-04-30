export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-2">Get in Touch</h1>
          <p className="text-stone-500">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-stone-50 rounded-xl p-5">
              <h3 className="font-semibold text-stone-800 mb-1">📍 Visit Us</h3>
              <p className="text-stone-500 text-sm">123 Beauty Lane, Suite 200<br />Los Angeles, CA 90210</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-5">
              <h3 className="font-semibold text-stone-800 mb-1">📧 Email</h3>
              <p className="text-stone-500 text-sm">hello@glowspa.com</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-5">
              <h3 className="font-semibold text-stone-800 mb-1">📞 Phone</h3>
              <p className="text-stone-500 text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-5">
              <h3 className="font-semibold text-stone-800 mb-1">🕐 Hours</h3>
              <p className="text-stone-500 text-sm">
                Mon - Fri: 9am - 7pm<br />
                Saturday: 10am - 5pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-2xl border border-stone-200 p-8 space-y-5"
          >
            <h3 className="text-xl font-bold text-stone-900 mb-2">Send a Message</h3>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                placeholder="your@email.com"
              />
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
      </div>
    </div>
  );
}
