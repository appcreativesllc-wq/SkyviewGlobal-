import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  FileCheck2,
  Globe2,
  Hotel,
  MapPinned,
  Plane,
  Sparkles,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'SkyView Travel & Tour | Explore Travel Opportunities',
  description:
    'Discover proposed flight, hotel, tour, visa assistance, group travel, and customized travel services from SkyView Travel & Tour.',
};

const services = [
  {
    title: 'Flight Bookings',
    description: 'Explore flight options for regional and international journeys.',
    icon: Plane,
  },
  {
    title: 'Hotel Reservations',
    description: 'Share your destination and accommodation preferences for a tailored inquiry.',
    icon: Hotel,
  },
  {
    title: 'Vacation Packages',
    description: 'Plan leisure escapes built around your interests, schedule, and travel group.',
    icon: MapPinned,
  },
  {
    title: 'International Tours',
    description: 'Explore proposed guided-tour opportunities and destination experiences.',
    icon: Globe2,
  },
  {
    title: 'Visa Assistance',
    description: 'Ask for general application guidance. Visa decisions remain with relevant authorities.',
    icon: FileCheck2,
  },
  {
    title: 'Group Travel',
    description: 'Coordinate travel inquiries for families, organizations, teams, and groups.',
    icon: Users,
  },
  {
    title: 'Customized Travel Experiences',
    description: 'Tell us what a meaningful trip looks like and explore a personalized itinerary.',
    icon: Sparkles,
  },
];

const destinations = [
  {
    image: '/images/brand/travel-beach.png',
    alt: 'Tropical palms overlooking a bright blue beach',
    title: 'Beach Escapes',
    description: 'Relaxed getaways and sun-filled coastlines.',
  },
  {
    image: '/images/brand/travel-city.png',
    alt: 'Modern international city skyline at dusk',
    title: 'City Discoveries',
    description: 'Culture, dining, architecture, and urban experiences.',
  },
  {
    image: '/images/brand/travel-safari.png',
    alt: 'Lion and elephant on an African safari at sunset',
    title: 'Safari Adventures',
    description: 'Wildlife encounters and unforgettable landscapes.',
  },
  {
    image: '/images/brand/travel-northern-lights.png',
    alt: 'Northern lights glowing over snowy mountains',
    title: 'Extraordinary Journeys',
    description: 'Distinctive experiences shaped around your interests.',
  },
];

export default function TravelPage() {
  return (
    <div>
      <section className="relative isolate min-h-[560px] overflow-hidden bg-dark-navy">
        <Image
          src="/images/brand/travel.png"
          alt="Travelers preparing to discover international destinations"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,25,48,0.98)_0%,rgba(12,25,48,0.9)_42%,rgba(12,25,48,0.3)_75%,rgba(12,25,48,0.08)_100%)]" />
        <div className="container-tight relative z-10 flex min-h-[560px] items-center">
          <div className="max-w-2xl py-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
              SkyView Travel & Tour
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore the world with a journey designed around you.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-100 sm:text-xl">
              Discover travel opportunities, exciting destinations, and personalized travel experiences through one connected SkyView brand.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/travel/apply"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-midnight-navy transition hover:bg-cloud-bg"
              >
                Apply Now <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Link>
              <a
                href="#travel-services"
                className="inline-flex items-center rounded-lg border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-premium-blue">
              Travel, made personal
            </p>
            <h2 className="text-3xl font-bold text-midnight-navy md:text-5xl">
              Start with your interests. Shape a journey from there.
            </h2>
            <p className="mt-5 text-lg">
              From a first travel idea to a coordinated group inquiry, SkyView Travel & Tour is presented as a proposed service department for the SkyView customer experience.
            </p>
          </div>
        </div>
      </section>

      <section id="travel-services" className="section-padding">
        <div className="container-tight">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary-text">
              Proposed service portfolio
            </p>
            <h2 className="text-3xl font-bold text-midnight-navy md:text-5xl">
              Services for the way you want to travel
            </h2>
            <p className="mt-4">
              These service descriptions are for demonstration only and must be confirmed by the business owner before commercial launch.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <article
                key={service.title}
                className="rounded-2xl border border-border-color bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-midnight-navy text-white">
                  <service.icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-midnight-navy">{service.title}</h3>
                <p className="mt-3">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-navy">
        <div className="container-tight">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Destination inspiration
              </p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Find the experience that moves you
              </h2>
            </div>
            <Link
              href="/travel/apply"
              className="inline-flex w-fit items-center gap-2 font-semibold text-white hover:text-blue-200"
            >
              Apply Now <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map(destination => (
              <article key={destination.title} className="overflow-hidden rounded-2xl bg-white">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={destination.image}
                    alt={destination.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-midnight-navy">{destination.title}</h3>
                  <p className="mt-2 text-sm">{destination.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <div className="rounded-3xl border border-blue-200 bg-white/90 p-7 shadow-xl shadow-midnight-navy/5 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-premium-blue">
                  Contract prototype
                </p>
                <h2 className="text-3xl font-bold text-midnight-navy">
                  Submit a no-cost demonstration travel inquiry.
                </h2>
                <p className="mt-4">
                  No payment is required, no booking is confirmed, and no visa or immigration approval is guaranteed. The demo form does not transmit your information to SkyView staff.
                </p>
              </div>
              <Link
                href="/travel/apply"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-midnight-navy px-8 py-4 font-semibold text-white transition hover:bg-dark-navy"
              >
                Apply Now <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
