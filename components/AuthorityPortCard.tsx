import Link from "next/link";
import type { Port } from "@/data/types";
import { getThemeStyle } from "@/lib/port-themes";

interface AuthorityPortCardProps {
  port: Port;
  description: string;
  bestFor: string;
}

export function AuthorityPortCard({ port, description, bestFor }: AuthorityPortCardProps) {
  const theme = getThemeStyle(port.imageTheme);

  return (
    <article className="card overflow-hidden p-0 flex flex-col h-full">
      <div
        className={`relative h-36 bg-gradient-to-br ${theme.gradient}`}
        role="img"
        aria-label={port.imageAlt}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-xl font-bold text-white drop-shadow-sm">{port.name}</h3>
          <p className="text-sm text-white/90">{port.country}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <span className={`inline-flex self-start rounded-full ${theme.accent} px-2.5 py-0.5 text-xs font-medium text-white`}>
          Best for: {bestFor}
        </span>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            href={`/ports/${port.slug}`}
            className="btn-primary text-sm text-center flex-1"
          >
            Port Guide
          </Link>
          <a
            href={port.specialistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm text-center flex-1"
          >
            Local guide &amp; booking
          </a>
        </div>
      </div>
    </article>
  );
}
