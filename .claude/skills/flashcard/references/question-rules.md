# Flashcard Question Quality Principles

## Core Principle: Effortful Retrieval

**Testing Effect**: Answering strengthens memory 2x more than passive review—but only if the question forces genuine cognitive effort.

Three requirements:
1. **Specificity** — One retrievable idea, clearly defined
2. **No Pattern-Matching** — Answer isn't contained in the question
3. **Connection** — Linked to your broader knowledge network

---

## Question Type Effectiveness

| Type               | Best For                                            | Effectiveness |
| ------------------ | --------------------------------------------------- | ------------- |
| **Open-Ended Q&A** | Conceptual understanding, mechanisms, relationships | Best          |
| **Definition**     | Prerequisites in new domains                        | Moderate      |

**Strategy**: Create understanding with Q&A first, then use cloze for maintenance drilling.

---

## Question Templates

### Definition/Terminology
```
What is [concept]?
Define [term] in the context of [domain].
```

### Mechanism (How)
```
How does [mechanism] work?
What steps are involved in [process]?
```

### Causality (Why)
```
Why does [system] use [mechanism]?
What problem does [mechanism] solve?
What would happen without [mechanism]?
```

### Relationship (Comparison)
```
How does [A] differ from [B]?
What is the trade-off between [A] and [B]?
When would you choose [A] over [B]?
```

### Application
```
When would you use [concept] in practice?
How would you apply [principle] to [scenario]?
```

---

## Answer Writing Style

- **Use the term in the definition** — when defining a concept, use the word itself in the answer. E.g. "**Classifying** input into a discrete category", not "a technique that predicts categories"
- **Structure answers for readability** — break into bullet lists, use line breaks between distinct ideas, bold key terms. Never write a wall of text in a single line
- **Answer ≤ 15 words, max 3 bullet points** — if more is needed, split the card

---

## Memory Science Anti-Patterns

These eight anti-patterns cause the majority of Anki failures. Each has a fix.

| # | Anti-Pattern | Why It Fails | Fix |
|---|--------------|--------------|-----|
| 1 | **Enumeration trap** — 4+ items in answer | Recall collapses past 3 items; partial retrievals get marked "again" forever | Split into N cards using Enumeration Split Protocol |
| 2 | **Yes/no stems** | 50% correct by guessing; no real retrieval | Rephrase: "What is...?" / "How does...?" / "Why does...?" |
| 3 | **Interference (similar stems)** | Two cards with near-identical stems merge in memory | Add a distinctive token to each stem (system name, specific word from answer) |
| 4 | **Fused concepts** — two facts on one card | Multiple unknowns = can never be marked "good" honestly | One fact = one card |
| 5 | **Under-specified stem** — "What is an API?" | Too broad; multiple valid answers | Name the specific aspect: "What problem does REST solve over SOAP?" |
| 6 | **Hidden hints** — answer revealed in question | Trains recognition, not production | Remove descriptive context. Make it a pure retrieval cue. |
| 7 | **Multi-concept questions** — 5 ideas in one card | Can't isolate what's being tested | Split into atomic cards |
| 8 | **Orphan cards** — disconnected from knowledge network | "This feels like trivia" — no context | Link to MOC or related concepts |

---

## Enumeration Split Protocol

When a topic has 4+ items (pillars, types, rules, phases), **never list them all in one card**.

**Step 1 — Anchor card (count):** Always create a card asking the total count first.
**Step 2 — Numbered cards:** Then create one card per item, using ordinal numbers in the stem.

**Why:** Without the count card, numbered cards have no scaffold — the student can't tell if they've recalled all items. The anchor locks the set boundary in memory.

**Template:**
```
START
Coding Questions
Сколько фаз в SDLC?
Back: 7 фаз (Planning, Requirements, Design, Implementation, Testing, Deployment, Maintenance)
Tags: sdlc fundamentals
END

START
Coding Questions
Какова первая фаза SDLC?
Back: Planning — определение целей проекта, feasibility study, ресурсы
Tags: sdlc fundamentals
END
```

