# System Analyst Academy

Open-source practice material for people becoming system analysts, written in Russian.

Free to use. Hosting and AI bills are covered by donations, or by my own pocket when the
donations are shy.

Wiki: <https://atabek04.github.io/system-analyst/>

## The problem this is aimed at

Most candidates can explain BPMN, UML and User Stories fluently, then freeze when an interviewer
hands them a one-line brief — "build a user service" — and asks for the artifacts. One Russian
bootcamp puts that at
[90% of candidates](https://habr.com/ru/companies/otus/articles/992264/).

The research says the same in colder words. A systematic review of requirements engineering
education finds academic projects sterile next to industry practice, with students short on
realistic stakeholder contact and, above all, poor at handling vagueness
([Daun et al., 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9119682/)). Hiring guides describe
the symptom as it shows up in a portfolio: user stories with no acceptance criteria, process maps
with no decision points, requirements tied to no test
([Readynez](https://www.readynez.com/en/blog/business-analyst-career-roadmap-2026-starting-without-experience/)).

It is a practice gap, not a knowledge gap. More explanation does not close it, and the courses that
do set real tasks grade them by hand, so a student gets one attempt and waits days for an answer.

So the aim is reps: real briefs, the artifacts an interview actually asks for (use cases, user
stories with acceptance criteria, ERDs, sequence and component diagrams, API designs, BPMN), and
feedback fast enough to try again the same evening. The evidence behind that is in
[`docs/researches/practice-trainers.md`](docs/researches/practice-trainers.md).

## What runs today

The wiki. Lessons and atomic notes, 3 chapters of a planned 22.

The graded practice above is not built; neither is the AI prompt playground. `TODO.md` is the
backlog, in order.

## Layout

The repo root is both the Obsidian vault and a pnpm workspace.

| Path | What it holds |
|---|---|
| `2-MOC/`, `3-permanent/`, `05-Flashcards/`, `7-slides/` | The vault: roadmap, lesson pages, atomic notes, flashcards, slide decks. |
| `chapters.json` | Chapter titles and their order, in Russian. |
| `docs/researches/` | Market and product research behind the roadmap, with sources. |
| `apps/web/` | Next.js app: the wiki at `/wiki`, and the prompt playground to come. |
| `site/` | Quartz, which builds the published wiki from the vault. Runs on npm, outside the pnpm workspace. Retired once `apps/web` is deployed. |

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
