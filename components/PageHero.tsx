import { HeroBackground } from "@/components/HeroBackground";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  compact?: boolean;
}

export function PageHero({ title, subtitle, children, compact }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden text-white ${compact ? "py-12 sm:py-16" : "py-16 sm:py-24"}`}
    >
      <HeroBackground />
      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl max-w-3xl drop-shadow-sm">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-caribbean-50 sm:text-xl drop-shadow-sm">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
