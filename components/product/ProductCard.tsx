import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg bg-cloud-bg mb-4 h-64 md:h-72">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="text-xs bg-premium-blue bg-opacity-10 text-premium-blue px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Name */}
          <h3 className="font-bold text-dark-text group-hover:text-premium-blue transition text-sm md:text-base line-clamp-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-gray line-clamp-2">{product.shortDescription}</p>

          {/* Price */}
          <div className="pt-2 border-t border-gray-200">
            <p className="text-lg md:text-xl font-bold text-premium-blue">{formatPrice(product.price)}</p>
            {product.stock && product.stock < 10 && (
              <p className="text-xs text-orange-600 font-semibold mt-1">Only {product.stock} left</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
