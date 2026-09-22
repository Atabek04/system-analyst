# TODO

Open-source System Analyst academy: the published wiki plus an AI prompt playground that teaches
people to get useful analysis work out of a model.

Free to use. Hosting and AI bills are covered by donations, or by my own pocket when the
donations are shy.

## Must

- [x] Scaffold Next.js 16 + TS + Tailwind v4 in `apps/web/`
- [ ] Prompt playground, one loop end to end
	- [ ] Task picker: short SA briefs (write a use case, find the gaps, draft a UML prompt)
	- [ ] Prompt editor with the task brief pinned beside it
	- [ ] Run against the model and stream the answer
	- [ ] Rubric as JSON per task, reviewable by PR
	- [ ] Graded feedback on the prompt itself: what it left out, what to add
- [ ] BYOK: user's own API key, client-side only, never stored on our server
- [ ] Hard daily spend ceiling in code for the donated key
- [ ] README and CONTRIBUTING
- [ ] Licence split: Apache-2.0 for code, CC BY-SA 4.0 for the vault
- [ ] CI for `apps/web`: lint, typecheck, build on every PR

## Should

- [ ] Move the wiki off Quartz onto Next.js in `apps/web`
	- [ ] Render `3-permanent/` chapters, wikilinks and backlinks
	- [ ] Carry over the current theme and the chapter grid
	- [ ] Keep every published URL working
	- [ ] Retire `site/` and `sync.mjs` only once parity is proven
- [ ] Mermaid rendered client-side, syntax checked without spending a token
- [ ] Deploy `apps/web`; the wiki stays on Pages until the migration lands
- [ ] Open Collective and GitHub Sponsors, opened only once there is a real bill
- [ ] Funding page reading a committed ledger JSON

## Could

- [ ] BPMN prompt tasks
- [ ] Mock interview mode
- [ ] Vetted prompt library, one entry per SA task
- [ ] Accounts and progress tracking
- [ ] English locale beside Russian

## Won't (this cycle)

- Case-based graded exercises with UI mockups: the repo pruned that material, the playground is the focus
- Custom payment flow: Open Collective already gives a public ledger and a fiscal host
- Mobile app
