import type { CruiseLine } from "./types";

export const cruiseLines: CruiseLine[] = [
  {
    slug: "royal-caribbean",
    pageSlug: "royal-caribbean-shore-excursions",
    name: "Royal Caribbean",
    tagline: "Big-ship Caribbean cruising with high-energy port days",
    seoTitle: "Royal Caribbean Shore Excursions: Best Caribbean Ports and Tours",
    metaDescription:
      "Plan Royal Caribbean shore excursions with port-specific recommendations for Cozumel, St. Thomas, Roatan, Nassau, and Aruba, plus booking and timing advice.",
    overview:
      "Royal Caribbean runs one of the deepest Caribbean programs, from weekend Bahamas sailings to Southern Caribbean loops on Oasis, Quantum, and Voyager class ships. Most itineraries are built around activity-forward ports where beach clubs, reef trips, and all-terrain tours can be combined with short city visits.",
    overviewDetail:
      "Royal Caribbean passengers usually have long excursion menus, but the best slots can disappear early when multiple megaships call the same port. Cozumel, St. Thomas, and Roatan often see heavy morning demand for water activities, while Nassau and Aruba are easier to split between independent beach time and pre-booked tours.",
    caribbeanRoutes: [
      "3-4 night Bahamas sailings from Miami and Port Canaveral",
      "7-night Eastern Caribbean routes with St. Thomas and St. Maarten",
      "7-night Western Caribbean loops via Cozumel, Roatan, and Costa Maya",
      "7-8 night Southern Caribbean calls including Aruba and Curacao",
      "10-14 night mixed Caribbean itineraries from Florida and San Juan",
    ],
    popularItineraries: [
      {
        name: "Eastern Caribbean Classic",
        duration: "7 nights",
        ports: "St. Thomas, St. Maarten, Nassau",
        description:
          "Pairs beach and shopping in Charlotte Amalie and Philipsburg with a shorter Nassau stop best used for waterpark or reef outings.",
      },
      {
        name: "Western Reef Adventure",
        duration: "7 nights",
        ports: "Cozumel, Roatan, Costa Maya",
        description:
          "Popular for snorkel and dive-focused travelers, with easy reef access from all three calls and short transfer times in Cozumel.",
      },
      {
        name: "Southern Sun Route",
        duration: "8 nights",
        ports: "Aruba, Curacao, St. Maarten",
        description:
          "Ideal for reliable beach weather and colorful Dutch Caribbean town stops, with Aruba often offering the longest beach-day window.",
      },
      {
        name: "Bahamas and Perfect Day Mix",
        duration: "4 nights",
        ports: "Nassau, Nassau area private island stop",
        description:
          "A short itinerary centered on high-energy resort style experiences and quick-turn excursions close to port.",
      },
    ],
    popularPorts: [
      { slug: "cozumel", name: "Cozumel" },
      { slug: "st-thomas", name: "St. Thomas" },
      { slug: "roatan", name: "Roatan" },
      { slug: "nassau", name: "Nassau" },
      { slug: "aruba", name: "Aruba" },
      { slug: "st-maarten", name: "St. Maarten" },
    ],
    recommendedExcursions: [
      {
        name: "El Cielo Catamaran and Reef Snorkel",
        portSlug: "cozumel",
        description:
          "Fast boat ride to Cozumel's protected southern reefs and shallow El Cielo sandbar for combined snorkel and swim time.",
        duration: "4.5 hours",
      },
      {
        name: "Magens Bay and Skyline Drive",
        portSlug: "st-thomas",
        description:
          "Classic St. Thomas pairing of island overlook stops with relaxed beach time at Magens Bay.",
        duration: "4 hours",
      },
      {
        name: "West Bay Beach Break and Snorkel",
        portSlug: "roatan",
        description:
          "Short transfer from Mahogany Bay to West Bay for reef snorkeling directly off the beach.",
        duration: "5 hours",
      },
      {
        name: "Blue Lagoon Beach and Dolphins",
        portSlug: "nassau",
        description:
          "Boat transfer excursion popular with families who want shallow water, controlled facilities, and optional dolphin programs.",
        duration: "4.5 hours",
      },
      {
        name: "Arikok Jeep and Natural Pool Adventure",
        portSlug: "aruba",
        description:
          "Rugged off-road route across Aruba's north coast with swim stop conditions dependent on sea state.",
        duration: "4 hours",
      },
    ],
    familyRecommendations: [
      {
        title: "Choose shorter transfers in Roatan",
        portSlug: "roatan",
        advice:
          "Families with younger children do best at West Bay or wildlife parks under 30 minutes from port to avoid losing beach time.",
      },
      {
        title: "Book beach clubs with facilities in Cozumel",
        portSlug: "cozumel",
        advice:
          "Select day clubs that include shade, lockers, and easy taxi return so children can reset between water activities.",
      },
      {
        title: "Use controlled water experiences in Nassau",
        portSlug: "nassau",
        advice:
          "Boat-access islands and supervised lagoons are easier for mixed-age groups than open-ocean beach plans on windy days.",
      },
      {
        title: "Split scenic and beach time in St. Thomas",
        portSlug: "st-thomas",
        advice:
          "A short overlook drive before Magens Bay keeps the day varied without overloading younger travelers.",
      },
    ],
    beachRecommendations: [
      {
        title: "Plan full-day sand time in Aruba",
        portSlug: "aruba",
        advice:
          "Palm and Eagle Beach areas reward early starts; reserve loungers ahead during peak winter sailings.",
      },
      {
        title: "Prioritize west coast beaches in Cozumel",
        portSlug: "cozumel",
        advice:
          "Leeward-side beaches stay calmer and are better for snorkel beginners than exposed eastern shore spots.",
      },
      {
        title: "Use taxi zones efficiently in St. Maarten",
        portSlug: "st-maarten",
        advice:
          "Orient and Maho routes can back up late afternoon, so leave your beach by mid-afternoon for reliable return.",
      },
      {
        title: "Book beach-and-lunch packages in Roatan",
        portSlug: "roatan",
        advice:
          "Bundled transport and meals at West Bay reduce logistics and simplify the walk back to transport pickup points.",
      },
    ],
    adventureRecommendations: [
      {
        title: "Pick reef drift snorkeling in Cozumel",
        portSlug: "cozumel",
        advice:
          "Cozumel's current-assisted reef lines are some of the best in the region for intermediate snorkelers and divers.",
      },
      {
        title: "Use zipline combinations in Roatan",
        portSlug: "roatan",
        advice:
          "Combo tours that add beach time or monkey sanctuaries maximize value on 7-hour Western Caribbean stops.",
      },
      {
        title: "Try ATV coastal routes in Aruba",
        portSlug: "aruba",
        advice:
          "Morning departures are cooler and usually less dusty than midday runs across Aruba's arid interior.",
      },
      {
        title: "Choose power-snorkel in St. Thomas",
        portSlug: "st-thomas",
        advice:
          "Motorized snorkel options help cover more reef area around Coki and neighboring bays when visibility is strong.",
      },
    ],
    comparisonTable: [
      {
        portSlug: "cozumel",
        portName: "Cozumel",
        bestFor: "Reef snorkeling and beach clubs",
        bestExcursion: "El Cielo catamaran snorkel",
        transferTime: "15-25 min",
        rating: "9.4/10",
      },
      {
        portSlug: "st-thomas",
        portName: "St. Thomas",
        bestFor: "Scenic viewpoints and classic beaches",
        bestExcursion: "Magens Bay plus island drive",
        transferTime: "20-35 min",
        rating: "9.1/10",
      },
      {
        portSlug: "roatan",
        portName: "Roatan",
        bestFor: "Value adventure and reef access",
        bestExcursion: "West Bay snorkel and beach break",
        transferTime: "20-40 min",
        rating: "9.0/10",
      },
      {
        portSlug: "aruba",
        portName: "Aruba",
        bestFor: "Reliable sun and wide beaches",
        bestExcursion: "Arikok 4x4 natural pool tour",
        transferTime: "25-40 min",
        rating: "8.9/10",
      },
      {
        portSlug: "nassau",
        portName: "Nassau",
        bestFor: "Resort-day experiences",
        bestExcursion: "Blue Lagoon beach day",
        transferTime: "20-30 min by boat",
        rating: "8.5/10",
      },
    ],
    excursionTips: [
      "In Cozumel, pick marine tours with pier-specific pickup to avoid losing time in taxi lines.",
      "Roatan roads can slow in rain; keep at least a 90-minute buffer before all-aboard.",
      "St. Thomas taxis often fill quickly after 8:30 AM, so pre-arrange return time when you leave port.",
      "Nassau has many same-day offers near the pier, but top beach clubs usually require advance reservations.",
      "Aruba's sun exposure is intense year-round; full-day tours need more water and shade planning than Eastern routes.",
    ],
    bookingTips: [
      "Book Royal Caribbean high-demand snorkel and beach club products 45-75 days pre-sailing.",
      "Use independent operators for flexible beach days, but keep ship-sponsored options for long-transfer excursions.",
      "Watch for cruise planner promotions tied to final payment windows and holiday sales.",
      "When multiple ships call Cozumel, reserve early-morning departures to beat reef crowding.",
      "Confirm whether your chosen pier is International, Puerta Maya, or Punta Langosta before booking independent transport.",
    ],
    faqs: [
      {
        question: "Which Royal Caribbean Caribbean itinerary is best for first-timers?",
        answer:
          "A 7-night Eastern Caribbean route with St. Thomas and St. Maarten is a balanced first choice, offering easy logistics, good beaches, and varied shore options.",
      },
      {
        question: "Are Royal Caribbean excursions in Cozumel easy to do independently?",
        answer:
          "Yes for beach clubs and town visits, but marine trips to El Cielo and southern reefs are smoother with pre-booked operators due to boat capacity limits.",
      },
      {
        question: "How early should I reserve Royal Caribbean shore tours?",
        answer:
          "Reserve top-tier tours 1-2 months ahead, especially during winter and spring break sailings when large ship loads fill inventory quickly.",
      },
      {
        question: "Is Roatan or Nassau better on Royal Caribbean for families?",
        answer:
          "Roatan is better for beach-and-snorkel families, while Nassau works well for controlled resort-style day passes and younger children.",
      },
      {
        question: "Do Royal Caribbean Caribbean ports usually allow DIY beach days?",
        answer:
          "Most do. Cozumel, St. Thomas, Aruba, and Nassau all support independent taxi-based beach planning if you leave enough return-time margin.",
      },
    ],
  },
  {
    slug: "carnival",
    pageSlug: "carnival-shore-excursions",
    name: "Carnival Cruise Line",
    tagline: "Value-focused Caribbean itineraries with easy port access",
    seoTitle: "Carnival Shore Excursions: Best Caribbean Ports and Day Tours",
    metaDescription:
      "Find the best Carnival shore excursions for Cozumel, Grand Cayman, Roatan, Puerto Plata, and Nassau with practical booking and transfer advice.",
    overview:
      "Carnival runs dense Caribbean deployment from Florida, Texas, and Gulf ports, making it one of the easiest lines for repeat Caribbean travelers. Its port mix leans toward high-value beach, reef, and culture stops with broad excursion price ranges for families and groups.",
    overviewDetail:
      "Carnival sailings often include shorter port windows on 4-6 night routes, so efficient transfers matter more than ambitious multi-stop plans. On longer 7-8 night Western and Eastern routes, there is enough time for full-day activities like Stingray City, Chacchoben ruins, and inland adventure parks.",
    caribbeanRoutes: [
      "4-5 night Bahamas and Western Caribbean runs from Miami and Port Canaveral",
      "6-night Western Caribbean routes from Galveston and New Orleans",
      "7-night Eastern Caribbean loops featuring Nassau and Amber Cove",
      "7-night Western Caribbean calls at Cozumel, Grand Cayman, and Roatan",
      "8-night Southern Caribbean options from Florida homeports",
    ],
    popularItineraries: [
      {
        name: "Western Crowd Favorite",
        duration: "7 nights",
        ports: "Cozumel, Grand Cayman, Roatan",
        description:
          "A classic first repeat itinerary with reef excursions in all three ports and reliable beach fallback options.",
      },
      {
        name: "Eastern and Amber Cove",
        duration: "7 nights",
        ports: "Nassau, Puerto Plata, St. Thomas",
        description:
          "Combines low-logistics Nassau with Dominican Republic inland options and a stronger scenic day in St. Thomas.",
      },
      {
        name: "Yucatan Duo",
        duration: "6 nights",
        ports: "Cozumel, Costa Maya",
        description:
          "Great for travelers who want two different Mexico port styles: reef-focused Cozumel and ruins-plus-beach Costa Maya.",
      },
      {
        name: "Compact Bahamas Escape",
        duration: "4 nights",
        ports: "Nassau and nearby private destination day",
        description:
          "Best used for easy beach plans, waterparks, and low-risk half-day excursions close to ship.",
      },
    ],
    popularPorts: [
      { slug: "cozumel", name: "Cozumel" },
      { slug: "grand-cayman", name: "Grand Cayman" },
      { slug: "roatan", name: "Roatan" },
      { slug: "puerto-plata", name: "Puerto Plata" },
      { slug: "nassau", name: "Nassau" },
      { slug: "costa-maya", name: "Costa Maya" },
      { slug: "puerto-limon", name: "Puerto Limón" },
    ],
    recommendedExcursions: [
      {
        name: "Stingray City Sandbar and Snorkel",
        portSlug: "grand-cayman",
        description:
          "High-success Grand Cayman signature featuring shallow-water stingray interaction with an added reef snorkel segment.",
        duration: "3.5 hours",
      },
      {
        name: "Mayan Ruins and Beach Combo",
        portSlug: "costa-maya",
        description:
          "Balanced history-and-swim day that starts at Chacchoben and ends with a shorter beach stop near the coast.",
        duration: "5.5 hours",
      },
      {
        name: "Rio Damajagua Waterfalls Adventure",
        portSlug: "puerto-plata",
        description:
          "Dominican canyon and waterfall route with guided jumps and slides suited to active travelers.",
        duration: "5 hours",
      },
      {
        name: "West Bay Reef Beach Day",
        portSlug: "roatan",
        description:
          "Simple and cost-effective transfer-based beach package with strong snorkeling conditions in clear weather.",
        duration: "5 hours",
      },
      {
        name: "Cozumel Reef Snorkel and Downtown Return",
        portSlug: "cozumel",
        description:
          "Marine-focused morning followed by optional shopping near the waterfront before returning to the pier.",
        duration: "4 hours",
      },
    ],
    familyRecommendations: [
      {
        title: "Pick half-day options in Grand Cayman",
        portSlug: "grand-cayman",
        advice:
          "Tender operations can shorten usable time, so half-day stingray trips reduce pressure and keep afternoons flexible.",
      },
      {
        title: "Use controlled beaches in Nassau",
        portSlug: "nassau",
        advice:
          "Day passes with changing facilities and food access make Nassau easier for families than fully independent city-beach transfers.",
      },
      {
        title: "Choose low-impact wildlife stops in Roatan",
        portSlug: "roatan",
        advice:
          "Family groups often prefer sanctuary and beach combinations over long inland ATV routes.",
      },
      {
        title: "Reserve shaded transport in Puerto Plata",
        portSlug: "puerto-plata",
        advice:
          "Dominican afternoon heat can be intense, so air-conditioned coach tours are usually better with younger children.",
      },
    ],
    beachRecommendations: [
      {
        title: "Target Seven Mile Beach windows",
        portSlug: "grand-cayman",
        advice:
          "Morning arrivals are smoother before tender return queues build and beach clubs start filling.",
      },
      {
        title: "Use malecon access in Puerto Plata",
        portSlug: "puerto-plata",
        advice:
          "City beaches are better for quick cultural stops than full swim days; pair with a resort or pool pass.",
      },
      {
        title: "Book all-in beach clubs in Cozumel",
        portSlug: "cozumel",
        advice:
          "Bundled food, lockers, and snorkel gear usually beats paying ad hoc along the waterfront.",
      },
      {
        title: "Select reef-adjacent sand in Roatan",
        portSlug: "roatan",
        advice:
          "West Bay lets mixed groups split between swimmers and snorkelers without long separations.",
      },
    ],
    adventureRecommendations: [
      {
        title: "Go canyoning in Puerto Plata",
        portSlug: "puerto-plata",
        advice:
          "Damajagua routes offer one of the most distinct non-beach adventure days on Carnival Eastern and mixed itineraries.",
      },
      {
        title: "Pair ruins with active segments in Costa Maya",
        portSlug: "costa-maya",
        advice:
          "Some operators add bike or lagoon portions after Chacchoben for a stronger full-day profile.",
      },
      {
        title: "Choose drift snorkel operators in Cozumel",
        portSlug: "cozumel",
        advice:
          "Current-assisted drifts are efficient and maximize reef coverage during shorter port calls.",
      },
      {
        title: "Add zipline combos in Roatan",
        portSlug: "roatan",
        advice:
          "Zipline plus beach itineraries provide better value than single-site activities when ship time is limited.",
      },
    ],
    comparisonTable: [
      {
        portSlug: "grand-cayman",
        portName: "Grand Cayman",
        bestFor: "Stingray encounters and clear-water beaches",
        bestExcursion: "Stingray City with snorkel",
        transferTime: "20-35 min (after tender)",
        rating: "9.3/10",
      },
      {
        portSlug: "cozumel",
        portName: "Cozumel",
        bestFor: "Easy reef access at multiple budgets",
        bestExcursion: "South reef catamaran snorkel",
        transferTime: "10-25 min",
        rating: "9.1/10",
      },
      {
        portSlug: "roatan",
        portName: "Roatan",
        bestFor: "Adventure plus beach combinations",
        bestExcursion: "Zipline and West Bay combo",
        transferTime: "20-45 min",
        rating: "8.9/10",
      },
      {
        portSlug: "puerto-plata",
        portName: "Puerto Plata",
        bestFor: "Inland waterfall adventure",
        bestExcursion: "Damajagua waterfalls",
        transferTime: "35-55 min",
        rating: "8.7/10",
      },
      {
        portSlug: "costa-maya",
        portName: "Costa Maya",
        bestFor: "Ruins and cultural day trips",
        bestExcursion: "Chacchoben ruins and beach",
        transferTime: "50-70 min to ruins",
        rating: "8.6/10",
      },
    ],
    excursionTips: [
      "Treat Grand Cayman as a time-sensitive tender port and avoid stacking multiple independent activities.",
      "In Costa Maya, ruins excursions are road-time heavy, so choose operators with explicit return buffers.",
      "Puerto Plata's weather can shift quickly inland; pack water shoes for waterfall and canyon trips.",
      "Cozumel piers are spread out, so verify exact pickup location before booking external boat tours.",
      "Roatan traffic between cruise zones and West End can delay returns in late afternoon.",
    ],
    bookingTips: [
      "Book Carnival excursions early on school-holiday sailings when family inventory sells out first.",
      "Use ship tours for far inland routes like Damajagua and Chacchoben if your call time is under eight hours.",
      "Compare all-inclusive beach package details, since some lower-priced offers exclude transport.",
      "Prioritize earliest departures in tender ports to reduce queue risk and maximize shore time.",
      "Keep one low-logistics backup option for each port in case weather cancels marine activities.",
    ],
    faqs: [
      {
        question: "What are the best Carnival Caribbean ports for first-time cruisers?",
        answer:
          "Cozumel and Grand Cayman are strong first picks because transport is straightforward and top excursions are easy to compare across price points.",
      },
      {
        question: "Is Carnival good for families booking Caribbean excursions?",
        answer:
          "Yes. Carnival offers broad family inventory, especially beach and wildlife combinations, but peak dates require earlier booking to secure child-friendly time slots.",
      },
      {
        question: "Should I book Chacchoben ruins from Costa Maya through the ship?",
        answer:
          "If your port call is short, ship-booked tours provide the safest timing. On longer calls, reputable independent operators can offer smaller groups.",
      },
      {
        question: "How difficult is independent planning in Grand Cayman?",
        answer:
          "It is manageable, but tender logistics reduce margin. Keep plans compact and avoid distant multi-stop itineraries.",
      },
      {
        question: "Which Carnival port is most adventure-focused?",
        answer:
          "Puerto Plata is a standout for active travelers because Damajagua and inland terrain experiences are more varied than typical beach-centric calls.",
      },
    ],
  },
  {
    slug: "norwegian",
    pageSlug: "norwegian-cruise-line-shore-excursions",
    name: "Norwegian Cruise Line",
    tagline: "Freestyle Caribbean cruising with flexible shore-day pacing",
    seoTitle:
      "Norwegian Cruise Line Shore Excursions: Caribbean Port Guide and Tips",
    metaDescription:
      "Explore NCL Caribbean shore excursions in St. Thomas, St. Maarten, Cozumel, Ocho Rios, and Nassau with freestyle-friendly recommendations.",
    overview:
      "Norwegian's freestyle model works especially well in the Caribbean, where passengers often blend one pre-booked highlight with independent time in port. NCL itineraries cover Bahamas short cruises, Eastern Caribbean beach routes, and longer Southern mixes with broad excursion flexibility.",
    overviewDetail:
      "Because NCL guests are less tied to fixed dining times, late-return anxiety is often lower, making beach-and-town split days practical in ports like St. Maarten and Ocho Rios. The best strategy is to anchor each port with one reliable primary activity and leave a small buffer for weather and transport variance.",
    caribbeanRoutes: [
      "4-night Bahamas runs from Miami and Port Canaveral",
      "7-night Eastern Caribbean loops with St. Thomas and St. Maarten",
      "7-night Western Caribbean calls in Cozumel and Roatan",
      "9-11 night Southern Caribbean sailings from Florida and San Juan",
      "Longer Caribbean and Atlantic bridge itineraries from New York",
    ],
    popularItineraries: [
      {
        name: "Eastern Freestyle Core",
        duration: "7 nights",
        ports: "St. Thomas, St. Maarten, Puerto Plata",
        description:
          "Designed for flexible pacing with mixed half-day and full-day excursions and enough time for independent town walks.",
      },
      {
        name: "Western Reef and Falls",
        duration: "7 nights",
        ports: "Cozumel, Roatan, Ocho Rios",
        description:
          "Strong water-and-adventure itinerary that combines reef snorkeling with Jamaica's inland waterfall experiences.",
      },
      {
        name: "Southern Color Route",
        duration: "10 nights",
        ports: "Aruba, Curacao, St. Maarten",
        description:
          "A better fit for travelers who prioritize weather reliability and colorful Dutch Caribbean port culture.",
      },
      {
        name: "Bahamas Flex Escape",
        duration: "4 nights",
        ports: "Nassau and nearby private destination stop",
        description:
          "Short itinerary that rewards lightweight planning and on-the-day decisions around beach and resort options.",
      },
    ],
    popularPorts: [
      { slug: "st-thomas", name: "St. Thomas" },
      { slug: "st-maarten", name: "St. Maarten" },
      { slug: "cozumel", name: "Cozumel" },
      { slug: "ocho-rios", name: "Ocho Rios" },
      { slug: "nassau", name: "Nassau" },
      { slug: "puerto-plata", name: "Puerto Plata" },
    ],
    recommendedExcursions: [
      {
        name: "Dunn's River Falls and Bamboo Beach Club",
        portSlug: "ocho-rios",
        description:
          "Signature Jamaica pairing with guided falls climb and post-activity beach relaxation.",
        duration: "5 hours",
      },
      {
        name: "St. Maarten Island Drive and Maho Stop",
        portSlug: "st-maarten",
        description:
          "Scenic orientation tour that covers French and Dutch sides with an aviation-view beach stop at Maho.",
        duration: "4 hours",
      },
      {
        name: "Salsa, Salsa and Beach in Cozumel",
        portSlug: "cozumel",
        description:
          "Cultural cooking-style excursion blended with a relaxed seaside segment, fitting NCL's flexible crowd.",
        duration: "4.5 hours",
      },
      {
        name: "Catamaran Sail to St. John Waters",
        portSlug: "st-thomas",
        description:
          "Boat-based day featuring snorkeling and coastal sail time in protected waters near the US Virgin Islands.",
        duration: "4 hours",
      },
      {
        name: "Historic Puerto Plata and Rum Tasting",
        portSlug: "puerto-plata",
        description:
          "Moderate-paced city and heritage outing with Victorian core walk, fort views, and local tasting.",
        duration: "4 hours",
      },
    ],
    familyRecommendations: [
      {
        title: "Use guided falls support in Ocho Rios",
        portSlug: "ocho-rios",
        advice:
          "Family-friendly Dunn's River tours include staff support that helps younger travelers safely navigate slippery sections.",
      },
      {
        title: "Plan short beach transfers in St. Thomas",
        portSlug: "st-thomas",
        advice:
          "Choose Magens or nearby bays with straightforward taxi return instead of stacking multiple island crossings.",
      },
      {
        title: "Choose beach clubs over long drives in Cozumel",
        portSlug: "cozumel",
        advice:
          "Kids usually do better with stable facilities and shade than long-distance round-island tours.",
      },
      {
        title: "Select controlled resort environments in Nassau",
        portSlug: "nassau",
        advice:
          "Waterpark and lagoon programs simplify logistics for mixed-age groups on shorter calls.",
      },
    ],
    beachRecommendations: [
      {
        title: "Start early at Orient Bay routes",
        portSlug: "st-maarten",
        advice:
          "Morning departures avoid midday road congestion between Dutch and French sides and improve usable beach time.",
      },
      {
        title: "Use west-facing beaches in Cozumel",
        portSlug: "cozumel",
        advice:
          "Sheltered western shoreline is generally calmer for casual swimmers and beginner snorkelers.",
      },
      {
        title: "Keep Ocho Rios beach plans simple",
        portSlug: "ocho-rios",
        advice:
          "Pair one major activity like Dunn's River with a single nearby beach stop instead of long transfer chains.",
      },
      {
        title: "Pick curated beach clubs in St. Thomas",
        portSlug: "st-thomas",
        advice:
          "Pre-booked access with transport often beats ad hoc taxi negotiation on busy port mornings.",
      },
    ],
    adventureRecommendations: [
      {
        title: "Prioritize waterfall climbs in Jamaica",
        portSlug: "ocho-rios",
        advice:
          "Dunn's River remains one of the most iconic Caribbean adventure experiences and works well with guided support.",
      },
      {
        title: "Choose high-speed marine tours in St. Maarten",
        portSlug: "st-maarten",
        advice:
          "Powerboat trips offer more coverage around coves and reefs when your stay is under seven hours.",
      },
      {
        title: "Book jeep tours in Cozumel's eastern side",
        portSlug: "cozumel",
        advice:
          "Off-road style trips provide a contrast to the crowded western resort strip.",
      },
      {
        title: "Try catamaran snorkel from St. Thomas",
        portSlug: "st-thomas",
        advice:
          "Marine routes toward St. John waters are a high-success option for active groups avoiding traffic-heavy road days.",
      },
    ],
    comparisonTable: [
      {
        portSlug: "ocho-rios",
        portName: "Ocho Rios",
        bestFor: "Waterfalls and lush inland scenery",
        bestExcursion: "Dunn's River Falls combo",
        transferTime: "20-35 min",
        rating: "9.2/10",
      },
      {
        portSlug: "st-maarten",
        portName: "St. Maarten",
        bestFor: "Two-nation island touring",
        bestExcursion: "Island drive with Maho stop",
        transferTime: "20-45 min",
        rating: "9.0/10",
      },
      {
        portSlug: "st-thomas",
        portName: "St. Thomas",
        bestFor: "Viewpoints and catamaran days",
        bestExcursion: "Sail and snorkel to nearby cays",
        transferTime: "20-35 min",
        rating: "8.9/10",
      },
      {
        portSlug: "cozumel",
        portName: "Cozumel",
        bestFor: "Reef activities at all budgets",
        bestExcursion: "Reef snorkel with beach club",
        transferTime: "10-25 min",
        rating: "8.9/10",
      },
      {
        portSlug: "puerto-plata",
        portName: "Puerto Plata",
        bestFor: "City history and inland options",
        bestExcursion: "Historic city and fort outing",
        transferTime: "25-45 min",
        rating: "8.5/10",
      },
    ],
    excursionTips: [
      "In Ocho Rios, wear closed water shoes for falls excursions; rocky surfaces are slick year-round.",
      "St. Maarten's cross-island taxi times vary sharply after lunch, so front-load long-distance beach plans.",
      "Cozumel marine visibility is often best in morning slots before afternoon winds rise.",
      "Nassau port surroundings are walkable, but beach and resort entries are smoother with confirmed advance passes.",
      "St. Thomas mountain roads can be curvy; travelers prone to motion sickness should choose marine alternatives.",
    ],
    bookingTips: [
      "Use NCL's pre-cruise booking windows for best selection on catamaran and waterfall products.",
      "Keep one self-guided fallback in each port in case weather affects marine departures.",
      "Pair one premium excursion with one lower-cost DIY stop to balance budget on weeklong routes.",
      "For multi-ship days, reserve earliest practical departures in St. Thomas and Cozumel.",
      "Check return-to-ship requirements carefully on ports where you plan independent late-afternoon beach time.",
    ],
    faqs: [
      {
        question: "What are the strongest NCL Caribbean ports for active travelers?",
        answer:
          "Ocho Rios, Cozumel, and St. Thomas are top picks due to reliable adventure options, marine activities, and broad operator coverage.",
      },
      {
        question: "Does freestyle cruising help with shore excursion planning?",
        answer:
          "Yes. Without fixed dining pressure, NCL passengers can combine one guided tour with flexible independent time more easily than on stricter schedules.",
      },
      {
        question: "Is St. Maarten worth a full-day excursion on NCL?",
        answer:
          "Usually yes, especially for first visits. A full-day island loop reveals both Dutch and French sides better than a single beach stop.",
      },
      {
        question: "How early should I book Dunn's River excursions?",
        answer:
          "Book 4-8 weeks ahead for prime times, as Ocho Rios waterfall inventory can sell out on heavy winter sailing weeks.",
      },
      {
        question: "Which NCL port is easiest for independent beach time?",
        answer:
          "Cozumel is generally easiest thanks to short taxi transfers, many beach club choices, and straightforward return logistics.",
      },
    ],
  },
  {
    slug: "msc",
    pageSlug: "msc-shore-excursions",
    name: "MSC Cruises",
    tagline: "European-style Caribbean sailings with varied excursion pacing",
    seoTitle: "MSC Shore Excursions in the Caribbean: Port-by-Port Guide",
    metaDescription:
      "Discover MSC Caribbean shore excursions in Nassau, Cozumel, Roatan, Puerto Plata, and St. Maarten with practical planning and booking guidance.",
    overview:
      "MSC has expanded rapidly in the Caribbean and now offers frequent departures with a mix of short Bahamas itineraries and full 7-night Eastern/Western loops. Excursions tend to emphasize structured sightseeing, beach access, and marine days with multilingual support.",
    overviewDetail:
      "MSC guests benefit from a broad range of half-day and full-day formats, but logistics differ by port. Nassau and Cozumel are straightforward for independent plans, while Puerto Plata and some Roatan options are better with pre-arranged transport due to road-time variability.",
    caribbeanRoutes: [
      "3-4 night Bahamas departures including Nassau",
      "7-night Eastern Caribbean rotations with St. Maarten calls",
      "7-night Western Caribbean routes with Cozumel and Roatan",
      "10-11 night Southern Caribbean itineraries",
      "Mixed Caribbean sailings with private destination calls",
    ],
    popularItineraries: [
      {
        name: "Western Caribbean Essentials",
        duration: "7 nights",
        ports: "Cozumel, Roatan, Costa Maya",
        description:
          "Reliable weeklong route for snorkelers and first-time Mexico/Honduras port visitors seeking easy comparisons between ports.",
      },
      {
        name: "Eastern Sun and Culture",
        duration: "7 nights",
        ports: "Nassau, St. Maarten, Puerto Plata",
        description:
          "Combines accessible Bahamas planning with one Dutch-Caribbean and one Dominican culture-focused day.",
      },
      {
        name: "Southern Antilles Sweep",
        duration: "10 nights",
        ports: "Aruba, Curacao, St. Maarten",
        description:
          "Longer format suited to travelers prioritizing beach reliability and architecture-rich colonial port centers.",
      },
      {
        name: "Caribbean Sampler",
        duration: "4 nights",
        ports: "Nassau and nearby private destination stop",
        description:
          "Best for quick getaways where simple beach and marine plans outperform long land excursions.",
      },
    ],
    popularPorts: [
      { slug: "nassau", name: "Nassau" },
      { slug: "cozumel", name: "Cozumel" },
      { slug: "st-maarten", name: "St. Maarten" },
      { slug: "puerto-plata", name: "Puerto Plata" },
      { slug: "roatan", name: "Roatan" },
      { slug: "curacao", name: "Curacao" },
    ],
    recommendedExcursions: [
      {
        name: "Cozumel Reef Snorkel and Beach Escape",
        portSlug: "cozumel",
        description:
          "Efficient MSC-compatible marine outing with boat snorkel segment followed by a curated beach break.",
        duration: "4.5 hours",
      },
      {
        name: "St. Maarten Panoramic and Beach Time",
        portSlug: "st-maarten",
        description:
          "Guided overview of both sides of the island with time allocated for a manageable swim stop.",
        duration: "4 hours",
      },
      {
        name: "Roatan Wildlife and West Bay Combo",
        portSlug: "roatan",
        description:
          "Popular mixed-day format combining animal sanctuary visits with reef-edge beach access.",
        duration: "5 hours",
      },
      {
        name: "Puerto Plata Cable Car and Colonial Core",
        portSlug: "puerto-plata",
        description:
          "Dominican city orientation with Mount Isabel de Torres viewpoints when weather allows.",
        duration: "4.5 hours",
      },
      {
        name: "Curacao City and Blue Bay Beach",
        portSlug: "curacao",
        description:
          "Balanced Willemstad architecture walk paired with calmer-water beach time on the island's south side.",
        duration: "5 hours",
      },
    ],
    familyRecommendations: [
      {
        title: "Choose mixed-pace tours in Curacao",
        portSlug: "curacao",
        advice:
          "Curacao city-plus-beach excursions give children recovery time between walking segments and swim breaks.",
      },
      {
        title: "Keep Nassau plans facility-focused",
        portSlug: "nassau",
        advice:
          "Structured beach venues with showers and shade are easier than self-guided downtown-to-beach logistics for families.",
      },
      {
        title: "Use short transfers in Cozumel",
        portSlug: "cozumel",
        advice:
          "Pick excursions near your arrival pier so younger travelers do not spend excess time in taxis.",
      },
      {
        title: "Avoid stacking long drives in Puerto Plata",
        portSlug: "puerto-plata",
        advice:
          "Select one primary inland highlight and return with margin rather than combining multiple distant attractions.",
      },
    ],
    beachRecommendations: [
      {
        title: "Target south-coast beaches in Curacao",
        portSlug: "curacao",
        advice:
          "Sheltered southern coves often provide calmer swim conditions than exposed north-coast viewpoints.",
      },
      {
        title: "Use beach clubs in Cozumel",
        portSlug: "cozumel",
        advice:
          "Club-style access can simplify food, gear, and transport in one booking.",
      },
      {
        title: "Pick broad-sand bays in St. Maarten",
        portSlug: "st-maarten",
        advice:
          "Orient and Mullet options give flexibility for groups with mixed comfort levels in surf conditions.",
      },
      {
        title: "Reserve Roatan transport early",
        portSlug: "roatan",
        advice:
          "West Bay transfer inventory can tighten on busy mornings when multiple ships call.",
      },
    ],
    adventureRecommendations: [
      {
        title: "Snorkel Cozumel's reef edges",
        portSlug: "cozumel",
        advice:
          "Current-assisted drifts are efficient for active travelers and usually outperform shore-snorkel coverage.",
      },
      {
        title: "Ride mountain viewpoints in Puerto Plata",
        portSlug: "puerto-plata",
        advice:
          "Cable car and hilltop combinations add elevation-based scenery rare on many Caribbean cruise days.",
      },
      {
        title: "Add zipline packages in Roatan",
        portSlug: "roatan",
        advice:
          "Combo packages with beach segments maximize value and keep active groups engaged throughout the day.",
      },
      {
        title: "Try coastal ATV in Curacao",
        portSlug: "curacao",
        advice:
          "Arid terrain and cliffline routes offer a distinct contrast to greener Eastern Caribbean excursions.",
      },
    ],
    comparisonTable: [
      {
        portSlug: "cozumel",
        portName: "Cozumel",
        bestFor: "Beginner-to-advanced marine activities",
        bestExcursion: "Reef snorkel and beach combo",
        transferTime: "10-25 min",
        rating: "9.1/10",
      },
      {
        portSlug: "curacao",
        portName: "Curacao",
        bestFor: "Colorful city plus calm coves",
        bestExcursion: "Willemstad and Blue Bay day",
        transferTime: "20-35 min",
        rating: "9.0/10",
      },
      {
        portSlug: "st-maarten",
        portName: "St. Maarten",
        bestFor: "Scenic island touring",
        bestExcursion: "Two-side panoramic route",
        transferTime: "20-45 min",
        rating: "8.8/10",
      },
      {
        portSlug: "roatan",
        portName: "Roatan",
        bestFor: "Adventure-and-beach combinations",
        bestExcursion: "Wildlife and West Bay package",
        transferTime: "20-45 min",
        rating: "8.8/10",
      },
      {
        portSlug: "puerto-plata",
        portName: "Puerto Plata",
        bestFor: "Dominican culture and viewpoints",
        bestExcursion: "Cable car and city highlights",
        transferTime: "25-50 min",
        rating: "8.6/10",
      },
    ],
    excursionTips: [
      "MSC departures can attract multinational groups, so confirm language and pace before finalizing.",
      "In Cozumel, verify whether snorkel tours depart from marina transfer points or directly near cruise piers.",
      "Puerto Plata mountain visibility varies by cloud cover; keep a city-focused backup option ready.",
      "Roatan road conditions can change after rain, making realistic return buffers essential.",
      "Curacao city heat builds quickly midday, so do walking segments in morning slots when possible.",
    ],
    bookingTips: [
      "Reserve structured MSC tours early on peak winter sailings where limited-capacity options fill fast.",
      "For first-time Curacao visits, choose city-and-beach combinations instead of single-focus products.",
      "Compare transfer inclusions carefully, especially in Roatan and Puerto Plata where distance affects value.",
      "Use lower-risk independent planning in Nassau and Cozumel, where return routes are simple.",
      "Prioritize one must-do excursion per port, then keep optional DIY add-ons short and close to the pier.",
    ],
    faqs: [
      {
        question: "Which MSC Caribbean ports are easiest for independent exploration?",
        answer:
          "Nassau and Cozumel are usually the simplest due to short transfer patterns, abundant taxis, and clear return routes.",
      },
      {
        question: "Is Curacao worth booking through MSC?",
        answer:
          "For first-time visitors, yes. Guided city-and-beach combinations efficiently cover Willemstad highlights and a quality swim stop.",
      },
      {
        question: "How active are MSC excursions in Roatan?",
        answer:
          "Very active options are available, especially zipline and snorkel combinations, but there are also moderate beach-focused alternatives.",
      },
      {
        question: "When should I reserve MSC Caribbean shore excursions?",
        answer:
          "Reserve key tours a month or more before sailing, particularly on holiday departures with higher family demand.",
      },
      {
        question: "Are MSC Caribbean tours suitable for mixed-age groups?",
        answer:
          "Yes, especially half-day panoramic and beach products that avoid long inland transit and maintain flexible pacing.",
      },
    ],
  },
  {
    slug: "princess",
    pageSlug: "princess-shore-excursions",
    name: "Princess Cruises",
    tagline: "Destination-focused Caribbean voyages with refined shore choices",
    seoTitle: "Princess Shore Excursions Caribbean Guide: Top Ports and Tours",
    metaDescription:
      "Plan Princess Caribbean shore excursions with detailed recommendations for St. Thomas, Aruba, Cozumel, Grand Cayman, and Costa Maya.",
    overview:
      "Princess leans into destination immersion and typically attracts travelers who value balanced, less rushed port days. Caribbean itineraries often combine iconic beaches with culturally rich calls and a strong portfolio of moderate-paced sightseeing tours.",
    overviewDetail:
      "Princess shore planning works best when each port has a clear objective: beach quality, marine life, ruins, or scenic touring. Because many guests prefer comfort-forward excursions, premium small-group and curated cultural products can sell out well ahead of departure.",
    caribbeanRoutes: [
      "7-night Eastern Caribbean sailings with Virgin Islands calls",
      "7-night Western Caribbean routes via Cozumel and Grand Cayman",
      "10-night Southern Caribbean itineraries including Aruba and Curacao",
      "14-night Caribbean Explorer routes with mixed port intensity",
      "Long-format voyages with partial Panama Canal plus Caribbean stops",
    ],
    popularItineraries: [
      {
        name: "Eastern Elegance Route",
        duration: "7 nights",
        ports: "St. Thomas, St. Maarten, Nassau",
        description:
          "Mixes scenic island drives and beach-centered days with minimal overland travel strain.",
      },
      {
        name: "Western Discovery Route",
        duration: "7 nights",
        ports: "Cozumel, Grand Cayman, Costa Maya",
        description:
          "Combines marine activities with accessible Mayan history and one of the region's most popular sandbar experiences.",
      },
      {
        name: "Southern Caribbean Contrast",
        duration: "10 nights",
        ports: "Aruba, Curacao, St. Thomas",
        description:
          "Great for travelers who want weather-reliable beach time plus architecture-rich island centers.",
      },
      {
        name: "Extended Caribbean Immersion",
        duration: "14 nights",
        ports: "Aruba, Cozumel, Grand Cayman, Falmouth",
        description:
          "Longer format offering enough margin for both full-day excursions and lower-key independent afternoons.",
      },
    ],
    popularPorts: [
      { slug: "st-thomas", name: "St. Thomas" },
      { slug: "aruba", name: "Aruba" },
      { slug: "cozumel", name: "Cozumel" },
      { slug: "grand-cayman", name: "Grand Cayman" },
      { slug: "costa-maya", name: "Costa Maya" },
      { slug: "falmouth", name: "Falmouth" },
      { slug: "puerto-limon", name: "Puerto Limón" },
    ],
    recommendedExcursions: [
      {
        name: "Stingray City by Catamaran",
        portSlug: "grand-cayman",
        description:
          "Comfort-forward transfer and boat setup for one of Grand Cayman's most iconic wildlife encounters.",
        duration: "3.5 hours",
      },
      {
        name: "Aruba North Coast and California Lighthouse",
        portSlug: "aruba",
        description:
          "Scenic island orientation excursion emphasizing coastal viewpoints and arid landscape contrasts.",
        duration: "4 hours",
      },
      {
        name: "Chacchoben Ruins Cultural Journey",
        portSlug: "costa-maya",
        description:
          "History-focused day with guided archaeological interpretation and moderate walking requirements.",
        duration: "5.5 hours",
      },
      {
        name: "Magens Bay Relaxed Beach Escape",
        portSlug: "st-thomas",
        description:
          "Simple, highly rated beach transfer product for travelers prioritizing comfort and low complexity.",
        duration: "4 hours",
      },
      {
        name: "Cozumel Snorkel and Tequila Heritage",
        portSlug: "cozumel",
        description:
          "Dual-focus excursion pairing reef time with a guided tasting and local production overview.",
        duration: "4.5 hours",
      },
    ],
    familyRecommendations: [
      {
        title: "Use shallow-water formats in Grand Cayman",
        portSlug: "grand-cayman",
        advice:
          "Stingray sandbar tours are manageable for families when booked with stable catamaran transfers and clear supervision.",
      },
      {
        title: "Choose calm beaches in Aruba",
        portSlug: "aruba",
        advice:
          "Palm-area beaches are generally easier for mixed-age groups than exposed north-coast swimming points.",
      },
      {
        title: "Pair ruins with rest stops in Costa Maya",
        portSlug: "costa-maya",
        advice:
          "Select excursions that include comfort breaks and moderate pacing for children or older family members.",
      },
      {
        title: "Pick straightforward beach transfers in St. Thomas",
        portSlug: "st-thomas",
        advice:
          "A single destination like Magens Bay minimizes transport changes and keeps return timing predictable.",
      },
    ],
    beachRecommendations: [
      {
        title: "Reserve early for Seven Mile access",
        portSlug: "grand-cayman",
        advice:
          "Top beach clubs fill quickly on heavy call days, especially when multiple ships are tendering.",
      },
      {
        title: "Use Aruba's west-coast facilities",
        portSlug: "aruba",
        advice:
          "Well-developed beach zones near Palm and Eagle simplify dining, shade, and transport coordination.",
      },
      {
        title: "Choose managed beach clubs in Cozumel",
        portSlug: "cozumel",
        advice:
          "Princess travelers often prefer predictable amenities and return transport over fully self-guided beach days.",
      },
      {
        title: "Add shorter beach finishes in Falmouth",
        portSlug: "falmouth",
        advice:
          "Jamaica days are often best split between one inland highlight and a compact final beach segment.",
      },
    ],
    adventureRecommendations: [
      {
        title: "Book reef-focused boats in Cozumel",
        portSlug: "cozumel",
        advice:
          "Marine visibility and current-driven reef paths deliver high-quality snorkeling with moderate effort.",
      },
      {
        title: "Try off-road sections in Aruba",
        portSlug: "aruba",
        advice:
          "North-coast jeep segments provide a different terrain profile from typical Caribbean beach ports.",
      },
      {
        title: "Use guided cave-and-river options in Falmouth",
        portSlug: "falmouth",
        advice:
          "Active Jamaica inland products are worthwhile on longer calls and add variety beyond beach days.",
      },
      {
        title: "Choose wildlife-forward tours in Grand Cayman",
        portSlug: "grand-cayman",
        advice:
          "Stingray and reef combinations are exciting while still manageable for a broad range of fitness levels.",
      },
    ],
    comparisonTable: [
      {
        portSlug: "grand-cayman",
        portName: "Grand Cayman",
        bestFor: "Classic Caribbean wildlife encounters",
        bestExcursion: "Stingray City catamaran",
        transferTime: "20-35 min (after tender)",
        rating: "9.4/10",
      },
      {
        portSlug: "aruba",
        portName: "Aruba",
        bestFor: "Consistent beach weather",
        bestExcursion: "North coast scenic drive",
        transferTime: "25-40 min",
        rating: "9.1/10",
      },
      {
        portSlug: "st-thomas",
        portName: "St. Thomas",
        bestFor: "Scenic drives and calm beach days",
        bestExcursion: "Magens Bay beach escape",
        transferTime: "20-35 min",
        rating: "9.0/10",
      },
      {
        portSlug: "costa-maya",
        portName: "Costa Maya",
        bestFor: "Mayan ruins access",
        bestExcursion: "Chacchoben cultural tour",
        transferTime: "50-70 min to ruins",
        rating: "8.8/10",
      },
      {
        portSlug: "cozumel",
        portName: "Cozumel",
        bestFor: "Balanced marine and culinary experiences",
        bestExcursion: "Snorkel and tequila heritage",
        transferTime: "10-25 min",
        rating: "8.8/10",
      },
    ],
    excursionTips: [
      "In Grand Cayman, treat tender timing as part of your transfer plan, not a separate step.",
      "Costa Maya ruins tours involve substantial road time; carry water and sun protection for open-site walking.",
      "Aruba wind patterns can affect marine departures, so keep a land-based scenic backup available.",
      "Cozumel's best reefs are usually reached by boat; shore-only options are simpler but less dynamic.",
      "Falmouth inland tours can run long, so build in generous return margin for afternoon traffic.",
    ],
    bookingTips: [
      "Reserve small-group premium products early, as Princess guests often favor curated formats.",
      "Use ship tours for long-transfer archaeology days when port windows are under eight hours.",
      "Prioritize one signature excursion per port and avoid overscheduling back-to-back active days.",
      "Compare beach package inclusions carefully because transport and facility access vary widely by operator.",
      "If tendering is involved, choose departures that explicitly account for pier-to-boat transitions.",
    ],
    faqs: [
      {
        question: "What is the most reliable Princess Caribbean port for beach weather?",
        answer:
          "Aruba is generally the most weather-reliable option on Princess Caribbean itineraries, particularly in winter months.",
      },
      {
        question: "Are Princess shore excursions mostly moderate pace?",
        answer:
          "Yes. Princess offers many moderate-paced options with comfort-forward transport and structured sightseeing suitable for broad traveler profiles.",
      },
      {
        question: "Is Costa Maya worth it on Princess itineraries?",
        answer:
          "Yes, especially for travelers interested in Mayan history. Chacchoben tours are a highlight when you are comfortable with longer transfers.",
      },
      {
        question: "Should I book Grand Cayman independently on Princess?",
        answer:
          "Independent booking is possible, but tender timing makes ship-sponsored options safer for first-time visitors and tight schedules.",
      },
      {
        question: "Which Princess port best combines culture and beach?",
        answer:
          "Curated Cozumel and Aruba excursions often offer the strongest culture-plus-beach balance on weeklong Caribbean routes.",
      },
    ],
  },
  {
    slug: "celebrity",
    pageSlug: "celebrity-shore-excursions",
    name: "Celebrity Cruises",
    tagline: "Modern premium Caribbean itineraries with curated shore experiences",
    seoTitle: "Celebrity Shore Excursions Caribbean: Premium Port Recommendations",
    metaDescription:
      "Compare Celebrity Caribbean shore excursions in St. Thomas, St. Maarten, Aruba, Cozumel, and Curacao with expert timing and booking guidance.",
    overview:
      "Celebrity's Caribbean program emphasizes premium pacing, destination storytelling, and smaller-group options compared with mainstream mass-market lines. Port days often balance high-quality beach time with culinary, cultural, and scenic activities.",
    overviewDetail:
      "Celebrity travelers typically benefit from choosing fewer but higher-quality excursions. Ports like St. Maarten and Curacao reward guided context-rich tours, while Aruba and Cozumel are strong for polished marine or beach products with predictable logistics.",
    caribbeanRoutes: [
      "4-5 night Bahamas and short Caribbean escapes from South Florida",
      "7-night Eastern Caribbean itineraries with Virgin Islands focus",
      "7-night Southern Caribbean routes including Aruba and Curacao",
      "10-11 night deep Caribbean sailings with broader cultural coverage",
      "Longer Caribbean combinations that include mixed island profiles",
    ],
    popularItineraries: [
      {
        name: "Eastern Premium Highlights",
        duration: "7 nights",
        ports: "St. Thomas, St. Maarten, Puerto Plata",
        description:
          "Blends scenic marine days, upscale beach options, and one deeper heritage-focused Dominican call.",
      },
      {
        name: "Southern Dutch Caribbean",
        duration: "7 nights",
        ports: "Aruba, Curacao, Bonaire area routing",
        description:
          "Favored for calm-water beaches, colorful architecture, and high-quality snorkeling opportunities.",
      },
      {
        name: "Western Curated Adventure",
        duration: "7 nights",
        ports: "Cozumel, Roatan, Grand Cayman",
        description:
          "A more active profile where Celebrity often features premium catamaran and small-group marine options.",
      },
      {
        name: "Extended Cultural Caribbean",
        duration: "10 nights",
        ports: "St. Maarten, Curacao, Aruba, Falmouth",
        description:
          "Longer route with better pacing for travelers who want cultural depth and less compressed sightseeing.",
      },
    ],
    popularPorts: [
      { slug: "st-thomas", name: "St. Thomas" },
      { slug: "st-maarten", name: "St. Maarten" },
      { slug: "aruba", name: "Aruba" },
      { slug: "cozumel", name: "Cozumel" },
      { slug: "curacao", name: "Curacao" },
      { slug: "falmouth", name: "Falmouth" },
    ],
    recommendedExcursions: [
      {
        name: "St. Thomas Luxury Catamaran Sail",
        portSlug: "st-thomas",
        description:
          "Premium marine outing with smaller guest counts, reef swim time, and smoother onboard service flow.",
        duration: "4 hours",
      },
      {
        name: "French and Dutch Sides Culinary Tour",
        portSlug: "st-maarten",
        description:
          "Curated tasting route linking both sides of the island with guided local context and scenic stops.",
        duration: "5 hours",
      },
      {
        name: "Aruba Sunset and Coastline Cruise",
        portSlug: "aruba",
        description:
          "Late-day catamaran with calm west-coast conditions and skyline views, ideal on longer port stays.",
        duration: "3 hours",
      },
      {
        name: "Willemstad Architecture and Beach Retreat",
        portSlug: "curacao",
        description:
          "Culture-forward walk through historic districts followed by a relaxed cove beach segment.",
        duration: "5 hours",
      },
      {
        name: "Cozumel Reef and Private Beach Club",
        portSlug: "cozumel",
        description:
          "Combines guided snorkel with upscale beach amenities and controlled return transport.",
        duration: "5 hours",
      },
    ],
    familyRecommendations: [
      {
        title: "Use premium beach facilities in Cozumel",
        portSlug: "cozumel",
        advice:
          "Celebrity family groups often benefit from private-club style excursions with shade, food, and supervised swim zones.",
      },
      {
        title: "Keep St. Thomas to one primary activity",
        portSlug: "st-thomas",
        advice:
          "A single catamaran or beach plan generally produces a better day than trying to combine multiple distant stops.",
      },
      {
        title: "Book guided city routes in Curacao",
        portSlug: "curacao",
        advice:
          "Structured walking with transport support keeps children and grandparents moving at a manageable pace.",
      },
      {
        title: "Pick shorter scenic tours in Aruba",
        portSlug: "aruba",
        advice:
          "Half-day scenic or beach trips leave room for onboard downtime while still enjoying Aruba's strongest highlights.",
      },
    ],
    beachRecommendations: [
      {
        title: "Target Eagle and Palm zones in Aruba",
        portSlug: "aruba",
        advice:
          "These areas offer broad sand, easier amenities, and predictable taxi availability back to port.",
      },
      {
        title: "Choose curated coves in Curacao",
        portSlug: "curacao",
        advice:
          "South-coast coves accessed through organized tours are calmer and better equipped than exposed shorelines.",
      },
      {
        title: "Use managed beach club entries in Cozumel",
        portSlug: "cozumel",
        advice:
          "Pre-arranged access avoids queueing and secures higher-quality waterfront space on busy ship days.",
      },
      {
        title: "Balance beach and town in St. Maarten",
        portSlug: "st-maarten",
        advice:
          "A split-day approach works well if you avoid cross-island transfers during late-afternoon traffic peaks.",
      },
    ],
    adventureRecommendations: [
      {
        title: "Choose premium snorkel boats in Cozumel",
        portSlug: "cozumel",
        advice:
          "Smaller-group operations provide better in-water supervision and often reach less crowded reef patches.",
      },
      {
        title: "Add rugged terrain routes in Aruba",
        portSlug: "aruba",
        advice:
          "ATV or 4x4 north-coast tours create a high-contrast day compared with standard beach itineraries.",
      },
      {
        title: "Take hill-and-coast circuits in St. Maarten",
        portSlug: "st-maarten",
        advice:
          "Combined scenic drives and short beach swims fit active travelers without requiring all-day intensity.",
      },
      {
        title: "Use heritage-and-cave days from Falmouth",
        portSlug: "falmouth",
        advice:
          "Falmouth excursions can include rivers, caves, and plantation history for travelers who want inland variety.",
      },
    ],
    comparisonTable: [
      {
        portSlug: "curacao",
        portName: "Curacao",
        bestFor: "Culture-rich city plus calm beaches",
        bestExcursion: "Willemstad and cove retreat",
        transferTime: "20-35 min",
        rating: "9.2/10",
      },
      {
        portSlug: "st-maarten",
        portName: "St. Maarten",
        bestFor: "Premium island touring",
        bestExcursion: "French-Dutch culinary route",
        transferTime: "20-45 min",
        rating: "9.1/10",
      },
      {
        portSlug: "aruba",
        portName: "Aruba",
        bestFor: "Upscale beach and sunset sailing",
        bestExcursion: "West coast sail and swim",
        transferTime: "20-40 min",
        rating: "9.0/10",
      },
      {
        portSlug: "cozumel",
        portName: "Cozumel",
        bestFor: "Refined marine and beach clubs",
        bestExcursion: "Private club reef day",
        transferTime: "10-25 min",
        rating: "8.9/10",
      },
      {
        portSlug: "st-thomas",
        portName: "St. Thomas",
        bestFor: "Scenic sailing and classic beaches",
        bestExcursion: "Luxury catamaran sail",
        transferTime: "20-35 min",
        rating: "8.8/10",
      },
    ],
    excursionTips: [
      "Celebrity's premium small-group inventory can be limited, so reserve signature tours earlier than mass-market norms.",
      "Curacao's historic core is walkable but hot; morning cultural tours are generally more comfortable.",
      "St. Maarten's cross-border traffic can affect timing, so avoid overloading your afternoon schedule.",
      "Aruba evening sail products are excellent on longer stays, but verify all-aboard timing before booking.",
      "In Cozumel, premium beach clubs often include the strongest transport reliability on multi-ship call days.",
    ],
    bookingTips: [
      "Prioritize quality over quantity by booking one premium excursion per key port.",
      "Reserve culinary and small-group products 6-10 weeks before sailing for better time-slot choice.",
      "Use ship-sponsored options for complex cross-island routes where traffic variability is high.",
      "Keep one low-effort beach fallback in each port for weather-affected marine days.",
      "Review cancellation windows carefully; premium products can have stricter cutoffs close to port day.",
    ],
    faqs: [
      {
        question: "Which Celebrity Caribbean ports are best for premium experiences?",
        answer:
          "Curacao, St. Maarten, and Aruba stand out for upscale beach clubs, curated culinary tours, and high-quality marine excursions.",
      },
      {
        question: "Are Celebrity shore excursions worth booking early?",
        answer:
          "Yes. Smaller-group and specialty offerings often have limited capacity and can sell out well before departure.",
      },
      {
        question: "Is Cozumel still worthwhile on a premium Celebrity itinerary?",
        answer:
          "Absolutely. Cozumel remains a top reef destination, and premium club-plus-snorkel formats elevate the experience significantly.",
      },
      {
        question: "How active are Celebrity Caribbean excursions?",
        answer:
          "There is a full range, from relaxed scenic and culinary tours to active snorkeling, sailing, and off-road options.",
      },
      {
        question: "What is the easiest Celebrity port for a first independent day?",
        answer:
          "Aruba is often the easiest due to reliable transport, clear beach zoning, and straightforward return logistics.",
      },
    ],
  },
];

export function getCruiseLineBySlug(slug: string): CruiseLine | undefined {
  return cruiseLines.find((cruiseLine) => cruiseLine.slug === slug);
}

export function getCruiseLineByPageSlug(
  pageSlug: string,
): CruiseLine | undefined {
  return cruiseLines.find((cruiseLine) => cruiseLine.pageSlug === pageSlug);
}

export function getAllCruiseLineSlugs(): string[] {
  return cruiseLines.map((cruiseLine) => cruiseLine.slug);
}

export function getAllCruiseLinePageSlugs(): string[] {
  return cruiseLines.map((cruiseLine) => cruiseLine.pageSlug);
}
