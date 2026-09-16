// Renders the site icon ("[ · ]" mark) into quartz/static/:
//   icon.svg            crisp favicon for modern browsers
//   icon.png   512×512  favicon fallback + apple-touch-icon (Quartz also derives favicon.ico from it)
//   og-image.png 1200×630 default social preview
// Run once after changing the mark: node make-icons.mjs
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const here = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(here, "quartz", "static")
const PAPER = "#faf9f5"
const INK = "#141413"

// 64-grid mark: square brackets with a dot — a field being defined and filled
const mark = (ink) => `
  <path d="M22 13 H13 V51 H22 M42 13 H51 V51 H42" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="32" cy="32" r="5.5" fill="${ink}"/>`

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="${PAPER}"/>${mark(INK)}
</svg>
`

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <g transform="translate(110 215) scale(3.1)">${mark(INK)}</g>
  <text x="360" y="335" font-family="Georgia, 'Times New Roman', serif" font-weight="600" font-size="72" fill="${INK}" letter-spacing="-1.5">Системный анализ</text>
  <text x="364" y="392" font-family="Segoe UI, Arial, sans-serif" font-size="28" fill="#6f6d67">Справочник по системному анализу</text>
</svg>`

fs.writeFileSync(path.join(out, "icon.svg"), iconSvg)
await sharp(Buffer.from(iconSvg), { density: 384 }).resize(512, 512).png().toFile(path.join(out, "icon.png"))
await sharp(Buffer.from(ogSvg)).png().toFile(path.join(out, "og-image.png"))
console.log("wrote icon.svg, icon.png (512), og-image.png (1200×630)")
