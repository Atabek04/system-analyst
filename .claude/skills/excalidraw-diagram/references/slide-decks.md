# Slide Decks (Frames as Lecture Slides)

This skill builds two kinds of artifacts:

1. **A single diagram** — one canvas, one visual argument. (Default mode, see `SKILL.md`.)
2. **A slide deck** — a sequence of **frames**, each frame is one slide of a lecture/presentation.

This file covers mode 2. Read it whenever the request is "slides", "deck", "presentation",
"lecture", or "lesson" rather than "a diagram".

A slide deck is not a slideshow of unrelated diagrams. It is **one continuous canvas** where each
frame is a slide, and the diagram-design rules from `SKILL.md` still apply *inside every frame*.
Bullet text, a title, and a diagram all live together on a slide — text carries the words the
viewer must read, the diagram carries the relationships words can't show.

---

## How frames become slides

- A **frame** is an Excalidraw element of `type: "frame"`. Everything visually inside it (or
  carrying its `frameId`) belongs to that slide.
- **Presentation order = canvas position: left-to-right, then top-to-bottom.** Lay frames out in a
  predictable grid. Do **not** rely on array order in the JSON — Excalidraw orders by geometry.
- Keep frames the **same size** and **aligned** so the deck reads cleanly and so duplicating a slide
  never rescales its contents.

### Canvas layout for a deck

Use a fixed grid of identical frames. Recommended:

- **Frame size: 1600 × 900** (16:9 — matches screen-recording and projector aspect).
- **Gutter: 200px** between frames.
- Lay frames in a **horizontal row** (simplest, unambiguous order): frame *n* at
  `x = n * (1600 + 200)`, `y = 0`. For long decks, wrap into rows of ~5 and start a new row at
  `y = row * (900 + 200)` — but a single long row is the safest for correct ordering.

```
x:      0          1800        3600        5400
      ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐
      │  S1  │   │  S2  │   │  S3  │   │  S4  │   ...
      └──────┘   └──────┘   └──────┘   └──────┘
   1600×900    each, 200px gutter
```

### Naming frames

Give every frame a `name` that encodes **order + type + topic**, e.g.
`"01 · Title · SQL Basics"`, `"05 · Concept · SELECT"`, `"09 · Check · Module 1"`.
The number keeps order obvious to a human editor; the type makes the deck skimmable.

---

## Safe content zone (so nothing clips at the frame edge)

Treat each 1600×900 frame as having a **margin of 100px** on every side. Place all content inside
the inner **1400 × 700** zone (`x: +100..+1500`, `y: +100..+800`, relative to the frame origin).
Titles sit in the top band, body/diagram in the middle, footer/page-number in the bottom band.

```
┌─────────────────────────────────────────────┐ frame origin (fx, fy)
│  100px margin                                 │
│   ┌───────────────────────────────────────┐  │
│   │ TITLE BAND        (y +100 .. +220)     │  │
│   │                                        │  │
│   │ BODY / DIAGRAM    (y +240 .. +740)     │  │
│   │                                        │  │
│   │ FOOTER / page #   (y +760 .. +800)     │  │
│   └───────────────────────────────────────┘  │
│                                               │
└─────────────────────────────────────────────┘
```

All child element coordinates are **absolute canvas coordinates** (frame origin + offset), and each
child must carry `"frameId": "<the frame's id>"`.

---

## Typography scale for slides

Slides are read from across a room or in a recording — bigger than diagram text.

| Role | fontSize | Color (from `color-palette.md`) |
|------|----------|--------------------------------|
| Slide title | 48 | Title `#1e40af` |
| Subtitle / section label | 32 | Subtitle `#3b82f6` |
| Bullet / body text | 26 | On-light `#374151` |
| Caption / annotation / footer | 18 | Body/Detail `#64748b` |
| Code / syntax | 22 (monospace, fontFamily 3) | per evidence-artifact colors |

Keep to **one font family** across the deck (`fontFamily: 3` everywhere). Use size, weight, and
color for hierarchy — never more than ~3 sizes on a single slide.

---

## Bullet lists (the part the diagram skill didn't cover)

Slides need readable bullet text. Two ways to render bullets — prefer the first:

1. **One text element per bullet** (best: independent positioning, easy alignment, no clipping).
   Stack them with a consistent vertical rhythm (line pitch ≈ `fontSize × 1.8`, e.g. 48px steps for
   26px text). Prefix each with a marker dot (12px ellipse) or a `•`/`→`/`✓` glyph in the text.
2. **One multi-line text element** with `\n` between bullets and `•` glyphs inline. Simpler, but
   you lose per-line alignment and can't anchor a diagram to a single bullet.

**Bullet rules:**
- **Max 5–6 bullets per slide.** More than that → split into two slides.
- **One line per bullet** ideally; never more than two. Bullets are headlines, not sentences.
- **Parallel grammar** — start every bullet the same way (all verbs, or all nouns).
- **Reveal-friendly:** if you want progressive reveal in the recording, put each bullet (or bullet
  group) on its **own frame**, duplicating the previous frame and adding one bullet. The Excalidraw
  presenter has no per-element animation — staged frames are how you "build" a list.

