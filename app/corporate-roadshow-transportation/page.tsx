import ServicePage from "@/components/sections/service/ServicePage";
import { pageMetadata } from "@/lib/seo/pages";

const PATH = "/corporate-roadshow-transportation";

export const metadata = pageMetadata(PATH);

export default function Page() {
  return <ServicePage path={PATH} />;
}
