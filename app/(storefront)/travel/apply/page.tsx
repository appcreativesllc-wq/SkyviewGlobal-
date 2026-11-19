import type { Metadata } from 'next';
import { Plane } from 'lucide-react';
import { TravelApplicationForm } from '@/components/travel/TravelApplicationForm';

export const metadata: Metadata = {
  title: 'Travel Application Demo | SkyView Travel & Tour',
  description:
    'Complete a no-transmission demonstration inquiry for proposed SkyView Travel & Tour services.',
};

export default function TravelApplicationPage() {
  return (
    <div className="section-padding">
      <div className="container-tight">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-midnight-navy text-white">
            <Plane aria-hidden="true" className="h-7 w-7" />
          </div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-premium-blue">
            SkyView Travel & Tour
          </p>
          <h1 className="text-4xl font-bold text-midnight-navy md:text-5xl">
            Tell us where you want to go
          </h1>
          <p className="mt-5 text-lg">
            Complete this initial demonstration inquiry to preview the proposed SkyView travel experience.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <TravelApplicationForm />
        </div>
      </div>
    </div>
  );
}
