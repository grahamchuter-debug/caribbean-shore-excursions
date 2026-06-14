import Link from "next/link";
import { NavCardIcon, type NavIconKey } from "@/components/NavCardIcon";

export interface HomeActionCardProps {
  href: string;
  title: string;
  description: string;
  icon: NavIconKey;
  actionLabel?: string;
}

export function HomeActionCard({
  href,
  title,
  description,
  icon,
  actionLabel = "Open",
}: HomeActionCardProps) {
  return (
    <Link href={href} className="nav-card group flex h-full flex-col">
      <div className="flex items-start gap-4">
        <NavCardIcon icon={icon} />
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-caribbean-800">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
      </div>
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-caribbean-700 transition-colors group-hover:text-caribbean-800">
        {actionLabel}
        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
