import type { CruiseShip } from "./types";
import { getShipSections } from "./ship-sections";

export const ships: CruiseShip[] = [
  {
    slug: "icon-of-the-seas",
    name: "Icon of the Seas",
    cruiseLineSlug: "royal-caribbean",
    seoTitle: "Icon of the Seas Caribbean Cruise Guide",
    metaDescription:
      "Plan Icon of the Seas Caribbean port days with itinerary patterns, common ports, shore excursion picks, and links to ship schedules and local specialists.",
    tagline: "Royal Caribbean's largest ship, built for week-long Caribbean loops from Florida",
    overview:
      "Icon of the Seas sails year-round Caribbean itineraries from Miami and Port Canaveral, usually on 7-night Eastern, Western, or mixed routes. With the highest passenger count in the fleet, her port days often overlap other megaships in Cozumel, Nassau, and St. Thomas, so independent excursion timing matters.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean: St. Thomas, St. Maarten, and Perfect Day at CocoCay",
      "7-night Western Caribbean: Cozumel, Roatan, and Costa Maya reef ports",
      "7-night Southern Caribbean mix with Aruba or Curacao on select sailings",
    ],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "roatan", "st-maarten", "aruba"],
    recommendedExcursions: [
      {
        name: "El Cielo Catamaran and Reef Snorkel",
        portSlug: "cozumel",
        description: "Half-day sail to Cozumel's southern sandbar and protected reef with strong operator return guarantees.",
      },
      {
        name: "Magens Bay and Skyline Drive",
        portSlug: "st-thomas",
        description: "Classic St. Thomas pairing of scenic overlooks with calm beach time at Magens Bay.",
      },
      {
        name: "Blue Lagoon Beach Day",
        portSlug: "nassau",
        description: "Controlled beach environment with shallow water, popular with families on short Nassau calls.",
      },
    ],
    planningAdvice: [
      "Book must-do water excursions before embarkation when Icon shares Cozumel or St. Thomas with other Oasis-class ships.",
      "Use ship schedule pages to see how many vessels call your port on the same day.",
      "Independent operators with pier pickup often beat cruise-line pricing on reef and beach combos.",
      "Allow 90 minutes return buffer on Western Caribbean port days with longer pier-to-activity transfers.",
    ],
    faqs: [
      {
        question: "Where does Icon of the Seas sail in the Caribbean?",
        answer:
          "Icon typically runs 7-night Eastern and Western Caribbean loops from South Florida, with occasional Southern Caribbean calls including Aruba on select itineraries.",
      },
      {
        question: "Which ports does Icon of the Seas visit most often?",
        answer:
          "Cozumel, St. Thomas, Nassau, Roatan, and St. Maarten appear frequently. Check your specific sailing and our ship schedule hubs for call dates.",
      },
      {
        question: "Should I book shore excursions through Royal Caribbean on Icon?",
        answer:
          "Cruise-line excursions guarantee on-time return, but independent specialists often offer better pricing and smaller groups. Book early on busy port days.",
      },
    ],
    featuredPage: true,
  },
  {
    slug: "star-of-the-seas",
    name: "Star of the Seas",
    cruiseLineSlug: "royal-caribbean",
    seoTitle: "Star of the Seas Caribbean Cruise Guide",
    metaDescription:
      "Star of the Seas Caribbean itineraries, popular ports, and shore excursion recommendations with links to port guides and ship schedules.",
    tagline: "Second Icon-class ship focused on high-capacity Florida Caribbean departures",
    overview:
      "Star of the Seas mirrors Icon of the Seas in size and Caribbean programming, with heavy Eastern and Western 7-night rotations from Port Canaveral and Miami. Passengers should plan port days around peak-demand snorkel and beach slots.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean with St. Thomas and Philipsburg",
      "7-night Western Caribbean via Cozumel and Roatan",
      "Bahamas-forward short cruises on select seasonal deployments",
    ],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "roatan", "costa-maya", "st-maarten"],
    recommendedExcursions: [
      {
        name: "West Bay Beach and Snorkel",
        portSlug: "roatan",
        description: "Short transfer from Mahogany Bay to reef snorkeling directly off West Bay Beach.",
      },
      {
        name: "Tulum and Reef Combo",
        portSlug: "cozumel",
        description: "Mayan ruins morning with afternoon snorkel, best booked as a private or small-group format.",
      },
      {
        name: "Orient Bay Beach Club",
        portSlug: "st-maarten",
        description: "French-side beach club day with loungers, lunch, and optional water sports.",
      },
    ],
    planningAdvice: [
      "Star of the Seas port days mirror Icon-class demand patterns; prioritize early excursion departure slots.",
      "Roatan and Cozumel reef tours sell out fastest on Western Caribbean weeks.",
      "Check St. Thomas ship schedules when planning Magens Bay or St. John ferry days.",
      "Private taxi tours in St. Maarten help split Philipsburg shopping and Orient Bay beach time.",
    ],
    faqs: [
      {
        question: "Is Star of the Seas the same size as Icon of the Seas?",
        answer:
          "Yes. Star is Icon-class with similar capacity and Caribbean itinerary patterns, though specific port orders vary by sailing date.",
      },
      {
        question: "What is the best port day on a Star of the Seas Caribbean cruise?",
        answer:
          "Many passengers rank Cozumel and St. Thomas highest for reef and beach variety. Roatan offers strong value on Western routes.",
      },
      {
        question: "Does Star of the Seas use tenders in the Caribbean?",
        answer:
          "Most Star Caribbean calls are pier ports. Grand Cayman and some smaller islands may require tenders depending on the itinerary.",
      },
    ],
    featuredPage: true,
  },
  {
    slug: "wonder-of-the-seas",
    name: "Wonder of the Seas",
    cruiseLineSlug: "royal-caribbean",
    seoTitle: "Wonder of the Seas Caribbean Cruise Guide",
    metaDescription:
      "Wonder of the Seas Caribbean cruise planning: routes, ports, excursions, and links to port authority guides and ship schedules.",
    tagline: "Former world's largest ship, still a Caribbean megaship staple from Florida",
    overview:
      "Wonder of the Seas continues Royal Caribbean's Oasis-class Caribbean dominance with 7-night Eastern and Western loops. Her long track record means operators at Cozumel, Nassau, and St. Thomas are well versed in Oasis-class passenger volume.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean: St. Thomas, St. Maarten, Nassau",
      "7-night Western Caribbean: Cozumel, Roatan, Costa Maya",
      "Occasional 7-night Southern Caribbean with Aruba",
    ],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "roatan", "aruba", "grand-cayman"],
    recommendedExcursions: [
      {
        name: "Stingray City Sandbar",
        portSlug: "grand-cayman",
        description: "Signature Grand Cayman wildlife encounter; book early-morning slots on tender port days.",
      },
      {
        name: "Arikok Jeep Adventure",
        portSlug: "aruba",
        description: "Off-road north-coast route with Natural Pool swim stop when sea conditions allow.",
      },
      {
        name: "Sapphire Beach Snorkel",
        portSlug: "st-thomas",
        description: "Reef snorkeling minutes from Red Hook with optional St. John ferry extension.",
      },
    ],
    planningAdvice: [
      "Wonder sailings often include Grand Cayman tender days; confirm last tender time before booking long tours.",
      "Aruba beach days are reliable outside hurricane season; use independent transport for Eagle Beach.",
      "Nassau waterpark and reef tours fill quickly when multiple Royal ships are in port.",
      "Compare Wonder's in-port hours on our schedule pages before locking independent tour start times.",
    ],
    faqs: [
      {
        question: "Which homeports does Wonder of the Seas use for Caribbean cruises?",
        answer:
          "Wonder has sailed from Miami, Port Canaveral, and Galveston on Caribbean itineraries. Check your confirmation for the current deployment.",
      },
      {
        question: "Is Wonder of the Seas good for families in Caribbean ports?",
        answer:
          "Yes. Wonder pairs family-friendly ship amenities with ports like Nassau, Cozumel, and St. Thomas that offer strong children's excursion options.",
      },
      {
        question: "How early should I book Wonder of the Seas shore excursions?",
        answer:
          "Book signature tours at least two to four weeks ahead on peak-season sailings, especially Stingray City and popular Cozumel reef boats.",
      },
    ],
    featuredPage: true,
  },
  {
    slug: "utopia-of-the-seas",
    name: "Utopia of the Seas",
    cruiseLineSlug: "royal-caribbean",
    seoTitle: "Utopia of the Seas Caribbean Cruise Guide",
    metaDescription:
      "Utopia of the Seas Bahamas and Caribbean short-cruise guide with port recommendations, excursions, and planning links.",
    tagline: "Oasis-class ship optimized for 3-4 night Bahamas and quick Caribbean getaways",
    overview:
      "Utopia of the Seas specializes in short Bahamas and Western Caribbean sailings from Port Canaveral, often with two Nassau calls or Nassau plus a private island day. Port time is shorter than on 7-night ships, so excursion efficiency is critical.",
    caribbeanItineraries: [
      "3-4 night Bahamas with Nassau and Perfect Day at CocoCay",
      "4-night Western Caribbean sampler with Cozumel",
      "Occasional 5-night mixed Bahamas and Caribbean routes",
    ],
    commonPortSlugs: ["nassau", "cozumel", "costa-maya"],
    recommendedExcursions: [
      {
        name: "Atlantis Aquaventure Day Pass",
        portSlug: "nassau",
        description: "Full waterpark day on Paradise Island, best for passengers with a full Nassau window.",
      },
      {
        name: "Rose Island Catamaran Snorkel",
        portSlug: "nassau",
        description: "Compact half-day reef sail suited to shorter Nassau calls.",
      },
      {
        name: "Chankanaab Beach Park",
        portSlug: "cozumel",
        description: "All-in-one snorkel lagoon and beach close to the pier on Western sampler sailings.",
      },
    ],
    planningAdvice: [
      "On 3-4 night sailings, choose excursions under four hours to protect your limited Nassau window.",
      "Perfect Day at CocoCay days are ship-focused; plan independent Nassau tours only on dedicated port calls.",
      "Book Atlantis and popular reef sails before sailing on holiday-week Bahamas cruises.",
      "Use Nassau ship schedules to avoid the busiest downtown days when possible.",
    ],
    faqs: [
      {
        question: "Is Utopia of the Seas only a Bahamas ship?",
        answer:
          "Utopia is heavily Bahamas-focused on 3-4 night sailings but also appears on short Western Caribbean routes with Cozumel.",
      },
      {
        question: "How much time do I have in Nassau on Utopia?",
        answer:
          "Nassau calls on short sailings are often six to nine hours. Pick excursions with guaranteed return buffers.",
      },
      {
        question: "Can I do independent excursions on Utopia of the Seas?",
        answer:
          "Yes. Nassau and Cozumel are straightforward for independent booking when operators guarantee on-time pier return.",
      },
    ],
    featuredPage: true,
  },
  {
    slug: "symphony-of-the-seas",
    name: "Symphony of the Seas",
    cruiseLineSlug: "royal-caribbean",
    seoTitle: "Symphony of the Seas Caribbean Cruise Guide | Ports & Shore Excursions",
    metaDescription:
      "Plan Symphony of the Seas Caribbean port days with Eastern and Western itineraries, common ports, shore excursion picks, and links to ship schedules and local specialists.",
    tagline: "Oasis-class veteran on Eastern and Western Caribbean 7-night routes",
    overview:
      "Symphony of the Seas remains one of Royal Caribbean's most frequent Caribbean deployers, running established 7-night Eastern and Western loops from Florida homeports. As an Oasis-class ship, Symphony shares peak-demand patterns with Wonder and Icon in Cozumel, Nassau, and St. Thomas, making early excursion booking essential on busy port days.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean: St. Thomas, St. Maarten, and Nassau",
      "7-night Western Caribbean: Cozumel, Roatan, and Costa Maya",
      "Southern Caribbean select sailings with Aruba on longer deployments",
    ],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "roatan", "st-maarten"],
    recommendedExcursions: [
      {
        name: "Palancar Two-Stop Reef Snorkel",
        portSlug: "cozumel",
        description: "Symphony's most popular Western Caribbean water day with strong marine park visibility.",
      },
      {
        name: "Magens Bay and Mountain Top",
        portSlug: "st-thomas",
        description: "Classic Eastern pairing of calm beach time with scenic island overlooks.",
      },
      {
        name: "Orient Bay Beach Club",
        portSlug: "st-maarten",
        description: "French-side beach day with loungers and lunch on dual-nation port calls.",
      },
    ],
    planningAdvice: [
      "Symphony port days mirror other Oasis-class demand; book reef and beach tours before peak holiday sailings.",
      "Use ship schedule pages to see overlapping megaship calls in Cozumel and St. Thomas.",
      "Allow 90 minutes return buffer on Western Caribbean port days with inland transfers.",
      "Independent operators with pier pickup often beat cruise-line pricing on Cozumel reef sails.",
    ],
    faqs: [
      {
        question: "Where does Symphony of the Seas sail in the Caribbean?",
        answer:
          "Symphony typically runs 7-night Eastern and Western Caribbean loops from South Florida, with occasional Southern Caribbean ports on select itineraries.",
      },
      {
        question: "Which Symphony of the Seas port day is most popular?",
        answer:
          "Passengers most often rank Cozumel reef days and St. Thomas beach excursions highest, depending on Eastern vs Western routing.",
      },
      {
        question: "Should I book Symphony shore excursions in advance?",
        answer:
          "Yes on peak-season sailings, especially for Cozumel snorkel boats and Magens Bay transfers when multiple Royal ships share a port.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "mardi-gras",
    name: "Mardi Gras",
    cruiseLineSlug: "carnival",
    seoTitle: "Mardi Gras Caribbean Cruise Guide",
    metaDescription:
      "Mardi Gras Caribbean cruise planning with itineraries, ports, shore excursions, and links to port guides and ship schedules.",
    tagline: "Carnival's Excel-class flagship with year-round Caribbean from Port Canaveral",
    overview:
      "Mardi Gras sails 6-8 night Eastern and Western Caribbean itineraries from Port Canaveral, often including Nassau, Amber Cove or Puerto Plata, and Cozumel. Her large capacity means popular beach and adventure tours can sell out early on shared port days.",
    caribbeanItineraries: [
      "6-8 night Eastern Caribbean with Amber Cove and St. Maarten",
      "7-night Western Caribbean via Cozumel and Costa Maya",
      "Bahamas combo sailings with Nassau",
    ],
    commonPortSlugs: ["nassau", "puerto-plata", "cozumel", "costa-maya", "st-maarten", "grand-cayman"],
    recommendedExcursions: [
      {
        name: "Damajagua Waterfalls",
        portSlug: "puerto-plata",
        description: "Active waterfall climb and slide experience on Dominican Republic calls.",
      },
      {
        name: "Chichen Itza or Tulum Express",
        portSlug: "cozumel",
        description: "Mainland Mayan ruin day from Cozumel ferry, best as organized tour with strict timing.",
      },
      {
        name: "Stingray City and Reef Snorkel",
        portSlug: "grand-cayman",
        description: "Classic Grand Cayman pairing on tender days; morning slots reduce crowds.",
      },
    ],
    planningAdvice: [
      "Mardi Gras Dominican Republic calls often use Amber Cove or Puerto Plata; confirm which pier your sailing uses.",
      "Carnival shore excursion credits apply, but independent operators frequently beat pricing on Cozumel reef trips.",
      "Grand Cayman tender timing is non-negotiable; return 60-90 minutes before last tender.",
      "Check ship schedules for Nassau on your date; holiday weeks bring multiple Carnival ships.",
    ],
    faqs: [
      {
        question: "Where does Mardi Gras homeport for Caribbean cruises?",
        answer: "Mardi Gras primarily sails from Port Canaveral on Eastern and Western Caribbean itineraries.",
      },
      {
        question: "Does Mardi Gras visit Perfect Day or Half Moon Cay?",
        answer: "Many Mardi Gras sailings include a Carnival private island day in addition to standard Caribbean port calls.",
      },
      {
        question: "What are the best Mardi Gras shore excursions?",
        answer: "Damajagua in Puerto Plata, Cozumel reef snorkel sails, and Stingray City in Grand Cayman are consistent passenger favorites.",
      },
    ],
    featuredPage: true,
  },
  {
    slug: "celebration",
    name: "Carnival Celebration",
    cruiseLineSlug: "carnival",
    seoTitle: "Carnival Celebration Caribbean Cruise Guide | Ports & Excursions",
    metaDescription:
      "Plan Carnival Celebration Caribbean port days with Excel-class itineraries, popular ports, shore excursion recommendations, and links to schedules and local specialists.",
    tagline: "Excel-class sister to Mardi Gras on Miami and Port Canaveral Caribbean routes",
    overview:
      "Carnival Celebration mirrors Mardi Gras programming on 6-8 night Eastern and Western Caribbean loops from Miami and Port Canaveral. Celebration passengers see strong Bahamas, Dominican Republic, and Cozumel presence, with high excursion demand when multiple Carnival megaships overlap in Nassau and Amber Cove.",
    caribbeanItineraries: [
      "6-8 night Eastern Caribbean with Amber Cove and St. Maarten",
      "7-night Western Caribbean via Cozumel and Grand Cayman",
      "Short Bahamas cruises with Nassau and private island days",
    ],
    commonPortSlugs: ["nassau", "puerto-plata", "cozumel", "st-maarten", "grand-cayman"],
    recommendedExcursions: [
      {
        name: "Damajagua Waterfalls",
        portSlug: "puerto-plata",
        description: "Signature Dominican adventure when Celebration calls Amber Cove or Puerto Plata.",
      },
      {
        name: "Stingray City Early Tour",
        portSlug: "grand-cayman",
        description: "Morning sandbar wildlife on Celebration tender port days.",
      },
      {
        name: "Palancar Reef Snorkel Sail",
        portSlug: "cozumel",
        description: "Western Caribbean reef day with strong independent operator choice.",
      },
    ],
    planningAdvice: [
      "Confirm whether your Dominican call uses Amber Cove or Puerto Plata downtown before booking waterfalls or Teleférico tours.",
      "Celebration shares peak Carnival demand in Nassau; pre-book Atlantis or reef sails on holiday weeks.",
      "Grand Cayman requires tender awareness; return 60-90 minutes before last tender.",
      "Carnival shore excursion credits apply, but Cozumel independents often offer better reef pricing.",
    ],
    faqs: [
      {
        question: "Where does Carnival Celebration homeport?",
        answer: "Celebration sails from Miami and Port Canaveral on Caribbean itineraries, with route style varying by sailing length.",
      },
      {
        question: "Is Celebration the same class as Mardi Gras?",
        answer: "Yes. Celebration is Excel-class with similar capacity and Caribbean port programming to Mardi Gras.",
      },
      {
        question: "What are the best Celebration shore excursions?",
        answer: "Damajagua in Puerto Plata, Cozumel reef snorkel sails, and Stingray City in Grand Cayman are consistent favorites.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "jubilee",
    name: "Carnival Jubilee",
    cruiseLineSlug: "carnival",
    seoTitle: "Carnival Jubilee Caribbean Cruise Guide | Galveston Western Routes",
    metaDescription:
      "Plan Carnival Jubilee Caribbean cruises from Galveston with Cozumel, Roatan, and Costa Maya excursion advice, port guides, and ship schedule links.",
    tagline: "Excel-class ship sailing Western Caribbean from Galveston",
    overview:
      "Carnival Jubilee brings Excel-class capacity to Texas departures, emphasizing Cozumel, Costa Maya, and Roatan on 7-night Western Caribbean weeks. Jubilee passengers benefit from strong reef value in Roatan and Mexico's Yucatán ports, with shorter travel times than many passengers expect from Galveston-based programming.",
    caribbeanItineraries: [
      "7-night Western Caribbean from Galveston: Cozumel, Roatan, and Costa Maya",
      "Occasional Bahamas short cruises with Nassau",
      "Mixed reef-and-ruins weeks pairing Mexico ports with Honduras calls",
    ],
    commonPortSlugs: ["cozumel", "costa-maya", "roatan", "nassau"],
    recommendedExcursions: [
      {
        name: "West Bay Beach and Reef",
        portSlug: "roatan",
        description: "Jubilee's best-value white sand and snorkel day from Mahogany Bay.",
      },
      {
        name: "Chacchoben Ruins Tour",
        portSlug: "costa-maya",
        description: "Accessible Mayan archaeology with manageable coach time from the cruise village.",
      },
      {
        name: "El Cielo Catamaran",
        portSlug: "cozumel",
        description: "Southern Cozumel sandbar and reef sail on Jubilee Western weeks.",
      },
    ],
    planningAdvice: [
      "Jubilee Western weeks sell out Roatan and Cozumel reef boats fastest; book before Galveston embarkation.",
      "Do not stack a long Chacchoben tour with a distant second stop on shorter Costa Maya calls.",
      "West Bay transfers from Mahogany Bay are among the Caribbean's best-value custom beach days.",
      "Check ship schedules when multiple Carnival ships share Cozumel on holiday sailings.",
    ],
    faqs: [
      {
        question: "Where does Carnival Jubilee sail from?",
        answer: "Jubilee is homeported in Galveston for year-round Western Caribbean itineraries.",
      },
      {
        question: "What is the best Jubilee port for snorkeling?",
        answer: "Roatan and Cozumel both offer excellent reef quality; Roatan often delivers stronger value per dollar.",
      },
      {
        question: "Does Jubilee visit Eastern Caribbean ports?",
        answer: "Jubilee is primarily a Western Caribbean ship from Texas, with occasional Bahamas sailings.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "prima",
    name: "Norwegian Prima",
    cruiseLineSlug: "norwegian",
    seoTitle: "Norwegian Prima Caribbean Cruise Guide | Ports & Shore Excursions",
    metaDescription:
      "Plan Norwegian Prima Caribbean port days with freestyle-friendly itineraries, common ports, excursion picks, and links to port guides and ship schedules.",
    tagline: "Prima-class ship on Eastern and Western Caribbean from Miami and Port Canaveral",
    overview:
      "Norwegian Prima sails 7-night Caribbean itineraries with NCL's freestyle dining model, which pairs well with flexible independent excursions. Prima calls commonly include Cozumel, St. Thomas, St. Maarten, and Great Stirrup Cay on Bahamas-forward routes, with strong demand for reef and beach tours on shared port days.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean: St. Thomas, St. Maarten, and Great Stirrup Cay",
      "7-night Western Caribbean: Cozumel, Roatan, and Costa Maya",
      "Bahamas combo sailings with Nassau on select deployments",
    ],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "st-maarten", "roatan"],
    recommendedExcursions: [
      {
        name: "Dunn's River Falls and Beach Club",
        portSlug: "ocho-rios",
        description: "Signature Jamaica adventure when Prima includes Ocho Rios on Western routes.",
      },
      {
        name: "Salsa Salsa and Beach",
        portSlug: "cozumel",
        description: "Popular NCL-format culture and snorkel combo on Cozumel calls.",
      },
      {
        name: "St. Maarten Island Drive",
        portSlug: "st-maarten",
        description: "Maho plane spotting and Orient Bay on Prima Eastern weeks.",
      },
    ],
    planningAdvice: [
      "Prima's freestyle model rewards passengers who book independent tours with guaranteed pier return.",
      "Plan Great Stirrup Cay as a ship-focused day; book Nassau excursions only on standard port calls.",
      "Cozumel reef boats sell out on peak Prima Western sailings; reserve before embarkation.",
      "Use ship schedules to spot overlapping NCL and Royal ships in St. Thomas and Cozumel.",
    ],
    faqs: [
      {
        question: "Where does Norwegian Prima sail in the Caribbean?",
        answer: "Prima deploys from Miami and Port Canaveral on Eastern and Western 7-night Caribbean loops.",
      },
      {
        question: "Does Prima use freestyle shore excursion timing?",
        answer: "Yes. NCL's freestyle model allows flexible port-day pacing, but you still need realistic return buffers for independent tours.",
      },
      {
        question: "What is Great Stirrup Cay on Prima sailings?",
        answer: "Great Stirrup Cay is NCL's private Bahamas destination, similar to other lines' private island stops.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "viva",
    name: "Norwegian Viva",
    cruiseLineSlug: "norwegian",
    seoTitle: "Norwegian Viva Caribbean Cruise Guide | Ports & Excursions",
    metaDescription:
      "Norwegian Viva Caribbean itineraries, popular ports, shore excursion recommendations, and planning links for port guides and ship schedules.",
    tagline: "Prima-class sister with similar Caribbean port rotations",
    overview:
      "Norwegian Viva follows Prima-class Caribbean deployment patterns with 7-night Eastern and Western options from South Florida. Viva passengers see familiar port mixes in Cozumel, St. Thomas, and St. Maarten, with freestyle-friendly scheduling that suits independent beach taxis and private drivers.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean with St. Thomas and St. Maarten",
      "7-night Western Caribbean via Cozumel and Roatan",
      "Bahamas and private island combinations on shorter routes",
    ],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "st-maarten"],
    recommendedExcursions: [
      {
        name: "Catamaran Sail to St. John Waters",
        portSlug: "st-thomas",
        description: "Sail-and-snorkel day when Viva's St. Thomas call supports a longer window.",
      },
      {
        name: "Palancar Reef Snorkel",
        portSlug: "cozumel",
        description: "Classic Western Caribbean reef experience on Viva sailings.",
      },
      {
        name: "Orient Bay Beach Club",
        portSlug: "st-maarten",
        description: "French-side beach day with lunch service and loungers.",
      },
    ],
    planningAdvice: [
      "Viva mirrors Prima-class demand in Cozumel and St. Thomas; book signature water tours early.",
      "Freestyle dining ashore works best when your excursion returns at least 90 minutes before all-aboard.",
      "Orient Bay transfers need clear taxi return timing on busy St. Maarten port days.",
      "Compare independent Cozumel operators for better pricing than peak group tours.",
    ],
    faqs: [
      {
        question: "How is Norwegian Viva different from Prima?",
        answer: "Viva is a Prima-class sister with similar size and Caribbean programming; specific port orders vary by sailing date.",
      },
      {
        question: "Which Viva port is best for beaches?",
        answer: "St. Maarten's Orient Bay and St. Thomas's Magens Bay are the most popular beach-focused port days.",
      },
      {
        question: "Should I book Viva excursions through NCL?",
        answer: "NCL excursions guarantee return timing, but Cozumel and St. Thomas independents often offer smaller groups and better value.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "aqua",
    name: "Norwegian Aqua",
    cruiseLineSlug: "norwegian",
    seoTitle: "Norwegian Aqua Caribbean Cruise Guide | Ports & Shore Excursions",
    metaDescription:
      "Plan Norwegian Aqua Caribbean cruises with Eastern and Western itineraries, port recommendations, excursions, and links to authority port guides.",
    tagline: "Third Prima-class ship expanding NCL Caribbean capacity",
    overview:
      "Norwegian Aqua extends NCL's Prima-class Caribbean program with freestyle port-day flexibility and familiar Eastern and Western port mixes. As the newest Prima-class deployer, Aqua adds capacity to already busy Cozumel and St. Thomas call days, making pre-booked excursions increasingly important on peak sailings.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean: St. Thomas, St. Maarten, and Bahamas stops",
      "7-night Western Caribbean: Cozumel, Roatan, and Costa Maya",
      "Mixed freestyle weeks with private island and standard port combinations",
    ],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "roatan"],
    recommendedExcursions: [
      {
        name: "El Cielo Sandbar Sail",
        portSlug: "cozumel",
        description: "Southern Cozumel reef and sandbar route popular on Aqua Western weeks.",
      },
      {
        name: "Magens Bay Transfer",
        portSlug: "st-thomas",
        description: "Low-stress beach day with calm swimming on Eastern Caribbean calls.",
      },
      {
        name: "Gumbalimba Park Wildlife",
        portSlug: "roatan",
        description: "Rainforest zip-lines and animals near Mahogany Bay on Western routes.",
      },
    ],
    planningAdvice: [
      "Aqua's added capacity intensifies peak-demand slots in Cozumel; book reef tours before sailing.",
      "Keep one port day flexible for independent beach taxis in St. Thomas or Nassau.",
      "Roatan offers excellent reef value when Aqua includes Honduras on Western itineraries.",
      "Confirm private island days vs standard port calls before booking Nassau shore excursions.",
    ],
    faqs: [
      {
        question: "Where does Norwegian Aqua homeport?",
        answer: "Aqua sails from South Florida ports on 7-night Caribbean itineraries, with deployments matching Prima-class patterns.",
      },
      {
        question: "Is Aqua good for first-time Caribbean cruisers?",
        answer: "Yes. Aqua visits familiar ports like Cozumel and St. Thomas with straightforward pier logistics on most calls.",
      },
      {
        question: "What excursions sell out fastest on Aqua?",
        answer: "Cozumel reef snorkel sails and St. Thomas Magens Bay transfers on multi-ship port days.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "world-america",
    name: "MSC World America",
    cruiseLineSlug: "msc",
    seoTitle: "MSC World America Caribbean Cruise Guide",
    metaDescription:
      "MSC World America Caribbean itineraries, ports, shore excursions, and planning links for port guides and ship schedules.",
    tagline: "MSC's newest megaship bringing European-style cruising to Florida Caribbean routes",
    overview:
      "MSC World America sails 7-night Caribbean itineraries from Miami, often combining Ocean Cay MSC Marine Reserve with Cozumel, Nassau, or Dominican Republic ports. MSC passengers benefit from competitive independent excursion pricing at Western Caribbean reef ports.",
    caribbeanItineraries: [
      "7-night Bahamas and Caribbean with Ocean Cay and Nassau",
      "7-night Western Caribbean via Cozumel and Costa Maya",
      "Eastern Caribbean routes with St. Maarten or Puerto Plata",
    ],
    commonPortSlugs: ["cozumel", "costa-maya", "roatan", "nassau", "puerto-plata"],
    recommendedExcursions: [
      {
        name: "Palancar Two-Stop Snorkel",
        portSlug: "cozumel",
        description: "Classic Cozumel reef circuit with strong value on MSC Western Caribbean weeks.",
      },
      {
        name: "Cable Beach and Downtown Nassau",
        portSlug: "nassau",
        description: "Flexible beach and culture combo suited to MSC Nassau windows.",
      },
      {
        name: "27 Waterfalls of Damajagua",
        portSlug: "puerto-plata",
        description: "Adventure-forward Dominican day when World America calls Puerto Plata or Amber Cove.",
      },
    ],
    planningAdvice: [
      "Ocean Cay days are ship-focused; plan independent Nassau or Cozumel tours only on standard port calls.",
      "MSC shore excursion bundles can be good value, but Cozumel and Roatan independents often undercut pricing.",
      "Confirm whether your sailing uses Amber Cove tender pier or Puerto Plata downtown.",
      "Use ship schedule hubs to see overlapping calls when multiple MSC and Carnival ships share a port.",
    ],
    faqs: [
      {
        question: "Where does MSC World America sail from?",
        answer: "World America is homeported in Miami for year-round Caribbean itineraries.",
      },
      {
        question: "What is Ocean Cay on MSC World America sailings?",
        answer: "Ocean Cay MSC Marine Reserve is MSC's private island stop, similar to other lines' private destinations.",
      },
      {
        question: "Are MSC shore excursions required in Caribbean ports?",
        answer: "No. Nassau, Cozumel, and St. Maarten are straightforward for independent booking with reputable local operators.",
      },
    ],
    featuredPage: true,
  },
  {
    slug: "msc-seascape",
    name: "MSC Seascape",
    cruiseLineSlug: "msc",
    seoTitle: "MSC Seascape Caribbean Cruise Guide | Western Routes & Excursions",
    metaDescription:
      "Plan MSC Seascape Caribbean cruises from Galveston and Miami with Cozumel, Roatan, and Costa Maya excursion advice and port guide links.",
    tagline: "Seaside EVO-class ship on Western Caribbean from Galveston and Miami",
    overview:
      "MSC Seascape emphasizes Western Caribbean loops with Cozumel, Costa Maya, Roatan, and Ocean Cay on many sailings. Seascape passengers from Galveston and Miami benefit from competitive independent excursion pricing at Mexico and Honduras reef ports, with shorter pier transfers than many expect.",
    caribbeanItineraries: [
      "7-night Western Caribbean from Galveston: Cozumel, Roatan, and Costa Maya",
      "7-night Bahamas and Caribbean mix with Ocean Cay and Nassau",
      "Miami Western loops with Yucatán and Honduras reef ports",
    ],
    commonPortSlugs: ["cozumel", "costa-maya", "nassau", "puerto-plata", "roatan"],
    recommendedExcursions: [
      {
        name: "West Bay Snorkel and Beach",
        portSlug: "roatan",
        description: "Best reef-value day when Seascape includes Honduras on Western weeks.",
      },
      {
        name: "Chacchoben Ruins Tour",
        portSlug: "costa-maya",
        description: "Mayan archaeology with manageable transfers from the cruise village pier.",
      },
      {
        name: "Palancar Reef Snorkel",
        portSlug: "cozumel",
        description: "MSC passengers often find strong independent pricing on Cozumel reef boats.",
      },
    ],
    planningAdvice: [
      "Ocean Cay days are ship-focused; plan independent Nassau or Cozumel tours on standard port calls only.",
      "Seascape Western weeks: book Roatan and Cozumel reef boats before Texas or Miami embarkation.",
      "MSC shore excursion bundles can be good value, but Yucatán independents often undercut reef pricing.",
      "Do not over-stack Costa Maya ruin tours with distant second stops on shorter port calls.",
    ],
    faqs: [
      {
        question: "Where does MSC Seascape sail from?",
        answer: "Seascape deploys from Galveston and Miami on Western Caribbean and Bahamas combination itineraries.",
      },
      {
        question: "What is Ocean Cay on Seascape sailings?",
        answer: "Ocean Cay MSC Marine Reserve is MSC's private island stop, similar to other lines' private destinations.",
      },
      {
        question: "Which Seascape port offers the best snorkeling?",
        answer: "Roatan and Cozumel both deliver excellent reef quality; Roatan often provides stronger per-dollar value.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "msc-seashore",
    name: "MSC Seashore",
    cruiseLineSlug: "msc",
    seoTitle: "MSC Seashore Caribbean Cruise Guide | Ports & Shore Excursions",
    metaDescription:
      "Plan MSC Seashore Caribbean itineraries from Port Canaveral and Miami with port recommendations, excursions, and ship schedule links.",
    tagline: "Seaside EVO-class ship with Eastern and Western Caribbean rotations",
    overview:
      "MSC Seashore sails 7-night Caribbean itineraries from Port Canaveral and Miami with Nassau, Ocean Cay, St. Maarten, and Western reef ports. Seashore balances Eastern culture-and-beach days with Cozumel reef intensity on alternating Western weeks.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean with St. Maarten and Ocean Cay",
      "7-night Western Caribbean via Cozumel and Costa Maya",
      "Dominican Republic calls with Puerto Plata or Amber Cove",
    ],
    commonPortSlugs: ["nassau", "cozumel", "st-maarten", "puerto-plata"],
    recommendedExcursions: [
      {
        name: "Damajagua Waterfalls",
        portSlug: "puerto-plata",
        description: "Adventure-forward Dominican day on Seashore Eastern and mixed routes.",
      },
      {
        name: "St. Maarten Panoramic and Beach",
        portSlug: "st-maarten",
        description: "Dual-nation highlights with Orient Bay beach time.",
      },
      {
        name: "Cozumel Reef and Beach Escape",
        portSlug: "cozumel",
        description: "Structured snorkel sail with reliable pier pickup on Western weeks.",
      },
    ],
    planningAdvice: [
      "Confirm Dominican pier type before booking waterfall or Teleférico excursions.",
      "Seashore sells out morning Cozumel reef boats on holiday sailings from Florida.",
      "St. Maarten taxi tours help split Philipsburg and Orient Bay on single port days.",
      "Use ship schedule hubs to see when multiple MSC ships share Nassau or Cozumel.",
    ],
    faqs: [
      {
        question: "Where does MSC Seashore homeport?",
        answer: "Seashore sails from Port Canaveral and Miami on year-round Caribbean itineraries.",
      },
      {
        question: "Is Seashore better for Eastern or Western Caribbean?",
        answer: "Seashore rotates both; Eastern weeks emphasize St. Maarten and Dominican ports, Western weeks emphasize Cozumel reefs.",
      },
      {
        question: "Are MSC shore excursions required?",
        answer: "No. Nassau, Cozumel, and St. Maarten are straightforward for independent booking with reputable operators.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "beyond",
    name: "Celebrity Beyond",
    cruiseLineSlug: "celebrity",
    seoTitle: "Celebrity Beyond Caribbean Cruise Guide | Premium Ports & Excursions",
    metaDescription:
      "Plan Celebrity Beyond Caribbean cruises with premium Eastern and Southern itineraries, port recommendations, excursions, and local specialist links.",
    tagline: "Edge-class premium ship on Eastern and Southern Caribbean routes",
    overview:
      "Celebrity Beyond delivers premium Caribbean cruising with longer port times on select sailings and calls in St. Maarten, Aruba, Cozumel, and St. Thomas. Beyond passengers often prefer smaller-group sailing formats, culinary-forward port experiences, and private drivers over large tour-bus schedules.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean with St. Thomas and St. Maarten",
      "7-9 night Southern Caribbean with Aruba and Curacao",
      "Western Caribbean reef ports on select seasonal deployments",
    ],
    commonPortSlugs: ["cozumel", "st-maarten", "aruba", "st-thomas"],
    recommendedExcursions: [
      {
        name: "Luxury Catamaran Sail",
        portSlug: "st-thomas",
        description: "Small-group sailing with snorkel stops suited to Beyond's premium passenger profile.",
      },
      {
        name: "French-Dutch Culinary Tour",
        portSlug: "st-maarten",
        description: "Chef-led tastings across both sides of the island on Beyond Eastern weeks.",
      },
      {
        name: "Eagle Beach Sunset Sail",
        portSlug: "aruba",
        description: "Relaxed sailing with wide white-sand beach time on Southern Caribbean routes.",
      },
    ],
    planningAdvice: [
      "Beyond's longer Southern sailings offer the best Aruba and Curacao beach windows.",
      "Book private drivers in St. Maarten to split culinary and beach stops without rigid group timing.",
      "Premium Cozumel catamarans sell out on holiday weeks; reserve before embarkation.",
      "Use ship schedules to plan around overlapping premium ships in St. Thomas.",
    ],
    faqs: [
      {
        question: "Where does Celebrity Beyond sail in the Caribbean?",
        answer: "Beyond deploys on Eastern and Southern Caribbean itineraries from Florida, with Aruba on longer Southern routes.",
      },
      {
        question: "Is Celebrity Beyond good for couples in port?",
        answer: "Yes. Beyond pairs premium ship amenities with couple-friendly ports like Aruba, St. Thomas, and St. Maarten.",
      },
      {
        question: "What makes Beyond excursions different from mass-market ships?",
        answer: "Beyond passengers often choose smaller-group sails, private drivers, and culinary tours over large bus formats.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "ascent",
    name: "Celebrity Ascent",
    cruiseLineSlug: "celebrity",
    seoTitle: "Celebrity Ascent Caribbean Cruise Guide | Ports & Shore Excursions",
    metaDescription:
      "Plan Celebrity Ascent Caribbean port days with premium itineraries, excursion recommendations, and links to port guides and ship schedules.",
    tagline: "Edge-class sister with premium Caribbean port focus",
    overview:
      "Celebrity Ascent mirrors Beyond's premium Caribbean programming with culinary-forward port experiences and Southern Caribbean options including Curacao and Aruba. Ascent suits passengers who want upscale port pacing with flexible independent touring.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean with St. Thomas and St. Maarten",
      "Southern Caribbean loops with Aruba and Curacao",
      "Western Caribbean Cozumel calls on select deployments",
    ],
    commonPortSlugs: ["st-thomas", "st-maarten", "puerto-plata", "aruba", "curacao"],
    recommendedExcursions: [
      {
        name: "Willemstad and Blue Bay Combo",
        portSlug: "curacao",
        description: "Culture and beach pairing on Ascent Southern Caribbean sailings.",
      },
      {
        name: "Aruba North Coast 4x4",
        portSlug: "aruba",
        description: "Natural Pool and lighthouse route with dramatic coastal scenery.",
      },
      {
        name: "Magens Bay Premium Transfer",
        portSlug: "st-thomas",
        description: "Calm beach day with chair rental on Eastern Caribbean calls.",
      },
    ],
    planningAdvice: [
      "Ascent Southern weeks deliver the longest Curacao and Aruba port windows.",
      "Private culinary tours in St. Maarten match Ascent's upscale dining focus ashore.",
      "Book Cozumel premium reef boats early when Ascent runs Western Caribbean segments.",
      "Allow generous return buffers on St. John ferry add-ons from St. Thomas.",
    ],
    faqs: [
      {
        question: "How is Celebrity Ascent different from Beyond?",
        answer: "Ascent is an Edge-class sister with similar premium programming; specific ports and dates vary by sailing.",
      },
      {
        question: "Does Ascent visit Curacao?",
        answer: "Yes on many Southern Caribbean itineraries, making Curacao a strong culture-and-reef port day.",
      },
      {
        question: "Are private tours worth it on Ascent?",
        answer: "Yes, especially in St. Maarten and Aruba where custom pacing improves the premium port-day experience.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "apex",
    name: "Celebrity Apex",
    cruiseLineSlug: "celebrity",
    seoTitle: "Celebrity Apex Caribbean Cruise Guide | Ports & Excursions",
    metaDescription:
      "Plan Celebrity Apex Caribbean cruises with Eastern, Western, and Southern port recommendations, excursions, and authority guide links.",
    tagline: "Edge-class ship with established Caribbean deployment history",
    overview:
      "Celebrity Apex offers premium Caribbean itineraries with strong Southern and Eastern port combinations, including Grand Cayman wildlife, Aruba beaches, and Cozumel reefs. Apex has one of the longest Edge-class Caribbean track records, with operators well versed in premium passenger expectations.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean with St. Maarten and St. Thomas",
      "Southern Caribbean with Aruba and Grand Cayman",
      "Western Caribbean Cozumel on seasonal routes",
    ],
    commonPortSlugs: ["cozumel", "aruba", "st-maarten", "grand-cayman", "st-thomas"],
    recommendedExcursions: [
      {
        name: "Stingray City Private Charter",
        portSlug: "grand-cayman",
        description: "Early sandbar visit before group boats on Apex tender port days.",
      },
      {
        name: "Palancar Premium Snorkel",
        portSlug: "cozumel",
        description: "High-quality reef stops with smaller groups on Western weeks.",
      },
      {
        name: "Orient Bay Cabana Day",
        portSlug: "st-maarten",
        description: "French-side beach club with full service on Eastern routes.",
      },
    ],
    planningAdvice: [
      "Apex Grand Cayman calls need tender-first morning planning for Stingray City.",
      "Southern Caribbean Apex sailings offer the best Aruba catamaran and beach combinations.",
      "Premium Cozumel operators align well with Apex passenger expectations for smaller groups.",
      "Check ship schedules when multiple ships tender in Grand Cayman on the same day.",
    ],
    faqs: [
      {
        question: "Where does Celebrity Apex sail?",
        answer: "Apex runs Eastern, Southern, and select Western Caribbean itineraries from Florida homeports.",
      },
      {
        question: "Is Apex a tender port ship in the Caribbean?",
        answer: "Most Apex Caribbean calls are pier ports; Grand Cayman commonly requires tenders.",
      },
      {
        question: "What is the signature Apex port day?",
        answer: "Many passengers rank Grand Cayman stingray tours and Aruba sailing highest, depending on itinerary.",
      },
    ],
    featuredPage: true,
  },
  {
    slug: "sun-princess",
    name: "Sun Princess",
    cruiseLineSlug: "princess",
    seoTitle: "Sun Princess Caribbean Cruise Guide",
    metaDescription:
      "Sun Princess Caribbean cruise guide with itineraries, ports, excursions, and links to port guides and ship schedules.",
    tagline: "Princess Sphere-class ship on Eastern and Southern Caribbean from Florida",
    overview:
      "Sun Princess brings Princess Cruises' newest hardware to Caribbean routes with 7-night Eastern loops and longer Southern Caribbean sailings. Princess passengers often prefer structured excursions with reliable return timing at tender ports like Grand Cayman.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean with St. Thomas and St. Maarten",
      "7-night Western Caribbean via Cozumel and Roatan",
      "10-14 night Southern Caribbean with Aruba",
    ],
    commonPortSlugs: ["st-thomas", "st-maarten", "cozumel", "aruba", "grand-cayman", "roatan"],
    recommendedExcursions: [
      {
        name: "Trunk Bay and St. John Ferry",
        portSlug: "st-thomas",
        description: "National Park beach and snorkel trail via Red Hook ferry, a Princess passenger favorite.",
      },
      {
        name: "Eagle Beach Catamaran",
        portSlug: "aruba",
        description: "Relaxed sailing with snorkel stop on Southern Caribbean weeks.",
      },
      {
        name: "Private Stingray City Charter",
        portSlug: "grand-cayman",
        description: "Early-morning small-boat format avoids peak sandbar crowds on tender days.",
      },
    ],
    planningAdvice: [
      "Princess shore excursions are popular at Grand Cayman; book tender-day tours before embarkation.",
      "Southern Caribbean Sun Princess sailings offer the longest Aruba beach windows.",
      "Independent operators in St. Thomas work well for custom Magens Bay and St. John combos.",
      "Check ship schedules when multiple Princess ships call St. Maarten on the same day.",
    ],
    faqs: [
      {
        question: "Where does Sun Princess sail in the Caribbean?",
        answer: "Sun Princess deploys from Port Everglades and other Florida ports on Eastern, Western, and Southern Caribbean itineraries.",
      },
      {
        question: "Is Sun Princess good for couples in Caribbean ports?",
        answer: "Yes. Sun Princess pairs premium ship amenities with couple-friendly ports like Aruba, St. Thomas, and Grand Cayman.",
      },
      {
        question: "Does Sun Princess visit Princess Cays?",
        answer: "Many Sun Princess Caribbean sailings include Princess Cays private island in the Bahamas in addition to standard port calls.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "enchanted-princess",
    name: "Enchanted Princess",
    cruiseLineSlug: "princess",
    seoTitle: "Enchanted Princess Caribbean Cruise Guide | Ports & Shore Excursions",
    metaDescription:
      "Plan Enchanted Princess Caribbean cruises with Eastern and Western itineraries, excursion picks, and links to port guides and ship schedules.",
    tagline: "Royal-class ship on proven Eastern and Western Caribbean routes",
    overview:
      "Enchanted Princess sails familiar Princess Caribbean loops with St. Thomas, Cozumel, Grand Cayman, and Jamaica on many 7-night sailings. Princess passengers value structured excursions with reliable return timing, especially at tender ports like Grand Cayman and on Jamaica inland adventure days.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean with St. Thomas and St. Maarten",
      "7-night Western Caribbean via Cozumel and Ocho Rios",
      "Grand Cayman wildlife days on mixed Eastern-Western routes",
    ],
    commonPortSlugs: ["st-thomas", "cozumel", "grand-cayman", "st-maarten", "ocho-rios"],
    recommendedExcursions: [
      {
        name: "Dunn's River Falls Early Entry",
        portSlug: "ocho-rios",
        description: "Signature Jamaica climb when Enchanted Princess includes Ocho Rios on Western weeks.",
      },
      {
        name: "Stingray City Catamaran",
        portSlug: "grand-cayman",
        description: "Classic wildlife sandbar tour on Enchanted tender port days.",
      },
      {
        name: "Magens Bay Beach Escape",
        portSlug: "st-thomas",
        description: "Princess favorite calm beach day on Eastern Caribbean sailings.",
      },
    ],
    planningAdvice: [
      "Enchanted Grand Cayman tours should book before embarkation on tender port days.",
      "Jamaica inland drives need generous return buffers; one anchor activity per day works best.",
      "Princess shore excursions are popular at Stingray City; early departures reduce crowds.",
      "Independent St. Thomas taxi tours work well for custom Magens Bay and overlook combos.",
    ],
    faqs: [
      {
        question: "Where does Enchanted Princess sail?",
        answer: "Enchanted Princess runs 7-night Eastern and Western Caribbean itineraries from Florida homeports.",
      },
      {
        question: "Does Enchanted Princess visit Jamaica?",
        answer: "Many Western Caribbean Enchanted sailings include Ocho Rios for Dunn's River Falls and rainforest adventures.",
      },
      {
        question: "Should I book Enchanted excursions through Princess?",
        answer: "Princess excursions guarantee return at tender ports, but Cozumel and St. Thomas independents often offer better reef pricing.",
      },
    ],
    featuredPage: false,
  },
  {
    slug: "regal-princess",
    name: "Regal Princess",
    cruiseLineSlug: "princess",
    seoTitle: "Regal Princess Caribbean Cruise Guide | Eastern & Bahamas Routes",
    metaDescription:
      "Plan Regal Princess Caribbean cruises with Eastern and Bahamas itineraries, port recommendations, excursions, and specialist local links.",
    tagline: "Royal-class ship with Eastern Caribbean and Bahamas programming",
    overview:
      "Regal Princess offers Eastern Caribbean and Bahamas itineraries with St. Thomas, Nassau, St. Maarten, and occasional Grand Cayman or Jamaica extensions. Regal suits passengers who want proven Princess Caribbean routing with reliable excursion logistics and strong family-friendly port options.",
    caribbeanItineraries: [
      "7-night Eastern Caribbean with St. Thomas and St. Maarten",
      "Bahamas and Caribbean mix with Nassau and Princess Cays",
      "Grand Cayman wildlife on select Eastern-Western combinations",
    ],
    commonPortSlugs: ["st-thomas", "nassau", "st-maarten", "grand-cayman", "falmouth"],
    recommendedExcursions: [
      {
        name: "Rose Island Catamaran Snorkel",
        portSlug: "nassau",
        description: "Half-day reef sail suited to Regal's Bahamas-forward itineraries.",
      },
      {
        name: "Trunk Bay Ferry Day",
        portSlug: "st-thomas",
        description: "National Park beach when Regal's St. Thomas call is long enough for St. John access.",
      },
      {
        name: "Martha Brae River Rafting",
        portSlug: "falmouth",
        description: "Scenic heritage river day when Regal includes Jamaica on extended routes.",
      },
    ],
    planningAdvice: [
      "Regal Bahamas weeks: book Rose Island or Atlantis before holiday sailings when multiple ships share Nassau.",
      "Princess Cays days are ship-focused; reserve Nassau tours for dedicated port calls only.",
      "St. Maarten Orient Bay transfers need clear taxi return timing on busy port days.",
      "Grand Cayman stingray tours require early tender departure and 60-90 minute return buffer.",
    ],
    faqs: [
      {
        question: "Where does Regal Princess homeport?",
        answer: "Regal Princess sails from Florida ports on Eastern Caribbean and Bahamas combination itineraries.",
      },
      {
        question: "Is Regal Princess good for Bahamas cruises?",
        answer: "Yes. Regal frequently includes Nassau and Princess Cays on shorter and mixed Caribbean sailings.",
      },
      {
        question: "What is the best Regal Princess port for first-timers?",
        answer: "St. Thomas Magens Bay and Nassau downtown walks are the most approachable introduction ports.",
      },
    ],
    featuredPage: false,
  },
];

export function getShipBySlug(slug: string): CruiseShip | undefined {
  const ship = ships.find((s) => s.slug === slug);
  if (!ship) return undefined;
  const sections = getShipSections(slug);
  if (!sections) return ship;
  return {
    ...ship,
    familyRecommendations: sections.familyRecommendations,
    beachRecommendations: sections.beachRecommendations,
    snorkellingRecommendations: sections.snorkellingRecommendations,
    privateTourRecommendations: sections.privateTourRecommendations,
    relatedShipSlugs: sections.relatedShipSlugs,
  };
}

export function getShipsByCruiseLine(cruiseLineSlug: string): CruiseShip[] {
  return ships.filter((ship) => ship.cruiseLineSlug === cruiseLineSlug);
}

export function getFeaturedShips(): CruiseShip[] {
  return ships.filter((ship) => ship.featuredPage);
}

export function getFeaturedShipSlugs(): string[] {
  return getFeaturedShips().map((ship) => ship.slug);
}

export function getAllShipSlugs(): string[] {
  return ships.map((ship) => ship.slug);
}
