import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Blocks,
  DoorOpen,
  HardHat,
  Layers3,
  PackageCheck,
  PaintBucket,
  Truck,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'GHARDWARE | Ghana Hardware Marketplace',
  description:
    'Explore GHARDWARE building materials, cement, doors, tiles, paint, tools, safety gear, and delivery support in Ghana.',
};

const categories = [
  {
    title: 'Building Materials',
    description: 'Core construction and finishing supplies for home, commercial, and site requirements.',
    icon: Blocks,
  },
  {
    title: 'Cement',
    description: 'Explore cement options for foundations, masonry, plastering, and general building work.',
    icon: PackageCheck,
  },
  {
    title: 'Doors',
    description: 'Discover practical and decorative door options for interior and exterior spaces.',
    icon: DoorOpen,
  },
  {
    title: 'Tiles',
    description: 'Browse floor and wall tile styles for durable, easy-care residential and business spaces.',
    icon: Layers3,
  },
  {
    title: 'Paint',
    description: 'Find interior, exterior, primer, and finishing solutions for new builds and renovations.',
    icon: PaintBucket,
  },
  {
    title: 'Tools',
    description: 'Equip teams and makers with hand tools, power tools, measuring tools, and accessories.',
    icon: Wrench,
  },
  {
    title: 'Safety Gear',
    description: 'Support safer work with protective equipment, footwear, gloves, helmets, and visibility gear.',
    icon: HardHat,
  },
  {
    title: 'Delivery & Logistics',
    description: 'Coordinate material movement and delivery support for homes, projects, and work sites.',
    icon: Truck,
  },
];

export default function GhardwarePage() {
  return (
    <div>
      <section className="relative isolate min-h-[540px] overflow-hidden bg-dark-navy">
        <Image
          src="/images/brand/ghardware_ghana_marketplace_banner.png"
          alt="GHARDWARE storefront in Ghana with hardware supplies and delivery"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,25,48,0.97)_0%,rgba(12,25,48,0.92)_42%,rgba(12,25,48,0.42)_72%,rgba(12,25,48,0.16)_100%)]" />
        <div className="container-tight relative z-10 flex min-h-[540px] items-center">
          <div className="max-w-2xl py-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Ghana&apos;s hardware marketplace
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build, improve, and finish with GHARDWARE.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-100 sm:text-xl">
              Explore building materials, tools, supplies, safety essentials, and delivery support through one modern marketplace.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#ghardware-categories"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-midnight-navy transition hover:bg-cloud-bg"
              >
                Explore Categories <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Delivery Enquiries
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              One marketplace, practical possibilities
            </p>
            <h2 className="text-3xl font-bold text-midnight-navy md:text-5xl">
              Materials and equipment for every stage of the project
            </h2>
            <p className="mt-5 text-lg">
              GHARDWARE brings essential hardware categories together for homeowners, tradespeople, contractors, and businesses across Ghana.
            </p>
          </div>
        </div>
      </section>

      <section id="ghardware-categories" className="section-padding">
        <div className="container-tight">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary-text">
              Shop by category
            </p>
            <h2 className="text-3xl font-bold text-midnight-navy md:text-5xl">
              Hardware essentials, clearly organized
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(category => (
              <article
                key={category.title}
                className="rounded-2xl border border-border-color bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-emerald-700 text-white">
                  <category.icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-midnight-navy">{category.title}</h3>
                <p className="mt-3">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-midnight-navy">
        <div className="container-tight">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-emerald-700">
                <Truck aria-hidden="true" className="h-7 w-7" />
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Delivery and logistics
              </p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Get project supplies moving
              </h2>
              <p className="mt-5 text-lg text-slate-200">
                Discuss material quantities, destination, delivery needs, and timing before placing an order.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['01', 'Choose your materials', 'Identify the categories and quantities your project requires.'],
                ['02', 'Confirm availability', 'Contact the team to verify product options, pricing, and lead times.'],
                ['03', 'Coordinate delivery', 'Arrange suitable delivery timing and logistics for the destination.'],
              ].map(([step, title, description]) => (
                <div key={step} className="rounded-2xl bg-white p-5">
                  <p className="text-sm font-bold text-emerald-700">{step}</p>
                  <h3 className="mt-3 text-lg font-bold text-midnight-navy">{title}</h3>
                  <p className="mt-3 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <div className="rounded-3xl border border-emerald-200 bg-white/95 p-7 shadow-xl shadow-midnight-navy/5 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Start your project enquiry
                </p>
                <h2 className="text-3xl font-bold text-midnight-navy">
                  Ready to source hardware supplies?
                </h2>
                <p className="mt-4">
                  Contact SkyView to discuss GHARDWARE categories, current availability, delivery options, and project requirements.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-midnight-navy px-8 py-4 font-semibold text-white transition hover:bg-dark-navy"
              >
                Contact the Team <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
