import Link from "next/link";
import { SITE } from "@/lib/site";

const planYourCruise = [
  { href: "/cruise-planner", label: "Cruise Planner" },
  { href: "/ship-schedules", label: "Ship Schedules" },
  { href: "/caribbean-excursion-finder", label: "Excursion Finder" },
  { href: "/cruise-lines", label: "Cruise Lines" },
  { href: "/ships", label: "Ships" },
];

const popularPorts = [
  { href: "/ports/st-thomas", label: "St Thomas" },
  { href: "/ports/cozumel", label: "Cozumel" },
  { href: "/ports/aruba", label: "Aruba" },
  { href: "/ports/nassau", label: "Nassau" },
  { href: "/ports/grand-cayman", label: "Grand Cayman" },
  { href: "/ports/roatan", label: "Roatan" },
];

const cruiseLines = [
  { href: "/royal-caribbean-shore-excursions", label: "Royal Caribbean" },
  { href: "/carnival-shore-excursions", label: "Carnival" },
  { href: "/norwegian-cruise-line-shore-excursions", label: "NCL" },
  { href: "/msc-shore-excursions", label: "MSC" },
  { href: "/celebrity-shore-excursions", label: "Celebrity" },
  { href: "/princess-shore-excursions", label: "Princess" },
];

const explore = [
  { href: "/eastern-caribbean-cruise-planner", label: "Eastern Caribbean" },
  { href: "/western-caribbean-cruise-planner", label: "Western Caribbean" },
  { href: "/southern-caribbean-cruise-planner", label: "Southern Caribbean" },
  { href: "/abc-islands-cruise-planner", label: "ABC Islands" },
  { href: "/cruise-planner#compare", label: "Comparison Guides" },
];

function FooterColumn({
  title,
  links,
  viewAll,
}: {
  title: string;
  links: { href: string; label: string }[];
  viewAll?: { href: string; label: string };
}) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-caribbean-300">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-caribbean-100/85 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
        {viewAll && (
          <li className="pt-1">
            <Link
              href={viewAll.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-turquoise-light transition-colors hover:text-white"
            >
              {viewAll.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#032f4a] text-white">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-turquoise/60 to-transparent"
        aria-hidden="true"
      />

      <div className="section-padding container-wide">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_repeat(4,minmax(0,1fr))] lg:gap-x-10 lg:gap-y-12">
          <div className="max-w-sm">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-hero-gradient text-sm font-bold text-white shadow-lg shadow-caribbean-900/40 transition-transform group-hover:scale-105">
                CS
              </div>
              <div>
                <div className="font-display text-lg font-bold leading-tight text-white">
                  Caribbean Shore
                </div>
                <div className="text-xs text-caribbean-200">Excursion Planner</div>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-caribbean-100/80">
              Independent Caribbean cruise planning — port guides, ship schedules, and excursion
              recommendations to help you make every port day count.
            </p>

            <p className="mt-8 text-xs text-caribbean-300/90">
              &copy; {year} {SITE.name}. All rights reserved.
            </p>
          </div>

          <FooterColumn title="Plan Your Cruise" links={planYourCruise} />

          <FooterColumn
            title="Popular Ports"
            links={popularPorts}
            viewAll={{ href: "/ports", label: "View All Ports" }}
          />

          <FooterColumn title="Cruise Lines" links={cruiseLines} />

          <FooterColumn title="Explore" links={explore} />
        </div>
      </div>
    </footer>
  );
}
