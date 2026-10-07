# Lesson Pages — Rules

## Why these rules exist

Readers are adult career-switchers with zero IT background, reading on their own (no instructor in the room). That has three consequences that drive every rule below:
- **Nobody is there to notice confusion.** The page itself must make the reader produce answers, or they will mistake "it read smoothly" for "I understood" (fluency illusion).
- **They will repeat what we write at interviews and at work.** A made-up number or a punchline version of a story damages their credibility, so every fact must be traceable.
- **They are adults with a goal.** Invented stories feel condescending; relevance to the analyst's job is what holds attention.

When a rule below looks arbitrary, the reason is one of these three.

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

**Quality bar:** `3-permanent/intro-system-analysis/why-analyst-exists.md`. Read it in full before writing a new page and match its density, tone and honesty about sources.

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
| Misconception refutation (see below) | `> [!failure] Частое заблуждение: «…»` + `> **На самом деле:** …` + `> **Почему так кажется:** …` |
| Module Check question | `> [!question]- **1.** Вопрос…` + `> **Ответ:** …` |

The `-` after `]` makes the callout **foldable and collapsed by default** — always use it when the block contains an answer. The misconception callout is NOT folded: the reader must see the refutation.

---

## Page structure (fixed order)

1. **Hook** — one or two sentences, adult curiosity-gap (provocative question / contrarian fact / real SA-work stakes / documented case). It must point at the page's **central question**, not a side detail. NOT a fairy-tale. See pedagogy Rule 18.
2. `---`
3. **В этом уроке** — short bullet outline of what the page covers. Bold the key concepts.
4. `---`
5. **Problem setup** — the concrete problem this topic solves, before any solution. Real situation, no fictional protagonist. 2-4 sentences. See pedagogy Rule 16.
6. **Concept sections (H2)** — one idea per H2, ~400 words max. Each opens **problem → open question to the reader → solution → how it solves it**.
7. **Inline check-in** `> [!question]-` after each concept (max 2 questions)
8. **Misconception callouts** — at most one per concept section, only where research found a real misconception; placed in the section it belongs to
9. **Типичная ошибка** (optional) — 1 concrete beginner mistake in practice
10. `---` + **Module Check** — 4-6 foldable `[!question]-` callouts

---

## Research before writing (mandatory research pack)

