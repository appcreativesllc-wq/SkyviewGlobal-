'use client';

import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/lib/products';
import { Search, Filter, X } from 'lucide-react';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConnectivity, setSelectedConnectivity] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Connectivity filter
    if (selectedConnectivity) {
      result = result.filter(p => p.connectivity === selectedConnectivity);
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        // Reverse order (most recently added first)
        result.reverse();
        break;
    }

    return result;
  }, [searchQuery, selectedConnectivity, priceRange, sortBy]);

  const connectivityOptions = Array.from(
    new Set(products.map(p => p.connectivity).filter(Boolean))
  ) as string[];

  return (
    <div className="min-h-screen py-12">
      <div className="container-tight">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop Security Cameras</h1>
          <p className="text-slate-gray text-lg">
            Browse our collection of premium security cameras for homes and businesses.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-gray" />
            <input
              type="text"
              placeholder="Search cameras..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-premium-blue"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <h3 className="font-bold text-lg">Filters</h3>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 hover:bg-cloud-bg rounded"
              >
                {showFilters ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
              </button>
            </div>

            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Sort */}
              <div>
                <h4 className="font-bold mb-4">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-premium-blue text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* Connectivity Filter */}
              <div>
                <h4 className="font-bold mb-4">Connectivity</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="connectivity"
                      value=""
                      checked={selectedConnectivity === null}
                      onChange={() => setSelectedConnectivity(null)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-sm">All Types</span>
                  </label>
                  {connectivityOptions.map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="connectivity"
                        value={type}
                        checked={selectedConnectivity === type}
                        onChange={() => setSelectedConnectivity(type)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <span className="text-sm capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-bold mb-4">Price Range</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-slate-gray mb-2 block">Min: GH₵{priceRange[0]}</label>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[0]}
                      onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-gray mb-2 block">Max: GH₵{priceRange[1]}</label>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Reset Filters */}
              {(selectedConnectivity || searchQuery || priceRange[0] !== 0 || priceRange[1] !== 2000) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedConnectivity(null);
                    setPriceRange([0, 2000]);
                  }}
                  className="w-full py-2 text-premium-blue font-semibold border border-premium-blue rounded-lg hover:bg-blue-50 transition text-sm"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filtered.length > 0 ? (
              <>
                <div className="mb-6 text-sm text-slate-gray">
                  Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-slate-gray mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedConnectivity(null);
                    setPriceRange([0, 2000]);
                  }}
                  className="text-premium-blue font-semibold hover:underline"
                >
                  Clear filters and try again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
