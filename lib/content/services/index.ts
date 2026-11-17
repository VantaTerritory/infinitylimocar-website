import { AIRPORTS_CONTENT } from "./airports";
import { AREAS_CONTENT } from "./areas";
import { CORPORATE_CONTENT } from "./corporate";
import { GROUP_CONTENT } from "./group";
import { SERVICES_CONTENT } from "./services";
import type { ServiceContent } from "./types";

export type { ServiceContent } from "./types";

const ALL: Record<string, ServiceContent> = {
  ...SERVICES_CONTENT,
  ...CORPORATE_CONTENT,
  ...GROUP_CONTENT,
  ...AIRPORTS_CONTENT,
  ...AREAS_CONTENT,
};

export function getServiceContent(path: string): ServiceContent {
  const content = ALL[path];
  if (!content) throw new Error(`No service content for ${path} (lib/content/services)`);
  return content;
}
