import { PortExcursionAuthorityPageView } from "@/components/PortExcursionAuthorityPageView";
import { portExcursionAuthority } from "@/data/port-excursion-authority";
import { buildPortExcursionAuthorityMetadata } from "@/lib/port-excursion-authority";

export const metadata = buildPortExcursionAuthorityMetadata();

export default function Page() {
  return <PortExcursionAuthorityPageView page={portExcursionAuthority} />;
}
