export default function FAQPage() {
  const faqs = [
    {
      category: 'Products',
      items: [
        {
          q: 'What is the difference between solar, 4G, and Wi-Fi cameras?',
          a: 'Solar cameras use solar panels for power and are ideal for remote areas with no electricity. 4G cameras use mobile SIM cards for internet connectivity and work in areas without Wi-Fi. Wi-Fi cameras connect to your home or office network and require mains power or a power adapter.',
        },
        {
          q: 'Do all cameras record 24/7?',
          a: 'Most cameras can record 24/7, but battery-powered or solar cameras may have smart recording features that only record when motion is detected to preserve battery life. Check the product specifications for details.',
        },
        {
          q: 'What resolution should I choose?',
          a: '1080p is suitable for general home monitoring. 2MP and 4K offer better detail for identifying faces and license plates. Choose based on your budget and monitoring requirements.',
        },
        {
          q: 'Can I use these cameras indoors and outdoors?',
          a: 'Each camera specifies its design environment. Many are weatherproof (outdoor), while others are designed for indoor use. Check the product specifications and weather rating before purchase.',
        },
      ],
    },
    {
      category: 'Ordering & Delivery',
      items: [
        {
          q: 'How long does delivery take?',
          a: 'Delivery usually takes 2-7 business days depending on your region. Greater Accra may receive deliveries within 1-2 days. Regional orders may take up to a week. We provide tracking information with your order.',
        },
        {
          q: 'What are the delivery charges?',
          a: 'Delivery charges vary by region in Ghana. They are calculated at checkout based on your location. You will see the final delivery charge before confirming your order.',
        },
        {
          q: 'Do you deliver to all regions in Ghana?',
          a: 'Yes, we deliver to all regions in Ghana. If your specific town is not listed in our system, please contact us on WhatsApp and we can arrange delivery.',
        },
        {
          q: 'Can I change my order after placing it?',
          a: 'Yes, if your order has not yet been processed. Contact us immediately on WhatsApp with your order number and we will help you.',
        },
      ],
    },
    {
      category: 'Payment',
      items: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept Mobile Money (MTN, Telecel, AirtelTigo) and credit/debit cards through secure payment processors. All transactions are encrypted and verified on our server.',
        },
        {
          q: 'Is my payment secure?',
          a: 'Yes. We use industry-standard SSL encryption and partner with established payment processors (Paystack, Hubtel) to ensure all transactions are secure.',
        },
        {
          q: 'What if my payment fails?',
          a: 'If your payment fails, please check your account balance and try again. If the issue persists, contact us on WhatsApp.',
        },
        {
          q: 'Can I pay cash on delivery?',
          a: 'Cash on delivery is available in selected areas. Please contact us on WhatsApp to arrange.',
        },
      ],
    },
    {
      category: 'Returns & Warranty',
      items: [
        {
          q: 'What is your return policy?',
          a: 'All products come with a 30-day money-back guarantee if you are not satisfied. The product must be in original condition with all accessories. Contact us within 30 days of delivery.',
        },
        {
          q: 'Do products come with warranty?',
          a: 'Yes, all products come with genuine manufacturer warranties ranging from 1-3 years depending on the product. Warranty details are provided with each product.',
        },
        {
          q: 'What if my camera stops working?',
          a: 'Contact us on WhatsApp and we will troubleshoot the issue. If it is defective, we will arrange warranty service through the manufacturer.',
        },
      ],
    },
    {
      category: 'Installation & Setup',
      items: [
        {
          q: 'Do you provide installation services?',
          a: 'We provide installation guidance and support via WhatsApp. For professional installation services, please contact us for a quote.',
        },
        {
          q: 'Is setup complicated?',
          a: 'Most cameras are designed for easy DIY setup. Wi-Fi cameras typically take 10-15 minutes to set up. We provide detailed guides and WhatsApp support.',
        },
        {
          q: 'What do I need to set up a camera?',
          a: 'For Wi-Fi cameras: stable internet connection, smartphone with the camera app. For 4G cameras: active SIM card with 4G data plan. For solar cameras: sunny location and optional cloud storage account.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container-tight">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-slate-gray text-lg mb-12">
          Find answers to common questions about our products, ordering, delivery, and support.
        </p>

        <div className="max-w-4xl">
          {faqs.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-premium-blue">{section.category}</h2>
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <details key={itemIdx} className="bg-cloud-bg rounded-lg p-6 group cursor-pointer">
                    <summary className="font-bold text-dark-text flex items-start justify-between group-open:text-premium-blue">
                      {item.q}
                      <span className="text-xl ml-4 group-open:hidden">+</span>
                      <span className="text-xl ml-4 hidden group-open:inline">−</span>
                    </summary>
                    <p className="text-slate-gray mt-4">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-premium-blue text-white rounded-xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-6 text-blue-100">Our support team is available on WhatsApp to help</p>
          <a
            href="https://wa.me/233544185227"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-premium-blue rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Chat with us
          </a>
        </div>
      </div>
    </div>
  );
}
