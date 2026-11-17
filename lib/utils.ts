export function clsx(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
  }).format(price);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export function formatPhoneNumber(phone: string): string {
  // Remove non-digits
  const cleaned = phone.replace(/\D/g, '');
  
  // If it starts with 233 (Ghana country code), return as is
  if (cleaned.startsWith('233')) {
    return '+' + cleaned;
  }
  
  // If it starts with 0, replace with 233
  if (cleaned.startsWith('0')) {
    return '+233' + cleaned.slice(1);
  }
  
  return '+233' + cleaned;
}

export function isValidGhanaianPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  // Ghana phone numbers are 10 digits (without country code) or 12 digits (with 233)
  return cleaned.length === 10 || (cleaned.length === 12 && cleaned.startsWith('233'));
}

export function calculateDeliveryCharge(
  region: string,
  deliveryZones: Array<{ region: string; charge: number }>
): number {
  const zone = deliveryZones.find(z => z.region.toLowerCase() === region.toLowerCase());
  return zone?.charge ?? 15; // Default charge if region not found
}
