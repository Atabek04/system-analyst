import { createFromSource } from "fumadocs-core/search/server";
import { getSource } from "@/lib/source";

// The index is exported as a static file so the wiki keeps working without a server.
// The default tokenizer is multilingual, so Russian needs no configuration.
export const dynamic = "force-static";

export const { staticGET: GET } = createFromSource(getSource);
