'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-tight">
        <h1 className="text-4xl font-bold mb-8">Contact SkyView Electronics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl mb-2">📞 Phone</h3>
                <a href="tel:+233544185227" className="text-premium-blue font-semibold text-lg hover:underline">
                  +233 544 185 227
                </a>
                <p className="text-slate-gray mt-2">Monday - Friday, 8 AM - 6 PM GMT</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2">💬 WhatsApp</h3>
                <a
                  href="https://wa.me/233544185227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-premium-blue font-semibold text-lg hover:underline"
                >
                  Chat with us on WhatsApp
                </a>
                <p className="text-slate-gray mt-2">Quick response - available during business hours</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2">📧 Email</h3>
                <a href="mailto:support@skyview.gh" className="text-premium-blue font-semibold text-lg hover:underline">
                  support@skyview.gh
                </a>
                <p className="text-slate-gray mt-2">We respond within 24 hours</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2">📍 Location</h3>
                <p className="text-slate-gray">
                  Serving all regions of Ghana with verified delivery coverage
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cloud-bg p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-premium-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-premium-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  placeholder="+233 XXX XXX XXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-premium-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-premium-blue"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
                onClick={() => alert('Thank you for your message. We will respond shortly via WhatsApp.')}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-premium-blue text-white rounded-xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Prefer a Quick Chat?</h2>
          <p className="mb-6 text-blue-100">Our team is available on WhatsApp for instant assistance</p>
          <a
            href="https://wa.me/233544185227"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-premium-blue rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Open WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
