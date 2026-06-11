import type { ExcursionType } from "./types";

export const excursionTypes: ExcursionType[] = [
  {
    slug: "beaches",
    name: "Beach Excursions",
    tagline: "Find the Caribbean's best beaches on your cruise day",
    overview:
      "Beach excursions are the most popular shore activity in the Caribbean. From world-famous stretches like Seven Mile Beach and Eagle Beach to secluded coves reachable only by boat, the right beach day can define your entire cruise. Understanding which ports offer the best beach access — and whether you need an organized excursion or can reach beaches independently — helps you plan smarter.",
    whatToExpect: [
      "Round-trip transportation from cruise terminal to beach",
      "Beach chair and umbrella rental (sometimes included)",
      "Facilities including restrooms, showers, and food vendors",
      "Calm waters suitable for swimming at most Caribbean beaches",
      "Crowds vary dramatically by port and ship schedule",
    ],
    bestPorts: [
      { slug: "aruba", name: "Aruba", reason: "Eagle Beach and Palm Beach are world-class with excellent facilities" },
      { slug: "grand-cayman", name: "Grand Cayman", reason: "Seven Mile Beach is iconic — organized access recommended" },
      { slug: "st-thomas", name: "St. Thomas", reason: "Magens Bay is consistently rated among the world's best beaches" },
      { slug: "roatan", name: "Roatán", reason: "West Bay Beach offers stunning white sand with fewer crowds" },
    ],
    tips: [
      "Book early on multi-ship days — popular beaches reach capacity",
      "Confirm whether beach club fees, chairs, and food are included",
      "Bring reef-safe sunscreen and cash for local vendors",
      "Check if your port requires tender — this cuts into beach time",
      "Some beaches are public but facilities require paid club access",
    ],
    faqs: [
      { question: "Do I need an excursion to visit Caribbean beaches?", answer: "It depends on the port. Some beaches are taxi-distance from the terminal. Others like Seven Mile Beach require knowing specific public access points — organized excursions simplify logistics." },
      { question: "What is the best Caribbean beach for cruise passengers?", answer: "Magens Bay (St. Thomas), Eagle Beach (Aruba), and Seven Mile Beach (Grand Cayman) consistently rank highest. Each offers calm waters and good facilities." },
      { question: "Are beach excursions worth the money?", answer: "Yes when they include transport, chairs, and guaranteed entry on busy days. At ports with walkable beaches, a taxi may be more economical." },
    ],
  },
  {
    slug: "snorkeling",
    name: "Snorkeling Excursions",
    tagline: "Explore the Caribbean's coral reefs and marine life",
    overview:
      "The Caribbean's coral reefs offer some of the world's best shore-accessible snorkeling. Whether you are a first-timer or experienced snorkeler, organized excursions provide equipment, boat access to prime reef sites, and knowledgeable guides who know where marine life congregates. Top snorkeling ports include Cozumel, Roatán, Grand Cayman, and St. Thomas.",
    whatToExpect: [
      "Mask, snorkel, and fin equipment provided (bring your own if preferred)",
      "Boat transport to reef sites or guided shore entry",
      "Safety briefing and basic instruction for beginners",
      "60-90 minutes of water time at one or two reef sites",
      "Marine life including tropical fish, rays, turtles, and coral formations",
    ],
    bestPorts: [
      { slug: "cozumel", name: "Cozumel", reason: "Palancar Reef offers world-class visibility and marine diversity" },
      { slug: "roatan", name: "Roatán", reason: "Pristine reefs with fewer crowds and excellent value" },
      { slug: "grand-cayman", name: "Grand Cayman", reason: "Clear waters with stingrays, turtles, and vibrant coral" },
      { slug: "st-thomas", name: "St. Thomas", reason: "Sapphire Beach and St. John offer excellent shore snorkeling" },
    ],
    tips: [
      "Bring reef-safe sunscreen — chemical sunscreens harm coral",
      "Motion sickness medication helps on boat-based snorkel trips",
      "Prescription masks are rarely available — bring your own if needed",
      "Book morning excursions for calmer seas and better visibility",
      "Even strong swimmers should follow guide instructions at reef sites",
    ],
    faqs: [
      { question: "Can beginners snorkel in the Caribbean?", answer: "Absolutely. Most snorkel excursions cater to beginners with equipment, instruction, and calm reef sites. Floating vests are usually available." },
      { question: "Which Caribbean port has the best snorkeling?", answer: "Cozumel and Roatán are top contenders on the Mesoamerican Barrier Reef. Grand Cayman and St. John (from St. Thomas) are also exceptional." },
      { question: "Should I bring my own snorkel gear?", answer: "Quality excursions provide good equipment. Bring your own mask if you need a specific fit. A personal snorkel is hygienic and recommended for frequent snorkelers." },
    ],
  },
  {
    slug: "private-tours",
    name: "Private Tours",
    tagline: "Customize your Caribbean port day with a personal guide",
    overview:
      "Private tours offer the ultimate flexibility for cruise passengers who want to escape the crowd and design their own itinerary. A private guide and vehicle let you set the pace, combine multiple attractions, and adapt to weather or interests on the fly. Ideal for families, photographers, and travelers who have researched specific sites they want to visit.",
    whatToExpect: [
      "Dedicated guide and vehicle for your group only",
      "Customizable itinerary based on your interests",
      "Flexible timing — no waiting for other passengers",
      "Local knowledge and insider access to less-touristy spots",
      "Higher per-person cost offset by privacy and efficiency",
    ],
    bestPorts: [
      { slug: "st-thomas", name: "St. Thomas", reason: "Compact island perfect for custom beach and sightseeing combos" },
      { slug: "aruba", name: "Aruba", reason: "Easy to combine beaches, Arikok Park, and local dining" },
      { slug: "cozumel", name: "Cozumel", reason: "Customize reef sites and avoid crowded group snorkel boats" },
      { slug: "st-maarten", name: "St. Maarten", reason: "Cover both Dutch and French sides at your own pace" },
    ],
    tips: [
      "Book through reputable operators with cruise port pickup guarantees",
      "Share your priorities clearly — beaches vs culture vs adventure",
      "Confirm the vehicle size fits your group comfortably",
      "Agree on total price including tips, tolls, and entrance fees upfront",
      "Private tours often cost less per person for groups of 4-6",
    ],
    faqs: [
      { question: "Are private tours worth the extra cost?", answer: "For groups of 4 or more, private tours often match group excursion pricing while offering far more flexibility. Solo travelers and couples pay a premium but gain significant convenience." },
      { question: "How do I find reliable private tour guides?", answer: "Book through established operators with cruise passenger reviews. Your specialist port website can connect you with vetted local guides." },
      { question: "Will a private tour guarantee I return to the ship on time?", answer: "Reputable operators guarantee on-time return. Always confirm this policy and share your ship's departure time before booking." },
    ],
  },
  {
    slug: "family-tours",
    name: "Family Tours",
    tagline: "Caribbean excursions the whole family will enjoy",
    overview:
      "Family-friendly shore excursions balance adventure with safety, keeping children engaged while parents relax. The best family ports offer a mix of wildlife encounters, gentle beaches, cultural experiences, and attractions like water parks. Consider children's ages, stamina, and nap schedules when choosing — a Stingray City sandbar works for all ages, while a waterfall climb may not.",
    whatToExpect: [
      "Activities suitable for children aged 4 and up (varies by excursion)",
      "Shorter durations with built-in breaks and bathroom stops",
      "Calm water activities prioritized over strenuous adventures",
      "Educational elements that engage curious young minds",
      "Family pricing and group sizes that accommodate strollers",
    ],
    bestPorts: [
      { slug: "nassau", name: "Nassau", reason: "Atlantis Aquaventure and Blue Lagoon Island are built for families" },
      { slug: "grand-cayman", name: "Grand Cayman", reason: "Stingray City and Turtle Centre delight all ages" },
      { slug: "cozumel", name: "Cozumel", reason: "Chankanaab Park combines beach, snorkeling, and marine life" },
      { slug: "st-thomas", name: "St. Thomas", reason: "Magens Bay's calm waters are perfect for young swimmers" },
    ],
    tips: [
      "Book morning excursions before children tire from sun and excitement",
      "Bring snacks, water, and entertainment for transport portions",
      "Check minimum age requirements — especially for water activities",
      "Stroller-friendly excursions exist but confirm accessibility in advance",
      "Have a ship-day backup plan in case children need an early return",
    ],
    faqs: [
      { question: "What is the best Caribbean excursion for young children?", answer: "Stingray City (Grand Cayman), Magens Bay beach day (St. Thomas), and Chankanaab Park (Cozumel) are gentle, engaging options for young children." },
      { question: "Are zip-line and adventure tours safe for kids?", answer: "Most adventure parks set minimum age and weight requirements. Gumbalimba Park (Roatán) and Mystic Mountain (Ocho Rios) offer family-friendly options with supervision." },
      { question: "Should families book through the cruise line or independently?", answer: "Cruise line bookings include a return guarantee. Independent bookings save money but verify the operator's on-time return policy, especially with children." },
    ],
  },
  {
    slug: "catamaran-cruises",
    name: "Catamaran Cruises",
    tagline: "Sail the Caribbean on scenic catamaran excursions",
    overview:
      "Catamaran cruises combine sailing, snorkeling, and island scenery into one relaxed excursion. These popular trips typically include open bar, lunch, music, and stops at snorkeling reefs or secluded beaches. The Caribbean's steady trade winds make catamaran sailing especially enjoyable in ports like St. Maarten, Aruba, Grand Cayman, and Nassau.",
    whatToExpect: [
      "3-5 hour sailing excursion on a twin-hull catamaran",
      "Open bar with rum punch, beer, and soft drinks on most trips",
      "Snorkel stop at a reef site with equipment provided",
      "Lunch or snacks included on full-day sails",
      "Music, dancing, and panoramic coastline views",
    ],
    bestPorts: [
      { slug: "st-maarten", name: "St. Maarten", reason: "Trade winds and nearby islets make for ideal sailing conditions" },
      { slug: "aruba", name: "Aruba", reason: "Consistent winds and stunning coastline views" },
      { slug: "nassau", name: "Nassau", reason: "Sail to Rose Island and nearby reefs from Nassau harbor" },
      { slug: "cozumel", name: "Cozumel", reason: "El Cielo sandbar trips by catamaran are unforgettable" },
    ],
    tips: [
      "Bring motion sickness medication if you are sensitive — even calm days have swell",
      "Wear swimwear under clothes and bring a cover-up",
      "Morning sails typically have calmer seas than afternoon departures",
      "Secure hats and sunglasses — trade winds are steady and strong",
      "Book party-style catamarans for groups; smaller sails for a quieter experience",
    ],
    faqs: [
      { question: "Are catamaran cruises suitable for non-swimmers?", answer: "Yes. You can enjoy sailing, food, and music without entering the water. Snorkel stops are optional and flotation devices are provided." },
      { question: "What should I bring on a catamaran excursion?", answer: "Sunscreen, towel, sunglasses, hat, camera, and motion sickness medication if needed. Most equipment and food are provided." },
      { question: "Which port has the best catamaran excursions?", answer: "St. Maarten and Aruba are top choices for sailing conditions. Cozumel's El Cielo catamaran trips to the sandbar are uniquely memorable." },
    ],
  },
  {
    slug: "adventure-tours",
    name: "Adventure Tours",
    tagline: "Thrilling Caribbean excursions for active travelers",
    overview:
      "Adventure tours push beyond beaches and sightseeing into zip-lining, off-road exploration, waterfall climbing, and wildlife encounters. The Caribbean's diverse terrain — from Jamaican rainforests to Aruban desert to Honduran jungle — offers world-class adventure activities steps from the cruise terminal. These excursions typically require moderate fitness and a spirit for excitement.",
    whatToExpect: [
      "Physically active experiences lasting 3-6 hours",
      "Safety equipment and professional guides provided",
      "Moderate fitness level required for most activities",
      "Combination tours pairing multiple adventures are common",
      "Weather-dependent — some activities cancel in rain or high winds",
    ],
    bestPorts: [
      { slug: "ocho-rios", name: "Ocho Rios", reason: "Dunn's River Falls, zip-lining, and bobsled adventures" },
      { slug: "aruba", name: "Aruba", reason: "Arikok National Park 4x4 and off-road desert exploration" },
      { slug: "roatan", name: "Roatán", reason: "Gumbalimba Park zip-line and eco-adventures" },
      { slug: "puerto-plata", name: "Puerto Plata", reason: "27 Waterfalls and cable car mountain adventures" },
    ],
    tips: [
      "Wear closed-toe shoes or water shoes depending on the activity",
      "Check weight and age restrictions before booking zip-line tours",
      "Bring a change of clothes for waterfall and jungle activities",
      "Secure travel insurance that covers adventure activities",
      "Morning bookings avoid afternoon heat in tropical climates",
    ],
    faqs: [
      { question: "What is the most popular adventure excursion in the Caribbean?", answer: "Dunn's River Falls in Ocho Rios is the Caribbean's most iconic adventure excursion, attracting climbers of all ages." },
      { question: "Are adventure tours safe in the Caribbean?", answer: "Reputable operators with proper safety equipment and trained guides maintain high safety standards. Always book through established excursion providers." },
      { question: "What fitness level do adventure excursions require?", answer: "Most require moderate fitness — ability to walk on uneven terrain, climb stairs, and swim. Specific tours like 27 Waterfalls require more stamina. Check requirements before booking." },
    ],
  },
];

export function getExcursionTypeBySlug(slug: string): ExcursionType | undefined {
  return excursionTypes.find((e) => e.slug === slug);
}

export function getAllExcursionTypeSlugs(): string[] {
  return excursionTypes.map((e) => e.slug);
}
