import Link from "next/link";
import { SITE } from "@/lib/site";
import { getAllPortSlugs, getPortBySlug } from "@/data/ports";

const footerLinks = {
  planning: [
    { href: "/cruise-planner", label: "Cruise Planner" },
    { href: "/ship-schedules", label: "Ship Schedules" },
    { href: "/excursion-types", label: "Excursion Types" },
    { href: "/cruise-lines", label: "Cruise Lines" },
    { href: "/ports", label: "All Ports" },
  ],
  ports: getAllPortSlugs().map((slug) => {
    const port = getPortBySlug(slug);
    return port ? { href: `/ports/${slug}`, label: port.name } : null;
  }).filter(Boolean) as { href: string; label: string }[],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-caribbean-900 text-white">
      <div className="section-padding container-wide">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-caribbean-500 text-white font-bold text-sm">
                CS
              </div>
              <div>
                <div className="font-display text-lg font-bold">Caribbean Shore</div>
                <div className="text-xs text-caribbean-300">Excursion Planner</div>
              </div>
            </div>
            <p className="text-sm text-caribbean-200 leading-relaxed">
              {SITE.tagline}. Independent guides to help you plan the perfect Caribbean cruise itinerary.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-caribbean-100 mb-4">Cruise Planning</h3>
            <ul className="space-y-2">
              {footerLinks.planning.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-caribbean-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-caribbean-100 mb-4">All Ports</h3>
            <ul className="space-y-2">
              {footerLinks.ports.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-caribbean-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-caribbean-100 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-caribbean-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-caribbean-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-caribbean-300">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-caribbean-400">
            Independent Caribbean cruise planning resource
          </p>
        </div>
      </div>
    </footer>
  );
}
