import type { BestGuidePage } from "./types";

export const bestGuides: BestGuidePage[] = [
  {
    slug: "best-caribbean-shore-excursions",
    title: "Best Caribbean Shore Excursions",
    metaDescription:
      "Discover the best Caribbean shore excursions across top cruise ports including St. Thomas, Cozumel, Aruba, Grand Cayman, Nassau, Roatán and more. Port comparisons and specialist links.",
    heroSubtitle:
      "The definitive guide to planning standout port days — ranked ports, top excursions, and links to local specialist operators.",
    introduction:
      "The best Caribbean shore excursions combine short transfer times, reliable operators, and experiences you cannot replicate on the ship. This authority guide ranks the top cruise ports and signature excursions across the Caribbean so you can plan port days with confidence — whether your priority is beaches, reefs, wildlife, or culture.",
    topPorts: [
      { slug: "cozumel", reason: "World-class reef snorkeling, Mayan culture, and the widest excursion variety in the Caribbean." },
      { slug: "st-thomas", reason: "Magens Bay, St. John access, and easy no-tender port logistics." },
      { slug: "grand-cayman", reason: "Stingray City and Seven Mile Beach — signature experiences found nowhere else." },
      { slug: "aruba", reason: "Year-round sunshine, Eagle Beach, and reliable Southern Caribbean weather." },
      { slug: "roatan", reason: "Exceptional reef value with fewer crowds than Mexico's busiest ports." },
      { slug: "nassau", reason: "Atlantis, Bahamian culture, and walkable downtown from the pier." },
    ],
    recommendedExcursions: [
      { name: "Stingray City Sandbar", portSlug: "grand-cayman", description: "Stand in waist-deep water surrounded by wild southern stingrays.", duration: "3-4 hours" },
      { name: "Palancar Reef Snorkel", portSlug: "cozumel", description: "Vibrant Mesoamerican Reef with exceptional visibility.", duration: "3-4 hours" },
      { name: "Magens Bay Beach Day", portSlug: "st-thomas", description: "Iconic horseshoe beach with calm turquoise water.", duration: "4-5 hours" },
      { name: "Dunn's River Falls Climb", portSlug: "ocho-rios", description: "Jamaica's signature terraced waterfall climb.", duration: "3-4 hours" },
      { name: "Eagle Beach & Snorkel Sail", portSlug: "aruba", description: "Catamaran sail with reef stop and Eagle Beach visit.", duration: "4-5 hours" },
      { name: "Atlantis Aquaventure", portSlug: "nassau", description: "Full water park access on Paradise Island.", duration: "5-6 hours" },
    ],
    comparisonTable: [
      { portSlug: "cozumel", portName: "Cozumel", highlight: "Reef & variety", bestExcursion: "Palancar Reef Snorkel", rating: "4.9" },
      { portSlug: "st-thomas", portName: "St. Thomas", highlight: "Beaches & shopping", bestExcursion: "Magens Bay Beach Day", rating: "4.9" },
      { portSlug: "grand-cayman", portName: "Grand Cayman", highlight: "Wildlife", bestExcursion: "Stingray City", rating: "4.9" },
      { portSlug: "aruba", portName: "Aruba", highlight: "Sunshine & beaches", bestExcursion: "Eagle Beach Sail", rating: "4.9" },
      { portSlug: "roatan", portName: "Roatán", highlight: "Value snorkeling", bestExcursion: "West Bay Snorkel", rating: "4.9" },
      { portSlug: "nassau", portName: "Nassau", highlight: "Family resorts", bestExcursion: "Atlantis Aquaventure", rating: "4.8" },
    ],
    faqs: [
      { question: "What are the best Caribbean shore excursions overall?", answer: "Top experiences include Stingray City in Grand Cayman, Palancar Reef snorkeling in Cozumel, Magens Bay in St. Thomas, Dunn's River Falls in Ocho Rios, and Eagle Beach catamaran sails in Aruba." },
      { question: "Should I book shore excursions through the cruise line?", answer: "Book your one must-do excursion through the cruise line for the return guarantee. Use independent operators for additional activities — they typically offer better pricing and smaller groups." },
      { question: "How far in advance should I book Caribbean excursions?", answer: "Book signature experiences 2-4 weeks before sailing. Check ship schedules for your port day to avoid crowds on multi-ship days." },
    ],
  },
  {
    slug: "best-caribbean-beach-excursions",
    title: "Best Caribbean Beach Excursions",
    metaDescription:
      "Best Caribbean beach excursions at St. Thomas, Aruba, Grand Cayman, Roatán, St. Maarten and Nassau. Compare beach days, cabanas, and port transfers.",
    heroSubtitle: "Ranked beach excursions at the Caribbean's top cruise ports — calm bays, white sand, and reliable port-day logistics.",
    introduction:
      "Beach excursions are the most popular Caribbean port-day choice. The best beach days pair short taxi or boat transfers with calm swimmable water, chair rentals, and enough time to relax before all-aboard. This guide ranks the top beach ports and excursions for cruise passengers.",
    topPorts: [
      { slug: "st-thomas", reason: "Magens Bay is consistently ranked among the world's finest swim beaches." },
      { slug: "aruba", reason: "Eagle Beach and Palm Beach offer wide white sand outside the hurricane belt." },
      { slug: "grand-cayman", reason: "Seven Mile Beach is an iconic Caribbean stretch of pristine sand." },
      { slug: "roatan", reason: "West Bay Beach delivers exceptional value and clear calm water." },
      { slug: "st-maarten", reason: "Orient Bay beach clubs on the French side offer lively beach day options." },
      { slug: "nassau", reason: "Paradise Island and Cable Beach via resort day passes." },
    ],
    recommendedExcursions: [
      { name: "Magens Bay Beach Day", portSlug: "st-thomas", description: "Calm horseshoe bay with facilities and chair rentals.", duration: "4-5 hours" },
      { name: "Eagle Beach Break", portSlug: "aruba", description: "Wide white sand with divi-divi trees and calm water.", duration: "3-4 hours" },
      { name: "Seven Mile Beach Day", portSlug: "grand-cayman", description: "Organized transport to the west coast's finest beach.", duration: "4-5 hours" },
      { name: "West Bay Beach Club", portSlug: "roatan", description: "Top-value white sand with optional reef snorkel.", duration: "4-5 hours" },
      { name: "Orient Bay Beach Day", portSlug: "st-maarten", description: "French-side beach clubs with restaurants and water sports.", duration: "4-5 hours" },
      { name: "Atlantis Beach Pass", portSlug: "nassau", description: "Paradise Island beach and pool access.", duration: "5-6 hours" },
    ],
    comparisonTable: [
      { portSlug: "st-thomas", portName: "St. Thomas", highlight: "Calm bay swimming", bestExcursion: "Magens Bay", rating: "4.9" },
      { portSlug: "aruba", portName: "Aruba", highlight: "Wide white sand", bestExcursion: "Eagle Beach", rating: "4.9" },
      { portSlug: "grand-cayman", portName: "Grand Cayman", highlight: "Pristine stretch", bestExcursion: "Seven Mile Beach", rating: "4.8" },
      { portSlug: "roatan", portName: "Roatán", highlight: "Best value", bestExcursion: "West Bay Beach", rating: "4.9" },
      { portSlug: "st-maarten", portName: "St. Maarten", highlight: "Beach clubs", bestExcursion: "Orient Bay", rating: "4.7" },
      { portSlug: "nassau", portName: "Nassau", highlight: "Resort beaches", bestExcursion: "Atlantis Beach", rating: "4.8" },
    ],
    faqs: [
      { question: "Which Caribbean port has the best beach for cruise passengers?", answer: "Magens Bay in St. Thomas, Eagle Beach in Aruba, and West Bay in Roatán consistently rank highest for calm water, sand quality, and excursion reliability." },
      { question: "Do beach excursions include chairs and umbrellas?", answer: "Most organized beach excursions include transport and many include chair rentals. Confirm when booking, especially at Magens Bay and Orient Bay." },
      { question: "How do I avoid crowded beaches on cruise days?", answer: "Check ship schedules for multi-ship days and book early departures. Less famous beaches like Sapphire Beach (St. Thomas) or Tabyana (Roatán) see fewer crowds." },
    ],
    excursionTypeSlug: "beaches",
  },
  {
    slug: "best-caribbean-snorkeling-excursions",
    title: "Best Caribbean Snorkeling Excursions",
    metaDescription:
      "Best Caribbean snorkeling excursions at Cozumel, Roatán, Grand Cayman, St. Thomas, Aruba and Nassau. Reef sites, visibility, and port-day snorkel tours ranked.",
    heroSubtitle: "Mesoamerican Reef snorkeling ranked by port — visibility, marine life, and cruise-day logistics.",
    introduction:
      "Caribbean snorkeling excursions range from world-class barrier reef dives to calm bay snorkels for beginners. Cozumel and Roatán sit on the Mesoamerican Reef; Grand Cayman and St. Thomas offer excellent boat-access sites. This guide ranks the best snorkel ports and tours for cruise passengers.",
    topPorts: [
      { slug: "cozumel", reason: "Palancar and Columbia reefs — world-renowned visibility and marine diversity." },
      { slug: "roatan", reason: "Pristine reef with fewer boats and excellent value." },
      { slug: "grand-cayman", reason: "Stingray City depth snorkel and Cemetery Reef boat tours." },
      { slug: "st-thomas", reason: "Sapphire Beach and St. John Trunk Bay via ferry day trips." },
      { slug: "aruba", reason: "Antilla wreck and Boca Catalina calm bay sites." },
      { slug: "nassau", reason: "Rose Island and catamaran reef stops close to port." },
    ],
    recommendedExcursions: [
      { name: "Palancar Reef Snorkel", portSlug: "cozumel", description: "Signature coral formations with tropical fish and clear water.", duration: "3-4 hours" },
      { name: "West End Two-Stop Snorkel", portSlug: "roatan", description: "Two pristine reef sites along the barrier reef.", duration: "3-4 hours" },
      { name: "Stingray City & Reef Combo", portSlug: "grand-cayman", description: "Sandbar rays plus reef snorkel on one boat tour.", duration: "4 hours" },
      { name: "Sapphire Beach Snorkel", portSlug: "st-thomas", description: "Healthy reef minutes from the cruise terminal area.", duration: "3-4 hours" },
      { name: "Antilla Wreck Snorkel", portSlug: "aruba", description: "Shallow WWII wreck with coral growth and fish.", duration: "3-4 hours" },
      { name: "Rose Island Catamaran Snorkel", portSlug: "nassau", description: "Short sail to healthy reef near Nassau.", duration: "4 hours" },
    ],
    comparisonTable: [
      { portSlug: "cozumel", portName: "Cozumel", highlight: "World-class reef", bestExcursion: "Palancar Reef", rating: "4.9" },
      { portSlug: "roatan", portName: "Roatán", highlight: "Value & clarity", bestExcursion: "West End Snorkel", rating: "4.8" },
      { portSlug: "grand-cayman", portName: "Grand Cayman", highlight: "Wildlife + reef", bestExcursion: "Stingray & Reef", rating: "4.8" },
      { portSlug: "st-thomas", portName: "St. Thomas", highlight: "Easy access", bestExcursion: "Sapphire Beach", rating: "4.7" },
      { portSlug: "aruba", portName: "Aruba", highlight: "Wreck snorkel", bestExcursion: "Antilla Wreck", rating: "4.7" },
      { portSlug: "nassau", portName: "Nassau", highlight: "Catamaran reef", bestExcursion: "Rose Island", rating: "4.6" },
    ],
    faqs: [
      { question: "Which Caribbean port is best for snorkeling?", answer: "Cozumel and Roatán rank highest for reef quality. Cozumel has more tour options; Roatán offers comparable reefs with fewer crowds and lower prices." },
      { question: "Do I need my own snorkel gear?", answer: "Most excursions provide mask, snorkel, and fins. Bring reef-safe sunscreen. Consider your own mask if you have fit issues with rental gear." },
      { question: "Can beginners snorkel in the Caribbean?", answer: "Yes. Chankanaab (Cozumel), Sapphire Beach (St. Thomas), and West Bay (Roatán) offer calm conditions ideal for first-time snorkelers." },
    ],
    excursionTypeSlug: "snorkeling",
  },
  {
    slug: "best-caribbean-family-excursions",
    title: "Best Caribbean Family Excursions",
    metaDescription:
      "Best Caribbean family shore excursions at Nassau, Cozumel, Grand Cayman, St. Thomas, Aruba and Puerto Plata. Kid-friendly beaches, wildlife, and adventure tours.",
    heroSubtitle: "Family-tested excursions with calm beaches, wildlife encounters, and age-appropriate adventure across top Caribbean ports.",
    introduction:
      "Family shore excursions need calm water, reliable timing back to the ship, and activities that work across ages. Atlantis in Nassau, Stingray City in Grand Cayman, Chankanaab in Cozumel, and Magens Bay in St. Thomas lead the Caribbean for family port days.",
    topPorts: [
      { slug: "nassau", reason: "Atlantis Aquaventure and Blue Lagoon marine encounters." },
      { slug: "grand-cayman", reason: "Stingray City sandbar — waist-deep water safe for children." },
      { slug: "cozumel", reason: "Chankanaab Park lagoon snorkel, dolphins, and beach facilities." },
      { slug: "st-thomas", reason: "Magens Bay calm swimming and Coral World marine park." },
      { slug: "aruba", reason: "De Palm Island water park and Baby Beach shallow lagoon." },
      { slug: "puerto-plata", reason: "Cable car, Ocean World, and Amber Cove port pool." },
    ],
    recommendedExcursions: [
      { name: "Atlantis Aquaventure", portSlug: "nassau", description: "Water slides, pools, and beach on Paradise Island.", duration: "5-6 hours" },
      { name: "Stingray City Sandbar", portSlug: "grand-cayman", description: "Shallow water wildlife encounter with guide supervision.", duration: "3-4 hours" },
      { name: "Chankanaab Beach Park", portSlug: "cozumel", description: "Snorkel lagoon, dolphins, and all-ages beach facilities.", duration: "4-5 hours" },
      { name: "Magens Bay Family Beach", portSlug: "st-thomas", description: "Calm bay with facilities and shallow swimming areas.", duration: "4-5 hours" },
      { name: "De Palm Island", portSlug: "aruba", description: "All-inclusive private island with water park.", duration: "5-6 hours" },
      { name: "Teleférico Cable Car", portSlug: "puerto-plata", description: "Scenic summit ride with gardens — manageable for most ages.", duration: "3-4 hours" },
    ],
    comparisonTable: [
      { portSlug: "nassau", portName: "Nassau", highlight: "Water park", bestExcursion: "Atlantis", rating: "4.8" },
      { portSlug: "grand-cayman", portName: "Grand Cayman", highlight: "Wildlife", bestExcursion: "Stingray City", rating: "4.9" },
      { portSlug: "cozumel", portName: "Cozumel", highlight: "All-in-one park", bestExcursion: "Chankanaab", rating: "4.7" },
      { portSlug: "st-thomas", portName: "St. Thomas", highlight: "Calm beach", bestExcursion: "Magens Bay", rating: "4.9" },
      { portSlug: "aruba", portName: "Aruba", highlight: "Private island", bestExcursion: "De Palm Island", rating: "4.7" },
      { portSlug: "puerto-plata", portName: "Puerto Plata", highlight: "Cable car views", bestExcursion: "Teleférico", rating: "4.7" },
    ],
    faqs: [
      { question: "What is the best Caribbean excursion for kids?", answer: "Atlantis Aquaventure in Nassau is the top family experience. Stingray City in Grand Cayman and Chankanaab in Cozumel are excellent alternatives at lower price points." },
      { question: "Are Caribbean shore excursions safe for young children?", answer: "Organized excursions with licensed operators are safe. Choose calm beach days for toddlers and wildlife tours with guide supervision for older children." },
      { question: "Which ports are worst for families with strollers?", answer: "Grand Cayman requires tenders which complicate stroller logistics. Ocho Rios waterfall climbs are not stroller-friendly. Nassau and St. Thomas are most walkable." },
    ],
    excursionTypeSlug: "family-tours",
  },
  {
    slug: "best-caribbean-couple-excursions",
    title: "Best Caribbean Couple Excursions",
    metaDescription:
      "Best Caribbean couple shore excursions — private catamarans, beach cabanas, sunset sails, and romantic port days in Aruba, St. Thomas, Cozumel and Grand Cayman.",
    heroSubtitle: "Romantic and private excursions for couples — catamaran sails, secluded beaches, and intimate port-day experiences.",
    introduction:
      "Couples often want smaller groups, scenic settings, and flexible pacing away from large tour buses. Private catamarans, beach cabanas, sunset sails, and dual-activity combos (snorkel plus beach) work best. These ports and excursions deliver the strongest couple experiences in the Caribbean.",
    topPorts: [
      { slug: "aruba", reason: "Sunset catamarans, Eagle Beach cabanas, and reliable sunshine." },
      { slug: "st-thomas", reason: "Private sails to outer cays and St. John secluded beaches." },
      { slug: "cozumel", reason: "El Cielo sandbar catamarans and private reef snorkel boats." },
      { slug: "grand-cayman", reason: "Private Stingray City charters and Seven Mile cabanas." },
      { slug: "st-maarten", reason: "Orient Bay cabanas and Tintamarre catamaran snorkel sails." },
      { slug: "roatan", reason: "Secluded West Bay beach clubs at lower price points." },
    ],
    recommendedExcursions: [
      { name: "Private Sunset Catamaran", portSlug: "aruba", description: "West coast sail with cocktails and snorkel stop.", duration: "4 hours" },
      { name: "Private Catamaran to St. John", portSlug: "st-thomas", description: "Island-hopping sail with Trunk Bay snorkel.", duration: "6-7 hours" },
      { name: "Private El Cielo Catamaran", portSlug: "cozumel", description: "Sandbar, starfish, and champagne on a private boat.", duration: "4-5 hours" },
      { name: "Private Stingray City Charter", portSlug: "grand-cayman", description: "Early-morning sandbar visit before crowds arrive.", duration: "3-4 hours" },
      { name: "Orient Bay Cabana Day", portSlug: "st-maarten", description: "French-side beach club with lunch and loungers.", duration: "4-5 hours" },
      { name: "Private West Bay Beach Club", portSlug: "roatan", description: "Secluded cabana with offshore reef snorkel.", duration: "4-5 hours" },
    ],
    comparisonTable: [
      { portSlug: "aruba", portName: "Aruba", highlight: "Sunset sails", bestExcursion: "Private Catamaran", rating: "4.9" },
      { portSlug: "st-thomas", portName: "St. Thomas", highlight: "Island sailing", bestExcursion: "St. John Sail", rating: "4.8" },
      { portSlug: "cozumel", portName: "Cozumel", highlight: "Sandbar romance", bestExcursion: "El Cielo Private", rating: "4.8" },
      { portSlug: "grand-cayman", portName: "Grand Cayman", highlight: "Private wildlife", bestExcursion: "Stingray Charter", rating: "4.9" },
      { portSlug: "st-maarten", portName: "St. Maarten", highlight: "Beach club", bestExcursion: "Orient Bay Cabana", rating: "4.7" },
      { portSlug: "roatan", portName: "Roatán", highlight: "Value privacy", bestExcursion: "West Bay Club", rating: "4.8" },
    ],
    faqs: [
      { question: "What is the most romantic Caribbean shore excursion?", answer: "Private sunset catamarans in Aruba, El Cielo sandbar sails in Cozumel, and early-morning Stingray City charters in Grand Cayman rank highest for couples." },
      { question: "Are private tours worth the cost for couples?", answer: "Yes for special occasions. Private boats and guides offer flexible timing, smaller groups, and personalized itineraries that group tours cannot match." },
      { question: "Which port is best for a couples beach day?", answer: "Eagle Beach (Aruba), Magens Bay (St. Thomas), and West Bay (Roatán) offer beautiful settings with cabana and lunch options for two." },
    ],
    excursionTypeSlug: "private-tours",
  },
  {
    slug: "best-caribbean-private-tours",
    title: "Best Caribbean Private Tours",
    metaDescription:
      "Best Caribbean private shore excursions and custom tours at Cozumel, St. Thomas, Grand Cayman, Aruba, Roatán and Ocho Rios. Small-group and private operator guide.",
    heroSubtitle: "Private taxis, custom island tours, and exclusive boat charters — the best ports for independent Caribbean exploration.",
    introduction:
      "Private tours give cruise passengers control over pacing, stops, and group size. The best Caribbean ports for private tours have reliable licensed operators, compact islands easy to cover in a day, and enough attractions to customize an itinerary.",
    topPorts: [
      { slug: "cozumel", reason: "Private reef boats, Jeep tours, and custom ruin-and-beach combos." },
      { slug: "st-thomas", reason: "Private island tours covering beaches, viewpoints, and Red Hook ferry." },
      { slug: "grand-cayman", reason: "Private Stingray City boats and custom Seven Mile itineraries." },
      { slug: "aruba", reason: "Private 4x4 Arikok tours and custom north-coast highlights." },
      { slug: "roatan", reason: "Affordable private drivers to West Bay and snorkel boats." },
      { slug: "ocho-rios", reason: "Private Dunn's River Falls timing and custom north-coast routes." },
    ],
    recommendedExcursions: [
      { name: "Private Reef Snorkel Boat", portSlug: "cozumel", description: "Two-stop snorkel itinerary on a private charter.", duration: "4 hours" },
      { name: "Private Island Highlights", portSlug: "st-thomas", description: "Custom taxi tour — Magens Bay, Mountain Top, Red Hook.", duration: "4-5 hours" },
      { name: "Private Stingray City Boat", portSlug: "grand-cayman", description: "Early departure private sandbar charter.", duration: "3-4 hours" },
      { name: "Private Arikok 4x4", portSlug: "aruba", description: "Off-road Natural Pool and lighthouse custom route.", duration: "4-5 hours" },
      { name: "Private West Bay & Snorkel", portSlug: "roatan", description: "Dedicated driver and timed beach club access.", duration: "4-5 hours" },
      { name: "Private Dunn's River Tour", portSlug: "ocho-rios", description: "First-slot falls climb with private guide.", duration: "3-4 hours" },
    ],
    comparisonTable: [
      { portSlug: "cozumel", portName: "Cozumel", highlight: "Private boats", bestExcursion: "Reef Charter", rating: "4.9" },
      { portSlug: "st-thomas", portName: "St. Thomas", highlight: "Custom island tour", bestExcursion: "Private Taxi", rating: "4.8" },
      { portSlug: "grand-cayman", portName: "Grand Cayman", highlight: "Private wildlife", bestExcursion: "Stingray Boat", rating: "4.9" },
      { portSlug: "aruba", portName: "Aruba", highlight: "4x4 custom", bestExcursion: "Arikok Private", rating: "4.8" },
      { portSlug: "roatan", portName: "Roatán", highlight: "Best value", bestExcursion: "Private Driver", rating: "4.8" },
      { portSlug: "ocho-rios", portName: "Ocho Rios", highlight: "Timed falls", bestExcursion: "Private Falls", rating: "4.9" },
    ],
    faqs: [
      { question: "How do I book a private tour in the Caribbean?", answer: "Book through specialist local operators linked from our port guides, or arrange a private taxi at the port with an agreed itinerary and price before departing." },
      { question: "Are private tours cheaper than cruise line excursions?", answer: "Often yes — especially for groups of 4-6 sharing a private van or boat. Solo travelers pay more per person but gain flexibility." },
      { question: "Which port is best for DIY private exploration?", answer: "St. Thomas and Aruba are compact with reliable taxis. Cozumel and Roatán offer excellent private boat options for reef access." },
    ],
    excursionTypeSlug: "private-tours",
  },
  {
    slug: "best-caribbean-catamaran-cruises",
    title: "Best Caribbean Catamaran Cruises",
    metaDescription:
      "Best Caribbean catamaran excursions at St. Thomas, Aruba, Cozumel, St. Maarten, Nassau and Grand Cayman. Snorkel sails, open bar cruises, and sunset catamarans ranked.",
    heroSubtitle: "Snorkel sails, open-bar cruises, and sunset catamarans — the top Caribbean ports for catamaran shore excursions.",
    introduction:
      "Catamaran excursions combine sailing, snorkeling, and open-bar social atmosphere in one port-day package. The best Caribbean catamaran ports have calm leeward coasts, nearby reef or island stops, and operators running daily sailings from cruise terminals.",
    topPorts: [
      { slug: "st-thomas", reason: "Sails to outer cays and St. John with excellent snorkel stops." },
      { slug: "aruba", reason: "Consistent trade winds and sunset sails along the west coast." },
      { slug: "cozumel", reason: "El Cielo sandbar and reef combo catamarans." },
      { slug: "st-maarten", reason: "Tintamarre islet snorkel sails from the Dutch side." },
      { slug: "nassau", reason: "Rose Island and Goulding Cay reef catamaran tours." },
      { slug: "grand-cayman", reason: "Reef snorkel sails along the west coast." },
    ],
    recommendedExcursions: [
      { name: "Catamaran Sail & Snorkel", portSlug: "st-thomas", description: "Open-bar sail with reef stop and beach time.", duration: "4-5 hours" },
      { name: "Sunset Catamaran Cruise", portSlug: "aruba", description: "Evening sail with cocktails and coastline views.", duration: "2-3 hours" },
      { name: "El Cielo Catamaran", portSlug: "cozumel", description: "Sandbar, starfish, and snorkel open-bar sail.", duration: "4-5 hours" },
      { name: "Tintamarre Catamaran", portSlug: "st-maarten", description: "Uninhabited islet snorkel and beach stop.", duration: "4-5 hours" },
      { name: "Rose Island Snorkel Sail", portSlug: "nassau", description: "Reef snorkel and open bar on a catamaran.", duration: "4 hours" },
      { name: "West Coast Snorkel Sail", portSlug: "grand-cayman", description: "Reef stop plus coastline sailing.", duration: "3-4 hours" },
    ],
    comparisonTable: [
      { portSlug: "st-thomas", portName: "St. Thomas", highlight: "Island hopping", bestExcursion: "Cay Sail", rating: "4.8" },
      { portSlug: "aruba", portName: "Aruba", highlight: "Sunset sails", bestExcursion: "Sunset Cat", rating: "4.9" },
      { portSlug: "cozumel", portName: "Cozumel", highlight: "Sandbar combo", bestExcursion: "El Cielo", rating: "4.8" },
      { portSlug: "st-maarten", portName: "St. Maarten", highlight: "Islet snorkel", bestExcursion: "Tintamarre", rating: "4.8" },
      { portSlug: "nassau", portName: "Nassau", highlight: "Reef sail", bestExcursion: "Rose Island", rating: "4.6" },
      { portSlug: "grand-cayman", portName: "Grand Cayman", highlight: "Coast sail", bestExcursion: "Reef Sail", rating: "4.7" },
    ],
    faqs: [
      { question: "Which Caribbean port has the best catamaran excursions?", answer: "St. Thomas, Aruba, and Cozumel lead for catamaran variety. Aruba excels for sunset sails; Cozumel for sandbar combos; St. Thomas for island-hopping." },
      { question: "Do catamaran excursions include food and drinks?", answer: "Most include open bar and light lunch or snacks. Confirm inclusions when booking — premium catamarans offer better catering." },
      { question: "Are catamaran tours good for non-swimmers?", answer: "Yes. You can enjoy sailing and open bar without entering the water. Snorkel stops are optional on most tours." },
    ],
    excursionTypeSlug: "catamaran-cruises",
  },
  {
    slug: "best-caribbean-wildlife-excursions",
    title: "Best Caribbean Wildlife Excursions",
    metaDescription:
      "Best Caribbean wildlife shore excursions — Stingray City Grand Cayman, swimming pigs Nassau, dolphins, reef turtles, and eco-adventures at top cruise ports.",
    heroSubtitle: "Stingrays, dolphins, reef turtles, and tropical wildlife encounters at the Caribbean's best cruise ports.",
    introduction:
      "Wildlife excursions are among the Caribbean's most memorable port-day experiences. Stingray City in Grand Cayman is the signature encounter; Nassau offers swimming pigs and dolphin programs; Roatán and Cozumel deliver reef marine life; Puerto Plata and Ocho Rios add rainforest creatures and eco-parks.",
    topPorts: [
      { slug: "grand-cayman", reason: "Stingray City — unique wild stingray sandbar encounter." },
      { slug: "nassau", reason: "Swimming pigs, Blue Lagoon dolphins, and reef marine life." },
      { slug: "roatan", reason: "Gumbalimba Park monkeys, iguanas, and reef sea turtles." },
      { slug: "cozumel", reason: "Reef tropical fish, sea turtles, and Chankanaab dolphin programs." },
      { slug: "ocho-rios", reason: "Dolphin Cove and rainforest birdlife." },
      { slug: "puerto-plata", reason: "Ocean World dolphins and Atlantic marine encounters." },
    ],
    recommendedExcursions: [
      { name: "Stingray City Sandbar", portSlug: "grand-cayman", description: "Wild southern stingrays in shallow sandbar water.", duration: "3-4 hours" },
      { name: "Exuma Swimming Pigs", portSlug: "nassau", description: "Fly to Big Major Cay for the famous swimming pigs.", duration: "Full day" },
      { name: "Gumbalimba Park", portSlug: "roatan", description: "Capuchin monkeys, iguanas, and zip-line eco-park.", duration: "4-5 hours" },
      { name: "Palancar Reef Snorkel", portSlug: "cozumel", description: "Tropical fish, rays, and occasional sea turtles.", duration: "3-4 hours" },
      { name: "Dolphin Cove Encounter", portSlug: "ocho-rios", description: "Dolphin swim and tropical bird habitats.", duration: "3-4 hours" },
      { name: "Ocean World Dolphin Swim", portSlug: "puerto-plata", description: "Marine park dolphin and sea lion programs.", duration: "4-5 hours" },
    ],
    comparisonTable: [
      { portSlug: "grand-cayman", portName: "Grand Cayman", highlight: "Stingrays", bestExcursion: "Stingray City", rating: "4.9" },
      { portSlug: "nassau", portName: "Nassau", highlight: "Swimming pigs", bestExcursion: "Exuma Pigs", rating: "4.9" },
      { portSlug: "roatan", portName: "Roatán", highlight: "Eco-park", bestExcursion: "Gumbalimba", rating: "4.7" },
      { portSlug: "cozumel", portName: "Cozumel", highlight: "Reef life", bestExcursion: "Palancar Snorkel", rating: "4.9" },
      { portSlug: "ocho-rios", portName: "Ocho Rios", highlight: "Dolphins", bestExcursion: "Dolphin Cove", rating: "4.6" },
      { portSlug: "puerto-plata", portName: "Puerto Plata", highlight: "Marine park", bestExcursion: "Ocean World", rating: "4.6" },
    ],
    faqs: [
      { question: "What is the best wildlife excursion in the Caribbean?", answer: "Stingray City in Grand Cayman is the most unique wildlife experience. Swimming pigs in Nassau Exuma and Gumbalimba Park in Roatán are close runners-up." },
      { question: "Is Stingray City safe?", answer: "Yes with guide supervision. Stingrays are accustomed to visitors. Follow instructions, avoid stepping on rays, and wear water shoes." },
      { question: "Can you see sea turtles on Caribbean excursions?", answer: "Sea turtles are commonly spotted snorkeling in Cozumel, Roatán, and Grand Cayman. Dedicated turtle encounters are available at Cayman Turtle Centre." },
    ],
    excursionTypeSlug: "adventure-tours",
  },
];

export function getBestGuideBySlug(slug: string): BestGuidePage | undefined {
  return bestGuides.find((g) => g.slug === slug);
}

export function getAllBestGuideSlugs(): string[] {
  return bestGuides.map((g) => g.slug);
}
