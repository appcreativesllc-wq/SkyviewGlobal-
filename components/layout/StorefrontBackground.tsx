import Image from 'next/image';

export function StorefrontBackground() {
  return (
    <div
      aria-hidden="true"
      data-storefront-background
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-cloud-bg"
    >
      <Image
        src="/images/Modern Home Security Shield.png"
        alt=""
        fill
        className="object-cover object-[82%_center] opacity-[0.34] sm:object-[70%_center] lg:object-center"
        sizes="100vw"
      />
    </div>
  );
}
