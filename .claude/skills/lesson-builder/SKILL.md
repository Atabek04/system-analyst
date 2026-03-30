---
name: lesson-builder
description: Build a complete lesson from a MOC chapter — research all linked notes, create an outline, generate Marp slides, and export to PDF. Use when the user asks to "create a lesson for [chapter]", "build slides from the MOC", "make a presentation for [topic section]", "prepare a lesson on [subject]", or references a specific chapter from the roadmap and wants slides created from it. Also trigger when the user says "lesson for BPMN", "slides from the requirements chapter", etc.
---

# Lesson Builder

Build a complete teaching lesson from a MOC chapter: research → outline → slides → PDF.

## Workflow

### Step 1: Extract chapter content

1. Read `2-MOC/Middle System Analyst Roadmap.md`
2. Find the requested chapter/section
3. Extract all `[[wiki-links]]` from that section
4. Read each linked note in `3-permanent/` (or wherever the link resolves)
   - If a note doesn't exist yet, flag it and skip — don't invent content
   - Note which topics have existing slides in `7-slides/`

### Step 2: Create outline

Present the user with a lesson outline before generating slides. The outline should follow the lesson arc from the slide rules:

1. **Hook** — why should interns care? Real-world problem or relatable scenario
2. **Topic blocks** — ordered by learning dependency (prerequisites first)
   - Each block: Socratic Question → Answer → optional Deep Dive
   - Module Check after each section (3-5 questions)
3. **Comparisons** — where concepts relate/differ
4. **Final Check** — comprehensive questions covering the entire lesson
5. **Recap** — key takeaways

For each topic block, note:
- Source note(s) it draws from
- Key concepts to cover
- Suggested Socratic question angle
- Estimated slide count

**Wait for user approval before proceeding.** They may want to reorder topics, skip some, or add emphasis.

### Step 3: Generate slides

Read the marp-slides references for formatting rules:
- `.claude/skills/marp-slides/references/slides.md` — content structure, Socratic flow, teacher notes
- `.claude/skills/marp-slides/references/marp.md` — styling, theme, slide classes, export

Then generate the full Marp `.md` file following those rules. Key points:
- Use the full theme from `references/marp.md` in the YAML frontmatter
- Title page with `<!-- _class: title -->`
- Socratic questions on `<!-- _class: lead -->` slides
- Teacher notes in `<!-- HTML comments -->`
- Module Checks after each section
- One concept per slide, max 5-6 bullets

Save to `7-slides/{topic}/{topic}.md`

### Step 4: Export and link

```bash
cd 7-slides/{topic} && marp {topic}.md -o {topic}.pdf
```

Then update `2-MOC/Middle System Analyst Roadmap.md` with a link to the slides:
```markdown
- [[7-slides/{topic}/{topic}|Topic Name (slides)]]
```

### Step 5: Offer flashcards

After slides are done, ask the user if they want flashcards generated for the same content. If yes, use `/flashcard`.

## Important

- **Never invent content** — only use what's in the atomic notes. If notes are thin, tell the user which topics need more content before slides can be created.
- **Language**: Russian for all slide content, casual tone. English IT terms stay in English.
- **Audience**: Interns with zero IT experience. Everyday analogies, no code examples unless the topic demands it.
- **Lesson size**: Aim for 20-40 slides per lesson. If the chapter is too large, suggest splitting into multiple lessons and ask the user how to divide.
