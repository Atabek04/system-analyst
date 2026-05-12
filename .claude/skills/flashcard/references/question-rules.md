# Question Design Rules — System Analyst Flashcards

Audience: interns with zero IT experience. Russian content. `Coding Questions` note type (Front/Back).

---

## Core principle: effortful retrieval

The Testing Effect: answering strengthens memory ~2× more than passive review — but only if the question forces genuine cognitive effort. Three requirements:

1. **Specificity** — one retrievable idea, clearly defined.
2. **No pattern-matching** — the answer is not contained in the question.
3. **Connection** — the card lives inside the student's growing knowledge network (linked via MOC, prerequisite cards already exist).

If any of these fails, the spacing algorithm wastes intervals on a card that teaches recognition or guessing instead of recall.

---

## ⚠️ Pedagogy Gate — no unintroduced terms

**Before writing a card, every technical term in the stem and answer must already be introduced** — in an earlier atomic note in the same MOC chapter, in an earlier card in the same deck, or in this card itself (definition cards).

**Why this is non-negotiable for our audience:** interns review alone, with no teacher in the loop. A stem like «Чем REST отличается от SOAP?» when SOAP was never introduced creates a *knowledge gap* — the student either guesses, gives up, or marks "Again". The card then reschedules aggressively, and the gap compounds: each review reinforces frustration, not learning. With zero prior IT experience, every unexplained term is a wall.

**Sweep before each batch:**
1. List every technical term, acronym, tool name, framework, and English IT term in stem + answer.
2. For each term, confirm: is it already introduced in (a) the source note, (b) an earlier note in the chapter, or (c) an earlier card in the deck?
3. If a needed term is not yet introduced → choose one:
   - **Introduce first** — add a definition card *before* this card in the file.
   - **Rephrase** — drop the term, use plain Russian description.
   - **Postpone** — move the card to the topic where the term naturally lives.

**English IT terms (Sprint, Backlog, API, REST, BPMN, Agile, Scrum, Kanban, User Story, …) stay in English by project rule — but they still require a first-mention definition card.** "Stays in English" ≠ "students already know it".

**Common violations to watch for:**
- Comparison cards that introduce the *other* term for the first time («X отличается от Y тем, что …» — Y was never defined).
- Cards that use a tool name in the stem before the tool's purpose was established.
- Cards that assume vocabulary from a sibling MOC chapter the student hasn't reached yet.

---

## ⚠️ Anti-spoiler rules — stem must not leak the answer

If the front of the card shows the answer (in stem text, parenthetical translation, or reformulation), the card teaches recognition, not recall. Recognition decays; the student feels confident in review and blanks in real work.

**1. No answer-tokens in the stem.**
- ❌ `Что такое User Story в формате "Как [роль], я хочу [действие], чтобы [ценность]"?` → format is in the stem.
- ✅ `В каком формате пишется User Story?`

**2. No definition revealed by parenthetical.**
- ❌ `Что такое Backlog (упорядоченный список задач продукта)?`
- ✅ `Что такое Backlog?`

**3. Compound stems leak — split them.**
- ❌ `Что такое Sprint и сколько он длится?` (two questions; the second hints the first is about a time-boxed unit)
- ✅ Split: card A — `Что такое Sprint?` · card B — `Сколько обычно длится один Sprint?`

**4. Ordinal/enumeration cards: stem gives position, body gives item — never both.**
- ❌ `Назови 3-й принцип Agile — работающий продукт важнее документации` (item is in the stem)
- ✅ `Назови 3-й из 4 ценностей Agile Manifesto`

**5. Citation in stem is fine; meaning in stem is not.**
- `(по INVEST)` does not spoil. `(критерий, означающий что история независима)` spoils.

**Spoiler self-check after every card:** cover the answer, read only the stem. Can you guess the answer ≥70%? If yes — rewrite the stem.

---

## ⚠️ Granularity — one idea, one card

A card must be a **single retrievable proposition**. If the answer is a list, a sequence, or "X and also Y," the student cannot cleanly compare what they recalled against the back — they get partial credit and partial confusion. Split.

**Hard limits on the answer side:**
- ≤ 15 words **or** ≤ 3 short bullets, **only** if items are tightly bound (e.g., 3 conditions of one ruling).
- 4+ items → mandatory **Enumeration Split Protocol** (below).
- Two distinct propositions joined by «и» / «также» / «плюс» → split into two cards.
- A definition + a reason → usually two cards (one for the term, one for the why).
- A definition + an example → usually two cards.

**Hard limits on the stem side:**
- One stem = one question. No «X — и что такое Y?» compounds.
- Don't ask «что такое X и зачем оно нужно» on one card. Split: card A (definition) + card B (significance).

