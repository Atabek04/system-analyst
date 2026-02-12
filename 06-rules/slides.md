# Slide Creation Rules

Apply these rules when creating `.md` files with slide content for Canva presentations.

---

## Output Format

### File Structure
- One `.md` file per lesson/topic
- Each slide starts with `### Slide Title`
- Separate slides with `---`

### Formatting Roles (strict, no mixing)

| Format                                                      | Purpose                                                       | Example                                       |
| ----------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------- |
| `> blockquote`                                              | Key takeaway students must remember                           | `> Методология — это КАК проходить фазы SDLC` |
| <mark style="background: #CACFD9A6;">grey highlight</mark>  | Teacher-only notes (what to say, timing, predicted questions) | Expand, predict, redirect, pace               |
| <mark style="background: #BBFABBA6;">green highlight</mark> | Visual/diagram suggestion                                     | `[VISUAL]: Диаграмма потока...`               |
| <mark style="background: #ABF7F7A6;">blue highlight</mark>  | Meme suggestion                                               | `[MEME]: Drake Hotline Bling — ...`           |
| `**bold**`                                                  | Key terms on first mention                                    | **Sprint**, **WIP-лимит**                     |
| Bullet points / tables                                      | All slide content                                             | No paragraphs, no full sentences              |

### Highlight Syntax
```markdown
Teacher note:
<mark style="background: #CACFD9A6;">Тут раскрой подробнее: ...</mark>

Visual suggestion:
<mark style="background: #BBFABBA6;">[VISUAL]: Диаграмма с тремя блоками...</mark>

Meme suggestion:
<mark style="background: #ABF7F7A6;">[MEME]: 'Drake Hotline Bling' — верхняя панель: ... нижняя: ...</mark>
```

### Slide Content
- **Language**: Russian, casual tone, "ты" not "вы". Slang OK.
- **No paragraphs**: Bullet points, numbered lists, tables, quotes only
- **Max 5-6 bullets per slide** — if more, split into two
- **One concept per slide**
- Short phrases over full sentences. Fragments OK.
- English terms stay in English: Sprint, Backlog, Standup, WIP-лимит
- No emojis (Canva handles design)

### Fitting Check
Before writing each slide, ask: "Does this fit on one Canva slide?"
- Table with 5+ rows → split or simplify
- Bullets need sub-bullets with explanations → 2 slides
- If content is just short bullet phrases, add <mark style="background: #CACFD9A6;">teacher note</mark> explaining what to expand verbally

---

## Audience

- **Interns with zero IT experience**
- They do NOT know programming, methodologies, processes, or analysis
- Explain everything from scratch — assume no prior knowledge
- Use everyday analogies (restaurant, cooking, school) not technical ones
- If a term might be unfamiliar, define it immediately

---

## Teacher Notes

Since slides contain only short phrases and bullets, teacher notes carry the detail.

```markdown
<mark style="background: #CACFD9A6;">
Тут раскрой подробнее: объясни что JWT — это просто токен-ключ.
Студенты могут спросить "а зачем токен?" — ответь через аналогию с пропуском в офис.
~3 мин на обсуждение.
</mark>
```

Every teacher note must do at least one of:
1. **Expand** — what to say beyond the bullet points
2. **Predict** — likely student questions or wrong answers
3. **Redirect** — follow-up Socratic question if students go off track
4. **Pace** — approximate timing for the block

---

## Lesson Flow

### Sequence per Topic Block

1. **Socratic Question Slide** → discussion
2. **Answer Slide(s)** → reveal + explanation
3. **Deep Dive** (optional) → analogy, example, or table
4. **Module Check** (after every section) → multiple verification questions

### Module Check (mandatory after each section)
- 3-5 questions covering the section just taught
- Mix of types: "объясни своими словами", "какой вариант лучше для...", "в чём разница..."
- Students answer verbally
- Include <mark style="background: #CACFD9A6;">teacher notes</mark> with expected answers and common mistakes

---

## Socratic Question Design

### Structure
```
Контекст/сценарий (1-2 предложения)
↓
Вопрос, который связывает сценарий с концептом
↓
Подсказка или ограничение, сужающее направление мысли
```

