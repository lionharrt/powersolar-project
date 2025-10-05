// Power Solar Shared Types

// ============================================================================
// Lead and Contact Types
// ============================================================================

export interface SolarLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  eircode: string;
  propertyType: PropertyType;
  roofType: RoofType;
  roofOrientation: RoofOrientation;
  currentElectricityUsage: ElectricityUsageRange;
  interestedSystemSize: SystemSizeRange;
  seaiGrantEligibility: SeaiGrantEligibility;
  installationTimeframe: InstallationTimeframe;
  preferredContact: PreferredContactMethod;
  additionalNotes?: string;
  projectType: ProjectType;
  source: LeadSource;
  status: LeadStatus;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// Enum Types
// ============================================================================

export type PropertyType =
  | 'detached'
  | 'semi-detached'
  | 'terraced'
  | 'apartment'
  | 'commercial';

export type RoofType = 
  | 'pitched'
  | 'flat'
  | 'mixed';

export type RoofOrientation =
  | 'south'
  | 'east'
  | 'west'
  | 'north'
  | 'mixed'
  | 'unknown';

export type ElectricityUsageRange =
  | 'under-3000'      // < 3000 kWh/year
  | '3000-5000'       // 3000-5000 kWh/year
  | '5000-8000'       // 5000-8000 kWh/year
  | 'over-8000'       // 8000+ kWh/year
  | 'unknown';

export type SystemSizeRange =
  | '2-3-kwp'         // 2-3 kWp
  | '3-4-kwp'         // 3-4 kWp
  | '4-6-kwp'         // 4-6 kWp
  | 'over-6-kwp'      // 6+ kWp
  | 'not-sure';

export type SeaiGrantEligibility =
  | 'eligible'        // Property built before 2021
  | 'not-eligible'    // Property built 2021 or later
  | 'unsure';         // Need to check

export type InstallationTimeframe =
  | 'asap'            // As soon as possible
  | '1-3-months'      // Within 1-3 months
  | '3-6-months'      // Within 3-6 months
  | 'over-6-months'   // 6+ months
  | 'just-exploring';  // Just researching

export type PreferredContactMethod = 
  | 'email' 
  | 'phone' 
  | 'whatsapp';

export type ProjectType =
  | 'residential-solar'
  | 'commercial-solar'
  | 'solar-maintenance'
  | 'battery-storage';

export type LeadSource = 
  | 'quote-form' 
  | 'phone' 
  | 'whatsapp' 
  | 'referral'
  | 'website';

export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'site-survey-scheduled'
  | 'site-survey-completed'
  | 'quoted'
  | 'approved'
  | 'installation-scheduled'
  | 'installed'
  | 'lost';

// ============================================================================
// Runtime Constants
// ============================================================================

export const PROPERTY_TYPES = {
  DETACHED: 'detached' as const,
  SEMI_DETACHED: 'semi-detached' as const,
  TERRACED: 'terraced' as const,
  APARTMENT: 'apartment' as const,
  COMMERCIAL: 'commercial' as const,
} as const;

export const ROOF_TYPES = {
  PITCHED: 'pitched' as const,
  FLAT: 'flat' as const,
  MIXED: 'mixed' as const,
} as const;

export const ROOF_ORIENTATIONS = {
  SOUTH: 'south' as const,
  EAST: 'east' as const,
  WEST: 'west' as const,
  NORTH: 'north' as const,
  MIXED: 'mixed' as const,
  UNKNOWN: 'unknown' as const,
} as const;

export const PROJECT_TYPES = {
  RESIDENTIAL_SOLAR: 'residential-solar' as const,
  COMMERCIAL_SOLAR: 'commercial-solar' as const,
  SOLAR_MAINTENANCE: 'solar-maintenance' as const,
  BATTERY_STORAGE: 'battery-storage' as const,
} as const;

export const LEAD_SOURCES = {
  QUOTE_FORM: 'quote-form' as const,
  PHONE: 'phone' as const,
  WHATSAPP: 'whatsapp' as const,
  REFERRAL: 'referral' as const,
  WEBSITE: 'website' as const,
} as const;

