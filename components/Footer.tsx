import Link from "next/link";
import { SITE } from "@/lib/site";

const planYourCruise = [
  { href: "/cruise-planner", label: "Plan your itinerary" },
  { href: "/caribbean-excursion-finder", label: "Find shore excursions" },
  { href: "/cruise-day-plan", label: "Build a port day plan" },
  { href: "/ship-schedules", label: "Ship schedules" },
  { href: "/ports", label: "Port guides" },
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
  { href: "/norwegian-cruise-line-shore-excursions", label: "Norwegian" },
  { href: "/msc-shore-excursions", label: "MSC" },
  { href: "/celebrity-shore-excursions", label: "Celebrity" },
  { href: "/princess-shore-excursions", label: "Princess" },
];

const explore = [
  { href: "/eastern-caribbean-cruise-planner", label: "Eastern Caribbean" },
  { href: "/western-caribbean-cruise-planner", label: "Western Caribbean" },
  { href: "/southern-caribbean-cruise-planner", label: "Southern Caribbean" },
  { href: "/abc-islands-cruise-planner", label: "ABC Islands" },
  { href: "/bahamas-cruise-planner", label: "Bahamas" },
  { href: "/compare/aruba-vs-curacao", label: "Compare destinations" },
];

const legalLinks = [
  { href: "/methodology", label: "Methodology" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

const footerLinkClass =
  "inline-block text-[13px] leading-snug text-caribbean-100/70 transition-[color,opacity,transform] duration-300 ease-out hover:text-white/95 hover:translate-x-0.5";

const columnHeadingClass =
  "mb-3 text-sm font-medium text-white/90";

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
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={footerLinkClass}>
              {link.label}
            </Link>
          </li>
        ))}
        {viewAll && (
          <li className="pt-2.5">
            <Link
              href={viewAll.href}
              className="group/pill inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-caribbean-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-turquoise/30 hover:from-white/[0.1] hover:to-white/[0.04] hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_8px_rgba(64,224,208,0.08)]"
            >
              {viewAll.label}
              <span
                aria-hidden="true"
                className="text-[10px] opacity-60 transition-transform duration-300 group-hover/pill:translate-x-0.5 group-hover/pill:opacity-100"
              >
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
    <footer className="relative mt-auto bg-footer-depth text-white">
      {/* Gradient divider — soft glow band + dual accent lines */}
      <div className="relative" aria-hidden="true">
        <div className="absolute inset-x-0 -top-px h-8 bg-gradient-to-b from-turquoise/[0.06] to-transparent blur-sm" />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto h-px max-w-2xl bg-gradient-to-r from-transparent via-turquoise/40 to-transparent" />
      </div>

      <div className="px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8 lg:pb-12 lg:pt-14">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-[minmax(0,1.35fr)_repeat(4,minmax(0,1fr))] lg:gap-x-10">
            <div className="max-w-xs sm:col-span-2 lg:col-span-1 lg:max-w-sm">
              <Link href="/" className="group inline-flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-hero-gradient text-sm font-bold tracking-tight text-white shadow-lg shadow-black/25 ring-1 ring-white/15 transition-[transform,shadow] duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-turquoise/10">
                  CS
                </div>
                <div className="min-w-0">
                  <div className="font-display text-[1.25rem] font-semibold leading-tight tracking-[-0.01em] text-white">
                    Caribbean Shore
                  </div>
                  <div className="mt-0.5 text-xs font-medium tracking-wide text-caribbean-200/80">
                    Excursion Planner
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-px w-3 bg-gradient-to-r from-turquoise/60 to-transparent" />
                    <span className="text-xs font-light text-caribbean-100/90">
                      Caribbean cruise inspiration &amp; planning
                    </span>
                  </div>
                </div>
              </Link>

              <p className="mt-5 text-sm leading-relaxed text-caribbean-100/70">
                Independent port guides, ship schedules, and curated shore excursion ideas for
                discerning Caribbean cruisers.
              </p>
            </div>

            <FooterColumn title="Plan your cruise" links={planYourCruise} />

            <FooterColumn
              title="Discover ports"
              links={popularPorts}
              viewAll={{ href: "/ports", label: "All Caribbean ports" }}
            />

            <FooterColumn title="By cruise line" links={cruiseLines} />

            <FooterColumn title="Regions & routes" links={explore} />
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-wide px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-caribbean-200/75 sm:text-left">
            Your independent guide to Caribbean port days. Always confirm ship times before booking
            shore excursions.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-center text-[11px] leading-relaxed text-caribbean-300/60 sm:text-left">
            We may have a commercial relationship with the local operators we link to. Recommendations
            are based on suitability for cruise passengers — port logistics, return-to-ship timing, and
            experience quality — not commission.{" "}
            <Link href="/methodology" className="underline transition-colors hover:text-white/90">
              See our methodology
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.06] bg-black/25">
        <div className="container-wide flex flex-col items-center gap-2.5 px-4 py-3.5 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
          <p className="text-[11px] tracking-wide text-caribbean-400/90">
            &copy; {year} {SITE.name}
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1"
            aria-label="Footer legal and contact"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-caribbean-300/75 transition-colors duration-300 hover:text-white/90"
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
