'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FormEvent, useState } from 'react';

const fieldClassName =
  'mt-2 w-full rounded-lg border border-border-color bg-white px-4 py-3 text-primary-text outline-none transition placeholder:text-slate-400 focus:border-premium-blue focus:ring-2 focus:ring-premium-blue/20';

export function TravelApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [departureDate, setDepartureDate] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setDepartureDate('');
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-3xl py-8" aria-live="polite">
        <div className="rounded-2xl border border-emerald-200 bg-white/95 p-7 text-center shadow-xl sm:p-10">
          <CheckCircle2 aria-hidden="true" className="mx-auto h-14 w-14 text-emerald-600" />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-premium-blue">
            Demo submission complete
          </p>
          <h2 className="mt-3 text-2xl font-bold text-midnight-navy sm:text-3xl">
            Thank you for your interest in SkyView Travel & Tour. Your travel inquiry has been received.
          </h2>
          <p className="mt-5 rounded-xl bg-blue-50 p-4 text-sm text-secondary-text">
            This is a prototype confirmation only. No application data was transmitted to or received by SkyView staff, and no booking, travel arrangement, or visa status has been created.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="btn-primary inline-flex items-center gap-2"
            >
              Start Another Demo
            </button>
            <Link href="/travel" className="btn-secondary inline-flex items-center gap-2">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to Travel & Tour
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-2xl border border-border-color bg-white/95 p-6 shadow-xl shadow-midnight-navy/5 sm:p-9"
    >
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-relaxed text-secondary-text">
        <div className="flex gap-3">
          <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-premium-blue" />
          <p>
            <strong className="text-midnight-navy">Prototype demonstration:</strong> this form validates in your browser but does not send or store your information. Do not enter passport numbers, passport photographs, or sensitive immigration documents.
          </p>
        </div>
      </div>

      <fieldset className="space-y-5">
        <legend className="text-xl font-bold text-midnight-navy">Contact details</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-primary-text">
            Full name <span aria-hidden="true" className="text-red-600">*</span>
            <input
              type="text"
              name="fullName"
              autoComplete="name"
              required
              minLength={2}
              placeholder="Your full name"
              className={fieldClassName}
            />
          </label>
          <label className="block text-sm font-semibold text-primary-text">
            Email address <span aria-hidden="true" className="text-red-600">*</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className={fieldClassName}
            />
          </label>
          <label className="block text-sm font-semibold text-primary-text">
            Phone / WhatsApp number <span aria-hidden="true" className="text-red-600">*</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              required
              minLength={7}
              placeholder="+233 000 000 000"
              className={fieldClassName}
            />
          </label>
          <label className="block text-sm font-semibold text-primary-text">
            Country of residence <span aria-hidden="true" className="text-red-600">*</span>
            <input
              type="text"
              name="country"
              autoComplete="country-name"
              required
              placeholder="Country"
              className={fieldClassName}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-5 border-t border-border-color pt-7">
        <legend className="pr-4 text-xl font-bold text-midnight-navy">Travel preferences</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-primary-text">
            Preferred destination <span aria-hidden="true" className="text-red-600">*</span>
            <input
              type="text"
              name="destination"
              required
              placeholder="City, country, or region"
              className={fieldClassName}
            />
          </label>
          <label className="block text-sm font-semibold text-primary-text">
            Purpose of travel <span aria-hidden="true" className="text-red-600">*</span>
            <select name="purpose" required defaultValue="" className={fieldClassName}>
              <option value="" disabled>Select a purpose</option>
              <option value="leisure">Leisure / vacation</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
              <option value="family">Family visit</option>
              <option value="group">Group / organization</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-primary-text">
            Preferred travel dates: departure <span aria-hidden="true" className="text-red-600">*</span>
            <input
              type="date"
              name="departureDate"
              required
              value={departureDate}
              onChange={event => setDepartureDate(event.target.value)}
              className={fieldClassName}
            />
          </label>
          <label className="block text-sm font-semibold text-primary-text">
            Preferred travel dates: return <span aria-hidden="true" className="text-red-600">*</span>
            <input
              type="date"
              name="returnDate"
              required
              min={departureDate || undefined}
              className={fieldClassName}
            />
          </label>
          <label className="block text-sm font-semibold text-primary-text">
            Number of travelers <span aria-hidden="true" className="text-red-600">*</span>
            <input
              type="number"
              name="travelers"
              inputMode="numeric"
              required
              min={1}
              max={100}
              defaultValue={1}
              className={fieldClassName}
            />
          </label>
          <label className="block text-sm font-semibold text-primary-text">
            Service required <span aria-hidden="true" className="text-red-600">*</span>
            <select name="service" required defaultValue="" className={fieldClassName}>
              <option value="" disabled>Select a service</option>
              <option>Flight bookings</option>
              <option>Hotel reservations</option>
              <option>Vacation packages</option>
              <option>International tours</option>
              <option>Visa assistance</option>
              <option>Group travel</option>
              <option>Customized travel experiences</option>
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-5 border-t border-border-color pt-7">
        <legend className="pr-4 text-xl font-bold text-midnight-navy">Additional details</legend>
        <label className="block text-sm font-semibold text-primary-text">
          Estimated travel budget <span aria-hidden="true" className="text-red-600">*</span>
          <input
            type="text"
            name="budget"
            required
            placeholder="Example: GHS 15,000 - 25,000"
            className={fieldClassName}
          />
          <span className="mt-2 block text-xs font-normal leading-relaxed text-secondary-text">
            Share an estimate in your preferred currency. This is not a quote or confirmed price.
          </span>
        </label>
        <label className="block text-sm font-semibold text-primary-text">
          Additional information
          <textarea
            name="additionalInformation"
            rows={5}
            maxLength={1500}
            placeholder="Tell us about interests, group needs, accessibility preferences, or other travel considerations."
            className={`${fieldClassName} resize-y`}
          />
        </label>
      </fieldset>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border-color bg-cloud-bg p-4 text-sm leading-relaxed">
        <input
          type="checkbox"
          name="privacyConsent"
          required
          className="mt-1 h-4 w-4 rounded border-border-color text-midnight-navy focus:ring-premium-blue"
        />
        <span>
          I consent to this prototype validating the information entered above. I understand it will not be transmitted or stored, and that submitting this demo does not create a booking or visa application.
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-midnight-navy px-7 py-4 font-semibold text-white transition hover:bg-dark-navy"
      >
        Submit Application <ArrowRight aria-hidden="true" className="h-5 w-5" />
      </button>
      <p className="text-center text-xs">
        Demo only. No payment, confirmed booking, or immigration outcome is provided.
      </p>
    </form>
  );
}
