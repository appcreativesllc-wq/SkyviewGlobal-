'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    { name: 'Security Cameras', href: '/shop?category=security-cameras', department: 'Products' },
    { name: 'Military & Security Gear', href: '/shop?category=military', department: 'Products' },
    { name: 'Fans & Cooling', href: '/shop?category=fans', department: 'Products' },
    { name: 'Gaming & Home Office', href: '/shop?category=gaming', department: 'Products' },
    { name: 'SkyView Travel & Tour', href: '/travel', department: 'Services' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-color">
      <div className="container-tight">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="SkyView home">
            <Image
              src="/images/brand/skyview-shield.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              sizes="44px"
              priority
            />
            <div className="flex flex-col">
              <span className="font-bold text-base text-midnight-navy leading-tight">SkyView</span>
              <span className="text-xs text-secondary-text">Electronics & Travel</span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm text-primary-text hover:text-midnight-navy transition font-medium">
              Security Cameras
            </Link>
            <Link href="/travel" className="text-sm text-primary-text hover:text-midnight-navy transition font-medium">
              Travel & Tour
            </Link>

            {/* Shop All Categories Dropdown */}
            <div className="relative group">
              <button className="text-sm text-primary-text hover:text-midnight-navy transition font-medium flex items-center gap-1">
                Shop All Categories
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-border-color rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="block px-4 py-2 text-sm text-primary-text hover:bg-cloud-bg hover:text-midnight-navy transition"
                  >
                    <span className="block">{cat.name}</span>
                    {cat.department === 'Services' && (
                      <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-secondary-text">
                        Service department
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/faq" className="text-sm text-primary-text hover:text-midnight-navy transition font-medium">
              Support
            </Link>
            <Link href="/contact" className="text-sm text-primary-text hover:text-midnight-navy transition font-medium">
              Contact
            </Link>
          </nav>

          {/* Right side: Search, Contact Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/shop"
              aria-label="Search SkyView products"
              className="p-2 hover:bg-cloud-bg rounded transition hidden sm:block"
            >
              <Search className="w-5 h-5 text-primary-text" />
            </Link>
            <Link href="/contact" className="hidden sm:block px-6 py-2 bg-midnight-navy text-white text-sm font-medium rounded hover:bg-dark-navy transition">
              Contact
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              className="lg:hidden p-2 hover:bg-cloud-bg rounded transition"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-primary-text" />
              ) : (
                <Menu className="w-5 h-5 text-primary-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border-color pt-4 space-y-3">
            <Link
              href="/"
              className="block text-primary-text hover:text-midnight-navy transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Security Cameras
            </Link>
            <Link
              href="/travel"
              className="block text-primary-text hover:text-midnight-navy transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SkyView Travel & Tour
            </Link>

            {/* Mobile Categories Section */}
            <div>
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center justify-between w-full text-primary-text hover:text-midnight-navy transition py-2 font-medium"
              >
                Shop All Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCategoriesOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-border-color pl-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="block text-sm text-secondary-text hover:text-midnight-navy transition py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {cat.name}
                      {cat.department === 'Services' && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-wider">
                          Service
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/faq"
              className="block text-primary-text hover:text-midnight-navy transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              href="/contact"
              className="block text-primary-text hover:text-midnight-navy transition py-2"
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
