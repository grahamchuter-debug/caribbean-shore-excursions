import type { ItineraryPlannerPage } from "./types";

export const itineraryPlanners: ItineraryPlannerPage[] = [
  {
    slug: "eastern-caribbean-cruise-planner",
    title: "Eastern Caribbean Cruise Planner",
    metaDescription:
      "Plan your Eastern Caribbean cruise itinerary — top ports St. Thomas, St. Maarten, Puerto Plata, best excursions, ship schedules, and specialist local sites.",
    heroSubtitle:
      "Build the perfect Eastern Caribbean itinerary with ranked ports, excursion recommendations, and links to authority port guides.",
    overview:
      "Eastern Caribbean cruises typically sail 7-10 nights from Florida or San Juan through the U.S. Virgin Islands, St. Maarten, and increasingly the Dominican Republic's Amber Coast. This itinerary style emphasizes beaches, island-hopping, duty-free shopping, and catamaran snorkel sails. Most ports are direct-dock with strong excursion infrastructure.",
    itineraryHighlights: [
      "St. Thomas for Magens Bay and St. John ferry day trips",
      "St. Maarten for dual Dutch-French culture and Orient Bay",
      "Puerto Plata for waterfall adventures and cable car views",
      "Catamaran snorkel sails across multiple Eastern ports",
      "Check ship schedules — Eastern ports see heavy multi-ship days",
    ],
    topPortSlugs: ["st-thomas", "st-maarten", "puerto-plata"],
    recommendedExcursions: [
      "Magens Bay beach day and Charlotte Amalie shopping in St. Thomas",
      "St. John ferry to Trunk Bay snorkel from St. Thomas",
      "Maho Beach plane spotting and Orient Bay in St. Maarten",
      "Teleférico cable car and 27 Charcos waterfalls in Puerto Plata",
      "Private catamaran snorkel sail from St. Thomas or St. Maarten",
    ],
    regionPageSlug: "eastern-caribbean-cruise-ports",
    bestGuideSlugs: [
      "best-caribbean-beach-excursions",
      "best-caribbean-snorkeling-excursions",
      "best-caribbean-catamaran-cruises",
    ],
    faqs: [
      { question: "What ports are on an Eastern Caribbean cruise?", answer: "Common ports include St. Thomas, St. Maarten, Puerto Plata (Amber Cove), San Juan, Tortola, and occasionally St. Kitts or Antigua depending on the cruise line." },
      { question: "What is the best excursion on an Eastern Caribbean cruise?", answer: "Magens Bay in St. Thomas, St. John/Trunk Bay ferry trips, and Orient Bay in St. Maarten rank highest. Puerto Plata's 27 Charcos waterfalls suit active travelers." },
      { question: "Eastern vs Western Caribbean — which is better?", answer: "Eastern Caribbean excels at beaches, shopping, and sailing. Western Caribbean offers better reef snorkeling, Mayan culture, and adventure. Choose based on your excursion priorities." },
    ],
  },
  {
    slug: "western-caribbean-cruise-planner",
    title: "Western Caribbean Cruise Planner",
    metaDescription:
      "Plan your Western Caribbean cruise — Cozumel, Roatán, Grand Cayman, Costa Maya, Ocho Rios excursions, comparisons, ship schedules and specialist sites.",
    heroSubtitle:
      "Reef snorkeling, Mayan ruins, Stingray City, and Jamaica adventures — plan every Western Caribbean port day.",
    overview:
      "Western Caribbean itineraries visit Mexico's Yucatán coast, Honduras Bay Islands, the Cayman Islands, and Jamaica. This is the top region for reef snorkeling, wildlife encounters (Stingray City), Mayan culture, and active adventure excursions. Cozumel and Roatán share the Mesoamerican Barrier Reef; Grand Cayman requires tenders.",
    itineraryHighlights: [
      "Cozumel for Palancar Reef and El Cielo sandbar catamarans",
      "Roatán for value reef snorkeling at West Bay Beach",
      "Grand Cayman for Stingray City — book early, disembark promptly",
      "Costa Maya for Chacchoben ruins and Mahahual beach village",
      "Ocho Rios for Dunn's River Falls and Mystic Mountain",
    ],
    topPortSlugs: ["cozumel", "roatan", "grand-cayman", "costa-maya", "ocho-rios"],
    recommendedExcursions: [
      "Palancar Reef snorkel and El Cielo catamaran in Cozumel",
      "West Bay Beach and reef snorkel in Roatán",
      "Stingray City sandbar in Grand Cayman",
      "Chacchoben Mayan ruins in Costa Maya",
      "Dunn's River Falls climb in Ocho Rios",
    ],
    regionPageSlug: "western-caribbean-cruise-ports",
    bestGuideSlugs: [
      "best-caribbean-snorkeling-excursions",
      "best-caribbean-wildlife-excursions",
      "best-caribbean-shore-excursions",
    ],
    faqs: [
      { question: "What ports are on a Western Caribbean cruise?", answer: "Typical ports include Cozumel, Roatán, Grand Cayman, Costa Maya, Ocho Rios, Belize City, and occasionally Harvest Caye or Puerto Costa Rica on longer itineraries." },
      { question: "Cozumel or Roatán — which is better?", answer: "Cozumel offers more excursion variety and Tulum access. Roatán delivers comparable snorkeling with fewer crowds and better pricing. See our Roatán vs Cozumel comparison." },
      { question: "Does Grand Cayman require tenders?", answer: "Yes. Ships anchor and use tender boats. Weather can cancel port days — have a backup plan and book Stingray City early if confirmed in port." },
    ],
  },
  {
    slug: "southern-caribbean-cruise-planner",
    title: "Southern Caribbean Cruise Planner",
    metaDescription:
      "Plan your Southern Caribbean cruise — Aruba, ABC islands, Eagle Beach, Arikok tours, ship schedules, and arubashoreexcursion.com specialist guide.",
    heroSubtitle:
      "Year-round sunshine, Eagle Beach, desert landscapes, and Southern Caribbean route planning from Aruba.",
    overview:
      "Southern Caribbean cruises sail deeper into the chain — typically 8-12 nights visiting Aruba, Curaçao, Bonaire, and occasionally Grenada or Barbados. Aruba is the anchor port: outside the hurricane belt, with world-class beaches, Arikok National Park desert terrain, and reliable year-round cruise traffic.",
    itineraryHighlights: [
      "Aruba for Eagle Beach, catamaran sails, and Oranjestad shopping",
      "Arikok National Park 4x4 for Natural Pool and desert landscapes",
      "Compare Aruba vs Curaçao for beaches vs cultural depth",
      "De Palm Island for all-inclusive family beach days",
      "Extended evening port calls common — plan sunset activities",
    ],
    topPortSlugs: ["aruba"],
    recommendedExcursions: [
      "Eagle Beach day and downtown Oranjestad stroll",
      "Arikok National Park 4x4 to Natural Pool",
      "Catamaran snorkel sail along Aruba's west coast",
      "De Palm Island all-inclusive snorkel and water park",
      "Private island highlights tour with California Lighthouse",
    ],
    regionPageSlug: "southern-caribbean-cruise-ports",
    bestGuideSlugs: [
      "best-caribbean-beach-excursions",
      "best-caribbean-catamaran-cruises",
      "best-caribbean-couple-excursions",
    ],
    faqs: [
      { question: "What ports are on a Southern Caribbean cruise?", answer: "Aruba, Curaçao, and Bonaire form the ABC islands core. Longer itineraries may include Trinidad, Grenada, or Barbados." },
      { question: "Is Aruba affected by hurricanes?", answer: "Aruba sits south of the hurricane belt with very reliable weather — a key reason it is popular on Southern Caribbean routes." },
      { question: "Aruba or Curaçao for a cruise day?", answer: "Aruba wins for beaches and sailing. Curaçao wins for UNESCO heritage and diving. See our Aruba vs Curaçao comparison for details." },
    ],
  },
];

export function getItineraryPlannerBySlug(slug: string): ItineraryPlannerPage | undefined {
  return itineraryPlanners.find((p) => p.slug === slug);
}

export function getAllItineraryPlannerSlugs(): string[] {
  return itineraryPlanners.map((p) => p.slug);
}
