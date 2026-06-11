interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  compact?: boolean;
}

export function PageHero({ title, subtitle, children, compact }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-hero-gradient text-white ${compact ? "py-12 sm:py-16" : "py-16 sm:py-24"}`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-tropical-mango" />
      </div>
      <div className="container-wide relative px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-caribbean-100 sm:text-xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
