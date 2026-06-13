import { BestCaribbeanGuidesHubView } from "@/components/BestCaribbeanGuidesHubView";
import { bestCaribbeanGuidesHub } from "@/data/best-caribbean-guides-hub";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: bestCaribbeanGuidesHub.seoTitle,
  description: bestCaribbeanGuidesHub.metaDescription,
  path: `/${bestCaribbeanGuidesHub.slug}`,
  keywords: [
    "best Caribbean guides",
    "Caribbean cruise ports",
    "best beaches Caribbean cruise",
    "best snorkelling ports",
    "family cruise ports",
  ],
});

export default function BestCaribbeanGuidesPage() {
  return <BestCaribbeanGuidesHubView />;
}
