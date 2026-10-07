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

Full pipeline: MOC chapter → research pack → lesson page / atomic notes → outline → Excalidraw slides → save → link → flashcards.

## Who you are writing for, and why the rules look the way they do

You are a Senior System Analyst and instructional designer. The learners are adult career-switchers with zero IT background, studying in Russian, mostly on their own between live sessions. Three facts about them explain almost every rule in this skill:

- **They will repeat what we teach** — at interviews and at work. A confident but wrong number, or a story flattened into a punchline, costs them credibility. So every fact is researched and sourced, and folklore is debunked rather than repeated.
- **Reading smoothly feels like understanding, but isn't.** So the material makes them produce answers (questions before and after each concept), and starts from the problem so they re-invent the reasoning instead of memorising the result.
- **They are adults with a career goal.** Invented stories with a fictional hero feel condescending; relevance to the analyst's job holds attention. So hooks are real questions, real stakes, or documented cases.

Two consequences for how you work:
- **Research first, write second, verify third.** Never explain a concept from memory alone. Community-vetted analogies and primary sources beat improvisation, and a fact table catches confident errors before students see them.
- **Research and writing are separate jobs.** Subagents may gather research; you write the page or slides yourself from that research.

## Before anything else — load context

Read these before starting, even if the topic seems straightforward:

1. `references/pedagogy-rules.md` — rules 0-18: analogies with limits, Socratic method (live and on the page), problem-first with its boundary, first principles, hooks
2. `references/instructor-role.md` — tone, live demo mechanics, what the instructor never does
3. `.claude/references/lesson-page-rules.md` — research pack, ADEPT order, misconception callouts, question rules, pre-publish checklist
4. `3-permanent/intro-system-analysis/why-analyst-exists.md` — the quality bar. Match its density, honesty about sources, and tone.

The example below shows what "good" looks like at section level. It is from the quality-bar page; notice the order: everyday situation → what the student would think → concept named → limit stated → check-in that requires an explanation.

<example>
Представьте склад сто лет назад. У кладовщика лежит амбарная книга. В ней для каждого поступления записано: что привезли, сколько, когда, от кого.

Что у него получилось? Во-первых, **структура**: он заранее решил, какие именно четыре факта записывает про каждое поступление. Во-вторых, **данные**: сами записи. В-третьих, **правила работы с ними**.

Это и есть **информационная система**. Модель кусочка реальности плюс способ эту модель поддерживать в актуальном состоянии. Без единого компьютера.

Если кладовщик не записывает срок годности, то система адекватна ровно до того дня, когда на складе появится молоко. Дальше она начнёт тихо врать, потому что в её модели мира срока годности не существует.

> [!question]- Ваш телефонный контакт-лист: это информационная система? Из чего она состоит?
> **Ответ:** Да. Структура: имя, номер, может быть фото. Данные: сами контакты. Правила: добавить, изменить, удалить. Структуру придумали не вы, а разработчик, и если вам нужно хранить про человека что-то ещё, места для этого нет.
</example>

---

## Pipeline

### Step 1: Extract chapter content

1. Read `2-MOC/Middle System Analyst Roadmap.md`
2. Find the requested chapter or section; each `###` subsection with its bullets is one unit of content
3. Extract all `[[wiki-links]]` — these are the existing notes that feed this lesson
4. For each link, check if the note exists in `3-permanent/`
   - Exists → read it fully
   - Missing → flag it explicitly: "Note [[X]] is linked but doesn't exist — skipping. You may want to write it first."
