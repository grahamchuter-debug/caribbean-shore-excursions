import Link from "next/link";
import type { PortRelatedLink } from "@/data/types";

export function PortRelatedLinks({ links }: { links: PortRelatedLink[] }) {
  if (links.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="section-title text-2xl sm:text-3xl mb-6">Related Planning Links</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-gradient flex items-center justify-between gap-2 group"
            >
              <span className="font-medium text-gray-900 group-hover:text-caribbean-700">{link.label}</span>
              <svg className="h-4 w-4 shrink-0 text-caribbean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="card-gradient flex items-center justify-between gap-2 group"
            >
              <span className="font-medium text-gray-900 group-hover:text-caribbean-700">{link.label}</span>
              <svg className="h-4 w-4 shrink-0 text-caribbean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
