import type { RegionalCruisePlannerPage } from "./types";

export const regionalCruisePlanners: RegionalCruisePlannerPage[] = [
  {
    slug: "abc-islands-cruise-planner",
    title: "ABC Islands Cruise Planner",
    seoTitle: "ABC Islands Cruise Planner",
    metaDescription:
      "Plan better ABC Islands cruise days in Aruba and Curacao with practical guidance on beaches, snorkeling, private tours, and family-friendly shore planning.",
    heroSubtitle:
      "Plan shore excursions in Aruba and Curacao, the ABC Islands cruise ports covered on this site.",
    overview:
      "ABC Islands cruise itineraries combine two of the Caribbean's most consistent, weather-friendly ports: Aruba and Curacao. Aruba is ideal for dependable beach logistics and polished seaside facilities, while Curacao adds colorful architecture, walkable old town character, and excellent snorkeling coves for more varied port days.",
    overviewDetail:
      "The smartest ABC strategy is to give each island a different role. Use Aruba for a low-stress beach-first day with optional sailing, then use Curacao for culture plus reef time. That pacing prevents repetition and gives your itinerary both relaxation and local depth.\n\nBecause many cruise calls are full but not extremely long, transfer efficiency matters. In Aruba, choose excursions with short terminal pickups and predictable return timing. In Curacao, organize whether you are prioritizing Willemstad or west-coast coves before you leave the pier. With clear priorities, ABC itineraries deliver some of the best value-per-port day in the Southern Caribbean.",
    portComparison:
      "Aruba is stronger for straightforward beach execution, sunshine reliability, and first-time cruiser convenience. Curacao is stronger for architectural atmosphere, mixed culture-and-snorkel days, and travelers who want a less resort-only feel. Most passengers get the best overall trip by making Aruba the classic beach day and Curacao the exploratory day.",
    comparisonTable: [
      {
        portSlug: "aruba",
        portName: "Aruba",
        bestFor: "Reliable beach days",
        bestExcursion: "Eagle Beach and coastal catamaran",
        transferTime: "10-15 min taxi",
        rating: "4.9",
      },
      {
        portSlug: "curacao",
        portName: "Curacao",
        bestFor: "Culture plus snorkeling",
        bestExcursion: "Willemstad and west-cove snorkel combo",
        transferTime: "15-35 min taxi",
        rating: "4.8",
      },
    ],
    topPortSlugs: ["aruba", "curacao", "bonaire"],
    bestExcursions: [
      {
        name: "Eagle Beach Relaxed Morning",
        portSlug: "aruba",
        description:
          "A reliable, low-stress beach plan with broad shoreline space and easy facilities for mixed-age groups.",
      },
      {
        name: "Arikok Natural Pool 4x4 Route",
        portSlug: "aruba",
        description:
          "Best for active travelers who want dramatic coastal scenery beyond Aruba's resort strip.",
      },
      {
        name: "Willemstad Historic Quarters Walk",
        portSlug: "curacao",
        description:
          "Ideal for architecture, local food, and culture-focused passengers who prefer compact city exploration.",
      },
      {
        name: "Curacao West Coast Snorkel Coves",
        portSlug: "curacao",
        description:
          "One of the region's best cove-snorkel options for clear water and calmer entry points.",
      },
      {
        name: "Sunset Harbor Sail",
        portSlug: "aruba",
        description:
          "Great on late-departure calls when you want a premium finish without overloading daytime logistics.",
      },
    ],
    bestBeaches: [
      {
        portSlug: "aruba",
        title: "Eagle Beach for consistent swim conditions",
        advice:
          "Best all-around beach choice in this planner for easy setup, shade options, and stable weather.",
      },
      {
        portSlug: "aruba",
        title: "Palm Beach for activity and amenities",
        advice:
          "Choose this when your group wants watersports access and full-service beach clubs in one area.",
      },
      {
        portSlug: "curacao",
        title: "West-coast coves for quieter beach time",
        advice:
          "Better than city-adjacent beaches when you prioritize snorkeling quality and lower crowd density.",
      },
      {
        portSlug: "curacao",
        title: "Urban beach stops near Willemstad",
        advice:
          "Useful as short add-ons after city touring rather than as full-day beach destinations.",
      },
    ],
    privateTourRecommendations: [
      {
        portSlug: "aruba",
        title: "Private island loop by SUV",
        advice:
          "Best for groups wanting custom timing between lighthouse views, desert landscapes, and a final beach stop.",
      },
      {
        portSlug: "curacao",
        title: "Private Willemstad plus cove route",
        advice:
          "Excellent for travelers who want one cultural anchor plus flexible snorkeling or swim time.",
      },
      {
        portSlug: "aruba",
        title: "Private catamaran half-day charter",
        advice:
          "Worth it for couples or small groups seeking less crowded reef time and custom pacing.",
      },
      {
        portSlug: "curacao",
        title: "Private west-coast cove circuit",
        advice:
          "Ask for realistic stop counts to preserve a full return buffer before all-aboard.",
      },
    ],
    familyRecommendations: [
      {
        portSlug: "aruba",
        title: "Calm beach-first day for younger children",
        advice:
          "Aruba is the easiest family port in this planner thanks to dependable facilities and short transfers.",
      },
      {
        portSlug: "curacao",
        title: "Short city walk plus one swim stop",
        advice:
          "Keep Curacao family days simple with one cultural stop and one water stop to avoid fatigue.",
      },
      {
        portSlug: "aruba",
        title: "All-in-one island day formats",
        advice:
          "Choose organized options with included food and shade when traveling with multiple age groups.",
      },
      {
        portSlug: "curacao",
        title: "Beginner-friendly cove snorkeling",
        advice:
          "Select calmer cove entries rather than open-water boat routes for first-time junior snorkelers.",
      },
    ],
    regionPageSlug: "southern-caribbean-cruise-ports",
    parentPlannerSlug: "southern-caribbean-cruise-planner",
    relatedRegionalPlannerSlugs: [
      "virgin-islands-cruise-planner",
      "bahamas-cruise-planner",
      "mexican-caribbean-cruise-planner",
    ],
    excursionTypeSlugs: ["beaches", "snorkeling", "private-tours", "catamaran-cruises"],
    bestGuideSlugs: [
      "best-caribbean-beach-excursions",
      "best-caribbean-snorkeling-excursions",
      "best-caribbean-catamaran-cruises",
    ],
    faqs: [
      {
        question: "Is Aruba or Curacao better for a classic beach day?",
        answer:
          "Aruba is usually better for a straightforward beach day because transfer logistics are simpler and conditions are consistently swim-friendly.",
      },
      {
        question: "What is Curacao best known for on a cruise stop?",
        answer:
          "Curacao stands out for colorful Willemstad architecture, local food walking routes, and west-coast cove snorkeling.",
      },
      {
        question: "Should I do snorkeling on both ABC island calls?",
        answer:
          "Usually no. Most passengers enjoy better variety by snorkeling in Curacao and using Aruba for beach or sailing.",
      },
      {
        question: "Are private tours worthwhile on ABC itineraries?",
        answer:
          "Yes, especially for groups that want custom timing or mixed interests across beach, culture, and scenic stops.",
      },
      {
        question: "What is the biggest ABC planning mistake?",
        answer:
          "Treating Aruba and Curacao as interchangeable beach ports instead of giving each port a distinct day style.",
      },
    ],
  },
  {
    slug: "virgin-islands-cruise-planner",
    title: "Virgin Islands Cruise Planner",
    seoTitle: "Virgin Islands Cruise Planner",
    metaDescription:
      "Plan Virgin Islands cruise days in St. Thomas and St. Maarten with advice on Magens Bay, St. John ferry access, Orient Bay, dual-nation touring, and private shore excursions.",
    heroSubtitle:
      "Plan shore excursions in St. Thomas and St. Maarten across the U.S. and Dutch Caribbean.",
    overview:
      "Virgin Islands cruise planning pairs St. Thomas beach-and-ferry flexibility with St. Maarten's dual-nation character. St. Thomas delivers Magens Bay, optional St. John access, and easy pier logistics, while St. Maarten adds Orient Bay, Maho plane spotting, and French-side dining in a single call.",
    overviewDetail:
      "Treat each port as a distinct day style. On St. Thomas, decide early whether you are staying local or committing to a St. John ferry for Trunk Bay. On St. Maarten, choose between a beach-club day at Orient Bay or a split Dutch-French island circuit with disciplined taxi timing.\n\nAvoid island-hopping overload on either stop. Build realistic transfer margins, pick one anchor experience per port, and leave at least one hour of return buffer before all-aboard. With clear pacing, Virgin Islands itineraries deliver some of the Eastern Caribbean's highest-value port days.",
    portComparison:
      "St. Thomas is best for calm swimming, St. John ferry add-ons, and first-time cruiser confidence. St. Maarten is best for dual-nation beach culture, lively waterfront energy, and passengers who want French-side dining paired with Dutch-side shopping in one day.",
    comparisonTable: [
      {
        portSlug: "st-thomas",
        portName: "St. Thomas",
        bestFor: "Beaches & St. John access",
        bestExcursion: "Magens Bay and optional St. John ferry",
        transferTime: "10-20 min taxi",
        rating: "4.9",
      },
      {
        portSlug: "st-maarten",
        portName: "St. Maarten",
        bestFor: "Dual-nation beach days",
        bestExcursion: "Orient Bay and Philipsburg loop",
        transferTime: "15-30 min taxi",
        rating: "4.8",
      },
    ],
    topPortSlugs: ["st-thomas", "st-maarten", "tortola", "puerto-plata", "samana", "la-romana"],
    bestExcursions: [
      {
        name: "Magens Bay Beach and Viewpoint Loop",
        portSlug: "st-thomas",
        description:
          "The strongest first-time option for calm swimming, scenic photos, and straightforward timing.",
      },
      {
        name: "St. John Ferry and Trunk Bay Plan",
        portSlug: "st-thomas",
        description:
          "A top-value premium day when your call is long enough to support inter-island movement.",
      },
      {
        name: "Sapphire Beach Snorkel Morning",
        portSlug: "st-thomas",
        description:
          "Great for reef access with simpler logistics than a full St. John transfer day.",
      },
      {
        name: "Charlotte Amalie Harbor Heritage Walk",
        portSlug: "st-thomas",
        description:
          "Ideal for passengers who want low-stress culture, food, and shopping near the port zone.",
      },
      {
        name: "Half-Day Catamaran to Nearby Cays",
        portSlug: "st-thomas",
        description:
          "Balances sailing, snorkel time, and manageable return timing for mixed-interest groups.",
      },
      {
        name: "Orient Bay Beach Club Day",
        portSlug: "st-maarten",
        description:
          "French-side beach club with loungers, lunch service, and calm swim conditions on longer calls.",
      },
      {
        name: "Maho Beach and Philipsburg Highlights",
        portSlug: "st-maarten",
        description:
          "Combines plane-spotting spectacle with Dutch-side shopping and waterfront browsing.",
      },
    ],
    bestBeaches: [
      {
        portSlug: "st-thomas",
        title: "Magens Bay for calm water reliability",
        advice:
          "Best all-around Virgin Islands beach day for families and first-time cruisers.",
      },
      {
        portSlug: "st-thomas",
        title: "Sapphire Beach for snorkel-plus-beach value",
        advice:
          "Choose this when you want water activity options without committing to St. John transfer time.",
      },
      {
        portSlug: "st-thomas",
        title: "St. John Trunk Bay access",
        advice:
          "Outstanding scenery and reef quality, but only choose it when your schedule comfortably supports the transit.",
      },
      {
        portSlug: "st-thomas",
        title: "Lindbergh-style short-transfer beach stops",
        advice:
          "Useful backup for shorter calls or uncertain weather when you need easy ship-return control.",
      },
      {
        portSlug: "st-maarten",
        title: "Orient Bay for French-side beach clubs",
        advice:
          "Best signature beach day on St. Maarten with full-service facilities and water sports options.",
      },
      {
        portSlug: "st-maarten",
        title: "Dutch-side beach stops near Philipsburg",
        advice:
          "Convenient shorter-beach options when you want shopping and sand in one compact route.",
      },
    ],
    privateTourRecommendations: [
      {
        portSlug: "st-thomas",
        title: "Private island highlights taxi route",
        advice:
          "Best for small groups who want custom timing between viewpoints, beach, and harbor areas.",
      },
      {
        portSlug: "st-thomas",
        title: "Private St. John transfer-focused day",
        advice:
          "Ideal when your top priority is Trunk Bay and you want tighter control of return pacing.",
      },
      {
        portSlug: "st-thomas",
        title: "Private snorkel boat for nearby cays",
        advice:
          "Works well for experienced snorkelers who want better site flexibility than group boats provide.",
      },
      {
        portSlug: "st-thomas",
        title: "Custom family pace with dedicated driver",
        advice:
          "A strong option when your group needs flexible stop lengths and shade or meal breaks.",
      },
      {
        portSlug: "st-maarten",
        title: "Private Dutch-French island split",
        advice:
          "Ideal for couples or small groups wanting custom timing between Orient Bay, Maho, and Marigot.",
      },
      {
        portSlug: "st-maarten",
        title: "Private catamaran to Tintamarre",
        advice:
          "Uninhabited islet snorkel sail with flexible departure for experienced snorkelers.",
      },
    ],
    familyRecommendations: [
      {
        portSlug: "st-thomas",
        title: "Magens Bay as the family default",
        advice:
          "Simple logistics and calm entry make it the safest planning baseline for most family groups.",
      },
      {
        portSlug: "st-thomas",
        title: "Single-island focus over island-hopping",
        advice:
          "Families usually enjoy the day more by avoiding a tight St. Thomas plus St. John schedule.",
      },
      {
        portSlug: "st-thomas",
        title: "Morning-first beach planning",
        advice:
          "Start early for cooler conditions and better chair availability on multi-ship calls.",
      },
      {
        portSlug: "st-thomas",
        title: "Short harbor add-on after beach time",
        advice:
          "A brief waterfront walk or shopping stop adds variety without creating return stress.",
      },
      {
        portSlug: "st-maarten",
        title: "Orient Bay over dual-nation marathon days",
        advice:
          "Families usually enjoy one relaxed beach club day more than rushing both sides of the island.",
      },
      {
        portSlug: "st-maarten",
        title: "Morning beach, afternoon pier return",
        advice:
          "Start early at Orient Bay to beat heat and traffic on multi-ship days.",
      },
    ],
    regionPageSlug: "eastern-caribbean-cruise-ports",
    parentPlannerSlug: "eastern-caribbean-cruise-planner",
    relatedRegionalPlannerSlugs: [
      "abc-islands-cruise-planner",
      "bahamas-cruise-planner",
      "mexican-caribbean-cruise-planner",
    ],
    excursionTypeSlugs: ["beaches", "snorkeling", "private-tours", "catamaran-cruises"],
    bestGuideSlugs: [
      "best-caribbean-beach-excursions",
      "best-caribbean-snorkeling-excursions",
      "best-caribbean-private-tours",
    ],
    faqs: [
      {
        question: "Is it realistic to visit St. John on a St. Thomas cruise day?",
        answer:
          "Yes on longer calls, but only if you treat St. John as the main plan and protect return buffer time.",
      },
      {
        question: "St. Thomas or St. Maarten for a first-time Virgin Islands call?",
        answer:
          "St. Thomas is easier for calm beaches and simple logistics; St. Maarten is better for dual-nation culture and lively beach clubs.",
      },
      {
        question: "Should I pick Sapphire Beach or Magens Bay?",
        answer:
          "Pick Magens for calmer family swimming and simpler beach flow; pick Sapphire for stronger snorkel potential.",
      },
      {
        question: "What is the best St. Maarten beach day?",
        answer:
          "Orient Bay beach club days are the most reliable signature experience, especially on longer port calls.",
      },
      {
        question: "What planning mistake is most common here?",
        answer:
          "Trying to fully tour two islands or both nations in one call, which often creates rushed or stressful returns.",
      },
    ],
  },
  {
    slug: "bahamas-cruise-planner",
    title: "Bahamas Cruise Planner",
    seoTitle: "Bahamas Cruise Planner",
    metaDescription:
      "Plan Bahamas and Cayman cruise days in Nassau and Grand Cayman with advice on Atlantis, Stingray City, Rose Island snorkel, Seven Mile Beach, and private tours.",
    heroSubtitle:
      "Plan shore excursions in Nassau and Grand Cayman across walkable piers and tender wildlife days.",
    overview:
      "Bahamas cruise planning pairs Nassau's walkable resort-and-reef options with Grand Cayman's signature Stingray City wildlife and Seven Mile Beach. Nassau rewards early booking on busy ship days, while Grand Cayman needs tender awareness and morning-first wildlife timing.",
    overviewDetail:
      "Give each port a different role. Use Nassau for Atlantis, Rose Island snorkel, or a compact downtown route, then treat Grand Cayman as your wildlife-and-beach anchor with an early Stingray City departure. Both ports are high-traffic, so decisive planning beats pier-side improvisation.\n\nBuild tender and taxi margins into Grand Cayman days, and pre-book capacity-limited Nassau activities before arrival. Pick one anchor experience per call, keep a weather backup, and protect at least 60 minutes before all-aboard. Structured pacing makes this pairing one of the Caribbean's most family-friendly combinations.",
    portComparison:
      "Nassau is strongest for walkable pier access, Atlantis-style family days, and high excursion variety. Grand Cayman is strongest for Stingray City wildlife, premium reef snorkelling, and Seven Mile Beach, but requires tender logistics and earlier departure discipline.",
    comparisonTable: [
      {
        portSlug: "nassau",
        portName: "Nassau",
        bestFor: "Family resort and easy logistics",
        bestExcursion: "Atlantis Aquaventure or Rose Island snorkel",
        transferTime: "10-25 min by taxi or boat",
        rating: "4.8",
      },
      {
        portSlug: "grand-cayman",
        portName: "Grand Cayman",
        bestFor: "Stingray City wildlife",
        bestExcursion: "Stingray sandbar and reef snorkel",
        transferTime: "30-40 min tender plus boat",
        rating: "4.9",
      },
    ],
    topPortSlugs: ["nassau", "grand-cayman"],
    bestExcursions: [
      {
        name: "Atlantis Aquaventure Day Pass",
        portSlug: "nassau",
        description:
          "Best for families and active groups who want slides, pools, and controlled facilities in one package.",
      },
      {
        name: "Rose Island Catamaran Snorkel",
        portSlug: "nassau",
        description:
          "A reliable half-day reef option that still leaves time for shopping or relaxed ship return.",
      },
      {
        name: "Historic Nassau and Food Walk",
        portSlug: "nassau",
        description:
          "Great for culture-focused travelers who prefer walkable local flavor over full-day resort pricing.",
      },
      {
        name: "Blue Lagoon Style Beach Day",
        portSlug: "nassau",
        description:
          "Useful for passengers who want structured beach comfort and simple round-trip logistics.",
      },
      {
        name: "Private Nassau Coastal Highlights Tour",
        portSlug: "nassau",
        description:
          "Best for repeat visitors who want flexibility beyond standard Atlantis or downtown-only plans.",
      },
      {
        name: "Stingray City Early Departure",
        portSlug: "grand-cayman",
        description:
          "Book the first tender-friendly slot to reduce sandbar crowding and protect afternoon return time.",
      },
      {
        name: "Seven Mile Beach Organized Break",
        portSlug: "grand-cayman",
        description:
          "Structured beach transfer with tender-aware return timing for mixed-age groups.",
      },
    ],
    bestBeaches: [
      {
        portSlug: "nassau",
        title: "Paradise Island beaches for facilities",
        advice:
          "The best overall choice when you need showers, dining, and predictable family amenities.",
      },
      {
        portSlug: "nassau",
        title: "Rose Island for cleaner snorkel-focused water",
        advice:
          "Choose boat-based access if your priority is reef quality and fewer downtown crowds.",
      },
      {
        portSlug: "nassau",
        title: "Cable Beach for a calmer urban beach profile",
        advice:
          "A good alternative for travelers who want a less congested feel than central Nassau spots.",
      },
      {
        portSlug: "nassau",
        title: "Short downtown beach access options",
        advice:
          "Convenient but can be crowded; best used for quick swims rather than a full signature beach day.",
      },
      {
        portSlug: "grand-cayman",
        title: "Seven Mile Beach for full-day sand",
        advice:
          "Best overall beach choice when you want premium sand with organized tender-aware transport.",
      },
      {
        portSlug: "grand-cayman",
        title: "Cemetery Reef area for snorkel focus",
        advice:
          "Pair with a morning wildlife stop rather than as a rushed add-on after Stingray City.",
      },
    ],
    privateTourRecommendations: [
      {
        portSlug: "nassau",
        title: "Private city and coastline driver-guide",
        advice:
          "Ideal for couples or groups wanting controlled timing between viewpoints, food stops, and beaches.",
      },
      {
        portSlug: "nassau",
        title: "Private Rose Island charter option",
        advice:
          "Strong for snorkel-focused groups who prefer custom pacing and smaller onboard numbers.",
      },
      {
        portSlug: "nassau",
        title: "Private family-focused island loop",
        advice:
          "Useful when your group has mixed ages and needs frequent shade, food, or schedule adjustments.",
      },
      {
        portSlug: "nassau",
        title: "Private half-day flexible plan",
        advice:
          "Best on shorter calls when you want one premium stop plus easy guaranteed return margin.",
      },
      {
        portSlug: "grand-cayman",
        title: "Private early Stingray charter",
        advice:
          "Worth the premium for smaller groups wanting custom sandbar timing before crowds arrive.",
      },
      {
        portSlug: "grand-cayman",
        title: "Private stingray and reef combo boat",
        advice:
          "Ideal when your group wants wildlife plus snorkelling without fixed large-tour pacing.",
      },
    ],
    familyRecommendations: [
      {
        portSlug: "nassau",
        title: "Atlantis for all-day all-ages energy",
        advice:
          "Reserve early on heavy ship days and verify height rules before finalizing younger-child plans.",
      },
      {
        portSlug: "nassau",
        title: "Half-day boat plus beach format",
        advice:
          "Families often do better with moderate-duration plans than full-day, high-heat over-scheduling.",
      },
      {
        portSlug: "nassau",
        title: "Structured transport over ad hoc taxis",
        advice:
          "Pre-arranged transfer timing reduces stress in one of the Caribbean's busiest cruise environments.",
      },
      {
        portSlug: "nassau",
        title: "One anchor activity rule",
        advice:
          "Pick either waterpark, snorkel, or city focus to keep the day enjoyable and avoid fatigue.",
      },
      {
        portSlug: "grand-cayman",
        title: "Stingray City as the family wildlife default",
        advice:
          "Shallow sandbar conditions suit most ages when booked with a reputable operator and early tender timing.",
      },
      {
        portSlug: "grand-cayman",
        title: "Tender-first morning planning",
        advice:
          "Queue for early tenders on wildlife days to protect your excursion window and return buffer.",
      },
    ],
    regionPageSlug: "eastern-caribbean-cruise-ports",
    parentPlannerSlug: "eastern-caribbean-cruise-planner",
    relatedRegionalPlannerSlugs: [
      "abc-islands-cruise-planner",
      "virgin-islands-cruise-planner",
      "mexican-caribbean-cruise-planner",
    ],
    excursionTypeSlugs: ["beaches", "family-tours", "snorkeling", "private-tours"],
    bestGuideSlugs: [
      "best-caribbean-family-excursions",
      "best-caribbean-beach-excursions",
      "best-caribbean-private-tours",
      "best-caribbean-wildlife-excursions",
    ],
    faqs: [
      {
        question: "Nassau or Grand Cayman for a first-time Bahamas cruise day?",
        answer:
          "Nassau is easier with walkable pier access; Grand Cayman is more memorable for wildlife but needs tender planning.",
      },
      {
        question: "What is the best first-time Nassau excursion?",
        answer:
          "Atlantis for families or Rose Island snorkeling for mixed groups are the most reliable first-time choices.",
      },
      {
        question: "How early should I book Stingray City?",
        answer:
          "Reserve the first available departure after tender clearance to reduce crowding and protect your return window.",
      },
      {
        question: "Are private tours useful in Nassau?",
        answer:
          "Yes, especially for repeat visitors and groups that want better pacing than fixed large-group tours.",
      },
      {
        question: "What is the biggest planning error in this cluster?",
        answer:
          "Underestimating Grand Cayman tender time or overloading Nassau with too many disconnected activities in one day.",
      },
    ],
  },
  {
    slug: "mexican-caribbean-cruise-planner",
    title: "Mexican Caribbean Cruise Planner",
    seoTitle: "Mexican Caribbean Cruise Planner",
    metaDescription:
      "Plan stronger Mexican Caribbean cruise days in Cozumel and Costa Maya with detailed advice on reefs, ruins, beaches, private tours, and family options.",
    heroSubtitle:
      "Plan shore excursions in Cozumel and Costa Maya across reef snorkelling and Mayan ruin routes.",
    overview:
      "Mexican Caribbean cruise planning is about using Cozumel and Costa Maya for complementary experiences instead of duplicate beach days. Cozumel is the region's reef and marine-activity powerhouse, while Costa Maya offers easier access to Mayan history and lower-pressure beach-town pacing around Mahahual.",
    overviewDetail:
      "The best approach is to make Cozumel your water-first day and Costa Maya your land-and-culture day, with optional beach recovery time. This creates variety while keeping transfer loads manageable across both ports.\n\nCozumel offers huge excursion volume, so quality selection matters more than availability. Costa Maya is simpler but can feel underplanned if you do not choose between ruins, beach clubs, or private local routes in advance. By defining one anchor experience per call, Mexican Caribbean itineraries become both efficient and highly memorable.",
    portComparison:
      "Cozumel is strongest for reef snorkeling, marine excursion depth, and operator choice. Costa Maya is strongest for Chacchoben history, relaxed beach-town value, and lower-intensity pacing. Most cruisers get the best outcome by snorkeling in Cozumel and doing ruins or Mahahual in Costa Maya.",
    comparisonTable: [
      {
        portSlug: "cozumel",
        portName: "Cozumel",
        bestFor: "Reef and snorkel excellence",
        bestExcursion: "Palancar and Colombia reef combo",
        transferTime: "10-25 min by taxi or boat",
        rating: "4.9",
      },
      {
        portSlug: "costa-maya",
        portName: "Costa Maya",
        bestFor: "Ruins and beach-town value",
        bestExcursion: "Chacchoben ruins with local guide",
        transferTime: "15-55 min by taxi or coach",
        rating: "4.7",
      },
    ],
    topPortSlugs: ["cozumel", "costa-maya", "progreso", "roatan", "puerto-limon"],
    bestExcursions: [
      {
        name: "Palancar Reef Two-Stop Snorkel",
        portSlug: "cozumel",
        description:
          "Top reef quality and marine diversity for cruisers who want the strongest water experience in this planner.",
      },
      {
        name: "El Cielo Sandbar Catamaran",
        portSlug: "cozumel",
        description:
          "A premium, high-visual-value day combining calm shallows, snorkel stops, and excellent photo opportunities.",
      },
      {
        name: "Chacchoben Ruins Cultural Route",
        portSlug: "costa-maya",
        description:
          "The best history-focused option with manageable logistics when timed through established operators.",
      },
      {
        name: "Mahahual Beach Club Recovery Day",
        portSlug: "costa-maya",
        description:
          "Great lower-intensity follow-up after a more active Cozumel day, with food and lounge access.",
      },
      {
        name: "Private Coast-and-Culture Combination",
        portSlug: "costa-maya",
        description:
          "Best for small groups wanting a custom mix of ruins highlights and relaxed shoreline time.",
      },
    ],
    bestBeaches: [
      {
        portSlug: "cozumel",
        title: "Beach clubs with controlled amenities",
        advice:
          "Best for passengers who want predictable food, seating, and return timing around snorkel plans.",
      },
      {
        portSlug: "cozumel",
        title: "Southern shoreline beach-snorkel mixes",
        advice:
          "Ideal when your group wants one location that supports both swimming and reef viewing.",
      },
      {
        portSlug: "costa-maya",
        title: "Mahahual beachfront for value",
        advice:
          "Strong budget-friendly beach option with a more local atmosphere than resort-dominant ports.",
      },
      {
        portSlug: "costa-maya",
        title: "Post-ruins short beach reset",
        advice:
          "A practical add-on if you want to decompress after inland travel before returning to the ship.",
      },
    ],
    privateTourRecommendations: [
      {
        portSlug: "cozumel",
        title: "Private reef boat charter",
        advice:
          "Best for experienced snorkelers seeking flexible site sequencing and smaller group conditions.",
      },
      {
        portSlug: "costa-maya",
        title: "Private ruins-first itinerary",
        advice:
          "Useful for avoiding larger group pacing and preserving time for one relaxed shoreline stop.",
      },
      {
        portSlug: "cozumel",
        title: "Private island loop by vehicle",
        advice:
          "Great for mixed groups that want beach, viewpoint, and local-food stops in a single day.",
      },
      {
        portSlug: "costa-maya",
        title: "Private Mahahual and local town route",
        advice:
          "A good repeat-cruiser option when you prefer low-stress exploration over full archaeological depth.",
      },
    ],
    familyRecommendations: [
      {
        portSlug: "cozumel",
        title: "Structured marine parks and beach clubs",
        advice:
          "Families benefit from controlled facilities and shorter transfers compared with more remote alternatives.",
      },
      {
        portSlug: "costa-maya",
        title: "Ruins at moderate pacing",
        advice:
          "Keep expectations realistic on heat and walking distance, then pair with a shorter beach recovery stop.",
      },
      {
        portSlug: "cozumel",
        title: "Beginner-friendly snorkel options",
        advice:
          "Select calmer, guided reef entries if children are new to snorkeling or open-water conditions.",
      },
      {
        portSlug: "costa-maya",
        title: "Single-focus beach day for younger kids",
        advice:
          "Mahahual-only days are often easier for younger families than long inland cultural circuits.",
      },
    ],
    regionPageSlug: "western-caribbean-cruise-ports",
    parentPlannerSlug: "western-caribbean-cruise-planner",
    relatedRegionalPlannerSlugs: [
      "abc-islands-cruise-planner",
      "virgin-islands-cruise-planner",
      "bahamas-cruise-planner",
    ],
    excursionTypeSlugs: ["snorkeling", "beaches", "private-tours", "adventure-tours"],
    bestGuideSlugs: [
      "best-caribbean-snorkeling-excursions",
      "best-caribbean-shore-excursions",
      "best-caribbean-private-tours",
    ],
    faqs: [
      {
        question: "Should I prioritize Cozumel or Costa Maya for snorkeling?",
        answer:
          "Cozumel is clearly stronger for snorkeling depth, reef quality, and operator consistency.",
      },
      {
        question: "Is Costa Maya worth it for travelers not focused on ruins?",
        answer:
          "Yes, especially for Mahahual beach value and lower-intensity port pacing compared with busier hubs.",
      },
      {
        question: "Can I do ruins and beach in one Costa Maya day?",
        answer:
          "Yes if you keep the ruins stop disciplined and choose a short, preplanned beach segment afterward.",
      },
      {
        question: "Are private tours recommended in the Mexican Caribbean?",
        answer:
          "They are often excellent value for small groups and help reduce rigid group-tour timing constraints.",
      },
      {
        question: "What planning mistake is most common on this route?",
        answer:
          "Using both ports for similar beach activities instead of splitting Cozumel for reef and Costa Maya for culture or value beach time.",
      },
    ],
  },
];

export function getRegionalCruisePlannerBySlug(
  slug: string,
): RegionalCruisePlannerPage | undefined {
  return regionalCruisePlanners.find((planner) => planner.slug === slug);
}

export function getAllRegionalCruisePlannerSlugs(): string[] {
  return regionalCruisePlanners.map((planner) => planner.slug);
}

export function getRegionalPlannersByRegionPage(
  regionPageSlug: string,
): RegionalCruisePlannerPage[] {
  return regionalCruisePlanners.filter(
    (planner) => planner.regionPageSlug === regionPageSlug,
  );
}

export function getRegionalPlannersByParentPlanner(
  parentPlannerSlug: string,
): RegionalCruisePlannerPage[] {
  return regionalCruisePlanners.filter(
    (planner) => planner.parentPlannerSlug === parentPlannerSlug,
  );
}
