---
name: flashcard
description: Generate Anki flashcards from Obsidian atomic notes for the System Analyst Bootcamp. Use this skill whenever the user asks to create flashcards, extract cards from notes, update flashcard files, sync notes to Anki, or says "/flashcard". Also trigger when the user adds new [[]] linked notes to a MOC chapter that already has a flashcard file — flashcards should be created immediately to stay in sync. Even if the user just says "add cards for X" or "flashcards for the new notes", use this skill.
---

# Flashcard Generator — System Analyst

Generate Anki flashcards for the System Analyst Bootcamp using the `Coding Questions` note type (fields: `Front`, `Back`) under the `System Analyst::` deck hierarchy.

**Audience:** interns with zero IT experience. Every card must be reachable from what the student has already seen.

## Before generating cards

Read these reference files (first time, or when in doubt):

1. **`references/syntax.md`** — note type, deck hierarchy, START/END format, file header, deck setup
2. **`references/question-rules.md`** — question quality, anti-spoiler rules, granularity, Benefit Taxonomy, anti-patterns
3. **`references/workflow.md`** — Obsidian → Anki sync, folder structure, card-order workflow
4. **`references/quality-checklist.md`** — post-batch gate, run after every batch

Also read the target flashcard file if it exists — check for duplicates and continue numbering / ordering from where it left off.

---

## Quick Reference

### Card format

```
START
Coding Questions
{question}
Back: {answer}
Tags: {tags}
END
```

Multi-line answers: `Back:` on the question line, content below with bullets/bold. Blank line between `END` and next `START`. Never add `<!--ID:-->` lines — auto-generated on sync.

### File header

```markdown
TARGET DECK: System Analyst::{Category}::NN - {Topic}
Tags: {default-tags}
**Related:** [[source note]]

---
```

### File location

`05-Flashcards/{category}/{topic}.md` — one file per topic, matching the deck.

---

## The four pillars

Every card passes four gates before it syncs. They're listed here as headlines; the *why* and the failure modes are in the references.

### 1. Pedagogy Gate — no unintroduced terms

**Never use a term, concept, acronym, tool, or framework in a card before it has been explicitly introduced in an earlier note or earlier card in the same deck.**

**Why:** the student is reviewing alone. If a stem says «Чем REST отличается от SOAP?» but SOAP was never introduced, the student hits a knowledge gap and either guesses or marks "Again" without learning anything. Anki then reschedules the card aggressively, compounding the failure. For zero-IT-experience interns, every unexplained term is a wall.

**How to apply:**
- Before writing a card, list the technical terms in stem and answer. For each term, confirm it appears in the source note, in an earlier note in the MOC chapter, or in an earlier card in this deck.
- If a needed term hasn't been introduced yet → either (a) introduce it first (add a definition card before this one), or (b) rephrase the card to avoid the term, or (c) postpone the card to a later topic where the term lives.
- "English IT terms stay in English" (Sprint, Backlog, API, Agile, BPMN, …) does **not** exempt them from introduction — they still need a first-mention definition card.

### 2. Granularity — one retrievable proposition per card

A card is a single fact the student either reproduces or doesn't. If the back contains 4 facts and they recall 2, Anki can't represent that — the card is too coarse. Hard limits:

- ≤ 15 words **or** ≤ 3 short bullets in the answer.
- 4+ items → mandatory **Enumeration Split Protocol**: one count card + one numbered card per item.
- Two propositions joined by «и» / «также» / «плюс» → split.
- Definition + reason → usually two cards (one for the term, one for the why).
- Stem side: one question per stem. No «X — а ещё что говорит Y?» compounds.

The compare-test: when the student flips the card, can they mark hit/miss in **one** judgment? If no — split. See `references/question-rules.md` for the full granularity section and the Benefit Taxonomy that drives extraction thoroughness.

### 3. Anti-spoiler — front must not leak the back

If the stem contains the answer (verbatim, paraphrase, or revealing parenthetical), the card teaches recognition, not recall — and recognition decays. Five anti-spoiler rules in `references/question-rules.md`. Quick self-check after each card: cover the answer, read only the stem — if you can guess ≥70% of the back, rewrite the stem.

### 4. Card order — preserve teaching sequence

Anki assigns each new card a sequential `due` position when added. Obsidian_to_Anki adds cards top→bottom from the file → **file order = insertion order = study order**.

- Write cards in the file in the order a teacher would introduce them: definition first, then mechanism, then comparison, then application.
- Within a topic, group by atomic note. Within a note, follow the note's own narrative.
- Anki deck setup: **Deck Options → New Cards → Insertion Order = Sequential (oldest first)**. Set this once per deck before first sync.
- If you insert cards mid-file later and re-sync, Anki appends NEW cards to the end (their due numbers are larger). To restore order: Anki Browse (Cards mode) → select the topic's cards → sort by file position or by tag → **Cards → Reposition** → start at 1, step 1.
- See `references/workflow.md` for the Reposition recipe and sub-deck naming (`NN -` zero-padded prefix to fix Anki's alphabetic deck-tree sort).

---

## Workflow

1. **Read the source atomic note(s)** — never generate cards from general knowledge alone.
2. **Read references** (especially first time, or for unfamiliar topic).
3. **Read the existing flashcard file** if any — check duplicates, continue ordering.
4. **Pedagogy sweep:** list every technical term you intend to use. Confirm each is already introduced.
5. **Extract questions** by walking the Benefit Taxonomy in `question-rules.md` — definition / mechanism / why / comparison / example / pitfall / tool / metric / standard quote / counter-intuitive insight.
6. **Write cards in teaching order** following the format. One concept per card. Count card before any enumeration.
7. **Run the post-batch gate** in `references/quality-checklist.md`. Any failing card is fixed or deleted before sync.
8. **Sync** via the Anki ribbon icon in Obsidian (Anki must be running).

---

## Key rules at a glance

- **Language**: Russian for content; English IT terms stay in English (still need first-mention introduction).
- **Audience**: zero IT experience — define every term on first mention; casual tone; «ты» not «вы».
- **One concept per card** — split anything compound.
- **No hints in stem** — answer not derivable from question.
- **Use the term in the definition** — «**Sprint** — это короткий цикл разработки …», not «It's a short development cycle …».
- **Bullets for multi-part answers**, ≤ 3 bullets, ≤ 15 words otherwise split.
- **Enumeration trap (4+ items)** → Enumeration Split Protocol (count card + N atomic cards).
- **Interference check** — read stems aloud; if two return the same answer in 5 words, add a distinctive token.
- **Only from atomic notes** — never from MOC bullet points without a backing `[[]]` linked note.
- **No `<!--ID: …-->`** lines — auto-generated.
- **Sub-deck names** with sibling sequence → zero-padded numeric prefix `01 - `, `02 - ` (`10` would sort before `2`). Use `00 - Введение` for prefatory material.
