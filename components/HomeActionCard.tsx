import Link from "next/link";
import { NavCardIcon, type NavIconKey } from "@/components/NavCardIcon";

export interface HomeActionCardProps {
  href: string;
  category: string;
  title: string;
  description: string;
  icon: NavIconKey;
  actionLabel: string;
  variant?: "default" | "hero";
}

export function HomeActionCard({
  href,
  category,
  title,
  description,
  icon,
  actionLabel,
  variant = "default",
}: HomeActionCardProps) {
  if (variant === "hero") {
    return (
      <Link href={href} className="hero-discovery-card group flex h-full flex-col">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-caribbean-700/80">
          {category}
        </p>
        <div className="mt-3 flex items-start gap-3.5">
          <NavCardIcon icon={icon} variant="hero" className="mt-0.5" />
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-snug text-gray-600 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
        <span className="mt-auto inline-flex items-center pt-4 text-sm font-semibold tracking-wide text-caribbean-800 transition-colors duration-300 group-hover:text-caribbean-900">
          {actionLabel}
          <span aria-hidden="true" className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} className="nav-card group flex h-full flex-col">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-caribbean-700/90">
        {category}
      </p>
      <div className="mt-3 flex items-start gap-4">
        <NavCardIcon icon={icon} className="mt-0.5" />
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-caribbean-800">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
      </div>
      <span className="mt-auto inline-flex items-center pt-5 text-sm font-semibold tracking-wide text-caribbean-800 transition-colors duration-300 group-hover:text-caribbean-900">
        {actionLabel}
        <span aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
