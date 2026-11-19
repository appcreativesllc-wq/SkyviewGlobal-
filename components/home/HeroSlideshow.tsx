'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface HeroSlide {
  image: string;
  alt: string;
  category: string;
  heading: string;
  description: string;
  cta: string;
  href: string;
}

interface HeroSlideshowProps {
  interval?: number;
  transitionDuration?: number;
}

const slides: HeroSlide[] = [
  {
    image: '/images/brand/camera2.png',
    alt: 'Modern luxury home protected by a SkyView security camera',
    category: 'Security Cameras',
    heading: 'Smarter Security. Safer Spaces.',
    description:
      'High-quality CCTV cameras and smart security solutions for your home, business, and what matters most.',
    cta: 'Explore Cameras',
    href: '/shop?category=security-cameras',
  },
  {
    image: '/images/brand/cooling.png',
    alt: 'Premium fans and cooling products for a luxury home',
    category: 'Fans & Cooling',
    heading: 'Cooling Comfort. Smart Everyday Airflow.',
    description:
      'Rechargeable fans, mist fans, and cooling essentials for home, office, and on-the-go comfort.',
    cta: 'Explore Cooling',
    href: '/shop?category=fans',
  },
  {
    image: '/images/brand/Gaming.png',
    alt: 'Premium gaming and home office setup',
    category: 'Gaming & Home Office',
    heading: 'Work Smart. Play in Style.',
    description:
      'Gaming desks, ergonomic seating, accessories, and productivity essentials for modern setups.',
    cta: 'Explore Setups',
    href: '/shop?category=gaming',
  },
  {
    image: '/images/brand/safetygear.png',
    alt: 'Professional tactical and personal security equipment',
    category: 'Military & Security Gear',
    heading: 'Mission-Ready Gear. Built for Security.',
    description:
      'Tactical boots, gloves, apparel, and protective essentials designed for readiness.',
    cta: 'Explore Gear',
    href: '/shop?category=military',
  },
  {
    image: '/images/brand/travel.png',
    alt: 'Travelers discovering international destinations with SkyView Travel & Tour',
    category: 'SkyView Travel & Tour',
    heading: 'Explore the World with SkyView Travel & Tour.',
    description:
      'Your journey starts here. Discover travel opportunities, exciting destinations, and personalized travel experiences.',
    cta: 'Apply Now',
    href: '/travel/apply',
  },
];

function shuffledIndices(excluding: number) {
  const remaining = slides.map((_, index) => index).filter(index => index !== excluding);

  for (let index = remaining.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [remaining[index], remaining[randomIndex]] = [remaining[randomIndex], remaining[index]];
  }

  return remaining;
}

