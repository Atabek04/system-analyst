# Aesthetics — Making Diagrams & Slides Beautiful

Rules distilled from Excalidraw design practice. Apply these to **both** single diagrams and slide
decks, on top of the semantic colors in `color-palette.md`. These are about *looking good*; the
isomorphism/argument rules in `SKILL.md` are about *meaning well*. You need both.

---

## Color & shade

- **Stroke is always darker than fill.** A light fill with a darker stroke of the same hue reads
  clean; the reverse looks muddy. (This is why `color-palette.md` pairs every fill with a darker
  stroke — never swap them.)
- **Don't go past a mid shade for any fill that holds text.** Dark fills + dark text = unreadable.
  For text on a colored shape, use a light fill (the palette's fill column) and dark text, OR a dark
  fill (evidence-artifact background) and white text. Never a medium fill with medium text.
- **Limit the palette.** A diagram or deck should use ~3–4 semantic colors, not the whole rainbow.
  Every extra color must earn its meaning. Reuse the same color for the same role everywhere.
- **One accent.** Pick a single accent color (usually the Primary blue) for the thing the eye should
  land on first. Everything else is neutral/quiet so the accent pops.

## Stroke & fill styling

- **Thinnest stroke that reads.** `strokeWidth: 1` for lines/dividers, `2` for shapes and primary
  arrows, `3` only for the one main flow you want to emphasize. Thick strokes everywhere look amateur.
- **`fillStyle: "solid"`** for clean modern work. Hachure/cross-hatch only for an intentional
  sketchy mood.
- **`roughness: 0`** for technical/teaching material (crisp). `roughness: 1` only when you
  deliberately want a hand-drawn, informal feel.

## Opacity & layering

- **Keep elements at `opacity: 100`.** Build hierarchy with color/size/spacing, not transparency.
- **Exception — grouping backdrops:** a large, very faint rounded rectangle (low opacity, no/soft
  stroke) *behind* a cluster can softly group related elements without drawing a hard box. Use
  sparingly; it's the one good use of reduced opacity.
- **Layer order:** faint backdrops first (bottom), then shapes, then arrows, then text on top.

## Arrows & flow

- **Straight or gently curved.** Avoid wild curves — they create visual chaos. A right-angled
  (orthogonal) path with one or two waypoints beats a swooping curve.
- **Consistent arrowheads.** Pick one arrowhead style and stick to it. Solid arrow for sequence/flow;
  dotted/dashed stroke for weak or non-sequential relationships.
- **Label arrows small.** Arrow labels at the caption size, placed right on or beside the path.
- **Never cross an arrow through a shape.** Route around with waypoints in the `points` array.

## Typography

- **One font family for the whole artifact** (`fontFamily: 3`). Mixing families looks broken.
- **Few sizes.** Two or three sizes max per view. A clear jump between levels (e.g. 48 / 26 / 18 on
  slides; 20 / 16 / 12 on diagrams) reads better than many close sizes.
- **Title one step larger than its contents.** A section title should visibly outrank the text it
  governs — by size and by color (use the Title color).
- **Left-align body text and bullets.** Center only titles, single-line hooks, and short labels.
  Long centered text is hard to scan.

## Spacing, alignment & composition

- **Align everything to an invisible grid.** Shapes that share a row should share a `y`; a column
  should share an `x`. Misalignment by a few pixels is the #1 thing that makes a diagram look sloppy.
- **Even spacing.** Equal gaps between sibling elements. If three boxes are in a row, the two gaps
  must be identical.
- **Whitespace = importance.** The most important element gets the most empty space around it. Don't
  fear emptiness — cramped diagrams read as chaotic even when correct.
- **Design for 16:9.** Avoid extremely wide or tall compositions unless the content demands it. A
  balanced rectangle near 16:9 fits screens, recordings, and slides.
- **Balance the canvas.** No quadrant should be packed while another is empty. Distribute weight.

## Reusable components

- **Build once, duplicate.** When the same visual unit repeats (a slide template, a service node, a
  legend chip), build it carefully once and copy it — identical seeds/styles keep the set uniform.
- **A legend** (small key mapping color → meaning) is worth adding to any diagram that uses more than
  two semantic colors. Place it in a quiet corner.

## The "squint test"

Blur your eyes (or look at the rendered PNG zoomed out). You should still see: where the eye starts,
the main flow, and the one accent element. If everything blurs into uniform gray noise, there's not
enough hierarchy — increase size/color contrast and whitespace on the important parts.

---

### Quick beauty checklist

- [ ] Stroke darker than fill on every shape; no medium-on-medium text
- [ ] ≤ 3–4 colors, each tied to a consistent meaning; one clear accent
- [ ] Thin strokes (1–2), `roughness: 0`, `opacity: 100` (except faint group backdrops)
- [ ] Arrows straight/lightly curved, consistent heads, none crossing shapes
- [ ] One font family, ≤ 3 sizes, titles outrank body, body left-aligned
- [ ] Everything aligned to a grid; equal gaps between siblings
- [ ] Generous whitespace around the most important element
- [ ] Composition balanced, near 16:9, passes the squint test
