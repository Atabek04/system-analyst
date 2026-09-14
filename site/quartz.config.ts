import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration — System Analyst Bootcamp wiki
 *
 * Content is synced from the vault by `npm run sync` (see sync.mjs):
 *   2-MOC/Middle System Analyst Roadmap.md → content/index.md (home)
 *   3-permanent/**                         → content/**       (explorer tree)
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "System Analyst Bootcamp",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ru-RU",
    baseUrl: "atabek04.github.io/system-analyst",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      // all three have full Cyrillic coverage on Google Fonts
      typography: {
        header: { name: "Manrope", weights: [600, 700, 800] },
        body: { name: "Source Serif 4", weights: [400, 600], includeItalic: true },
        code: { name: "JetBrains Mono", weights: [400, 500] },
      },
      // Cool paper + ink with one teal accent. Quartz roles: light=page bg ·
      // lightgray=rules/code bg · gray=muted · darkgray=body text · dark=headings ·
      // secondary=links/accent · tertiary=hover
      colors: {
        lightMode: {
          light: "#f6f7f5",
          lightgray: "#d9dde1",
          gray: "#767d85",
          darkgray: "#3b4046",
          dark: "#16181b",
          secondary: "#0e6c6f",
          tertiary: "#0a4f52",
          highlight: "rgba(14, 108, 111, 0.08)",
          textHighlight: "#ffe58a99",
        },
        darkMode: {
          light: "#121417",
          lightgray: "#2a2f36",
          gray: "#7f8792",
          darkgray: "#d5d9de",
          dark: "#f2f4f6",
          secondary: "#62d6c9",
          tertiary: "#9fe8df",
          highlight: "rgba(98, 214, 201, 0.10)",
          textHighlight: "#8a6d1a99",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // content/ is untracked (no git dates); sync.mjs preserves vault mtimes
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
