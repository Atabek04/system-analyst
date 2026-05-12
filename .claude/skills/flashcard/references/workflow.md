# Obsidian → Anki Workflow

## Setup (one-time)

1. Install [AnkiConnect](https://ankiweb.net/shared/info/2055492159) addon in Anki.
2. Configure AnkiConnect: Tools → Add-ons → AnkiConnect → Config:
   ```json
   { "webCorsOriginList": ["app://obsidian.md"] }
   ```
3. Install `Obsidian_to_Anki` plugin in Obsidian.
4. Set scan folder: `05-Flashcards/`.
5. **Per deck — set insertion order:** Anki → click the deck → ⚙️ → Deck Options → New Cards → **Insertion Order: Sequential (oldest first)**. Do this once for every System Analyst sub-deck. This makes file order = study order.

---

## Daily workflow

```
Atomic Note → Claude Code → 05-Flashcards/{category}/{topic}.md → Sync → Anki
```

1. Create / edit the flashcard `.md` file in `05-Flashcards/{category}/{topic}.md`.
2. Write cards **in teaching order** (definition → mechanism → why → comparison → application). This is what the student will see in the same order.
3. Sync: click the Anki ribbon icon in Obsidian (Anki must be running).

---

## Card order in Anki — why file order matters

**How Anki orders new cards:**
- Each new card receives a sequential `due` position (1, 2, 3, …) when added to the deck.
- With Insertion Order = Sequential, Anki shows them in that order during review.
- Obsidian_to_Anki uses AnkiConnect `addNote` and processes the file top → bottom, so **the order of START/END blocks in the file determines the order of due positions**.

**Practical consequence:** the order in which a student first sees the cards is the order you write them in. Treat the file like a syllabus, not a dump.

**Caveat — re-syncing after mid-file insertion:**
If you later insert new cards in the middle of an existing file and re-sync, those new cards get appended at the **end** of the deck's queue (their due numbers are larger than any existing card). The old cards keep their old positions.

**Reposition recipe (when you need to fix order after edits):**
1. Open Anki → Browse.
2. Switch the view to **Cards** mode (not Notes).
3. Filter to the affected deck: `deck:"System Analyst::Requirements::01 - Fundamentals"`.
4. Sort the card list by **Sort Field** (or by tag) so they appear in the *intended* order.
5. Select all (Ctrl/Cmd-A) → menu **Cards → Reposition…**.
6. Set: Start position `1`, Step `1`, Randomize off, Shift off → OK.
7. All cards in the deck now have due positions matching the current sorted order.

**Avoid mid-file insertion when possible.** Append new cards at the end of the file when you can — append-only avoids the Reposition dance.

---

## Folder structure

```
05-Flashcards/
├── {category}/
│   └── {topic}.md → TARGET DECK: System Analyst::{Category}::NN - {Topic}
```

**Examples:**
- `05-Flashcards/requirements/user-story.md` → `System Analyst::Requirements::04 - User Story & INVEST`
- `05-Flashcards/sdlc/agile-scrum.md` → `System Analyst::SDLC::02 - Agile & Scrum`

**Naming conventions:**
- Category folders: lowercase, kebab-case (`requirements/`, `bpmn/`).
- Topic files: lowercase, kebab-case (`user-story.md`).
- `TARGET DECK:` header: `System Analyst::{Category}::NN - {Topic}` (capitalized, with the zero-padded numeric prefix on the leaf).

**Suggested categories:** `intro/`, `sdlc/`, `requirements/`, `bpmn/`, `uml/`, `data-modeling/`, `sql/`, `api/`, `architecture/`, `nfr/`, `metrics/`, `monitoring/`, `devops/`.

---

## ⚠️ Sub-Deck Ordering — always use numeric prefixes

Anki sorts the deck tree alphabetically (Unicode order) and provides **no UI for custom ordering**. Obsidian_to_Anki cannot override this — it just calls AnkiConnect's `createDeck`. The only working fix is naming.

**Rules for any deck path with siblings that have a natural sequence:**
- Use **zero-padded** numeric prefix: `01 - `, `02 - `, …, `20 - ` (not `1 - `, `2 - ` — `10` would sort before `2`).
- Format: `NN - Topic Name` (two digits, space, hyphen, space, topic).
- Use `00 - Введение` / `00 - Intro` for prefatory material so it appears first.
- Sequence-bearing siblings (chapters, lessons, parts) → always prefix.
- Independent siblings → prefix optional, but recommended for stable visual order.

**Renaming an already-synced deck:** changing the `TARGET DECK` line on a synced file makes the plugin create the *new* deck on next sync but does NOT migrate existing cards (Anki preserves card→deck linkage by card ID). To migrate without losing scheduling, do one of these in Anki *before* re-syncing:
1. Right-click the old deck → Rename → set the new full name (preserves all cards + reviews); or
2. Browse → select cards → Cards → Change Deck → pick the new deck.

Then re-sync from Obsidian.

---

## Updating cards

- Edit the `.md` file directly.
- Re-sync (same ribbon icon).
- Scheduling progress is preserved — only content updates. Card IDs are tracked via `<!--ID:-->` lines that the plugin writes back into the file after first sync.

---

## Pedagogy Gate sweep — before sync

Before clicking sync, walk the new cards in order and ask for each: **does every term used here already appear in an earlier card or note?** If a term is used before being introduced, either add a definition card before it, rephrase to avoid the term, or move the card to a later topic. See `question-rules.md` § Pedagogy Gate.

---

## Key rules

- Anki must be running during sync.
- One deck per file via `TARGET DECK:` header.
- Set Insertion Order = Sequential per deck (one-time).
- Write cards in teaching order; append-only when possible.
- Delete card from `.md` → auto-deletes from Anki (if enabled in plugin settings).
