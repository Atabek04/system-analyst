# Notion Wiki Pages — Rules

## Location
`8-notion/{topic}/{topic}.md` — one file per topic, imported to Notion.
Not atomic notes. Long-form student-facing content.

## Import workflow
Write `.md` → Notion > Import > Markdown → manually convert (~5 min):

| Markdown | Notion block |
|---|---|
| `> ❓ ...` | 💬 Callout (yellow) |
| `> ⚠️ ...` | ⚠️ Callout (red) |
| `> 💡 ...` | 💡 Callout (blue) |
| Module Check questions | Toggle blocks (answer hidden) |

Everything else (headers, bold, lists, code, dividers) imports cleanly.

---

## Page structure (fixed order)

1. `# [EMOJI] Title`
2. **Hook** — one sentence, adult curiosity-gap (provocative question / contrarian fact / real SA-work stakes). NOT a fairy-tale. See pedagogy Rule 18.
3. `---`
4. **В этом уроке** — short bullet outline of what the page covers (the lesson plan lives HERE, inline — no separate plan file). Bold the key concepts.
5. `---`
6. **Problem setup** — the concrete problem this topic solves, before any solution. Real situation, no fictional protagonist, no story plot. 2-4 sentences. See pedagogy Rule 16.
7. **Concept sections (H2)** — one concept per H2. Each opens **problem → (let reader think) → solution → how it solves it**.
8. **Inline check-in** `> ❓` after each concept (max 2 questions)
9. **Типичная ошибка** (optional) — 1 concrete beginner mistake
10. `---` + **Module Check** — 4-6 toggle questions

---

## Writing rules

- Russian, casual, **"вы"** — pages are read by a group of students, so address them politely (на вы) while keeping the casual, friendly tone. Plural-polite, not formal-канцелярит: "подумайте", "представьте", "вы не сможете". Never "ты" forms ("подумай", "обрати внимание", "запомни" → "подумайте", "обратите внимание", "запомните").
- **Precise, no boilerplate** — cut filler and redundant words. No throat-clearing ("Итак, давайте разберёмся", "Как мы уже знаем", "Стоит отметить, что"), no restating the heading in the first sentence, no sentence that adds zero new info. Every sentence earns its place or gets deleted. Shorter is better when meaning is preserved.
- Max 2-3 sentences per paragraph, then line break
- **Problem-first, NOT story-first**: every concept opens with the *problem it solves*, lets the reader feel it (ideally with a question), then reveals the solution and explains how it solves that problem. This re-invents the engineering reasoning — the reader understands *why*, not just *what*. (pedagogy Rule 16)
- **First principles**: explain things down to the base need ("two programs must talk, what's the minimum they must agree on?"), never "it's the industry standard, everyone uses it". (pedagogy Rule 17)
- **No fairy-tales**: audience is adults. No fictional protagonist, no invented plot ("жил-был Вася..."). Analogies are allowed and encouraged (restaurant/waiter = API) — an analogy is a 1-2 sentence bridge to a mechanism, not a story. (pedagogy Rule 18)
- **Humor**: 1 dry joke per section max — situational, not forced
- English terms: format & translate by the rules below (never bare English in a Russian sentence)
- **Examples**: Telegram, Instagram, Kaspi Bank, 2GIS — apps students actually use
- Define every new term inline on first mention: "Endpoint — это адрес, по которому сервер слушает. Типа как дверь в магазин."

---

## English terms: format & translate

Never drop a bare English word into a Russian sentence (рунглиш: «backend становится client»). Every English term hits exactly one branch, **first match wins**:

1. **Literal code / protocol token** → `` `backticks` ``. HTTP methods, status codes, field/param names, endpoints, identifiers, file names: `GET`, `POST`, `200 OK`, `GET /users`, `id`, `status`. Always.
2. **Has a settled natural Russian word** → write it in **Russian**. Give the English in brackets **once**, at first mention, for recognizability; after that, Russian only. «клиент (Client)», «сервер (Server)», «база данных (Database)», «запрос (Request)», «ответ (Response)», «блокирующий (blocking)». Don't force English where a normal Russian word exists.
3. **Industry term with no good Russian** (translating it would be worse than the original) → keep **English**:
   - it's the section's **key concept** → **bold** first mention + define inline: **Frontend**, **Backend**, **API**.
   - incidental mention / informal shorthand → *italic* first mention: *sync*, *async*, *endpoint*.

Cross-cutting rules:
- Translation in brackets appears **once** (first mention), never every time.
- Russian leads, English follows in brackets: «блокирующий (blocking)», NOT «blocking (блокирующий)».
- Bold = the concept a section teaches (Russian if it exists, else English). Italic = incidental English that isn't code and isn't a headline concept.
- Re-read as a native: if a phrase sounds like a calque or рунглиш («становится client»), rewrite it («становится клиентом»).

---

## Always ground explanations in real sources (research before writing)

Before writing the explanation of any concept, **search the internet first** for the clearest existing way to explain it. Do not invent explanations or analogies from your own head — research how good teachers, docs, and communities actually explain it, then adapt.

**How to search** — append these qualifiers to the concept name:
- `"<concept> in simple terms"` — plain-language explanations
- `"<concept> analogy"` / `"<concept> explained with analogy"` — battle-tested mental models
- `"<concept> real world example"` / `"<concept> for beginners"` — concrete examples that land

**Workflow per concept:**
1. Search the concept + one or more qualifiers above
2. Read 2-3 of the clearest explanations / analogies the community actually uses
3. Pick the one that fits an adult SA learner; adapt it to Russian + our examples (Kaspi, Telegram, gov-services)
4. Verify the analogy doesn't break on the important detail (no misleading bridges — pedagogy Rule 0, pattern B)

**Why:** community-vetted analogies are tested on thousands of confused beginners — they beat anything invented on the spot. This also guards against confident-but-wrong explanations. Researched > improvised, always.

---

## Callout placement rules

- Place callout **right after the concept explanation** — not at section end
- **Max 2 questions per callout** — never stack 3+ questions
- Never place 2 callouts back-to-back without content between them

---

## 6 question types

| Type | Pattern | Example |
|---|---|---|
| **Recall** | "Объясни X своими словами" | "Что такое idempotency?" |
| **Use-case** | "Какой метод/инструмент если..." | "Пользователь отправляет форму регистрации — какой HTTP метод?" |
| **Spot the bug** | Show broken example, find mistake | `GET /users` with body `{"id":5}` — что не так? |
| **Compare** | Two similar concepts, one sentence each | "Чем PUT отличается от PATCH?" |
| **Design mini-task** | No single right answer, tests thinking | "Придумай 3 endpoint для каталога товаров" |
| **True/False + explain** | Statement → True/False → justify | "DELETE /users/5 удаляет всех пользователей. True or False?" |

---

## Module Check rules

- 4-6 questions, mixed types
- At least 1 **spot-the-bug** and 1 **use-case** per module check
- All converted to **Toggle blocks** in Notion (answer hidden by default)
- Questions in Russian; code/HTTP examples stay in English
