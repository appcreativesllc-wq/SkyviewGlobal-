export default function ReturnsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-tight max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Returns & Refunds Policy</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-slate-gray text-lg leading-relaxed">
              At SkyView Electronics, we stand behind every product we sell. If you are not completely satisfied
              with your purchase, we offer a full refund within 30 days of delivery.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Return Eligibility</h2>
            <div className="bg-cloud-bg p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-bold mb-2">✓ Eligible for Return</h3>
                <ul className="space-y-2 text-slate-gray">
                  <li>• Item purchased within the last 30 days</li>
                  <li>• Product in original condition with no visible damage</li>
                  <li>• All original accessories and packaging included</li>
                  <li>• Item not damaged due to customer misuse</li>
                  <li>• Genuine technical defects</li>
                </ul>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <h3 className="font-bold mb-2">✗ Not Eligible for Return</h3>
                <ul className="space-y-2 text-slate-gray">
                  <li>• Items purchased more than 30 days ago</li>
                  <li>• Damaged due to misuse or negligence</li>
                  <li>• Missing original packaging or accessories</li>
                  <li>• Customized or modified products</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Warranty Information</h2>
            <p className="text-slate-gray text-lg leading-relaxed mb-6">
              All SkyView products come with manufacturer warranties:
            </p>
            <div className="space-y-4">
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold mb-2">Standard Warranty</h3>
                <p className="text-slate-gray">1-3 years depending on product (see product details)</p>
              </div>
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold mb-2">What's Covered</h3>
                <ul className="space-y-2 text-slate-gray">
                  <li>• Manufacturing defects</li>
                  <li>• Hardware malfunctions</li>
                  <li>• Component failures</li>
                  <li>• Design defects</li>
                </ul>
              </div>
              <div className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold mb-2">Not Covered</h3>
                <ul className="space-y-2 text-slate-gray">
                  <li>• Physical damage from accidents or misuse</li>
                  <li>• Water damage (unless IP-rated and water damage caused by manufacturing defect)</li>
                  <li>• Normal wear and tear</li>
                  <li>• Consumables like batteries</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">How to Request a Return or Refund</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Contact Us Within 30 Days</h3>
                  <p className="text-slate-gray">
                    Message us on WhatsApp with your order number and reason for return
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Send Photos</h3>
                  <p className="text-slate-gray">
                    Provide photos of the item and packaging showing its condition
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Approval</h3>
                  <p className="text-slate-gray">
                    We review your request and approve the return if eligible
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-1">Ship Back</h3>
                  <p className="text-slate-gray">
                    Arrange shipment of the item to our return address
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold mb-1">Refund</h3>
                  <p className="text-slate-gray">
                    Upon receipt and inspection, refund is processed within 7 business days
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Refund Processing</h2>
            <div className="bg-cloud-bg p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-bold mb-2">Refund Timeline</h3>
                <p className="text-slate-gray">
                  After receiving and inspecting your return, refunds are processed within 7 business days
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Refund Method</h3>
                <p className="text-slate-gray">
                  Refunds are issued to your original payment method (Mobile Money or card)
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Return Shipping</h3>
                <p className="text-slate-gray">
                  Customer covers return shipping cost (or negotiate free return in eligible cases)
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Damaged or Defective Items</h2>
            <p className="text-slate-gray text-lg leading-relaxed mb-6">
              If your item arrives damaged or is defective, we will replace it immediately at no cost to you:
            </p>
            <div className="bg-premium-blue text-white p-6 rounded-lg space-y-3">
              <div>
                <h3 className="font-bold mb-2">Report Within 24 Hours</h3>
                <p>Contact us on WhatsApp with photos of the damage</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">We Replace Immediately</h3>
                <p>A replacement is shipped to you at no additional cost</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Return Original</h3>
                <p>We provide return label for the damaged item</p>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-premium-blue text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need to Return Something?</h2>
              <p className="mb-6 text-blue-100">Our team will make the process quick and easy</p>
              <a
                href="https://wa.me/233544185227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-premium-blue rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Start Return Process
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
