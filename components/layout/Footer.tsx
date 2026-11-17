'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-midnight-navy text-white mt-20">
      <div className="container-tight py-12 md:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-premium-blue rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">SkyView</span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium electronics and smart security solutions for Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/shop" className="hover:text-premium-blue transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?cat=cctv" className="hover:text-premium-blue transition">
                  Security Cameras
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-premium-blue transition">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-premium-blue transition">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-premium-blue transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-premium-blue transition">
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-premium-blue transition">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-premium-blue transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-premium-blue flex-shrink-0" />
                <div>
                  <a href="tel:+233544185227" className="hover:text-premium-blue transition">
                    +233 544 185 227
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 mt-1 text-premium-blue flex-shrink-0" />
                <a
                  href="https://wa.me/233544185227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-premium-blue transition"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-premium-blue flex-shrink-0" />
                <a href="mailto:support@skyview.gh" className="hover:text-premium-blue transition">
                  support@skyview.gh
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 SkyView Electronics. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-premium-blue transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-premium-blue transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
