# Practice trainers — spec

Graded practice for system analyst artifacts. Evidence and sources in
[`researches/practice-trainers.md`](researches/practice-trainers.md) (market),
[`researches/grading-design.md`](researches/grading-design.md) (how to grade) and
[`researches/practice-workspace-tech.md`](researches/practice-workspace-tech.md) (build materials).

**What it is for**: a student can explain BPMN and freeze on «сделайте USER-сервис». This closes
that by reps: real briefs, the artifacts an interview asks for, feedback fast enough to retry the
same evening.

**What it competes with**: hand-graded practice at ~$290 for six tasks with a five-day turnaround,
and human review at $100–250/hour. Nothing in any language grades an analyst artifact today.

---

## Trainers

Each is a brief in, one artifact out, graded, retryable. Later trainers assume the earlier ones.

- **T0 · Clarify the brief** — a vague one-liner in, your questions out; nothing is drawn.
  - Graded on what was *not* asked: missing stakeholder, unstated NFR, unhandled exception path.
  - Also graded on committing: an assumption stated and justified beats a question that stalls.
  - Use the published instruments: Bano's 5-category mistake taxonomy, and Shen & Breaux's
    14-criterion question rubric, where a model conditioned on a named failure mode agreed with a
    human analyst 81% of the time.
  - Label each turn three ways: productive, neutral, harmful. The neutral class is the one that
    matters — a correct question can still waste a turn, and that is where redundancy is penalised.
  - Machine-checkable: nothing. Pure rubric.
  - Weighting to start from, published by a decade-old RE course: requirement completeness 40%
    (measured against what was *elicited*, not against the brief), redundancy 10%, format 10%, and
    **completeness and depth of the interview analysis 40%**. Half the grade is already process.
  - Needs no editor and no canvas. Build first.
- **T1 · Requirements and user stories** — the clarified brief into stories with Gherkin AC.
  - Graded against QUS's 13 criteria, five of which are set-level: grade the backlog, not a story.
  - Machine-checkable: EARS patterns, requirements smells, and AQUSA's syntactic criteria.
  - Markdown only.
- **T2 · BPMN** — model the as-is, then the to-be.
  - Graded on process correctness, then on whether the to-be actually removes the pain named.
  - Machine-checkable: bpmnlint's 28 rules plus a course plugin — disconnected nodes, implicit
    splits, fake joins, unlabelled gateways.
  - Needs `bpmn-js`. No diagram-as-code language renders BPMN in a browser.
- **T3 · ERD** — entities, relationships, cardinality, constraints.
  - Graded on entity coverage, key correctness, cardinality, join tables for M:N.
  - Machine-checkable: most of it, against a reference, via `erDb`'s typed entities and relations.
  - Mermaid `erDiagram`. The best-evidenced trainer to automate: feature matching against a
    specimen lands 91% of grades within half a mark of human graders.
- **T4 · Use case and sequence** — actors, and the call chain between systems.
  - Graded on participant coverage, ordering, and failure branches.
  - Machine-checkable: participants present, every call has a return or a stated fire-and-forget.
  - Mermaid `sequenceDiagram`.
- **T5 · API design** — URIs, methods, status codes, payloads.
  - Graded on resource modelling, correct method and status semantics, idempotency.
  - Machine-checkable: a large share, by linting the OpenAPI before the model ever runs.
  - Author OpenAPI directly.
- **T6 · Component / C4** — services, boundaries, what talks to what.
  - Graded on boundary choices and whether every T5 endpoint has an owner.
  - Machine-checkable: every component reachable, no orphan.
  - Needs a server round trip; Mermaid's C4 has no auto-layout.
- **T7 · Final boss: the full test task** — one vague brief, every artifact, one sitting.
  - Mirrors the real «сделайте USER-сервис»: use cases, stories with AC, sequence, business rules,
    NFRs.
  - Graded end to end, including consistency *between* artifacts — the thing no single trainer sees.
  - Unlocks only after T0–T6. This is the portfolio piece.

---

## Workspace

- **Three panes** — brief left, artifact centre, AI right and collapsible.
  - AI hidden by default, so the first attempt is unaided.
- **Markdown editor with live preview** — headings render; raw `##` returns on the cursor line.
  - CodeMirror 6, as Obsidian uses. Tree-based editors cannot do this: the `##` is not in their
    document model, and they mangle our frontmatter, wikilinks and callouts on the way through.
- **The canvas changes with the task** — markdown for T0–T1, Mermaid for T3–T6, `bpmn-js` for T2.
  - Every mode must emit parseable text. That is what makes grading possible at all.
- **Assumption log, always visible** — each unresolved ambiguity, the call made, the reason.
  - The scarcest skill in the research, and nothing on the market captures it.
- **Attempt history with a diff** — rerun the same brief, see what changed.
  - Five-day feedback allows one attempt per task. Unlimited retries are the entire wedge.
- **Free-form canvas only where structure would lie** — Excalidraw (MIT, no watermark) if needed.
  - Not tldraw: production use needs a paid key and the editor stops rendering after five seconds
    without one.

---

## Grading

- **Deterministic checks run first** — EARS patterns, requirements smells, bpmnlint, OpenAPI lint,
  ERD parse.
  - Free, instant, no reference solution needed, and they cover 81–91% of criteria where measured.
- **Reuse published instruments; invent nothing** — ISO 29148, EARS, QUS, Bano's mistake taxonomy.
  - QUS over INVEST for user stories: 13 criteria, validated, and its authors reject INVEST as a
    mnemonic.
