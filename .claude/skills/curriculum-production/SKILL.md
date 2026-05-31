---
name: curriculum-production
description: >
  Full curriculum production pipeline for the System Analyst Bootcamp — from MOC chapter to
  Excalidraw presentation. Use this skill when the user asks to "create a lesson for [topic]",
  "build a presentation on [chapter]", "make slides for [subject]", "prepare the [BPMN/SQL/API/etc]
  lesson", "build slides from the MOC", or any variant of "lesson for X". Also trigger when the
  user says "let's do the curriculum for [topic]", "I want to record a lesson on [subject]", or
  references a specific chapter from the roadmap and wants a visual presentation built from it.
  Do NOT use marp-slides for new topics — this skill owns all new lesson production.
---

# Curriculum Production — SA Bootcamp

Full pipeline: MOC chapter → atomic notes → outline → Excalidraw slides → save → link → flashcards.

## Before anything else — load context

Read both reference files before starting. They define how lessons must be structured and how
the instructor teaches. Don't skip this even if the topic seems straightforward.

1. `references/pedagogy-rules.md` — 15 rules: bridge table, Socratic method, demo-first, slide design, checklist
2. `references/instructor-role.md` — tone, live demo mechanics, what the instructor never does

---

## Pipeline

### Step 1: Extract chapter content

1. Read `2-MOC/Middle System Analyst Roadmap.md`
2. Find the requested chapter or section
3. Extract all `[[wiki-links]]` — these are the atomic notes that feed this lesson
4. For each link, check if the note exists in `3-permanent/`
   - Exists → read it fully
   - Missing → flag it explicitly: "Note [[X]] is linked but doesn't exist — skipping. You may want to write it first."
5. Note which topics already have slides in `7-slides/` (don't rebuild what exists)

### Step 2: Build lesson outline

Apply pedagogy-rules Rule 2 (prerequisite order) — map dependencies before ordering topics.

Outline structure (one lesson = one main concept, ≤15 min):

```
1. Hook — why does this matter for a Junior SA? Real scenario, not abstract.
2. Bridge — what real-world thing does the student already know that maps to this?
3. Topic blocks (ordered by dependency):
   - Socratic question (ask first, wait 7-10s, respond to answer)
   - Demo or visual (show before explain)
   - Explanation (after they've seen it)
   - One slide per concept
4. Section check — 3-5 comprehension questions per block
5. Recap — key rules they must remember (these go on flashcards)
```

For each topic block, specify:
- Source atomic note(s)
- Socratic question angle
- Real-world bridge (from pedagogy-rules Rule 0 bridge table)
- Estimated frame count in Excalidraw
- What goes on the slide vs what the instructor says aloud

**Stop here and present the outline to the user. Wait for approval before generating slides.**

If the topic is too large for one lesson (more than ~6 concept blocks), propose splitting and ask
the user where to cut. Don't proceed with an oversized lesson.

### Step 3: Build Excalidraw frames

Excalidraw is the slide format. Each frame = one slide. Save to `7-slides/{topic}/{topic}.excalidraw`.

**Slide design rules (from pedagogy-rules Rule 12):**
- One concept per frame — never two
- Minimum text: only rules, syntax, definitions the student must memorize verbatim
- Visual > text: diagrams, schemas, annotated examples, single key terms
- If the student can understand the frame without hearing the instructor — too much text
- What the instructor says is the explanation; the frame is just the anchor

**Frame types to use:**

| Frame | Content | When |
|---|---|---|
| Title | Lesson name + topic area | First frame only |
| Hook | 1-sentence scenario or question | After title |
| Bridge | Real-world analog → IT concept | Before each new concept |
| Socratic | Bold question only, centered | Before explanation |
| Concept | Term + 1-line definition + visual/diagram | Core explanation |
| Rule | Exact wording of rules to memorize | When precision matters |
| Code/Syntax | SQL, JSON, API path — exact syntax | Technical topics |
| Comparison | Side-by-side table | Contrast between similar concepts |
| Section check | 3-5 questions, numbered | After each topic block |
| Recap | Key terms + one-line definitions | Final frame |

**Building the .excalidraw file:**

Generate valid Excalidraw JSON with frames. Each frame gets:
- A unique `id`
- A `name` matching the frame type (e.g., "Concept: API definition")
- Elements positioned within the frame bounds

**Use the excalidraw-diagram skill for the whole deck**, not just diagrams. It now has a slide-deck
mode: read `.claude/skills/excalidraw-diagram/references/slide-decks.md` for frame layout (1600×900
grid, safe zones, slide order = canvas position), the slide typography scale, bullet-list rules, and
slide types — and `references/aesthetics.md` for the beauty rules. Build the deck frame-by-frame as
that skill describes; design any complex diagram (BPMN, ERD, sequence) inside a frame with the full
diagram methodology, then render-and-validate the whole canvas.

Keep frames ordered: the presentation mode in Excalidraw plays frames in file order — that order
must match the lesson outline.

### Step 4: Save and link

Save the file:
```
7-slides/{topic}/{topic}.excalidraw
```

Create the folder if it doesn't exist. If images or diagram exports are needed, save to:
```
7-slides/{topic}/img/
```

Update `2-MOC/Middle System Analyst Roadmap.md` — add a link in the correct chapter:
```markdown
**Slides:** [[7-slides/{topic}/{topic}|Topic Name]]
```

### Step 5: Offer flashcards

After slides are saved, ask:
> "Хочешь создать flashcards для этой темы?"

If yes → trigger `/flashcard` for the atomic notes used in this lesson.

---

## Constraints

- **Never invent content.** Only use what's in the linked atomic notes. If notes are thin, say so
  and tell the user which notes to write first.
- **Language**: Russian for all slide content. English IT terms stay in English (API, REST, BPMN…).
- **Audience**: zero IT experience. Every term needs a real-world bridge before definition.
- **One lesson = one concept.** If the chapter is large, split — ask the user how.
- **Slides are not the reference artifact.** The student's reference is flashcards. Slides serve
  the recording only.