### Calibration
- Not too hard (frustrating for zero-XP interns)
- Not too easy (boring, no thinking)
- Question must **lead toward** the answer without giving it away
- Use real-life scenarios they can relate to (school, shopping, ordering food)

### Good Patterns
- "Представь: [everyday scenario]. Как думаешь, [question]?"
- "Вот два варианта: A и B. Какой лучше для [situation] и почему?"
- "Ты уже понял что [known]. А что если [new twist]?"

### Bad Patterns
- Too abstract: "Что такое методология?" (no hook, no scenario)
- Answer in question: "Waterfall плохой потому что...?"
- Yes/No: "Agile лучше чем Waterfall?" (no thinking required)
- Too technical: "В чём разница между prescriptive и adaptive подходами?"

---

## Answer Slides

**Short answer** — same slide:
- Question at top, answer below
- In Canva: duplicate slide — first shows only question, second adds answer

**Long answer** — new slide:
- Dedicated slide with structured answer
- Optional follow-up slide with example/analogy

---

## Comparisons

When comparing two concepts:
1. First ask students to fill the comparison themselves
2. Then show completed table
3. Consistent column order throughout lesson

---

## Analogies — Strict Rules

**Use an analogy ONLY when:**
- It maps accurately to the concept (1:1 correspondence, no stretching)
- It uses something the audience already knows from daily life
- It genuinely makes the concept click faster than direct explanation

**Skip the analogy when:**
- The mapping is approximate or requires caveats ("ну, это не совсем так, но...")
- It introduces more confusion than clarity
- You have to explain the analogy itself

**Test**: If you need more than one sentence to set up the analogy, it's probably not accurate enough. Drop it.

---

## Visual Suggestions

Format with green highlight:

```markdown
<mark style="background: #BBFABBA6;">
[VISUAL]: Диаграмма с тремя блоками: "Клиент → API → Сервер".
Стрелки между ними показывают запрос/ответ.
Помогает визуализировать роль API как посредника.
</mark>
```

**Add ONLY when:**
- The concept has spatial/structural relationships (flow, hierarchy, comparison)
- A diagram would be faster to understand than reading 5 bullets
- Students will remember the image better than text

**Skip when:**
- The concept is abstract/philosophical (no clear visual mapping)
- Text already communicates it clearly
- The visual would be decorative, not informational

**Decision**: "Will this image make the concept click 2x faster?" If not — skip.

---

## Meme Suggestions

Format with blue highlight:

```markdown
<mark style="background: #ABF7F7A6;">
[MEME]: 'Drake Hotline Bling' — верхняя панель: "Все требования сразу" (отвергает).
Нижняя панель: "Итерациями по кусочкам" (одобряет).
Точно передаёт суть выбора между Waterfall и Agile подходом.
</mark>
```

**Add ONLY when:**
- The meme template **precisely** maps to the concept being taught
- The humor reinforces the learning point (not just entertainment)
- The meme is widely known (students will recognize the template)

**Good fits:**
- "Drake Hotline Bling" → good practice vs bad practice, two contrasting approaches
- "Spiderman pointing at Spiderman" → two things that look identical but are different
- "This is fine" (dog in fire) → ignoring a growing problem
- "Distracted boyfriend" → choosing the wrong option when the right one is obvious

**Skip when:**
- The connection is forced or requires explanation
- No widely-known meme template fits naturally
- The topic is serious enough that humor would undermine it

**Test**: If you have to explain why the meme is relevant, it's not relevant enough. Drop it.

---

## Lesson Arc

1. **Hook** — Why should they care? Real-world problem or relatable scenario
2. **Build** — Concepts one by one, each with Socratic Q → Answer → optional Deep Dive
3. **Module Check** — Verification questions after each section
4. **Compare** — How concepts relate/differ (table)
5. **Final Check** — Comprehensive questions covering entire lesson
6. **Recap** — Summary table or 3-5 key takeaways in `> blockquote`

---

## Style

- Talk like a colleague, not a textbook
- Real examples from everyday life (not from code — audience has zero IT XP)
- Short sentences. Fragments OK.
- Humor welcome — keeps attention
- When slide has only bullet keywords, always add <mark style="background: #CACFD9A6;">teacher note</mark> with what to actually say
