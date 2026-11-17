export default function DeliveryPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-tight max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Delivery Information</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">Delivery Coverage</h2>
            <p className="text-slate-gray text-lg leading-relaxed mb-6">
              SkyView Electronics delivers to all regions across Ghana. We work with reliable logistics partners
              to ensure your orders arrive safely and on time.
            </p>
            <div className="bg-cloud-bg p-6 rounded-lg">
              <h3 className="font-bold mb-4">Service Areas:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-gray">
                <li>✓ Greater Accra</li>
                <li>✓ Ashanti Region</li>
                <li>✓ Central Region</li>
                <li>✓ Eastern Region</li>
                <li>✓ Western Region</li>
                <li>✓ Northern Region</li>
                <li>✓ Upper East Region</li>
                <li>✓ Upper West Region</li>
                <li>✓ Volta Region</li>
                <li>✓ Bono Region</li>
                <li>✓ Bono East Region</li>
                <li>✓ Ahafo Region</li>
              </ul>
              <p className="text-slate-gray text-sm mt-4 italic">
                If your specific town is not listed in our system, please contact us on WhatsApp and we will
                arrange delivery.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Delivery Times</h2>
            <div className="space-y-4">
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold mb-2">Greater Accra</h3>
                <p className="text-slate-gray">1-2 business days</p>
              </div>
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold mb-2">Regional Cities (Kumasi, Takoradi, etc.)</h3>
                <p className="text-slate-gray">3-5 business days</p>
              </div>
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold mb-2">Remote Areas</h3>
                <p className="text-slate-gray">5-7 business days</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Delivery Charges</h2>
            <p className="text-slate-gray text-lg leading-relaxed mb-6">
              Delivery charges are based on your region and are clearly displayed before you complete your order.
              Charges typically range from GH₵15 to GH₵75 depending on distance.
            </p>
            <div className="bg-premium-blue text-white p-6 rounded-lg">
              <h3 className="font-bold mb-3">Transparent Pricing</h3>
              <ul className="space-y-2">
                <li>✓ Delivery cost shown at checkout</li>
                <li>✓ No hidden fees</li>
                <li>✓ Total verified on our server</li>
                <li>✓ Free shipping on orders over GH₵2,500 (selected areas)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">How Delivery Works</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Order Placed</h3>
                  <p className="text-slate-gray">You complete your order and payment is verified</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Packing & Verification</h3>
                  <p className="text-slate-gray">We carefully pack your item and verify the contents</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Dispatch</h3>
                  <p className="text-slate-gray">Order is handed to our logistics partner with tracking info</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-1">In Transit</h3>
                  <p className="text-slate-gray">Item is transported to your location</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold mb-1">Delivery</h3>
                  <p className="text-slate-gray">Item arrives at your address ready for use</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Delivery Instructions</h2>
            <p className="text-slate-gray text-lg leading-relaxed mb-6">
              You can add special delivery instructions during checkout. For example:
            </p>
            <div className="bg-cloud-bg p-6 rounded-lg space-y-2 text-slate-gray">
              <p>"• Leave at gate if no one is home"</p>
              <p>"• Deliver to office (provide address)"</p>
              <p>"• Call before delivery"</p>
              <p>"• Use specific entrance"</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What if There's a Problem?</h2>
            <div className="space-y-4">
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold mb-2">Item not arrived</h3>
                <p className="text-slate-gray">Contact us immediately on WhatsApp with your order number</p>
              </div>
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold mb-2">Item damaged</h3>
                <p className="text-slate-gray">Take photos and report within 24 hours. Replacement shipped immediately.</p>
              </div>
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold mb-2">Wrong item received</h3>
                <p className="text-slate-gray">Contact us and we will resolve the issue promptly</p>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-premium-blue text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still have delivery questions?</h2>
              <p className="mb-6 text-blue-100">Our team can help with specific delivery inquiries</p>
              <a
                href="https://wa.me/233544185227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-premium-blue rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
