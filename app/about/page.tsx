export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-tight">
        <h1 className="text-4xl font-bold mb-8">About SkyView Electronics</h1>

        <div className="max-w-3xl space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-gray text-lg leading-relaxed">
              SkyView Electronics is committed to providing premium security and technology solutions to homes
              and businesses across Ghana. We believe that quality, accessibility, and customer support should
              not be compromised in the pursuit of affordability.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-slate-gray text-lg leading-relaxed mb-6">
              We carefully source and distribute verified security cameras, smart home devices, and electronics
              that meet international standards. Our selection includes:
            </p>
            <ul className="space-y-3 text-slate-gray text-lg">
              <li className="flex items-start gap-3">
                <span className="text-premium-blue font-bold mt-1">✓</span>
                <span>Solar-powered cameras for remote installations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-premium-blue font-bold mt-1">✓</span>
                <span>4G SIM-enabled cameras for areas without Wi-Fi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-premium-blue font-bold mt-1">✓</span>
                <span>Professional Wi-Fi camera systems for homes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-premium-blue font-bold mt-1">✓</span>
                <span>Accessories and expansion options for security systems</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Why Choose SkyView?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Verified Products</h3>
                <p className="text-slate-gray">
                  Every product is verified for quality and comes with genuine manufacturer warranties.
                </p>
              </div>
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Local Expertise</h3>
                <p className="text-slate-gray">
                  We understand Ghana's climate, infrastructure, and connectivity challenges.
                </p>
              </div>
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Customer Support</h3>
                <p className="text-slate-gray">
                  Real people available via WhatsApp to help with setup, troubleshooting, and advice.
                </p>
              </div>
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Transparent Pricing</h3>
                <p className="text-slate-gray">
                  No hidden fees. Delivery charges, taxes, and totals are calculated and verified upfront.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Business Information</h2>
            <div className="bg-cloud-bg p-8 rounded-lg space-y-4">
              <div>
                <p className="text-slate-gray text-sm">Business Name</p>
                <p className="font-bold text-lg">SkyView Electronics</p>
              </div>
              <div>
                <p className="text-slate-gray text-sm">Phone</p>
                <a href="tel:+233544185227" className="font-bold text-lg text-premium-blue hover:underline">
                  +233 544 185 227
                </a>
              </div>
              <div>
                <p className="text-slate-gray text-sm">Email</p>
                <a href="mailto:support@skyview.gh" className="font-bold text-lg text-premium-blue hover:underline">
                  support@skyview.gh
                </a>
              </div>
              <div>
                <p className="text-slate-gray text-sm">WhatsApp Support</p>
                <a
                  href="https://wa.me/233544185227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-lg text-premium-blue hover:underline"
                >
                  Chat with us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
