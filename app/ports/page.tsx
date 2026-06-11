import { buildMetadata } from "@/lib/seo";
import { ports } from "@/data/ports";
import { PageHero } from "@/components/PageHero";
import { PortCard } from "@/components/PortCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, travelGuideSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Caribbean Cruise Ports Guide",
  description:
    "Comprehensive guides to Caribbean cruise ports including shore excursion recommendations, port information, and passenger tips for every major destination.",
  path: "/ports",
  keywords: ["Caribbean cruise ports", "port guides", "shore excursion ports"],
});

export default function PortsPage() {
  const regions = [...new Set(ports.map((p) => p.region))];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Caribbean Ports", path: "/ports" },
          ]),
          travelGuideSchema({
            title: "Caribbean Cruise Ports Guide",
            description: "Comprehensive guides to Caribbean cruise ports and shore excursions.",
            path: "/ports",
          }),
        ]}
      />
      <PageHero
        title="Caribbean Cruise Ports"
        subtitle="Explore in-depth guides to the Caribbean's most popular cruise ports. Compare excursions, read passenger tips, and connect with local specialists."
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Caribbean Ports", path: "/ports" },
            ]}
          />
          {regions.map((region) => (
            <div key={region} className="mb-12">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">{region}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ports
                  .filter((p) => p.region === region)
                  .map((port) => (
                    <PortCard key={port.slug} port={port} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
