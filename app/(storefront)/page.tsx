import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductCardRefresh } from '@/components/product/ProductCardRefresh';
import { BenefitStrip } from '@/components/product/BenefitStrip';
import { products } from '@/lib/products';

export default function HomePage() {
  // Get 4 featured products that best represent different camera types
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section - Premium Security Camera Installation with Approved Image */}
      <section className="relative flex flex-col overflow-hidden bg-cloud-bg lg:block lg:aspect-[3/1]">
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/images/skyview-hero.png"
            alt="Modern home with security camera installation"
            fill
            className="object-contain"
            preload
            unoptimized
          />
        </div>

        <div className="relative z-10 flex h-auto items-center bg-cloud-bg lg:absolute lg:inset-0 lg:bg-transparent">
          <div className="container-tight w-full">
            <div className="mx-auto max-w-2xl px-6 py-12 sm:px-8 lg:mx-0 lg:max-w-xl lg:px-12 lg:py-0 xl:max-w-2xl">
              <div className="space-y-5 lg:space-y-4 xl:space-y-6">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-midnight-navy sm:text-5xl lg:text-5xl xl:text-6xl">
                  <span className="block">Smarter Security.</span>
                  <span className="block">Safer Spaces.</span>
                </h1>
                <p className="max-w-lg text-lg font-medium leading-relaxed text-midnight-navy lg:text-base xl:text-xl">
                  High-quality CCTV cameras and smart security solutions for your home, business, and what matters most.
                </p>
                <div className="pt-2">
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-midnight-navy text-white font-semibold rounded-lg hover:bg-dark-navy transition-all duration-300 hover:shadow-lg hover:shadow-midnight-navy/30"
                  >
                    Explore Cameras
                    <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:hidden">
          <Image
            src="/images/skyview-hero.png"
            alt="Modern home with security camera installation"
            width={2172}
            height={724}
            className="block h-auto w-full"
            preload
            unoptimized
            sizes="100vw"
          />
        </div>
      </section>

      {/* Products Section - Featured Security Cameras */}
      <section className="section-padding relative">
        <div className="container-tight">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-xs font-bold text-secondary-text tracking-widest mb-3">OUR PRODUCTS</p>
            <div className="flex justify-between items-start gap-4 md:items-baseline">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight">
                Security Cameras{'\n'}for Every Need
              </h2>
              <Link href="/shop" className="text-sm font-semibold text-midnight-navy hover:text-dark-navy transition whitespace-nowrap flex items-center gap-2 mt-2 md:mt-0">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 4-Column Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCardRefresh
                key={product.id}
                product={product}
                showFeatures={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Strip - Matching Reference Image 1 */}
      <BenefitStrip />
    </div>
  );
}
