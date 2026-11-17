'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, products } from '@/lib/products';
import { formatPrice } from '@/lib/utils';
import { ProductCard } from '@/components/product/ProductCard';
import { ShoppingCart, MessageSquare, ArrowRight, ChevronLeft } from 'lucide-react';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen py-20 bg-cloud-bg">
        <div className="container-tight text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-slate-gray mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/shop" className="btn-primary inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-12">
      {/* Breadcrumb */}
      <div className="container-tight mb-8">
        <Link href="/shop" className="inline-flex items-center gap-2 text-premium-blue hover:text-blue-700">
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <div>
            <div className="bg-cloud-bg rounded-xl overflow-hidden mb-4 h-96 md:h-full min-h-96 relative">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === idx ? 'border-premium-blue' : 'border-gray-200'
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

          {/* Product Info */}
          <div>
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-premium-blue bg-opacity-10 text-premium-blue rounded-full text-sm font-semibold">
                {product.category}
              </span>
            </div>

            {/* Name and Price */}
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-slate-gray mb-6">{product.shortDescription}</p>

            {/* Price and Stock */}
            <div className="border-t border-b border-gray-200 py-6 mb-8">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-bold text-premium-blue">{formatPrice(product.price)}</span>
              </div>
              {product.inStock ? (
                <>
                  <p className="text-green-600 font-semibold">✓ In Stock</p>
                  {product.stock && product.stock < 10 && (
                    <p className="text-orange-600 text-sm mt-2">Only {product.stock} items remaining</p>
                  )}
                </>
              ) : (
                <p className="text-red-600 font-semibold">Out of Stock</p>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">About This Product</h3>
              <p className="text-slate-gray leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            {product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-gray">
                      <span className="text-premium-blue font-bold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart Section */}
            {product.inStock && (
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-slate-gray hover:bg-cloud-bg"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-slate-gray hover:bg-cloud-bg"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-slate-gray text-sm">
                    Total: <span className="font-bold text-premium-blue">{formatPrice(product.price * quantity)}</span>
                  </span>
                </div>

                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            )}

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/233544185227?text=Hello%20SkyView%2C%20I'm%20interested%20in%20the%20${product.name}"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 border-2 border-premium-blue text-premium-blue rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Ask on WhatsApp
            </a>
          </div>
        </div>

        {/* Specifications */}
        {Object.keys(product.specifications).length > 0 && (
          <div className="mb-20 bg-cloud-bg rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b border-gray-300 pb-4 last:border-0">
                  <h4 className="font-bold text-dark-text mb-2">{key}</h4>
                  <p className="text-slate-gray">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-20">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Related Products</h2>
              <Link href="/shop" className="text-premium-blue font-semibold inline-flex items-center gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-gray-200">
          <div className="text-center">
            <div className="w-12 h-12 bg-premium-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🚚</span>
            </div>
            <h3 className="font-bold mb-2">Fast Delivery</h3>
            <p className="text-slate-gray text-sm">Shipped across Ghana within 2-7 business days</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-premium-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🛡️</span>
            </div>
            <h3 className="font-bold mb-2">Genuine Product</h3>
            <p className="text-slate-gray text-sm">100% authentic with verified manufacturer warranty</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-premium-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">💬</span>
            </div>
            <h3 className="font-bold mb-2">Expert Support</h3>
            <p className="text-slate-gray text-sm">WhatsApp support for setup and troubleshooting</p>
          </div>
        </div>
      </div>
    </div>
  );
}
