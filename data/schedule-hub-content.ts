import type { SchedulePageContent, ScheduleHubPortSlug } from "./schedule-page-content";

type HubContentKey = `${ScheduleHubPortSlug}-hub`;

export const scheduleHubContent: Record<HubContentKey, SchedulePageContent> = {
  "nassau-hub": {
    intro:
      "This Nassau schedule hub is your entry point for both 2026 and 2027 Prince George Wharf call data — compare years before you open monthly tables. Nassau leads Caribbean import volumes in 2027 and remains among the busiest 2026 destinations, so knowing how many ships share your pier day matters as much as your own arrival time when booking Atlantis, snorkel sails, or downtown walking tours.",
    heroSubtitle:
      "Nassau cruise schedule hub — compare 2026 and 2027 Prince George Wharf ship calls, busy pier days, and excursion timing before you sail.",
    whyPassengersUse: [
      "Nassau anchors Florida and Bahamas itineraries with year-round traffic — this hub lets you jump to 2026 or 2027 monthly tables and spot multi-ship weeks before Atlantis and catamaran operators sell out.",
      "Prince George Wharf is a downtown dock, so published arrival times frame walkable sightseeing immediately; comparing both years shows whether your sail date falls in a quieter winter week or a stacked spring break period.",
      "Excursion planners use Nassau schedules to size Atlantis Aquaventure, Blue Lagoon transfers, and Exuma pig flights against published departure columns rather than brochure guesses.",
      "Missed-departure risk rises when three mega-ships discharge passengers into downtown simultaneously — the hub links to year pages where you count competing vessels on your exact date.",
    ],
    planningYourDay: {
      summary:
        "Start at this hub to pick 2026 or 2027, then match one headline Nassau experience to your published in-port window — docked downtown access makes timing the main variable, not tender logistics.",
      typicalActivities: [
        "Walk Queen's Staircase and Straw Market from Prince George Wharf on shorter calls",
        "Bridge or taxi to Paradise Island for Atlantis beaches and Aquaventure on six-hour-plus windows",
        "Morning catamaran snorkel to Rose Island when schedules show early arrival and fewer competing ships",
      ],
      topAttractions: [
        "Paradise Island & Atlantis — resort water park and marine habitats",
        "Queen's Staircase & Fort Fincastle — compact historic sites near the terminal",
        "Blue Lagoon Island — dolphin encounters by short boat ride",
        "Cable Beach — resort strip west of downtown",
      ],
      recommendedExcursions: [
        "Atlantis Aquaventure day pass when either year's schedule shows a late afternoon departure",
        "Half-day snorkel and catamaran sail on single-ship or dual-ship pier days",
        "Downtown heritage walk plus short beach stop on tight turnaround calls",
      ],
      timingConsiderations: [
        "Compare 2026 versus 2027 monthly tables if choosing between sail dates — winter weeks often stack more ships",
        "Exuma swimming-pig flights need essentially a full port day in either year",
        "Afternoon departures open morning Atlantis visits plus downtown shopping",
      ],
      returnGuidance:
        "Walk back to Prince George Wharf security at least 45–60 minutes before published departure. Bridge traffic to Paradise Island intensifies when multiple ships share the pier — factor that into Atlantis and Blue Lagoon returns.",
    },
    faqs: [
      {
        question: "Should I use the Nassau 2026 or 2027 schedule for excursion planning?",
        answer:
          "Open the year that matches your sailing. This hub links to both: 2027 currently leads published call volume, while 2026 helps if you are comparing back-to-back seasons. Monthly tables in either year show ship names, arrival times, and competing vessels on your pier day.",
      },
      {
        question: "Does Nassau use tenders or a cruise dock?",
        answer:
          "Nassau is a dock port. Ships berth at Prince George Wharf in downtown Nassau with walk-off access — no tender boats. That simplifies return timing versus Grand Cayman or Tortola, though taxi transfers to Paradise Island still need buffer time.",
      },
      {
        question: "How do I tell if my Nassau pier day will be crowded?",
        answer:
          "From this hub, open your sailing year and the month that matches your cruise. Count how many ships list the same date. Two or more large vessels typically mean longer Atlantis lines, fuller snorkel boats, and heavier downtown foot traffic.",
      },
      {
        question: "Can Nassau arrival times change after I book an independent excursion?",
        answer:
          "Yes. Cruise lines adjust for weather, operational delays, and pier sequencing. Use 2026 or 2027 schedules for advance planning, then confirm final times on your ship's daily program before disembarking.",
      },
    ],
    internalLinks: [
      {
        label: "Nassau 2027 Schedule",
        href: "/ship-schedules/nassau/2027",
        description: "Highest-volume year with monthly Prince George Wharf tables.",
      },
      {
        label: "Nassau 2026 Schedule",
        href: "/ship-schedules/nassau/2026",
        description: "Prior-year pier patterns for season comparisons.",
      },
      {
        label: "Nassau Port Guide",
        href: "/ports/nassau",
        description: "Excursions, beaches, and passenger logistics.",
      },
      {
        label: "Nassau Shore Excursions",
        href: "https://nassaucruiseexcursions.com",
        description: "Pier-aware operators with on-time return guarantees.",
        external: true,
      },
      {
        label: "Bahamas Cruise Planner",
        href: "/bahamas-cruise-planner",
        description: "Multi-port Bahamas itinerary planning.",
      },
      {
        label: "Best Shore Excursion at Every Port",
        href: "/best-shore-excursion-every-caribbean-port",
        description: "Compare Nassau's signature picks across the Caribbean.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "Atlantis Aquaventure",
          description: "Full water-park access on Paradise Island — Nassau's most requested family day.",
          duration: "5–6 hours",
        },
        {
          name: "Blue Lagoon Island",
          description: "Dolphin encounters and beach time on a private island boat ride from Nassau.",
          duration: "4–5 hours",
        },
        {
          name: "Snorkel & Catamaran Sail",
          description: "Rose Island reef stops on morning departures tied to pier arrival times.",
          duration: "4–5 hours",
        },
      ],
      terminalInfo:
        "Cruise ships dock at Prince George Wharf in downtown Nassau — immediate walk-off access to Bay Street, taxis, and the Paradise Island bridge. There is a single downtown berth cluster rather than multiple pier zones like Cozumel.",
      tenderVsDock:
        "Nassau is a dock port — passengers walk directly ashore without tender boats. That makes punctual return easier than at tender-only destinations, provided you allow taxi time for Paradise Island and Cable Beach transfers.",
      typicalTimeInPort: "7–9 hours typical on Western and Bahamas itineraries",
      bestExcursionTiming: [
        "Book morning snorkel catamarans when your schedule shows arrival before 9:00 AM",
        "Reserve Atlantis passes before sailing on weeks when both 2026 and 2027 tables show three or more ships",
        "Use afternoon departures for a morning downtown walk plus shorter Cable Beach visit",
      ],
    },
  },

  "cozumel-hub": {
    intro:
      "Use this Cozumel schedule hub to compare 2026 and 2027 call patterns across Punta Langosta, International Pier, and Puerta Maya before you open monthly tables. Cozumel ranks among the Caribbean's busiest ports in both years — pier assignment and multi-ship overlap affect reef-boat departures, San Miguel taxi times, and whether a mainland Tulum combo is realistic.",
    heroSubtitle:
      "Cozumel cruise schedule hub — compare 2026 and 2027 three-pier call volumes, reef excursion timing, and busy port days.",
    whyPassengersUse: [
      "Cozumel rotates ships among three piers — this hub links to 2026 and 2027 year pages where you confirm which terminal your vessel uses before booking operator pickup.",
      "Western Caribbean itineraries often stack multiple ships on peak weeks; comparing both years reveals whether your sail date falls in a quieter shoulder period or a four-ship reef day.",
      "Reef snorkel boats and El Cielo catamarans batch morning departures around gangway times — published schedules replace brochure guesses for on-time return guarantees.",
      "Mainland Tulum tours need ferry time to Playa del Carmen plus road transit — only feasible when departure columns in either year show seven to eight hours ashore.",
    ],
    planningYourDay: {
      summary:
        "Pick 2026 or 2027 from this hub, confirm your pier assignment on the ship, then structure the day around morning reef departures — all Cozumel berths are dockside with no tenders.",
      typicalActivities: [
        "Morning Palancar or Columbia reef snorkel when arrival times align with first boat slots",
        "San Miguel plaza lunch and shopping when docked at Punta Langosta downtown",
        "Chankanaab beach park or El Cielo sandbar catamaran on medium-length calls",
        "Tulum and Riviera Maya beach only on rare full-day windows in either year",
      ],
      topAttractions: [
        "Palancar Reef — signature coral formations a short boat ride from pier areas",
        "San Miguel de Cozumel — walkable plazas near the downtown pier",
        "Chankanaab Beach Park — snorkel lagoon, dolphins, and facilities",
        "Tulum ruins — mainland clifftop Mayan site via ferry and road",
      ],
      recommendedExcursions: [
        "Two-reef snorkel with pier-specific pickup on busy schedule days",
        "Beach club pass for predictable return timing without mainland travel",
        "Island highlights tour covering San Gervasio ruins and a west-side beach",
      ],
      timingConsiderations: [
        "Puerta Maya is farthest from downtown — add 15–20 minutes each way for taxis",
        "Compare 2026 versus 2027 monthly tables when choosing between sail dates in peak season",
        "Ferry to Playa del Carmen adds roughly 45 minutes each way for Tulum combos",
      ],
      returnGuidance:
        "Be at the correct Cozumel pier 45–60 minutes before published departure. Docking eliminates tender queues, but returning to the wrong pier after a reef trip is the most common delay — verify pier name with your operator when you book.",
    },
    faqs: [
      {
        question: "How do I choose between the Cozumel 2026 and 2027 schedules?",
        answer:
          "Open the year you are sailing. This hub provides links to both. If you are deciding between sail dates, compare the same month across years — Cozumel peak weeks can list three or four ships on a single day in either season.",
      },
      {
        question: "Which Cozumel pier will my ship use?",
        answer:
          "Cruise lines rotate among Punta Langosta (downtown), International Pier, and Puerta Maya. Year pages list published calls; confirm your assignment on the ship before booking operators who offer pier-specific pickup.",
      },
      {
        question: "Does Cozumel require tender boats?",
        answer:
          "No. All three Cozumel cruise piers are dockside. Passengers walk off directly, which is faster than tender ports — but pier distance from downtown varies, so factor that into excursion meeting points.",
      },
      {
        question: "Can I fit Tulum using Cozumel schedule times?",
        answer:
          "Tulum combos need roughly seven to eight hours including ferry and road time. Check your month's arrival and departure columns in 2026 or 2027 — if departure is mid-afternoon or earlier, choose an island-only reef or beach club instead.",
      },
    ],
    internalLinks: [
      {
        label: "Cozumel 2027 Schedule",
        href: "/ship-schedules/cozumel/2027",
        description: "Busiest-year three-pier monthly tables.",
      },
      {
        label: "Cozumel 2026 Schedule",
        href: "/ship-schedules/cozumel/2026",
        description: "Prior-year pier rotation and call volumes.",
      },
      {
        label: "Cozumel Port Guide",
        href: "/ports/cozumel",
        description: "Reef excursions, pier logistics, and passenger tips.",
      },
      {
        label: "Cozumel Cruise Excursions",
        href: "https://cozumelcruiseexcursion.com",
        description: "Pier-aware reef and beach operators.",
        external: true,
      },
      {
        label: "Mexican Caribbean Cruise Planner",
        href: "/mexican-caribbean-cruise-planner",
        description: "Cozumel-focused multi-port route planning.",
      },
      {
        label: "Compare Roatán vs Cozumel",
        href: "/compare/roatan-vs-cozumel",
        description: "Reef value comparison for Western Caribbean planning.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "Palancar Reef Snorkel",
          description: "World-class coral snorkel with morning boat departures tied to pier arrivals.",
          duration: "3–4 hours",
        },
        {
          name: "El Cielo Sandbar Catamaran",
          description: "Shallow starfish waters on west-side catamaran sails.",
          duration: "4–5 hours",
        },
        {
          name: "Chankanaab Beach Park",
          description: "All-in-one snorkel lagoon and beach facilities near cruise piers.",
          duration: "4–5 hours",
        },
      ],
      terminalInfo:
        "Cozumel assigns ships to Punta Langosta (downtown San Miguel), International Pier (mid-waterfront), or Puerta Maya (south of town). All three are dedicated cruise docks with walk-off access — confirm your pier on embarkation day for operator pickups.",
      tenderVsDock:
        "Cozumel is entirely dock-based — no passenger tenders. Walk-off access is standard, but Puerta Maya passengers should pre-arrange taxis rather than hunt curbside on multi-ship days.",
      typicalTimeInPort: "7–9 hours typical on Western Caribbean loops",
      bestExcursionTiming: [
        "Target first reef-boat departures when arrival is before 9:30 AM on either year's schedule",
        "Book Chankanaab or beach clubs when Tulum math does not fit your departure column",
        "Reserve private drivers for Puerta Maya pickups when three or more ships share the island",
      ],
    },
  },

  "st-maarten-hub": {
    intro:
      "This St. Maarten schedule hub — the SXM cruise port many itineraries list as Sint Maarten or Philipsburg — connects published 2026 and 2027 call data at the Dr. A.C. Wathey Cruise Facility. Start here to see how many ships share Great Bay on your pier day before booking Maho Beach plane-spotting, Orient Bay clubs, or a Dutch-and-French island loop.",
    heroSubtitle:
      "St. Maarten & SXM cruise schedule hub — compare 2026 and 2027 Philipsburg ship calls, Maho Beach timing, and Orient Bay excursion planning from the Dr. A.C. Wathey terminal.",
    whyPassengersUse: [
      "SXM sits on Eastern and Southern Caribbean routes — this hub links to 2026 and 2027 monthly tables so you can compare Philipsburg call volumes before committing to French-side dining or Maho Beach transfers.",
      "Multi-ship Great Bay days strain taxi availability to Orient Bay and Grand Case — schedule data shows overlap before you sail.",
      "Dual-nation excursions need realistic return buffers; docked Dr. A.C. Wathey berths simplify logistics versus tender ports, but island traffic still varies by pier-day volume.",
      "Water taxis to downtown Philipsburg and beach clubs run on passenger demand — knowing your departure column helps operators guarantee on-time return to the cruise terminal.",
    ],
    planningYourDay: {
      summary:
        "Choose 2026 or 2027 from this hub, then build around one signature experience — Maho Beach aviation, Orient Bay swim, or a Dutch-and-French highlights loop — sized to your published departure time.",
      typicalActivities: [
        "Morning Maho Beach visit for aircraft landings when arrivals are early",
        "Orient Bay beach club afternoon on longer port windows",
        "Front Street Philipsburg shopping walkable from the cruise terminal",
        "Grand Case lunch on the French side via taxi on six-hour-plus calls",
      ],
      topAttractions: [
        "Maho Beach — aircraft approach over Maho Bay",
        "Orient Bay — wide Atlantic beach with clubs and water sports",
        "Philipsburg — duty-free Front Street shopping",
        "Grand Case — French-side dining capital",
      ],
      recommendedExcursions: [
        "Maho Beach and island highlights combo on standard-length calls",
        "Orient Bay beach break with fixed return transfer",
        "Dual-nation circle tour covering both Dutch and French districts",
      ],
      timingConsiderations: [
        "Maho Beach crowds peak when multiple ships discharge simultaneously — check monthly tables",
        "French-side dining runs slower; allow extra return time for Grand Case lunches",
        "2027 imports may expand beyond 2026 coverage — compare both years when choosing sail dates",
      ],
      returnGuidance:
        "Be back at the Dr. A.C. Wathey terminal 45–60 minutes before published departure. Docked arrivals avoid tender queues, but island traffic between Orient Bay, Maho, and Philipsburg can delay taxis on busy pier days.",
    },
    faqs: [
      {
        question: "What is SXM in relation to the St. Maarten cruise schedule?",
        answer:
          "SXM is the airport code for Princess Juliana International Airport on Sint Maarten — travelers often search 'cruise ship schedule SXM' when planning Philipsburg port days. This hub lists ship calls at the Dr. A.C. Wathey Cruise Facility in Great Bay, not flight arrivals.",
      },
      {
        question: "Does St. Maarten use tenders or a cruise dock?",
        answer:
          "St. Maarten is a dock port. Ships berth at the Dr. A.C. Wathey Cruise Facility in Great Bay near Philipsburg with walk-off access. No tender boats are required under normal conditions.",
      },
      {
        question: "How does the St. Maarten schedule help with Maho Beach timing?",
        answer:
          "Maho Beach experiences peak crowds when several ships are in port. Open your 2026 or 2027 year page and count vessels on your sailing date — early arrival lets you reach Maho before afternoon aviation crowds build.",
      },
      {
        question: "Can I visit both Dutch and French sides in one St. Maarten port day?",
        answer:
          "Yes — the island is compact with no border controls between Sint Maarten and Saint Martin. Use your schedule's departure time to size a dual-nation tour: allow at least five to six hours ashore for Orient Bay plus Philipsburg or Grand Case combinations.",
      },
      {
        question: "Where do I find the 2026 versus 2027 St. Maarten ship schedule?",
        answer:
          "This hub links to dedicated year pages with monthly Philipsburg tables. Open the year that matches your sailing — both 2026 and 2027 published schedules are available for excursion planning.",
      },
    ],
    internalLinks: [
      {
        label: "St. Maarten 2027 Schedule",
        href: "/ship-schedules/st-maarten/2027",
        description: "Highest-volume SXM year with monthly Philipsburg tables.",
      },
      {
        label: "St. Maarten 2026 Schedule",
        href: "/ship-schedules/st-maarten/2026",
        description: "Published Philipsburg monthly arrival tables.",
      },
      {
        label: "St. Maarten Port Guide",
        href: "/ports/st-maarten",
        description: "Maho Beach, Orient Bay, and dual-nation excursion planning.",
      },
      {
        label: "St. Maarten Shore Excursions",
        href: "https://stmaartenshoreexcursion.com",
        description: "Local operators with pier and beach transfer experience.",
        external: true,
      },
      {
        label: "Eastern Caribbean Cruise Planner",
        href: "/eastern-caribbean-cruise-planner",
        description: "Eastern routes that include St. Maarten hub calls.",
      },
      {
        label: "Compare St. Thomas vs St. Maarten",
        href: "/compare/st-thomas-vs-st-maarten",
        description: "Eastern Caribbean hub port comparison for itinerary planning.",
      },
      {
        label: "Best Shore Excursion at Every Port",
        href: "/best-shore-excursion-every-caribbean-port",
        description: "See how Maho Beach ranks among Caribbean signature picks.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "Maho Beach Experience",
          description: "Watch aircraft land over Maho Bay — St. Maarten's signature thrill.",
          duration: "2–3 hours",
        },
        {
          name: "Orient Bay Beach Day",
          description: "Atlantic beach clubs with loungers, lunch, and water sports.",
          duration: "4–5 hours",
        },
        {
          name: "French Side Island Tour",
          description: "Marigot market, Grand Case dining, and Orient Bay on the Saint Martin side.",
          duration: "4–5 hours",
        },
      ],
      terminalInfo:
        "Cruise ships dock at the Dr. A.C. Wathey Cruise Facility on Great Bay in Philipsburg (Sint Maarten). A water taxi or 15-minute walk reaches Front Street duty-free shopping. The terminal handles large mega-ships with direct gangway access — itineraries may list St. Maarten, Sint Maarten, or SXM, but ships berth on the Dutch side.",
      tenderVsDock:
        "St. Maarten is a dock port — passengers walk ashore at the Dr. A.C. Wathey terminal without tenders. Water taxis to the Philipsburg boardwalk are optional; most excursions use pier-side taxi ranks for Maho Beach, Orient Bay, and French-side transfers.",
      typicalTimeInPort: "7–9 hours typical on Eastern and Southern Caribbean itineraries",
      bestExcursionTiming: [
        "Reach Maho Beach within 90 minutes of gangway opening on multi-ship days",
        "Book Orient Bay transfers early when monthly tables show two or more large vessels",
        "Schedule French-side lunches only when departure is 4:00 PM or later",
      ],
    },
  },

  "grand-cayman-hub": {
    intro:
      "Grand Cayman schedule planning starts at this hub because ships anchor in George Town and passengers tender ashore — weather and pier-day volume affect everything from Stingray City departures to Seven Mile Beach transfers. Compare 2026 monthly call lists here before opening year tables; tender logistics mean your published arrival time is only the first variable in a safe port-day plan.",
    heroSubtitle:
      "Grand Cayman cruise schedule hub — 2026 George Town tender port calls, Stingray City timing, and weather-dependent excursion planning.",
    whyPassengersUse: [
      "Grand Cayman requires tenders — this hub links to 2026 schedules so you can add 20–40 minutes each way to excursion math before booking Stingray City or snorkel boats.",
      "Rough seas can cancel or delay tender operations; knowing how many ships share your anchorage day helps you prioritize early departures.",
      "Stingray City sandbar tours batch morning slots — published arrival columns show whether you can make first boats after tender queues.",
      "Seven Mile Beach and Turtle Centre transfers depend on George Town tender landing times — schedule data frames realistic return buffers.",
    ],
    planningYourDay: {
      summary:
        "Open the 2026 year page from this hub, confirm tender conditions on your ship, then prioritize one water-based experience — Stingray City is the signature pick — with conservative return margins.",
      typicalActivities: [
        "Early Stingray City sandbar visit after first successful tender wave",
        "Seven Mile Beach transfer with optional reef snorkel on medium calls",
        "George Town waterfront shopping close to tender landing on shorter windows",
        "Cayman Turtle Centre family visit when afternoon departures allow",
      ],
      topAttractions: [
        "Stingray City — waist-deep sandbar with southern stingrays",
        "Seven Mile Beach — west-coast white sand stretch",
        "George Town — capital waterfront and duty-free shopping",
        "Cayman Turtle Centre — conservation encounters and snorkel lagoon",
      ],
      recommendedExcursions: [
        "Stingray City boat tour with operator tracking your tender completion time",
        "Seven Mile Beach and snorkel combo on standard-length calls",
        "Private driver highlights loop when you want flexible timing across multiple stops",
      ],
      timingConsiderations: [
        "Add tender queue time morning and afternoon — not just excursion duration",
        "Weather cancellations are more common than at dock ports — have a ship-side backup plan",
        "Multi-ship anchorage days lengthen tender waits at George Town",
      ],
      returnGuidance:
        "Plan to be at the George Town tender pier 60–75 minutes before published departure — longer than dock ports. Allow extra margin when several ships anchor offshore or seas are choppy.",
    },
    faqs: [
      {
        question: "Why is the Grand Cayman schedule especially important for excursions?",
        answer:
          "Ships anchor offshore and passengers tender into George Town. Tender queues, weather holds, and multi-ship anchorages add time that dock ports do not. Your schedule row plus tender buffer determines whether Stingray City and snorkel tours are realistic.",
      },
      {
        question: "Does Grand Cayman have a cruise dock?",
        answer:
          "No dedicated mega-ship dock for the main George Town anchorage — passengers use ship tenders to reach the waterfront. Rough seas can suspend tendering entirely, which is why schedule planning must include weather contingency.",
      },
      {
        question: "How early should I book Stingray City around my Grand Cayman port day?",
        answer:
          "Book before you sail on weeks when monthly tables show multiple ships at anchor. Operators stage morning departures around first tender waves — late arrivals after long queues may miss optimal sandbar windows.",
      },
      {
        question: "Is 2027 Grand Cayman schedule data available from this hub?",
        answer:
          "Published schedules currently center on 2026 monthly tables linked from this hub. Check the 2027 year page as data expands; tender planning rules remain the same regardless of year.",
      },
    ],
    internalLinks: [
      {
        label: "Grand Cayman 2026 Schedule",
        href: "/ship-schedules/grand-cayman/2026",
        description: "George Town anchorage monthly call tables.",
      },
      {
        label: "Grand Cayman Port Guide",
        href: "/ports/grand-cayman",
        description: "Stingray City, tender logistics, and beach excursions.",
      },
      {
        label: "Grand Cayman Shore Excursions",
        href: "https://grandcaymanshoreexcursion.com",
        description: "Tender-aware Stingray City and snorkel operators.",
        external: true,
      },
      {
        label: "Western Caribbean Cruise Planner",
        href: "/western-caribbean-cruise-planner",
        description: "Western loops that include Grand Cayman tender days.",
      },
      {
        label: "Snorkeling Excursion Types",
        href: "/excursion-types/snorkeling",
        description: "Reef and sandbar snorkel planning across Caribbean ports.",
      },
      {
        label: "Best Shore Excursion at Every Port",
        href: "/best-shore-excursion-every-caribbean-port",
        description: "See how Stingray City ranks among Caribbean signatures.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "Stingray City Sandbar",
          description: "Stand in shallow water with wild southern stingrays — Grand Cayman's must-do.",
          duration: "3–4 hours",
        },
        {
          name: "Seven Mile Beach & Snorkel",
          description: "Famous beach time with optional reef snorkel stops.",
          duration: "4–5 hours",
        },
        {
          name: "Cayman Turtle Centre",
          description: "Family-friendly conservation center with turtle encounters.",
          duration: "3–4 hours",
        },
      ],
      terminalInfo:
        "Cruise ships anchor in George Town harbor; passengers reach shore via ship tenders to the waterfront tender pier. There is no walk-off cruise dock at the main anchorage — plan around tender schedules announced on board.",
      tenderVsDock:
        "Grand Cayman is a tender port. Allow 20–40 minutes each way for tender boats plus queue time on busy days. Rough weather can suspend tendering — independent excursions should include flexible cancellation policies.",
      typicalTimeInPort: "6–8 hours typical (tender time reduces effective ashore window)",
      bestExcursionTiming: [
        "Join the first Stingray City departure after your tender clears — do not wait for late-morning slots on multi-ship days",
        "Skip long Seven Mile Beach transfers when arrival is delayed by tender backlog",
        "Keep 60–75 minutes before all-aboard, not the 30-minute dock-port minimum",
      ],
    },
  },

  "costa-maya-hub": {
    intro:
      "This Costa Maya schedule hub links published 2026 and 2027 call data for the purpose-built Mahahual cruise village — compare both years before booking Chacchoben ruin coaches, Bacalar lagoon runs, or Mahahual beach breaks. Unlike Cozumel's three-pier sprawl, Costa Maya concentrates ships at one dock adjacent to the port village, but mainland coach time still dictates which excursions fit your departure column.",
    heroSubtitle:
      "Costa Maya cruise schedule hub — compare 2026 and 2027 Mahahual cruise village calls, ruin tours, and beach excursion timing.",
    whyPassengersUse: [
      "Costa Maya typically hosts one to three ships at the cruise village pier — year pages show whether your sailing shares the dock with additional vessels affecting coach departures.",
      "Chacchoben and Bacalar excursions need mainland transit — comparing 2026 and 2027 departure times shows which tours fit without missed-ship risk.",
      "The on-site port pool is convenient but crowded on multi-ship days; schedules help you decide between port-village time and Mahahual village transfers.",
      "Western Caribbean loops often pair Costa Maya with Cozumel — this hub anchors planning before you cross-reference the busier Cozumel year tables.",
    ],
    planningYourDay: {
      summary:
        "Select 2026 or 2027, confirm your in-port window, then choose between a ruin coach adventure inland or a shorter Mahahual beach-and-snorkel day — the single cruise village dock simplifies pier logistics.",
      typicalActivities: [
        "Chacchoben Mayan ruins coach tour on five-hour-plus port windows",
        "Mahahual village beach break with palapa lunch — 15 minutes from the pier",
        "Port village shopping and saltwater pool on shorter turnaround calls",
        "Bacalar lagoon expedition only when departure allows six to seven hours ashore",
      ],
      topAttractions: [
        "Chacchoben Ruins — jungle pyramids less crowded than Tulum",
        "Mahahual — beach village with snorkeling and casual dining",
        "Bacalar Lagoon — seven-color lagoon and San Felipe fort",
        "Costa Maya Port Village — on-site pool, shops, and restaurants",
      ],
      recommendedExcursions: [
        "Chacchoben ruins with pier-side coach pickup on standard calls",
        "Mahahual snorkel and beach combo when schedules show afternoon departures",
        "Private driver for Bacalar only on the longest published port days",
      ],
      timingConsiderations: [
        "Bacalar needs roughly six to seven hours including coach time — verify departure in either year",
        "Jungle ruin tours require insect repellent and fixed coach return times",
        "Multi-ship days fill Chacchoben coaches by mid-morning",
      ],
      returnGuidance:
        "Be back at the Costa Maya cruise village pier 45–60 minutes before published departure. Coach tours use timed returns — confirm your operator's cutoff against your ship's departure column.",
    },
    faqs: [
      {
        question: "How do Costa Maya 2026 and 2027 schedules compare for excursion planning?",
        answer:
          "Both years link from this hub with monthly Mahahual cruise village tables. Compare the same month across years if choosing between sail dates — Carnival and Royal Caribbean call frequently, so multi-ship overlap can appear in either season.",
      },
      {
        question: "Is Costa Maya a tender port?",
        answer:
          "No. Ships dock at the dedicated Costa Maya cruise port with immediate access to the port village. Passengers walk off directly — coach excursions meet at the pier or village staging area.",
      },
      {
        question: "Can I fit Bacalar Lagoon using Costa Maya schedule times?",
        answer:
          "Bacalar requires roughly six to seven hours round trip from the cruise village. Open your sailing month's departure column — if all-aboard is mid-afternoon or earlier, choose Chacchoben or Mahahual instead.",
      },
      {
        question: "Why check the schedule before booking Chacchoben ruins?",
        answer:
          "Coach departures batch around morning arrivals. When two or three ships share the pier, organized ruin tours sell out faster and port-village congestion slows pickup — monthly tables reveal those overlap days.",
      },
    ],
    internalLinks: [
      {
        label: "Costa Maya 2027 Schedule",
        href: "/ship-schedules/costa-maya/2027",
        description: "Mahahual cruise village 2027 monthly tables.",
      },
      {
        label: "Costa Maya 2026 Schedule",
        href: "/ship-schedules/costa-maya/2026",
        description: "Prior-year call patterns for season comparison.",
      },
      {
        label: "Costa Maya Port Guide",
        href: "/ports/costa-maya",
        description: "Ruins, lagoon trips, and port village logistics.",
      },
      {
        label: "Costa Maya Shore Excursions",
        href: "https://costamayashoreexcursions.com",
        description: "Coach and beach operators with pier pickup.",
        external: true,
      },
      {
        label: "Mexican Caribbean Cruise Planner",
        href: "/mexican-caribbean-cruise-planner",
        description: "Costa Maya and Cozumel multi-port itineraries.",
      },
      {
        label: "Adventure Tour Excursion Types",
        href: "/excursion-types/adventure-tours",
        description: "Ruin, lagoon, and jungle excursion categories.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "Chacchoben Mayan Ruins",
          description: "Jungle pyramids via organized coach — Costa Maya's top culture day.",
          duration: "4–5 hours",
        },
        {
          name: "Mahahual Beach Break",
          description: "Village beach with palapa restaurants a short drive from the pier.",
          duration: "3–4 hours",
        },
        {
          name: "Bacalar Lagoon & Fort",
          description: "Seven-color lagoon expedition for longest port windows only.",
          duration: "6–7 hours",
        },
      ],
      terminalInfo:
        "Ships dock at the Costa Maya cruise village pier in Mahahual with walk-off access to shops, restaurants, and a saltwater pool. Coach excursions to ruins and Bacalar stage from the pier area or port village parking.",
      tenderVsDock:
        "Costa Maya is a dock port — no tenders. The secure port complex is designed for cruise passengers; independent exploration beyond Mahahual should use licensed coaches or taxis.",
      typicalTimeInPort: "7–9 hours typical on Western Caribbean itineraries",
      bestExcursionTiming: [
        "Book Chacchoben coaches for first morning departure after gangway opens",
        "Choose Mahahual beach breaks when departure is before 3:00 PM and Bacalar math fails",
        "Avoid relying on the port pool alone on triple-ship days — village beaches are less crowded",
      ],
    },
  },

  "roatan-hub": {
    intro:
      "Roatán's schedule hub connects 2026 and 2027 call data for Mahogany Bay and Coxen Hole — compare years before booking West Bay snorkel, Gumbalimba Park adventures, or reef boats. Honduras' barrier-reef port splits ships between a modern cruise center and the legacy town pier, so your year-page row helps confirm which terminal your vessel uses and how many other ships share your reef day.",
    heroSubtitle:
      "Roatán cruise schedule hub — compare 2026 and 2027 Mahogany Bay and Coxen Hole calls for reef snorkel and beach excursion timing.",
    whyPassengersUse: [
      "Roatán assigns ships to Mahogany Bay Cruise Center or Port of Roatán (Coxen Hole) — this hub links to both years so you match operators to the correct pier before sailing.",
      "West Bay Beach and reef snorkel offer Cozumel-quality visibility at lower prices — schedule overlap days sell out faster.",
      "Western Caribbean itineraries pair Roatán with Cozumel or Costa Maya — comparing year tables across ports builds a realistic multi-stop plan.",
      "Docked berths at both terminals simplify return timing versus tender ports, but taxi time to West Bay still depends on your arrival column.",
    ],
    planningYourDay: {
      summary:
        "Pick 2026 or 2027, confirm Mahogany Bay versus Coxen Hole on your ship, then prioritize reef or beach time — Roatán rewards passengers who book West Bay transfers early on busy weeks.",
      typicalActivities: [
        "West Bay Beach and reef snorkel when arrival allows a 20-minute taxi each way",
        "Gumbalimba Park zip-line and wildlife on family-friendly calls",
        "Mahogany Bay's free beach when you want a low-transfer pier-side option",
        "West End two-stop snorkel for passengers prioritizing reef time over beaches",
      ],
      topAttractions: [
        "West Bay Beach — white sand and calm clear water",
        "Gumbalimba Park — monkeys, iguanas, and canopy zip-lines",
        "West End — village snorkeling and laid-back dining",
        "Carambola Gardens — botanical trails inland",
      ],
      recommendedExcursions: [
        "West Bay snorkel with pier-aware pickup at Mahogany Bay or Coxen Hole",
        "Gumbalimba adventure combo on standard-length calls",
        "Island highlights tour when you want beaches and viewpoints without a full beach day",
      ],
      timingConsiderations: [
        "Mahogany Bay has on-site amenities; West Bay is worth the taxi on longer windows",
        "Compare 2026 and 2027 tables when choosing between Western Caribbean sail dates",
        "Zip-line parks book out on weeks with multiple Carnival and Norwegian calls",
      ],
      returnGuidance:
        "Return to your assigned pier 45–60 minutes before published departure. Mahogany Bay passengers should not assume Coxen Hole pickup — verify terminal name with operators when booking.",
    },
    faqs: [
      {
        question: "Which Roatán pier does my ship use — Mahogany Bay or Coxen Hole?",
        answer:
          "Cruise lines use both terminals. Open your 2026 or 2027 monthly table from this hub and confirm on the ship before booking excursions — operators stage pickups at specific gates.",
      },
      {
        question: "Is Roatán a tender port?",
        answer:
          "No. Both Mahogany Bay Cruise Center and Port of Roatán are dock berths with walk-off access. Tender logistics do not apply under normal conditions.",
      },
      {
        question: "How does Roatán schedule data help with reef snorkel booking?",
        answer:
          "Reef boats and West Bay taxis capacity-scale with pier-day volume. When monthly tables show two or more ships, book snorkel seats before embarkation and target morning departures after gangway opens.",
      },
      {
        question: "Should I compare Roatán 2026 and 2027 before choosing a sailing?",
        answer:
          "Yes if your travel dates are flexible. Call counts vary by week in both years — the hub links let you spot quieter reef days versus stacked Carnival and Royal Caribbean arrivals.",
      },
    ],
    internalLinks: [
      {
        label: "Roatán 2027 Schedule",
        href: "/ship-schedules/roatan/2027",
        description: "Mahogany Bay and Coxen Hole 2027 monthly tables.",
      },
      {
        label: "Roatán 2026 Schedule",
        href: "/ship-schedules/roatan/2026",
        description: "Prior-year call volumes for season comparison.",
      },
      {
        label: "Roatán Port Guide",
        href: "/ports/roatan",
        description: "Reef snorkel, beaches, and pier logistics.",
      },
      {
        label: "Roatán Excursion Planner",
        href: "https://roatanexcursionplanner.com",
        description: "Specialist reef and adventure operators.",
        external: true,
      },
      {
        label: "Western Caribbean Cruise Planner",
        href: "/western-caribbean-cruise-planner",
        description: "Western loops with Roatán reef days.",
      },
      {
        label: "Compare Roatán vs Cozumel",
        href: "/compare/roatan-vs-cozumel",
        description: "Reef value and pricing comparison.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "West Bay Beach & Snorkel",
          description: "Top beach with optional barrier-reef snorkel — Roatán's signature.",
          duration: "4–5 hours",
        },
        {
          name: "Gumbalimba Park",
          description: "Wildlife encounters and zip-line through jungle canopy.",
          duration: "4–5 hours",
        },
        {
          name: "West End Snorkel Tour",
          description: "Two-stop reef tour from organized boat departures.",
          duration: "3–4 hours",
        },
      ],
      terminalInfo:
        "Ships dock at Mahogany Bay Cruise Center (east, with on-site beach and retail) or Port of Roatán at Coxen Hole (west, closer to West Bay). Both are walk-off cruise berths — confirm your assignment for taxi and tour pickups.",
      tenderVsDock:
        "Roatán is a dock port at both terminals — no tenders required. Mahogany Bay offers pier-side amenities; Coxen Hole is better positioned for West Bay taxis.",
      typicalTimeInPort: "7–9 hours typical on Western Caribbean itineraries",
      bestExcursionTiming: [
        "Taxi to West Bay within the first hour on multi-ship days before lounger shortages",
        "Book Gumbalimba zip-lines before sailing when schedules show overlapping cruise lines",
        "Use Mahogany Bay beach only on shorter calls when West Bay transfer math is tight",
      ],
    },
  },

  "puerto-plata-hub": {
    intro:
      "Puerto Plata's schedule hub covers Amber Cove and Taíno Bay — two Dominican Republic terminals serving Eastern Caribbean routes with 2026 and 2027 monthly data linked from here. Compare years before booking Teleférico cable car rides, 27 Charcos waterfall adventures, or colonial city tours; pier assignment and coach departure times depend on which terminal your ship occupies.",
    heroSubtitle:
      "Puerto Plata cruise schedule hub — compare 2026 and 2027 Amber Cove and Taíno Bay calls for waterfall and cable car excursion timing.",
    whyPassengersUse: [
      "Puerto Plata splits calls between Amber Cove and Taíno Bay — this hub's year pages show which terminal your ship uses so coaches meet you at the correct gate.",
      "Waterfall and cable car excursions need mainland coach time — published departure columns in 2026 or 2027 determine whether 27 Charcos or Damajagua fits.",
      "Eastern Caribbean loops often stack Puerto Plata with St. Maarten or St. Thomas — comparing schedule volumes across ports prevents overbooking adventure days.",
      "Carnival and MSC volumes are strong here — multi-ship terminal days fill organized coaches before pier-side walk-up availability.",
    ],
    planningYourDay: {
      summary:
        "Choose 2026 or 2027, confirm Amber Cove versus Taíno Bay, then anchor on one adventure — Teleférico views, waterfall canyoning, or colonial Puerto Plata city — sized to coach return schedules.",
      typicalActivities: [
        "Teleférico Puerto Plata cable car and Mount Isabel de Torres on medium calls",
        "27 Waterfalls of Damajagua canyoning on longer port windows with fixed coach returns",
        "Colonial Puerto Plata city and fort tour when arrivals are late morning",
        "Amber Cove pool and port complex time on shorter turnaround days",
      ],
      topAttractions: [
        "Teleférico Puerto Plata — cable car to Mount Isabel de Torres",
        "27 Charcos of Damajagua — guided waterfall jumps and pools",
        "Fort San Felipe — historic harbor fortress in Puerto Plata city",
        "Amber Cove — Carnival-built port with pool and retail",
      ],
      recommendedExcursions: [
        "Teleférico and city highlights combo on standard-length calls",
        "Damajagua waterfall adventure when departure allows five to six hours ashore",
        "Private driver colonial tour for flexible timing on dual-terminal weeks",
      ],
      timingConsiderations: [
        "Damajagua requires physical fitness and fixed return coaches — not for short port days",
        "Taíno Bay and Amber Cove are separate facilities — wrong-terminal pickup wastes morning time",
        "Compare 2026 versus 2027 peak weeks when Eastern Caribbean sail dates are flexible",
      ],
      returnGuidance:
        "Be back at your assigned terminal 45–60 minutes before published departure. Coach excursions use strict cutoffs — share your ship's departure time when booking independent operators.",
    },
    faqs: [
      {
        question: "What is the difference between Amber Cove and Taíno Bay schedules?",
        answer:
          "They are separate Puerto Plata cruise terminals a few miles apart. Your 2026 or 2027 monthly row lists which facility your ship uses — coaches and taxis must meet you at the correct terminal gate.",
      },
      {
        question: "Is Puerto Plata a tender port?",
        answer:
          "No. Both Amber Cove and Taíno Bay are dedicated dock facilities with walk-off access. Adventure excursions use organized coaches from the pier area.",
      },
      {
        question: "Can I do 27 Waterfalls on a Puerto Plata port day?",
        answer:
          "Yes on longer calls — Damajagua needs roughly five to six hours including coach time and safety briefing. Check your year's departure column; short turnarounds suit Teleférico or city tours instead.",
      },
      {
        question: "How do Puerto Plata 2026 and 2027 schedules help Eastern Caribbean planning?",
        answer:
          "This hub links both years so you can compare call volumes and terminal assignments before pairing Puerto Plata adventure days with St. Thomas beaches or St. Maarten dual-nation tours on the same itinerary.",
      },
    ],
    internalLinks: [
      {
        label: "Puerto Plata 2027 Schedule",
        href: "/ship-schedules/puerto-plata/2027",
        description: "Amber Cove and Taíno Bay 2027 monthly tables.",
      },
      {
        label: "Puerto Plata 2026 Schedule",
        href: "/ship-schedules/puerto-plata/2026",
        description: "Prior-year terminal call patterns.",
      },
      {
        label: "Puerto Plata Port Guide",
        href: "/ports/puerto-plata",
        description: "Waterfalls, cable car, and terminal logistics.",
      },
      {
        label: "Puerto Plata Cruise Excursions",
        href: "https://puertoplatacruiseexcursion.com",
        description: "Coach and adventure operators with terminal pickup.",
        external: true,
      },
      {
        label: "Dominican Republic Cruise Planner",
        href: "/dominican-republic-cruise-planner",
        description: "Amber Coast multi-port itinerary planning.",
      },
      {
        label: "Eastern Caribbean Cruise Planner",
        href: "/eastern-caribbean-cruise-planner",
        description: "Eastern routes combining Puerto Plata hub calls.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "Teleférico Cable Car",
          description: "Ride to Mount Isabel de Torres with botanical gardens and city views.",
          duration: "3–4 hours",
        },
        {
          name: "27 Waterfalls of Damajagua",
          description: "Guided canyon jumps and natural pools — top adventure pick.",
          duration: "5–6 hours",
        },
        {
          name: "Colonial Puerto Plata City Tour",
          description: "Fort San Felipe, amber museum, and historic center by coach.",
          duration: "3–4 hours",
        },
      ],
      terminalInfo:
        "Cruise ships dock at Amber Cove (Carnival Corporation's Amber Coast facility with pool and retail) or Taíno Bay (newer terminal north of Puerto Plata city). Both offer walk-off gangway access — confirm which terminal your sailing uses.",
      tenderVsDock:
        "Puerto Plata is a dock port at both Amber Cove and Taíno Bay — no passenger tenders. Coach excursions depart from terminal parking areas; independent taxis are available but organized tours handle timed returns best.",
      typicalTimeInPort: "7–9 hours typical on Eastern Caribbean itineraries",
      bestExcursionTiming: [
        "Book Damajagua for earliest coach slot when arrival is before 8:30 AM",
        "Choose Teleférico on shorter calls when waterfall canyoning does not fit departure math",
        "Verify terminal name with operators — Amber Cove and Taíno Bay are not interchangeable",
      ],
    },
  },

  "st-thomas-hub": {
    intro:
      "St. Thomas remains one of the Caribbean's highest-volume schedule ports — this hub links 2026 and 2027 data for Havensight and Crown Bay terminals so you can compare years before booking Magens Bay, St. John ferry days, or catamaran snorkel sails. Dual-terminal assignments mean your year-page row matters: downtown Havensight puts you near Charlotte Amalie shopping, while Crown Bay requires a short taxi to reach the same beaches.",
    heroSubtitle:
      "St. Thomas cruise schedule hub — compare 2026 and 2027 Havensight and Crown Bay calls for Magens Bay and St. John excursion timing.",
    whyPassengersUse: [
      "St. Thomas handles Eastern Caribbean mega-ship traffic at two terminals — this hub separates 2026 and 2027 monthly tables for terminal-specific excursion pickup planning.",
      "Magens Bay sells out on multi-ship days — schedule overlap counts help you reserve loungers or organized transfers before embarkation.",
      "St. John ferry day trips need six to seven hours ashore — comparing departure columns across years shows whether Trunk Bay snorkel is realistic.",
      "Duty-free shopping is walkable from Havensight but not Crown Bay — terminal assignment changes your self-guided morning options.",
    ],
    planningYourDay: {
      summary:
        "Open 2026 or 2027 from this hub, note Havensight versus Crown Bay, then pick one anchor — Magens Bay, St. John ferry, or a snorkel sail — with taxi or ferry time built into your return buffer.",
      typicalActivities: [
        "Magens Bay beach morning when taxis are available right after gangway opens",
        "St. John ferry to Trunk Bay on six-hour-plus port windows",
        "Sapphire Beach snorkel near Havensight on shorter calls",
        "Charlotte Amalie shopping walk from Havensight terminal",
      ],
      topAttractions: [
        "Magens Bay — horseshoe beach with calm turquoise water",
        "St. John & Trunk Bay — national park snorkel via ferry",
        "Charlotte Amalie — colonial capital and duty-free shopping",
        "Mountain Top Skyride — panoramic harbor views",
      ],
      recommendedExcursions: [
        "Magens Bay transfer with reserved loungers on busy pier weeks",
        "St. John highlights tour when departure allows ferry plus beach time",
        "Catamaran snorkel sail with pier pickup at your assigned terminal",
      ],
      timingConsiderations: [
        "Crown Bay passengers add 10–15 minutes taxi to reach Havensight-area operators",
        "St. John requires ferry schedule alignment — not feasible on short turnarounds",
        "2027 published schedules are extensive — compare with 2026 when sail dates span seasons",
      ],
      returnGuidance:
        "Be back at Havensight or Crown Bay security 45–60 minutes before published departure. St. John ferry returns and Magens Bay taxis queue heavily when three or more ships are in port.",
    },
    faqs: [
      {
        question: "Which St. Thomas terminal will my ship use — Havensight or Crown Bay?",
        answer:
          "Both serve cruise traffic year-round. Your 2026 or 2027 monthly schedule row lists the terminal for your sailing — confirm on the ship because operators need the correct pickup gate.",
      },
      {
        question: "Does St. Thomas use tender boats?",
        answer:
          "No. Havensight and Crown Bay are dock terminals with walk-off access. Tender logistics do not apply, though taxi time between terminals and beaches still needs planning.",
      },
      {
        question: "How busy is St. Thomas on my sailing date?",
        answer:
          "Open your year and month from this hub and count ships on the same date. St. Thomas regularly lists multiple large vessels — that drives Magens Bay crowds and snorkel boat sellouts.",
      },
      {
        question: "Can I visit St. John using St. Thomas schedule times?",
        answer:
          "St. John day trips need roughly six to seven hours including round-trip ferry and beach time. Check your departure column in 2026 or 2027 — if all-aboard is early afternoon, choose Magens Bay or a shorter snorkel instead.",
      },
    ],
    internalLinks: [
      {
        label: "St. Thomas 2027 Schedule",
        href: "/ship-schedules/st-thomas/2027",
        description: "Highest-volume 2027 Eastern Caribbean monthly tables.",
      },
      {
        label: "St. Thomas 2026 Schedule",
        href: "/ship-schedules/st-thomas/2026",
        description: "Prior-year dual-terminal call patterns.",
      },
      {
        label: "St. Thomas Port Guide",
        href: "/ports/st-thomas",
        description: "Magens Bay, St. John ferries, and terminal tips.",
      },
      {
        label: "St. Thomas Shore Excursions",
        href: "https://stthomasshoreexcursion.com",
        description: "Terminal-aware beach and snorkel operators.",
        external: true,
      },
      {
        label: "Eastern Caribbean Cruise Planner",
        href: "/eastern-caribbean-cruise-planner",
        description: "Eastern routes with St. Thomas hub calls.",
      },
      {
        label: "Virgin Islands Cruise Planner",
        href: "/virgin-islands-cruise-planner",
        description: "St. Thomas, Tortola, and St. Maarten planning.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "Magens Bay Beach Day",
          description: "World-ranked beach with calm water — book early on multi-ship days.",
          duration: "4–5 hours",
        },
        {
          name: "St. John Island Tour",
          description: "Ferry to Trunk Bay and Virgin Islands National Park snorkel.",
          duration: "6–7 hours",
        },
        {
          name: "Sapphire Beach Snorkel",
          description: "Reef snorkel minutes from Havensight terminal.",
          duration: "3–4 hours",
        },
      ],
      terminalInfo:
        "Cruise ships dock at Havensight Cruise Pier (adjacent to Charlotte Amalie shopping) or Crown Bay Cruise Terminal (west of town). Both are walk-off berths with taxi ranks — terminal assignment affects transfer time to Magens Bay and operator pickups.",
      tenderVsDock:
        "St. Thomas is a dock port at both terminals — no tenders. Havensight offers more walkable downtown access; Crown Bay passengers should budget taxi time to beaches and downtown.",
      typicalTimeInPort: "7–9 hours typical on Eastern Caribbean itineraries",
      bestExcursionTiming: [
        "Dispatch taxis to Magens Bay immediately after gangway opens on triple-ship days",
        "Start St. John ferries only when arrival is before 9:00 AM and departure after 4:00 PM",
        "Use Sapphire Beach snorkel when St. John ferry math fails your departure column",
      ],
    },
  },

  "aruba-hub": {
    intro:
      "Aruba's schedule hub centers on 2026 Oranjestad call data with links to year tables as 2027 imports grow — compare sailing seasons before booking Eagle Beach transfers, De Palm Island packages, or Arikok 4x4 adventures. Southern Caribbean itineraries favor Aruba for reliable sunshine and docked pier access, but evening departures common on many routes open afternoon catamaran sails other ports cannot fit.",
    heroSubtitle:
      "Aruba cruise schedule hub — 2026 Oranjestad ship calls, Eagle Beach excursion timing, and Southern Caribbean port-day planning.",
    whyPassengersUse: [
      "Aruba sits outside the hurricane belt with steady Southern Caribbean traffic — schedule tables show which weeks stack multiple ships before you book Eagle Beach or Arikok tours.",
      "Oranjestad's docked terminals put downtown within a five-minute walk — arrival times frame how soon independent beach taxis can start.",
      "Extended evening departures on many Aruba calls allow afternoon catamaran sails uncommon on short Eastern Caribbean turnarounds.",
      "De Palm Island and Arikok have daily capacity limits — multi-ship schedule overlap helps you reserve before pier-side sellout.",
    ],
    planningYourDay: {
      summary:
        "Start with the 2026 year page from this hub (and 2027 as data expands), then build around Aruba's strengths — consistent beaches, desert interior, and walkable Oranjestad — with docked-pier simplicity.",
      typicalActivities: [
        "Eagle Beach morning before trade-wind crowds on busy ship days",
        "Arikok National Park 4x4 for natural pools and cave formations",
        "De Palm Island all-inclusive snorkel and water park on family calls",
        "Oranjestad shopping and lunch walk from the cruise terminal",
      ],
      topAttractions: [
        "Eagle Beach — wide white sand ranked among the world's best",
        "Arikok National Park — desert terrain, caves, and natural pools",
        "California Lighthouse — panoramic north-coast views",
        "Oranjestad — colorful Dutch colonial architecture",
      ],
      recommendedExcursions: [
        "Eagle Beach and snorkel catamaran when schedules show afternoon departures",
        "Arikok 4x4 adventure booked before sailing on peak weeks",
        "Sunset horseback ride on itineraries with late evening all-aboard",
      ],
      timingConsiderations: [
        "Aruba sun is intense year-round — plan beach time for morning hours",
        "Arikok tours have park capacity limits — reserve before multi-ship days",
        "Compare 2026 tables with 2027 as imports complete for your sailing month",
      ],
      returnGuidance:
        "Be back at Oranjestad cruise terminal 45–60 minutes before published departure. Docked access is straightforward, but north-coast 4x4 returns and Eagle Beach taxis can queue on busy pier days.",
    },
    faqs: [
      {
        question: "Is Aruba a tender or dock port?",
        answer:
          "Aruba is a dock port. Ships berth at the Port of Oranjestad with walk-off access to downtown and taxi ranks — no tender boats under normal conditions.",
      },
      {
        question: "How does the Aruba schedule help with Eagle Beach planning?",
        answer:
          "Eagle Beach loungers and taxis thin out when multiple ships are in port. Your monthly 2026 table shows overlap days so you can book organized transfers or arrive early independent of brochure itinerary times.",
      },
      {
        question: "Does Aruba have 2026 and 2027 schedule pages?",
        answer:
          "Published 2026 monthly Oranjestad tables are linked from this hub. Open the 2027 year page as coverage expands for your sailing month — excursion timing principles are the same for docked arrivals.",
      },
      {
        question: "Why do Southern Caribbean passengers use Aruba schedules for catamaran timing?",
        answer:
          "Many Aruba calls include later departures than short Eastern Caribbean stops. Published departure columns show whether afternoon snorkel sails fit with a safe return buffer.",
      },
    ],
    internalLinks: [
      {
        label: "Aruba 2026 Schedule",
        href: "/ship-schedules/aruba/2026",
        description: "Oranjestad monthly arrival and departure tables.",
      },
      {
        label: "Aruba Port Guide",
        href: "/ports/aruba",
        description: "Eagle Beach, Arikok, and Oranjestad logistics.",
      },
      {
        label: "Aruba Shore Excursions",
        href: "https://arubashoreexcursion.com",
        description: "Beach, catamaran, and 4x4 specialists.",
        external: true,
      },
      {
        label: "Southern Caribbean Cruise Planner",
        href: "/southern-caribbean-cruise-planner",
        description: "Southern loops with reliable Aruba port days.",
      },
      {
        label: "ABC Islands Cruise Planner",
        href: "/abc-islands-cruise-planner",
        description: "Aruba, Curaçao, and Bonaire multi-port routes.",
      },
      {
        label: "Beach Excursion Types",
        href: "/excursion-types/beaches",
        description: "Beach day planning across Caribbean ports.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "Eagle Beach & Snorkel Sail",
          description: "Catamaran with snorkel stop and Aruba's top beach visit.",
          duration: "4–5 hours",
        },
        {
          name: "Arikok National Park 4x4",
          description: "Off-road desert adventure to caves and natural pools.",
          duration: "4–5 hours",
        },
        {
          name: "De Palm Island All-Inclusive",
          description: "Private island with snorkel, water park, and lunch.",
          duration: "5–6 hours",
        },
      ],
      terminalInfo:
        "Cruise ships dock at the Port of Oranjestad — two cruise terminals within walking distance of downtown shops, restaurants, and colorful Dutch architecture. Taxis and organized tour pickups stage at the terminal plaza.",
      tenderVsDock:
        "Aruba is a dock port — passengers walk ashore directly. No tender operations at Oranjestad under normal conditions, which keeps return logistics simpler than Grand Cayman.",
      typicalTimeInPort: "8–10 hours typical on Southern Caribbean itineraries",
      bestExcursionTiming: [
        "Book Eagle Beach transfers for first hour ashore on multi-ship Saturdays",
        "Reserve Arikok 4x4 before sailing when monthly tables show overlapping vessels",
        "Schedule afternoon catamarans only when departure is 6:00 PM or later",
      ],
    },
  },

  "tortola-hub": {
    intro:
      "Tortola's schedule hub links 2026 and 2027 Road Town call data for a tender port where anchorage weather and multi-ship weeks directly affect catamaran availability. British Virgin Islands sailings anchor in Road Town harbor — compare both years before booking Virgin Gorda day trips, Norman Island snorkel sails, or pier-side Road Town exploration.",
    heroSubtitle:
      "Tortola cruise schedule hub — compare 2026 and 2027 Road Town tender calls, BVI catamaran timing, and Virgin Gorda excursion planning.",
    whyPassengersUse: [
      "Tortola requires tenders at Road Town — this hub connects 2026 and 2027 tables so you add queue time before booking BVI catamaran departures.",
      "Virgin Gorda and The Baths need boat time plus tender logistics — schedule departure columns frame whether day sails are realistic.",
      "Eastern Caribbean loops pair Tortola with St. Thomas and St. Maarten — comparing year volumes across those hubs prevents overcommitted sailing days.",
      "Multi-ship Road Town weeks lengthen tender waits and fill catamaran capacity — monthly overlap counts drive early booking decisions.",
    ],
    planningYourDay: {
      summary:
        "Choose 2026 or 2027, confirm tender conditions on board, then prioritize one BVI water experience — Norman Island snorkel, Virgin Gorda, or a relaxed Road Town day — with conservative tender margins.",
      typicalActivities: [
        "BVI catamaran snorkel sail after first successful tender wave",
        "Virgin Gorda and The Baths boat day on longest port windows only",
        "Road Town shopping and craft market near tender landing on shorter calls",
        "Jost Van Dyke beach stop on extended afternoon departures",
      ],
      topAttractions: [
        "The Baths — Virgin Gorda boulder formations and grottoes",
        "Norman Island — snorkel stops on classic BVI sailing routes",
        "Road Town — BVI capital with shops and marina views",
        "Sage Mountain — rainforest viewpoints inland",
      ],
      recommendedExcursions: [
        "Half-day catamaran snorkel with operator tracking tender completion",
        "Virgin Gorda highlights when departure allows five to six hours after tender ashore",
        "Private boat charter for flexible BVI island hopping on late-departure days",
      ],
      timingConsiderations: [
        "Add 20–40 minutes each way for Road Town tenders beyond excursion duration",
        "Virgin Gorda needs favorable seas — weather can cancel sails independently of ship schedule",
        "June through December 2026 and full 2027 imports are linked from this hub",
      ],
      returnGuidance:
        "Be at the Road Town tender pier 60–75 minutes before published departure. BVI boat tours must drop you at the tender dock with time for the last launch — tighter than dock ports like St. Thomas.",
    },
    faqs: [
      {
        question: "Does Tortola use tenders or a cruise dock?",
        answer:
          "Tortola is a tender port. Ships anchor in Road Town harbor and passengers reach shore via ship tenders. Allow extra queue time morning and afternoon compared with docked St. Thomas calls.",
      },
      {
        question: "Can I reach Virgin Gorda on a Tortola port day?",
        answer:
          "Yes on longer calls with calm seas. Open your 2026 or 2027 monthly row, subtract tender time twice, then compare remaining hours to a five-to-six-hour Virgin Gorda boat expedition.",
      },
      {
        question: "How do Tortola 2026 and 2027 schedules compare?",
        answer:
          "Both years link from this hub. Published 2026 coverage runs June through December; 2027 includes full-year tables. Use the year matching your sailing for ship names, arrival times, and multi-vessel overlap.",
      },
      {
        question: "Why do BVI catamaran operators ask for Tortola schedule times?",
        answer:
          "Sailing departures batch around tender completion. Operators need your arrival and departure windows to guarantee boat return before the last tender — especially on multi-ship Road Town days.",
      },
    ],
    internalLinks: [
      {
        label: "Tortola 2027 Schedule",
        href: "/ship-schedules/tortola/2027",
        description: "Full-year Road Town anchorage monthly tables.",
      },
      {
        label: "Tortola 2026 Schedule",
        href: "/ship-schedules/tortola/2026",
        description: "June–December 2026 tender port call data.",
      },
      {
        label: "Tortola 2026 Schedule",
        href: "/ship-schedules/tortola/2026",
        description: "June–December 2026 Road Town tender call data.",
      },
      {
        label: "Virgin Islands Cruise Planner",
        href: "/virgin-islands-cruise-planner",
        description: "St. Thomas, Tortola, and St. Maarten island hopping.",
      },
      {
        label: "Catamaran Cruise Excursion Types",
        href: "/excursion-types/catamaran-cruises",
        description: "BVI sailing and snorkel day planning.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "BVI Catamaran Snorkel Sail",
          description: "Norman Island and reef stops on classic British Virgin Islands routes.",
          duration: "4–5 hours",
        },
        {
          name: "Virgin Gorda & The Baths",
          description: "Boulder grottoes and beach time — needs longest port windows.",
          duration: "5–6 hours",
        },
        {
          name: "Road Town Highlights",
          description: "Capital exploration after tender — ideal for shorter calls.",
          duration: "2–3 hours",
        },
      ],
      terminalInfo:
        "Cruise ships anchor in Road Town harbor; passengers tender to the Road Town waterfront near shops and the ferry dock. There is no mega-ship cruise pier — all passenger access is ship-to-shore tender boats.",
      tenderVsDock:
        "Tortola is a tender port. Plan 20–40 minutes each way for tender boats plus queue time. Choppy conditions can delay or suspend tendering — catamaran operators may adjust departures accordingly.",
      typicalTimeInPort: "6–8 hours typical (tender time reduces effective ashore window)",
      bestExcursionTiming: [
        "Clear the first tender wave before joining late-morning catamaran departures",
        "Skip Virgin Gorda when arrival is delayed by tender backlog or seas are rough",
        "Hold 60–75 minutes before all-aboard — not dock-port minimums",
      ],
    },
  },

  "ocho-rios-hub": {
    intro:
      "Ocho Rios' schedule hub connects 2026 and 2027 north-coast call data for Jamaica's adventure port — compare years before booking Dunn's River Falls climbs, Mystic Mountain bobsled runs, or river tubing. Ships dock at the Ocho Rios cruise pier with walk-off access, but organized falls tours batch morning departures around gangway times and multi-ship weeks fill coaches quickly.",
    heroSubtitle:
      "Ocho Rios cruise schedule hub — compare 2026 and 2027 Jamaica north-coast calls, Dunn's River Falls timing, and adventure excursion planning.",
    whyPassengersUse: [
      "Dunn's River Falls is time-sensitive — this hub links 2026 and 2027 tables showing arrival windows that fit guided climbs versus shorter shopping stops.",
      "Mystic Mountain and rainforest adventures need coach transfers — published departure columns prevent booking bobsled runs that cannot return on time.",
      "Jamaica north-coast traffic varies by pier-day volume — schedule overlap helps you pick early coach slots before sellout.",
      "Western Caribbean loops often pair Ocho Rios with Cozumel or Costa Maya — cross-year comparison builds realistic adventure pacing across ports.",
    ],
    planningYourDay: {
      summary:
        "Select 2026 or 2027, then anchor on one Jamaica adventure — Dunn's River Falls is the signature — with coach return times aligned to your published departure.",
      typicalActivities: [
        "Guided Dunn's River Falls climb on morning arrivals",
        "Mystic Mountain rainforest bobsled and sky explorer on medium calls",
        "Dolphin Cove or beach club afternoon when departures are late",
        "Ocho Rios craft market and pier-side shopping on shorter turnarounds",
      ],
      topAttractions: [
        "Dunn's River Falls — iconic terraced waterfall climb",
        "Mystic Mountain — rainforest bobsled and zip-line adventures",
        "Dolphin Cove — marine encounters near Ocho Rios",
        "White River tubing — jungle float adventures inland",
      ],
      recommendedExcursions: [
        "Dunn's River Falls guided climb with pier-side coach pickup",
        "Mystic Mountain combo when schedule shows five to six hours ashore",
        "Private driver north-coast highlights for flexible multi-stop days",
      ],
      timingConsiderations: [
        "Falls climbs are physical — not ideal when gangway opens late morning on busy weeks",
        "Rainforest tours need buffer for Jamaica road traffic returning to the pier",
        "Compare 2026 and 2027 peak months when choosing Western Caribbean sail dates",
      ],
      returnGuidance:
        "Be back at the Ocho Rios cruise pier 45–60 minutes before published departure. Coach excursions use firm cutoffs — share your ship's departure time when booking falls or mountain tours.",
    },
    faqs: [
      {
        question: "Is Ocho Rios a tender port?",
        answer:
          "No. Ships dock at the Ocho Rios cruise pier with walk-off access. Dunn's River Falls and Mystic Mountain excursions use coaches from the terminal area — no tender queues to factor in.",
      },
      {
        question: "How does the Ocho Rios schedule help with Dunn's River Falls timing?",
        answer:
          "Guided falls climbs batch around morning arrivals. Your 2026 or 2027 monthly row shows whether you can reach the falls before crowds build and whether departure allows the full three-to-four-hour experience.",
      },
      {
        question: "Should I compare Ocho Rios 2026 and 2027 schedules?",
        answer:
          "Yes when sail dates are flexible. Both years link from this hub with published monthly tables. Multi-ship weeks affect coach availability in either season.",
      },
      {
        question: "Can I combine Dunn's River Falls and Mystic Mountain on one Ocho Rios day?",
        answer:
          "Only on longer port windows — together they need roughly six hours plus transfers. Check your year's departure column; shorter calls should prioritize one adventure.",
      },
    ],
    internalLinks: [
      {
        label: "Ocho Rios 2027 Schedule",
        href: "/ship-schedules/ocho-rios/2027",
        description: "Jamaica north-coast 2027 monthly tables.",
      },
      {
        label: "Ocho Rios 2026 Schedule",
        href: "/ship-schedules/ocho-rios/2026",
        description: "Prior-year call patterns for season comparison.",
      },
      {
        label: "Ocho Rios Port Guide",
        href: "/ports/ocho-rios",
        description: "Falls, rainforest, and pier logistics.",
      },
      {
        label: "Ocho Rios Shore Excursions",
        href: "https://ochoriosshoreexcursion.com",
        description: "Falls and adventure operators with pier pickup.",
        external: true,
      },
      {
        label: "Jamaica Cruise Planner",
        href: "/jamaica-cruise-planner",
        description: "Multi-port Jamaica itinerary planning.",
      },
      {
        label: "Western Caribbean Cruise Planner",
        href: "/western-caribbean-cruise-planner",
        description: "Western loops with Ocho Rios adventure days.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "Dunn's River Falls Climb",
          description: "Guided terraced waterfall climb — Jamaica's signature cruise excursion.",
          duration: "3–4 hours",
        },
        {
          name: "Mystic Mountain Adventure",
          description: "Rainforest bobsled, sky explorer, and zip-line combo.",
          duration: "4–5 hours",
        },
        {
          name: "White River Tubing",
          description: "Jungle river float through lush north-coast terrain.",
          duration: "3–4 hours",
        },
      ],
      terminalInfo:
        "Cruise ships dock at the Ocho Rios cruise pier on the north coast with walk-off access to taxis, tour coaches, and waterfront shopping. Dunn's River Falls is a short coach ride east of the terminal.",
      tenderVsDock:
        "Ocho Rios is a dock port — no tenders. Coaches meet passengers at the pier or designated staging areas. Jamaica road traffic still requires return buffers beyond excursion duration.",
      typicalTimeInPort: "7–9 hours typical on Western Caribbean itineraries",
      bestExcursionTiming: [
        "Book Dunn's River Falls for the earliest coach after gangway opens",
        "Add Mystic Mountain only when departure is 4:00 PM or later",
        "Avoid stacking two adventure tours when monthly tables show late morning arrivals",
      ],
    },
  },

  "st-kitts-hub": {
    intro:
      "St. Kitts' schedule hub links 2026 and 2027 Basseterre call data for a smaller Eastern Caribbean port where railway tours, Brimstone Hill fortress visits, and beach breaks depend on modest but growing cruise traffic. Compare both years before booking — multi-ship weeks are less frequent than St. Thomas but still affect scenic railway seating and taxi availability around Port Zante.",
    heroSubtitle:
      "St. Kitts cruise schedule hub — compare 2026 and 2027 Basseterre ship calls, railway tours, and Brimstone Hill excursion timing.",
    whyPassengersUse: [
      "St. Kitts receives Southern and Eastern Caribbean traffic at Port Zante — year pages show whether your sailing shares Basseterre with another vessel affecting railway and fortress tour capacity.",
      "Scenic Railway and Brimstone Hill need half-day blocks — comparing 2026 and 2027 departure columns sizes realistic combinations.",
      "Smaller call volumes can mean easier beach access than mega-ports — schedules confirm whether your week is a quiet single-ship day or a busier overlap.",
      "Neighboring St. Maarten and Tortola often appear on the same itineraries — hub links help cross-port pacing.",
    ],
    planningYourDay: {
      summary:
        "Open 2026 or 2027, then choose one St. Kitts signature — scenic railway, Brimstone Hill UNESCO fortress, or South Friars Beach — matched to your published in-port window at Port Zante.",
      typicalActivities: [
        "St. Kitts Scenic Railway circle tour on morning arrivals",
        "Brimstone Hill Fortress UNESCO site with island viewpoints",
        "South Friars Beach or Cockleshell Bay on afternoon departures",
        "Basseterre downtown walk from Port Zante on shorter calls",
      ],
      topAttractions: [
        "Brimstone Hill Fortress — UNESCO colonial citadel with panoramic views",
        "St. Kitts Scenic Railway — narrow-gauge circle tour around the island",
        "South Friars Beach — calm Caribbean-side swimming",
        "Basseterre — historic capital near the cruise pier",
      ],
      recommendedExcursions: [
        "Scenic Railway with pier-side transfer on standard-length calls",
        "Brimstone Hill and island highlights combo when departure allows five hours ashore",
        "Beach break at South Friars when schedules show late all-aboard",
      ],
      timingConsiderations: [
        "Railway tours have fixed departures — align with your arrival column before booking",
        "Brimstone Hill roads are winding — allow transfer time from Port Zante",
        "Verify 2026 versus 2027 monthly data for your exact sailing month",
      ],
      returnGuidance:
        "Be back at Port Zante 45–60 minutes before published departure. Railway and fortress tours use timed coach returns — confirm cutoffs with operators against your ship's departure time.",
    },
    faqs: [
      {
        question: "Is St. Kitts a tender port?",
        answer:
          "No. Ships dock at Port Zante in Basseterre with walk-off access to downtown and taxi ranks. Tender logistics do not apply at the main cruise berth.",
      },
      {
        question: "How much schedule data exists for St. Kitts 2026 and 2027?",
        answer:
          "Published schedules cover both years with monthly Basseterre tables linked from this hub. Call volumes are lower than St. Thomas or Cozumel — use tables to confirm single-ship versus dual-ship days rather than peak-season congestion assumptions.",
      },
      {
        question: "Can I do the Scenic Railway and Brimstone Hill on one St. Kitts port day?",
        answer:
          "Only on longer calls exceeding roughly six hours ashore. Check your year's departure column — most passengers pick one headline experience plus a short beach or downtown stop.",
      },
      {
        question: "Why check St. Kitts schedules before booking shore excursions?",
        answer:
          "Railway seating and fortress coaches are capacity-limited. Even one additional ship in Basseterre can fill organized tours — monthly rows show overlap before you pay non-refundable deposits.",
      },
    ],
    internalLinks: [
      {
        label: "St. Kitts 2027 Schedule",
        href: "/ship-schedules/st-kitts/2027",
        description: "Basseterre 2027 monthly arrival tables.",
      },
      {
        label: "St. Kitts 2026 Schedule",
        href: "/ship-schedules/st-kitts/2026",
        description: "Prior-year Port Zante call patterns.",
      },
      {
        label: "St. Kitts 2026 Schedule",
        href: "/ship-schedules/st-kitts/2026",
        description: "Prior-year Port Zante call patterns.",
      },
      {
        label: "Eastern Caribbean Cruise Ports",
        href: "/eastern-caribbean-cruise-ports",
        description: "Regional port overview for Eastern Caribbean itineraries.",
      },
      {
        label: "Eastern Caribbean Cruise Planner",
        href: "/eastern-caribbean-cruise-planner",
        description: "Eastern and Southern routes with St. Kitts calls.",
      },
      {
        label: "Southern Caribbean Cruise Planner",
        href: "/southern-caribbean-cruise-planner",
        description: "Southern loops that include St. Kitts.",
      },
      {
        label: "Adventure Tour Excursion Types",
        href: "/excursion-types/adventure-tours",
        description: "Fortress, railway, and rainforest tour categories.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "St. Kitts Scenic Railway",
          description: "Narrow-gauge circle tour with history narration around the island.",
          duration: "3 hours",
        },
        {
          name: "Brimstone Hill Fortress",
          description: "UNESCO citadel with sweeping Caribbean views.",
          duration: "3–4 hours",
        },
        {
          name: "South Friars Beach Break",
          description: "Calm swimming beach on the leeward coast.",
          duration: "3–4 hours",
        },
      ],
      terminalInfo:
        "Cruise ships dock at Port Zante in Basseterre with walk-off access to the historic downtown, taxi ranks, and tour coach staging. The compact capital is minutes from the gangway.",
      tenderVsDock:
        "St. Kitts is a dock port at Port Zante — no tenders. Walk-off access simplifies return timing compared with Tortola or Grand Cayman on the same itinerary.",
      typicalTimeInPort: "7–9 hours typical on Eastern and Southern Caribbean itineraries",
      bestExcursionTiming: [
        "Reserve Scenic Railway seats before sailing — capacity is limited even on single-ship days",
        "Visit Brimstone Hill in the morning when afternoon heat builds on the fortress walls",
        "Add a beach stop only when departure is 3:30 PM or later",
      ],
    },
  },

  "puerto-limon-hub": {
    intro:
      "Puerto Limón's schedule hub focuses on 2026 Limón Cruise Terminal call data for Costa Rica's Caribbean coast — rainforest wildlife, sloth sanctuaries, and Cahuita reef snorkel all run on organized coaches from a docked industrial port where most passengers book tours rather than self-explore. Compare monthly tables before committing to Veragua Rainforest or Tortuguero canal adventures that need long mainland transit.",
    heroSubtitle:
      "Puerto Limón cruise schedule hub — 2026 Costa Rica Caribbean coast calls, rainforest wildlife tours, and Cahuita snorkel timing.",
    whyPassengersUse: [
      "Puerto Limón is a coach-excursion port — schedule arrival times tell operators when to stage sloth sanctuary and rainforest pickups at Limón Cruise Terminal.",
      "Wildlife tours need inland transit through lush terrain — departure columns determine whether Veragua Rainforest or a shorter Cahuita beach snorkel fits.",
      "Southern and Western Caribbean routes call Puerto Limón less frequently than Cozumel — schedule tables confirm whether your itinerary includes this port and on which dates.",
      "Rainforest weather can slow coach returns — knowing your published departure helps operators pad return times appropriately.",
    ],
    planningYourDay: {
      summary:
        "Open the 2026 year page from this hub, then book one organized Costa Rica experience — sloth and wildlife sanctuary, Veragua Rainforest, or Cahuita snorkel — with coach returns tied to your departure column.",
      typicalActivities: [
        "Sloth sanctuary and wildlife rescue visit on standard-length calls",
        "Veragua Rainforest aerial tram and waterfall hike on longer windows",
        "Cahuita National Park snorkel and beach on medium port days",
        "Limón city highlights coach tour when arrivals are late morning",
      ],
      topAttractions: [
        "Sloth Sanctuary — rescued wildlife encounters near Limón",
        "Veragua Rainforest — tram, waterfall, and frog exhibits",
        "Cahuita National Park — reef snorkel and Caribbean beach",
        "Tortuguero Canals — boat wildlife tour on extended calls",
      ],
      recommendedExcursions: [
        "Sloth and wildlife sanctuary combo with pier-side coach pickup",
        "Cahuita snorkel when schedule shows five hours ashore minimum",
        "Veragua Rainforest only on longest departure windows",
      ],
      timingConsiderations: [
        "Most passengers should book organized tours — independent exploration of Limón city is limited",
        "Tortuguero canal trips need essentially full port days — verify departure before booking",
        "2027 imports may expand — recheck year pages as data is added for your sailing month",
      ],
      returnGuidance:
        "Be back at Limón Cruise Terminal 45–60 minutes before published departure. Coach tours through rainforest roads need conservative operator return times — share your ship's departure when booking.",
    },
    faqs: [
      {
        question: "Is Puerto Limón a tender port?",
        answer:
          "No. Ships dock at the Limón Cruise Terminal pier with walk-off access for organized coaches. Most cruise passengers book shore excursions rather than exploring the port city independently.",
      },
      {
        question: "How much Puerto Limón schedule data is available?",
        answer:
          "Published 2026 monthly tables are linked from this hub. Call volumes are lower than mega-ports like Cozumel — check your specific sailing month rather than assuming daily multi-ship congestion.",
      },
      {
        question: "Can I fit Veragua Rainforest using Puerto Limón schedule times?",
        answer:
          "Veragua needs roughly five to six hours including coach transit and aerial tram time. Compare your 2026 departure column — shorter calls suit sloth sanctuary or Cahuita snorkel instead.",
      },
      {
        question: "Why do Puerto Limón operators need schedule arrival times?",
        answer:
          "Coaches batch pickups around gangway opening. Rainforest roads and wildlife sanctuary briefings add fixed time — operators use your arrival window to guarantee return before all-aboard.",
      },
    ],
    internalLinks: [
      {
        label: "Puerto Limón 2026 Schedule",
        href: "/ship-schedules/puerto-limon/2026",
        description: "Limón Cruise Terminal 2026 monthly tables.",
      },
      {
        label: "Puerto Limón Port Guide",
        href: "/ports/puerto-limon",
        description: "Rainforest, wildlife, and Cahuita excursion planning.",
      },
      {
        label: "Puerto Limón Shore Excursions",
        href: "https://puertolimonshoreexcursion.com",
        description: "Wildlife and rainforest coach operators.",
        external: true,
      },
      {
        label: "Western Caribbean Cruise Planner",
        href: "/western-caribbean-cruise-planner",
        description: "Western and Panama Canal routes with Limón calls.",
      },
      {
        label: "Central America Cruise Planner",
        href: "/central-america-cruise-planner",
        description: "Costa Rica and Honduras multi-port planning.",
      },
      {
        label: "Wildlife Excursion Types",
        href: "/excursion-types/wildlife",
        description: "Sloth, sanctuary, and rainforest tour categories.",
      },
    ],
    hubDetails: {
      popularExcursions: [
        {
          name: "Sloth Sanctuary Visit",
          description: "Rescued sloths and wildlife encounters — top Limón cruise pick.",
          duration: "3–4 hours",
        },
        {
          name: "Veragua Rainforest Adventure",
          description: "Aerial tram, waterfall hike, and frog exhibits inland.",
          duration: "5–6 hours",
        },
        {
          name: "Cahuita Snorkel & Beach",
          description: "National park reef snorkel on the southern Caribbean coast.",
          duration: "4–5 hours",
        },
      ],
      terminalInfo:
        "Cruise ships dock at the Limón Cruise Terminal on Costa Rica's Caribbean coast. The pier handles walk-off access for organized coaches — the surrounding city is industrial, so most passengers depart immediately on wildlife or rainforest tours.",
      tenderVsDock:
        "Puerto Limón is a dock port — no tenders. Coach-based excursions are the standard model; independent walking exploration beyond the terminal area is not recommended for most cruise visitors.",
      typicalTimeInPort: "7–9 hours typical on Panama Canal and Southern Caribbean routes",
      bestExcursionTiming: [
        "Book sloth sanctuary coaches for first departure after gangway opens",
        "Choose Cahuita over Veragua when departure is before 3:00 PM",
        "Confirm 2026 monthly data for your sailing — call volumes are thinner than mega-ports",
      ],
    },
  },
};
