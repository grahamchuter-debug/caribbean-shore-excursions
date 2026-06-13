import type { PortImageTheme } from "@/data/types";
import { getThemeStyle } from "@/lib/port-themes";

interface DestinationHeroBandProps {
  imageTheme: PortImageTheme;
  imageAlt: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  heightClass?: string;
  children?: React.ReactNode;
}

/** Image-first destination band with depth and editorial overlays. */
export function DestinationHeroBand({
  imageTheme,
  imageAlt,
  title,
  subtitle,
  eyebrow,
  heightClass = "h-36 sm:h-40",
  children,
}: DestinationHeroBandProps) {
  const theme = getThemeStyle(imageTheme);

  return (
    <div
      className={`relative overflow-hidden ${heightClass} bg-gradient-to-br ${theme.gradient}`}
      role="img"
      aria-label={imageAlt}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.22),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-transparent" />
      {eyebrow && (
        <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-white/95 backdrop-blur-sm">
            {eyebrow}
          </span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <h3 className="font-display text-xl font-semibold leading-tight text-white drop-shadow-md sm:text-2xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1.5 text-sm font-normal leading-relaxed text-white/85">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
}