**The compare-test:** when the student answers aloud and flips the card, they should be able to mark hit/miss in **one** judgment. If the back contains 4 facts and they got 2 — Anki can't represent that. Too coarse → split.

**Bundled-event exception:** a single inseparable definition (e.g., a term + its mandatory companion: "Sprint Goal — единственная цель спринта") can stay on one card *if* the two parts are the unit of recall, not two facts. Use sparingly — when in doubt, split.

**Atomicity self-check:** read the answer. Count the propositions. If > 1 — would the student feel "I got the first part but not the second"? If yes → split before syncing.

---

## Enumeration Split Protocol

When a topic has 4+ items (phases, principles, types, rules), **never list them all in one card**.

**Step 1 — Anchor card (count):** create a card asking the total count first.
**Step 2 — Numbered cards:** create one card per item, using ordinal numbers in the stem.

**Why:** without the count card, numbered cards have no scaffold — the student can't tell if all items are recalled. The anchor locks the set boundary in memory.

**Template:**
```
START
Coding Questions
Сколько фаз в SDLC?
Back: 7 фаз — Planning, Requirements, Design, Implementation, Testing, Deployment, Maintenance
Tags: sdlc fundamentals
END

START
Coding Questions
Какова 1-я фаза SDLC?
Back: **Planning** — определение целей проекта, feasibility study, оценка ресурсов
Tags: sdlc fundamentals
END
```

**Rules:**
- Count card comes first in the file (and earlier in study order).
- Numbered cards use ordinals: первая / вторая / третья … (or 1-я / 2-я / 3-я).
- Every numbered stem names the same distinctive token (topic name) — prevents interference with other enumerations (`1-я фаза SDLC` vs `1-й принцип Agile`).
- Do not use cloze for enumerations — atomic numbered cards are always clearer.

---

## Benefit Taxonomy — sweep the source before closing the file

When extracting cards from a note, walk through this list and ask: *does the note contain this benefit type? If yes — is there a card for it?* Err on the side of more cards. The student memorizes through these cards — a missing benefit type = a missed lesson.

| # | Benefit Type | Example Stem |
|---|---|---|
| 1 | **Core definition** of a term | «Что такое User Story?» |
| 2 | **Acronym expansion** (one card per letter for INVEST/SMART/SOLID) | «Что означает буква V в INVEST?» |
| 3 | **Mechanism / how it works** | «Как работает HTTP-запрос — 4 шага?» (count card + 4 atomic) |
| 4 | **Why / motivation** — what problem this solves | «Какую проблему решает Acceptance Criteria?» |
| 5 | **Comparison / contrast** — X vs Y | «Чем FR отличается от NFR?» |
| 6 | **When to choose / decision rule** | «Когда выбирают Scrum, а не Kanban?» |
| 7 | **Real-world example** | «Приведи пример User Story для интернет-магазина» |
| 8 | **Pitfall / common mistake** | «Какая частая ошибка при оценке Story Points?» |
| 9 | **Tool / artifact** linked to the concept | «В каком инструменте обычно ведут Backlog?» |
| 10 | **Metric / measurement** | «Чем измеряют скорость команды в Scrum?» |
| 11 | **Standard quote / canonical source** | «Что говорит Agile Manifesto о работающем продукте vs документации?» |
| 12 | **Role / responsibility** | «За что отвечает Product Owner в Scrum?» |
| 13 | **Lifecycle event / trigger** | «Что происходит на Sprint Retrospective?» |
| 14 | **Constraint / limit** — hard rule of the framework | «Сколько максимум людей в Scrum-команде?» |
| 15 | **Counter-intuitive insight** — flips a naïve assumption | «Почему MVP — это не "минимально работающий продукт"?» |
| 16 | **Cross-reference** — concept reused in another chapter | «Где ещё в SDLC всплывает приоритизация — кроме Backlog?» |
| 17 | **Diagram element / notation** (BPMN, UML) | «Как в BPMN обозначается Exclusive Gateway?» |
| 18 | **Formula / quantitative rule** | «Как считается Velocity?» |
| 19 | **Anti-pattern / what NOT to do** | «Почему писать User Story от лица системы — ошибка?» |
| 20 | **Conceptual link to the analyst's job** — why this matters in practice | «Зачем системному аналитику знать про CJM?» |

**Sweep Protocol:**
1. After drafting the batch, re-read the source note section by section.
2. For each section, run down columns 1–20. Mark which types appear.
3. For every appearing type → confirm a card exists. If not → add it.
4. Pay special attention to: pitfalls, counter-intuitive insights, anti-patterns, and conceptual-link cards (often skipped — but high-value).

