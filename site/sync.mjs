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
const CHAPTERS = JSON.parse(fs.readFileSync(path.join(vault, "chapters.json"), "utf8"))

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

// 3. Read the roadmap skeleton: `##` chapters (in chapters.json order), `###` sections,
//    and [[links]] to notes that actually exist. Plain bullets, blockquotes and links to
//    slides are dropped — the site shows a table of contents, not the working plan.
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

const slugs = Object.keys(CHAPTERS)
const roadmap = stripBom(fs.readFileSync(MOC_FILE, "utf8")).split(/\r?\n/)
const chapters = [] // { slug, title, blurb, sections: [{ heading, links: [] }] }
let chapter = null
for (const line of roadmap) {
  if (line.startsWith("## ")) {
    const slug = slugs[chapters.length]
    const meta = CHAPTERS[slug] ?? { title: line.slice(3).trim(), blurb: "" }
    chapter = { slug, ...meta, sections: [{ heading: null, links: [] }] }
    chapters.push(chapter)
  } else if (line.startsWith("### ") && chapter) {
    // drop trailing italic asides like "*(мостик: ...)*" — they are notes for the author
    const heading = line.slice(4).replace(/\s*\*\(.*?\)\*\s*$/, "").trim()
    chapter.sections.push({ heading, links: [] })
  } else if (chapter) {
    for (const m of line.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)) {
      const target = m[1].trim().split("/").pop()
      const t = noteTitles.get(target)
      if (t) chapter.sections.at(-1).links.push(`- [[${target}|${t}]]`)
    }
  }
}
if (chapters.length !== slugs.length) {
  console.warn(`roadmap has ${chapters.length} chapters but chapters.json has ${slugs.length}`)
}
for (const c of chapters) c.hasNotes = c.sections.some((s) => s.links.length)

// 4. Chapter pages: <chapter>/index.md = title + blurb + sections with note links.
//    `order` = position in chapters.json; the explorer sorts chapters by it.
for (const [i, c] of chapters.entries()) {
  const dir = path.join(content, c.slug)
  if (!c.hasNotes && !fs.existsSync(dir)) continue // nothing published yet → no page
  fs.mkdirSync(dir, { recursive: true })
  const out = [`---`, `title: "${c.title}"`, `order: ${i + 1}`, `---`, ``, c.blurb, ``]
  for (const s of c.sections.filter((s) => s.links.length)) {
    if (s.heading) out.push(`### ${s.heading}`, ``)
    out.push(...s.links, ``)
  }
  fs.writeFileSync(path.join(dir, "index.md"), out.join("\n"), "utf8")
}
for (const dir of fs.readdirSync(content, { withFileTypes: true })) {
  if (dir.isDirectory() && dir.name !== "assets" && !CHAPTERS[dir.name]) {
    console.warn(`chapters.json has no entry for "${dir.name}" — add one (title, blurb; position = order)`)
  }
}

// 5. Home page: title, description, and a grid of chapters (published ones link to
//    their page; the rest keep their place in the sequence, muted).
const HOME_TITLE = "Системный анализ"
const HOME_LEDE =
  "Каждая глава ниже это **карта содержания**: порядок чтения по заметкам, где одна заметка " +
  "раскрывает одну идею. Откройте главу, пройдите её разделы сверху вниз, а в боковой панели " +
  "найдёте соседние заметки той же главы."
// Card: number (learning order) + title + blurb + the chapter's notes in reading order.
// data-no-popover: no hover previews on the home page (they stay on inside notes).
const card = (c, i) => {
  const num = `<span class="chapter-num">${i + 1}</span>`
  const title = c.hasNotes
    ? `<a class="chapter-title" href="./${c.slug}/" data-no-popover="true">${c.title}</a>`
    : `<span class="chapter-title">${c.title}</span>`
  const notes = c.sections
    .flatMap((s) => s.links)
    .map((l) => l.match(/^- \[\[([^\]|]+)\|([^\]]+)\]\]$/))
    .filter(Boolean)
    .map(([, slug, t]) => `<li><a href="./${c.slug}/${slug}" data-no-popover="true">${t}</a></li>`)
  const list = notes.length ? `<ul class="chapter-notes">${notes.join("")}</ul>` : ""
  return `<div class="chapter${c.hasNotes ? "" : " chapter-soon"}">${num}<div class="chapter-body">${title}${list}</div></div>`
}
const home = [
  `---`,
  `title: "${HOME_TITLE}"`,
  `---`,
  ``,
  HOME_LEDE,
  ``,
  `<div class="chapter-grid">`,
  ...chapters.map(card),
  `</div>`,
  ``,
]
fs.writeFileSync(path.join(content, "index.md"), home.join("\n"), "utf8")

const count = fs.readdirSync(content, { recursive: true }).filter((f) => f.endsWith(".md")).length
console.log(`synced ${count} markdown files → ${path.relative(vault, content)}`)
