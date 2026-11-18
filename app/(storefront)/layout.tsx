import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { StorefrontBackground } from '@/components/layout/StorefrontBackground';

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StorefrontBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