export function HeroSlideshow({
  interval = 5000,
  transitionDuration = 800,
}: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const queueRef = useRef<number[]>([]);
  const activeRef = useRef(0);
  const touchStartRef = useRef<number | null>(null);

  const selectSlide = useCallback((index: number) => {
    activeRef.current = index;
    setActiveIndex(index);
    queueRef.current = shuffledIndices(index);
  }, []);

  const advance = useCallback((direction: number) => {
    if (direction < 0) {
      selectSlide((activeRef.current - 1 + slides.length) % slides.length);
      return;
    }

    if (!queueRef.current.length) {
      queueRef.current = shuffledIndices(activeRef.current);
    }

    const nextIndex = queueRef.current.shift();
    if (nextIndex !== undefined) {
      activeRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
  }, [selectSlide]);

  useEffect(() => {
    queueRef.current = shuffledIndices(0);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || isInteracting || reducedMotion) return;

    const timer = window.setInterval(() => advance(1), interval);
    return () => window.clearInterval(timer);
  }, [advance, interval, isInteracting, isPaused, reducedMotion]);

  useEffect(() => {
    const preloadImages = slides.map(slide => {
      const image = new window.Image();
      image.src = slide.image;
      return image;
    });

    return () => preloadImages.forEach(image => {
      image.onload = null;
      image.onerror = null;
    });
  }, []);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="SkyView departments and product categories"
      className="relative isolate overflow-hidden bg-cloud-bg"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
      }}
      onTouchStart={event => {
        touchStartRef.current = event.touches[0]?.clientX ?? null;
        setIsInteracting(true);
      }}
      onTouchEnd={event => {
        const start = touchStartRef.current;
        const end = event.changedTouches[0]?.clientX;
        touchStartRef.current = null;

        if (start !== null && end !== undefined && Math.abs(end - start) > 48) {
          advance(end > start ? -1 : 1);
        }
        setIsInteracting(false);
      }}
      onTouchCancel={() => {
        touchStartRef.current = null;
        setIsInteracting(false);
      }}
    >
      <div className="relative lg:aspect-[3/1]">
        <div className="relative aspect-[3/1] w-full overflow-hidden lg:absolute lg:inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              aria-hidden={index !== activeIndex}
              className={`absolute inset-0 transition-opacity ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDuration: reducedMotion ? '0ms' : `${transitionDuration}ms` }}
            >
              <Image
                src={slide.image}
                alt={index === activeIndex ? slide.alt : ''}
                fill
                className="scale-[1.168] object-cover object-center"
                style={{ transformOrigin: 'center bottom' }}
                sizes="100vw"
                quality={90}
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#f3f5f8_0%,#f3f5f8_44%,rgba(243,245,248,0.96)_52%,rgba(243,245,248,0.18)_72%,transparent_86%)]" />
        </div>

        <div className="relative z-10 bg-cloud-bg/95 lg:absolute lg:inset-0 lg:bg-transparent">
          <div className="container-tight w-full lg:flex lg:h-full lg:items-center">
            <div className="max-w-2xl px-6 py-10 sm:px-8 lg:max-w-xl lg:px-12 lg:py-0 xl:max-w-2xl">
              {slides.map((slide, index) => (
                <div
                  key={slide.category}
                  aria-hidden={index !== activeIndex}
                  className={index === activeIndex ? 'block' : 'hidden'}
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary-text">
                    {slide.category}
                  </p>
                  <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-midnight-navy sm:text-5xl lg:text-5xl xl:text-6xl">
                    {slide.heading}
                  </h1>
                  <p className="mt-4 max-w-lg text-base font-medium leading-relaxed text-midnight-navy sm:text-lg lg:text-base xl:text-xl">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.href}
                    tabIndex={index === activeIndex ? 0 : -1}
                    className="mt-7 inline-flex items-center gap-3 rounded-lg bg-midnight-navy px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-dark-navy hover:shadow-lg hover:shadow-midnight-navy/30"
                  >
                    {slide.cta}
                    {slide.href === '/travel/apply' && (
                      <span className="sr-only"> for SkyView Travel & Tour</span>
                    )}
                    <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between sm:bottom-5 sm:left-8 sm:right-8 lg:bottom-6">
          <div className="flex gap-2" aria-label="Choose slide">
            {slides.map((slide, index) => (
              <button
                key={slide.category}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={`Show ${slide.category}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-7 bg-midnight-navy' : 'w-2 bg-midnight-navy/35 hover:bg-midnight-navy/60'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => advance(-1)}
              aria-label="Previous slide"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/60 bg-white/80 text-midnight-navy shadow-sm backdrop-blur-sm transition hover:bg-white"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setIsPaused(paused => !paused)}
              aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
              aria-pressed={isPaused}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/60 bg-white/80 text-midnight-navy shadow-sm backdrop-blur-sm transition hover:bg-white"
            >
              {isPaused ? <Play aria-hidden="true" className="h-4 w-4" /> : <Pause aria-hidden="true" className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => advance(1)}
              aria-label="Next slide"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/60 bg-white/80 text-midnight-navy shadow-sm backdrop-blur-sm transition hover:bg-white"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {slides[activeIndex].category}, slide {activeIndex + 1} of {slides.length}
      </p>
    </section>
  );
}