Do not write a single paragraph of the page before the research pack exists. Explanations are researched, not improvised: community-vetted analogies have been tested on thousands of confused beginners, and a written fact table is the only reliable guard against confident-but-wrong claims (ours or an AI's).

Collect, in this order:

1. **Target.** The page's central question; the base need behind the topic (first principles); what the reader already knows from earlier pages in the roadmap (this sets the assumed knowledge level).
2. **Precise definition and mechanism** from primary/authoritative sources (RFC, MDN, Scrum Guide, BABOK, ГОСТ, vendor docs). This anchors the technical definition at the end of each section.
3. **Misconceptions.** Search `"<concept> common misconceptions"`, `"beginners confuse X with Y"`, `"<понятие> частые ошибки"`, Q&A threads, interview-question lists. Keep only misconceptions actually found in a source. Note *why* each one is tempting.
4. **Explanations and analogies others use.** Search `"<concept> in simple terms"`, `"<concept> analogy"`, `"<concept> explained like I'm five"`, `"<понятие> простыми словами"`, `"<понятие> аналогия"`, in **both English and Russian**. For each candidate record: source URL, the mapping (which part corresponds to which), and **where it breaks**.
5. **Examples.** At least 3 varied realistic cases from SA work (Kaspi, Telegram, gov-services, a real-looking screen or requirement) plus 1 **near-miss non-example** ("это НЕ требование, потому что…").
6. **Real story (optional).** A documented case, origin, or folklore to debunk, directly tied to the concept (see "Real stories" below). Discard it if understanding it doesn't require the concept.
7. **Practitioner terminology.** How Russian-speaking analysts actually say it (прод, выкатка, груминг…), so the page matches what the student will hear at work.
8. **Fact table.** Every number, date, name and quote with its URL. Anything without a URL is either cut or printed with an explicit "не подтверждено" caveat. Prefer primary sources; for stories and numbers, two independent sources.
9. **Question bank.** The opening question, the "почему?" check-ins, and the Module Check — written **before** the prose, so the prose serves the questions.

When using subagents for research, they return this pack and nothing else. The writer writes the page.

---

## Writing rules

### Voice and language
- Russian, casual, **"вы"** — pages are read by a group of students, so address them politely (на вы) while keeping the casual, friendly tone. Plural-polite, not formal-канцелярит: "подумайте", "представьте", "вы не сможете". Never "ты" forms ("подумай", "обрати внимание", "запомни" → "подумайте", "обратите внимание", "запомните").
- **Precise, no boilerplate** — every sentence carries a fact, an example, or a step. No throat-clearing ("Итак, давайте разберёмся", "Как мы уже знаем", "Стоит отметить, что"), no restating the heading in the first sentence.
- **Banned filler** (typical AI tells that add nothing): «важно понимать, что», «играет ключевую роль», «в современном мире», «является неотъемлемой частью», «позволяет эффективно», «широко используется», «не секрет, что», «давайте рассмотрим». If a sentence still works after deleting the phrase, delete it.
- **Sentence length:** aim for ≤ 20 words on average, never over ~25. Long sentences split in two.
- Max 2-3 sentences per paragraph, then line break.
- **Numbers come with context:** a comparison point or a scenario ("78 минут: меньше, чем длится одна пара"), rounded unless precision matters ("около трети", not "32,7%").
- **Humor**: 1 dry joke per section max — situational, not forced.
- Never use em-dashes (—) in the page text. Use a colon, a comma, parentheses, or two sentences.

### Problem first, with a limit
- Every concept opens with *the problem it solves*, then an **open question to the reader** ("Как бы вы передали серверу, какое из четырёх действий нужно?"), then the solution and how it solves the problem. (pedagogy Rules 7, 16)
- Keep the "try it yourself" step **short and intuitive**: one question the reader can answer from everyday experience. Never ask a beginner to solve a complex multi-part task before the explanation; for material with many interacting parts, instruction-first works better for novices (Ashman, Kalyuga & Sweller 2020).
- When revealing the solution, **compare it with the guesses a reader most likely made** ("Если вы подумали «добавить в адрес слово delete», это близко: ранние API так и делали. Проблема в том, что…"). The comparison is where the learning happens.
- Say once per page that a wrong guess is expected and useful.

### Concept order: ADEPT
For each core concept, in this order (concrete first, abstract last):
1. **Analogy** — one per idea, with an explicit mapping, and a **«Где аналогия ломается»** sentence stating at least one limit. An analogy without its limit is not finished: unflagged analogies are a known source of misconceptions.
2. **Diagram** — for any mechanism or process, placed next to the text that explains it, with a caption saying what to look at.
3. **Examples** — at least 2 varied concrete examples, then 1 near-miss non-example. Show the examples first, then name the principle.
4. **Plain-language definition.**
5. **Technical definition** — phrased the way a real spec, standard, or interview would phrase it.

Analogies are a 1-2 sentence bridge to a mechanism, not a story (pedagogy Rule 18). Don't stretch one analogy across the whole page, and don't mix two analogies for the same idea.

### Misconceptions are refuted explicitly
For each misconception found in research: state it, refute it, explain why it seemed plausible. Use the `[!failure]` callout. Where possible, name the category error ("API это не программа, а договорённость"). Refutation texts outperform plain explanation for correcting misconceptions (meta-analysis of 44 comparisons, g ≈ 0.41).

### Structure that carries meaning
- **Headings state the claim**: «Сервер не помнит предыдущий запрос», not «Stateless». Information-carrying words first.
- Key point of the section in its first paragraph.
- Bold only the 1-3 key terms per section.
- **Mechanisms and causes are explained in connected prose** with "потому что", "поэтому", "из-за этого". Bullet lists are only for genuinely parallel items; bulleted reasoning breaks the causal chain.
- Content decides the count: not every list has 3 or 5 items, not every section is the same length.
- **Coherence test** for every paragraph, image, GIF, fun fact, and story: "if I delete this, is the concept harder to understand?" If not, delete it. Nothing decorative after a section's conclusion: interesting-but-irrelevant material measurably reduces learning (seductive-details meta-analyses, g ≈ −0.33).

### Terms and assumed knowledge
- Define every new term inline on first mention, including "obvious" ones (сервер, запрос, база данных). Experts badly underestimate what a novice doesn't know (curse of knowledge).
- Introduce at most ~5 new terms per section. If a mechanism has several parts, name the parts first ("Кто участвует: …"), then explain how they interact (pre-training).
- Keep the assumed level consistent: don't explain a trivial idea in depth and then skip a hard one.
- Write for one reader: an adult career-switcher who has read the earlier pages of the roadmap and nothing else.

### Examples
- **Examples**: Telegram, Instagram, Kaspi Bank, 2GIS — apps students actually use. Realistic requirements and screens, never "foo/bar" or «как пользователь, я хочу пользоваться системой».
- For a skill (writing a User Story, reading an API response, writing JQL): show one **fully worked example** with the reasoning at each step, then a partly completed one for the reader to finish, then a blank task.

### First principles, no fairy-tales
- **First principles**: explain down to the base need ("two programs must talk, what's the minimum they must agree on?"), never "it's the industry standard, everyone uses it". (pedagogy Rule 17)
- **No fairy-tales**: audience is adults. No fictional protagonist, no invented plot ("жил-был Вася..."). (pedagogy Rule 18)
- **Real stories and historical facts — yes, when they carry the lesson.** See the section below.

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

## Real stories and historical facts

A page that only defines things is forgettable. A **real** case the reader can check is what makes the lesson stick, and it is how you turn "here is a definition" into "here is what happens when nobody does this job". Use them — but only under the conditions below. This does **not** contradict "no fairy-tales" (Rule 18): that rule bans *invented* stories with a fictional protagonist. A documented event is evidence, not a fairy-tale.

**Admissible material:**
- **Failures and incidents** with a traceable cause and a price tag: Mars Climate Orbiter, Denver airport baggage system, Hershey's Halloween 1999, Hertz v. Accenture, Knight Capital.
- **Origins of a concept** when the origin explains the design: why HTTP was stateless, why REST was written as a dissertation, why the tree-swing cartoon predates the software industry.
- **Debunking industry folklore** the student will otherwise be taught as fact: the "IBM Systems Sciences Institute 1:6.5:15:100" chart, "Henry Ford said faster horses", the 100× cost curve without its caveats. Debunking is doubly valuable: it teaches the concept *and* teaches scepticism.
- **Where a term literally comes from** when it fixes the mental model: "bug", "daemon", "patch", "boilerplate".

**Four conditions — all must hold:**
1. **Directly related.** The story must illustrate *the exact concept of that section*, not IT in general. Test: the reader needs the concept to understand the story. A famous outage in a lesson about ERD is decoration; cut it.
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

## Questions: retrieval, not recognition

The reader must **produce** an answer (recall, explain, predict, apply), not just recognise a correct one: retrieval practice is one of only two study techniques rated "high utility" (Dunlosky et al. 2013). The hidden answer explains **why**, not just what.

At least one check-in per page asks **«почему?»** or «объясните, зачем…» (self-explanation).

### 6 question types

| Type | Pattern | Example |
|---|---|---|
| **Recall** | "Объясните X своими словами" | "Что такое idempotency?" |
| **Use-case** | "Какой метод/инструмент если..." | "Пользователь отправляет форму регистрации — какой HTTP метод?" |
| **Spot the bug** | Show broken example, find mistake | `GET /users` with body `{"id":5}` — что не так? |
| **Compare** | Two similar concepts, one sentence each | "Чем PUT отличается от PATCH?" |
| **Design mini-task** | No single right answer, tests thinking | "Придумайте 3 endpoint для каталога товаров" |
| **True/False + explain** | Statement → True/False → justify | "DELETE /users/5 удаляет всех пользователей. True or False?" |

---

## Module Check rules

- 4-6 questions, mixed types
- At least 1 **spot-the-bug** and 1 **use-case** per module check
- **Interleave confusable concepts** (Risk vs Issue, DoD vs AC, functional vs non-functional) instead of grouping questions by topic
- **1-2 spaced questions** on concepts from earlier lessons of the roadmap, when the topic connects
- Each question is a foldable `> [!question]-` callout with the answer inside (hidden by default)
- Questions in Russian; code/HTTP examples stay in English
- No recap section: the Module Check replaces the summary

---

## Pre-publish checklist

Run this against the draft before saving. Fix, don't explain away.

1. The hook points at the page's central question, not a side detail.
2. Every concept opens with a problem and an open question to the reader before the solution; the reveal compares likely guesses with the real answer.
3. No complex multi-part task is asked before the explanation.
4. Every term is defined at first use, including "obvious" ones; ≤ ~5 new terms per section.
5. Each core concept follows ADEPT, technical definition last.
6. Every analogy has a mapping and a «где аналогия ломается» sentence; one analogy per idea.
7. Each abstract definition has ≥ 2 concrete examples and 1 near-miss non-example.
8. Misconception callouts: at most one per section, each found in research (not invented), each with «почему так кажется».
9. Coherence test passed: nothing decorative, nothing after a conclusion.
10. ≤ 3 real stories; each needs the concept to be understood, is sourced, ends with a stated conclusion, and keeps the real mechanism.
11. Every number, date, name and quote is in the fact table with a URL, or is marked unverified.
12. Headings state claims; key point in each section's first paragraph.
13. One idea per section, ~400 words max; mechanisms in connected prose, lists only for parallel items.
14. Check-ins require producing an answer; at least one «почему?»; hidden answers explain why.
15. Module Check: 4-6 questions, mixed types, ≥ 1 spot-the-bug and ≥ 1 use-case, confusable concepts interleaved.
16. Sentences ≤ ~25 words; numbers have a comparison point; no banned filler.
17. "вы" everywhere, no "ты" forms.
18. Zero em-dashes (—) in the page text.
19. English terms follow the format & translate rules; no рунглиш.
20. Frontmatter complete; no `# H1`; the page is linked from the roadmap with `**Урок:**`.
