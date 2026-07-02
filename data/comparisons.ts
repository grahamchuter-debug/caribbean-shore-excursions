import type { Comparison } from "./types";
import { extraComparisons } from "./extra-comparisons";

export const comparisons: Comparison[] = [
  {
    slug: "aruba-vs-curacao",
    title: "Aruba vs Curaçao: Which Caribbean Port Is Better?",
    seoTitle: "Aruba vs Curaçao Cruise Port Comparison",
    metaDescription:
      "Detailed Aruba vs Curaçao cruise port comparison covering beaches, snorkeling, families, couples, food, shore excursions, port ease, and which Southern Caribbean island suits your cruise day.",
    portA: "Aruba",
    portB: "Curaçao",
    portASlug: "aruba",
    portBSlug: "curacao",
    summary:
      "Aruba and Curaçao are ABC-island neighbors with Dutch-Caribbean roots, but they deliver very different cruise days. Aruba is beach-first and resort-polished; Curaçao is culture-rich with superior diving and a UNESCO waterfront you can explore on foot from the pier.",
    overview: {
      portA:
        "Aruba is a beach-first Southern Caribbean port built around Eagle Beach, Palm Beach catamaran sails, and Arikok National Park desert adventures. Oranjestad's two cruise terminals put downtown shopping and taxis within a five-minute walk, and the island's year-round trade winds make sailing excursions exceptionally reliable.",
      portB:
        "Curaçao is a cultural and underwater destination centered on UNESCO-listed Willemstad, world-class reef diving, and authentic Dutch-Caribbean neighborhoods. Ships dock at Mathey Wharf with Handelskade's pastel waterfront immediately accessible, a contrast to Aruba's resort-beach focus.",
    },
    beaches: {
      portA:
        "Eagle Beach and Palm Beach rank among the Caribbean's finest, wide white sand, calm turquoise water, and excellent swimming conditions. Divi-divi trees, palapa restaurants, and chair rentals make Aruba the stronger pure beach day.",
      portB:
        "Curaçao's beaches are smaller and more scattered. Grote Knip and Playa Porto Mari are beautiful but require taxi or tour transport. Mambo Beach offers facilities near Willemstad, but overall beach lounging favors Aruba.",
    },
    snorkeling: {
      portA:
        "Antilla shipwreck snorkel, Boca Catalina bay, and Mangel Halto reef deliver good boat-access sites. Aruba's snorkeling is solid but secondary to its beach and sailing experience.",
      portB:
        "Curaçao is the ABC islands' snorkeling and diving champion. Tugboat Beach shallow wreck, Director's Bay, and Playa Kalki offer exceptional visibility, healthier coral diversity, and more intimate reef encounters than Aruba.",
    },
    families: {
      portA:
        "De Palm Island all-inclusive water park, Baby Beach shallow lagoon, and Butterfly Farm suit all ages. Eagle Beach's calm water and on-site facilities make family beach days straightforward.",
      portB:
        "Curaçao Sea Aquarium, Boca Catalina beginner snorkel, and Willemstad walking tours work well for families. Fewer dedicated kid-focused attractions than Aruba, but cultural exploration engages school-age children.",
    },
    couples: {
      portA:
        "Sunset catamaran cruises along the west coast, Eagle Beach cabana packages, and private Arikok 4x4 adventures to Natural Pool create polished romantic port days.",
      portB:
        "Willemstad waterfront dining in Pietermaai, private dive charters to secluded reefs, and intimate beach clubs at Jan Thiel deliver a more cultural, less resort-style couples experience.",
    },
    foodAndDrink: {
      portA:
        "Oranjestad waterfront restaurants serve fresh seafood and international cuisine. Palm Beach beach bars offer casual lunch with ocean views. Straightforward tourist dining without deep culinary heritage.",
      portB:
        "Willemstad's dining scene is more diverse, Dutch, Caribbean, and Latin influences across colonial districts. Blue Curaçao distillery tastings and floating market produce add distinctive local flavor.",
    },
    excursions: {
      portA:
        "Catamaran snorkel sails, De Palm Island, Arikok 4x4 desert tours, horseback riding, and Eagle Beach breaks dominate Aruba's excursion menu, polished, high-volume, and beach-oriented.",
      portB:
        "Diving and snorkel charters, Hato Caves, Christoffelberg hiking, Willemstad cultural walks, and Blue Curaçao distillery visits define Curaçao. Less variety than Aruba but stronger underwater and heritage options.",
    },
    easeFromPort: {
      portA:
        "Two cruise terminals in Oranjestad. Downtown walkable in minutes. Taxis plentiful. No tender required. Outside the hurricane belt with reliable year-round port calls.",
      portB:
        "Mathey Wharf docking in Willemstad. Historic waterfront immediately walkable. Queen Emma Bridge connects districts. No tender required. Remote beaches need taxi or organized transport.",
    },
    bestForFirstTimers: {
      portA:
        "Aruba is the safer first-time ABC island choice, world-famous beaches, easy logistics, and excursion operators who handle thousands of cruise passengers daily. You know exactly what you are getting.",
      portB:
        "Curaçao rewards curious first-timers who want more than a beach chair. Walk Willemstad from the pier, then add a snorkel or cave tour. Less intuitive than Aruba but more memorable for culture seekers.",
    },
    cruisePortExperience: {
      portA:
        "Oranjestad's two cruise terminals are modern and high-volume, with air-conditioned excursion halls, duty-free shopping, and taxi marshals at the gate. Downtown is walkable within minutes, though popular catamaran sails queue early on multi-ship days.",
      portB:
        "Mathey Wharf puts UNESCO-listed Handelskade immediately in front of you, one of the Caribbean's best pier-to-culture walks. The terminal area is compact and less commercial than Aruba, with dive shops and Willemstad food stops steps from the gangway.",
    },
    bestOverall:
      "Aruba wins for beaches, sailing, and relaxed resort-style days. Curaçao wins for diving, UNESCO heritage, and travelers who want cultural depth over lounging. Both are excellent Southern Caribbean ports outside the hurricane belt.",
    comparisonTable: [
      { category: "Beaches", portA: "World-class (Eagle Beach)", portB: "Good but smaller & scattered" },
      { category: "Snorkeling & diving", portA: "Very good", portB: "Excellent, ABC leader" },
      { category: "Culture & heritage", portA: "Good (Dutch-Caribbean)", portB: "Outstanding (UNESCO)" },
      { category: "Families", portA: "Excellent", portB: "Good" },
      { category: "Couples", portA: "Excellent (resort-style)", portB: "Very good (cultural)" },
      { category: "Food & drink", portA: "Good waterfront dining", portB: "Excellent diversity" },
      { category: "Shore excursion variety", portA: "Outstanding", portB: "Very good" },
      { category: "Port ease", portA: "Direct dock, walkable", portB: "Direct dock, walkable" },
      { category: "First-time visitors", portA: "Easier default choice", portB: "Better for curious explorers" },
      { category: "Weather reliability", portA: "Excellent", portB: "Excellent" },
    ],
    verdict:
      "Choose Aruba if you want the Caribbean's best beaches, reliable catamaran sails, and a polished resort-style day with minimal planning. Choose Curaçao if you prefer UNESCO waterfront culture, superior reef diving, and a more authentic Dutch-Caribbean atmosphere. Many Southern Caribbean itineraries visit both, plan Aruba for beaches and Curaçao for culture and underwater adventure.",
    faqs: [
      {
        question: "Is Aruba or Curaçao better for beaches?",
        answer:
          "Aruba has superior beaches for swimming and lounging. Eagle Beach and Palm Beach are wider, calmer, and more developed than Curaçao's scattered coves like Grote Knip.",
      },
      {
        question: "Which island is better for snorkeling?",
        answer:
          "Curaçao generally offers better snorkeling and diving with more diverse reef sites including Tugboat Beach wreck. Aruba's snorkeling is good but secondary to its beach experience.",
      },
      {
        question: "Can I visit both Aruba and Curaçao on one cruise?",
        answer:
          "Many Southern Caribbean itineraries include both islands on separate days. They are close enough that week-long cruises often visit both plus Bonaire.",
      },
      {
        question: "Which port is better for first-time Caribbean cruisers?",
        answer:
          "Aruba is more straightforward, famous beaches, easy taxis, and high-volume excursion infrastructure. Curaçao suits travelers who want cultural exploration alongside reef activities.",
      },
      {
        question: "Do both ports require tenders?",
        answer:
          "No. Both Aruba and Curaçao have dedicated cruise piers where ships dock directly with walkable downtown access.",
      },
    ],
    relatedComparisonSlugs: ["aruba-vs-bonaire", "bonaire-vs-curacao"],
  },
  {
    slug: "st-thomas-vs-st-maarten",
    title: "St. Thomas vs St. Maarten: Eastern Caribbean Port Comparison",
    seoTitle: "St. Thomas vs St. Maarten Cruise Port Comparison",
    metaDescription:
      "St. Thomas vs St. Maarten detailed comparison for cruise passengers, beaches, snorkeling, families, couples, food, shore excursions, port logistics, and which Eastern Caribbean port to choose.",
    portA: "St. Thomas",
    portB: "St. Maarten",
    portASlug: "st-thomas",
    portBSlug: "st-maarten",
    summary:
      "St. Thomas and St. Maarten are two of the Eastern Caribbean's busiest ports with excellent beaches and duty-free shopping, but they feel distinctly different. St. Thomas is the beach and St. John gateway; St. Maarten delivers dual-nation culture and Maho Beach plane spotting.",
    overview: {
      portA:
        "St. Thomas is the Eastern Caribbean's beach and shopping capital. Magens Bay, duty-free Charlotte Amalie, Sapphire Beach reef snorkeling, and a 20-minute ferry to St. John's Trunk Bay make it the region's most versatile single port day.",
      portB:
        "St. Maarten is a dual Dutch-French nation port famous for Maho Beach plane spotting, Orient Bay beach clubs, and two cultures in one compact island. Philipsburg shopping and Grand Case dining add depth beyond the beach.",
    },
    beaches: {
      portA:
        "Magens Bay is an Eastern Caribbean icon, calm horseshoe water with facilities and chair rentals. Sapphire Beach and Coki Beach add excellent snorkel-beach combos minutes from the terminals.",
      portB:
        "Orient Bay on the French side is lively with beach clubs, restaurants, and water sports. Maho Beach is for aviation thrills, not swimming. Great Bay near Philipsburg is convenient but less impressive than Magens Bay.",
    },
    snorkeling: {
      portA:
        "Sapphire Beach reef is minutes from Red Hook. St. John ferry day trips reach Trunk Bay's famous underwater trail in Virgin Islands National Park. Buck Island boat tours add premium reef options.",
      portB:
        "Tintamarre Cay and Creole Rock on catamaran excursions deliver excellent snorkel stops. Mullet Bay offers calm beginner snorkel on the Dutch side. Fewer famous reef sites than St. Thomas.",
    },
    families: {
      portA:
        "Magens Bay calm water suits young swimmers. Coral World Ocean Park offers touch pools and an underwater observatory. St. John day trips work for older children with ferry time factored in.",
      portB:
        "Great Bay convenience, Maho plane spotting thrills teens, and catamaran sails suit mixed-age groups. Orient Bay beach clubs provide structured family beach days on the French side.",
    },
    couples: {
      portA:
        "Private catamaran sails to outer cays, St. John secluded north-shore beaches, and waterfront Charlotte Amalie or Frenchtown dining create classic romantic Caribbean days.",
      portB:
        "Orient Bay cabanas, Tintamarre private-feel catamarans, and Grand Case French-side gastronomy deliver a more European-Caribbean couples atmosphere.",
    },
    foodAndDrink: {
      portA:
        "Charlotte Amalie restaurants, Red Hook dining near the St. John ferry terminal, and casual beach bar food at Magens Bay. Strong seafood and international options near both cruise terminals.",
      portB:
        "Grand Case is the French side's gastronomic capital. Philipsburg waterfront cafes serve Dutch-Caribbean fare. Orient Bay beach club lunches combine dining with a full beach day.",
    },
    excursions: {
      portA:
        "Magens Bay beach days, St. John/Trunk Bay ferry trips, catamaran snorkel sails, Mountain Top Skyride, and private island-hopping charters define St. Thomas's excursion market.",
      portB:
        "Maho plane spotting tours, Orient Bay beach clubs, dual-nation island drives, Tintamarre catamaran snorkel sails, and Loterie Farm rainforest adventures define St. Maarten.",
    },
    easeFromPort: {
      portA:
        "Two terminals (Havensight, Crown Bay). Taxis plentiful and unmetered, agree prices first. St. John requires a 20-minute ferry from Red Hook, allow 6+ hours for a meaningful visit.",
      portB:
        "Single main terminal with water taxi to Philipsburg. Taxis needed for French side, Maho, and Orient Bay. Compact island means both nations are reachable in one day with planning.",
    },
    bestForFirstTimers: {
      portA:
        "St. Thomas is the classic Eastern Caribbean introduction, Magens Bay delivers the postcard beach experience, shopping is walkable, and excursion infrastructure is mature. Hard to go wrong on a first visit.",
      portB:
        "St. Maarten offers something no other port can, standing beneath landing aircraft at Maho Beach. First-timers who want a unique story over a perfect beach should choose St. Maarten.",
    },
    bestOverall:
      "St. Thomas wins for beaches, shopping, and St. John access. St. Maarten wins for unique experiences, dual-culture exploration, and lively atmosphere. Both are top-tier Eastern Caribbean ports.",
    comparisonTable: [
      { category: "Beaches", portA: "Outstanding (Magens Bay)", portB: "Good (Orient Bay)" },
      { category: "Snorkeling", portA: "Very good (Sapphire, Trunk Bay)", portB: "Good (Tintamarre)" },
      { category: "Shopping", portA: "Best in Caribbean", portB: "Excellent (two nations)" },
      { category: "Unique experience", portA: "St. John island access", portB: "Maho plane spotting" },
      { category: "Families", portA: "Excellent", portB: "Very good" },
      { category: "Couples", portA: "Excellent", portB: "Very good" },
      { category: "Food & drink", portA: "Very good", portB: "Excellent (Grand Case)" },
      { category: "Port ease", portA: "Direct dock, two terminals", portB: "Direct dock, compact island" },
      { category: "First-time visitors", portA: "Classic safe choice", portB: "Best for unique thrills" },
      { category: "Excursion variety", portA: "Outstanding", portB: "Very good" },
    ],
    verdict:
      "Choose St. Thomas for Magens Bay, world-class shopping, and easy St. John access, the quintessential Eastern Caribbean port day. Choose St. Maarten for Maho plane spotting, dual-nation culture, and Orient Bay beach club atmosphere. Both ports dock directly with no tenders required.",
    faqs: [
      {
        question: "Which port has better beaches?",
        answer:
          "St. Thomas has more consistently excellent beaches, led by Magens Bay. St. Maarten's Orient Bay is lively and fun but the overall beach selection favors St. Thomas.",
      },
      {
        question: "Which is better for families?",
        answer:
          "Both work well. St. Thomas offers calmer beaches like Magens Bay and Coral World marine park. St. Maarten's plane spotting thrills older kids and teens at Maho Beach.",
      },
      {
        question: "Do both ports require tenders?",
        answer:
          "No. Both St. Thomas and St. Maarten have dedicated cruise terminals where ships dock directly.",
      },
      {
        question: "Can I visit St. John from St. Maarten?",
        answer:
          "Not practically on a cruise day. St. John access requires ferry from St. Thomas. This is a major advantage for St. Thomas over St. Maarten.",
      },
      {
        question: "Which port is better for snorkeling?",
        answer:
          "St. Thomas edges ahead with Sapphire Beach reef and Trunk Bay's underwater trail via St. John ferry. St. Maarten's Tintamarre catamaran snorkels are excellent but fewer options overall.",
      },
    ],
    relatedComparisonSlugs: ["st-thomas-vs-tortola", "st-maarten-vs-tortola"],
  },
  {
    slug: "roatan-vs-cozumel",
    title: "Roatán vs Cozumel: Western Caribbean Snorkeling Comparison",
    seoTitle: "Roatán vs Cozumel Cruise Port Comparison",
    metaDescription:
      "Roatán vs Cozumel in-depth cruise port comparison for snorkeling, beaches, families, couples, food, shore excursions, port ease, value, and which Western Caribbean reef port wins.",
    portA: "Roatán",
    portB: "Cozumel",
    portASlug: "roatan",
    portBSlug: "cozumel",
    summary:
      "Roatán and Cozumel both sit on the Mesoamerican Barrier Reef and rank among the Caribbean's best snorkeling destinations. Cozumel offers more excursion variety and famous reef names; Roatán delivers comparable quality with fewer crowds and better value.",
    overview: {
      portA:
        "Roatán is a laid-back Bay Island with pristine reef snorkeling at West Bay and West End, eco-adventures at Gumbalimba Park, and among the Caribbean's best excursion value. Mahogany Bay cruise center offers on-port beach access.",
      portB:
        "Cozumel is Mexico's busiest cruise port with world-famous Palancar and Columbia reefs, Mayan Tulum access, El Cielo sandbar catamarans, and the widest independent excursion selection in the Western Caribbean.",
    },
    beaches: {
      portA:
        "West Bay Beach is stunning white sand with calm clear water, among the Caribbean's best-value beach days. Tabyana Beach adds reef snorkeling directly offshore.",
      portB:
        "Playa Palancar and beach clubs are pleasant but Cozumel is primarily a reef destination. Beach lounging is secondary to snorkel boats and catamaran sails.",
    },
    snorkeling: {
      portA:
        "West Bay Reef, Blue Channel, and Starfish Alley deliver excellent visibility with fewer boats than Cozumel. Healthy hard and soft coral at prices typically 20-30% below Cozumel equivalents.",
      portB:
        "Palancar and Columbia reefs are world-renowned with exceptional visibility, dramatic coral formations, and marine park protections. The benchmark Western Caribbean snorkel experience.",
    },
    families: {
      portA:
        "Gumbalimba Park monkeys and iguanas thrill children. West Bay calm beach suits all ages. Mahogany Bay on-port amenities work for families wanting shorter transfers.",
      portB:
        "Chankanaab lagoon snorkel, dolphin programs, glass-bottom boats, and walkable downtown San Miguel suit families. More structured kid-focused attractions than Roatán.",
    },
    couples: {
      portA:
        "Private West Bay cabanas, couples catamaran sails, and secluded reef snorkel boats at lower prices than equivalent Cozumel charters.",
      portB:
        "Private El Cielo catamarans with champagne service, couples beach massage at clubs, and intimate small-group Palancar snorkel boats.",
    },
    foodAndDrink: {
      portA:
        "West End village seafood shacks, beach club dining, and casual Mahogany Bay restaurants. Authentic Bay Islands atmosphere at lower prices than Cozumel.",
      portB:
        "San Miguel de Cozumel plazas, beach club lunches, and authentic Mexican seafood and tacos. More dining variety near the cruise piers.",
    },
    excursions: {
      portA:
        "Reef snorkeling, Gumbalimba eco-park, West Bay beach, zip-lines, and private snorkel boats. Smaller menu than Cozumel but strong reef and value focus.",
      portB:
        "Palancar snorkel, El Cielo sandbar, Tulum ruins, Chankanaab Park, ATV jungle tours, and vibrant San Miguel culture walks. The widest Western Caribbean excursion selection.",
    },
    easeFromPort: {
      portA:
        "Mahogany Bay cruise center with on-site beach and zipline, or Port of Roatán closer to West Bay. No tender. Taxis to West Bay cost $30-50 round trip.",
      portB:
        "Three established piers. Punta Langosta offers downtown walkability. Mature infrastructure with high excursion volume, book early on busy ship days.",
    },
    bestForFirstTimers: {
      portA:
        "Roatán is ideal for first-time snorkelers who want quality without Cozumel's crowds and prices. West Bay Beach alone justifies the port call for beach-first cruisers.",
      portB:
        "Cozumel is the Western Caribbean's default first-timer port, famous reef names, Tulum access, and dozens of excursion options mean you always find something that fits.",
    },
    bestOverall:
      "Cozumel wins for excursion variety and world-famous reef sites. Roatán wins for comparable snorkeling with fewer crowds, better beach quality, and superior value.",
    comparisonTable: [
      { category: "Snorkeling", portA: "Excellent", portB: "World-class" },
      { category: "Beaches", portA: "Outstanding (West Bay)", portB: "Good" },
      { category: "Excursion variety", portA: "Good", portB: "Outstanding" },
      { category: "Value", portA: "Excellent", portB: "Mid-range" },
      { category: "Crowds at reef sites", portA: "Fewer boats", portB: "More boats" },
      { category: "Families", portA: "Very good", portB: "Excellent" },
      { category: "Couples", portA: "Very good (value)", portB: "Excellent (variety)" },
      { category: "Food & drink", portA: "Good (authentic)", portB: "Very good (variety)" },
      { category: "Port ease", portA: "Direct dock", portB: "Direct dock" },
      { category: "First-time visitors", portA: "Best value intro", portB: "Most options" },
    ],
    verdict:
      "Choose Cozumel for the widest excursion variety, Tulum Mayan ruins, and world-famous Palancar Reef. Choose Roatán for comparable snorkeling with fewer crowds, exceptional West Bay Beach, and better value. Reef quality is close, your choice depends on whether you prioritize variety (Cozumel) or intimacy and price (Roatán).",
    faqs: [
      {
        question: "Which is better for snorkeling beginners?",
        answer:
          "Both are excellent. Cozumel has more guided options and established sites. Roatán offers calmer, less crowded reef experiences with patient local guides.",
      },
      {
        question: "Is Roatán cheaper than Cozumel?",
        answer:
          "Generally yes. Snorkeling tours, taxis, and beach clubs tend to be 20-30% more affordable in Roatán than equivalent Cozumel excursions.",
      },
      {
        question: "Which island has better beaches?",
        answer:
          "Roatán's West Bay Beach is exceptional for swimming and lounging. Cozumel's beaches are good but the island is primarily known for reef activities.",
      },
      {
        question: "Can I visit Tulum from Roatán?",
        answer:
          "No. Tulum and mainland Mayan ruins are Cozumel excursions requiring a ferry to Playa del Carmen. This is a major Cozumel advantage over Roatán.",
      },
      {
        question: "Which port is less crowded?",
        answer:
          "Roatán sees fewer cruise ships and fewer boats at snorkel sites than Cozumel, especially at West Bay Reef and Blue Channel.",
      },
    ],
    relatedComparisonSlugs: ["cozumel-vs-costa-maya", "cozumel-vs-progreso", "costa-maya-vs-progreso"],
  },
  {
    slug: "amber-cove-vs-puerto-plata",
    title: "Amber Cove vs Puerto Plata: Dominican Republic Cruise Port Comparison",
    seoTitle: "Amber Cove vs Puerto Plata Cruise Port Comparison",
    metaDescription:
      "Amber Cove vs Puerto Plata detailed comparison for Dominican Republic cruise passengers, port village vs city excursions, waterfalls, beaches, families, and shore excursion planning.",
    portA: "Amber Cove",
    portB: "Puerto Plata",
    portASlug: "puerto-plata",
    portBSlug: "puerto-plata",
    summary:
      "Amber Cove and Puerto Plata city serve the same Dominican Republic cruise market from different starting points. Amber Cove is a self-contained port village for relaxed days; Puerto Plata and the Amber Coast deliver waterfall adventures, cable car views, and colonial culture.",
    overview: {
      portA:
        "Amber Cove is Carnival Corporation's modern cruise port with pools, shops, waterfront dining, and organized excursion coach departures. It is secure, self-contained, and designed for passengers who want convenience without navigating city transport.",
      portB:
        "Puerto Plata city offers colonial Fort San Felipe, Victorian gingerbread architecture, Teleférico cable car to Mount Isabel de Torres, and authentic Dominican culture beyond the port gates, reached by 15-20 minute coach from Amber Cove.",
    },
    beaches: {
      portA:
        "On-port waterfront and pool areas provide convenient swimming without leaving the terminal. Organized excursions reach Playa Dorada and Cofresí Beach for proper beach days.",
      portB:
        "Playa Dorada resort strip, Cofresí Beach, and Sosúa Bay are the Amber Coast's best beaches, all reached by coach or taxi from either Amber Cove or Taíno Bay terminal.",
    },
    snorkeling: {
      portA:
        "Snorkel excursions depart Amber Cove coaches to Sosúa Bay reef and Cayo Arena sandbar boat tours. No on-port reef, all snorkel requires organized transport north.",
      portB:
        "Sosúa Bay is the primary reef area north of Puerto Plata city. Same snorkel sites accessible from either terminal, Puerto Plata city itself has no shore snorkel.",
    },
    families: {
      portA:
        "Port pool and village suit younger children perfectly. No long transfers, no city navigation. Organized waterfall and cable car excursions depart on schedule from the terminal.",
      portB:
        "Teleférico cable car thrills school-age children. Ocean World marine park offers dolphin programs. Colonial walking tours engage older kids with fort exploration.",
    },
    couples: {
      portA:
        "Relaxed port village day with pool, waterfront cocktails, and low-stress logistics, ideal for shorter port calls or passengers recovering from active sea days.",
      portB:
        "27 Charcos waterfall adventure, couples cable car summit views, and Sosúa beach club snorkel combos deliver active romantic days beyond the port gates.",
    },
    foodAndDrink: {
      portA:
        "Port village restaurants and bars, convenient, tourist-oriented, and reliable for cruise schedules. Dominican flavors available but not the most authentic setting.",
      portB:
        "Authentic Dominican dining in Puerto Plata city, beach restaurants at Playa Dorada, and Sosúa's waterfront eateries. Better cultural food experience with more local character.",
    },
    excursions: {
      portA:
        "Port pool day, organized coach departures to 27 Charcos waterfalls, Teleférico cable car, and Sosúa snorkel, convenient hub model with timed returns.",
      portB:
        "27 Charcos waterfalls, Teleférico summit, Fort San Felipe, Ocean World marine park, and Sosúa snorkel trips, the full Amber Coast excursion menu from city-based operators.",
    },
    easeFromPort: {
      portA:
        "Purpose-built terminal with immediate pool, shops, and dining. Excursion coaches depart on schedule. No walking to city, all off-port activities require organized transport.",
      portB:
        "Taíno Bay terminal is closer to Puerto Plata city (10 minutes). Amber Cove is 20 minutes from downtown. Taxi or organized tour recommended for all regional attractions.",
    },
    bestForFirstTimers: {
      portA:
        "Amber Cove is the easiest Dominican Republic introduction, stay in the secure port village, use the pool, and book one organized excursion without worrying about transport or navigation.",
      portB:
        "Puerto Plata city rewards first-timers who want authentic Dominican culture. The Teleférico cable car and Fort San Felipe deliver memorable experiences beyond a pool day.",
    },
    bestOverall:
      "Amber Cove wins for convenience, pool days, and stress-free logistics. Puerto Plata city and regional excursions win for waterfall adventures, colonial culture, and active port days.",
    comparisonTable: [
      { category: "Convenience", portA: "Excellent (on-port)", portB: "Good (requires transport)" },
      { category: "Adventure excursions", portA: "Via organized coaches", portB: "Outstanding (waterfalls)" },
      { category: "Culture & heritage", portA: "Limited on-port", portB: "Colonial city & fort" },
      { category: "Families", portA: "Excellent (pool)", portB: "Very good (cable car)" },
      { category: "Couples", portA: "Good (relaxed)", portB: "Very good (active)" },
      { category: "Beaches", portA: "Via excursion", portB: "Playa Dorada, Sosúa" },
      { category: "Snorkeling", portA: "Good (via tour)", portB: "Good (Sosúa Bay)" },
      { category: "Food authenticity", portA: "Tourist-oriented", portB: "More local character" },
      { category: "Port ease", portA: "Self-contained", portB: "City access (Taíno Bay)" },
      { category: "First-time visitors", portA: "Easiest logistics", portB: "Most memorable culture" },
    ],
    verdict:
      "Stay at Amber Cove for a relaxed pool-and-port-village day with minimal logistics, ideal for families with young children or short port calls. Venture to Puerto Plata and the Amber Coast for 27 Charcos waterfalls, Teleférico cable car, and colonial heritage. Most passengers book one organized excursion from Amber Cove and combine it with port pool time.",
    faqs: [
      {
        question: "Is Amber Cove the same as Puerto Plata?",
        answer:
          "Amber Cove is a cruise port facility near Puerto Plata city on the Dominican Republic's north coast. Excursions reach Puerto Plata attractions, waterfalls, and beaches throughout the Amber Coast region.",
      },
      {
        question: "Can I walk to Puerto Plata city from Amber Cove?",
        answer:
          "No. Amber Cove is about 20 minutes by coach or taxi from Puerto Plata city. Book organized excursions or arrange licensed transport.",
      },
      {
        question: "Which terminal is better, Amber Cove or Taíno Bay?",
        answer:
          "Both work well. Amber Cove has more on-port amenities including a pool. Taíno Bay is closer to Puerto Plata city for culture-focused days.",
      },
      {
        question: "Is the 27 Waterfalls excursion worth it from Amber Cove?",
        answer:
          "Yes, it is the Amber Coast's signature adventure. Coaches depart directly from Amber Cove with timed returns. Moderate fitness required for climbing and sliding through waterfalls.",
      },
      {
        question: "Can I just stay at Amber Cove without booking an excursion?",
        answer:
          "Absolutely. The port village pool, shops, waterfront, and dining provide a complete low-stress port day without leaving the terminal.",
      },
    ],
    relatedComparisonSlugs: ["puerto-plata-vs-samana", "la-romana-vs-puerto-plata"],
  },
  {
    slug: "ocho-rios-vs-falmouth",
    title: "Ocho Rios vs Falmouth: Jamaica Cruise Port Guide",
    seoTitle: "Ocho Rios vs Falmouth Jamaica Cruise Port Comparison",
    metaDescription:
      "Ocho Rios vs Falmouth Jamaica cruise port comparison, Dunn's River Falls access, Martha Brae rafting, families, couples, food, shore excursions, and which port suits your cruise day.",
    portA: "Ocho Rios",
    portB: "Falmouth",
    portASlug: "ocho-rios",
    portBSlug: "falmouth",
    summary:
      "Jamaica's two main cruise ports serve different traveler priorities. Ocho Rios puts you closest to Dunn's River Falls and Mystic Mountain adventures; Falmouth offers a historic Georgian town, better Martha Brae rafting access, and fewer crowds.",
    overview: {
      portA:
        "Ocho Rios is Jamaica's adventure capital, Dunn's River Falls, Mystic Mountain bobsled, and Dolphin Cove sit minutes from the cruise terminal. Dense excursion operator networks and high passenger volume define the port experience.",
      portB:
        "Falmouth is a historic Georgian port town with Martha Brae bamboo rafting 30 minutes away, a walkable colonial center, and a quieter, less commercial atmosphere than Ocho Rios.",
    },
    beaches: {
      portA:
        "Dunn's River Falls beach at the base of the falls, Mahogany Beach near port, and James Bond Beach on island tours. Beach is secondary to waterfall and adventure focus.",
      portB:
        "Limited beach focus. Burwood Beach is reachable by short taxi. Excursions prioritize river rafting, historic town exploration, and estate adventures over beach lounging.",
    },
    snorkeling: {
      portA:
        "Runaway Bay reef sections on combination tours. Snorkeling is secondary to waterfall climbs and rainforest adventures at Ocho Rios.",
      portB:
        "Limited snorkel focus. Luminous Lagoon bioluminescent evening tours are the unique water experience. Runaway Bay reef reachable on longer west-coast excursions.",
    },
    families: {
      portA:
        "Dunn's River Falls guided climb, Mystic Mountain bobsled, and Dolphin Cove deliver high-energy family adventures. Best for active families with mobile children.",
      portB:
        "Peaceful Martha Brae bamboo rafting suits mixed-age families including grandparents. Good Hope Estate zip-lines engage older children. Less aggressive vendor environment.",
    },
    couples: {
      portA:
        "Private early-morning Dunn's River timing, Blue Hole hidden waterfall swims, and couples bamboo rafting extensions create active romantic adventure days.",
      portB:
        "Romantic Martha Brae raft ride with rum punch through jungle canopy, historic town stroll, and Luminous Lagoon evening kayak for a slower-paced couples day.",
    },
    foodAndDrink: {
      portA:
        "Jerk chicken vendors, Margaritaville, local craft markets, and beach bar dining. Tourist-oriented but authentically Jamaican flavors throughout.",
      portB:
        "Historic Falmouth eateries, countryside lunch on rafting tours, and less tourist-trap dining pressure. More local character in the Georgian town center.",
    },
    excursions: {
      portA:
        "Dunn's River Falls climb, Mystic Mountain bobsled, Dolphin Cove, zip-lines, river tubing, and Blue Hole hidden waterfall swims, Jamaica's densest adventure menu.",
      portB:
        "Martha Brae bamboo rafting, Good Hope Estate adventures, Luminous Lagoon evening tours, and historic Falmouth walking tours, quieter, heritage-focused options.",
    },
    easeFromPort: {
      portA:
        "Dunn's River Falls 10 minutes by taxi. Mystic Mountain 5 minutes. Dense excursion network but heavy vendor presence at the terminal.",
      portB:
        "Martha Brae 30 minutes by coach. Dunn's River Falls 45-60 minutes. Historic town walkable from pier. Quieter terminal with less vendor pressure.",
    },
    bestForFirstTimers: {
      portA:
        "Ocho Rios is the must-do Jamaica first-timer port, Dunn's River Falls is one of the Caribbean's most iconic experiences and it is 10 minutes from the ship.",
      portB:
        "Falmouth suits first-timers who want authentic Jamaica without the commercial intensity of Ocho Rios. Martha Brae rafting is a gentler, equally memorable introduction.",
    },
    bestOverall:
      "Ocho Rios wins for Dunn's River Falls and adventure with minimal travel. Falmouth wins for Martha Brae rafting, historic charm, and fewer crowds.",
    comparisonTable: [
      { category: "Dunn's River Falls", portA: "10 min away", portB: "45-60 min away" },
      { category: "Martha Brae rafting", portA: "30 min away", portB: "Best access (30 min)" },
      { category: "Adventure variety", portA: "Outstanding", portB: "Good" },
      { category: "Historic culture", portA: "Moderate", portB: "Outstanding (Georgian town)" },
      { category: "Crowds & vendors", portA: "Busier", portB: "Quieter" },
      { category: "Families", portA: "Excellent (active)", portB: "Very good (gentler)" },
      { category: "Couples", portA: "Very good (adventure)", portB: "Very good (romantic)" },
      { category: "Beaches", portA: "Moderate", portB: "Limited" },
      { category: "Port ease", portA: "Direct dock, dense vendors", portB: "Direct dock, walkable town" },
      { category: "First-time visitors", portA: "Iconic falls experience", portB: "Authentic Jamaica intro" },
    ],
    verdict:
      "Choose Ocho Rios for Dunn's River Falls and adventure activities with minimal travel time, the definitive Jamaica cruise experience. Choose Falmouth for Martha Brae river rafting, historic Georgian town exploration, and a less crowded atmosphere. Dunn's River Falls is worth the extra drive from Falmouth if it is your absolute priority.",
    faqs: [
      {
        question: "Can I do Dunn's River Falls from Falmouth?",
        answer:
          "Yes, but it requires 45-60 minutes of driving each way. Most passengers at Falmouth choose Martha Brae rafting instead for a shorter transfer.",
      },
      {
        question: "Which Jamaica port is less crowded?",
        answer:
          "Falmouth is generally less crowded and commercial than Ocho Rios, especially around the historic town and terminal area.",
      },
      {
        question: "Is Falmouth safe for cruise passengers?",
        answer:
          "The cruise port area and organized excursion routes are safe. Explore the historic town during daylight with a guide or organized tour.",
      },
      {
        question: "Which port is better for river rafting?",
        answer:
          "Falmouth offers better Martha Brae rafting access with a 30-minute transfer versus similar timing from Ocho Rios but in a quieter overall port environment.",
      },
      {
        question: "Can I climb Dunn's River Falls with children?",
        answer:
          "Yes, with a guide in the human chain formation. Most families with school-age children manage the climb. Water shoes are essential. Non-climbers can watch from viewing areas.",
      },
    ],
    relatedComparisonSlugs: ["ocho-rios-vs-montego-bay", "falmouth-vs-montego-bay"],
  },
  {
    slug: "grand-cayman-vs-nassau",
    title: "Grand Cayman vs Nassau: Cruise Port Comparison",
    seoTitle: "Grand Cayman vs Nassau Cruise Port Comparison",
    metaDescription:
      "Grand Cayman vs Nassau detailed cruise port comparison, Stingray City vs Atlantis, beaches, families, snorkeling, tender logistics, food, and which port delivers the better cruise day.",
    portA: "Grand Cayman",
    portB: "Nassau",
    portASlug: "grand-cayman",
    portBSlug: "nassau",
    summary:
      "Grand Cayman and Nassau are Western Caribbean staples with very different personalities. Grand Cayman is refined and nature-focused with Stingray City and Seven Mile Beach; Nassau is vibrant and resort-driven with Atlantis, Bahamian culture, and walkable downtown access.",
    overview: {
      portA:
        "Grand Cayman is a tender port famous for Stingray City sandbar wildlife encounters and Seven Mile Beach's pristine sand. George Town offers calm, upscale dining and a refined atmosphere distinct from busier Caribbean ports.",
      portB:
        "Nassau is a direct-dock Bahamas capital with Atlantis Aquaventure on Paradise Island, downtown Junkanoo culture, and immediate walkable access from Prince George Wharf.",
    },
    beaches: {
      portA:
        "Seven Mile Beach is one of the Caribbean's finest stretches with powdery sand and clear water. Starfish Point and Rum Point add variety for organized excursion days.",
      portB:
        "Cable Beach and Paradise Island beaches are very good. Cabbage Beach at Atlantis is excellent with a day pass. Junkanoo Beach is convenient near downtown but less impressive.",
    },
    snorkeling: {
      portA:
        "Cemetery Reef, Stingray City edges, and Kittiwake wreck deliver excellent boat-access snorkel sites with clear water and strong operator standards.",
      portB:
        "Rose Island and Goulding Cay reefs on catamaran tours provide reliable half-day snorkel options. Stuart Cove dive sites for advanced snorkelers and divers.",
    },
    families: {
      portA:
        "Stingray City sandbar puts children in waist-deep water with guide supervision. Cayman Turtle Centre touch tanks suit younger kids. Submarine tours work for non-swimmers.",
      portB:
        "Atlantis Aquaventure is the Caribbean's premier family water park day. Blue Lagoon dolphin encounters and Ardastra Gardens flamingos add structured wildlife programs.",
    },
    couples: {
      portA:
        "Private early-morning Stingray City charter, Seven Mile Beach cabana lunch, and bioluminescent evening kayak create refined romantic port days.",
      portB:
        "Rose Island catamaran snorkel sail, Paradise Island resort cabana, and historic Nassau waterfront dinner deliver energetic romantic Caribbean atmosphere.",
    },
    foodAndDrink: {
      portA:
        "George Town waterfront seafood, Seven Mile beach restaurants, and upscale calm dining. Refined atmosphere with strong fresh-catch options.",
      portB:
        "Bahamian fish fry culture at Arawak Cay, Paradise Island resort dining, and Straw Market local food vendors. More vibrant street-food energy than Grand Cayman.",
    },
    excursions: {
      portA:
        "Stingray City sandbar, Seven Mile Beach, bioluminescent kayak, Cayman Turtle Centre, and Cemetery Reef snorkel boats, nature-focused with Stingray City as the unmissable highlight.",
      portB:
        "Atlantis Aquaventure, Exuma swimming pigs flight, Blue Lagoon dolphins, Rose Island catamaran snorkel, and downtown heritage walking tours, resort and culture variety.",
    },
    easeFromPort: {
      portA:
        "Tender required, weather can cancel entire port days. Tender queues add 30-60 minutes each way. Disembark early and book first-slot Stingray City excursions.",
      portB:
        "Direct dock downtown at Prince George Wharf. Immediate walkable access to shops, restaurants, and taxis. No tender, no weather cancellation risk.",
    },
    bestForFirstTimers: {
      portA:
        "Grand Cayman delivers the Caribbean's most unique wildlife encounter at Stingray City, worth the tender hassle for first-timers who prioritize memorable nature over convenience.",
      portB:
        "Nassau is the easier first-timer port, walk off the ship into downtown, choose Atlantis or a catamaran snorkel, and navigate without tender uncertainty.",
    },
    bestOverall:
      "Grand Cayman wins for Stingray City and refined nature experiences. Nassau wins for Atlantis, Bahamian culture, walkable port access, and family water park days.",
    comparisonTable: [
      { category: "Signature experience", portA: "Stingray City", portB: "Atlantis / Swimming pigs" },
      { category: "Beaches", portA: "Outstanding (Seven Mile)", portB: "Very good" },
      { category: "Snorkeling", portA: "Excellent", portB: "Good" },
      { category: "Families", portA: "Very good", portB: "Excellent (Atlantis)" },
      { category: "Couples", portA: "Excellent (refined)", portB: "Very good (vibrant)" },
      { category: "Food & drink", portA: "Upscale seafood", portB: "Bahamian fish fry culture" },
      { category: "Port logistics", portA: "Tender (weather risk)", portB: "Direct dock" },
      { category: "Excursion variety", portA: "Good (nature focus)", portB: "Outstanding" },
      { category: "Atmosphere", portA: "Refined & calm", portB: "Energetic & colorful" },
      { category: "First-time visitors", portA: "Unique wildlife", portB: "Easier logistics" },
    ],
    verdict:
      "Choose Grand Cayman for Stingray City, Seven Mile Beach, and a refined nature-focused day, factor in the tender requirement and disembark early. Choose Nassau for Atlantis Aquaventure, Bahamian culture, swimming pigs, and convenient walkable port access. Both are excellent ports for different cruise passenger priorities.",
    faqs: [
      {
        question: "Is Grand Cayman worth the tender hassle?",
        answer:
          "Yes, for Stingray City alone. It is one of the Caribbean's most unique experiences. Disembark at the first tender call to minimize wait times.",
      },
      {
        question: "Which port is better for families with kids?",
        answer:
          "Nassau's Atlantis Aquaventure is hard to beat for families wanting a water park day. Grand Cayman works well for nature-loving families with Stingray City and Turtle Centre.",
      },
      {
        question: "Which port is more expensive?",
        answer:
          "Nassau tends to be pricier, especially Atlantis day passes and Exuma swimming pig flights. Grand Cayman mid-range excursions offer good value for the experience quality.",
      },
      {
        question: "Can Grand Cayman port days be cancelled?",
        answer:
          "Yes. Because Grand Cayman requires tenders, rough seas can cancel the entire port call. Nassau docks directly and is rarely cancelled for weather.",
      },
      {
        question: "Which port has better snorkeling?",
        answer:
          "Grand Cayman edges ahead with Cemetery Reef, Kittiwake wreck, and Stingray City area snorkels. Nassau's Rose Island catamaran snorkels are good but fewer premium sites.",
      },
    ],
  },
  ...extraComparisons,
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}

export function getRelatedComparisons(slug: string): Comparison[] {
  const comp = getComparisonBySlug(slug);
  if (!comp?.relatedComparisonSlugs?.length) return [];
  return comp.relatedComparisonSlugs
    .map((relatedSlug) => getComparisonBySlug(relatedSlug))
    .filter((c): c is Comparison => c !== undefined);
}
