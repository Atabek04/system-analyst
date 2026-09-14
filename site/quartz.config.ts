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
      // "header" is the UI sans (sidebar, breadcrumbs, toolbar); article headings are
      // set in the serif via custom.scss. All three have full Cyrillic coverage.
      typography: {
        header: { name: "Manrope", weights: [500, 600, 700] },
        body: { name: "Source Serif 4", weights: [400, 600, 700], includeItalic: true },
        code: { name: "JetBrains Mono", weights: [400, 500] },
      },
      // Warm off-white paper + near-black ink, no coloured accent (links are ink,
      // underlined). Quartz roles: light=page bg · lightgray=rules/panels ·
      // gray=muted · darkgray=body text · dark=headings · secondary=links · tertiary=hover
      colors: {
        lightMode: {
          light: "#faf9f5",
          lightgray: "#e6e4dd",
          gray: "#6f6d67",
          darkgray: "#2a2926",
          dark: "#141413",
          secondary: "#141413",
          tertiary: "#5c5a54",
          highlight: "rgba(20, 20, 19, 0.06)",
          textHighlight: "#f3e7b3",
        },
        darkMode: {
          light: "#1c1b19",
          lightgray: "#33312d",
          gray: "#8f8d85",
          darkgray: "#d8d6ce",
          dark: "#f5f4ef",
          secondary: "#f5f4ef",
          tertiary: "#b8b6ae",
          highlight: "rgba(245, 244, 239, 0.08)",
          textHighlight: "#6b5a1e",
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
