import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getShipBySlug, getFeaturedShipSlugs } from "@/data/ships";
import { getCruiseLineBySlug } from "@/data/cruise-lines";
import { PageHero } from "@/components/PageHero";
import { ShipPageView } from "@/components/ShipPageView";

export function generateStaticParams() {
  return getFeaturedShipSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const ship = getShipBySlug(slug);
    if (!ship || !ship.featuredPage) return {};
    const line = getCruiseLineBySlug(ship.cruiseLineSlug);
    return buildMetadata({
      title: ship.seoTitle,
      description: ship.metaDescription,
      path: `/ships/${slug}`,
      keywords: [
        ship.name,
        `${ship.name} Caribbean`,
        `${ship.name} shore excursions`,
        line?.name ?? "",
        "Caribbean cruise ship",
      ].filter(Boolean),
    });
  });
}

export default async function ShipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ship = getShipBySlug(slug);
  if (!ship || !ship.featuredPage) notFound();

  return (
    <>
      <PageHero title={ship.name} subtitle={ship.tagline} compact />
      <ShipPageView ship={ship} />
    </>
  );
}
