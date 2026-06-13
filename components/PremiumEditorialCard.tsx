import Link from "next/link";
import type { PortImageTheme } from "@/data/types";
import { getThemeStyle } from "@/lib/port-themes";

export interface EditorialDetail {
  label: string;
  value: string;
}

interface PremiumEditorialCardProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageTheme: PortImageTheme;
  imageLabel?: string;
  details: EditorialDetail[];
  href?: string;
  featured?: boolean;
  className?: string;
}

export function PremiumEditorialCard({
  eyebrow,
  title,
  subtitle,
  imageTheme,
  imageLabel,
  details,
  href,
  featured = false,
  className = "",
}: PremiumEditorialCardProps) {
  const theme = getThemeStyle(imageTheme);
  const heightClass = featured ? "h-44 sm:h-52" : "h-36 sm:h-40";

  const body = (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-caribbean-100/80 bg-white shadow-md transition-all hover:shadow-xl ${className}`}
    >
      <div
        className={`relative ${heightClass} bg-gradient-to-br ${theme.gradient}`}
        role="img"
        aria-label={imageLabel ?? title}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-caribbean-950/75 via-caribbean-900/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="absolute left-4 top-4">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/95 ${theme.accent} shadow-sm`}
          >
            {eyebrow}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <h3 className="font-display text-xl font-bold leading-tight text-white drop-shadow-sm sm:text-2xl">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1.5 text-sm font-medium text-white/90 line-clamp-2">{subtitle}</p>
          )}
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "gap-4 p-5 sm:p-6" : "gap-3 p-4 sm:p-5"}`}>
        <dl className="space-y-3">
          {details.map((detail) => (
            <div key={detail.label} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-caribbean-700">
                {detail.label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-gray-700">{detail.value}</dd>
            </div>
          ))}
        </dl>
        {href && (
          <p className="mt-auto pt-1 text-xs font-semibold text-caribbean-700 group-hover:underline">
            Explore this pick →
          </p>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {body}
      </Link>
    );
  }

  return body;
}
