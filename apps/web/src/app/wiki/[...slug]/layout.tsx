import { getPageTree } from "@/lib/chapters";
import { WIKI_URL } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

export default async function Layout({
  children,
}: LayoutProps<"/wiki/[...slug]">) {
  return (
    <DocsLayout
      tree={await getPageTree()}
      nav={{ title: "Системный анализ", url: WIKI_URL }}
      sidebar={{ defaultOpenLevel: 1 }}
    >
      {children}
    </DocsLayout>
  );
}
