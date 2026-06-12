import type { RegionPage } from "./types";

export const regions: RegionPage[] = [
  {
    slug: "eastern-caribbean-cruise-ports",
    title: "Eastern Caribbean Cruise Ports Guide",
    metaDescription:
      "Compare Eastern Caribbean cruise ports including St. Thomas, St. Maarten and Puerto Plata. Region guide with excursion recommendations and authority port links.",
    heroSubtitle:
      "Compare the Eastern Caribbean's top cruise ports, from U.S. Virgin Islands beaches to dual-nation St. Maarten and Dominican Republic adventures.",
    overview:
      "Eastern Caribbean itineraries typically sail from Florida or Puerto Rico through the Lesser Antilles, U.S. Virgin Islands, and increasingly the Dominican Republic's Amber Coast. This region excels at beach days, island-hopping, duty-free shopping, and catamaran snorkel sails. Ports are generally direct-dock with strong excursion infrastructure.",
    portComparison:
      "St. Thomas is the region's busiest port, best for beaches, shopping, and St. John day trips. St. Maarten offers dual Dutch-French culture and Maho Beach plane spotting. Puerto Plata brings waterfall adventures and cable car views at Amber Cove. Choose St. Thomas for classic Caribbean beaches, St. Maarten for unique experiences, and Puerto Plata for active adventure days.",
    recommendedExcursions: [
      "Magens Bay beach day and St. John ferry in St. Thomas",
      "Maho Beach plane spotting and Orient Bay in St. Maarten",
      "Teleférico cable car and 27 Charcos waterfalls in Puerto Plata",
      "Catamaran snorkel sails across the Eastern Caribbean",
      "Private island-hopping charters from St. Thomas",
    ],
    portSlugs: ["st-thomas", "st-maarten", "puerto-plata", "nassau"],
    excursionTypeSlugs: ["beaches", "snorkeling", "catamaran-cruises", "private-tours"],
    relatedRegionSlugs: ["western-caribbean-cruise-ports", "southern-caribbean-cruise-ports", "dominican-republic-cruise-ports"],
  },
  {
    slug: "western-caribbean-cruise-ports",
    title: "Western Caribbean Cruise Ports Guide",
    metaDescription:
      "Western Caribbean cruise port authority guide covering Cozumel, Roatán, Grand Cayman, Costa Maya and Ocho Rios with excursion comparisons and local specialist links.",
    heroSubtitle: "Reef snorkeling, Mayan ruins, Stingray City, and Jamaica rainforest adventures: plan Western Caribbean port days with authority comparisons.",
    overview:
      "Western Caribbean routes visit Mexico's Yucatán and Quintana Roo coasts, Honduras Bay Islands, the Cayman Islands, and Jamaica's north shore. This region is the top choice for reef snorkeling, Mayan culture, wildlife encounters, and adventure excursions at competitive prices.",
    portComparison:
      "Cozumel leads for reef quality and excursion variety. Roatán offers similar snorkeling with fewer crowds and better value. Grand Cayman is essential for Stingray City but requires tenders. Costa Maya provides quieter Mayan ruin access. Ocho Rios delivers Jamaica's iconic waterfall and rainforest adventures. Pair Cozumel with Roatán on Western itineraries for the best reef days.",
    recommendedExcursions: [
      "Palancar Reef snorkel and El Cielo sandbar in Cozumel",
      "West Bay Beach and reef snorkel in Roatán",
      "Stingray City sandbar in Grand Cayman",
      "Chacchoben ruins and Mahahual beach in Costa Maya",
      "Dunn's River Falls climb in Ocho Rios",
    ],
    portSlugs: ["cozumel", "roatan", "grand-cayman", "costa-maya", "ocho-rios"],
    excursionTypeSlugs: ["snorkeling", "adventure-tours", "beaches", "private-tours", "family-tours"],
    relatedRegionSlugs: ["eastern-caribbean-cruise-ports", "jamaica-cruise-ports", "southern-caribbean-cruise-ports"],
  },
  {
    slug: "southern-caribbean-cruise-ports",
    title: "Southern Caribbean Cruise Ports Guide",
    metaDescription:
      "Southern Caribbean cruise port guide featuring Aruba with ABC island comparisons, beach excursions, desert tours and authority planning links.",
    heroSubtitle:
      "Year-round sunshine, Eagle Beach, Arikok National Park, and Southern Caribbean route planning from Aruba.",
    overview:
      "Southern Caribbean itineraries sail deeper into the chain, Aruba, Curaçao, Bonaire, and occasionally Trinidad or Grenada. Aruba sits outside the hurricane belt with reliable weather, Dutch-Caribbean culture, and diverse landscapes from desert interior to world-class beaches.",
    portComparison:
      "Aruba is the dominant Southern Caribbean cruise port on mainstream itineraries, excellent beaches, snorkeling, and consistent sunshine. Compare with Curaçao for more cultural depth and Bonaire for diving focus. Aruba wins for first-time Southern Caribbean visitors seeking easy port logistics and beach quality.",
    recommendedExcursions: [
      "Eagle Beach day and Oranjestad stroll from the pier",
      "Arikok National Park 4x4 to Natural Pool",
      "De Palm Island all-inclusive snorkel and water park",
      "Catamaran snorkel sail along Aruba's west coast",
      "Private island highlights tour with California Lighthouse",
    ],
    portSlugs: ["aruba", "curacao"],
    excursionTypeSlugs: ["beaches", "snorkeling", "catamaran-cruises", "adventure-tours"],
    relatedRegionSlugs: ["eastern-caribbean-cruise-ports", "western-caribbean-cruise-ports"],
  },
  {
    slug: "dominican-republic-cruise-ports",
    title: "Dominican Republic Cruise Ports Guide",
    metaDescription:
      "Dominican Republic cruise port authority guide for Puerto Plata and Amber Cove, waterfalls, cable car views, beaches and puertoplatacruiseexcursion.com.",
    heroSubtitle:
      "Amber Cove, Puerto Plata, waterfall adventures, and Atlantic-coast cruise port planning for Dominican Republic itineraries.",
    overview:
      "The Dominican Republic's north coast has become a major Eastern Caribbean cruise stop through Amber Cove and Taíno Bay near Puerto Plata. Passengers come for Teleférico cable car views, 27 Charcos waterfall adventures, colonial heritage, and Atlantic beaches distinct from typical Caribbean ports.",
    portComparison:
      "Puerto Plata serves both Amber Cove (Carnival-built port) and Taíno Bay terminals. Amber Cove is self-contained with pools and transport hubs; Puerto Plata city offers colonial Fort San Felipe and authentic Dominican culture. Most excursions reach waterfalls, cable car summits, and Sosúa snorkel sites by coach from either terminal.",
    recommendedExcursions: [
      "Teleférico cable car to Mount Isabel de Torres summit",
      "27 Charcos of Damajagua waterfall adventure",
      "Colonial Puerto Plata walking tour and Fort San Felipe",
      "Sosúa Bay snorkel and beach club day",
      "Private Amber Coast coastal highlights tour",
    ],
    portSlugs: ["puerto-plata"],
    excursionTypeSlugs: ["adventure-tours", "snorkeling", "family-tours", "private-tours"],
    relatedRegionSlugs: ["eastern-caribbean-cruise-ports", "western-caribbean-cruise-ports"],
  },
  {
    slug: "jamaica-cruise-ports",
    title: "Jamaica Cruise Ports Guide",
    metaDescription:
      "Jamaica cruise port authority guide for Ocho Rios, Dunn's River Falls, river rafting, rainforest adventures and ochoriosshoreexcursions.com.",
    heroSubtitle:
      "Dunn's River Falls, Mystic Mountain, Martha Brae rafting, and Jamaica north-coast cruise excursion planning.",
    overview:
      "Jamaica's north coast is adventure-focused cruise territory. Ocho Rios is the primary port for Dunn's River Falls, Mystic Mountain bobsled, and Dolphin Cove. The island's lush rainforest, reggae culture, and iconic waterfall climbs make Jamaica a standout on Western Caribbean itineraries.",
    portComparison:
      "Ocho Rios concentrates the island's top attractions within short taxi rides of the cruise terminal. Ideal for waterfall climbs and zip-line adventures. Falmouth (on some itineraries) offers Martha Brae rafting access with fewer crowds. Ocho Rios wins for first-time Jamaica visitors wanting the signature Dunn's River experience.",
    recommendedExcursions: [
      "Dunn's River Falls guided climb",
      "Mystic Mountain rainforest bobsled and sky explorer",
      "Martha Brae bamboo river rafting",
      "Dolphin Cove lagoon encounter",
      "Private north-coast highlights tour",
    ],
    portSlugs: ["ocho-rios", "falmouth"],
    excursionTypeSlugs: ["adventure-tours", "family-tours", "private-tours"],
    relatedRegionSlugs: ["western-caribbean-cruise-ports"],
  },
];

export function getRegionBySlug(slug: string): RegionPage | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getAllRegionSlugs(): string[] {
  return regions.map((r) => r.slug);
}
