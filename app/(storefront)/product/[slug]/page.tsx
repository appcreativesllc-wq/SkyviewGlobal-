import Link from 'next/link';
import { Suspense } from 'react';
import { getProductById, products } from '@/lib/products';
import { ProductDetailClient } from '@/components/product/ProductDetailClient';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductById(slug);

  if (!product) {
    return (
      <div className="min-h-screen py-20">
        <div className="container-tight text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-secondary-text mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/shop" className="inline-block px-6 py-3 bg-midnight-navy text-white rounded hover:bg-dark-navy">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </Suspense>
  );
}
