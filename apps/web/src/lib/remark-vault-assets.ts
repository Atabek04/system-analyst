import path from "node:path";
import { visit } from "unist-util-visit";
import type { Root } from "mdast";
import type { VFile } from "vfile";

/**
 * Notes reference images the way Obsidian resolves them: `![](assets/topic/x.png)`,
 * relative to the note. Rewrite those to the URL the vault's media files are served
 * under, so the same markdown renders in Obsidian and on the site.
 *
 * Runs before fumadocs' remark-image, which needs a root-relative `src`.
 */
export function remarkVaultAssets({ baseUrl }: { baseUrl: string }) {
  return (tree: Root, file: VFile) => {
    const source = file.data.source as { path?: string } | undefined;
    const dir = source?.path ? path.posix.dirname(source.path) : ".";

    visit(tree, "image", (node) => {
      if (/^(?:[a-z]+:|\/|#)/i.test(node.url)) return;
      const vaultPath = path.posix.normalize(path.posix.join(dir, node.url));
      node.url = `${baseUrl}/${vaultPath}`;
    });
  };
}
