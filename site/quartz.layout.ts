import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Chapter folders in 3-permanent/ are named `NN-slug` for ordering; their Russian
// titles come from chapters.json via the index.md that sync.mjs generates per folder.
// NOTE: sortFn/filterFn are serialized to the browser — keep them self-contained.
const explorer = Component.Explorer({
  title: "Оглавление",
  folderDefaultState: "collapsed",
  folderClickBehavior: "collapse",
  useSavedState: true,
  filterFn: (node) => node.slugSegment !== "tags" && node.slugSegment !== "assets",
  sortFn: (a, b) => {
    // folders first (by NN- prefix), then notes by frontmatter `order`, then by title
    if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
    if (a.isFolder && b.isFolder) {
      return a.slugSegment.localeCompare(b.slugSegment, undefined, { numeric: true })
    }
    const ao = a.data?.order ?? Number.MAX_SAFE_INTEGER
    const bo = b.data?.order ?? Number.MAX_SAFE_INTEGER
    if (ao !== bo) return ao - bo
    return a.displayName.localeCompare(b.displayName, "ru", { numeric: true, sensitivity: "base" })
  },
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Atabek04/system-analyst",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: true, showComma: true }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    explorer,
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    explorer,
  ],
  right: [],
}
