import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
