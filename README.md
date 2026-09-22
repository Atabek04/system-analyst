# System Analyst Academy

Open-source practice material for people becoming system analysts: a published wiki of lessons in
Russian, plus an AI prompt playground that teaches how to get real analysis work out of a model.

Free to use. Hosting and AI bills are covered by donations, or by my own pocket when the
donations are shy.

Wiki: <https://atabek04.github.io/system-analyst/>

## Layout

The repo root is both the Obsidian vault and a pnpm workspace.

| Path | What it holds |
|---|---|
| `2-MOC/`, `3-permanent/`, `05-Flashcards/`, `7-slides/` | The vault: roadmap, lesson pages, atomic notes, flashcards, slide decks. |
| `site/` | Quartz, which builds the published wiki from the vault. Runs on npm, outside the pnpm workspace. |
| `apps/web/` | Next.js app: the AI prompt playground. |

## Run

Node 20.9 or newer, pnpm via corepack.

```bash
corepack enable
pnpm install
pnpm dev
```

The playground serves on <http://localhost:3000>. The wiki is a separate stack:

```bash
cd site && npm install && npm run dev
```

## Working across machines

This repo is edited from more than one machine. Start every session with `git pull --rebase`.
A clone that skips it drifts by a restructure, not by a few commits.

## Licence

Not applied yet. The plan is Apache-2.0 for code and CC BY-SA 4.0 for the vault; see `TODO.md`.
