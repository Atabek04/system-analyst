# Lesson Pages — Rules

## Location
`3-permanent/{chapter}/{slug}.md` — one file per lesson, next to the chapter's atomic notes.
The filename is a short English kebab-case slug (`http-fundamentals`, `async-integration`): it becomes the URL and the `[[link]]` target. The Russian name lives in `title:`; link as `[[http-fundamentals|HTTP: как клиент и сервер разговаривают]]`.
Long-form student-facing content (`type: lesson` in frontmatter). Not an atomic note, but lives in the same tree so the wiki explorer shows it under its chapter.

Frontmatter (required):

```yaml
---
title: "HTTP: как клиент и сервер реально разговаривают"   # shown as page title (emoji allowed)
type: lesson
chapter: api-integration        # folder name; Russian label + order live in site/chapters.json
order: 2                        # position inside the chapter in the explorer
---
```

No `# H1` in the body — the title comes from frontmatter.
Images: `3-permanent/{chapter}/assets/{topic}/NN-name.png`, referenced as `![alt](assets/{topic}/NN-name.png)`.

## Publishing
The vault is rendered to GitHub Pages by Quartz (`site/`): push to `master` → Actions builds → `https://atabek04.github.io/system-analyst/`.
Local preview: `cd site && npm run dev` → `http://localhost:8123/system-analyst/`.

## Callouts (Obsidian syntax, rendered by both Obsidian and the site)

| Purpose | Markdown |
|---|---|
| Inline check-in (answer hidden until clicked) | `> [!question]- Вопрос…` + `> **Ответ:** …` |
| Tip / takeaway for the analyst | `> [!tip] …` |
| Warning / common mistake | `> [!warning] …` |
| Side note / reference | `> [!note] …` |
| Module Check question | `> [!question]- **1.** Вопрос…` + `> **Ответ:** …` |

The `-` after `]` makes the callout **foldable and collapsed by default** — always use it when the block contains an answer.

---

## Page structure (fixed order)

1. `# [EMOJI] Title`
2. **Hook** — one sentence, adult curiosity-gap (provocative question / contrarian fact / real SA-work stakes). NOT a fairy-tale. See pedagogy Rule 18.
3. `---`
4. **В этом уроке** — short bullet outline of what the page covers (the lesson plan lives HERE, inline — no separate plan file). Bold the key concepts.
5. `---`
6. **Problem setup** — the concrete problem this topic solves, before any solution. Real situation, no fictional protagonist, no story plot. 2-4 sentences. See pedagogy Rule 16.
7. **Concept sections (H2)** — one concept per H2. Each opens **problem → (let reader think) → solution → how it solves it**.
8. **Inline check-in** `> [!question]-` after each concept (max 2 questions)
9. **Типичная ошибка** (optional) — 1 concrete beginner mistake
10. `---` + **Module Check** — 4-6 foldable `[!question]-` callouts

---

## Writing rules

- Russian, casual, **"вы"** — pages are read by a group of students, so address them politely (на вы) while keeping the casual, friendly tone. Plural-polite, not formal-канцелярит: "подумайте", "представьте", "вы не сможете". Never "ты" forms ("подумай", "обрати внимание", "запомни" → "подумайте", "обратите внимание", "запомните").
- **Precise, no boilerplate** — cut filler and redundant words. No throat-clearing ("Итак, давайте разберёмся", "Как мы уже знаем", "Стоит отметить, что"), no restating the heading in the first sentence, no sentence that adds zero new info. Every sentence earns its place or gets deleted. Shorter is better when meaning is preserved.
- Max 2-3 sentences per paragraph, then line break
- **Problem-first, NOT story-first**: every concept opens with the *problem it solves*, lets the reader feel it (ideally with a question), then reveals the solution and explains how it solves that problem. This re-invents the engineering reasoning — the reader understands *why*, not just *what*. (pedagogy Rule 16)
- **First principles**: explain things down to the base need ("two programs must talk, what's the minimum they must agree on?"), never "it's the industry standard, everyone uses it". (pedagogy Rule 17)
- **No fairy-tales**: audience is adults. No fictional protagonist, no invented plot ("жил-был Вася..."). Analogies are allowed and encouraged (restaurant/waiter = API) — an analogy is a 1-2 sentence bridge to a mechanism, not a story. (pedagogy Rule 18)
- **Real stories and historical facts — yes, when they carry the lesson.** See the section below.
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

## Real stories and historical facts

A page that only defines things is forgettable. A **real** case the reader can check is what makes the lesson stick, and it is how you turn "here is a definition" into "here is what happens when nobody does this job". Use them — but only under the conditions below. This does **not** contradict "no fairy-tales" (Rule 18): that rule bans *invented* stories with a fictional protagonist. A documented event is evidence, not a fairy-tale.

**Admissible material:**
- **Failures and incidents** with a traceable cause and a price tag: Mars Climate Orbiter, Denver airport baggage system, Hershey's Halloween 1999, Hertz v. Accenture, Knight Capital.
- **Origins of a concept** when the origin explains the design: why HTTP was stateless, why REST was written as a dissertation, why the tree-swing cartoon predates the software industry.
- **Debunking industry folklore** the student will otherwise be taught as fact: the "IBM Systems Sciences Institute 1:6.5:15:100" chart, "Henry Ford said faster horses", the 100× cost curve without its caveats. Debunking is doubly valuable: it teaches the concept *and* teaches scepticism.
- **Where a term literally comes from** when it fixes the mental model: "bug", "daemon", "patch", "boilerplate".

**Four conditions — all must hold:**
1. **Directly related.** The story must illustrate *the exact concept of that section*, not IT in general. A famous outage in a lesson about ERD is decoration; cut it.
2. **Real and verifiable.** Named event, real figures, a source you actually checked. If you could not trace a number to a primary source, do not print it — or print it and say it is unverified folklore.
3. **Carries a conclusion.** Every story ends with the lesson for the analyst, spelled out in one or two sentences. A story with no "therefore" is entertainment and gets cut.
4. **Honest about the mechanism.** Do not flatten a story into a punchline. Mars Climate Orbiter is not "someone confused metres and feet" — NASA's board listed one root cause and eight contributing ones. Teaching the punchline teaches the wrong lesson.

**Dosage:** 1–3 per page, maximum. They are seasoning. A page that is 60% stories is a blog post, not a reference note.

**Never:** invented anecdotes, "one company I know", unsourced numbers that sound impressive, or a story retold to make a point it does not actually support.

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
- Each question is a foldable `> [!question]-` callout with the answer inside (hidden by default)
- Questions in Russian; code/HTTP examples stay in English
