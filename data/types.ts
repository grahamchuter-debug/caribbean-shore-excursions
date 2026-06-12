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

export interface ComparisonCategory {
  portA: string;
  portB: string;
}

export interface ComparisonTableRow {
  category: string;
  portA: string;
  portB: string;
}

export interface Comparison {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  portA: string;
  portB: string;
  portASlug: string;
  portBSlug: string;
  summary: string;
  overview: ComparisonCategory;
  beaches: ComparisonCategory;
  excursions: ComparisonCategory;
  families: ComparisonCategory;
  couples: ComparisonCategory;
  snorkeling: ComparisonCategory;
  foodAndDrink: ComparisonCategory;
  easeFromPort: ComparisonCategory;
  bestForFirstTimers: ComparisonCategory;
  bestOverall: string;
  comparisonTable: ComparisonTableRow[];
  verdict: string;
  faqs: FAQ[];
}

export interface BestGuidePort {
  slug: string;
  reason: string;
}

export interface BestGuideExcursion {
  name: string;
  portSlug: string;
  description: string;
  duration: string;
}

export interface BestGuideTableRow {
  portSlug: string;
  portName: string;
  bestFor: string;
  bestExcursion: string;
  transferTime: string;
  rating: string;
}

export interface PassengerRecommendation {
  title: string;
  advice: string;
}

export interface BestGuidePage {
  slug: string;
  seoTitle: string;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  introduction: string;
  introductionDetail: string;
  topPorts: BestGuidePort[];
  recommendedExcursions: BestGuideExcursion[];
  comparisonTable: BestGuideTableRow[];
  passengerRecommendations: PassengerRecommendation[];
  faqs: FAQ[];
  excursionTypeSlug?: string;
}

export interface PortExcursionAuthorityRow {
  portSlug: string;
  portName: string;
  bestExcursion: string;
  duration: string;
  bestFor: string;
  activityLevel: "Easy" | "Moderate" | "Active";
  whyRecommended: string;
}

export interface PortExcursionCategoryPick {
  portSlug: string;
  excursionName: string;
  description: string;
}

export interface PortExcursionAuthorityPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  introduction: string;
  introductionDetail: string;
  portTable: PortExcursionAuthorityRow[];
  bestBeachExcursions: PortExcursionCategoryPick[];
  bestSnorkellingExcursions: PortExcursionCategoryPick[];
  bestWildlifeExcursions: PortExcursionCategoryPick[];
  bestFamilyExcursions: PortExcursionCategoryPick[];
  bestPrivateExcursions: PortExcursionCategoryPick[];
  faqs: FAQ[];
}

export interface ItineraryDayPlan {
  portSlug: string;
  title: string;
  morning: string;
  afternoon: string;
  tip: string;
}

export interface ItineraryPortRecommendation {
  portSlug: string;
  title: string;
  advice: string;
}

export interface ItineraryExcursion {
  name: string;
  portSlug: string;
  description: string;
}

export interface ItineraryPlannerPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  overview: string;
  overviewDetail: string;
  itineraryHighlights: string[];
  topPortSlugs: string[];
  bestExcursions: ItineraryExcursion[];
  suggestedDayPlans: ItineraryDayPlan[];
  bestBeaches: ItineraryPortRecommendation[];
  bestSnorkelling: ItineraryPortRecommendation[];
  familyRecommendations: ItineraryPortRecommendation[];
  privateTourRecommendations: ItineraryPortRecommendation[];
  regionPageSlug: string;
  bestGuideSlugs: string[];
  faqs: FAQ[];
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

export interface CruiseLineItinerary {
  name: string;
  duration: string;
  ports: string;
  description: string;
}

export interface CruiseLineExcursionRec {
  name: string;
  portSlug: string;
  description: string;
  duration: string;
}

export interface CruiseLinePortRecommendation {
  title: string;
  portSlug: string;
  advice: string;
}

export interface CruiseLine {
  slug: string;
  pageSlug: string;
  name: string;
  tagline: string;
  seoTitle: string;
  metaDescription: string;
  overview: string;
  overviewDetail: string;
  caribbeanRoutes: string[];
  popularItineraries: CruiseLineItinerary[];
  popularPorts: { slug: string; name: string }[];
  recommendedExcursions: CruiseLineExcursionRec[];
  familyRecommendations: CruiseLinePortRecommendation[];
  beachRecommendations: CruiseLinePortRecommendation[];
  adventureRecommendations: CruiseLinePortRecommendation[];
  comparisonTable: BestGuideTableRow[];
  excursionTips: string[];
  bookingTips: string[];
  faqs: FAQ[];
}

export interface CruiseLineExcursionCategory {
  category: string;
  href: string;
  picks: { name: string; portSlug: string; description: string }[];
}

export interface CruiseLinePlanningProfile {
  fleetSize: string;
  passengerProfile: string;
  bestFor: string[];
  shipSlugs: string[];
  excursionCategories: CruiseLineExcursionCategory[];
  planningAdvice: {
    independentExcursions: string;
    returnTiming: string;
    tenderPorts: string;
    peakDays: string;
    bookingAdvice: string;
  };
  plannerLinks: { label: string; href: string }[];
  comparisonLinks: { label: string; href: string }[];
  bestGuideLinks: { label: string; href: string }[];
}

export interface CruiseShip {
  slug: string;
  name: string;
  cruiseLineSlug: string;
  seoTitle: string;
  metaDescription: string;
  tagline: string;
  overview: string;
  caribbeanItineraries: string[];
  commonPortSlugs: string[];
  recommendedExcursions: { name: string; portSlug: string; description: string }[];
  planningAdvice: string[];
  faqs: FAQ[];
  featuredPage: boolean;
}

export interface ShipSchedulePort {
  slug: string;
  name: string;
  country: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  scheduleOverview: string;
  planningTips?: string[];
  faqs?: FAQ[];
  relatedPortSlugs: string[];
  excursionTypeSlugs: string[];
  usesTender?: boolean;
}

export interface ScheduleEntry {
  date: string;
  ship: string;
  cruiseLine: string;
  arrival: string;
  departure: string;
  timeInPort?: string;
  passengers?: string;
  isPlaceholder?: boolean;
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

export interface PortPlanningSnapshot {
  timeInPort: string;
  bestFor: string;
  walkingRequired: string;
  familyFriendly: string;
  privateTourFriendly: string;
  returnToShipConfidence: string;
}

export interface TypicalCruiseDayStep {
  time: string;
  activity: string;
}

export interface PortPlanningCard {
  label: string;
  href: string;
  guideHref: string;
  teaser: string;
  tone: "sand" | "reef" | "family" | "wildlife" | "private";
}

export interface RegionalCruisePlannerPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  overview: string;
  overviewDetail: string;
  portComparison: string;
  comparisonTable: BestGuideTableRow[];
  topPortSlugs: string[];
  bestExcursions: ItineraryExcursion[];
  bestBeaches: ItineraryPortRecommendation[];
  privateTourRecommendations: ItineraryPortRecommendation[];
  familyRecommendations: ItineraryPortRecommendation[];
  regionPageSlug: string;
  parentPlannerSlug: string;
  relatedRegionalPlannerSlugs: string[];
  excursionTypeSlugs: string[];
  bestGuideSlugs: string[];
  faqs: FAQ[];
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
