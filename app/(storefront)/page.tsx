import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroSlideshow } from '@/components/home/HeroSlideshow';
import { ProductCardRefresh } from '@/components/product/ProductCardRefresh';
import { BenefitStrip } from '@/components/product/BenefitStrip';
import { products } from '@/lib/products';

export default function HomePage() {
  // Get 4 featured products that best represent different camera types
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <HeroSlideshow />

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
