// Product and catalog types
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  category: string;
  tags: string[];
  images: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  stock?: number;
  connectivity?: 'wifi' | '4g' | 'solar' | 'mixed';
  powerType?: string;
  features: string[];
  status?: 'published' | 'draft';
  sourceReference?: string;
  whatsappReference?: string;
  preOrder?: boolean;
  soldOut?: boolean;
  createdAt?: string;
  updatedAt?: string;
  verificationNotes?: string;
}

export interface DraftProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number | null;
  category: string;
  subcategory?: string;
  tags: string[];
  images: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  stock?: number;
  connectivity?: 'wifi' | '4g' | 'solar' | 'mixed';
  powerType?: string;
  features: string[];
  status: 'draft' | 'review' | 'published';
  sourceReference?: string;
  sourceScreenshot?: string;
  whatsappProductId?: string;
  preOrder?: boolean;
  soldOut?: boolean;
  createdAt: string;
  updatedAt: string;
  verificationNotes?: string;
  importBatchId?: string;
  potentialDuplicateOf?: string;
}

export interface CatalogImportBatch {
  id: string;
  fileName: string;
  importedAt: string;
  status: 'processing' | 'preview' | 'completed' | 'failed';
  totalProducts: number;
  importedProducts: number;
  duplicates: number;
  failedProducts: number;
  errors?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  addedAt: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId?: string;
  items: OrderItem[];
  subtotal: number;
  deliveryCharge: number;
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'dispatched' | 'delivered' | 'cancelled';
  customer: CustomerInfo;
  createdAt: string;
  updatedAt: string;
  paymentMethod: 'mobile_money' | 'card';
  paymentStatus: 'pending' | 'confirmed' | 'failed';
  notes?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  region: string;
  city: string;
  address: string;
  instructions?: string;
}

export interface StoreSettings {
  businessName: string;
  businessEmail: string;
  businessPhone: string;
  whatsappNumber: string;
  supportHours: string;
  businessAddress?: string;
  registrationNumber?: string;
  returnPolicy?: string;
  warrantyPolicy?: string;
  deliveryZones: DeliveryZone[];
}

export interface DeliveryZone {
  region: string;
  cities: string[];
  charge: number;
  estimatedDays: number;
}
