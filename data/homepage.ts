import type { FeaturedPortCard } from "./types";

export const FEATURED_PORT_SLUGS = [
  "cozumel",
  "st-thomas",
  "aruba",
  "grand-cayman",
  "nassau",
  "roatan",
  "puerto-plata",
  "st-maarten",
] as const;

export const featuredPortCards: FeaturedPortCard[] = [
  {
    slug: "cozumel",
    description:
      "Mesoamerican Reef snorkeling, El Cielo sandbar sails, and Mayan culture from Mexico's busiest cruise island.",
    bestFor: "Reef snorkeling & Mayan ruins",
  },
  {
    slug: "st-thomas",
    description:
      "Magens Bay beaches, Charlotte Amalie shopping, and easy ferry access to St. John and Trunk Bay.",
    bestFor: "Beaches & island hopping",
  },
  {
    slug: "aruba",
    description:
      "Eagle Beach, Arikok National Park desert trails, and reliable sunshine outside the hurricane belt.",
    bestFor: "Sun-soaked beaches & desert tours",
  },
  {
    slug: "grand-cayman",
    description:
      "Stingray City sandbar encounters, Seven Mile Beach, and crystal-clear Caribbean waters.",
    bestFor: "Stingray City & snorkeling",
  },
  {
    slug: "nassau",
    description:
      "Atlantis Aquaventure, Bahamian culture in downtown Nassau, and Paradise Island beach days.",
    bestFor: "Atlantis & Bahamian culture",
  },
  {
    slug: "roatan",
    description:
      "Pristine barrier reef snorkeling, West Bay Beach, and rainforest zip-lines at exceptional value.",
    bestFor: "Reef snorkeling & eco-adventures",
  },
  {
    slug: "puerto-plata",
    description:
      "Teleférico cable car views, 27 Waterfalls adventures, and Amber Coast colonial heritage.",
    bestFor: "Waterfalls & cable car views",
  },
  {
    slug: "st-maarten",
    description:
      "Maho Beach plane spotting, Orient Bay beach clubs, and Dutch-French dual-nation exploration.",
    bestFor: "Dual-nation culture & beaches",
  },
];

export const HOMEPAGE_SCHEDULE_SLUGS = [
  "st-thomas",
  "cozumel",
  "aruba",
  "grand-cayman",
  "nassau",
  "roatan",
  "puerto-plata",
  "st-maarten",
] as const;

export const homepageFaqs = [
  {
    question: "What is the Caribbean Shore Excursion Planner?",
    answer:
      "The Caribbean Shore Excursion Planner is an independent authority hub for comparing Caribbean cruise ports, ship schedules, cruise lines, excursion types, and local specialist excursion websites. It helps cruise passengers plan better port days across the Caribbean.",
  },
  {
    question: "Which Caribbean ports are best for shore excursions?",
    answer:
      "Top ports include Cozumel for reef snorkeling, St. Thomas for beaches, Aruba for consistent sunshine, Grand Cayman for Stingray City, Nassau for Atlantis, Roatán for value snorkeling, Puerto Plata for waterfall adventures, and St. Maarten for dual-nation culture.",
  },
  {
    question: "How do I check cruise ship schedules for Caribbean ports?",
    answer:
      "Use our 2026 and 2027 ship schedule pages for major ports including St. Thomas, Cozumel, Aruba, Grand Cayman, Nassau, Roatán, Puerto Plata, and St. Maarten. Knowing which ships are in port helps you avoid crowds and sold-out excursions.",
  },
];
