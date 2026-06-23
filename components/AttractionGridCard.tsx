import Link from "next/link";
import { NavCardCta } from "@/components/NavCardCta";
import type { Attraction } from "@/data/types";
import type { AttractionDestination } from "@/lib/attraction-links";

interface AttractionGridCardProps {
  attraction: Attraction;
  destination: AttractionDestination;
}

export function AttractionGridCard({ attraction, destination }: AttractionGridCardProps) {
  const body = (
    <>
      <h3 className="font-semibold text-gray-900">{attraction.name}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{attraction.description}</p>
      <p className="mt-2 text-xs font-medium text-caribbean-700">{attraction.distance}</p>
      <NavCardCta className="mt-4">{destination.label}</NavCardCta>
    </>
  );

  if (destination.external) {
    return (
      <a
        href={destination.href}
        target="_blank"
        rel="noopener noreferrer"
        className="card group flex h-full flex-col hover:border-caribbean-200"
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={destination.href} className="card group flex h-full flex-col hover:border-caribbean-200">
      {body}
    </Link>
  );
}
