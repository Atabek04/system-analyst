import { dynamicLoader } from "fumadocs-core/source";
import { remarkImage } from "fumadocs-core/mdx-plugins/remark-image";
import { obsidian } from "fumadocs-obsidian";
import { remarkVaultAssets } from "./remark-vault-assets";

/** Where the vault's media files are served from; `public/vault` links to the vault. */
const VAULT_URL = "/vault";

/** The wiki sits under a prefix so the rest of the app keeps its own routes. */
export const WIKI_URL = "/wiki";

// The vault lives outside the app: notes are authored in Obsidian and read in place,
// so there is no copy step and no generated MDX.
const vault = obsidian({
  dir: "../../3-permanent",
  url: (path) => `${VAULT_URL}/${path}`,
  // remark-image needs a root-relative src, so it is re-added after the rewrite
  // instead of running in its default slot ahead of it.
  remarkImageOptions: false,
  remarkPlugins: [
    [remarkVaultAssets, { baseUrl: VAULT_URL }],
    [remarkImage, { useImport: false, publicDir: "public" }],
  ],
});

if (process.env.NODE_ENV === "development") {
  void vault.devServer();
}

const loader = dynamicLoader(vault.dynamicSource(), {
  baseUrl: WIKI_URL,
});

export function getSource() {
  return loader.get();
}
