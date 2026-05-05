# Flashcard Quality Checklist — System Analyst

Run this gate after generating each batch of cards. Any failing card is fixed or deleted — never synced as-is.

---

## ⚠️ Check these THREE first — most common violations

**A.** [ ] **Pedagogy Gate** — every technical term, acronym, tool, and English IT term used in stem and answer is already introduced in an earlier note or earlier card in this deck. No knowledge gaps.

**B.** [ ] **Granularity** — answer is one retrievable proposition. ≤ 15 words or ≤ 3 bullets. No 4+ item lists (Enumeration Split applied if so). No two propositions joined by «и» / «также».

**C.** [ ] **Anti-spoiler** — cover the answer, read only the stem: cannot guess ≥ 70 % of the back. No definition revealed by parenthetical. No item named in an enumeration stem.

---

## Technical checks

1. [ ] `START` / `END` wraps every card; blank line between cards.
2. [ ] Note type line is `Coding Questions`.
3. [ ] No manually added `<!--ID: …-->` lines.
4. [ ] `TARGET DECK:` header present; uses `System Analyst::{Category}::NN - {Topic}` with zero-padded numeric prefix.
5. [ ] `Tags:` line present on every card.
6. [ ] Multi-line answers: `Back:` on the question line, content below with bullets / bold.
7. [ ] No HTML tags; no Cyrillic transliteration of English terms (`спринт` ❌ → `Sprint` ✅).

---

## Atomicity & information load

8. [ ] Single concept per card.
9. [ ] Answer ≤ 15 words **or** ≤ 3 bullets.
10. [ ] No 4+ items in answer (else Enumeration Split applied: count card + N atomic).
11. [ ] No "definition + reason" or "definition + example" fused on one card.
12. [ ] Stem is one question (no «X — а ещё что Y?» compounds).

---

## Memory science

13. [ ] Stem is distinctive from every other stem in the deck (interference check passed — read 5 stems aloud, none collide).
14. [ ] Stem is not yes/no — uses Что / Как / Почему / Когда / Зачем / Чем … от ….
15. [ ] Stem uniquely specifies the answer (not «Что такое API?» when many flavors exist).
16. [ ] Stem contains no hint (answer not derivable from the question alone).
17. [ ] No context leak — if the card is part of an enumeration, the stem gives position, the answer gives item. Never both.

---

## Pedagogy & sequencing

18. [ ] Every term in stem and answer is already introduced (Pedagogy Gate, in detail).
19. [ ] Card is placed in the file in teaching order — definition before mechanism, mechanism before comparison, comparison before application.
20. [ ] Count cards precede their numbered atomic cards.
21. [ ] Linked to a source atomic note (extracted from a real `[[]]` link, not invented).

---

## Coverage (Benefit Taxonomy sweep)

22. [ ] Walked the 20-type Benefit Taxonomy in `question-rules.md` against the source note. Every appearing benefit type has at least one card. Pitfalls / counter-intuitive insights / anti-patterns specifically checked (commonly skipped).

---

## Style

23. [ ] Term is used in its own definition («**Sprint** — это …», not «It's …»).
24. [ ] Russian content; English IT terms in English with surrounding Russian.
25. [ ] Bold key terms in the answer where it aids the takeaway.

---

## Pass condition

**25 / 25 → sync.**
**Anything less → fix or delete.**

---

## Top five killers — fast pre-check

If you are short on time, at minimum verify these five before syncing:

1. **Pedagogy gap** — any term not yet introduced → introduce / rephrase / postpone.
2. **Enumeration trap** (4+ items in answer) → split via Enumeration Split Protocol.
3. **Yes/no stem** → rephrase with Что / Как / Почему.
4. **Interference** (stem too similar to another card) → add distinctive token.
5. **Spoiler in stem** (cover-the-back test fails) → rewrite stem.

---

## Related files

- `SKILL.md` — main rules and the four pillars (Pedagogy / Granularity / Anti-spoiler / Card order).
- `question-rules.md` — full anti-spoiler rules, granularity protocol, Benefit Taxonomy, anti-patterns, reframing templates.
- `syntax.md` — START/END format, deck hierarchy, Anki note-type setup.
- `workflow.md` — Anki sync, Insertion Order setting, Reposition recipe, sub-deck naming.
