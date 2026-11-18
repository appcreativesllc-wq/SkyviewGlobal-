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
      <section className="relative flex flex-col overflow-hidden md:block md:min-h-[600px]">
        {/* Desktop background image */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/skyview-hero.png"
            alt="Modern home with security camera installation"
            fill
            className="object-cover object-center"
            priority
            quality={95}
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r md:from-black/30 md:via-transparent md:to-transparent"></div>
        </div>

        {/* Content Overlay - Positioned over left side (open sky) */}
        <div className="relative z-10 flex h-auto items-center bg-cloud-bg md:h-full md:bg-transparent">
          <div className="container-tight w-full">
            <div className="mx-auto max-w-2xl px-6 py-12 sm:px-8 md:mx-0 md:py-0 lg:px-12">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-midnight-navy sm:text-5xl md:text-6xl lg:text-7xl">
                  Smarter Security.{'\n'}Safer Spaces.
                </h1>
                <p className="text-lg md:text-xl text-midnight-navy leading-relaxed max-w-lg font-medium">
                  High-quality CCTV cameras and smart security solutions for your home, business, and what matters most.
                </p>
                <div className="pt-2">
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-midnight-navy text-white font-semibold rounded-lg hover:bg-dark-navy transition-all duration-300 hover:shadow-lg hover:shadow-midnight-navy/30"
                  >
                    Explore Cameras
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile treatment preserves the full panoramic image without distortion. */}
        <div className="relative w-full md:hidden">
          <Image
            src="/images/skyview-hero.png"
            alt="Modern home with security camera installation"
            width={2172}
            height={724}
            className="block h-auto w-full"
            priority
            quality={95}
            sizes="100vw"
          />
        </div>
      </section>

      {/* Products Section - Featured Security Cameras */}
      <section className="section-padding bg-white">
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
