import { DraftProduct, Product, CatalogImportBatch, Category } from './types';

// 14 Categories as specified in the catalog
export const CATALOG_CATEGORIES: Category[] = [
  {
    id: 'security-cameras',
    name: 'Security Cameras',
    slug: 'security-cameras',
    description: 'Professional security camera systems for home and business'
  },
  {
    id: 'indoor-cameras',
    name: 'Indoor Cameras',
    slug: 'indoor-cameras',
    description: 'Indoor security and monitoring cameras'
  },
  {
    id: 'outdoor-cameras',
    name: 'Outdoor Cameras',
    slug: 'outdoor-cameras',
    description: 'Weatherproof outdoor surveillance cameras'
  },
  {
    id: 'ptz-cameras',
    name: 'PTZ Cameras',
    slug: 'ptz-cameras',
    description: 'Pan-Tilt-Zoom cameras for wide area coverage'
  },
  {
    id: 'solar-cameras',
    name: 'Solar Cameras',
    slug: 'solar-cameras',
    description: 'Solar-powered security cameras with 4G connectivity'
  },
  {
    id: 'wifi-cameras',
    name: 'WiFi Cameras',
    slug: 'wifi-cameras',
    description: 'Wireless WiFi security cameras'
  },
  {
    id: 'thermal-cameras',
    name: 'Thermal Cameras',
    slug: 'thermal-cameras',
    description: 'Thermal and infrared imaging cameras'
  },
  {
    id: 'anpr-cameras',
    name: 'ANPR Cameras',
    slug: 'anpr-cameras',
    description: 'Automatic number plate recognition cameras'
  },
  {
    id: 'access-control',
    name: 'Access Control Systems',
    slug: 'access-control',
    description: 'Door access control and biometric systems'
  },
  {
    id: 'storage-solutions',
    name: 'Storage & Recording',
    slug: 'storage-solutions',
    description: 'NVRs, DVRs, storage devices, and backup systems'
  },
  {
    id: 'networking-infrastructure',
    name: 'Networking Infrastructure',
    slug: 'networking-infrastructure',
    description: 'Network switches, fiber optics, and connectivity equipment'
  },
  {
    id: 'monitoring-software',
    name: 'Monitoring Software',
    slug: 'monitoring-software',
    description: 'VMS, mobile apps, and monitoring platforms'
  },
  {
    id: 'accessories',
    name: 'Accessories & Cables',
    slug: 'accessories',
    description: 'Cables, brackets, power supplies, and accessories'
  },
  {
    id: 'smart-security',
    name: 'Smart Security Systems',
    slug: 'smart-security',
    description: 'Integrated smart home security solutions'
  }
];

/**
 * Find potential duplicates by comparing products
 */
export function findPotentialDuplicates(
  draftProduct: DraftProduct,
  existingProducts: Product[]
): Product[] {
  const lowerDraftName = draftProduct.name.toLowerCase();
  const lowerDraftDescription = draftProduct.description.toLowerCase();

  return existingProducts.filter(existing => {
    const lowerExistingName = existing.name.toLowerCase();
    const lowerExistingDescription = existing.description.toLowerCase();

    // Check if names are very similar
    const nameMatch = levenshteinDistance(lowerDraftName, lowerExistingName) < 5;

    // Check if key model numbers match
    const extractModelNumber = (text: string) => {
      const match = text.match(/([A-Z0-9]+[-_]?[0-9]+[-_]?[A-Z0-9]*)/i);
      return match ? match[1].toLowerCase() : '';
    };

    const draftModel = extractModelNumber(draftProduct.name);
    const existingModel = extractModelNumber(existing.name);

    if (draftModel && existingModel && draftModel === existingModel) {
      return true;
    }

    // Check if both mention same camera types (e.g., both "4G" and "solar")
    const hasSharedFeatures =
      (lowerDraftName.includes('4g') && lowerExistingName.includes('4g')) ||
      (lowerDraftName.includes('solar') && lowerExistingName.includes('solar')) ||
      (lowerDraftName.includes('ptz') && lowerExistingName.includes('ptz'));

    return nameMatch && hasSharedFeatures;
  });
}

/**
 * Simple Levenshtein distance calculation
 */
export function levenshteinDistance(s1: string, s2: string): number {
  const len1 = s1.length;
  const len2 = s2.length;
  const d: number[][] = [];

  for (let i = 0; i <= len1; i++) {
    d[i] = [i];
  }

  for (let j = 0; j <= len2; j++) {
    d[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost
      );
    }
  }

  return d[len1][len2];
}

/**
 * Generate slug from product name
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Generate a unique ID for a draft product
 */
export function generateProductId(): string {
  return `draft-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Validate draft product before import
 */
export function validateDraftProduct(product: DraftProduct): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!product.name || product.name.trim().length === 0) {
    errors.push('Product name is required');
  }

  if (!product.slug || product.slug.trim().length === 0) {
    errors.push('Product slug is required');
  }

  if (!product.category) {
    errors.push('Product category is required');
  }

  if (product.price !== null && product.price < 0) {
    errors.push('Product price cannot be negative');
  }

  if (!product.images || product.images.length === 0) {
    errors.push('At least one product image is required');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Convert draft product to published product
 */
export function publishDraftProduct(draft: DraftProduct): Product {
  return {
    id: draft.id,
    name: draft.name,
    slug: draft.slug,
    description: draft.description,
    shortDescription: draft.shortDescription,
    price: draft.price ?? 0,
    category: draft.category,
    tags: draft.tags,
    images: draft.images,
    specifications: draft.specifications,
    inStock: draft.inStock,
    stock: draft.stock,
    connectivity: draft.connectivity,
    powerType: draft.powerType,
    features: draft.features,
    status: 'published',
    sourceReference: draft.sourceReference,
    whatsappReference: draft.whatsappProductId,
    preOrder: draft.preOrder,
    soldOut: draft.soldOut,
    createdAt: draft.createdAt,
    updatedAt: new Date().toISOString()
  };
}
