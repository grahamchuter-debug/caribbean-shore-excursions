import type { CruiseLine } from "./types";

export const cruiseLines: CruiseLine[] = [
  {
    slug: "royal-caribbean",
    name: "Royal Caribbean",
    tagline: "The world's largest cruise line with the biggest Caribbean presence",
    overview:
      "Royal Caribbean dominates Caribbean cruising with the world's largest ships and most extensive island itinerary network. From short Bahamas getaways to two-week Eastern and Southern Caribbean voyages, Royal Caribbean visits virtually every major port. Their shore excursion program is extensive, though independent booking often offers better value and flexibility.",
    caribbeanRoutes: [
      "3-4 night Bahamas from Florida ports",
      "7-night Eastern Caribbean (St. Thomas, St. Maarten, Puerto Rico)",
      "7-night Western Caribbean (Cozumel, Roatán, Grand Cayman)",
      "7-night Southern Caribbean (Aruba, Curaçao, Bonaire)",
      "12-14 night extended Caribbean and Panama Canal",
    ],
    popularPorts: [
      { slug: "cozumel", name: "Cozumel" },
      { slug: "st-thomas", name: "St. Thomas" },
      { slug: "nassau", name: "Nassau" },
      { slug: "roatan", name: "Roatán" },
      { slug: "aruba", name: "Aruba" },
    ],
    excursionTips: [
      "Book popular excursions like Stingray City and Dunn's River Falls at least 2 weeks ahead",
      "Royal Caribbean's 'Cruise Planner' offers pre-cruise excursion discounts",
      "Private tour operators often provide better value than ship excursions",
      "Check 'My Time Dining' schedule before booking evening excursions",
      "Oasis-class ships have their own terminal areas — factor in walk time to port exits",
    ],
    bookingTips: [
      "Book excursions 60-90 days before sailing for best availability",
      "Watch for 'Cruise Planner' sales offering 25-30% off excursions",
      "Consider booking only your must-do excursion through the ship for the return guarantee",
      "Use specialist port websites for independent excursion comparisons",
      "Cancel ship excursions up to 48 hours before port day for full refund",
    ],
    faqs: [
      { question: "Does Royal Caribbean go to all Caribbean ports?", answer: "Royal Caribbean visits most major Caribbean ports across Eastern, Western, and Southern routes. Specific ports vary by ship size, season, and itinerary length." },
      { question: "Are Royal Caribbean shore excursions worth it?", answer: "Ship excursions guarantee on-time return but cost 30-50% more than independent options. Book must-do experiences through the ship; use independent operators for flexible activities." },
      { question: "What is Royal Caribbean's best Caribbean itinerary?", answer: "The 7-night Eastern Caribbean visiting St. Thomas, St. Maarten, and San Juan is the classic choice. Southern Caribbean routes adding Aruba and Curaçao offer more variety." },
    ],
  },
  {
    slug: "carnival",
    name: "Carnival Cruise Line",
    tagline: "Fun-focused Caribbean cruising at accessible prices",
    overview:
      "Carnival Cruise Line offers the most Caribbean departures from US ports, with a focus on fun, casual cruising at competitive prices. Carnival invented the dedicated cruise port concept with Amber Cove in Puerto Plata and operates extensively across Bahamas, Eastern, and Western Caribbean routes. Their shore excursion program is large but independent options abound at every port.",
    caribbeanRoutes: [
      "2-5 night Bahamas and Caribbean from Florida and Gulf ports",
      "6-8 night Eastern Caribbean",
      "7-night Western Caribbean",
      "8-night Southern Caribbean",
      "14-day Carnival Journeys extended voyages",
    ],
    popularPorts: [
      { slug: "nassau", name: "Nassau" },
      { slug: "cozumel", name: "Cozumel" },
      { slug: "grand-cayman", name: "Grand Cayman" },
      { slug: "puerto-plata", name: "Puerto Plata" },
      { slug: "roatan", name: "Roatán" },
    ],
    excursionTips: [
      "Carnival's Amber Cove port in Puerto Plata has built-in amenities — explore beyond the port village",
      "Shorter Carnival itineraries mean less time per port — prioritize one great excursion",
      "Carnival excursions include a 'Sail & Return' guarantee",
      "Half Moon Cay (private island) days replace a port — plan accordingly",
      "Book Cozumel reef snorkeling early on 3-4 ship days in Cozumel",
    ],
    bookingTips: [
      "Early Saver fares don't include excursions — budget separately",
      "Carnival HUB app shows real-time excursion availability onboard",
      "Pre-book online for 10-15% savings over onboard prices",
      "CHEERS! drink package doesn't cover excursions — budget separately",
      "Group bookings of 8+ cabins may qualify for excursion discounts",
    ],
    faqs: [
      { question: "What ports does Carnival visit most in the Caribbean?", answer: "Cozumel, Nassau, Grand Cayman, and Roatán appear on the majority of Carnival Caribbean itineraries. Puerto Plata (Amber Cove) is a Carnival signature port." },
      { question: "Is Carnival good for first-time Caribbean cruisers?", answer: "Yes. Carnival's shorter, affordable itineraries from US ports make them ideal for first-time Caribbean cruisers testing the experience." },
      { question: "What is Half Moon Cay?", answer: "Carnival's private island in the Bahamas, featured on many itineraries as a beach day replacing a traditional port stop." },
    ],
  },
  {
    slug: "norwegian",
    name: "Norwegian Cruise Line",
    tagline: "Freestyle cruising across the Caribbean",
    overview:
      "Norwegian Cruise Line pioneered 'freestyle cruising' with flexible dining and no fixed schedules — appealing to independent-minded travelers who want to explore Caribbean ports on their own terms. NCL's Caribbean portfolio spans Bahamas short cruises to 14-night Southern Caribbean voyages, with a strong presence at Eastern Caribbean ports.",
    caribbeanRoutes: [
      "3-4 night Bahamas from Miami and Orlando",
      "7-night Eastern Caribbean",
      "7-night Western Caribbean",
      "10-11 night Southern Caribbean",
      "14-night Caribbean roundtrips from New York",
    ],
    popularPorts: [
      { slug: "st-thomas", name: "St. Thomas" },
      { slug: "st-maarten", name: "St. Maarten" },
      { slug: "cozumel", name: "Cozumel" },
      { slug: "ocho-rios", name: "Ocho Rios" },
      { slug: "nassau", name: "Nassau" },
    ],
    excursionTips: [
      "NCL's freestyle model encourages independent exploration — taxis and local operators are well-established at NCL ports",
      "Great Stirrup Cay (private island) replaces a port on many itineraries",
      "Book NCL excursions through 'My NCL' for pre-cruise pricing",
      "NCL's 'Late Riser' shore excursions accommodate their flexible schedule",
      "Eastern Caribbean itineraries on NCL often include both St. Thomas and St. Maarten",
    ],
    bookingTips: [
      "Free at Sea promotions sometimes include excursion credits",
      "Book through My NCL portal 90+ days ahead for availability",
      "NCL's 'Meet the Team' shore excursion staff can help onboard",
      "Independent excursions work well with NCL's flexible return times",
      "Latitudes loyalty members earn points on excursion purchases",
    ],
    faqs: [
      { question: "Does Norwegian Cruise Line include shore excursions?", answer: "Excursions are not included in the cruise fare. NCL sells excursions separately, and Free at Sea promotions occasionally include excursion credits." },
      { question: "What is Great Stirrup Cay?", answer: "NCL's private Bahamian island used as a beach day on many Caribbean itineraries, similar to other cruise line private islands." },
      { question: "Is NCL good for independent port exploration?", answer: "Yes. NCL's freestyle philosophy and flexible schedules make it popular with passengers who prefer booking independent excursions and exploring on their own." },
    ],
  },
  {
    slug: "msc",
    name: "MSC Cruises",
    tagline: "European-style cruising in the Caribbean",
    overview:
      "MSC Cruises brings a European flair to Caribbean cruising, with stylish ships and a growing US presence from Miami and Orlando. MSC's Caribbean itineraries cover Bahamas, Eastern, and Western routes, often at competitive prices. Shore excursions follow a European model with multilingual guides and a mix of organized tours and free time.",
    caribbeanRoutes: [
      "3-4 night Bahamas cruises",
      "7-night Caribbean (Eastern and Western rotation)",
      "10-night Southern Caribbean",
      "14-night Caribbean and Antilles",
      "MSC private island: Ocean Cay MSC Marine Reserve",
    ],
    popularPorts: [
      { slug: "nassau", name: "Nassau" },
      { slug: "cozumel", name: "Cozumel" },
      { slug: "st-maarten", name: "St. Maarten" },
      { slug: "puerto-plata", name: "Puerto Plata" },
      { slug: "roatan", name: "Roatán" },
    ],
    excursionTips: [
      "MSC excursions often include multilingual guides (English, Spanish, Italian, French)",
      "Ocean Cay MSC Marine Reserve is a highlight — a full day at their private Bahamian island",
      "MSC's 'Best Price Guarantee' on excursions booked pre-cruise",
      "European passengers may book popular excursions early — reserve ahead",
      "MSC ships are large — allow extra time to disembark on port days",
    ],
    bookingTips: [
      "Book excursions through MSC's online cruise planner before sailing",
      "MSC offers bundle discounts when booking multiple excursions",
      "Check if your fare includes an excursion credit or drink package",
      "Onboard excursion desk often has last-minute availability at reduced prices",
      "MSC's Yacht Club passengers receive priority excursion booking",
    ],
    faqs: [
      { question: "What is Ocean Cay MSC Marine Reserve?", answer: "MSC's private island in the Bahamas, restored as a marine reserve with beaches, lagoons, and lighthouse. Featured on most MSC Caribbean itineraries." },
      { question: "Is MSC Cruises good for Caribbean cruising?", answer: "MSC offers competitive Caribbean itineraries at attractive prices with a European onboard experience. Growing US market presence from Miami." },
      { question: "Are MSC shore excursions in English?", answer: "Yes. While guides are often multilingual, all excursions include English narration. Group sizes may include international passengers." },
    ],
  },
  {
    slug: "princess",
    name: "Princess Cruises",
    tagline: "Premium Caribbean cruising with destination focus",
    overview:
      "Princess Cruises emphasizes destination-rich Caribbean itineraries with longer port stays and enrichment programming. Known for a more refined, adult-oriented experience, Princess visits both mainstream and off-the-beaten-path Caribbean ports. Their shore excursion program is curated for quality, with 'More Ashore' late-departure options at select ports.",
    caribbeanRoutes: [
      "7-night Eastern Caribbean",
      "7-night Western Caribbean",
      "10-night Southern Caribbean",
      "14-night Caribbean Explorer",
      "Panama Canal partial transits with Caribbean ports",
    ],
    popularPorts: [
      { slug: "st-thomas", name: "St. Thomas" },
      { slug: "aruba", name: "Aruba" },
      { slug: "cozumel", name: "Cozumel" },
      { slug: "grand-cayman", name: "Grand Cayman" },
      { slug: "costa-maya", name: "Costa Maya" },
    ],
    excursionTips: [
      "Princess 'More Ashore' program offers later departures at select ports — check your itinerary",
      "Princess Private Collection offers exclusive small-group excursions",
      "Destination-themed onboard lectures help you plan port days",
      "Princess Cays (private island) is featured on many Eastern Caribbean sailings",
      "Princess tends to visit less-crowded ports like Costa Maya and Falmouth",
    ],
    bookingTips: [
      "Book Princess shore excursions through the Cruise Personalizer portal",
      "Platinum and Elite Captain's Circle members receive excursion discounts",
      "Private Collection excursions cost more but offer smaller groups",
      "Princess offers 'Best Price Guarantee' on pre-cruise excursion bookings",
      "Check for 'Discovery' themed excursions with enhanced cultural content",
    ],
    faqs: [
      { question: "What is Princess Cruises' More Ashore program?", answer: "Select Princess itineraries feature later departure times (8-11 PM) at certain ports, giving passengers more time for evening excursions and dining." },
      { question: "Is Princess good for Caribbean port exploration?", answer: "Yes. Princess emphasizes destination immersion with longer port stays, enrichment lectures, and curated excursions at both popular and emerging ports." },
      { question: "What is Princess Cays?", answer: "Princess's private island in the Bahamas, offering a beach day with water sports, dining, and relaxation on many Eastern Caribbean itineraries." },
    ],
  },
  {
    slug: "celebrity",
    name: "Celebrity Cruises",
    tagline: "Premium Caribbean experiences with modern luxury",
    overview:
      "Celebrity Cruises positions itself as modern luxury in the Caribbean, with upscale ships, gourmet dining, and thoughtfully curated shore excursions. Part of the Royal Caribbean Group, Celebrity visits premium Caribbean ports with an emphasis on cultural immersion and unique experiences. Their 'Shore Excursions' program includes small-group options and culinary-focused tours.",
    caribbeanRoutes: [
      "4-5 night Bahamas getaways",
      "7-night Eastern Caribbean",
      "7-night Southern Caribbean",
      "10-11 night deep Caribbean",
      "14-night Caribbean and Bermuda",
    ],
    popularPorts: [
      { slug: "st-thomas", name: "St. Thomas" },
      { slug: "st-maarten", name: "St. Maarten" },
      { slug: "cozumel", name: "Cozumel" },
      { slug: "aruba", name: "Aruba" },
      { slug: "ocho-rios", name: "Ocho Rios" },
    ],
    excursionTips: [
      "Celebrity's 'Shore Excursions' include GoBe small-group cultural tours",
      "Culinary excursions featuring local Caribbean cuisine are a Celebrity specialty",
      "Celebrity tends to have longer port stays than mass-market lines",
      "Within Celebrity's Royal Caribbean Group — some ports overlap with Royal Caribbean",
      "Book spa treatments on sea days, not port days — you'll want the full day ashore",
    ],
    bookingTips: [
      "Book excursions through Celebrity's Cruise Planner for pre-cruise pricing",
      "Captain's Club loyalty members receive excursion discounts",
      "Celebrity's 'Always Included' fares may bundle some perks — check your fare class",
      "GoBe partnership offers unique small-group cultural experiences",
      "Cancel excursions 48 hours before port day for full refund",
    ],
    faqs: [
      { question: "How is Celebrity different from Royal Caribbean in the Caribbean?", answer: "Celebrity offers a more upscale, adult-oriented experience with premium dining and curated excursions. Royal Caribbean focuses on larger ships and entertainment. Both visit similar Caribbean ports." },
      { question: "Does Celebrity offer good shore excursions?", answer: "Yes. Celebrity curates quality excursions with small-group options through GoBe partnerships and culinary-focused tours emphasizing local culture." },
      { question: "What Caribbean ports does Celebrity visit?", answer: "Celebrity visits major Eastern, Western, and Southern Caribbean ports including St. Thomas, St. Maarten, Cozumel, Aruba, and Ocho Rios." },
    ],
  },
];

export function getCruiseLineBySlug(slug: string): CruiseLine | undefined {
  return cruiseLines.find((c) => c.slug === slug);
}

export function getAllCruiseLineSlugs(): string[] {
  return cruiseLines.map((c) => c.slug);
}