- **Pairwise comparison, not absolute scoring** — "which of these two is better" beats "score this".
  - +0.16 QWK, and variance across model choice collapses sixfold. Runs in production at 566k
    submissions elsewhere.
  - Measure order-flip rate per model; run both orders where it is high.
- **Seed a one-line rubric and refine it against graded work** — do not hand-author a long one.
  - Auto-refined from one line beat a careful human rubric, 0.48 QWK against 0.26.
  - Anchor examples earn their context; rubric prose does not.
- **Score extracted features, never raw prose** — the strongest fairness result available.
  - Demographics are 78% predictable from raw text, ~60% from rubric-derived features.
- **Many independent binary criteria, weighted, aggregated by formula** — HealthBench's shape.
  - `clip(Σ(met × weight) / Σ max(0, weight), 0, 1)`, weights in [−10, +10], per-axis subscores.
  - Binary beats Likert in four independent lines of evidence; graded scales mostly manufacture
    adjacent-level errors.
- **Route by confidence and keep a random slice** — the threshold is the cost dial.
  - A separate, much simpler model predicts "will this match a human"; defer the bottom decile.
  - Validate it by asymmetry: the grader must degrade *faster* than humans in the flagged bucket.
- **Per-level bars per task: junior, middle, senior** — what each looks like *on this brief*.
  - What makes a score feel earned. Copy it from Hello Interview; it is their best idea.
- **Grade the link between conversation and artifact, both directions** — nobody ships this.
  - Faithfulness: artifact claims traceable to the transcript, which catches invented requirements.
  - Coverage: elicited facts that reached the artifact, which catches what was learned then dropped.
- **Feedback authored, retrieved, and rationed** — not freely generated.
  - Bounded output variance, and a second pass strips anything that gives the answer away.
  - Four comments per round, never two on one sentence, never the same comment twice.
- **Every comment cites the moment it refers to** — feedback without evidence is not shown.
  - The cheapest guard against generically encouraging AI feedback, and it makes claims checkable.
- **The student's feedback and the curator's grade are rendered under different policies.**
  - Never show the student a band label; phrase gaps in the past tense, never as missing experience.
- **Let the student contest the feedback** — interactive beat one-way across 500 essays.
  - Turns a grade into a conversation instead of a verdict, and surfaces bad rubric items.
- **Feedback first; a score late, soft, or never.**
  - Expect 0.6–0.7 QWK in an interpretive domain like ours, not the 0.87 essay-scoring headlines.
  - The best model on requirements quality finds 47% of expert-identified issues at an 11% false
    flag rate. Design around that number.
- **A fresh context per submission** — history drifts grading standards away from human experts.
- **North star: the next task solved unaided** — not rubric score, not satisfaction.
- **Anti-gaming is scenario design** — novel briefs, not surveillance.
  - Custom questions drop AI-assisted pass rates below baseline; reskinned familiar ones do nothing.
  - Apply a random subset of criteria per run; never use a cheap model for a final grade.
- **Flag, don't fail, the legitimately-different answer** — a valid alternative decomposition will
  score badly, and no algorithm fixes that.

---

## Sequencing

- [ ] Write T0's brief and three band exemplars, plus a one-line seed rubric — not a long rubric
- [ ] Grade real submissions by hand; keep every disagreement. ~200 is where rubric refinement works
- [ ] Refine the rubric *from* that graded set, and report the grader's agreement against two
      humans alongside human-versus-human — the bar is matching a competent analyst
- [ ] Build T0 end to end: brief, editor, submit, feedback, retry
- [ ] Publish T0's per-level bars and the rubric's shape free — not the full criterion list, which
      students would optimise against; proven acquisition channel, and it is vault content already
- [ ] T1, reusing everything but the rubric
- [ ] T3 next, not T2 — ERD automates best and needs only Mermaid
- [ ] T2 once the `bpmn-js` watermark is accepted as a product decision
- [ ] T4, T5, T6
- [ ] T7 last; it is an integration test of the other seven

Rules that order: **the graded set is the asset**, not the rubric — the rubric is derived from it and
the grader is glue, so a curator marking by hand is building the thing everything else depends on.
And the licence-entangled decisions (bpmn-js watermark, Excalidraw's React 19 peer conflict,
Mermaid's bundle) should land only after we know anyone is doing the exercises at all.

---

## Open decisions

- **Whether to build this now at all.** `founder-rules.md` puts AI-graded assignments at #8, behind
  core curriculum (3 of 22 chapters written) and a live curator that does not exist.
- **Whether the market is there.** The one comparable product has 17 students at ~$290 — about $5k
  lifetime on Russia's largest course platform. Small market, bad marketing, or demand suppressed by
  price and latency; nothing gathered distinguishes them.
- **Pricing, and whether to serve it by country.** DesignGurus' checkout drops a $373 list price to
  $119 for Kazakhstan. A single global price is wrong in one direction or the other.
- **Whether a score ships at all**, or only feedback and a per-level bar.
- **What a grader agrees at in Russian.** Every agreement figure in the research is from English
  corpora; morphology, tokenisation and available judge models all differ.
- **Whether a second competent analyst can be found to label against.** The whole build order rests
  on it, and single-instructor dependency is already on the honest-weakness list.
- **Whether students accept a machine grade on professional judgement.** NAPLAN's automated scoring
  passed every psychometric bar and was cancelled politically.
