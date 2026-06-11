interface SpecialistLinkProps {
  url: string;
  name: string;
  portName: string;
}

export function SpecialistLink({ url, name, portName }: SpecialistLinkProps) {
  return (
    <div className="rounded-xl border-2 border-caribbean-200 bg-gradient-to-br from-caribbean-50 to-white p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-caribbean-700 text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-gray-900">
            Local {portName} Excursion Specialists
          </h3>
          <p className="mt-2 text-gray-600">
            For detailed excursion listings, local pricing, and booking at {portName}, visit our specialist partner site with curated tours from vetted local operators.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 inline-flex gap-2"
          >
            Visit {name}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