export const LEAD_STATUSES = {
  NEW: 'new' as const,
  CONTACTED: 'contacted' as const,
  SITE_SURVEY_SCHEDULED: 'site-survey-scheduled' as const,
  SITE_SURVEY_COMPLETED: 'site-survey-completed' as const,
  QUOTED: 'quoted' as const,
  APPROVED: 'approved' as const,
  INSTALLATION_SCHEDULED: 'installation-scheduled' as const,
  INSTALLED: 'installed' as const,
  LOST: 'lost' as const,
} as const;

// ============================================================================
// Form Data Interfaces
// ============================================================================

export interface SolarQuoteFormData {
  // Step 1: Property & Project Details
  propertyType: PropertyType;
  eircode: string;
  roofType: RoofType;
  roofOrientation: RoofOrientation;
  currentElectricityUsage: ElectricityUsageRange;
  interestedSystemSize: SystemSizeRange;
  seaiGrantEligibility: SeaiGrantEligibility;
  installationTimeframe: InstallationTimeframe;
  
  // Step 2: Contact Information
  name: string;
  email: string;
  phone: string;
  preferredContact: PreferredContactMethod;
  additionalNotes?: string;
  
  // Metadata
  projectType: ProjectType;
}

// ============================================================================
// Project Types
// ============================================================================

export interface SolarProject {
  id: string;
  title: string;
  description: string;
  projectType: ProjectType;
  location: string;
  systemSize: string; // e.g., "4.2 kWp"
  completionDate: Date;
  customerType: 'residential' | 'commercial';
  images: ProjectImage[];
  testimonial?: CustomerTestimonial;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  isPrimary: boolean;
  order: number;
}

export interface CustomerTestimonial {
  customerName: string;
  location: string;
  rating: number; // 1-5
  comment: string;
  installationDate: Date;
  billSavings?: string; // e.g., "85% reduction"
  systemSize?: string; // e.g., "4.2 kWp"
}

// ============================================================================
// Company Information Types
// ============================================================================

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  founders: string[];
  experience: string;
  serviceAreas: string[];
  contact: ContactInfo;
  certifications: string[];
  warranties: WarrantyInfo[];
}

export interface ContactInfo {
  phone: string;
  email?: string;
  whatsapp: string;
  address: Address;
  workingHours?: WorkingHours;
}

export interface Address {
  street: string;
  city: string;
  county: string;
  country: string;
  eircode: string;
}

export interface WorkingHours {
  weekdays: string;
  saturday?: string;
  sunday?: string;
}

export interface WarrantyInfo {
  type: string;
  duration: string;
  description: string;
}

// ============================================================================
// SEAI Grant Information
// ============================================================================

export interface SeaiGrantInfo {
  type: 'residential' | 'commercial';
  maxAmount: number;
  tiers: GrantTier[];
  eligibility: string[];
  applicationProcess: string[];
}

export interface GrantTier {
  systemSizeMin: number; // kWp
  systemSizeMax: number; // kWp
  grantPerKwp: number;    // €
  maxGrant: number;       // €
  description: string;
}

// ============================================================================
// API Response Types
// ============================================================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ============================================================================
// Analytics Types
// ============================================================================

export interface AnalyticsData {
  leadsCount: number;
  conversionRate: number;
  topSources: Array<{
    source: LeadSource;
    count: number;
    percentage: number;
  }>;
  topProjectTypes: Array<{
    type: ProjectType;
    count: number;
    percentage: number;
  }>;
  monthlyTrends: Array<{
    month: string;
    leads: number;
    conversions: number;
  }>;
  averageSystemSize?: string;
  grantEligibilityRate?: number;
}

// ============================================================================
// Error Types
// ============================================================================

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export interface AppError {
  code: string;
  message: string;
  details?: ValidationError[];
  statusCode?: number;
}

// ============================================================================
// User/Admin Types
// ============================================================================

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'admin' | 'manager' | 'viewer';

export const USER_ROLES = {
  ADMIN: 'admin' as const,
  MANAGER: 'manager' as const,
  VIEWER: 'viewer' as const,
} as const;

