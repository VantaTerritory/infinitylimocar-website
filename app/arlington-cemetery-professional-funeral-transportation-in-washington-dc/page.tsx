import ServicePage from "@/components/sections/service/ServicePage";
import { pageMetadata } from "@/lib/seo/pages";

const PATH = "/arlington-cemetery-professional-funeral-transportation-in-washington-dc";

export const metadata = pageMetadata(PATH);

export default function Page() {
  return <ServicePage path={PATH} />;
}