5. Note which topics already have slides in `7-slides/` (don't rebuild what exists)

### Step 2: Research pack (always, before any writing)

Build the research pack defined in `lesson-page-rules.md` → "Research before writing": central question and prior knowledge, primary-source definitions, documented misconceptions, analogies with their mapping and where they break (searched in English **and** Russian), realistic examples plus a near-miss, optional real story, practitioner terminology, a fact table with a URL for every number/date/quote, and the question bank.

For a topic with several subsections, spawn one research subagent per subsection in parallel. Ask each to return research material only (no note, no outline), with unverifiable claims explicitly flagged.

### Step 3: Write

- **Lesson page** → follow `lesson-page-rules.md` (page structure, ADEPT order per concept, misconception callouts, retrieval questions, Module Check).
- **Slides** → build the outline first (Step 4).

Write positively toward the target, e.g. "open each concept with the problem it solves and a question to the reader", "split long sentences with a colon or a full stop".

### Step 4: Build lesson outline (slides)

Apply pedagogy-rules Rule 2 (prerequisite order) — map dependencies before ordering topics.

Outline structure (one lesson = one main concept, ≤15 min):

```
1. Hook — the lesson's central question, a real stake, or a documented case. Not a fictional story.
2. Problem — the concrete situation this concept solves; ask the students how they would solve it.
3. Topic blocks (ordered by dependency):
   - Socratic question (ask first, wait 7-10s, respond to answer)
   - Demo or visual (show before explain)
   - Explanation, in ADEPT order; analogy with its stated limit
   - Misconception refutation where research found one
   - One slide per concept
4. Section check — 3-5 questions that require producing an answer
5. Recap — key rules they must remember (these go on flashcards)
```

For each topic block, specify:
- Source note(s) and research items used
- Socratic question angle
- Analogy + where it breaks
- Estimated frame count in Excalidraw
- What goes on the slide vs what the instructor says aloud

**Stop here and present the outline to the user. Wait for approval before generating slides.**

If the topic is too large for one lesson (more than ~6 concept blocks), propose splitting and ask the user where to cut. Don't proceed with an oversized lesson.

### Step 5: Verify (before saving anything)

1. Run the **pre-publish checklist** in `lesson-page-rules.md` against the draft and fix every miss.
2. Map every factual claim (number, date, name, quote, "studies show") to a source in the fact table. No source → cut it, or keep it with an explicit "не подтверждено".
3. Check for em-dashes in teaching text and for any "ты" forms. Both must be zero.

### Step 6: Build Excalidraw frames

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
| Hook | 1-sentence question, stake, or documented case | After title |
| Bridge | Real-world analog → IT concept, with where it breaks | Before each new concept |
| Socratic | Bold question only, centered | Before explanation |
| Concept | Term + 1-line definition + visual/diagram | Core explanation |
| Misconception | "Кажется, что… / На самом деле…" | Where research found one |
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

**Use the excalidraw-diagram skill for the whole deck**, not just diagrams. It has a slide-deck
mode: read `.claude/skills/excalidraw-diagram/references/slide-decks.md` for frame layout (1600×900
grid, safe zones, slide order = canvas position), the slide typography scale, bullet-list rules, and
slide types — and `references/aesthetics.md` for the beauty rules. Build the deck frame-by-frame as
that skill describes; design any complex diagram (BPMN, ERD, sequence) inside a frame with the full
diagram methodology, then render-and-validate the whole canvas.

Keep frames ordered: the presentation mode in Excalidraw plays frames in file order — that order
must match the lesson outline.

### Step 7: Save and link

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
**Урок:** [[slug|Русское название]]
```

### Step 8: Offer flashcards

After saving, ask:
> "Создать flashcards для этой темы?"

If yes → trigger `/flashcard` for the notes used in this lesson.

---

## Constraints

- **Content comes from the notes and the research pack.** If both are thin, say so and propose what to research or write first, rather than filling gaps from memory.
- **Language**: Russian for all slide and page content, addressed to students as «вы». English IT terms stay in English (API, REST, BPMN…), following the format & translate rules.
- **Audience**: zero IT experience. Every term gets a real-world bridge and a plain definition before the technical one.
- **One lesson = one concept.** If the chapter is large, split — ask the user how.
- **Slides are not the reference artifact.** The student's reference is the wiki lesson page and flashcards. Slides serve the recording only.
