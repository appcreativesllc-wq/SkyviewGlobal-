'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { ProductCardRefresh } from '@/components/product/ProductCardRefresh';
import { ProductFeatureStrip } from '@/components/product/ProductFeatureStrip';
import { ShoppingCart, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState('single');

  return (
    <div className="min-h-screen">
      {/* Breadcrumb - Matching Reference Image 2 */}
      <div className="container-tight pt-6 pb-4">
        <div className="flex items-center gap-2 text-sm text-secondary-text">
          <Link href="/" className="hover:text-midnight-navy">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-midnight-navy">Security Cameras</Link>
          <span>/</span>
          <span className="text-primary-text font-medium">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section - Matching Reference Image 2 */}
      <div className="container-tight py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left: Product Gallery (60%) */}
          <div className="md:col-span-3">
            {/* Main Image */}
            <div className="bg-cloud-bg rounded mb-4 overflow-hidden relative h-96 md:h-full min-h-96">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              {/* Gallery Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                    disabled={selectedImage === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-midnight-navy text-midnight-navy hover:bg-midnight-navy hover:text-white transition disabled:opacity-30"
                  >
                    <ChevronLeft className="w-6 h-6 mx-auto" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(Math.min(product.images.length - 1, selectedImage + 1))}
                    disabled={selectedImage === product.images.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-midnight-navy text-midnight-navy hover:bg-midnight-navy hover:text-white transition disabled:opacity-30"
                  >
                    <ChevronRight className="w-6 h-6 mx-auto" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-20 w-20 rounded overflow-hidden border-2 transition flex-shrink-0 ${
                      selectedImage === idx ? 'border-midnight-navy' : 'border-border-color'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`View ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Information (40%) */}
          <div className="md:col-span-2 space-y-6">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-primary-text leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-midnight-navy text-midnight-navy"
                  />
                ))}
              </div>
              <span className="text-sm text-secondary-text">(Based on verified reviews)</span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-secondary-text leading-relaxed">
                {product.description}
              </p>
              <button className="text-midnight-navy font-semibold text-sm hover:underline">
                Read more
              </button>
            </div>

            {/* Pricing Section */}
            <div className="border-t border-b border-border-color py-4 space-y-3">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-3xl font-bold text-primary-text">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm text-secondary-text line-through">
                  {formatPrice(product.price * 1.15)}
                </span>
              </div>

              {/* Info items */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span className="text-secondary-text">Free delivery available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span className="text-secondary-text">30-day money-back guarantee</span>
                </div>
                {product.inStock && (
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span className="text-secondary-text">
                      {product.stock ? `${product.stock} in stock` : 'In stock'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Package Selection */}
            <div className="space-y-3">
              <h3 className="font-bold text-primary-text">Choose Your Package</h3>
              <div className="space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="package"
                    value="single"
                    checked={selectedPackage === 'single'}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-semibold text-primary-text">Single Camera</p>
                    <p className="text-xs text-secondary-text">Best for one room</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="package"
                    value="duo"
                    checked={selectedPackage === 'duo'}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-semibold text-primary-text">2-Camera Bundle</p>
                    <p className="text-xs text-secondary-text">Save 10%</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="package"
                    value="quad"
                    checked={selectedPackage === 'quad'}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-semibold text-primary-text">Whole-Home Pack (4 Cameras)</p>
                    <p className="text-xs text-secondary-text">Save 20%</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="font-bold text-primary-text text-sm">Quantity:</label>
              <div className="flex items-center gap-2 w-fit border border-border-color rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-cloud-bg"
                >
                  −
                </button>
                <span className="px-4 py-2 font-semibold min-w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-cloud-bg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button - Large and prominent matching Reference Image 2 */}
            {product.inStock && (
              <button className="w-full py-4 bg-midnight-navy text-white font-bold text-lg rounded hover:bg-dark-navy transition flex items-center justify-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                ADD TO CART
              </button>
            )}

            {/* Supporting Message */}
            <p className="text-xs text-center text-secondary-text">
              Instant setup - No technical skills needed
            </p>
          </div>
        </div>
      </div>

      {/* Product Feature Strip - Matching Reference Image 2 */}
      <ProductFeatureStrip features={product.features.slice(0, 6)} />

      {/* Additional Information Sections */}
      <div className="py-12">
        <div className="container-tight space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary-text">Product Overview</h2>
            <p className="text-secondary-text leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features List */}
          {product.features.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary-text">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-secondary-text">
                    <span className="text-midnight-navy font-bold mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specifications */}
          {Object.keys(product.specifications).length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary-text">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="pb-4 border-b border-border-color">
                    <h4 className="font-bold text-primary-text mb-1">{key}</h4>
                    <p className="text-secondary-text text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Delivery Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary-text">Delivery & Returns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-primary-text mb-2">Shipping</h3>
                <p className="text-sm text-secondary-text">
                  Delivered across Ghana. Delivery time depends on your region (2-7 business days).
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-2">Returns</h3>
                <p className="text-sm text-secondary-text">
                  30-day money-back guarantee. Return unused items in original packaging.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-2">Warranty</h3>
                <p className="text-sm text-secondary-text">
                  Manufacturer warranty included. Support available via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-white/70 py-12">
          <div className="container-tight">
            <div className="flex justify-between items-baseline gap-4 mb-8">
              <h2 className="text-3xl font-bold text-primary-text">Related Products</h2>
              <Link href="/shop" className="text-sm font-semibold text-midnight-navy hover:text-dark-navy transition">
                View All <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCardRefresh key={p.id} product={p} showFeatures={false} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
