import ServicePage from "@/components/sections/service/ServicePage";
import { pageMetadata } from "@/lib/seo/pages";

const PATH = "/washingtondc-city-tour-private";

export const metadata = pageMetadata(PATH);

export default function Page() {
  return <ServicePage path={PATH} />;
}
