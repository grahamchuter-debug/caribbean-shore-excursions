import type { NavIconKey } from "@/components/NavCardIcon";
import { getPortGuideCount } from "@/data/content-inventory";

export interface HomepageNavAction {
  href: string;
  category: string;
  title: string;
  description: string;
  icon: NavIconKey;
  actionLabel: string;
}

/** Secondary hero discovery cards — value-driven copy for first-time visitors. */
export function getHomepageNavActions(): HomepageNavAction[] {
  const portCount = getPortGuideCount();

  return [
    {
      href: "/ports",
      category: "Port guides",
      title: "Explore Caribbean Ports",
      description: `${portCount} detailed port guides with local insights, cruise tips and excursion recommendations.`,
      icon: "ports",
      actionLabel: "Browse Ports",
    },
    {
      href: "/ship-schedules",
      category: "Ship schedules",
      title: "View Ship Schedules",
      description:
        "Check cruise arrivals and departures before planning your port day.",
      icon: "schedules",
      actionLabel: "View Schedules",
    },
    {
      href: "/caribbean-excursion-finder",
      category: "Excursions",
      title: "Find Your Perfect Excursion",
      description:
        "Compare beaches, wildlife, snorkelling, private tours and family favourites.",
      icon: "finder",
      actionLabel: "Explore Excursions",
    },
  ];
}