**Red flag:** if a note has 5 numbered factors and only a count card — you owe 5 atomic cards. If it has 3 examples and only 1 card — you missed two.

---

## Memory science anti-patterns

| # | Anti-pattern | Why it fails | Fix |
|---|---|---|---|
| 1 | **Enumeration trap** (4+ items in answer) | Recall collapses past 3 items; partial retrievals get marked "Again" forever | Enumeration Split Protocol |
| 2 | **Yes/no stems** | 50% correct by guessing; no real retrieval | Rephrase: «Что …?» / «Как …?» / «Почему …?» / «Когда …?» |
| 3 | **Interference (similar stems)** | Two cards with near-identical stems merge in memory | Add a distinctive token (system name, specific term from the answer) |
| 4 | **Fused concepts** — two facts on one card | Multiple unknowns = can never be marked "Good" honestly | One fact = one card |
| 5 | **Under-specified stem** — «Что такое API?» when many flavors exist | Too broad; multiple valid answers | Name the specific aspect: «Что такое REST API — в одном предложении?» |
| 6 | **Hidden hints** — answer revealed in question | Trains recognition, not production | Remove descriptive context; pure retrieval cue |
| 7 | **Multi-concept questions** — 5 ideas in one card | Can't isolate what's tested | Split into atomic cards |
| 8 | **Orphan cards** — disconnected from the network | "This feels like trivia" — no context | Link to MOC; create related cards; or delete |
| 9 | **Pedagogy gap** — uses a term not yet introduced | Student can't retrieve what was never taught | Introduce first / rephrase / postpone (see Pedagogy Gate above) |

---

## Interference check (before syncing a batch)

Run this on any new batch of 5+ cards:

1. Read each stem aloud, one after the other.
2. If two stems would return the same answer in your head after hearing only the first 5 words, they interfere.
3. Fix by adding a distinctive token to one — topic name, specific term from the answer.

**Example pair:**
- Card A: «Что такое REST?»
- Card B: «Что такое RESTful API?»
- Fix: A → «Что означает аббревиатура REST?» · B → «Какие 6 ограничений делают API RESTful?»

---

## Question reframing templates

| Weak | Strong |
|---|---|
| Является ли X частью Y? | Какую роль X играет в Y? |
| Сколько X существует? | Use as **anchor card** before any Enumeration Split. |
| Что такое X? (when many flavors) | Как определяют X в контексте [конкретный домен]? |
| Что лучше — X или Y? | В каких условиях выбирают X, а не Y? |
| Объясни X | Какой проблемой объясняется появление X? + Что делает X? + Когда применяется X? (три карты) |

---

## Answer writing style

- **Use the term in the definition.** «**User Story** — короткое описание функциональности с точки зрения пользователя» — not «It's a short description …».
- **Bold key terms** that the student should walk away with.
- **Bullets for multi-part answers**, ≤ 3 bullets, ≤ 15 words otherwise → split.
- **No walls of text** in a single line. Break by line / bullet.
- **English IT terms in English**, surrounding Russian. Never transliterate (`спринт` ❌ → `Sprint` ✅).

---

## Templates

| Source type | Template |
|---|---|
| Definition | «Что такое [концепт]?» |
| Acronym | «Что означает буква [N] в [акроним]?» |
| Mechanism | «Как работает [механизм] — в [N] шагов?» (count + atomic) |
| Why | «Какую проблему решает [концепт]?» |
| Comparison | «Чем [A] отличается от [B]?» |
| Decision | «В каких условиях выбирают [A], а не [B]?» |
| Example | «Приведи пример [концепт] для [домен]» |
| Pitfall | «Какая частая ошибка при [деятельность]?» |
| Anti-pattern | «Почему [практика] — это ошибка?» |
| Role | «За что отвечает [роль] в [фреймворк]?» |

---

## Pre-publication checklist (short)

Before syncing:

- [ ] Pedagogy Gate — every term already introduced
- [ ] Single concept; no compound stems
- [ ] Answer ≤ 15 words / ≤ 3 bullets
- [ ] No 4+ item lists (Enumeration Split applied)
- [ ] No yes/no stems
- [ ] No spoiler in stem (cover-the-back self-check passed)
- [ ] No interference with existing stems
- [ ] Linked to source atomic note
- [ ] Cards in teaching order in the file (definition before mechanism, mechanism before comparison)

> For the full post-batch gate, see `quality-checklist.md`.

---

## Key insight

**The spacing algorithm is only as good as your question quality and the order of introduction.**

A card that uses an unintroduced term wastes intervals on frustration. A card that splits enumeration into atomic units lets the algorithm actually work. A card written in teaching order lets the deck become a curriculum, not a pile.
