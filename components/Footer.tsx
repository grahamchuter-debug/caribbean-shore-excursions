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

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

const footerLinkClass =
  "inline-block text-[13px] leading-snug text-caribbean-100/75 transition-all duration-200 hover:text-white hover:underline underline-offset-[3px] decoration-white/25";

const columnHeadingClass =
  "mb-3.5 text-xs font-medium uppercase tracking-[0.08em] text-caribbean-300";

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
      <h3 className={columnHeadingClass}>{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={footerLinkClass}>
              {link.label}
            </Link>
          </li>
        ))}
        {viewAll && (
          <li className="pt-2">
            <Link
              href={viewAll.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-caribbean-50 transition-all duration-200 hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
            >
              {viewAll.label}
              <span aria-hidden="true" className="text-[10px] opacity-70">
                &rarr;
              </span>
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
    <footer className="mt-auto border-t border-caribbean-800/30 bg-[#032f4a] text-white">
      <div
        className="h-px bg-gradient-to-r from-transparent via-turquoise/50 to-transparent"
        aria-hidden="true"
      />

      <div className="px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="container-wide">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))] lg:gap-x-12">
            <div className="max-w-xs sm:col-span-2 lg:col-span-1 lg:max-w-sm">
              <Link href="/" className="group inline-flex items-center gap-4">
                <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-full bg-hero-gradient text-base font-bold text-white shadow-md shadow-black/20 ring-1 ring-white/10 transition-transform duration-200 group-hover:scale-[1.03]">
                  CS
                </div>
                <div>
                  <div className="font-display text-[1.35rem] font-semibold leading-none tracking-tight text-white">
                    Caribbean Shore
                  </div>
                  <div className="mt-1 text-[13px] text-caribbean-200">Excursion Planner</div>
                  <div className="mt-1.5 text-[12px] italic text-caribbean-300/90">
                    Plan smarter cruise days
                  </div>
                </div>
              </Link>

              <p className="mt-6 text-[13px] leading-relaxed text-caribbean-100/70">
                Independent port guides, ship schedules, and excursion recommendations for
                Caribbean cruise passengers.
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
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="container-wide px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] leading-relaxed text-caribbean-300/75 sm:text-left">
            Independent cruise excursion planning guides. Always check your ship arrival and
            departure times before booking.
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.07] bg-black/20">
        <div className="container-wide flex flex-col items-center gap-4 px-4 py-5 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p className="text-xs text-caribbean-400">
            &copy; {year} {SITE.name}
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            aria-label="Footer legal and contact"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-caribbean-300/80 transition-colors duration-200 hover:text-white hover:underline underline-offset-[3px] decoration-white/20"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
