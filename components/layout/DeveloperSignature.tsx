'use client';

import Image from 'next/image';

interface DeveloperSignatureProps {
  websiteUrl?: string;
}

function validateWebsiteUrl(websiteUrl?: string) {
  if (!websiteUrl) return undefined;

  const url = new URL(websiteUrl);
  if (url.protocol !== 'https:' && url.protocol !== 'http:') {
    throw new Error('NEXT_PUBLIC_APPCREATIVES_WEBSITE_URL must use http or https.');
  }

  return url.href;
}

export function DeveloperSignature({ websiteUrl }: DeveloperSignatureProps) {
  const configuredWebsiteUrl = validateWebsiteUrl(websiteUrl);

  const logo = (
    <Image
      src="/images/appcreatives-logo.png"
      alt="AppCreatives LLC"
      width={88}
      height={88}
      className="h-[72px] w-[72px] rounded-md object-contain transition duration-300 group-hover:scale-105 group-hover:brightness-110 sm:h-20 sm:w-20"
      sizes="80px"
    />
  );

  return (
    <div className="mt-8 border-t border-gray-700/80 pt-8 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-400">
        Designed &amp; Developed by
      </p>
      <div className="mt-3 flex justify-center">
        {configuredWebsiteUrl ? (
          <a
            href={configuredWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit AppCreatives LLC"
            className="group inline-flex"
          >
            {logo}
          </a>
        ) : (
          <div className="group inline-flex" aria-label="AppCreatives LLC">
            {logo}
          </div>
        )}
      </div>
      <p className="mt-2 text-xs tracking-[0.06em] text-gray-400">
        Ideas. Innovation. Technology.
      </p>
    </div>
  );
}
