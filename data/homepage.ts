import type { FeaturedPortCard } from "./types";
import { getAllPortSlugs } from "./ports";
import { schedulePorts } from "./schedules";
import { getSchedulePortCount } from "./content-inventory";

export const FEATURED_PORT_SLUGS = getAllPortSlugs();

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
  {
    slug: "curacao",
    description:
      "UNESCO Willemstad waterfront, Tugboat Beach snorkel, and ABC island culture beyond the beach strip.",
    bestFor: "Culture & reef snorkeling",
  },
  {
    slug: "costa-maya",
    description:
      "Chacchoben Mayan ruins, Mahahual beach clubs, and quieter Mexican Caribbean port days near the reef.",
    bestFor: "Mayan ruins & quiet beaches",
  },
  {
    slug: "puerto-limon",
    description:
      "Sloth sanctuaries, Veragua Rainforest aerial tram, and Cahuita reef snorkel on Costa Rica's Caribbean coast.",
    bestFor: "Rainforest wildlife & Caribbean culture",
  },
  {
    slug: "ocho-rios",
    description:
      "Dunn's River Falls climbs, Mystic Mountain bobsled, and Jamaica rainforest adventure excursions.",
    bestFor: "Waterfalls & rainforest tours",
  },
  {
    slug: "falmouth",
    description:
      "Martha Brae bamboo rafting, colonial Falmouth heritage walks, and Jamaica north-coast highlights.",
    bestFor: "River rafting & heritage tours",
  },
  {
    slug: "bonaire",
    description:
      "Shore diving capital with marine park reefs, flamingo salt flats, and Washington Slagbaai wildlife safaris.",
    bestFor: "Shore diving & marine park",
  },
  {
    slug: "tortola",
    description:
      "BVI catamaran sailing, Virgin Gorda day trips, and Cane Garden Bay from Road Town tender landings.",
    bestFor: "Sailing & secluded coves",
  },
  {
    slug: "progreso",
    description:
      "Yucatán Gulf pier gateway to colonial Mérida, UNESCO Uxmal ruins, and Celestún flamingo reserves.",
    bestFor: "Mérida culture & Mayan ruins",
  },
  {
    slug: "samana",
    description:
      "Seasonal humpback whale watching, El Limón waterfall treks, and secluded Playa Rincón on the Dominican peninsula.",
    bestFor: "Whale watching & rainforest",
  },
  {
    slug: "la-romana",
    description:
      "Saona Island catamaran day trips, Altos de Chavón village, and Catalina Island reef snorkel from Casa de Campo.",
    bestFor: "Saona Island & catamaran sails",
  },
  {
    slug: "montego-bay",
    description:
      "Doctor's Cave Beach, Rose Hall Great House tours, and Hip Strip resort beach days on Jamaica's north coast.",
    bestFor: "Resort beaches & Rose Hall",
  },
];

export const HOMEPAGE_SCHEDULE_SLUGS = [
  "st-thomas",
  "cozumel",
  "aruba",
  "grand-cayman",
  "nassau",
  "roatan",
  "st-maarten",
  "puerto-plata",
  "costa-maya",
  "ocho-rios",
] as const;

export function getHomepageFaqs() {
  const schedulePortCount = getSchedulePortCount();
  const schedulePortNames = schedulePorts.map((port) => port.name).join(", ");

  return [
    {
      question: "What is the Caribbean Shore Excursion Planner?",
      answer:
        "The Caribbean Shore Excursion Planner is an independent authority hub for comparing Caribbean cruise ports, ship schedules, cruise lines, excursion types, and local specialist excursion websites. It helps cruise passengers plan better port days across the Caribbean.",
    },
    {
      question: "Which Caribbean ports are best for shore excursions?",
      answer:
        "Top ports include Cozumel for reef snorkeling, St. Thomas for beaches, Aruba and Curaçao for ABC island variety, Grand Cayman for Stingray City, Nassau for Atlantis, Roatán for value snorkeling, Puerto Plata for waterfall adventures, Costa Maya for Mayan ruins, and Ocho Rios or Falmouth for Jamaica adventures.",
    },
    {
      question: "How do I check cruise ship schedules for Caribbean ports?",
      answer: `Use our 2026 and 2027 ship schedule pages for all ${schedulePortCount} major ports including ${schedulePortNames}. Knowing which ships are in port helps you avoid crowds and sold-out excursions.`,
    },
  ];
}

/** @deprecated Use getHomepageFaqs() for current inventory counts. */
export const homepageFaqs = getHomepageFaqs();
