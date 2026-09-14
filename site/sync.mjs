// Sync vault → site/content before building.
//   2-MOC/Middle System Analyst Roadmap.md → content/index.md            (home page)
//   3-permanent/**                         → content/**                  (explorer tree)
//   3-permanent/<chapter>/assets/<topic>   → content/assets/<topic>      (images)
//   chapters.json                          → content/<chapter>/index.md  (Russian chapter titles)
// Run: npm run sync   (also runs automatically before `npm run build` / `npm run dev`)
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const site = path.dirname(fileURLToPath(import.meta.url))
const vault = path.resolve(site, "..")
const content = path.join(site, "content")

const NOTES_DIR = path.join(vault, "3-permanent")
const MOC_FILE = path.join(vault, "2-MOC", "Middle System Analyst Roadmap.md")
const CHAPTERS = JSON.parse(fs.readFileSync(path.join(site, "chapters.json"), "utf8"))

const stripBom = (s) => s.replace(/^﻿/, "")

fs.rmSync(content, { recursive: true, force: true })
fs.mkdirSync(content, { recursive: true })

// 1. atomic notes (chapter folders)
fs.cpSync(NOTES_DIR, content, {
  recursive: true,
  preserveTimestamps: true,
  filter: (src) => !path.basename(src).startsWith("."),
})

// 2. hoist <chapter>/assets/<topic>/ → content/assets/<topic>/
//    Notes reference images as `assets/<topic>/x.png` (relative, works in Obsidian);
//    Quartz's "shortest" link resolution turns that into a root path, so serve it from the root.
const rootAssets = path.join(content, "assets")
fs.mkdirSync(rootAssets, { recursive: true })
for (const dir of fs.readdirSync(content, { withFileTypes: true })) {
  if (!dir.isDirectory() || dir.name === "assets") continue
  const chapterAssets = path.join(content, dir.name, "assets")
  if (!fs.existsSync(chapterAssets)) continue
  for (const topic of fs.readdirSync(chapterAssets)) {
    const dst = path.join(rootAssets, topic)
    if (fs.existsSync(dst)) throw new Error(`duplicate asset folder "${topic}" in ${dir.name}`)
    fs.renameSync(path.join(chapterAssets, topic), dst)
  }
  fs.rmSync(chapterAssets, { recursive: true })
}

// 3. chapter folder → index.md with its Russian title (explorer, breadcrumbs, folder page)
//    `order` = position in chapters.json; the explorer sorts chapters by it.
const chapterOrder = Object.keys(CHAPTERS)
for (const dir of fs.readdirSync(content, { withFileTypes: true })) {
  if (!dir.isDirectory() || dir.name === "assets") continue
  const idx = path.join(content, dir.name, "index.md")
  if (fs.existsSync(idx)) continue
  const title = CHAPTERS[dir.name]
  if (!title) console.warn(`chapters.json has no entry for "${dir.name}" — add one (title + position = order)`)
  const order = chapterOrder.indexOf(dir.name)
  fs.writeFileSync(
    idx,
    `---\ntitle: "${title ?? dir.name}"\norder: ${order === -1 ? 999 : order + 1}\n---\n`,
    "utf8",
  )
}

// 4. Roadmap → index.md (home MOC)
//    Keeps only the skeleton: `##` chapters (renamed via chapters.json, same order),
//    `###` sections, and [[links]] to notes that actually exist. Plain bullets, blockquotes
//    and links to slides are dropped — the home page is a table of contents, not the plan.
const noteTitles = new Map() // basename (no .md) → frontmatter title
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.name.endsWith(".md") && e.name !== "index.md") {
      const fm = stripBom(fs.readFileSync(p, "utf8")).match(/^---\r?\n[\s\S]*?\btitle:\s*"?([^"\r\n]+)"?/)
      noteTitles.set(e.name.slice(0, -3), fm ? fm[1].trim() : e.name.slice(0, -3))
    }
  }
}
walk(content)

const roadmap = stripBom(fs.readFileSync(MOC_FILE, "utf8")).split(/\r?\n/)
const h1 = roadmap.find((l) => l.startsWith("# "))
const title = h1 ? h1.slice(2).trim() : "Middle System Analyst Roadmap"
const out = [`---`, `title: "${title}"`, `---`, ``]
let chapterIdx = -1
let chapter = null // { heading, sections: [{ heading, links: [] }] }
const chapters = []
for (const line of roadmap) {
  if (line.startsWith("## ")) {
    chapterIdx++
    const ru = Object.values(CHAPTERS)[chapterIdx]
    chapter = { heading: ru ?? line.slice(3).trim(), sections: [{ heading: null, links: [] }] }
    chapters.push(chapter)
  } else if (line.startsWith("### ") && chapter) {
    chapter.sections.push({ heading: line.slice(4).trim(), links: [] })
  } else if (chapter) {
    for (const m of line.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)) {
      const target = m[1].trim().split("/").pop()
      const t = noteTitles.get(target)
      if (t) chapter.sections.at(-1).links.push(`- [[${target}|${t}]]`)
    }
  }
}
if (chapterIdx + 1 !== Object.keys(CHAPTERS).length) {
  console.warn(`roadmap has ${chapterIdx + 1} chapters but chapters.json has ${Object.keys(CHAPTERS).length}`)
}
for (const c of chapters) {
  const filled = c.sections.filter((s) => s.links.length)
  if (!filled.length) {
    out.push(`## ${c.heading}`, ``, `*скоро*`, ``)
    continue
  }
  out.push(`## ${c.heading}`, ``)
  for (const s of filled) {
    if (s.heading) out.push(`### ${s.heading}`, ``)
    out.push(...s.links, ``)
  }
}
fs.writeFileSync(path.join(content, "index.md"), out.join("\n"), "utf8")

const count = fs.readdirSync(content, { recursive: true }).filter((f) => f.endsWith(".md")).length
console.log(`synced ${count} markdown files → ${path.relative(vault, content)}`)