See `element-templates.md` → "Bullet list item" and "Frame (slide)" for copy-paste JSON.

---

## Slide types (lecture deck vocabulary)

Each frame is one of these. This mirrors the curriculum-production frame table so the two skills
speak the same language.

| Slide type | What's on it | Layout |
|------------|--------------|--------|
| **Title** | Lesson name (huge), topic area, maybe a single hero glyph | Centered, lots of whitespace |
| **Hook** | One scenario/question, large | Centered single line |
| **Agenda / Map** | 3–6 numbered items — what this lesson covers | Left-aligned numbered list |
| **Bridge** | Real-world analog → IT concept (two boxes + arrow) | Side-by-side with arrow |
| **Socratic question** | One bold question, nothing else | Centered, max size |
| **Concept** | Term + 1-line definition + a **diagram** | Title band + diagram in body |
| **Bullets** | A short headline + 3–6 bullets | Title + left bullet column |
| **Diagram (hero)** | A full diagram fills the body (use SKILL.md rules) | Title band + large diagram |
| **Comparison** | Two columns side-by-side, or a small table | Split body 50/50 |
| **Code / Syntax** | Exact syntax in a dark code block + caption | Code block centered in body |
| **Section check** | 3–5 numbered questions | Numbered list, generous spacing |
| **Recap** | Key terms + one-line definitions | Two-column term list |

A real deck mixes these: a concept slide, then its diagram slide, then a check slide. Don't make
every slide a bullet list — alternate text slides with diagram slides so the deck breathes.

---

## Deck design rules (from research + practice)

1. **One idea per slide.** If a slide needs the word "and" in its title, it's probably two slides.
2. **Minimalism wins.** Limited text, generous whitespace. The slide is an anchor for what the
   presenter *says*, not a document. If a slide is fully self-explanatory, it has too much text.
3. **Consistency across the deck.** Same frame size, same margins, same title position, same colors,
   same font. A viewer should never notice the slide "jumped." Build slide 1 carefully, then
   duplicate its frame as the template for the rest.
4. **Visual hierarchy via size/color/position**, not via boxes around everything. (Container
   discipline from SKILL.md still applies inside slides.)
5. **Alternate density.** Don't stack five bullet-heavy slides in a row. Put a diagram or a single
   big question between them.
6. **A diagram still has to ARGUE.** Every diagram inside a slide obeys all of `SKILL.md` — the
   isomorphism test, evidence artifacts for technical content, variety of patterns. Slides are not
   an excuse for lazy boxes-and-arrows.
7. **Footer page numbers** (small, bottom-right) help during live teaching and recording. Optional
   but recommended for decks over ~8 slides.

---

## Build workflow for a deck

This extends the single-diagram workflow in `SKILL.md`. Build **frame by frame**, exactly like the
section-by-section strategy for large diagrams — never dump the whole deck in one JSON pass.

1. **Plan the deck on paper first.** List every slide in order: number, type, one-line content.
   Confirm the running order tells a coherent story (Title → Hook → … → Recap).
2. **Create the base file** with the JSON wrapper and **frame 1 fully built** (title slide). Treat
   this slide as the visual template for the whole deck.
3. **Add one slide per edit.** For each new frame: place it at the next grid x-position, give it the
   ordered `name`, then add its child elements (all with `frameId` set, all inside the safe zone).
   Namespace seeds per slide (slide 1 → 100xxx, slide 2 → 200xxx, …) to avoid collisions.
4. **Reuse the template.** Keep title position, margins, colors identical across slides. Copy the
   title/footer elements from slide 1 and change only the text.
5. **Diagrams inside slides:** design them with the full `SKILL.md` methodology, positioned within
   that frame's body zone (and tagged with the frame's `frameId`).
6. **Render & validate the whole canvas** (see SKILL.md "Render & Validate"). The renderer outputs
   one PNG of the entire canvas — every frame is visible at once, so you can check cross-slide
   consistency (aligned titles, equal margins, uniform colors) in a single image. Loop until the
   deck is clean.

---

## Deck quality checklist (in addition to SKILL.md's diagram checklist)

- [ ] All frames are the same size (1600×900) and aligned on a grid
- [ ] Frame order (left→right / top→bottom) matches the intended lesson order
- [ ] Every frame `name` encodes order + type + topic
- [ ] Every child element carries the correct `frameId`
- [ ] Nothing clips the frame edge — all content inside the 100px safe margin
- [ ] Title position, font, and color are identical on every slide
- [ ] ≤ 5–6 bullets per slide; bullets are headlines, parallel grammar
- [ ] Text is sized for a recording (titles 48, bullets 26) — legible in the rendered PNG
- [ ] Deck alternates text-heavy and diagram/question slides (it breathes)
- [ ] Every diagram inside a slide still passes the isomorphism + argument tests
- [ ] Whole-canvas render reviewed; cross-slide consistency confirmed
