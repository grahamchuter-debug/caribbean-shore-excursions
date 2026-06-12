import type { CruiseShip } from "./types";

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
    seoTitle: "Symphony of the Seas Caribbean Guide",
    metaDescription: "Symphony of the Seas Caribbean ports and excursion overview.",
    tagline: "Oasis-class veteran on Eastern and Western Caribbean 7-night routes",
    overview:
      "Symphony of the Seas remains a frequent Caribbean deployer with established Eastern and Western loops. Strong choice for passengers who want proven Oasis-class amenities with familiar port rotations.",
    caribbeanItineraries: ["7-night Eastern Caribbean", "7-night Western Caribbean", "Southern Caribbean select sailings"],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "roatan", "st-maarten"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
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
    slug: "carnival-celebration",
    name: "Carnival Celebration",
    cruiseLineSlug: "carnival",
    seoTitle: "Carnival Celebration Caribbean Guide",
    metaDescription: "Carnival Celebration Caribbean ports and excursion overview.",
    tagline: "Excel-class sister to Mardi Gras on Miami and Port Canaveral Caribbean routes",
    overview:
      "Carnival Celebration mirrors Mardi Gras programming on Eastern and Western Caribbean loops with strong Bahamas and Dominican Republic presence.",
    caribbeanItineraries: ["6-8 night Eastern Caribbean", "7-night Western Caribbean", "Bahamas short cruises"],
    commonPortSlugs: ["nassau", "puerto-plata", "cozumel", "st-maarten", "grand-cayman"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
  },
  {
    slug: "carnival-jubilee",
    name: "Carnival Jubilee",
    cruiseLineSlug: "carnival",
    seoTitle: "Carnival Jubilee Caribbean Guide",
    metaDescription: "Carnival Jubilee Caribbean ports and excursion overview.",
    tagline: "Excel-class ship sailing Western Caribbean from Galveston",
    overview:
      "Carnival Jubilee brings Excel-class capacity to Texas departures, emphasizing Cozumel, Costa Maya, and Roatan on Western Caribbean weeks.",
    caribbeanItineraries: ["7-night Western Caribbean from Galveston", "Occasional Bahamas sailings"],
    commonPortSlugs: ["cozumel", "costa-maya", "roatan", "nassau"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
  },
  {
    slug: "norwegian-prima",
    name: "Norwegian Prima",
    cruiseLineSlug: "norwegian",
    seoTitle: "Norwegian Prima Caribbean Guide",
    metaDescription: "Norwegian Prima Caribbean ports and excursion overview.",
    tagline: "Prima-class ship on Eastern and Western Caribbean from Miami and Port Canaveral",
    overview:
      "Norwegian Prima sails 7-night Caribbean itineraries with freestyle dining ashore-friendly schedules and calls in Cozumel, St. Thomas, and Great Stirrup Cay.",
    caribbeanItineraries: ["7-night Eastern Caribbean", "7-night Western Caribbean"],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "st-maarten", "roatan"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
  },
  {
    slug: "norwegian-viva",
    name: "Norwegian Viva",
    cruiseLineSlug: "norwegian",
    seoTitle: "Norwegian Viva Caribbean Guide",
    metaDescription: "Norwegian Viva Caribbean ports and excursion overview.",
    tagline: "Prima-class sister with similar Caribbean port rotations",
    overview:
      "Norwegian Viva follows Prima-class Caribbean deployment patterns with Eastern and Western 7-night options from South Florida.",
    caribbeanItineraries: ["7-night Eastern Caribbean", "7-night Western Caribbean"],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "st-maarten"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
  },
  {
    slug: "norwegian-aqua",
    name: "Norwegian Aqua",
    cruiseLineSlug: "norwegian",
    seoTitle: "Norwegian Aqua Caribbean Guide",
    metaDescription: "Norwegian Aqua Caribbean ports and excursion overview.",
    tagline: "Third Prima-class ship expanding NCL Caribbean capacity",
    overview:
      "Norwegian Aqua extends NCL's Prima-class Caribbean program with freestyle port-day flexibility and familiar Eastern and Western port mixes.",
    caribbeanItineraries: ["7-night Eastern Caribbean", "7-night Western Caribbean"],
    commonPortSlugs: ["cozumel", "st-thomas", "nassau", "roatan"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
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
    commonPortSlugs: ["nassau", "cozumel", "puerto-plata", "costa-maya", "st-maarten"],
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
    seoTitle: "MSC Seascape Caribbean Guide",
    metaDescription: "MSC Seascape Caribbean ports and excursion overview.",
    tagline: "Seaside EVO-class ship on Western Caribbean from Galveston and Miami",
    overview:
      "MSC Seascape emphasizes Western Caribbean loops with Cozumel, Costa Maya, and Ocean Cay on many sailings.",
    caribbeanItineraries: ["7-night Western Caribbean", "Bahamas and Caribbean mix"],
    commonPortSlugs: ["cozumel", "costa-maya", "nassau", "puerto-plata"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
  },
  {
    slug: "msc-seashore",
    name: "MSC Seashore",
    cruiseLineSlug: "msc",
    seoTitle: "MSC Seashore Caribbean Guide",
    metaDescription: "MSC Seashore Caribbean ports and excursion overview.",
    tagline: "Seaside EVO-class ship with Eastern and Western Caribbean rotations",
    overview:
      "MSC Seashore sails 7-night Caribbean itineraries from Port Canaveral and Miami with Nassau, Ocean Cay, and Western reef ports.",
    caribbeanItineraries: ["7-night Eastern Caribbean", "7-night Western Caribbean"],
    commonPortSlugs: ["nassau", "cozumel", "st-maarten", "puerto-plata"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
  },
  {
    slug: "celebrity-beyond",
    name: "Celebrity Beyond",
    cruiseLineSlug: "celebrity",
    seoTitle: "Celebrity Beyond Caribbean Guide",
    metaDescription: "Celebrity Beyond Caribbean ports and excursion overview.",
    tagline: "Edge-class premium ship on Eastern and Southern Caribbean routes",
    overview:
      "Celebrity Beyond delivers premium Caribbean cruising with longer port times on select sailings and calls in St. Maarten, Aruba, and Cozumel.",
    caribbeanItineraries: ["7-night Eastern Caribbean", "7-9 night Southern Caribbean"],
    commonPortSlugs: ["cozumel", "st-maarten", "aruba", "st-thomas"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
  },
  {
    slug: "celebrity-ascent",
    name: "Celebrity Ascent",
    cruiseLineSlug: "celebrity",
    seoTitle: "Celebrity Ascent Caribbean Guide",
    metaDescription: "Celebrity Ascent Caribbean ports and excursion overview.",
    tagline: "Edge-class sister with premium Caribbean port focus",
    overview:
      "Celebrity Ascent mirrors Beyond's premium Caribbean programming with culinary-forward port experiences and Southern Caribbean options.",
    caribbeanItineraries: ["7-night Eastern Caribbean", "Southern Caribbean loops"],
    commonPortSlugs: ["cozumel", "aruba", "st-maarten", "st-thomas"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
  },
  {
    slug: "celebrity-apex",
    name: "Celebrity Apex",
    cruiseLineSlug: "celebrity",
    seoTitle: "Celebrity Apex Caribbean Guide",
    metaDescription: "Celebrity Apex Caribbean ports and excursion overview.",
    tagline: "Edge-class ship with established Caribbean deployment history",
    overview:
      "Celebrity Apex offers premium Caribbean itineraries with strong Southern and Eastern port combinations.",
    caribbeanItineraries: ["7-night Eastern Caribbean", "Southern Caribbean"],
    commonPortSlugs: ["cozumel", "aruba", "st-maarten", "grand-cayman"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
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
    featuredPage: true,
  },
  {
    slug: "enchanted-princess",
    name: "Enchanted Princess",
    cruiseLineSlug: "princess",
    seoTitle: "Enchanted Princess Caribbean Guide",
    metaDescription: "Enchanted Princess Caribbean ports and excursion overview.",
    tagline: "Royal-class ship on proven Eastern and Western Caribbean routes",
    overview:
      "Enchanted Princess sails familiar Princess Caribbean loops with St. Thomas, Cozumel, and Grand Cayman on many 7-night sailings.",
    caribbeanItineraries: ["7-night Eastern Caribbean", "7-night Western Caribbean"],
    commonPortSlugs: ["st-thomas", "cozumel", "grand-cayman", "st-maarten"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
  },
  {
    slug: "regal-princess",
    name: "Regal Princess",
    cruiseLineSlug: "princess",
    seoTitle: "Regal Princess Caribbean Guide",
    metaDescription: "Regal Princess Caribbean ports and excursion overview.",
    tagline: "Royal-class ship with Eastern Caribbean and Bahamas programming",
    overview:
      "Regal Princess offers Eastern Caribbean and Bahamas itineraries with St. Thomas, Nassau, and occasional Southern Caribbean extensions.",
    caribbeanItineraries: ["7-night Eastern Caribbean", "Bahamas and Caribbean mix"],
    commonPortSlugs: ["st-thomas", "nassau", "st-maarten", "grand-cayman"],
    recommendedExcursions: [],
    planningAdvice: [],
    faqs: [],
    featuredPage: false,
  },
];

export function getShipBySlug(slug: string): CruiseShip | undefined {
  return ships.find((ship) => ship.slug === slug);
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
