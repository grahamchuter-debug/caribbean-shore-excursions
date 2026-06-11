import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "aruba-vs-curacao",
    title: "Aruba vs Curaçao: Which Caribbean Port Is Better?",
    metaDescription:
      "Aruba vs Curaçao cruise port comparison — beaches, snorkeling, excursions, families, couples, food, port ease, and best overall verdict for Southern Caribbean cruises.",
    portA: "Aruba",
    portB: "Curaçao",
    portASlug: "aruba",
    portBSlug: "aruba",
    summary:
      "Both Southern Caribbean islands offer Dutch-Caribbean culture and reliable weather outside the hurricane belt, but they deliver distinctly different cruise day experiences. Aruba excels in beaches and resort-style relaxation, while Curaçao offers richer cultural depth and world-class diving.",
    overview: {
      portA: "Aruba is a beach-first Southern Caribbean port with year-round sunshine, Eagle Beach, and polished excursion infrastructure at Oranjestad.",
      portB: "Curaçao is a cultural and diving destination with UNESCO-listed Willemstad, secluded reef sites, and a more authentic Dutch-Caribbean atmosphere.",
    },
    beaches: {
      portA: "Eagle Beach and Palm Beach rank among the Caribbean's finest — wide white sand, calm water, and excellent swimming.",
      portB: "Smaller, more secluded beaches. Playa Porto Mari and Grote Knip offer good shore access but less impressive than Aruba's main beaches.",
    },
    excursions: {
      portA: "Catamaran sails, De Palm Island, Arikok 4x4 desert tours, horseback riding, and Eagle Beach breaks dominate.",
      portB: "Diving, Hato Caves, Christoffelberg hiking, Willemstad walking tours, and Blue Curaçao distillery visits.",
    },
    families: {
      portA: "De Palm Island water park, Baby Beach shallow lagoon, and Butterfly Farm suit all ages.",
      portB: "Curaçao Sea Aquarium and calm bay snorkels work for families but fewer dedicated kid-focused attractions.",
    },
    couples: {
      portA: "Sunset catamarans, Eagle Beach cabanas, and private Arikok 4x4 adventures.",
      portB: "Willemstad waterfront dining, secluded beach clubs, and intimate diving excursions.",
    },
    snorkeling: {
      portA: "Antilla wreck, Boca Catalina, and Mangel Halto — good sites accessed by boat.",
      portB: "Superior diving and snorkeling at Tugboat Beach, Director's Bay, and Playa Kalki.",
    },
    foodAndDrink: {
      portA: "Oranjestad waterfront restaurants, fresh seafood, and casual beach bar dining.",
      portB: "Willemstad's diverse dining scene — Dutch, Caribbean, and international cuisine. Famous Blue Curaçao liqueur tastings.",
    },
    easeFromPort: {
      portA: "Two cruise terminals in Oranjestad. Downtown walkable in minutes. No tender required.",
      portB: "Mathey Wharf docking in Willemstad. Historic waterfront immediately accessible. No tender required.",
    },
    bestOverall: "Aruba for beaches, sailing, and relaxed resort-style days. Curaçao for culture, diving, and travelers seeking depth over lounging.",
    comparisonTable: [
      { category: "Beaches", portA: "World-class (Eagle Beach)", portB: "Good but smaller" },
      { category: "Snorkeling", portA: "Very good", portB: "Excellent" },
      { category: "Culture", portA: "Good", portB: "Outstanding (UNESCO)" },
      { category: "Families", portA: "Excellent", portB: "Good" },
      { category: "Port ease", portA: "Direct dock, walkable", portB: "Direct dock, walkable" },
      { category: "Value", portA: "Mid-range", portB: "Mid-range" },
    ],
    verdict:
      "Choose Aruba if you want the best beaches, sailing, and a relaxed resort-style day. Choose Curaçao if you prefer cultural exploration, diving, and a more authentic Dutch-Caribbean experience. Both are excellent Southern Caribbean ports.",
    faqs: [
      { question: "Is Aruba or Curaçao better for beaches?", answer: "Aruba has superior beaches for swimming and lounging. Eagle Beach and Palm Beach are wider and more developed than most Curaçao beaches." },
      { question: "Which island is better for snorkeling?", answer: "Curaçao generally offers better snorkeling and diving with more diverse reef sites. Aruba's snorkeling is good but secondary to its beach experience." },
      { question: "Can I visit both Aruba and Curaçao on one cruise?", answer: "Many Southern Caribbean itineraries include both islands on separate days. They are close enough that some cruises visit both in one week." },
    ],
  },
  {
    slug: "st-thomas-vs-st-maarten",
    title: "St. Thomas vs St. Maarten: Eastern Caribbean Port Comparison",
    metaDescription:
      "St. Thomas vs St. Maarten comparison — beaches, excursions, families, couples, snorkeling, food, port ease, and which Eastern Caribbean port wins.",
    portA: "St. Thomas",
    portB: "St. Maarten",
    portASlug: "st-thomas",
    portBSlug: "st-maarten",
    summary:
      "Two of the Eastern Caribbean's busiest ports, St. Thomas and St. Maarten both offer excellent beaches and shopping but differ in character. St. Thomas is the shopping and beach champion with easy St. John access, while St. Maarten delivers dual-nation culture and unique plane-spotting thrills.",
    overview: {
      portA: "St. Thomas is the Eastern Caribbean's beach and shopping capital with Magens Bay, duty-free Charlotte Amalie, and easy St. John ferry access.",
      portB: "St. Maarten is a dual Dutch-French nation port famous for Maho Beach plane spotting, Orient Bay, and two cultures in one compact island.",
    },
    beaches: {
      portA: "Magens Bay is an Eastern Caribbean icon. Sapphire Beach and Coki Beach add excellent snorkel-beach combos.",
      portB: "Orient Bay on the French side is lively with beach clubs. Maho Beach is for plane spotting, not swimming. Great Bay is convenient but less impressive.",
    },
    excursions: {
      portA: "Magens Bay beach days, St. John/Trunk Bay ferry trips, catamaran sails, Mountain Top Skyride.",
      portB: "Maho plane spotting, Orient Bay clubs, dual-nation island tours, Tintamarre catamaran snorkel sails.",
    },
    families: {
      portA: "Magens Bay calm water, Coral World marine park, and St. John day trips for older children.",
      portB: "Great Bay convenience, Maho plane spotting thrills teens, catamaran sails suit mixed-age groups.",
    },
    couples: {
      portA: "Private catamaran sails to outer cays, St. John secluded beaches, waterfront Charlotte Amalie dining.",
      portB: "Orient Bay cabanas, Tintamarre private-feel catamarans, Grand Case French dining.",
    },
    snorkeling: {
      portA: "Sapphire Beach reef, Trunk Bay underwater trail (via St. John ferry), Buck Island boat tours.",
      portB: "Tintamarre Cay and Creole Rock on catamaran excursions. Mullet Bay for calm beginner snorkel.",
    },
    foodAndDrink: {
      portA: "Charlotte Amalie restaurants, Red Hook dining near ferry terminal, casual beach bar food at Magens Bay.",
      portB: "Grand Case gastronomic capital on French side, Philipsburg waterfront cafes, Orient Bay beach club lunches.",
    },
    easeFromPort: {
      portA: "Two terminals (Havensight, Crown Bay). Taxis plentiful. St. John requires ferry — allow extra time.",
      portB: "Single main terminal. Water taxi to Philipsburg. Taxis needed for French side and Maho. Compact island — both nations in one day.",
    },
    bestOverall: "St. Thomas for beaches, shopping, and St. John access. St. Maarten for unique experiences and dual-culture exploration.",
    comparisonTable: [
      { category: "Beaches", portA: "Outstanding (Magens Bay)", portB: "Good (Orient Bay)" },
      { category: "Shopping", portA: "Best in Caribbean", portB: "Excellent (two nations)" },
      { category: "Unique factor", portA: "St. John access", portB: "Maho plane spotting" },
      { category: "Families", portA: "Excellent", portB: "Very good" },
      { category: "Port ease", portA: "Direct dock", portB: "Direct dock" },
      { category: "Snorkeling", portA: "Very good", portB: "Good" },
    ],
    verdict:
      "St. Thomas wins for beaches, shopping, and St. John access. St. Maarten wins for unique experiences, dual-culture exploration, and lively atmosphere. Both are top-tier Eastern Caribbean ports.",
    faqs: [
      { question: "Which port has better beaches?", answer: "St. Thomas has more consistently excellent beaches, led by Magens Bay. St. Maarten's Orient Bay is great but the overall beach selection favors St. Thomas." },
      { question: "Which is better for families?", answer: "Both work well for families. St. Thomas offers calmer beaches like Magens Bay. St. Maarten's plane spotting thrills older kids and teens." },
      { question: "Do both ports require tenders?", answer: "No. Both St. Thomas and St. Maarten have dedicated cruise terminals where ships dock directly." },
    ],
  },
  {
    slug: "roatan-vs-cozumel",
    title: "Roatán vs Cozumel: Western Caribbean Snorkeling Comparison",
    metaDescription:
      "Roatán vs Cozumel cruise port comparison for snorkeling, beaches, families, excursions, value, and which Western Caribbean reef port is best.",
    portA: "Roatán",
    portB: "Cozumel",
    portASlug: "roatan",
    portBSlug: "cozumel",
    summary:
      "Both islands sit on the Mesoamerican Barrier Reef and rank among the Caribbean's best snorkeling destinations. Cozumel offers more excursion variety and infrastructure, while Roatán delivers comparable reef quality with fewer crowds and better value.",
    overview: {
      portA: "Roatán is a laid-back Bay Island with pristine reef snorkeling, West Bay Beach, and eco-adventures at exceptional value.",
      portB: "Cozumel is Mexico's busiest cruise port with world-famous Palancar Reef, Mayan culture access, and the widest excursion selection in the Western Caribbean.",
    },
    beaches: {
      portA: "West Bay Beach is stunning white sand with calm clear water — among the Caribbean's best-value beaches.",
      portB: "Playa Palancar and beach clubs are good but Cozumel is primarily a reef destination over a beach lounging port.",
    },
    excursions: {
      portA: "Reef snorkeling, Gumbalimba eco-park, West Bay beach, zip-lines, and island highlights tours.",
      portB: "Palancar snorkel, El Cielo sandbar, Tulum ruins, Chankanaab Park, and vibrant San Miguel dining.",
    },
    families: {
      portA: "Gumbalimba monkeys and iguanas, West Bay calm beach, Mahogany Bay on-site amenities.",
      portB: "Chankanaab lagoon snorkel, dolphin programs, glass-bottom boats, downtown San Miguel walks.",
    },
    couples: {
      portA: "Private West Bay cabanas, couples catamaran sails, secluded reef snorkel boats at lower prices.",
      portB: "Private El Cielo catamarans, couples beach massage, sunset sails from San Miguel.",
    },
    snorkeling: {
      portA: "West Bay Reef, Blue Channel, and Starfish Alley — fewer boats, excellent visibility, great value.",
      portB: "Palancar and Columbia reefs are world-renowned with exceptional visibility and marine diversity.",
    },
    foodAndDrink: {
      portA: "West End village seafood, beach club dining, casual Mahogany Bay restaurants.",
      portB: "San Miguel de Cozumel plazas, beach club lunches, authentic Mexican seafood and tacos.",
    },
    easeFromPort: {
      portA: "Mahogany Bay cruise center with on-site beach, or Port of Roatán closer to West Bay. No tender.",
      portB: "Three established piers. Punta Langosta offers downtown walkability. Mature infrastructure.",
    },
    bestOverall: "Cozumel for excursion variety and famous reef sites. Roatán for comparable snorkeling with fewer crowds and better value.",
    comparisonTable: [
      { category: "Snorkeling", portA: "Excellent", portB: "World-class" },
      { category: "Beaches", portA: "Outstanding (West Bay)", portB: "Good" },
      { category: "Excursion variety", portA: "Good", portB: "Outstanding" },
      { category: "Value", portA: "Excellent", portB: "Mid-range" },
      { category: "Crowds", portA: "Fewer", portB: "More" },
      { category: "Port ease", portA: "Direct dock", portB: "Direct dock" },
    ],
    verdict:
      "Choose Cozumel for the widest excursion variety, Tulum access, and world-famous reef sites. Choose Roatán for comparable snorkeling with fewer crowds, better value, and a more laid-back island atmosphere.",
    faqs: [
      { question: "Which is better for snorkeling beginners?", answer: "Both are excellent for beginners. Cozumel has more guided options and established sites. Roatán offers calmer, less crowded reef experiences." },
      { question: "Is Roatán cheaper than Cozumel?", answer: "Generally yes. Snorkeling tours, taxis, and beach clubs tend to be more affordable in Roatán." },
      { question: "Which island has better beaches?", answer: "Roatán's West Bay Beach is exceptional. Cozumel's beaches are good but the island is primarily known for reef activities over beach lounging." },
    ],
  },
  {
    slug: "amber-cove-vs-puerto-plata",
    title: "Amber Cove vs Puerto Plata: Dominican Republic Cruise Port Comparison",
    metaDescription:
      "Amber Cove vs Puerto Plata comparison for Dominican Republic cruise passengers — port village vs city excursions, waterfalls, beaches, and shore excursion planning.",
    portA: "Amber Cove",
    portB: "Puerto Plata",
    portASlug: "puerto-plata",
    portBSlug: "puerto-plata",
    summary:
      "Amber Cove and Puerto Plata city serve the same Dominican Republic cruise market from different starting points. Amber Cove is a self-contained port village ideal for relaxed days; Puerto Plata city and surrounding attractions deliver waterfall adventures, cable car views, and colonial culture.",
    overview: {
      portA: "Amber Cove is Carnival Corporation's modern cruise port with pools, shops, waterfront, and excursion transport hubs — secure and self-contained.",
      portB: "Puerto Plata city offers colonial Fort San Felipe, Victorian architecture, Teleférico cable car, and authentic Dominican culture beyond the port gates.",
    },
    beaches: {
      portA: "On-port waterfront and pool areas. Organized excursions reach Playa Dorada and Cofresí Beach.",
      portB: "Playa Dorada resort strip, Cofresí Beach, and Sosúa Bay reached by coach or taxi from either terminal.",
    },
    excursions: {
      portA: "Port pool day, organized coach departures to waterfalls and cable car — convenient hub model.",
      portB: "27 Charcos waterfalls, Teleférico summit, Fort San Felipe, Ocean World, and Sosúa snorkel trips.",
    },
    families: {
      portA: "Port pool and village suit younger children. Easy logistics without leaving the secure area.",
      portB: "Cable car, Ocean World marine park, and colonial walking tours work for mixed-age families.",
    },
    couples: {
      portA: "Relaxed port village day with pool and waterfront — low-stress for shorter port calls.",
      portB: "27 Charcos adventure, couples cable car summit views, Sosúa beach club and snorkel combos.",
    },
    snorkeling: {
      portA: "Snorkel excursions depart from Amber Cove coaches to Sosúa Bay and Cayo Arena boat tours.",
      portB: "Same snorkel sites accessible — Sosúa Bay is the primary reef area north of Puerto Plata city.",
    },
    foodAndDrink: {
      portA: "Port village restaurants and bars — convenient but tourist-oriented.",
      portB: "Authentic Dominican dining in Puerto Plata city, beach restaurants at Playa Dorada and Sosúa.",
    },
    easeFromPort: {
      portA: "Purpose-built terminal with immediate amenities. Excursion coaches depart on schedule from the port.",
      portB: "Taíno Bay terminal is closer to city; Amber Cove is 20 minutes from downtown. Taxi or organized tour recommended.",
    },
    bestOverall: "Amber Cove for convenience and pool days. Puerto Plata city and regional excursions for waterfall adventures, culture, and active port days.",
    comparisonTable: [
      { category: "Convenience", portA: "Excellent (on-port)", portB: "Good (requires transport)" },
      { category: "Adventure", portA: "Via excursions", portB: "Outstanding (waterfalls)" },
      { category: "Culture", portA: "Limited on-port", portB: "Colonial city & fort" },
      { category: "Families", portA: "Excellent (pool)", portB: "Very good" },
      { category: "Snorkeling", portA: "Good (via tour)", portB: "Good (Sosúa Bay)" },
      { category: "Best for", portA: "Easy port days", portB: "Active excursions" },
    ],
    verdict:
      "Stay at Amber Cove for a relaxed pool-and-port-village day with minimal logistics. Venture to Puerto Plata and the Amber Coast for 27 Charcos waterfalls, Teleférico cable car, and colonial heritage — the experiences that make this port worth visiting.",
    faqs: [
      { question: "Is Amber Cove the same as Puerto Plata?", answer: "Amber Cove is a cruise port facility near Puerto Plata city. Excursions reach Puerto Plata attractions, waterfalls, and beaches throughout the Amber Coast region." },
      { question: "Can I walk to Puerto Plata city from Amber Cove?", answer: "No. Amber Cove is about 20 minutes by coach or taxi from Puerto Plata city. Book organized excursions or arrange licensed transport." },
      { question: "Which terminal is better — Amber Cove or Taíno Bay?", answer: "Both work well. Amber Cove has more on-port amenities. Taíno Bay is closer to Puerto Plata city for culture-focused days." },
    ],
  },
  {
    slug: "ocho-rios-vs-falmouth",
    title: "Ocho Rios vs Falmouth: Jamaica Cruise Port Guide",
    metaDescription:
      "Ocho Rios vs Falmouth Jamaica cruise port comparison — Dunn's River Falls access, excursions, families, rafting, food, and which port suits your cruise day.",
    portA: "Ocho Rios",
    portB: "Falmouth",
    portASlug: "ocho-rios",
    portBSlug: "ocho-rios",
    summary:
      "Jamaica's two main cruise ports serve different traveler priorities. Ocho Rios puts you closest to Dunn's River Falls and Mystic Mountain adventures, while Falmouth offers a historic Georgian town and better access to Martha Brae river rafting with fewer crowds.",
    overview: {
      portA: "Ocho Rios is Jamaica's adventure capital — Dunn's River Falls, Mystic Mountain, and Dolphin Cove minutes from the terminal.",
      portB: "Falmouth is a historic Georgian port town with better Martha Brae rafting access and a more authentic, less commercial atmosphere.",
    },
    beaches: {
      portA: "Dunn's River Falls beach at the base of the falls. Mahogany Beach near port. James Bond Beach on island tours.",
      portB: "Limited beach focus. Excursions prioritize river rafting and historic town exploration over beach days.",
    },
    excursions: {
      portA: "Dunn's River Falls climb, Mystic Mountain bobsled, Dolphin Cove, zip-lines, and river tubing.",
      portB: "Martha Brae bamboo rafting, Good Hope Estate, Luminous Lagoon evening tours, historic Falmouth walking tours.",
    },
    families: {
      portA: "Dunn's River Falls guided climb, Mystic Mountain, Dolphin Cove — high-energy family adventures.",
      portB: "Peaceful Martha Brae rafting suits mixed-age families. Less aggressive vendor environment.",
    },
    couples: {
      portA: "Private Dunn's River timing, couples bamboo rafting extensions, Blue Hole hidden waterfall swims.",
      portB: "Romantic Martha Brae raft ride with rum punch, historic town stroll, Luminous Lagoon evening kayak.",
    },
    snorkeling: {
      portA: "Runaway Bay reef sections on combination tours. Secondary to waterfall and adventure focus.",
      portB: "Limited snorkel focus. Luminous Lagoon is the unique evening water experience.",
    },
    foodAndDrink: {
      portA: "Jerk chicken vendors, Margaritaville, local craft markets, and beach bar dining.",
      portB: "Historic Falmouth eateries, countryside lunch on rafting tours, less tourist-trap dining pressure.",
    },
    easeFromPort: {
      portA: "Dunn's River Falls 10 minutes by taxi. Mystic Mountain 5 minutes. Dense excursion operator network.",
      portB: "Martha Brae 30 minutes. Dunn's River Falls 45-60 minutes. Historic town walkable from pier.",
    },
    bestOverall: "Ocho Rios for Dunn's River Falls and adventure with minimal travel. Falmouth for river rafting, historic charm, and fewer crowds.",
    comparisonTable: [
      { category: "Dunn's River Falls", portA: "10 min away", portB: "45-60 min away" },
      { category: "River rafting", portA: "Available", portB: "Best access" },
      { category: "Crowds", portA: "Busier", portB: "Quieter" },
      { category: "Adventure", portA: "Outstanding", portB: "Good" },
      { category: "Culture", portA: "Moderate", portB: "Historic town" },
      { category: "Families", portA: "Excellent", portB: "Very good" },
    ],
    verdict:
      "Choose Ocho Rios for Dunn's River Falls and adventure activities with minimal travel time. Choose Falmouth for river rafting, historic town exploration, and a less crowded Jamaica experience. Dunn's River Falls is worth the extra drive from Falmouth if it is your priority.",
    faqs: [
      { question: "Can I do Dunn's River Falls from Falmouth?", answer: "Yes, but it requires 45-60 minutes of driving each way. Most passengers at Falmouth choose Martha Brae rafting instead." },
      { question: "Which Jamaica port is less crowded?", answer: "Falmouth is generally less crowded and commercial than Ocho Rios, especially for the town experience itself." },
      { question: "Is Falmouth safe for cruise passengers?", answer: "The cruise port area and organized excursion routes are safe. Explore the historic town during daylight with a guide or organized tour." },
    ],
  },
  {
    slug: "grand-cayman-vs-nassau",
    title: "Grand Cayman vs Nassau: Cruise Port Comparison",
    metaDescription:
      "Grand Cayman vs Nassau cruise port comparison — Stingray City vs Atlantis, beaches, families, snorkeling, tender logistics, and best overall port day.",
    portA: "Grand Cayman",
    portB: "Nassau",
    portASlug: "grand-cayman",
    portBSlug: "nassau",
    summary:
      "Two Western Caribbean staples with very different personalities. Grand Cayman is refined and nature-focused with Stingray City and Seven Mile Beach, while Nassau is vibrant and resort-driven with Atlantis, Bahamian culture, and the famous swimming pigs.",
    overview: {
      portA: "Grand Cayman is a tender port famous for Stingray City wildlife encounters and Seven Mile Beach's pristine sand.",
      portB: "Nassau is a direct-dock Bahamas capital with Atlantis, downtown culture, and walkable Prince George Wharf access.",
    },
    beaches: {
      portA: "Seven Mile Beach is one of the Caribbean's finest stretches. Starfish Point and Rum Point add variety.",
      portB: "Cable Beach and Paradise Island beaches are good. Cabbage Beach at Atlantis excellent with day pass.",
    },
    excursions: {
      portA: "Stingray City, Seven Mile Beach, bioluminescent kayak, Cayman Turtle Centre, reef snorkel boats.",
      portB: "Atlantis Aquaventure, Exuma swimming pigs, Blue Lagoon dolphins, Rose Island catamaran snorkel.",
    },
    families: {
      portA: "Stingray City sandbar, Cayman Turtle Centre, submarine tours for non-swimmers.",
      portB: "Atlantis water park, Blue Lagoon marine encounters, Ardastra Gardens flamingos.",
    },
    couples: {
      portA: "Private Stingray City charter, Seven Mile cabana, bioluminescent evening kayak.",
      portB: "Rose Island catamaran, Paradise Island resort cabana, historic Nassau waterfront dinner.",
    },
    snorkeling: {
      portA: "Cemetery Reef, Stingray City edges, Kittiwake wreck — excellent boat-access sites.",
      portB: "Rose Island, Goulding Cay reefs on catamaran tours. Stuart Cove dive sites.",
    },
    foodAndDrink: {
      portA: "George Town waterfront seafood, Seven Mile beach restaurants, upscale calm dining.",
      portB: "Bahamian fish fry culture, Paradise Island resort dining, Straw Market local food vendors.",
    },
    easeFromPort: {
      portA: "Tender required — weather can cancel port days. Tender queues add 30-60 minutes. Plan early departure.",
      portB: "Direct dock downtown. Immediate walkable access to shops, restaurants, and taxis. No tender.",
    },
    bestOverall: "Grand Cayman for Stingray City and nature. Nassau for Atlantis, culture, and convenient walkable port access.",
    comparisonTable: [
      { category: "Signature experience", portA: "Stingray City", portB: "Atlantis / Swimming pigs" },
      { category: "Beaches", portA: "Outstanding", portB: "Very good" },
      { category: "Port logistics", portA: "Tender (weather risk)", portB: "Direct dock" },
      { category: "Families", portA: "Very good", portB: "Excellent" },
      { category: "Snorkeling", portA: "Excellent", portB: "Good" },
      { category: "Atmosphere", portA: "Refined & calm", portB: "Energetic & colorful" },
    ],
    verdict:
      "Choose Grand Cayman for Stingray City, Seven Mile Beach, and a refined nature-focused day. Choose Nassau for Atlantis, Bahamian culture, swimming pigs, and convenient walkable port access. Factor in Grand Cayman's tender requirement when planning.",
    faqs: [
      { question: "Is Grand Cayman worth the tender hassle?", answer: "Yes, for Stingray City alone. It is one of the Caribbean's most unique experiences. Just disembark early to minimize tender wait times." },
      { question: "Which port is better for families with kids?", answer: "Nassau's Atlantis Aquaventure is hard to beat for families. Grand Cayman works well for nature-loving families with Stingray City and Turtle Centre." },
      { question: "Which port is more expensive?", answer: "Nassau tends to be pricier, especially Atlantis day passes and Exuma pig excursions. Grand Cayman mid-range excursions offer good value." },
    ],
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
