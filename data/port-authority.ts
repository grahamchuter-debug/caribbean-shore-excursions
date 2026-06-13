import type { PortAuthorityContent } from "./types";
import { additionalPortAuthority } from "./additional-port-authority";

const authority: Record<string, PortAuthorityContent> = {
  "st-thomas": {
    seoTitle: "St. Thomas Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Plan St. Thomas cruise port days with authority guides to beaches, snorkeling, family excursions, private tours, terminal info and links to stthomasshoreexcursion.com.",
    whyVisit: [
      "Magens Bay and Sapphire Beach rank among the Caribbean's finest swim spots",
      "Easy ferry access to St. John and Trunk Bay for a second-island adventure",
      "Charlotte Amalie offers world-class duty-free shopping within walking distance",
      "No tender required. Ships dock at dedicated terminals year-round",
    ],
    bestBeaches: [
      { name: "Magens Bay", description: "Calm horseshoe bay with facilities, chair rentals, and taxi access from both terminals." },
      { name: "Sapphire Beach", description: "Excellent snorkeling reef just east of Red Hook: popular half-day beach and snorkel combo." },
      { name: "Coki Beach", description: "Lively beach beside Coral World with easy reef entry and equipment rentals." },
    ],
    bestForFamilies: [
      "Magens Bay beach day with calm shallow water and on-site amenities",
      "Coral World Ocean Park with touch pools and underwater observatory",
      "St. John ferry day trip with Trunk Bay snorkel for older children",
      "Paradise Point Skyride for panoramic harbor views without long travel",
    ],
    bestForCouples: [
      "Private catamaran snorkel sail to outer cays with open bar",
      "Sunset dinner in Frenchtown or waterfront Charlotte Amalie",
      "St. John day trip to secluded beaches on the north shore",
      "Couples massage and beach club packages at resort beaches",
    ],
    snorkelling: [
      { site: "Trunk Bay (St. John)", description: "Underwater trail in Virgin Islands National Park: best reached via ferry from St. Thomas." },
      { site: "Sapphire Beach Reef", description: "Healthy reef close to shore with parrotfish, sergeant majors, and easy access for beginners." },
      { site: "Buck Island (boat tour)", description: "Guided snorkel at a protected cay with excellent visibility on calm days." },
    ],
    privateTours: [
      { name: "Private island-hopping charter", description: "Custom boat itinerary covering St. Thomas and St. John beaches on your schedule." },
      { name: "Private taxi island tour", description: "Flexible stops at Mountain Top, Magens Bay, and Red Hook ferry terminal." },
      { name: "Private snorkel charter", description: "Small-group boat to less-visited reefs with gear and captain included." },
    ],
  },
  cozumel: {
    seoTitle: "Cozumel Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Compare Cozumel shore excursions, beaches, reef snorkeling, family tours and private options. Terminal guide plus cozumelcruiseexcursion.com specialist link.",
    whyVisit: [
      "Mesoamerican Barrier Reef delivers world-class snorkeling and diving visibility",
      "Mayan ruins, beach clubs, and catamaran sails suit every cruise passenger style",
      "Three downtown piers put restaurants and shopping within easy reach",
      "Mexico's busiest cruise port with the widest independent excursion selection",
    ],
    bestBeaches: [
      { name: "Playa Palancar", description: "Soft sand and clear water on the southwest coast: pairs well with reef snorkel tours." },
      { name: "Chankanaab Beach", description: "Beach park with snorkeling lagoon, facilities, and dolphin programs." },
      { name: "El Cielo sandbar", description: "Shallow turquoise sandbar reached by catamaran: starfish and crystal-clear water." },
    ],
    bestForFamilies: [
      "Chankanaab Beach Park with snorkeling lagoon and cultural exhibits",
      "Glass-bottom boat tours for non-swimmers to see reef life",
      "Pirate ship snorkel adventures with kid-friendly guides",
      "Downtown San Miguel lunch and plaza stroll from Punta Langosta pier",
    ],
    bestForCouples: [
      "Private El Cielo catamaran with champagne and snorkel stops",
      "Couples beach massage at a south-shore beach club",
      "Sunset sail along the Cozumel coast with open bar",
      "Private Jeep tour to Punta Sur lighthouse and secluded beaches",
    ],
    snorkelling: [
      { site: "Palancar Reef", description: "Iconic coral formations with exceptional visibility and guided boat access." },
      { site: "Columbia Reef", description: "Deeper reef sections with larger marine species: popular second snorkel stop." },
      { site: "Chankanaab Lagoon", description: "Protected in-park lagoon ideal for beginners and families." },
    ],
    privateTours: [
      { name: "Private reef snorkel boat", description: "Captain-led two-stop snorkel itinerary avoiding large group boats." },
      { name: "Private Tulum and beach combo", description: "Dedicated vehicle and guide to clifftop ruins plus Riviera Maya beach time." },
      { name: "Private San Gervasio and island tour", description: "Mayan ruins and scenic Cozumel highlights at your own pace." },
    ],
  },
  aruba: {
    seoTitle: "Aruba Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Aruba cruise port authority guide covering Eagle Beach, snorkeling, Arikok tours, family excursions, private options and arubashoreexcursion.com.",
    whyVisit: [
      "Year-round sunshine outside the hurricane belt makes Aruba a reliable port",
      "Eagle Beach and Palm Beach consistently rank among the world's best",
      "Arikok National Park offers unique desert-island landscapes and natural pools",
      "Walkable Oranjestad with Dutch-Caribbean architecture right from the pier",
    ],
    bestBeaches: [
      { name: "Eagle Beach", description: "Wide white sand with divi-divi trees: less commercial than Palm Beach." },
      { name: "Palm Beach", description: "Two-mile strip with water sports, beach bars, and resort amenities." },
      { name: "Baby Beach", description: "Shallow lagoon on the south coast: excellent for families and beginner snorkelers." },
    ],
    bestForFamilies: [
      "De Palm Island all-inclusive with water park and snorkel areas",
      "Baby Beach shallow lagoon for young swimmers",
      "Butterfly Farm and donkey sanctuary visits combined with beach time",
      "Snorkel sail with life jackets and calm reef stops",
    ],
    bestForCouples: [
      "Private sunset catamaran along Aruba's west coast",
      "Couples massage and cabana at Eagle Beach club",
      "Private 4x4 to Natural Pool and cliff viewpoints in Arikok",
      "Romantic dinner in Oranjestad before returning to ship",
    ],
    snorkelling: [
      { site: "Antilla Shipwreck", description: "Shallow WWII wreck site popular on snorkel and dive boats." },
      { site: "Boca Catalina", description: "Calm bay with turtles and reef fish: accessible from shore or boat." },
      { site: "Mangel Halto", description: "Protected reef with mangroves: best with a local guide." },
    ],
    privateTours: [
      { name: "Private island highlights tour", description: "Custom route covering California Lighthouse, beaches, and Oranjestad." },
      { name: "Private snorkel charter", description: "Small boat to Antilla wreck and Boca Catalina on your timeline." },
      { name: "Private Arikok 4x4", description: "Off-road adventure to caves, natural pool, and desert viewpoints." },
    ],
  },
  "grand-cayman": {
    seoTitle: "Grand Cayman Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Grand Cayman authority guide to Stingray City, Seven Mile Beach, snorkeling, tender port tips, family tours and grandcaymanshoreexcursion.com.",
    whyVisit: [
      "Stingray City is a signature Caribbean experience found nowhere else",
      "Seven Mile Beach offers pristine white sand and clear Caribbean water",
      "Excellent snorkeling and diving with strong English-speaking infrastructure",
      "George Town duty-free shopping steps from the tender landing",
    ],
    bestBeaches: [
      { name: "Seven Mile Beach", description: "Iconic stretch of white sand: use organized transport to public access points." },
      { name: "Starfish Point", description: "Shallow water with starfish: combine with Stingray City on many tours." },
      { name: "Rum Point", description: "Relaxed north-side beach with hammocks: longer transfer but worth the trip." },
    ],
    bestForFamilies: [
      "Stingray City sandbar with waist-deep water and guide supervision",
      "Cayman Turtle Centre with touch tanks and snorkel lagoon",
      "Submarine or semi-submarine reef tours for non-swimmers",
      "Seven Mile Beach break with chair rentals and calm sections",
    ],
    bestForCouples: [
      "Private Stingray City charter with smaller group experience",
      "Couples catamaran snorkel sail along the west coast",
      "Private Seven Mile Beach cabana with champagne service",
      "Bioluminescent kayak tour on evening calls (seasonal)",
    ],
    snorkelling: [
      { site: "Cemetery Reef", description: "Accessible reef with coral heads and tropical fish near George Town." },
      { site: "Stingray City depth", description: "Snorkel around the deeper sandbar edges while others interact with rays." },
      { site: "Kittiwake wreck", description: "Sunken vessel creating an artificial reef for snorkel and dive boats." },
    ],
    privateTours: [
      { name: "Private Stingray City boat", description: "Early-morning departure to beat crowds at the sandbar." },
      { name: "Private island tour", description: "Flexible taxi or van itinerary covering beaches, Hell, and Botanic Park." },
      { name: "Private snorkel charter", description: "Captain-selected reef sites based on daily conditions." },
    ],
  },
  nassau: {
    seoTitle: "Nassau Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Nassau cruise port authority guide to Atlantis, beaches, snorkeling, family excursions, private tours and nassaushoreexcursions.com specialist link.",
    whyVisit: [
      "Downtown Nassau and Paradise Island are immediately accessible from the cruise pier",
      "Atlantis Aquaventure is one of the Caribbean's top family excursion days",
      "Bahamian culture, colourful architecture, and straw market shopping on foot",
      "Catamaran snorkel sails and Blue Lagoon island trips suit shorter port days",
    ],
    bestBeaches: [
      { name: "Cable Beach", description: "Popular resort strip with calm water and beach bar options." },
      { name: "Cabbage Beach (Paradise Island)", description: "Atlantis resort beach: access via day pass or excursion." },
      { name: "Junkanoo Beach", description: "Close to downtown with local food vendors and calm shallows." },
    ],
    bestForFamilies: [
      "Atlantis Aquaventure water park day pass on Paradise Island",
      "Blue Lagoon Island with dolphins, sea lions, and beach time",
      "Ardastra Gardens flamingo show and petting zoo",
      "Resort day pass with pool and beach access",
    ],
    bestForCouples: [
      "Private catamaran snorkel sail to Rose Island",
      "Couples resort day pass with cabana on Paradise Island",
      "Historic Nassau walking tour and waterfront lunch",
      "Sunset harbour cruise with Bahamian cocktails",
    ],
    snorkelling: [
      { site: "Rose Island", description: "Short boat ride from Nassau with healthy reef and clear water." },
      { site: "Goulding Cay reefs", description: "Popular catamaran snorkel stop with reef fish and coral heads." },
      { site: "Stuart Cove dive sites", description: "Shallow reef sections suitable for snorkel groups." },
    ],
    privateTours: [
      { name: "Private Nassau highlights tour", description: "Custom stops at Queen's Staircase, Fort Fincastle, and viewpoints." },
      { name: "Private snorkel charter", description: "Rose Island and reef stops with small-group boat." },
      { name: "Private Atlantis and beach day", description: "Coordinated transfers and timed Aquaventure access." },
    ],
  },
  roatan: {
    seoTitle: "Roatán Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Roatán authority guide to West Bay Beach, reef snorkeling, zip-lines, family eco-tours, private options and roatan-excursion-planner.com.",
    whyVisit: [
      "Mesoamerican Barrier Reef snorkeling rivals Cozumel at lower prices",
      "West Bay Beach is one of the Caribbean's best-value white-sand beaches",
      "Mahogany Bay offers on-site amenities; Coxen Hole is closer to West Bay",
      "Eco-adventures including zip-lines, sloths, and iguanas suit active families",
    ],
    bestBeaches: [
      { name: "West Bay Beach", description: "Stunning white sand and calm water: short taxi from either cruise port." },
      { name: "Mahogany Bay Beach", description: "Free beach at the cruise center: convenient but crowded on busy days." },
      { name: "Tabyana Beach", description: "West Bay alternative with snorkel reef directly offshore." },
    ],
    bestForFamilies: [
      "Gumbalimba Park with capuchin monkeys, iguanas, and zip-line",
      "West Bay Beach day with shallow water and beach clubs",
      "Glass-bottom boat for reef viewing without swimming",
      "Dolphin encounter programs at approved facilities",
    ],
    bestForCouples: [
      "Private West Bay beach cabana with snorkel offshore",
      "Couples catamaran to remote reef and beach stops",
      "Private island tour with West End village and viewpoints",
      "Sunset sail from French Harbour or West End",
    ],
    snorkelling: [
      { site: "West Bay Reef", description: "Accessible reef from shore at Tabyana with excellent marine life." },
      { site: "Blue Channel", description: "Deeper wall snorkel popular on boat tours." },
      { site: "Starfish Alley", description: "Shallow sandy area with starfish and calm conditions." },
    ],
    privateTours: [
      { name: "Private West Bay and snorkel tour", description: "Dedicated driver and timed beach club access." },
      { name: "Private reef snorkel boat", description: "Two-stop snorkel itinerary with small-group captain." },
      { name: "Private island highlights", description: "Custom cultural stops and beach time across Roatán." },
    ],
  },
  "st-maarten": {
    seoTitle: "St. Maarten Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "St. Maarten cruise port guide to Maho Beach, Orient Bay, catamaran sails, dual-nation tours, private options and stmaartenshoreexcursions.com.",
    whyVisit: [
      "Dual Dutch-French nation culture in a compact 37-square-mile island",
      "Maho Beach plane spotting is a bucket-list Caribbean experience",
      "Orient Bay beach clubs on the French side offer lively beach day options",
      "Excellent catamaran snorkel sails and duty-free Philipsburg shopping",
    ],
    bestBeaches: [
      { name: "Orient Bay", description: "French side beach with clubs, restaurants, and water sports." },
      { name: "Maho Beach", description: "Famous aircraft landing beach: follow safety guidelines at the fence line." },
      { name: "Great Bay Beach", description: "Near Philipsburg and the cruise pier: convenient for a quick swim." },
    ],
    bestForFamilies: [
      "Great Bay Beach and Philipsburg shopping within water-taxi reach",
      "Maho Beach plane spotting with supervised viewing areas",
      "Catamaran snorkel sail with lunch and open bar",
      "French side island tour with Orient Bay beach stop",
    ],
    bestForCouples: [
      "Private Orient Bay cabana with French-side lunch",
      "Couples catamaran to Tintamarre islet for secluded snorkel",
      "Private dual-nation tour covering Marigot and Grand Case dining",
      "Sunset sail along the west coast with cocktails",
    ],
    snorkelling: [
      { site: "Tintamarre Cay", description: "Uninhabited islet with clear water: reached by catamaran tours." },
      { site: "Creole Rock", description: "Popular snorkel stop on sailing excursions near Grand Case." },
      { site: "Mullet Bay", description: "Calm reef area suitable for beginner snorkelers." },
    ],
    privateTours: [
      { name: "Private dual-nation island tour", description: "Custom Dutch and French side stops with beach time." },
      { name: "Private catamaran charter", description: "Snorkel, sail, and beach itinerary for your group only." },
      { name: "Private Maho and Orient Bay tour", description: "Timed plane spotting plus French beach club access." },
    ],
  },
  "puerto-plata": {
    seoTitle: "Puerto Plata Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Puerto Plata and Amber Cove authority guide to waterfalls, cable car views, beaches, family tours, private options and puertoplatacruiseexcursion.com.",
    whyVisit: [
      "Teleférico cable car to Mount Isabel de Torres offers dramatic Atlantic views",
      "27 Charcos waterfall adventure is a standout active excursion",
      "Amber Cove provides a secure port base with pools and transport hubs",
      "Colonial Fort San Felipe and Victorian architecture on the Amber Coast",
    ],
    bestBeaches: [
      { name: "Playa Dorada", description: "Resort beach strip with calm Atlantic waters and facilities." },
      { name: "Cofresí Beach", description: "Near Puerto Plata town with local restaurants and calm sections." },
      { name: "Amber Cove beach", description: "On-port waterfront area: convenient but limited compared to excursion beaches." },
    ],
    bestForFamilies: [
      "Teleférico cable car with botanical gardens at the summit",
      "Ocean World marine park with dolphin programs",
      "Amber Cove pool and port village for younger children",
      "Colonial city walking tour with Fort San Felipe",
    ],
    bestForCouples: [
      "Private 27 Charcos waterfall adventure for two with guide",
      "Couples cable car and summit gardens with Atlantic views",
      "Private Amber Coast coastal drive and beach club",
      "Horseback ride on Playa Dorada at sunset",
    ],
    snorkelling: [
      { site: "Sosúa Bay", description: "Protected bay north of Puerto Plata with reef fish and calm entry." },
      { site: "Cayo Arena (boat tour)", description: "Small sand cay with snorkel stops on organised boat trips." },
      { site: "Playa Dorada reef sections", description: "Near-shore reef areas on guided snorkel excursions." },
    ],
    privateTours: [
      { name: "Private Amber Coast highlights", description: "Cable car, fort, and city stops at your own pace." },
      { name: "Private waterfall adventure", description: "Dedicated guide for 27 Charcos with timed port return." },
      { name: "Private Sosúa and beach tour", description: "Snorkel and beach club combination north of the port." },
    ],
  },
  "costa-maya": {
    seoTitle: "Costa Maya Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Costa Maya cruise port authority guide to Chacchoben ruins, Mahahual beach, snorkeling, family tours, private options and costamayashoreexcursions.com.",
    whyVisit: [
      "Purpose-built port village with shops, dining, and saltwater pool at the pier",
      "Chacchoben Mayan ruins are less crowded than Tulum with impressive pyramids",
      "Mahahual village offers authentic beach town atmosphere 15 minutes away",
      "Gateway to Bacalar Lagoon and lesser-known Yucatán attractions",
    ],
    bestBeaches: [
      { name: "Mahahual Beach", description: "Palapa restaurants, snorkel operators, and relaxed village atmosphere." },
      { name: "Mayan Beach Club", description: "Beach club with facilities and calm water near Mahahual." },
      { name: "Uvero Beach", description: "Quieter stretch south of Mahahual with clear water." },
    ],
    bestForFamilies: [
      "Chacchoben ruins tour with manageable walking and jungle shade",
      "Mahahual beach break with shallow water and local food",
      "Port village pool and snorkel lagoon for shorter port days",
      "Kayak and snorkel combo in protected Mahahual waters",
    ],
    bestForCouples: [
      "Private Chacchoben and Mahahual beach combo",
      "Couples catamaran snorkel along the Costa Maya coast",
      "Private Bacalar Lagoon day trip with seven-colour water views",
      "Beach club cabana day in Mahahual village",
    ],
    snorkelling: [
      { site: "Mahahual Reef", description: "Near-shore reef with coral heads accessible by boat or kayak tours." },
      { site: "Banco Chinchorro (boat tour)", description: "Premium snorkel expeditions to remote atoll on longer tours." },
      { site: "Port village lagoon", description: "Controlled snorkel area for beginners at the cruise port." },
    ],
    privateTours: [
      { name: "Private Chacchoben ruins tour", description: "Dedicated coach and guide avoiding large group timing." },
      { name: "Private Mahahual beach day", description: "Timed beach club access and village lunch on your schedule." },
      { name: "Private Bacalar expedition", description: "Full-day lagoon and fort visit with private transport." },
    ],
  },
  "puerto-limon": {
    seoTitle: "Puerto Limón Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Puerto Limón cruise port authority guide to sloth sanctuaries, Veragua rainforest, Cahuita snorkel, family wildlife tours, private options and puertolimonshoreexcursions.com.",
    whyVisit: [
      "Costa Rica's Caribbean coast delivers sloth, monkey, and tropical bird encounters in primary rainforest",
      "Veragua Rainforest Park aerial tram and zip-lines suit active adventure seekers",
      "Cahuita National Park pairs reef snorkel with protected Caribbean beach time",
      "Direct pier docking at Limón Cruise Terminal with no tender required",
    ],
    bestBeaches: [
      { name: "Cahuita National Park Beach", description: "Protected Caribbean sand with reef snorkel access on organized park tours." },
      { name: "Playa Bonita", description: "Calm swim spot south of Limón popular on combination culture-and-beach excursions." },
      { name: "Puerto Viejo Beach (excursion)", description: "Laid-back southern coast stretch on longer full-day tours from the cruise pier." },
    ],
    bestForFamilies: [
      "Sloth and wildlife sanctuary tours with guaranteed animal viewing for all ages",
      "Veragua Rainforest aerial tram for non-hikers wanting canopy views",
      "Banana plantation tour with educational farm visit and cultural storytelling",
      "Cahuita snorkel with calm shallow reef sections for beginner swimmers",
    ],
    bestForCouples: [
      "Private sloth sanctuary tour with rainforest walk and photography time",
      "Couples zip-line and waterfall adventure at Veragua Rainforest Park",
      "Private Cahuita reef snorkel and beach picnic on the southern coast",
      "Chocolate and coffee tasting tour through Limón's Caribbean heritage",
    ],
    snorkelling: [
      { site: "Cahuita National Park Reef", description: "Protected Caribbean reef with coral heads and tropical fish on guided park tours." },
      { site: "Manzanillo Reef (boat tour)", description: "Southern coast snorkel stops on longer combination excursions from Limón." },
      { site: "In-shore reef patches", description: "Seasonal near-shore snorkel on calm days; Cahuita remains the most reliable option." },
    ],
    privateTours: [
      { name: "Private sloth sanctuary and rainforest tour", description: "Custom wildlife stops with flexible sanctuary timing and photography breaks." },
      { name: "Private Veragua adventure day", description: "Dedicated guide for aerial tram, zip-line, and waterfall trail at your pace." },
      { name: "Private Cahuita snorkel and coast tour", description: "Small-group reef snorkel with beach time and Limón cultural highlights." },
    ],
  },
  curacao: {
    seoTitle: "Curaçao Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Curaçao cruise port authority guide to Willemstad culture, reef diving, snorkeling, family tours, private options and curacaoshoreexcursions.com.",
    whyVisit: [
      "UNESCO-listed Willemstad waterfront is walkable directly from the cruise pier",
      "Superior diving and snorkeling at Tugboat Beach, Director's Bay, and Playa Kalki",
      "Authentic Dutch-Caribbean culture distinct from resort-style Aruba",
      "Outside the hurricane belt with reliable year-round port conditions",
    ],
    bestBeaches: [
      { name: "Grote Knip (Kenepa Beach)", description: "Turquoise cove on the west coast: reached by taxi or island tour." },
      { name: "Playa Porto Mari", description: "Double reef snorkel beach with facilities and calm swimming areas." },
      { name: "Mambo Beach", description: "Lively beach boulevard with restaurants and loungers near Willemstad." },
    ],
    bestForFamilies: [
      "Curaçao Sea Aquarium with touch tanks and dolphin programs",
      "Calm bay snorkel at Boca Catalina suitable for beginners",
      "Willemstad walking tour with Queen Emma Bridge and floating market",
      "Hato Caves exploration with guided underground tours",
    ],
    bestForCouples: [
      "Willemstad waterfront dinner in Pietermaai district",
      "Private diving or snorkel charter to secluded reef sites",
      "Sunset sail along the west coast with open bar",
      "Beach club afternoon at Jan Thiel or Mambo Beach",
    ],
    snorkelling: [
      { site: "Tugboat Beach", description: "Shallow wreck snorkel with excellent visibility: Curaçao's signature site." },
      { site: "Director's Bay", description: "Protected reef with healthy coral and abundant tropical fish." },
      { site: "Playa Kalki", description: "West-coast reef site popular with divers and snorkelers." },
    ],
    privateTours: [
      { name: "Private Willemstad cultural tour", description: "Custom walking and driving route through colonial districts." },
      { name: "Private west-coast beach hop", description: "Grote Knip, Porto Mari, and cliff viewpoints on your schedule." },
      { name: "Private snorkel and dive charter", description: "Boat to Tugboat Beach and outer reef sites with dedicated guide." },
    ],
  },
  "ocho-rios": {
    seoTitle: "Ocho Rios Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Ocho Rios Jamaica authority guide to Dunn's River Falls, river rafting, rainforest adventures, family tours and ochoriosshoreexcursions.com.",
    whyVisit: [
      "Dunn's River Falls climb is one of the Caribbean's most iconic experiences",
      "Mystic Mountain bobsled and zip-line sit minutes from the cruise terminal",
      "Martha Brae bamboo rafting offers a peaceful contrast to waterfall adventures",
      "Lush north-coast rainforest setting distinct from typical beach ports",
    ],
    bestBeaches: [
      { name: "Dunn's River Falls Beach", description: "Sandy area at the base of the falls: included with falls climb tours." },
      { name: "Mahogany Beach", description: "Calm cove near the cruise port with chair rentals." },
      { name: "James Bond Beach (Oracabessa)", description: "Scenic cove featured in films: reached on island tours." },
    ],
    bestForFamilies: [
      "Dunn's River Falls guided climb in human chain formation",
      "Mystic Mountain rainforest bobsled and sky explorer",
      "Dolphin Cove lagoon encounters with supervised programs",
      "River tubing on calmer sections for older children",
    ],
    bestForCouples: [
      "Private Martha Brae bamboo raft ride with rum punch",
      "Couples Dunn's River Falls climb with private guide",
      "Private Blue Hole hidden waterfall swim (active adventure)",
      "Sunset catamaran along the Ocho Rios coast",
    ],
    snorkelling: [
      { site: "Runaway Bay reef", description: "North-coast reef sections on combined snorkel and beach tours." },
      { site: "Dunn's River marine park", description: "Occasional snorkel stops on combination boat tours." },
      { site: "Montego Bay marine park (longer tour)", description: "Premium snorkel on full-day west-coast extensions." },
    ],
    privateTours: [
      { name: "Private Dunn's River Falls tour", description: "Early arrival to avoid crowds with dedicated guide." },
      { name: "Private Martha Brae rafting", description: "Private bamboo raft with personal poling guide." },
      { name: "Private north-coast highlights", description: "Custom route covering falls, viewpoints, and local lunch." },
    ],
  },
  falmouth: {
    seoTitle: "Falmouth Shore Excursions & Cruise Port Authority Guide",
    seoDescription:
      "Falmouth Jamaica authority guide to Martha Brae rafting, historic town walks, Good Hope Estate, Luminous Lagoon and falmouthshoreexcursions.com.",
    whyVisit: [
      "Best access to Martha Brae bamboo rafting on Jamaica's north coast",
      "Historic Georgian town center walkable from the cruise pier",
      "Quieter, less commercial atmosphere than Ocho Rios",
      "Gateway to Luminous Lagoon bioluminescent evening tours",
    ],
    bestBeaches: [
      { name: "Burwood Beach", description: "Public beach near Falmouth with calm water: reached by short taxi ride." },
      { name: "Good Hope Estate beach", description: "Estate grounds with river access and adventure activities." },
      { name: "Runaway Bay (excursion)", description: "North-coast beach sections on combination tours from Falmouth." },
    ],
    bestForFamilies: [
      "Martha Brae bamboo rafting, peaceful and suitable for mixed ages",
      "Good Hope Estate zip-line and river tubing for active families",
      "Historic Falmouth walking tour with colonial architecture",
      "Luminous Lagoon evening boat tour for older children and teens",
    ],
    bestForCouples: [
      "Private Martha Brae raft ride with rum punch and jungle scenery",
      "Historic Falmouth stroll followed by plantation lunch",
      "Luminous Lagoon romantic evening kayak tour",
      "Private Good Hope Estate adventure with great house tour",
    ],
    snorkelling: [
      { site: "Runaway Bay reef (tour)", description: "North-coast reef sections on longer combination excursions." },
      { site: "Montego Bay marine park (tour)", description: "Premium snorkel reached on full-day west-coast tours." },
      { site: "Luminous Lagoon", description: "Unique bioluminescent evening experience rather than reef snorkel." },
    ],
    privateTours: [
      { name: "Private Martha Brae rafting", description: "Dedicated bamboo raft with personal poling guide." },
      { name: "Private Falmouth heritage walk", description: "Guided colonial town tour at your own pace." },
      { name: "Private north-coast highlights", description: "Custom route covering rafting, estate, and lagoon options." },
    ],
  },
  ...additionalPortAuthority,
};

export function getPortAuthority(slug: string): PortAuthorityContent | undefined {
  return authority[slug];
}

export function getAllPortAuthoritySlugs(): string[] {
  return Object.keys(authority);
}