**Rules:**
- Count card comes first in the file
- Numbered cards use ordinal: первая / вторая / третья … (or 1st / 2nd / 3rd)
- Every numbered card stem must name the same distinctive token (topic + source) — prevents interference with other enumerations
- Do not use cloze for enumerations — atomic numbered cards are always clearer

---

## Interference Check (before syncing a batch)

Run this quick check on any new batch of 5+ cards:

1. Read each stem aloud, one after the other.
2. If two stems would return the same answer in your head after hearing only the first 5 words, they interfere.
3. Fix by adding a distinctive token to one of them — topic name, specific term from the answer itself.

**Example interference pair:**
- Card A: "Что такое REST?"
- Card B: "Что такое RESTful API?"
- Fix: Card A → "Что означает аббревиатура REST?" / Card B → "Что делает API RESTful — 6 constraints?"

---

## Common Pitfalls

| Problem                                                | Fix                                                                                |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| **Ambiguous question** (multiple valid answers)        | Specify the retrieval target: "What guarantees does TCP provide that UDP doesn't?" |
| **Hidden hints** (answer revealed in question)         | Remove descriptive context. Make it a pure retrieval cue.                          |
| **Multi-concept questions** (5 ideas in one card)      | Split into atomic cards. One concept per card.                                     |
| **Orphan cards** (disconnected from knowledge network) | Link to MOC or related concepts. Ask: "Does this relate to my broader knowledge?"  |
| **Question-answer mismatch** (depth/scope don't align) | Ensure both require same level of retrieval.                                       |

---

## Quality Checklist

Before adding a card, verify:

- [ ] **Single Concept** — One retrievable idea only
- [ ] **No Hints** — Question doesn't contain contextual clues
- [ ] **Connected** — Linked to MOC or related concepts
- [ ] **Unambiguous** — One clear, correct answer
- [ ] **Effortful** — Requires meaningful cognitive work (not trivial, not impossible)
- [ ] **Right Granularity** — Definition (low), How (mechanism), Why (reasoning), When (application)
- [ ] **Properly Phrased** — Phrased as a question, not a statement
- [ ] **Answer ≤ 15 words / max 3 bullet points** — split if more needed
- [ ] **No enumeration trap** — 4+ items → use Enumeration Split Protocol
- [ ] **Not yes/no** — rephrase as open question
- [ ] **No interference** — stem is distinctive from every other stem in the deck
- [ ] **Extracted from atomic note** — never generated from general knowledge alone

---

## Workflow: Fleeting → Atomic → Flashcards

1. **Fleeting Notes** — Capture raw insights
2. **Atomic Notes** — Refine into single complete-statement titles
   - Example: *"TCP maintains sequence numbers to detect missing packets"*
3. **Extract Questions** — Ask: "What would I need to *retrieve* to explain this?"
   - "How do sequence numbers help TCP detect missing packets?"
   - "Why is packet ordering important?"
4. **Create Cards** — Use Q&A format (recommended) or cloze

---

## Red Flags During Review

| Signal                                      | Meaning                        | Fix                                      |
| ------------------------------------------- | ------------------------------ | ---------------------------------------- |
| "I can never remember this"                 | Too hard or poorly defined     | Simplify or rewrite                      |
| "I knew the answer but don't understand it" | Surface-level pattern-matching | Remove hints; require deeper retrieval   |
| "This feels like trivia"                    | Orphaned, disconnected card    | Link to MOC; create related cards        |
| "I got it right but guessed"                | Ambiguous question             | Tighten phrasing                         |
| "This is too easy"                          | No retrieval challenge         | Combine with related concept; ask deeper |

---

## Key Insight

**The spacing algorithm is only as good as your question quality.**

A poor question wastes intervals. A good question produces lasting understanding through effortful retrieval.
