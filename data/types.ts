export type PortImageTheme =
  | "beach"
  | "snorkel"
  | "rainforest"
  | "fortress"
  | "viewpoint"
  | "town"
  | "catamaran"
  | "wildlife";

export interface Port {
  slug: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  overview: string;
  bestFor: string;
  bestExcursions: ExcursionItem[];
  portInfo: PortInfo;
  passengerTips: string[];
  topAttractions: Attraction[];
  specialistUrl: string;
  specialistName: string;
  faqs: FAQ[];
  highlights: string[];
  imageAlt: string;
  imageTheme: PortImageTheme;
}

export interface PortRelatedLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ExcursionItem {
  name: string;
  description: string;
  duration: string;
  type: string;
  rating?: number;
}

export interface PortInfo {
  dockType: string;
  walkingDistance: string;
  tenderRequired: boolean;
  currency: string;
  language: string;
  timeZone: string;
  safetyNotes: string;
}

export interface Attraction {
  name: string;
  description: string;
  distance: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Comparison {
  slug: string;
  title: string;
  portA: string;
  portB: string;
  portASlug: string;
  portBSlug: string;
  summary: string;
  sections: ComparisonSection[];
  verdict: string;
  faqs: FAQ[];
}

export interface ComparisonSection {
  title: string;
  portAContent: string;
  portBContent: string;
}

export interface ExcursionType {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  whatToExpect: string[];
  bestPorts: { slug: string; name: string; reason: string }[];
  tips: string[];
  faqs: FAQ[];
}

export interface CruiseLine {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  caribbeanRoutes: string[];
  popularPorts: { slug: string; name: string }[];
  excursionTips: string[];
  bookingTips: string[];
  faqs: FAQ[];
}

export interface ShipSchedulePort {
  slug: string;
  name: string;
  country: string;
  description: string;
  years?: string;
  scheduleOverview?: string;
}

export interface ScheduleEntry {
  date: string;
  ship: string;
  cruiseLine: string;
  arrival: string;
  departure: string;
  passengers: string;
}

export interface CruiseTip {
  title: string;
  excerpt: string;
  content: string;
}

export interface FeaturedPortCard {
  slug: string;
  description: string;
  bestFor: string;
}

export interface BeachGuide {
  name: string;
  description: string;
}

export interface SnorkelSite {
  site: string;
  description: string;
}

export interface PrivateTourOption {
  name: string;
  description: string;
}

export interface PortAuthorityContent {
  seoTitle: string;
  seoDescription: string;
  whyVisit: string[];
  bestBeaches: BeachGuide[];
  bestForFamilies: string[];
  bestForCouples: string[];
  snorkelling: SnorkelSite[];
  privateTours: PrivateTourOption[];
}

export interface RegionPage {
  slug: string;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  overview: string;
  portComparison: string;
  recommendedExcursions: string[];
  portSlugs: string[];
  excursionTypeSlugs: string[];
  relatedRegionSlugs: string[];
}
