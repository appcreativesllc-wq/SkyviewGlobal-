import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'SkyView Electronics | Premium Security Cameras & Smart Technology',
  description:
    'Discover premium security cameras and smart technology solutions for homes and businesses across Ghana. Solar, 4G, and Wi-Fi cameras with professional installation support.',
  keywords:
    'security cameras, CCTV, solar camera, 4G camera, Wi-Fi camera, home security, Ghana',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
