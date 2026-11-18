'use client';

import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  showFeatures?: boolean;
}

export function ProductCardRefresh({ product, showFeatures = true }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    // Simulate cart add - replace with actual cart logic
    setTimeout(() => setIsAdding(false), 1000);
  };

  // Get 4 key features
  const displayFeatures = product.features.slice(0, 4);
  const featureIcons: Record<string, string> = {
    '4K': '📹',
    'Night Vision': '🌙',
    'Motion': '🚨',
    'Two-Way': '🎤',
    'Storage': '💾',
    'Installation': '⚙️',
    'Detection': '🎯',
    'Audio': '🔊',
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <div className="group cursor-pointer h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded bg-cloud-bg mb-4 h-56 md:h-64">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white font-bold">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col space-y-3">
          {/* Name */}
          <h3 className="font-bold text-primary-text group-hover:text-midnight-navy transition text-sm leading-snug">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-secondary-text line-clamp-1">{product.shortDescription}</p>

          {/* Features - only on desktop and if showFeatures is true */}
          {showFeatures && (
            <div className="space-y-1">
              {displayFeatures.map((feature, idx) => {
                // Extract the main keyword from feature
                const keyword = Object.keys(featureIcons).find(k => 
                  feature.toLowerCase().includes(k.toLowerCase())
                ) || feature.substring(0, 15);
                const icon = featureIcons[keyword] || '✓';
                
                return (
                  <div key={idx} className="flex items-start gap-2 text-xs text-secondary-text">
                    <span className="text-sm">{icon}</span>
                    <span>{feature}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Price and Button */}
          <div className="border-t border-border-color pt-3 space-y-2">
            <p className="text-lg font-bold text-primary-text">{formatPrice(product.price)}</p>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              className="w-full px-3 py-2 border-2 border-midnight-navy text-midnight-navy rounded hover:bg-midnight-navy hover:text-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2 text-sm font-semibold"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
