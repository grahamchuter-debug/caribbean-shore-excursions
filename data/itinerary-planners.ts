import type { ItineraryPlannerPage } from "./types";

export const itineraryPlanners: ItineraryPlannerPage[] = [
  {
    slug: "eastern-caribbean-cruise-planner",
    title: "Eastern Caribbean Cruise Planner",
    seoTitle: "Eastern Caribbean Cruise Planner | St. Thomas, St. Maarten, Puerto Plata & Nassau",
    metaDescription:
      "Plan your Eastern Caribbean cruise with port-by-port advice for St. Thomas, St. Maarten, Puerto Plata, and Nassau, including beaches, snorkeling, family ideas, and private tours.",
    heroSubtitle:
      "Plan shore excursions in St. Thomas, St. Maarten, Puerto Plata, and Nassau across the Eastern Caribbean.",
    overview:
      "Eastern Caribbean itineraries are ideal for cruise passengers who want classic turquoise-water beach days, easy logistics, and varied island culture in one week. The region typically combines U.S. Virgin Islands convenience in St. Thomas, two-nation experiences in St. Maarten, adventure options in Puerto Plata, and easy walkable access in Nassau.",
    overviewDetail:
      "A well-planned Eastern route balances one beach-focused day, one water activity day, and one culture or scenic day so your cruise does not feel repetitive. St. Thomas is excellent for Magens Bay and St. John add-ons, St. Maarten delivers French and Dutch flavor in a single port call, Puerto Plata adds rainforest and mountain excursions, and Nassau works well for either family resort passes or quick self-guided city time.\n\nCrowding varies heavily by ship schedule, so excursion timing matters as much as excursion choice. Book first departures for popular beaches and snorkeling, leave buffer time for traffic-heavy ports, and keep one backup plan per port for weather changes. When done right, Eastern Caribbean itineraries offer high-value, low-stress port days with options for every travel style.",
    itineraryHighlights: [
      "St. Thomas for Magens Bay plus optional St. John ferry combinations",
      "St. Maarten for Orient Bay, Maho plane spotting, and French-side dining",
      "Puerto Plata for Teleferico views, waterfalls, and Amber Cove convenience",
      "Nassau for Atlantis passes, Rose Island snorkel, or short city explorations",
      "Short transfer times make this region excellent for first-time cruisers",
    ],
    topPortSlugs: ["st-thomas", "st-maarten", "puerto-plata", "nassau", "tortola"],
    bestExcursions: [
      {
        name: "Magens Bay and Island Viewpoints",
        portSlug: "st-thomas",
        description:
          "Pair a relaxed Magens Bay swim with scenic lookout stops for a balanced half-day that avoids rushing.",
      },
      {
        name: "Orient Bay and French Side Discovery",
        portSlug: "st-maarten",
        description:
          "Spend beach time at Orient Bay, then enjoy a short French-side village stop for food and shopping.",
      },
      {
        name: "Teleferico and Historic Puerto Plata",
        portSlug: "puerto-plata",
        description:
          "Ride the cable car for panoramic views, then explore downtown and amber-themed local markets.",
      },
      {
        name: "Atlantis Aquaventure Day Access",
        portSlug: "nassau",
        description:
          "Best for families and active groups who want slides, pools, and beach facilities in one controlled setting.",
      },
      {
        name: "Rose Island Catamaran Snorkel",
        portSlug: "nassau",
        description:
          "A reliable half-day boat option when you want reef snorkeling without committing to a full-day outing.",
      },
    ],
    suggestedDayPlans: [
      {
        portSlug: "st-thomas",
        title: "Beach Morning + Harbor Afternoon",
        morning:
          "Head early to Magens Bay before peak crowds, then stop at a scenic overlook on the return route.",
        afternoon:
          "Explore Charlotte Amalie shops and waterfront cafes within easy reach of the cruise terminal.",
        tip: "Book the earliest transfer to secure beach chairs and calmer water.",
      },
      {
        portSlug: "st-maarten",
        title: "French Side Leisure Day",
        morning:
          "Travel directly to Orient Bay for beach time and optional water sports while sand is less crowded.",
        afternoon:
          "Visit Marigot or a Dutch-side boardwalk area depending on traffic and your ship departure time.",
        tip: "Carry small cash for beach chair rentals and quick lunch stops.",
      },
      {
        portSlug: "puerto-plata",
        title: "Views + Culture Combo",
        morning:
          "Take the Teleferico early for clearer mountain visibility before midday clouds build.",
        afternoon:
          "Return for a short walking route through colonial highlights and local chocolate or rum tastings.",
        tip: "Keep a rain layer packed because mountain weather can change fast.",
      },
    ],
    bestBeaches: [
      {
        portSlug: "st-thomas",
        title: "Magens Bay for calm swimming",
        advice:
          "Ideal for mixed-age groups because water entry is gentle and facilities are reliable.",
      },
      {
        portSlug: "st-maarten",
        title: "Orient Bay for full-service beach clubs",
        advice:
          "Great when you want loungers, lunch service, and longer beach stays with amenities.",
      },
      {
        portSlug: "nassau",
        title: "Paradise Island beaches for convenience",
        advice:
          "Best option for passengers who prefer resort-style access over independent beach logistics.",
      },
      {
        portSlug: "puerto-plata",
        title: "Amber Cove area beach breaks",
        advice:
          "Choose organized transport to maximize beach time and reduce return-to-ship stress.",
      },
    ],
    bestSnorkelling: [
      {
        portSlug: "st-thomas",
        title: "St. John day trip snorkeling",
        advice:
          "Book guided options with timed ferry handling so you can enjoy reef time without logistical guesswork.",
      },
      {
        portSlug: "st-maarten",
        title: "Catamaran reef stops off the Dutch side",
        advice:
          "Choose smaller group boats for better guide attention and less crowded snorkeling zones.",
      },
      {
        portSlug: "nassau",
        title: "Rose Island reef snorkeling",
        advice:
          "A dependable half-day choice that leaves buffer time for shopping or shipboard downtime.",
      },
      {
        portSlug: "puerto-plata",
        title: "Coastal cove snorkel excursions",
        advice:
          "Visibility can vary, so prioritize tours that include two potential sites.",
      },
    ],
    familyRecommendations: [
      {
        portSlug: "nassau",
        title: "Atlantis for all-day family entertainment",
        advice:
          "Reserve in advance on multi-ship days and confirm height restrictions before booking.",
      },
      {
        portSlug: "st-thomas",
        title: "Magens Bay for younger children",
        advice:
          "Simple logistics and calm water make this one of the easiest Eastern family beach days.",
      },
      {
        portSlug: "puerto-plata",
        title: "Amber Cove pool-centered day",
        advice:
          "Great fallback option when younger kids are tired or weather limits adventure excursions.",
      },
      {
        portSlug: "st-maarten",
        title: "Beach + short sightseeing combo",
        advice:
          "Keep transfers short and avoid over-scheduling to reduce family fatigue in warm weather.",
      },
    ],
    privateTourRecommendations: [
      {
        portSlug: "st-thomas",
        title: "Private island sightseeing taxi",
        advice:
          "Useful for mixed groups who want flexible timing between viewpoints, shopping, and beach stops.",
      },
      {
        portSlug: "st-maarten",
        title: "Private island loop with custom stops",
        advice:
          "Plan route order around traffic patterns to avoid losing beach time in afternoon congestion.",
      },
      {
        portSlug: "puerto-plata",
        title: "Private heritage and mountain route",
        advice:
          "Ask for a realistic stop count so your final return includes at least one hour of buffer.",
      },
      {
        portSlug: "nassau",
        title: "Private guide for city + coastline",
        advice:
          "Best for repeat visitors who want alternatives beyond Atlantis and standard beach shuttles.",
      },
    ],
    regionPageSlug: "eastern-caribbean-cruise-ports",
    bestGuideSlugs: [
      "best-caribbean-beach-excursions",
      "best-caribbean-snorkeling-excursions",
      "best-caribbean-private-tours",
    ],
    faqs: [
      {
        question: "Which Eastern Caribbean ports are best for first-time cruisers?",
        answer:
          "St. Thomas and Nassau are easiest for first-timers thanks to short transfers, clear excursion options, and straightforward terminal areas.",
      },
      {
        question: "Is Nassau worth visiting on an Eastern itinerary?",
        answer:
          "Yes, especially for family resort passes, half-day snorkeling, and quick city walks that fit shorter port calls.",
      },
      {
        question: "How should I split beach and activity days in this region?",
        answer:
          "Use St. Thomas or St. Maarten for your main beach day, Puerto Plata for adventure or scenery, and Nassau for family-focused activities.",
      },
      {
        question: "Do I need private tours in the Eastern Caribbean?",
        answer:
          "Private tours are most valuable when your group has different priorities or mobility needs and wants flexible timing.",
      },
      {
        question: "What is the biggest planning mistake on Eastern routes?",
        answer:
          "Overbooking long excursions without traffic or ship schedule buffers, especially in busy ports with multiple ships in port.",
      },
    ],
  },
  {
    slug: "western-caribbean-cruise-planner",
    title: "Western Caribbean Cruise Planner",
    seoTitle: "Western Caribbean Cruise Planner | Cozumel, Roatan, Grand Cayman, Costa Maya & Ocho Rios",
    metaDescription:
      "Plan your Western Caribbean cruise with expert guidance for Cozumel, Roatan, Grand Cayman, Costa Maya, and Ocho Rios, including reef, beach, family, and private-tour picks.",
    heroSubtitle:
      "Plan shore excursions in Cozumel, Roatan, Grand Cayman, Costa Maya, and Ocho Rios on Western Caribbean routes.",
    overview:
      "Western Caribbean cruises are the strongest choice for passengers prioritizing snorkeling, wildlife encounters, and active adventure excursions. Cozumel and Roatan offer reef-driven port days, Grand Cayman adds iconic Stingray City experiences, Costa Maya brings accessible Mayan history, and Ocho Rios delivers Jamaica's best-known natural attractions.",
    overviewDetail:
      "This region rewards structured planning because each port has a different pace and transport style. Cozumel and Costa Maya are easy for full-day combinations, Grand Cayman requires tender awareness, Roatan benefits from selecting the right side of the island early, and Ocho Rios works best when waterfall or activity slots are booked before arrival.\n\nFor a balanced itinerary, pick one signature water day, one cultural day, and one higher-energy adventure day. Build buffers for traffic and tender delays, especially if your ship has shorter calls. Western routes can feel the most varied and rewarding when each port has a clear role in your overall cruise plan.",
    itineraryHighlights: [
      "Cozumel for high-quality reef excursions and El Cielo boat routes",
      "Roatan for excellent snorkeling value and West Bay beach access",
      "Grand Cayman for Stingray City and premium marine experiences",
      "Costa Maya for Chacchoben ruins and easy Mahahual add-ons",
      "Ocho Rios for Dunn's River Falls and adventure-focused day plans",
    ],
    topPortSlugs: ["cozumel", "roatan", "grand-cayman", "costa-maya", "ocho-rios", "progreso", "puerto-limon"],
    bestExcursions: [
      {
        name: "Palancar and Colombia Reef Snorkel",
        portSlug: "cozumel",
        description:
          "Top reef option for visibility and marine life, ideal for both intermediate and first-time snorkelers.",
      },
      {
        name: "West Bay Beach and Reef Combo",
        portSlug: "roatan",
        description:
          "Combines one of the best beaches in the region with easy-access reef snorkeling at competitive prices.",
      },
      {
        name: "Stingray City Early Departure Tour",
        portSlug: "grand-cayman",
        description:
          "Best booked early to reduce crowding and maximize time before tender return lines build.",
      },
      {
        name: "Chacchoben Ruins with Local Guide",
        portSlug: "costa-maya",
        description:
          "A practical way to experience Mayan history without overextending your return-to-ship schedule.",
      },
      {
        name: "Dunn's River Falls Guided Climb",
        portSlug: "ocho-rios",
        description:
          "Jamaica's signature shore excursion, best experienced in early slots for lighter site congestion.",
      },
    ],
    suggestedDayPlans: [
      {
        portSlug: "cozumel",
        title: "Reef Morning + Town Afternoon",
        morning:
          "Take an early two-stop snorkel trip to maximize water clarity and avoid later boat traffic.",
        afternoon:
          "Return to San Miguel for lunch, shopping, and an easy walk before reboarding.",
        tip: "Choose operators close to your pier to shorten transfer time.",
      },
      {
        portSlug: "grand-cayman",
        title: "Tender-Smart Wildlife Day",
        morning:
          "Disembark on the first available tender and head directly to Stingray City departure docks.",
        afternoon:
          "Use remaining time for Seven Mile Beach or a short waterfront visit near tender return points.",
        tip: "Keep at least 90 minutes of buffer for tender queues.",
      },
      {
        portSlug: "ocho-rios",
        title: "Falls + Scenic Finish",
        morning:
          "Do Dunn's River Falls first before major groups arrive and temperatures rise.",
        afternoon:
          "Add a short viewpoint, shopping, or beach club stop depending on energy level.",
        tip: "Water shoes are essential for safe movement on wet rock surfaces.",
      },
    ],
    bestBeaches: [
      {
        portSlug: "roatan",
        title: "West Bay for best value beach quality",
        advice:
          "Consistently high water clarity and sand quality at lower cost than many comparable ports.",
      },
      {
        portSlug: "grand-cayman",
        title: "Seven Mile Beach for premium conditions",
        advice:
          "Excellent for couples and groups wanting polished facilities with reliable swim conditions.",
      },
      {
        portSlug: "cozumel",
        title: "Beach clubs with controlled amenities",
        advice:
          "Choose curated beach clubs when you want food, loungers, and predictable return timing.",
      },
      {
        portSlug: "costa-maya",
        title: "Mahahual for relaxed local beach town feel",
        advice:
          "Best for passengers who want lower-cost loungers and a less resort-style atmosphere.",
      },
    ],
    bestSnorkelling: [
      {
        portSlug: "cozumel",
        title: "Palancar reef system for top-tier variety",
        advice:
          "Book smaller boats when possible for better guide support and less crowding in the water.",
      },
      {
        portSlug: "roatan",
        title: "West End and West Bay reef sections",
        advice:
          "Strong value option with high marine life density and flexible half-day trip formats.",
      },
      {
        portSlug: "grand-cayman",
        title: "Reef and sandbar combination tours",
        advice:
          "Combine Stingray City with snorkeling to maximize tender-port efficiency.",
      },
      {
        portSlug: "costa-maya",
        title: "Offshore reef boat options",
        advice:
          "Select tours that include alternate sites in case visibility drops at first choice locations.",
      },
    ],
    familyRecommendations: [
      {
        portSlug: "cozumel",
        title: "Marine parks and beach clubs for mixed ages",
        advice:
          "Controlled settings help families manage younger travelers while still offering water activities.",
      },
      {
        portSlug: "grand-cayman",
        title: "Stingray City for memorable wildlife interaction",
        advice:
          "Choose age-appropriate tours and confirm lifejacket and supervision standards before booking.",
      },
      {
        portSlug: "costa-maya",
        title: "Ruins plus short beach stop pacing",
        advice:
          "Keep total excursion length moderate to avoid fatigue in warm inland conditions.",
      },
      {
        portSlug: "ocho-rios",
        title: "Falls alternatives for younger children",
        advice:
          "Families with toddlers may prefer gentler beach or garden options over full waterfall climbs.",
      },
    ],
    privateTourRecommendations: [
      {
        portSlug: "roatan",
        title: "Private driver and beach club setup",
        advice:
          "Excellent flexibility and pricing for groups who want custom stop timing.",
      },
      {
        portSlug: "cozumel",
        title: "Private reef charter combinations",
        advice:
          "Best for experienced snorkelers wanting custom reef time and fewer passengers onboard.",
      },
      {
        portSlug: "grand-cayman",
        title: "Private Stingray and beach route",
        advice:
          "Worth it for groups who need precise timing around tenders and activity preferences.",
      },
      {
        portSlug: "ocho-rios",
        title: "Private waterfall-first planning",
        advice:
          "Early private departures help you complete key attractions before large bus arrivals.",
      },
    ],
    regionPageSlug: "western-caribbean-cruise-ports",
    bestGuideSlugs: [
      "best-caribbean-snorkeling-excursions",
      "best-caribbean-wildlife-excursions",
      "best-caribbean-private-tours",
    ],
    faqs: [
      {
        question: "Which Western Caribbean port is best for snorkeling?",
        answer:
          "Cozumel and Roatan are both top choices, with Cozumel offering broader tour volume and Roatan often delivering better value.",
      },
      {
        question: "How should I handle Grand Cayman tender logistics?",
        answer:
          "Book early tours, disembark quickly, and leave generous return buffers because tender lines can lengthen rapidly.",
      },
      {
        question: "Is Costa Maya worth it for non-history travelers?",
        answer:
          "Yes, especially if you pair a shorter ruins visit with Mahahual beach time or choose a beach-focused day only.",
      },
      {
        question: "What is the best family port on a Western route?",
        answer:
          "Cozumel is usually easiest for families due to controlled activity venues and efficient transport options.",
      },
      {
        question: "What common mistake hurts Western port days?",
        answer:
          "Trying to do too many long-transfer activities in one call, which increases stress and reduces enjoyment.",
      },
    ],
  },
  {
    slug: "southern-caribbean-cruise-planner",
    title: "Southern Caribbean Cruise Planner",
    seoTitle: "Southern Caribbean Cruise Planner | Aruba, Curacao & St. Maarten Port Guide",
    metaDescription:
      "Plan your Southern Caribbean cruise across Aruba, Curacao, and St. Maarten with practical advice on beaches, snorkeling, family days, and private island tours.",
    heroSubtitle:
      "Plan shore excursions in Aruba, Curacao, and St. Maarten on longer Southern Caribbean sailings.",
    overview:
      "Southern Caribbean routes are known for longer itineraries, strong weather reliability, and deeper island character. Aruba provides dependable sunshine and polished beach infrastructure, Curacao adds colorful architecture and excellent shore snorkeling, while St. Maarten contributes high-energy beach and sailing options that round out the itinerary.",
    overviewDetail:
      "Unlike shorter Eastern or Western runs, Southern sailings benefit from pacing that alternates active and relaxed days. Aruba is ideal for beach and sunset planning, Curacao excels at culture plus snorkel combinations, and St. Maarten works best when you choose either a beach-club style day or an island circuit without overloading both.\n\nBecause these ports often involve longer taxi routes and premium excursion pricing, pre-planning helps preserve value. Choose one signature experience per port, account for heat and sun exposure, and prioritize tours with direct pickup logistics. Southern itineraries can become the most memorable cruises when each day feels distinct rather than repetitive.",
    itineraryHighlights: [
      "Aruba for Eagle Beach, catamaran sailing, and evening-friendly schedules",
      "Curacao for colorful Willemstad architecture and cove snorkeling options",
      "St. Maarten for Orient Bay, sailing, and dual-nation island character",
      "Consistent sunshine supports reliable beach-heavy planning windows",
      "Longer Southern routes reward balanced beach, culture, and water activity pacing",
    ],
    topPortSlugs: ["aruba", "curacao", "st-maarten", "bonaire"],
    bestExcursions: [
      {
        name: "Arikok 4x4 and Natural Pool",
        portSlug: "aruba",
        description:
          "A high-contrast adventure day combining Aruba's desert interior with dramatic coastal swimming spots.",
      },
      {
        name: "Eagle Beach and Oranjestad Combo",
        portSlug: "aruba",
        description:
          "Balanced plan for travelers who want premium beach time plus manageable downtown exploration.",
      },
      {
        name: "Curacao West Coast Snorkel Coves",
        portSlug: "curacao",
        description:
          "Excellent for reef visibility and quieter swimming zones compared with heavier cruise beach hubs.",
      },
      {
        name: "Willemstad Cultural Walking and Food Tour",
        portSlug: "curacao",
        description:
          "Strong option for travelers focused on architecture, local cuisine, and low-stress logistics.",
      },
      {
        name: "Tintamarre or Coastal Catamaran Sail",
        portSlug: "st-maarten",
        description:
          "Combines scenic sailing with snorkeling and is ideal on days with longer afternoon port calls.",
      },
    ],
    suggestedDayPlans: [
      {
        portSlug: "aruba",
        title: "Beach First, Town Second",
        morning:
          "Start at Eagle Beach before midday heat for swimming, relaxed photos, and early beach service.",
        afternoon:
          "Return toward Oranjestad for shopping, cafes, and a waterfront walk near the terminal area.",
        tip: "Bring shade gear because Aruba sun intensity is high year-round.",
      },
      {
        portSlug: "curacao",
        title: "Culture + Cove Snorkel Mix",
        morning:
          "Explore Willemstad highlights while streets are cooler and less crowded with day visitors.",
        afternoon:
          "Transfer to a west-coast cove for snorkeling or relaxed swimming before ship return.",
        tip: "Choose tours with direct return transport to avoid taxi uncertainty.",
      },
      {
        portSlug: "st-maarten",
        title: "Sailing-Centered Port Day",
        morning:
          "Book a mid-morning sail that includes a snorkel stop and avoids peak boarding rushes.",
        afternoon:
          "Finish with Dutch-side boardwalk or quick shopping near port before all-aboard.",
        tip: "Allow extra road time if traveling between French and Dutch sides.",
      },
    ],
    bestBeaches: [
      {
        portSlug: "aruba",
        title: "Eagle Beach for reliable conditions",
        advice:
          "One of the easiest Southern Caribbean beach days due to consistent weather and broad shoreline space.",
      },
      {
        portSlug: "curacao",
        title: "West coast coves for quieter beach time",
        advice:
          "Better for travelers wanting less crowd density and clearer snorkeling-friendly water entry.",
      },
      {
        portSlug: "st-maarten",
        title: "Orient Bay for full-service beach experience",
        advice:
          "Best when your group wants loungers, dining, and optional activities in one destination.",
      },
      {
        portSlug: "aruba",
        title: "Palm Beach for activity-heavy stays",
        advice:
          "Choose Palm Beach if your priority is watersports and resort-style amenities rather than tranquility.",
      },
    ],
    bestSnorkelling: [
      {
        portSlug: "curacao",
        title: "Shore and boat snorkel diversity",
        advice:
          "Curacao is often the strongest Southern port for combining easy entry points with healthy reef sections.",
      },
      {
        portSlug: "aruba",
        title: "Wreck and coastal snorkel routes",
        advice:
          "Great for mixed skill levels when selecting tours that pair calm bays with one deeper site.",
      },
      {
        portSlug: "st-maarten",
        title: "Sailing excursions with reef stops",
        advice:
          "Best on stable weather days; smaller catamarans usually provide better snorkel flow.",
      },
      {
        portSlug: "curacao",
        title: "Cove-based beginner snorkeling",
        advice:
          "Ideal for first-timers who want calmer conditions than open-coast boat entry points.",
      },
    ],
    familyRecommendations: [
      {
        portSlug: "aruba",
        title: "De Palm style all-in-one day formats",
        advice:
          "Works well for families who prefer controlled facilities and predictable food and transport.",
      },
      {
        portSlug: "curacao",
        title: "Compact city and aquarium-friendly days",
        advice:
          "Keep transfers short and blend one educational stop with one beach or pool period.",
      },
      {
        portSlug: "st-maarten",
        title: "Single-beach focus for younger kids",
        advice:
          "Avoid island-wide loops with children and choose one high-quality beach base instead.",
      },
      {
        portSlug: "aruba",
        title: "Calm beach options for mixed ages",
        advice:
          "Plan around morning shade and hydration because Southern sun exposure can be intense for kids.",
      },
    ],
    privateTourRecommendations: [
      {
        portSlug: "aruba",
        title: "Private island highlights and coast loop",
        advice:
          "Strong value for groups wanting custom timing between desert landscapes and beach stops.",
      },
      {
        portSlug: "curacao",
        title: "Private west-coast cove circuit",
        advice:
          "Best for couples or small groups prioritizing flexible snorkeling and lunch pacing.",
      },
      {
        portSlug: "st-maarten",
        title: "Private dual-side island route",
        advice:
          "Set stop priorities early to avoid losing time in cross-island traffic later in the day.",
      },
      {
        portSlug: "aruba",
        title: "Private sunset sailing charter",
        advice:
          "Excellent for ships with late departures and travelers seeking a premium low-crowd finale.",
      },
    ],
    regionPageSlug: "southern-caribbean-cruise-ports",
    bestGuideSlugs: [
      "best-caribbean-beach-excursions",
      "best-caribbean-snorkeling-excursions",
      "best-caribbean-catamaran-cruises",
    ],
    faqs: [
      {
        question: "Which Southern Caribbean port is best for beaches?",
        answer:
          "Aruba is usually the top beach choice thanks to reliable weather, broad sand, and easy cruise-day logistics.",
      },
      {
        question: "Is Curacao better for culture than Aruba?",
        answer:
          "Generally yes. Curacao offers stronger architecture, neighborhood exploration, and food-focused walking experiences.",
      },
      {
        question: "Can I do both French and Dutch sides in St. Maarten in one day?",
        answer:
          "Yes, but only if planned tightly. Traffic can quickly reduce available beach or activity time.",
      },
      {
        question: "Why do Southern itineraries feel more expensive?",
        answer:
          "Longer routes, premium excursion operators, and greater transfer distances can increase overall port-day costs.",
      },
      {
        question: "What planning approach works best for Southern cruises?",
        answer:
          "Choose one signature activity per port, protect buffer time, and avoid overloading long-transfer combinations.",
      },
    ],
  },
  {
    slug: "dominican-republic-cruise-planner",
    title: "Dominican Republic Cruise Planner",
    seoTitle: "Dominican Republic Cruise Planner | Puerto Plata Port Day Guide",
    metaDescription:
      "Plan a better Dominican Republic cruise day in Puerto Plata with practical advice on beaches, city touring, cable car views, family options, and private local guides.",
    heroSubtitle:
      "Plan shore excursions in Puerto Plata and Amber Cove with waterfalls, cable car views, and colonial culture.",
    overview:
      "Dominican Republic cruise planning for most Caribbean passengers centers on Puerto Plata and the Amber Cove area. The port offers a strong mix of mountain scenery, colonial city culture, beach options, and adventure trips, making it one of the most flexible single-country cruise destinations in the region.",
    overviewDetail:
      "Puerto Plata works best when travelers choose one clear day style: scenic and cultural, beach and relaxation, or active adventure. The Teleferico and old-town combinations suit first-time visitors, while waterfall and countryside routes appeal to repeat cruisers seeking more movement and local texture.\n\nBecause local travel times and heat can impact pacing, avoid stacking too many major stops. Build in return margin, prioritize guided transport for inland routes, and keep one weather-safe backup option near port. A focused Puerto Plata plan delivers excellent value without the stress of overpacked itineraries.",
    itineraryHighlights: [
      "Teleferico mountain views and city culture in one manageable day",
      "Amber Cove access supports both independent and guided planning styles",
      "Beach, historical center, and adventure routes can all fit cruise schedules",
      "Private guide options are strong for customized Dominican experiences",
      "Great single-port destination for both first-time and repeat Caribbean cruisers",
    ],
    topPortSlugs: ["puerto-plata", "samana", "la-romana"],
    bestExcursions: [
      {
        name: "Teleferico Summit and Botanical Gardens",
        portSlug: "puerto-plata",
        description:
          "A high-value scenic excursion that pairs panoramic views with easy walking and photo-friendly stops.",
      },
      {
        name: "Puerto Plata Historic District and Tastings",
        portSlug: "puerto-plata",
        description:
          "Ideal for culture-focused travelers wanting architecture, local products, and short transfer requirements.",
      },
      {
        name: "Damajagua Waterfalls Adventure",
        portSlug: "puerto-plata",
        description:
          "Best for active cruisers comfortable with uneven terrain and wet conditions in tropical weather.",
      },
      {
        name: "Amber Cove Relaxed Port Day",
        portSlug: "puerto-plata",
        description:
          "A low-stress option featuring pools, food, and shopping without committing to longer inland travel.",
      },
      {
        name: "Private Countryside and Coastline Tour",
        portSlug: "puerto-plata",
        description:
          "Lets small groups blend beaches, viewpoints, and local villages on flexible timing.",
      },
    ],
    suggestedDayPlans: [
      {
        portSlug: "puerto-plata",
        title: "Scenic City Introduction",
        morning:
          "Start with Teleferico for the clearest visibility, then move into historical city landmarks before lunch.",
        afternoon:
          "Enjoy a short local tasting stop and return with time for terminal shopping or pool relaxation.",
        tip: "Morning mountain weather is often clearer and cooler than midday conditions.",
      },
      {
        portSlug: "puerto-plata",
        title: "Adventure-Focused Port Day",
        morning:
          "Depart early for waterfall activities while trails are less crowded and temperatures are moderate.",
        afternoon:
          "Choose one light add-on stop only, such as a viewpoint or beach, before heading back toward port.",
        tip: "Wear secure footwear and avoid planning a second physically demanding activity.",
      },
      {
        portSlug: "puerto-plata",
        title: "Low-Stress Family Day",
        morning:
          "Use port-area amenities or a short nearby beach transfer to keep younger travelers comfortable.",
        afternoon:
          "Add a brief local sightseeing loop if energy is good, then return for an easy embarkation process.",
        tip: "Heat and humidity can tire children quickly, so maintain hydration and shade breaks.",
      },
    ],
    bestBeaches: [
      {
        portSlug: "puerto-plata",
        title: "Organized beach transfers near Puerto Plata",
        advice:
          "Guided transport reduces confusion and protects return timing for passengers unfamiliar with local logistics.",
      },
      {
        portSlug: "puerto-plata",
        title: "Amber Cove pool-and-beach alternatives",
        advice:
          "Best for travelers who value convenience and controlled facilities over long-distance beach travel.",
      },
      {
        portSlug: "puerto-plata",
        title: "Cabarete-style active beach atmosphere",
        advice:
          "Suitable for repeat visitors seeking a more energetic, local beach environment beyond standard cruise options.",
      },
      {
        portSlug: "puerto-plata",
        title: "Short-stay beach add-ons after city tours",
        advice:
          "A practical way to balance sightseeing with relaxation without overextending your day.",
      },
    ],
    bestSnorkelling: [
      {
        portSlug: "puerto-plata",
        title: "Boat-based reef site selection",
        advice:
          "Prioritize operators with backup reef sites because visibility can vary by swell and wind.",
      },
      {
        portSlug: "puerto-plata",
        title: "Coastal cove snorkeling for beginners",
        advice:
          "Choose calmer cove routes if your group includes first-time snorkelers or children.",
      },
      {
        portSlug: "puerto-plata",
        title: "Snorkel plus beach combination outings",
        advice:
          "Best for cruise calls where you want moderate activity without full-day inland excursions.",
      },
      {
        portSlug: "puerto-plata",
        title: "Private snorkel departures for flexibility",
        advice:
          "Useful for small groups wanting custom pacing and reduced boat crowd density.",
      },
    ],
    familyRecommendations: [
      {
        portSlug: "puerto-plata",
        title: "Amber Cove facilities for easy family pacing",
        advice:
          "Good fallback when children are tired or weather conditions make long tours less appealing.",
      },
      {
        portSlug: "puerto-plata",
        title: "Teleferico as a family-friendly scenic option",
        advice:
          "Offers memorable views with less physical demand than waterfall-focused adventures.",
      },
      {
        portSlug: "puerto-plata",
        title: "Short city orientation loops",
        advice:
          "Keep total transfer and walking time moderate to avoid heat-related fatigue in younger passengers.",
      },
      {
        portSlug: "puerto-plata",
        title: "Guided beach days over independent taxis",
        advice:
          "More predictable for families who need clear timing and straightforward return coordination.",
      },
    ],
    privateTourRecommendations: [
      {
        portSlug: "puerto-plata",
        title: "Custom mountain and city private route",
        advice:
          "Excellent for couples and small groups wanting both panoramic scenery and local culture in one day.",
      },
      {
        portSlug: "puerto-plata",
        title: "Private waterfalls with timed entry",
        advice:
          "Reduces waiting and helps you avoid the busiest periods at popular adventure sites.",
      },
      {
        portSlug: "puerto-plata",
        title: "Private beach and tasting itinerary",
        advice:
          "Balances relaxation with cultural stops while preserving enough buffer for smooth return.",
      },
      {
        portSlug: "puerto-plata",
        title: "Driver-guide for repeat cruisers",
        advice:
          "Best for passengers who have done major attractions and want hidden local viewpoints or neighborhoods.",
      },
    ],
    regionPageSlug: "dominican-republic-cruise-ports",
    bestGuideSlugs: [
      "best-caribbean-shore-excursions",
      "best-caribbean-family-excursions",
      "best-caribbean-private-tours",
    ],
    faqs: [
      {
        question: "What is the best first excursion in Puerto Plata?",
        answer:
          "Teleferico plus city highlights is the easiest first-day combination for scenery, culture, and manageable timing.",
      },
      {
        question: "Are Puerto Plata waterfall tours suitable for everyone?",
        answer:
          "They are best for active passengers comfortable on slippery or uneven surfaces; families with small children may prefer gentler options.",
      },
      {
        question: "Should I stay in Amber Cove instead of leaving port?",
        answer:
          "Amber Cove is a strong low-stress choice, but leaving port provides much richer Dominican culture and scenery if time allows.",
      },
      {
        question: "Is private touring worth it in Puerto Plata?",
        answer:
          "Yes, especially for small groups that want flexible pacing between city, beach, and scenic mountain stops.",
      },
      {
        question: "How much buffer time should I keep before all-aboard?",
        answer:
          "Aim for at least 60 to 90 minutes, particularly after inland or multi-stop excursions.",
      },
    ],
  },
  {
    slug: "jamaica-cruise-planner",
    title: "Jamaica Cruise Planner",
    seoTitle: "Jamaica Cruise Planner | Ocho Rios & Falmouth Shore Excursion Guide",
    metaDescription:
      "Plan Jamaica cruise port days in Ocho Rios and Falmouth with practical recommendations for waterfalls, beaches, family options, snorkeling, and private local tours.",
    heroSubtitle:
      "Plan shore excursions in Ocho Rios and Falmouth across waterfall adventures and heritage river days.",
    overview:
      "Jamaica cruise itineraries usually focus on Ocho Rios and Falmouth, two ports with very different strengths. Ocho Rios is adventure-heavy with iconic natural attractions, while Falmouth is better for organized cultural routes, river activities, and access to Montego Bay area beach and resort options.",
    overviewDetail:
      "The best Jamaica planning strategy is to avoid duplicating the same style of excursion at both ports. Use Ocho Rios for a signature active experience like Dunn's River Falls, then make Falmouth your culture, beach, or relaxed private-driver day. This keeps your itinerary varied and reduces activity fatigue.\n\nTravel times in Jamaica can be longer than passengers expect, so excursion choice must match call length. Prioritize operators with strong transport coordination, keep return buffers generous, and choose one anchor activity per day. With clear pacing, Jamaica ports can deliver some of the most memorable and authentic experiences in the Caribbean.",
    itineraryHighlights: [
      "Ocho Rios for Dunn's River Falls and adventure-led shore days",
      "Falmouth for river, heritage, and curated private-driver experiences",
      "Strong potential for combining nature and local culture across two calls",
      "Private tours are especially valuable for flexible pacing in Jamaica",
      "Port-day success depends heavily on realistic transport timing",
    ],
    topPortSlugs: ["ocho-rios", "falmouth", "montego-bay"],
    bestExcursions: [
      {
        name: "Dunn's River Falls Early Entry",
        portSlug: "ocho-rios",
        description:
          "Jamaica's most iconic excursion, best done early to beat crowds and heat on the climb.",
      },
      {
        name: "Mystic Mountain and Scenic Add-On",
        portSlug: "ocho-rios",
        description:
          "A strong choice for families and adventure travelers wanting activity plus elevated island views.",
      },
      {
        name: "Martha Brae River Rafting",
        portSlug: "falmouth",
        description:
          "A slower-paced scenic experience that contrasts well with higher-energy Ocho Rios excursions.",
      },
      {
        name: "Falmouth Heritage and Local Food Route",
        portSlug: "falmouth",
        description:
          "Best for culture-focused travelers seeking architecture, local flavors, and manageable walking distances.",
      },
      {
        name: "Private Jamaica Highlights Tour",
        portSlug: "falmouth",
        description:
          "Allows couples or groups to customize beach, scenic, and cultural stops with flexible timing.",
      },
    ],
    suggestedDayPlans: [
      {
        portSlug: "ocho-rios",
        title: "Adventure Priority Day",
        morning:
          "Head directly to Dunn's River Falls for an early climb slot while conditions are cooler and less crowded.",
        afternoon:
          "Add one secondary stop such as a beach club or short market visit before returning to ship.",
        tip: "Do not schedule multiple physically intense excursions on the same day.",
      },
      {
        portSlug: "falmouth",
        title: "Relaxed Scenic Day",
        morning:
          "Take a river-rafting or scenic countryside excursion for a low-stress, photo-rich experience.",
        afternoon:
          "Return for local food, heritage exploration, or a short beach transfer depending on departure time.",
        tip: "Confirm drive durations in advance because Jamaica traffic can change quickly.",
      },
      {
        portSlug: "falmouth",
        title: "Private Flexible Group Day",
        morning:
          "Start with your highest-priority stop first, usually beach or river, before roads get busier.",
        afternoon:
          "Use your private driver to adapt pacing based on weather, energy levels, and current traffic conditions.",
        tip: "Share all-aboard time early and request a hard latest-return checkpoint.",
      },
    ],
    bestBeaches: [
      {
        portSlug: "ocho-rios",
        title: "Ocho Rios beach add-ons after activity tours",
        advice:
          "Best used as a short recovery stop after waterfall or mountain excursions rather than a full-day base.",
      },
      {
        portSlug: "falmouth",
        title: "Resort-access beaches with facilities",
        advice:
          "Good for travelers wanting predictable amenities and organized transfers from the cruise pier.",
      },
      {
        portSlug: "falmouth",
        title: "Private beach club day options",
        advice:
          "Useful for couples and groups seeking less crowded environments with food service included.",
      },
      {
        portSlug: "ocho-rios",
        title: "Short local beaches near port area",
        advice:
          "Convenient for limited-time calls but best combined with one main attraction for a fuller day.",
      },
    ],
    bestSnorkelling: [
      {
        portSlug: "ocho-rios",
        title: "Boat snorkel add-ons after falls routes",
        advice:
          "Choose concise trips that do not compromise your safe return window after inland activities.",
      },
      {
        portSlug: "falmouth",
        title: "Snorkel and beach packaged transfers",
        advice:
          "Good for travelers who prefer organized logistics rather than independent taxi coordination.",
      },
      {
        portSlug: "ocho-rios",
        title: "Calm-water beginner snorkel areas",
        advice:
          "Prioritize beginner-friendly sites if your group has limited recent snorkeling experience.",
      },
      {
        portSlug: "falmouth",
        title: "Private snorkel charters for custom pacing",
        advice:
          "Best for small groups wanting flexible time allocation between water and beach periods.",
      },
    ],
    familyRecommendations: [
      {
        portSlug: "ocho-rios",
        title: "Family-friendly falls alternatives",
        advice:
          "If full climbs are too demanding, choose gentler scenic parks or beach-based family excursions.",
      },
      {
        portSlug: "falmouth",
        title: "River rafting for mixed-age groups",
        advice:
          "A calmer activity profile makes it easier for families to enjoy the day without overexertion.",
      },
      {
        portSlug: "falmouth",
        title: "Organized transport over independent planning",
        advice:
          "Families benefit from fixed pickup and return windows in ports with variable traffic conditions.",
      },
      {
        portSlug: "ocho-rios",
        title: "Morning-first scheduling for children",
        advice:
          "Complete key activities before midday heat to reduce fatigue and improve overall experience.",
      },
    ],
    privateTourRecommendations: [
      {
        portSlug: "falmouth",
        title: "Private driver for beach and culture combination",
        advice:
          "Ideal for groups that want flexibility and custom pacing without rigid group-tour timelines.",
      },
      {
        portSlug: "ocho-rios",
        title: "Private early-start falls itinerary",
        advice:
          "Helps avoid major crowds and allows smoother sequencing of any secondary afternoon stops.",
      },
      {
        portSlug: "falmouth",
        title: "Private countryside and culinary route",
        advice:
          "Best for repeat visitors wanting local flavor beyond standard cruise excursion catalogs.",
      },
      {
        portSlug: "ocho-rios",
        title: "Custom family-friendly Jamaica day",
        advice:
          "Supports mixed mobility groups by allowing stop lengths and activity intensity to be adjusted in real time.",
      },
    ],
    regionPageSlug: "jamaica-cruise-ports",
    bestGuideSlugs: [
      "best-caribbean-family-excursions",
      "best-caribbean-private-tours",
      "best-caribbean-shore-excursions",
    ],
    faqs: [
      {
        question: "Which Jamaica cruise port is better: Ocho Rios or Falmouth?",
        answer:
          "Ocho Rios is usually better for high-energy adventure days, while Falmouth is better for flexible cultural and scenic planning.",
      },
      {
        question: "Is Dunn's River Falls suitable for all cruise passengers?",
        answer:
          "It is best for active travelers; passengers with mobility concerns should choose gentler alternatives or observation-focused visits.",
      },
      {
        question: "How should I split activities between Jamaica ports?",
        answer:
          "Use Ocho Rios for one anchor adventure and keep Falmouth for relaxed river, beach, or private-driver exploration.",
      },
      {
        question: "Are private tours recommended in Jamaica?",
        answer:
          "Yes, especially for small groups that need flexible scheduling around travel time and changing road conditions.",
      },
      {
        question: "What is the key timing rule for Jamaica cruise days?",
        answer:
          "Protect a generous return buffer, because inland and cross-town transfer times can vary more than in many other Caribbean ports.",
      },
    ],
  },
  {
    slug: "central-america-cruise-planner",
    title: "Central America Cruise Planner",
    seoTitle: "Central America Cruise Planner | Roatan & Costa Maya Shore Excursion Guide",
    metaDescription:
      "Plan Central America cruise port days in Roatan, Costa Maya, and Puerto Limón with reef snorkelling, beach clubs, Mayan ruins, rainforest wildlife, and private tour advice for Western Caribbean sailings.",
    heroSubtitle:
      "Plan shore excursions in Roatan, Costa Maya, and Puerto Limón, three popular Central American cruise ports on Western Caribbean and Panama Canal itineraries.",
    overview:
      "Central America cruise calls on Western Caribbean routes usually focus on Roatan's reef-rich Mahogany Bay, Costa Maya's compact Mahahual cruise village, and Puerto Limón's Costa Rica rainforest wildlife. Roatan delivers exceptional snorkelling value, Costa Maya pairs accessible Mayan ruins with relaxed village beach clubs, and Puerto Limón offers sloth sanctuaries and Veragua Rainforest adventures.",
    overviewDetail:
      "The smartest Central America strategy splits reef intensity from ruin-and-beach pacing and rainforest wildlife. Use Roatan for West Bay snorkelling or Gumbalimba wildlife, Costa Maya for Chacchoben ruins or Mahahual beach clubs, and Puerto Limón for sloth sanctuary tours or Veragua aerial tram adventures. All three ports reward early excursion departures and operators who guarantee on-time pier return.\n\nTransfer times are shorter than many passengers expect at Mahogany Bay and the Costa Maya village pier, but inland ruin and rainforest tours still need disciplined timing. Book one anchor activity per port, keep a weather backup, and compare independent specialists before peak winter weeks sell out popular tours.",
    itineraryHighlights: [
      "Roatan for barrier-reef snorkelling at strong Caribbean value",
      "Costa Maya for Chacchoben ruins and Mahahual beach clubs",
      "Puerto Limón for sloth sanctuaries and Veragua Rainforest adventures",
      "Short pier transfers at Roatan and Costa Maya compared with mainland Mexico routes",
      "Private drivers and snorkel boats widely available in Roatan",
      "Ideal pairing within a broader Western Caribbean or Panama Canal week",
    ],
    topPortSlugs: ["roatan", "costa-maya", "puerto-limon"],
    bestExcursions: [
      {
        name: "West Bay Beach and Reef Snorkel",
        portSlug: "roatan",
        description: "Short transfer from Mahogany Bay to reef snorkelling directly off white sand.",
      },
      {
        name: "Gumbalimba Park Wildlife Day",
        portSlug: "roatan",
        description: "Rainforest wildlife, zip-lines, and beach combo near the cruise pier.",
      },
      {
        name: "Chacchoben Mayan Ruins",
        portSlug: "costa-maya",
        description: "Accessible archaeological site with manageable coach time from the cruise village.",
      },
      {
        name: "Mahahual Beach Club Day",
        portSlug: "costa-maya",
        description: "Relaxed loungers, lunch, and calm swim time without Cozumel-level crowds.",
      },
      {
        name: "Private Roatan Snorkel Charter",
        portSlug: "roatan",
        description: "Custom reef stops with flexible departure times for small groups.",
      },
      {
        name: "Sloth Sanctuary Wildlife Tour",
        portSlug: "puerto-limon",
        description: "Rainforest sanctuary visit with sloths, monkeys, and tropical birds near Limón.",
      },
      {
        name: "Veragua Rainforest Adventure",
        portSlug: "puerto-limon",
        description: "Aerial tram, zip-line, and waterfall trails in primary Costa Rican rainforest.",
      },
    ],
    suggestedDayPlans: [
      {
        portSlug: "roatan",
        title: "Reef and Beach Value Day",
        morning: "Taxi to West Bay for morning snorkelling while reefs are calmer and less crowded.",
        afternoon: "Beach chairs and lunch at West Bay before an easy return to Mahogany Bay.",
        tip: "West Bay transfers are among the Caribbean's best-value custom beach days.",
      },
      {
        portSlug: "costa-maya",
        title: "Ruins Morning, Beach Afternoon",
        morning: "Depart early for Chacchoben before coach groups peak at the archaeological site.",
        afternoon: "Mahahual beach club with a strict return checkpoint agreed with your operator.",
        tip: "Do not stack a long ruin tour with a distant second stop on shorter port calls.",
      },
      {
        portSlug: "puerto-limon",
        title: "Wildlife Sanctuary Focus Day",
        morning: "Depart early for sloth sanctuary tour before coach groups peak at rainforest sites.",
        afternoon: "Optional Cahuita beach extension only if your operator confirms pier return timing.",
        tip: "Rainforest tours dominate Limón; pack insect repellent and light rain gear year-round.",
      },
    ],
    bestBeaches: [
      {
        portSlug: "roatan",
        title: "West Bay for full-day white sand",
        advice: "Best overall beach choice in this cluster for snorkelling directly off the sand.",
      },
      {
        portSlug: "costa-maya",
        title: "Mahahual village beach clubs",
        advice: "Organized loungers and lunch without long-distance beach transfers.",
      },
      {
        portSlug: "puerto-limon",
        title: "Cahuita National Park beach",
        advice: "Protected Caribbean sand paired with reef snorkel on organized half-day tours.",
      },
    ],
    bestSnorkelling: [
      {
        portSlug: "roatan",
        title: "West End and West Bay reef sites",
        advice: "Fewer boats than Cozumel with healthy hard and soft coral.",
      },
      {
        portSlug: "costa-maya",
        title: "Village-area boat snorkel add-ons",
        advice: "Choose concise trips that protect your return window after ruin mornings.",
      },
      {
        portSlug: "puerto-limon",
        title: "Cahuita National Park reef",
        advice: "Best Caribbean reef snorkel near Limón; allow 45 minutes coach time each way.",
      },
    ],
    familyRecommendations: [
      {
        portSlug: "roatan",
        title: "Gumbalimba for mixed-age groups",
        advice: "Controlled wildlife encounters and activities without long open-ocean boat rides.",
      },
      {
        portSlug: "costa-maya",
        title: "Cruise village pool day",
        advice: "Low-stress option when younger travellers need shade and facilities close to port.",
      },
      {
        portSlug: "puerto-limon",
        title: "Sloth sanctuary for all ages",
        advice: "Guaranteed wildlife viewing without long hikes or open-ocean boat rides.",
      },
    ],
    privateTourRecommendations: [
      {
        portSlug: "roatan",
        title: "Private taxi to West Bay",
        advice: "Excellent value for groups wanting custom beach-and-snorkel pacing.",
      },
      {
        portSlug: "costa-maya",
        title: "Small-group ruins tour",
        advice: "Moves faster than large coaches and protects afternoon beach time.",
      },
      {
        portSlug: "puerto-limon",
        title: "Private sanctuary and coast tour",
        advice: "Custom wildlife stops with optional Cahuita snorkel extension on a flexible timeline.",
      },
    ],
    regionPageSlug: "western-caribbean-cruise-ports",
    bestGuideSlugs: [
      "best-caribbean-snorkeling-excursions",
      "best-caribbean-beach-excursions",
      "best-caribbean-private-tours",
    ],
    faqs: [
      {
        question: "Which Central America cruise port is better for snorkelling?",
        answer:
          "Roatan is stronger for reef quality and value. Costa Maya offers moderate snorkel add-ons but is better known for ruins and village beach clubs.",
      },
      {
        question: "Can I visit Mayan ruins from Costa Maya on a cruise day?",
        answer:
          "Yes. Chacchoben is the most popular ruin excursion with manageable transfers from the cruise village pier.",
      },
      {
        question: "How does Roatan compare with Cozumel?",
        answer:
          "Cozumel has deeper operator choice, but Roatan often delivers comparable reef quality with fewer boats and lower prices.",
      },
      {
        question: "Are private tours worth it in Roatan?",
        answer:
          "Yes. Private drivers to West Bay and small snorkel boats are widely available at strong Caribbean value.",
      },
      {
        question: "What is the key timing rule for Central America port days?",
        answer:
          "Book one anchor activity per port and keep 60-90 minutes before all-aboard, especially after inland ruin tours.",
      },
    ],
  },
];

export function getItineraryPlannerBySlug(slug: string): ItineraryPlannerPage | undefined {
  return itineraryPlanners.find((p) => p.slug === slug);
}

export function getAllItineraryPlannerSlugs(): string[] {
  return itineraryPlanners.map((p) => p.slug);
}
