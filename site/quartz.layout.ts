import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const isHome = (page: { fileData: { slug?: string } }) => page.fileData.slug === "index"
const notHome = (page: { fileData: { slug?: string } }) => !isHome(page)

// Chapter folders in 3-permanent/ get their Russian title and their `order` (= position
// in chapters.json) from the index.md that sync.mjs generates per folder.
// NOTE: sortFn/filterFn are serialized to the browser — keep them self-contained.
const explorer = Component.Explorer({
  title: "Оглавление",
  folderDefaultState: "collapsed",
  folderClickBehavior: "collapse",
  useSavedState: true,
  filterFn: (node) => node.slugSegment !== "tags" && node.slugSegment !== "assets",
  sortFn: (a, b) => {
    // folders first, both folders and notes by frontmatter `order`, then by title
    if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
    const ao = a.data?.order ?? Number.MAX_SAFE_INTEGER
    const bo = b.data?.order ?? Number.MAX_SAFE_INTEGER
    if (ao !== bo) return ao - bo
    return a.displayName.localeCompare(b.displayName, "ru", { numeric: true, sensitivity: "base" })
  },
})

const toolbar = Component.Flex({
  components: [
    { Component: Component.Search(), grow: true },
    { Component: Component.Darkmode() },
    { Component: Component.ReaderMode() },
  ],
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.CourseFooter({
    author: "Atabek",
    links: {
      GitHub: "https://github.com/Atabek04/system-analyst",
    },
  }),
}

// Home page (index): no sidebars — just the MOC in the centre with a slim toolbar above it.
// Note pages: left sidebar (title, toolbar, explorer); no right sidebar.
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Flex({
        components: [
          { Component: Component.PageTitle(), grow: true },
          { Component: Component.Search() },
          { Component: Component.Darkmode() },
        ],
      }),
      condition: isHome,
    }),
    Component.ConditionalRender({ component: Component.Breadcrumbs(), condition: notHome }),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.ContentMeta({ showReadingTime: true, showComma: true }),
      condition: notHome,
    }),
  ],
  left: [
    Component.ConditionalRender({ component: Component.PageTitle(), condition: notHome }),
    Component.MobileOnly(Component.Spacer()),
    Component.ConditionalRender({ component: toolbar, condition: notHome }),
    Component.ConditionalRender({ component: explorer, condition: notHome }),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [Component.PageTitle(), Component.MobileOnly(Component.Spacer()), toolbar, explorer],
  right: [],
}
