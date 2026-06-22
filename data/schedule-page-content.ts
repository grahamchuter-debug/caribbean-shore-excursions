import type { FAQ } from "./types";
import type { ScheduleYear } from "@/lib/schedule-utils";

export type SchedulePageContentKey =
  | "home"
  | "year-2026"
  | "year-2027"
  | "nassau-2026"
  | "nassau-2027"
  | "cozumel-2026"
  | "cozumel-2027";

export interface PlanningYourDayContent {
  summary: string;
  typicalActivities: string[];
  topAttractions: string[];
  recommendedExcursions: string[];
  timingConsiderations: string[];
  returnGuidance: string;
}

export interface SchedulePageInternalLink {
  label: string;
  href: string;
  description: string;
  external?: boolean;
}

export interface SchedulePageContent {
  intro: string;
  heroSubtitle?: string;
  whyPassengersUseTitle?: string;
  whyPassengersUse: string[];
  planningTitle?: string;
  planningYourDay: PlanningYourDayContent;
  faqs: FAQ[];
  internalLinks: SchedulePageInternalLink[];
}

const schedulePageContent: Record<SchedulePageContentKey, SchedulePageContent> = {
  home: {
    intro:
      "This is the starting point for Caribbean cruise ship and port schedules across our busiest destinations. Whether you are comparing 2026 and 2027 sailings, checking how many ships share a pier on your port day, or lining up shore excursions before you sail, open the year hub or port page that matches your itinerary and work backward from published arrival and departure times.",
    heroSubtitle:
      "Verified Caribbean cruise ship schedules for 2026 and 2027 — compare port call volumes, plan shore excursions around arrival windows, and link through to local specialist operators.",
    whyPassengersUse: [
      "Match shore excursions to your actual in-port window before you pay deposits — reef snorkel sails, Atlantis day passes, and mainland Tulum combos all need enough time ashore.",
      "Spot busy pier days when multiple mega-ships share Nassau, Cozumel, or St. Thomas so you can book early or choose less crowded alternatives.",
      "Build a realistic return buffer: docked ports still need 30–60 minutes before all-aboard, and tender ports like Grand Cayman need extra margin on top of published departure times.",
      "Compare 2026 versus 2027 call patterns when choosing between sail dates or extending a Western versus Eastern Caribbean itinerary.",
    ],
    planningYourDay: {
      summary:
        "Every Caribbean port day follows the same rhythm — confirm your ship's times, pick one anchor experience, then layer shorter stops around safe return margins.",
      typicalActivities: [
        "Morning reef snorkel or catamaran sail while waters are calm and tour boats have capacity",
        "Midday beach club or downtown exploration when pier-adjacent towns like Nassau and Cozumel are walkable",
        "Afternoon highlights tour or shorter cultural stop if your ship has a late departure",
      ],
      topAttractions: [
        "Nassau — Paradise Island, Atlantis Aquaventure, and walkable downtown from Prince George Wharf",
        "Cozumel — Palancar Reef, San Miguel shopping, and Chankanaab beach park",
        "St. Thomas — Magens Bay, St. John ferry day trips, and Havensight shopping",
      ],
      recommendedExcursions: [
        "Signature reef snorkel or stingray encounters on Western Caribbean ports",
        "Half-day culture and beach combos on Eastern Caribbean hub calls",
        "Private drivers when you want flexible timing across multiple stops",
      ],
      timingConsiderations: [
        "Open your port's year page first, then the month that matches your sailing",
        "Full-day mainland tours (Tulum from Cozumel, Exuma pigs from Nassau) need the longest port windows",
        "Multi-ship days sell out popular operators by mid-morning — book must-do tours before you sail",
      ],
      returnGuidance:
        "Plan to be back at your pier or tender pickup point at least 30–60 minutes before published departure. Add more time on tender ports, after long taxi rides, or when several ships are in port and terminal queues build.",
    },
    faqs: [
      {
        question: "How do I find my port's cruise ship schedule on this site?",
        answer:
          "Start here, choose 2026 or 2027, then open your destination's port page. Each port has monthly tables with ship names, arrival and departure times, and estimated time in port. Nassau and Cozumel pages are the busiest and include dedicated passenger planning sections.",
      },
      {
        question: "Why check the schedule before booking shore excursions?",
        answer:
          "Your in-port window determines which tours are realistic. A seven-hour Cozumel call can fit Palancar Reef snorkel; a short Nassau stop may suit downtown and Atlantis better than a flight to Exuma. Matching excursions to verified schedule times reduces missed-departure risk.",
      },
      {
        question: "Do busy port days affect excursion availability?",
        answer:
          "Yes. When three or more ships call at Nassau or Cozumel, popular snorkel boats, Atlantis passes, and private drivers book out faster. The schedule shows how many vessels share your pier day so you can reserve early or pick less crowded alternatives.",
      },
      {
        question: "Are arrival and departure times on this hub guaranteed?",
        answer:
          "No — published schedules are planning guides. Weather, pier assignments, tender conditions, and cruise line changes can shift times. Always confirm the daily program on your ship before leaving for an independent excursion.",
      },
    ],
    internalLinks: [
      {
        label: "2026 Caribbean Schedules",
        href: "/ship-schedules/2026",
        description: "Master hub with verified 2026 ship calls ranked by port volume.",
      },
      {
        label: "2027 Caribbean Schedules",
        href: "/ship-schedules/2027",
        description: "Compare 2027 call volumes — Nassau and Cozumel lead verified imports.",
      },
      {
        label: "Cruise Planner",
        href: "/cruise-planner",
        description: "Step-by-step itinerary planning across Eastern, Western, and Southern Caribbean routes.",
      },
      {
        label: "Busiest Caribbean Cruise Ports 2027",
        href: "/busiest-caribbean-cruise-ports-2027",
        description: "Ranked call volumes and passenger estimates for multi-port planning.",
      },
      {
        label: "Nassau 2027 Schedule",
        href: "/ship-schedules/nassau/2027",
        description: "Prince George Wharf arrivals with dock-side excursion planning.",
      },
      {
        label: "Cozumel 2027 Schedule",
        href: "/ship-schedules/cozumel/2027",
        description: "Three-pier schedule with reef and mainland tour timing guidance.",
      },
    ],
  },

  "year-2026": {
    intro:
      "The 2026 master hub collects verified Caribbean cruise ship schedules in one place so you can compare call volumes before you lock in shore excursions. Every listed port has a dedicated 2026 page with monthly arrival and departure tables — use the rankings below to see which terminals handle the heaviest traffic, then drill into Nassau, Cozumel, or your specific destination.",
    heroSubtitle:
      "Master 2026 hub: rank Caribbean ports by verified ship calls, compare busy pier weeks, and plan shore excursions around published arrival and departure times.",
    whyPassengersUse: [
      "Compare how many ships call at each port across 2026 before choosing between Eastern, Western, or Southern Caribbean itineraries.",
      "Identify peak multi-ship weeks at Nassau and Cozumel when Atlantis, reef snorkel, and beach-club operators sell out earliest.",
      "Anchor excursion bookings to verified arrival and departure windows instead of guessing from brochure itineraries.",
      "Cross-check 2026 against 2027 sail dates when your travel dates span seasons or you are deciding between back-to-back cruises.",
    ],
    planningYourDay: {
      summary:
        "Use the 2026 hub to map your full itinerary, then open each port's year page for month-by-month ship lists and passenger planning detail.",
      typicalActivities: [
        "Scan the top-ports table to see which destinations dominate your route's call volume",
        "Open monthly pages for your sailing month to confirm exact ship names and pier times",
        "Book signature excursions at high-volume ports first, then fill shorter stops",
      ],
      topAttractions: [
        "Nassau — downtown Nassau and Paradise Island from a docked Prince George Wharf berth",
        "Cozumel — reef sites and San Miguel from Punta Langosta, International Pier, or Puerta Maya",
        "St. Thomas — dual-terminal calls at Havensight and Crown Bay with Magens Bay access",
      ],
      recommendedExcursions: [
        "Reef snorkel and catamaran sails on Western Caribbean 2026 itineraries",
        "Beach-and-culture combos on Eastern Caribbean hub ports",
        "Private drivers when your 2026 schedule shows a late departure",
      ],
      timingConsiderations: [
        "Winter and spring 2026 weeks carry the highest multi-ship counts at Nassau and Cozumel",
        "Months still marked 'Schedule data being updated' should not be used for firm excursion bookings yet",
        "Late-departure ships open afternoon tour options that morning-only calls cannot fit",
      ],
      returnGuidance:
        "For every 2026 port day, work backward from published departure: allow 30–60 minutes at the terminal, more on tender ports like Grand Cayman and Tortola, and extra taxi time when your ship docks at Cozumel's Puerta Maya pier farthest from downtown.",
    },
    faqs: [
      {
        question: "Which Caribbean ports have the most 2026 cruise ship calls?",
        answer:
          "Verified import rankings on this hub update as data is added. Nassau and Cozumel typically lead call volumes. Use the top-ports table to compare your itinerary's destinations and spot congested pier days before booking excursions.",
      },
      {
        question: "How do monthly 2026 schedule pages help excursion planning?",
        answer:
          "Monthly pages list every verified ship call for that port and period with arrival, departure, and time-in-port columns. That lets you see whether your vessel shares the pier with two other mega-ships on the same Tuesday — critical for Nassau Atlantis and Cozumel reef departures.",
      },
      {
        question: "Should I compare 2026 schedules with 2027 before booking tours?",
        answer:
          "If you are choosing between sail dates or sailing twice in consecutive years, yes. Call patterns shift seasonally. Open the 2027 hub to see whether your preferred port week is busier or quieter in the alternate year.",
      },
      {
        question: "What if my 2026 port month shows schedule data being updated?",
        answer:
          "That month has not finished import yet. Use neighboring months for planning context, but confirm final times with your cruise line before booking non-refundable independent excursions tied to a specific arrival window.",
      },
    ],
    internalLinks: [
      {
        label: "2027 Caribbean Schedules",
        href: "/ship-schedules/2027",
        description: "Compare next-year call volumes and seasonal patterns.",
      },
      {
        label: "Ship Schedules Home",
        href: "/ship-schedules",
        description: "Return to the main Caribbean schedule hub.",
      },
      {
        label: "Eastern Caribbean Cruise Planner",
        href: "/eastern-caribbean-cruise-planner",
        description: "Itinerary planning for Nassau, St. Thomas, and Eastern hub ports.",
      },
      {
        label: "Western Caribbean Cruise Planner",
        href: "/western-caribbean-cruise-planner",
        description: "Route planning for Cozumel, Grand Cayman, and Western loops.",
      },
      {
        label: "Nassau 2026 Schedule",
        href: "/ship-schedules/nassau/2026",
        description: "Docked Prince George Wharf schedule with excursion timing.",
      },
      {
        label: "Cozumel 2026 Schedule",
        href: "/ship-schedules/cozumel/2026",
        description: "Three-pier 2026 calls with reef tour departure guidance.",
      },
    ],
  },

  "year-2027": {
    intro:
      "The 2027 master hub is built for passengers comparing verified ship calls across the Caribbean's busiest terminals. Nassau and Cozumel lead 2027 import volumes — use this page to rank ports by call count, jump to monthly tables, and plan shore excursions around published arrival and departure times before peak weeks fill popular operators.",
    heroSubtitle:
      "Master 2027 hub: Nassau and Cozumel lead verified call volumes — compare every Caribbean port and plan excursions around published pier times.",
    whyPassengersUse: [
      "See which 2027 ports carry the heaviest traffic so you can prioritize excursion bookings at Nassau, Cozumel, and St. Thomas.",
      "Compare arrival windows across your full 2027 itinerary before paying deposits on reef snorkel, Atlantis, or mainland Tulum tours.",
      "Avoid planning around outdated assumptions — verified 2027 rows replace guesswork with ship names and pier times.",
      "Link through to port-year pages that explain dock versus tender logistics and return-to-ship buffers for each destination.",
    ],
    planningYourDay: {
      summary:
        "Treat this 2027 hub as your itinerary map: rank ports by call volume, open each destination's 2027 page, then align one signature experience per stop with your published in-port window.",
      typicalActivities: [
        "Review busiest-port rankings and calendar seasonality before finalizing a 2027 sailing",
        "Open monthly grids for high-volume ports on your exact sailing dates",
        "Reserve must-do tours at Nassau and Cozumel when schedules show overlapping mega-ships",
      ],
      topAttractions: [
        "Nassau — Atlantis on Paradise Island and walkable Bahamian downtown",
        "Cozumel — Mesoamerican Barrier Reef sites and San Miguel plazas",
        "Aruba — Oranjestad dock with Eagle Beach and Arikok access",
      ],
      recommendedExcursions: [
        "Morning reef snorkel when 2027 schedules show afternoon departures",
        "Half-day downtown plus beach combos on short Nassau calls",
        "Regional cruise-planner routes for multi-port 2027 Eastern or Western loops",
      ],
      timingConsiderations: [
        "2027 peak weeks concentrate multiple ships at Nassau and Cozumel — book early",
        "Use the Caribbean Cruise Calendar 2027 for seasonal sailing patterns alongside this schedule data",
        "Puerta Maya and International Pier assignments in Cozumel affect taxi time to downtown",
      ],
      returnGuidance:
        "On 2027 sailings, aim to be at your pier or tender station 30–60 minutes before departure. Docked Nassau passengers walk straight off at Prince George Wharf; Cozumel passengers should confirm which of the three piers their ship uses before booking pier-side pickup.",
    },
    faqs: [
      {
        question: "Why do Nassau and Cozumel top the 2027 schedule rankings?",
        answer:
          "Both ports anchor high-frequency Florida and Caribbean itineraries with year-round traffic. Their 2027 pages list the most verified ship calls in our import, making them essential stops for excursion planning and busy-day avoidance.",
      },
      {
        question: "How should I use 2027 monthly schedule pages for shore excursions?",
        answer:
          "Open your port's 2027 page, select the month you sail, and read arrival and departure columns for your ship and any others sharing the pier. That window is what reef operators, Atlantis transfers, and private drivers need to guarantee on-time return.",
      },
      {
        question: "Where can I see 2027 seasonal cruise patterns alongside schedules?",
        answer:
          "Pair this hub with the Caribbean Cruise Calendar 2027 and Busiest Caribbean Cruise Ports 2027 pages linked below. Schedules show daily ship calls; those tools show broader seasonality across regions.",
      },
      {
        question: "Can 2027 arrival times change after I book an excursion?",
        answer:
          "Yes. Cruise lines adjust for weather, pier availability, and operational needs. Treat published 2027 times as planning guides and reconfirm on your ship's daily program before disembarking.",
      },
    ],
    internalLinks: [
      {
        label: "2026 Caribbean Schedules",
        href: "/ship-schedules/2026",
        description: "Compare prior-year call volumes on the same ports.",
      },
      {
        label: "Caribbean Cruise Calendar 2027",
        href: "/caribbean-cruise-calendar-2027",
        description: "Peak months and regional seasonality for 2027 sailings.",
      },
      {
        label: "Busiest Caribbean Cruise Ports 2027",
        href: "/busiest-caribbean-cruise-ports-2027",
        description: "Passenger estimates and multi-port planning insights.",
      },
      {
        label: "Southern Caribbean Cruise Planner",
        href: "/southern-caribbean-cruise-planner",
        description: "Longer Southern loops including Aruba and St. Maarten.",
      },
      {
        label: "Nassau 2027 Schedule",
        href: "/ship-schedules/nassau/2027",
        description: "Highest-volume 2027 Bahamas port schedule.",
      },
      {
        label: "Cozumel 2027 Schedule",
        href: "/ship-schedules/cozumel/2027",
        description: "Busiest Western Caribbean 2027 pier schedule.",
      },
    ],
  },

  "nassau-2026": {
    intro:
      "This 2026 Nassau cruise ship schedule lists verified arrivals and departures at Prince George Wharf — a downtown dock, not a tender port. Before you reserve Atlantis Aquaventure, Blue Lagoon dolphins, or a Rose Island snorkel sail, check which other vessels share your pier day; Nassau regularly hosts multiple mega-ships and popular operators book out on the busiest 2026 call dates.",
    whyPassengersUse: [
      "Prince George Wharf is steps from downtown Nassau, so your published 2026 arrival time directly controls how soon you can start walkable sightseeing or taxi to Paradise Island.",
      "Atlantis day passes and Exuma pig flights need long, predictable port windows — the schedule shows whether your 2026 call is long enough before you commit.",
      "Multi-ship 2026 days crowd Straw Market, cable-beach transfers, and snorkel catamarans; seeing all vessels in port helps you book early or pick morning departures.",
      "No tender boats means simpler return logistics than Grand Cayman, but you still need 30–60 minutes before all-aboard when downtown traffic backs up.",
    ],
    planningYourDay: {
      summary:
        "Nassau rewards passengers who match one anchor experience to their 2026 in-port window, then fill gaps with walkable downtown stops from the cruise terminal.",
      typicalActivities: [
        "Walk Queen's Staircase and explore historic downtown right off the pier on shorter calls",
        "Taxi or bridge transfer to Paradise Island for Atlantis beaches and Aquaventure on longer 2026 port days",
        "Catamaran snorkel to Rose Island or Blue Lagoon when morning departures fit your arrival time",
      ],
      topAttractions: [
        "Paradise Island & Atlantis — resort beaches, aquarium, and water park",
        "Queen's Staircase — 66-step historic limestone landmark in downtown Nassau",
        "Blue Lagoon Island — dolphin encounters and beach time by boat",
        "Cable Beach — resort strip west of downtown",
      ],
      recommendedExcursions: [
        "Atlantis Aquaventure day pass on six-hour-plus 2026 port windows",
        "Half-day snorkel and catamaran sail when two or fewer ships are scheduled",
        "Downtown heritage walk combined with a short beach stop on tight turnaround days",
      ],
      timingConsiderations: [
        "Exuma swimming-pig flights need essentially a full 2026 port day — verify departure is late afternoon",
        "Atlantis sells out on peak multi-ship weeks; cross-check the monthly table before booking",
        "Afternoon departures allow a morning Atlantis visit plus downtown shopping",
      ],
      returnGuidance:
        "Walk back to Prince George Wharf at least 45–60 minutes before your ship's 2026 published departure. Downtown Nassau is compact, but taxi queues at Paradise Island and late-afternoon traffic on the bridge can eat into your buffer.",
    },
    faqs: [
      {
        question: "Does the 2026 Nassau schedule show tender or dock arrivals?",
        answer:
          "Nassau is a dock port. Ships berth at Prince George Wharf in downtown Nassau with immediate walk-off access. You do not need tender boats, which simplifies excursion pickup and return timing compared with tender-only destinations.",
      },
      {
        question: "How do I plan Atlantis around the 2026 Nassau ship schedule?",
        answer:
          "Find your sailing date in the monthly 2026 table and note arrival and departure times. Atlantis Aquaventure needs roughly five to six hours plus bridge transfer time. If your ship arrives late morning or shares the pier with several others, book passes well ahead or choose a shorter downtown-and-beach combo.",
      },
      {
        question: "Why does the 2026 Nassau schedule matter for snorkel excursions?",
        answer:
          "Snorkel catamarans and Rose Island boats depart on fixed morning schedules. When three ships are in port on the same 2026 date, boats fill faster and pier-area traffic slows taxi pickups. The schedule shows those overlap days so you can reserve early.",
      },
      {
        question: "Can 2026 Prince George Wharf arrival times change?",
        answer:
          "Yes. Cruise lines adjust for weather, operational delays, and pier sequencing. Use the 2026 schedule for planning, then confirm final times on your ship's daily program before leaving for an independent Nassau excursion.",
      },
    ],
    internalLinks: [
      {
        label: "Nassau Port Guide",
        href: "/ports/nassau",
        description: "Excursions, beaches, and passenger tips for cruise visitors.",
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
        label: "Eastern Caribbean Cruise Planner",
        href: "/eastern-caribbean-cruise-planner",
        description: "Eastern routes that include Nassau hub calls.",
      },
      {
        label: "Nassau 2027 Schedule",
        href: "/ship-schedules/nassau/2027",
        description: "Compare next-year call volumes on the same pier.",
      },
      {
        label: "All 2026 Caribbean Schedules",
        href: "/ship-schedules/2026",
        description: "Return to the 2026 master hub.",
      },
    ],
  },

  "nassau-2027": {
    intro:
      "Nassau leads Caribbean 2027 schedule imports by call volume, and this page shows every verified Prince George Wharf arrival and departure for the year. Ships dock downtown — no tenders — so your listed 2027 times frame how much room you have for Atlantis, snorkel sails, and Bahamian culture ashore. Scan monthly tables for days when multiple vessels share the pier before you book must-do excursions.",
    whyPassengersUse: [
      "2027 Nassau call counts are among the highest in the Caribbean — knowing your exact pier day helps you avoid sold-out Atlantis and catamaran departures.",
      "Docked Prince George Wharf berths mean walk-off access; your 2027 arrival column tells you when downtown exploration realistically starts.",
      "Comparing 2027 ship lists across months reveals quieter weeks when private drivers and beach clubs have more availability.",
      "Published departure times set the hard cutoff for Paradise Island returns and Exuma day-trip flights.",
    ],
    planningYourDay: {
      summary:
        "On a 2027 Nassau port day, pick one headline experience sized to your verified in-port window, then use the walkable downtown around Prince George Wharf for shorter fills.",
      typicalActivities: [
        "Morning Atlantis or Blue Lagoon transfer when 2027 schedules show early arrival",
        "Downtown heritage walk covering Queen's Staircase and Straw Market on medium-length calls",
        "Afternoon beach time at Cable Beach when your 2027 departure is evening",
      ],
      topAttractions: [
        "Paradise Island & Atlantis — water park, marine habitats, and resort beaches",
        "Queen's Staircase & Fort Fincastle — compact historic sites near the terminal",
        "Blue Lagoon Island — marine encounters a short boat ride from Nassau",
        "Rose Island — shallow snorkel stops on catamaran half-days",
      ],
      recommendedExcursions: [
        "Atlantis Aquaventure when your 2027 window exceeds six hours ashore",
        "Snorkel and catamaran combo for passengers prioritizing reef time over resort water parks",
        "Guided downtown culture tour on shorter 2027 turnaround calls",
      ],
      timingConsiderations: [
        "Peak 2027 weeks stack several mega-ships at Prince George Wharf — prioritize reservations",
        "Exuma pig excursions require flight time plus buffer; only book on longest 2027 port days",
        "Bridge traffic to Paradise Island intensifies when multiple ships discharge passengers simultaneously",
      ],
      returnGuidance:
        "Be back inside Prince George Wharf security at least 45–60 minutes before your 2027 published departure. Docked arrivals simplify logistics, but Atlantis and Blue Lagoon returns still depend on taxis or operator transfers hitting bridge traffic windows.",
    },
    faqs: [
      {
        question: "Why is the 2027 Nassau schedule important for excursion planning?",
        answer:
          "Nassau handles more verified 2027 ship calls than nearly any Caribbean port. That volume drives operator sellouts and pier-area congestion. Your monthly 2027 row shows arrival, departure, and competing vessels so you can size tours realistically.",
      },
      {
        question: "Do Nassau cruise ships tender in 2027?",
        answer:
          "No. 2027 arrivals at Prince George Wharf are dockside. Passengers walk directly into downtown Nassau without tender boats, which makes punctual return easier than at tender ports — provided you allow time for taxi transfers from Paradise Island.",
      },
      {
        question: "How full is Nassau on my 2027 sailing date?",
        answer:
          "Open the month that matches your cruise and count how many ships list the same date. Two or more large vessels on one 2027 day typically mean longer Atlantis lines, fuller snorkel boats, and heavier downtown foot traffic.",
      },
      {
        question: "Should I use the 2027 schedule or my cruise line app for final times?",
        answer:
          "Use this 2027 schedule for advance excursion planning and busy-day research. Always confirm final arrival and departure on your ship's daily program before disembarking — cruise lines can adjust overnight.",
      },
    ],
    internalLinks: [
      {
        label: "Nassau Port Guide",
        href: "/ports/nassau",
        description: "Authority guide to excursions, logistics, and beaches.",
      },
      {
        label: "Nassau Shore Excursions",
        href: "https://nassaucruiseexcursions.com",
        description: "Local specialist listings with pier pickup details.",
        external: true,
      },
      {
        label: "Busiest Caribbean Cruise Ports 2027",
        href: "/busiest-caribbean-cruise-ports-2027",
        description: "See how Nassau ranks for 2027 call volume.",
      },
      {
        label: "Bahamas Cruise Planner",
        href: "/bahamas-cruise-planner",
        description: "Plan multi-day Bahamas cruise routes.",
      },
      {
        label: "Nassau 2026 Schedule",
        href: "/ship-schedules/nassau/2026",
        description: "Compare prior-year pier patterns.",
      },
      {
        label: "All 2027 Caribbean Schedules",
        href: "/ship-schedules/2027",
        description: "2027 master hub with every port ranked.",
      },
    ],
  },

  "cozumel-2026": {
    intro:
      "This 2026 Cozumel cruise ship schedule tracks verified arrivals at Punta Langosta, International Pier, and Puerta Maya — all dock berths with no passenger tenders. Cozumel often schedules three or more ships on peak 2026 days, which affects reef-boat departures, downtown congestion, and taxi times from the farthest pier. Check your month's table before booking Palancar snorkel, Chankanaab, or a mainland Tulum combo.",
    whyPassengersUse: [
      "Cozumel assigns ships across three piers — your 2026 schedule row helps confirm which terminal your vessel uses so operators meet you at the right gate.",
      "Reef snorkel boats and El Cielo catamarans run on fixed morning slots tied to port arrival times; the schedule shows whether you can make first departures.",
      "Multi-ship 2026 days strain San Miguel traffic and sell out popular operators long before all-aboard.",
      "Mainland Tulum tours need ferry time to Playa del Carmen plus road transit — only realistic on longer 2026 port windows shown in the departure column.",
    ],
    planningYourDay: {
      summary:
        "A 2026 Cozumel port day works best when you align pier location, reef or beach timing, and taxi routes before you leave the ship — no tenders, but three piers spread across the waterfront.",
      typicalActivities: [
        "Morning Palancar or Columbia reef snorkel when boats match your 2026 arrival",
        "Downtown San Miguel shopping and lunch when docked at Punta Langosta",
        "Chankanaab beach park or El Cielo sandbar catamaran on medium-length calls",
        "Full-day Tulum and beach combo only when departure allows seven to eight hours ashore",
      ],
      topAttractions: [
        "Palancar Reef — signature coral formations a short boat ride from pier areas",
        "San Miguel de Cozumel — plazas, restaurants, and shopping near downtown pier",
        "Chankanaab Beach Park — snorkel lagoon, dolphins, and facilities",
        "San Gervasio Mayan ruins — inland cultural stop by taxi",
      ],
      recommendedExcursions: [
        "Two-tank or single-site reef snorkel with pier pickup on busy 2026 schedule days",
        "Beach club pass when you want a fixed return time without mainland travel",
        "Private driver for San Gervasio plus a west-side beach on longer calls",
      ],
      timingConsiderations: [
        "Puerta Maya is farthest from downtown — add 15–20 minutes each way for taxis",
        "Tulum excursions require passenger ferry to Playa del Carmen; verify total 2026 time ashore",
        "Book reef trips early when monthly tables show three ships on your date",
      ],
      returnGuidance:
        "Plan to be back at your assigned Cozumel pier 45–60 minutes before 2026 published departure. Ships dock, not tender, but wrong-pier pickup mistakes and San Miguel traffic on multi-ship days are the most common causes of late returns.",
    },
    faqs: [
      {
        question: "Which Cozumel pier will my 2026 ship use?",
        answer:
          "Cruise lines rotate among Punta Langosta (downtown), International Pier, and Puerta Maya. Our 2026 schedule lists verified calls; confirm your pier assignment on the ship before booking operators who offer pier-specific pickup.",
      },
      {
        question: "Does Cozumel use tender boats in 2026?",
        answer:
          "No. All three Cozumel cruise piers are dockside. Passengers walk off directly, which is faster than tender ports — but you must still know which pier your ship occupies for excursion meeting points.",
      },
      {
        question: "How does the 2026 Cozumel schedule help with reef snorkel timing?",
        answer:
          "Reef boats batch departures around morning arrivals. If your 2026 row shows a late morning arrival or multiple ships, book the earliest compatible snorkel slot or choose an operator that guarantees pier pickup after your actual gangway time.",
      },
      {
        question: "Can I fit Tulum using the 2026 Cozumel arrival and departure times?",
        answer:
          "Tulum combos need roughly seven to eight hours including ferry and road time. Compare your 2026 time-in-port column — if departure is mid-afternoon or earlier, pick an island-only reef or beach club instead.",
      },
    ],
    internalLinks: [
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
        label: "Western Caribbean Cruise Planner",
        href: "/western-caribbean-cruise-planner",
        description: "Western loops that include Cozumel hub calls.",
      },
      {
        label: "Cozumel 2027 Schedule",
        href: "/ship-schedules/cozumel/2027",
        description: "Compare next-year three-pier call patterns.",
      },
      {
        label: "All 2026 Caribbean Schedules",
        href: "/ship-schedules/2026",
        description: "2026 master hub with port rankings.",
      },
    ],
  },

  "cozumel-2027": {
    intro:
      "Cozumel ranks among the busiest 2027 Caribbean schedule ports, with daily calls spread across Punta Langosta, International Pier, and Puerta Maya. Every berth is a dock — no tenders — but pier assignment changes taxi times and operator pickup points. Use this 2027 table to see how many ships share your reef day before you commit to Palancar snorkel, Chankanaab, or a mainland Tulum expedition.",
    whyPassengersUse: [
      "2027 multi-ship Cozumel days fill reef boats and beach clubs by mid-morning — the schedule shows overlap before you sail.",
      "Three pier locations mean your 2027 arrival port affects how quickly you reach San Miguel or west-side snorkel docks.",
      "Departure times determine whether mainland Tulum is feasible or whether you should stay on-island for reef and beach clubs.",
      "Verified 2027 rows replace brochure guesses with ship names and times independent operators need for on-time return guarantees.",
    ],
    planningYourDay: {
      summary:
        "Structure your 2027 Cozumel day around pier location and morning reef departures, then keep mainland tours in reserve only for the longest port windows.",
      typicalActivities: [
        "Reef snorkel at Palancar or El Cielo sandbar catamaran on standard-length 2027 calls",
        "San Miguel plaza lunch and shopping when docked at Punta Langosta",
        "Chankanaab all-in-one beach and snorkel lagoon for families",
        "Tulum and Riviera Maya beach on rare full-day 2027 windows",
      ],
      topAttractions: [
        "Palancar Reef — world-class visibility and coral formations",
        "El Cielo Sandbar — shallow starfish waters on catamaran trips",
        "San Miguel de Cozumel — walkable from the downtown pier",
        "Tulum ruins — mainland clifftop Mayan site via ferry and road",
      ],
      recommendedExcursions: [
        "Morning two-reef snorkel with operator tracking your 2027 pier assignment",
        "Chankanaab or Mr. Sanchos-style beach club for predictable return timing",
        "Island highlights tour covering ruins and a west-side beach on longer departures",
      ],
      timingConsiderations: [
        "2027 peak weeks can schedule four or more ships — book reef seats before cruise embarkation",
        "Ferry to Playa del Carmen adds roughly 45 minutes each way for Tulum combos",
        "International Pier and Puerta Maya passengers should pre-arrange taxis rather than hunt curbside",
      ],
      returnGuidance:
        "Be at the correct Cozumel pier 45–60 minutes before your 2027 published departure. Docking eliminates tender queues, but returning to the wrong pier after a reef trip is a common delay — verify pier name with your operator when you book.",
    },
    faqs: [
      {
        question: "How busy is Cozumel on my 2027 cruise date?",
        answer:
          "Open the 2027 month that matches your sailing and read every ship on that date. Cozumel frequently lists three or more vessels simultaneously, which affects reef-boat capacity, taxi availability, and downtown restaurant waits.",
      },
      {
        question: "Are Cozumel cruise passengers tendered in 2027?",
        answer:
          "No. Ships dock at Punta Langosta, International Pier, or Puerta Maya. Walk-off access is standard, but pier distance from downtown varies — factor that into your 2027 excursion pickup plan.",
      },
      {
        question: "Why does pier assignment matter for 2027 Cozumel excursions?",
        answer:
          "Operators stage pickups at specific gates. Puerta Maya is south of downtown; Punta Langosta is in the center. Matching your 2027 pier to the operator's meeting point avoids lost time at the start of your port day.",
      },
      {
        question: "How do I use 2027 departure times to avoid missing the ship?",
        answer:
          "Subtract 45–60 minutes for terminal buffer, then subtract excursion duration and taxi or ferry transit. If the math is tight on your 2027 row, choose a shorter reef trip or beach club with a fixed schedule instead of a mainland Tulum run.",
      },
    ],
    internalLinks: [
      {
        label: "Cozumel Port Guide",
        href: "/ports/cozumel",
        description: "Authority reef, beach, and logistics guide.",
      },
      {
        label: "Cozumel Cruise Excursions",
        href: "https://cozumelcruiseexcursion.com",
        description: "Specialist operator with three-pier pickup experience.",
        external: true,
      },
      {
        label: "Compare Cozumel vs Roatán",
        href: "/compare/roatan-vs-cozumel",
        description: "Reef value comparison for Western Caribbean planning.",
      },
      {
        label: "Mexican Caribbean Cruise Planner",
        href: "/mexican-caribbean-cruise-planner",
        description: "Multi-port Mexican Caribbean itineraries.",
      },
      {
        label: "Cozumel 2026 Schedule",
        href: "/ship-schedules/cozumel/2026",
        description: "Prior-year pier and call-volume comparison.",
      },
      {
        label: "All 2027 Caribbean Schedules",
        href: "/ship-schedules/2027",
        description: "2027 master hub ranked by verified calls.",
      },
    ],
  },
};

export function getSchedulePageContentKey(
  page: "home" | { year: ScheduleYear } | { portSlug: string; year: ScheduleYear },
): SchedulePageContentKey | null {
  if (page === "home") return "home";
  if ("year" in page && !("portSlug" in page)) return `year-${page.year}` as SchedulePageContentKey;
  if ("portSlug" in page && "year" in page) {
    const key = `${page.portSlug}-${page.year}` as SchedulePageContentKey;
    return key in schedulePageContent ? key : null;
  }
  return null;
}

export function getSchedulePageContent(
  key: SchedulePageContentKey,
): SchedulePageContent {
  return schedulePageContent[key];
}

export function getSchedulePageContentForPortYear(
  portSlug: string,
  year: ScheduleYear,
): SchedulePageContent | null {
  const key = getSchedulePageContentKey({ portSlug, year });
  return key ? getSchedulePageContent(key) : null;
}
