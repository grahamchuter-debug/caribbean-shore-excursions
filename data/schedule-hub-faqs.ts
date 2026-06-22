import type { FAQ } from "./types";
import type { ScheduleYear } from "@/lib/schedule-utils";

export const SCHEDULE_HOME_FAQS: FAQ[] = [
  {
    question: "Where can I find Caribbean cruise ship schedules for 2026 and 2027?",
    answer:
      "Start at the Caribbean Cruise Ship Schedules hub, then choose the 2026 or 2027 master year page. Each port has its own schedule hub with monthly arrival and departure tables for planning shore excursions.",
  },
  {
    question: "What is a port schedule on a cruise?",
    answer:
      "A port schedule lists which cruise ships are expected on a given day, with published arrival and departure times. Use it to see how long you are in port before booking beaches, snorkel tours, or private drivers.",
  },
  {
    question: "Are cruise ship arrival times guaranteed?",
    answer:
      "No. Published schedules are planning guides. Weather, tender conditions, pier traffic, and cruise line changes can shift times. Always confirm final times on your ship before leaving for an excursion.",
  },
  {
    question: "How do I plan shore excursions around the ship schedule?",
    answer:
      "Check your port arrival and departure window, subtract 30–60 minutes for return buffer (more on tender ports), then compare independent tours that guarantee on-time return. Each port page links to authority guides and local specialist operators.",
  },
];

export function getScheduleYearHubFaqs(year: ScheduleYear): FAQ[] {
  return [
    {
      question: `How do I use the ${year} Caribbean cruise ship schedule hub?`,
      answer: `Open the ${year} master hub, pick your port, then browse monthly tables for ship names, arrival and departure times, and time in port. Verified rows are imported from monthly source data; months still being updated show a clear placeholder.`,
    },
    {
      question: `Which Caribbean ports have ${year} ship schedule data?`,
      answer:
        "All hub ports display a dedicated schedule page for each year. Ports with completed imports show verified ship calls and monthly breakdowns; others update as data is added.",
    },
    {
      question: "What is the difference between a cruise schedule and a port schedule?",
      answer:
        "Cruise schedules usually refer to your ship's full itinerary. Port schedules on this site focus on which ships call at a specific destination on specific dates, useful when you want to avoid crowded pier days or compare arrival windows.",
    },
    {
      question: "Can I see monthly ship schedules for busy ports like Cozumel or Nassau?",
      answer:
        "Yes. High-volume ports include monthly schedule pages where verified data exists. Open the port's year page and use the month grid to jump directly to that period.",
    },
  ];
}
