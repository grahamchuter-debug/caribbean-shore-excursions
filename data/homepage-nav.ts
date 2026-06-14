import type { NavIconKey } from "@/components/NavCardIcon";

export interface HomepageNavAction {
  href: string;
  title: string;
  description: string;
  icon: NavIconKey;
  actionLabel: string;
}

/** Secondary hero navigation — always-visible cards with icon, title, and description. */
export const homepageNavActions: HomepageNavAction[] = [
  {
    href: "/ports",
    title: "Explore Caribbean Ports",
    description: "Authority port guides with excursion picks, terminal facts, and specialist booking links.",
    icon: "ports",
    actionLabel: "Browse all ports",
  },
  {
    href: "/ship-schedules",
    title: "View Ship Schedules",
    description: "See which ships are in port before you book — avoid crowded beaches and sold-out tours.",
    icon: "schedules",
    actionLabel: "Check schedules",
  },
  {
    href: "/caribbean-excursion-finder",
    title: "Find My Excursions",
    description: "Match your ports and travel style to shore excursions with confidence scores.",
    icon: "finder",
    actionLabel: "Open excursion finder",
  },
];
