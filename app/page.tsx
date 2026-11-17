import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Truck, MessageSquare } from 'lucide-react';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/lib/products';

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 bg-gradient-to-br from-midnight-navy via-midnight-navy to-blue-900 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-premium-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-blue rounded-full blur-3xl"></div>
        </div>

        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                A Clearer View.<br />A Safer Space.
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Discover smart security cameras and modern technology solutions designed for homes and
                businesses across Ghana. From solar-powered systems to 4G connectivity, we have you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop?cat=cctv"
                  className="btn-primary flex items-center justify-center gap-2 hover:bg-blue-700"
                >
                  Shop Security Cameras <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/shop"
                  className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-midnight-navy transition-colors inline-flex items-center justify-center gap-2"
                >
                  Explore Collection <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 md:h-full min-h-96">
              <Image
                src="https://skyview-store.vercel.app/products/dual-lens-solar-1.jpg"
                alt="SkyView Security Camera"
                fill
                className="object-cover rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Type Section */}
      <section className="section-padding bg-cloud-bg">
        <div className="container-tight">
          <h2 className="text-4xl font-bold mb-12 text-center">Choose Your Camera Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solar Cameras */}
            <Link href="/shop?cat=cctv&type=solar" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition">
                  <span className="text-3xl">☀️</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-premium-blue transition">
                  Solar Cameras
                </h3>
                <p className="text-slate-gray mb-4">
                  Wire-free systems powered by sunlight. Perfect for remote locations with no mains power.
                </p>
                <span className="text-premium-blue font-semibold inline-flex items-center gap-2">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* 4G Cameras */}
            <Link href="/shop?cat=cctv&type=4g" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition">
                  <span className="text-3xl">📡</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-premium-blue transition">
                  4G Cameras
                </h3>
                <p className="text-slate-gray mb-4">
                  SIM-enabled connectivity. Monitor from anywhere in Ghana using cellular network.
                </p>
                <span className="text-premium-blue font-semibold inline-flex items-center gap-2">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Wi-Fi Cameras */}
            <Link href="/shop?cat=cctv&type=wifi" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition">
                  <span className="text-3xl">📶</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-premium-blue transition">
                  Wi-Fi Cameras
                </h3>
                <p className="text-slate-gray mb-4">
                  Simple home networks. Easy setup and reliable performance for local monitoring.
                </p>
                <span className="text-premium-blue font-semibold inline-flex items-center gap-2">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Products</h2>
            <Link href="/shop" className="text-premium-blue font-semibold inline-flex items-center gap-2 hover:gap-3 transition">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SkyView */}
      <section className="section-padding bg-cloud-bg">
        <div className="container-tight">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose SkyView?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trust */}
            <div className="text-center">
              <div className="w-16 h-16 bg-premium-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Trusted Brand</h3>
              <p className="text-slate-gray text-sm">
                Established retailer serving Ghana with verified business information and secure transactions.
              </p>
            </div>

            {/* Performance */}
            <div className="text-center">
              <div className="w-16 h-16 bg-premium-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Premium Quality</h3>
              <p className="text-slate-gray text-sm">
                Carefully selected cameras with verified specifications and genuine warranties.
              </p>
            </div>

            {/* Delivery */}
            <div className="text-center">
              <div className="w-16 h-16 bg-premium-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
              <p className="text-slate-gray text-sm">
                Reliable shipping across all Ghana regions with transparent delivery charges.
              </p>
            </div>

            {/* Support */}
            <div className="text-center">
              <div className="w-16 h-16 bg-premium-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Expert Support</h3>
              <p className="text-slate-gray text-sm">
                Real people available on WhatsApp to help you choose and troubleshoot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-premium-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts are available on WhatsApp to answer your questions and help you find the perfect camera
            for your needs.
          </p>
          <a
            href="https://wa.me/233544185227?text=Hello%20SkyView%2C%20I%20need%20help%20choosing%20a%20product"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-premium-blue rounded-lg font-bold hover:bg-gray-100 transition"
          >
            <MessageSquare className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What is the difference between solar, 4G, and Wi-Fi cameras?',
                a: 'Solar cameras are powered by sunlight and work in remote areas. 4G cameras use mobile SIM cards for connectivity. Wi-Fi cameras require a home network. Choose based on your location and internet availability.',
              },
              {
                q: 'Do I need a subscription to use my camera?',
                a: 'Most SkyView cameras work without monthly subscriptions. You can store footage on SD cards or cloud services. Some advanced features may require optional cloud services.',
              },
              {
                q: 'What is your warranty policy?',
                a: 'All products come with verified manufacturer warranties. Details are provided with each product. We offer genuine warranty service through authorized centers.',
              },
              {
                q: 'How is delivery handled in Ghana?',
                a: 'We deliver across all Ghana regions with transparent, region-based charges. Delivery usually takes 2-7 business days depending on your location.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-cloud-bg p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-midnight-navy">{item.q}</h3>
                <p className="text-slate-gray">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/faq" className="text-premium-blue font-semibold inline-flex items-center gap-2">
              View More Questions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
