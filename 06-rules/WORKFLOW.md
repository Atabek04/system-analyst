# Obsidian → Anki Workflow

## Setup (One-time)

1. Install [AnkiConnect](https://ankiweb.net/shared/info/2055492159) addon in Anki
2. Configure AnkiConnect: Tools → Add-ons → AnkiConnect → Config:
```json
{
  "webCorsOriginList": ["app://obsidian.md"]
}
```
3. Install `Obsidian_to_Anki` plugin in Obsidian
4. Set scan folder: `05-Flashcards/`

## Daily Workflow

```
Atomic Note → Claude Code → 05-Flashcards/{category}/{topic}.md → Sync → Anki
```

1. **Create/Edit** flashcard `.md` file in `05-Flashcards/{category}/{topic}.md` structure
2. **Sync**: Click Anki ribbon icon (Anki must be running)
3. **Done** — cards created/updated in Anki

## Folder Structure

```
05-Flashcards/
├── {category}/
│   └── {topic}.md → TARGET DECK: Category::Topic
```

**Examples:**
- `05-Flashcards/java/concurrency.md` → Deck: `Java::Concurrency`
- `05-Flashcards/networking/tcp.md` → Deck: `Networking::TCP`

**Naming conventions:**
- Category folders: lowercase, kebab-case (e.g., `system-design/`)
- Topic files: lowercase, kebab-case (e.g., `tcp-handshake.md`)
- Deck mapping in `TARGET DECK:` header: `{Category}::{Topic}` (capitalized)

**Suggested categories:** `intro/`, `sdlc/`, `requirements/`, `bpmn/`, `uml/`, `data-modeling/`, `sql/`, `api/`, `architecture/`, `nfr/`, `metrics/`, `monitoring/`, `devops/`

Category folders organize related topics. Each file creates one Anki deck. Folders are created on-demand when generating flashcards.

## Updating Cards

- Edit the `.md` file directly
- Re-sync (same button)
- Progress preserved — only content updates

## Key Rules

- Anki must be running during sync
- One deck per file via `TARGET DECK:` header
- Delete card from `.md` → auto-deletes from Anki (if enabled)
