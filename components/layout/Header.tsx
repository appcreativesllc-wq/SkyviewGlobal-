'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container-tight">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-premium-blue rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-lg">S</div>
            </div>
            <span className="font-bold text-xl text-midnight-navy hidden sm:inline">
              SkyView
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-dark-text hover:text-premium-blue transition">
              Home
            </Link>
            <Link href="/shop" className="text-dark-text hover:text-premium-blue transition">
              Shop
            </Link>
            <Link href="/shop?cat=cctv" className="text-dark-text hover:text-premium-blue transition">
              Security Cameras
            </Link>
            <Link href="/about" className="text-dark-text hover:text-premium-blue transition">
              About
            </Link>
            <Link href="/contact" className="text-dark-text hover:text-premium-blue transition">
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-cloud-bg rounded-lg transition">
              <Search className="w-5 h-5 text-dark-text" />
            </button>
            <Link href="/account" className="p-2 hover:bg-cloud-bg rounded-lg transition">
              <User className="w-5 h-5 text-dark-text" />
            </Link>
            <Link href="/cart" className="p-2 hover:bg-cloud-bg rounded-lg transition relative">
              <ShoppingCart className="w-5 h-5 text-dark-text" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-premium-blue text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-cloud-bg rounded-lg transition"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-dark-text" />
              ) : (
                <Menu className="w-5 h-5 text-dark-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 pt-4 space-y-3">
            <Link
              href="/"
              className="block text-dark-text hover:text-premium-blue transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block text-dark-text hover:text-premium-blue transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/shop?cat=cctv"
              className="block text-dark-text hover:text-premium-blue transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Security Cameras
            </Link>
            <Link
              href="/about"
              className="block text-dark-text hover:text-premium-blue transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-dark-text hover:text-premium-blue transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
