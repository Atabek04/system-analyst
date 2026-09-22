# Practice workspace: build materials

What the trainers can actually be built from, verified 2026-09-23 against package registries and
licence files rather than documentation claims. Versions move; licences move less.

Target stack is the existing one: Next.js 16, React 19, TypeScript, Tailwind 4, pnpm.

---

## Markdown editor with Obsidian-style live preview

**Use CodeMirror 6.** Start from [`@atomic-editor/editor`](https://github.com/kenforthewin/atomic-editor)
(MIT, React 19, 0.6.2), and expect to own the decoration plugin eventually.

The candidates split into two families, and the split decides it rather than any feature list.

Tree-based editors (TipTap, Milkdown, BlockNote, Lexical, ProseMirror, Plate, Novel, Remirror) hold
the document as a node tree. The characters `##` **exist nowhere in the model**; markdown is a
serialisation at the edges. Revealing markup on the cursor line would mean synthesising characters
that are not in the document and intercepting edits to them. None of them do it and the
architecture is against it.

CodeMirror 6 holds the document as the markdown text itself, which is also what Obsidian uses
([its docs](https://docs.obsidian.md/Plugins/Editor/Editor+extensions) say an Obsidian editor
extension *is* a CodeMirror 6 extension). Reveal-on-cursor is then: skip the hide decoration for
ranges intersecting the selection.

The recipe, roughly 200 lines:

1. `@codemirror/lang-markdown` parses to a Lezer tree; `syntaxTree(state)` yields `HeaderMark`,
   `EmphasisMark`, `CodeMark` nodes
2. A `ViewPlugin` applies `Decoration.replace({})` over each mark node — not `display:none`, which
   leaves the characters taking width and catching clicks
3. `Decoration.line()` styles the line so a heading looks like one
4. `update()` fires on `update.selectionSet` and drops decorations overlapping the cursor's line
5. `atomicRanges` makes a hidden range behave as one unit for arrow keys and backspace; without it
   the hiding is unusable

### Why this matters more than editor polish

Our content is `.md` files in git with YAML frontmatter, `[[wiki-links]]`, Obsidian callouts and
`START/END` flashcard blocks. Every tree-based editor round-trips those through a model with no node
type for them: reformatting noise at best, silent loss at worst. In CodeMirror the buffer is the
file, so that class of bug cannot occur.

### Licence traps, confirmed

- **TipTap's Markdown import/export is a paid platform feature**, from $59/month. That is precisely
  the feature needed. ([pricing](https://tiptap.dev/pricing))
- **BlockNote** is MPL-2.0 with its `xl-*` packages dual GPL-3.0/commercial at $195/month.
- **Plate Plus** is a paid per-developer licence.
- Novel (Jan 2025), Remirror (Aug 2025) and ink-mde (Sep 2024) are stale; rule them out.

The risk in `@atomic-editor/editor` is bus factor: 145 stars, ~6K weekly downloads, two
contributors. Acceptable, because the load-bearing part is one `ViewPlugin` that can be lifted from
[`codemirror-live-markdown`](https://github.com/blueberrycongee/codemirror-live-markdown) (MIT) or
rewritten from the docs, on top of `@codemirror/view` at 10M weekly downloads. The fallback is
forking a plugin, not migrating an editor.

`@uiw/react-codemirror` (MIT, 3.2M/week) is the maintained React binding.

---

## Diagram as code

**Mermaid 12 client-side for ERD, sequence, class and state. A server round trip for C4.**

| | ERD | Sequence | Class | State | C4 | BPMN | Runs in browser |
|---|---|---|---|---|---|---|---|
| Mermaid 12 | yes | yes | yes | yes | experimental, no auto-layout | **no** | yes |
| PlantUML | yes | yes | yes | yes | yes | **no** | only via CheerpJ, commercial licence |
| D2 | yes | yes | yes | yes | no | **no** | yes, but 8.2 MB over the wire |
| Structurizr | no | no | no | no | yes | **no** | no, Java only; Lite is end-of-life |
| Kroki | yes | yes | yes | yes | yes | yes | no, server always |

**No diagram-as-code language renders BPMN in a browser.** Not Mermaid, not PlantUML, not D2, and
none plans to. That constraint is what forces a second editor for BPMN rather than a preference.

### Mermaid notes

Version 12 made ELK the default layout engine, costing ~480 KB gzip that v11 did not, and requires
ES2024 and Node ≥ 22.12. Pin `layout: 'dagre'` to keep v11's weight and appearance.

Bundle size is a bundling problem, not a library problem: the everything-IIFE is 1.52 MB gzip, the
ESM entry point is ~10 KB and per-diagram chunks load lazily (ERD 30 KB, sequence 116 KB raw).
Tree-shaking does not help because the registry is dynamic; import
`mermaid/dist/mermaid.esm.min.mjs` explicitly, as the bare specifier can resolve to a build that
defeats splitting. It touches `document` at module scope, so lazy-import inside an effect.

Since we render untrusted student input, set `securityLevel: 'sandbox'` (renders in a sandboxed
iframe). The default `strict` still renders into our DOM.

`mermaid.parse(text, { suppressErrors: true })` validates without an LLM and `mermaid.parseError`
gives line, token and expected-token. ER, sequence, class and state are all still on the old Jison
parser, so there are no column spans for inline underlines, and no Mermaid linter exists.

---

## BPMN

**bpmn-js plus bpmnlint. There is no competitive alternative** — bpmn-visualization is view-only,
the Camunda modellers are desktop or paid SaaS, and draw.io gives an iframe rather than an API.

**The licence carries a watermark condition.** bpmn-js is verbatim MIT with one inserted paragraph
requiring that the bpmn.io logo linking back to bpmn.io stays visible and unobscured in rendered
diagrams; `addProjectLogo()` in `BaseViewer.js` enforces it. Commercial and SaaS use are otherwise
unrestricted. Usable, at the price of a permanent third-party link in every diagram — a product
decision, not a legal blocker.

There is no official React wrapper and no usable third-party one (`react-bpmn` is from 2020;
`bpmn-js-react` has 25 weekly downloads and no licence field). Write a ~40-line client-only wrapper
around the modeller in a `useEffect`.

**bpmnlint is the reason to pick this stack.** MIT, and it runs in the browser: its rules execute
against the moddle object tree with no Node APIs, so a precompiled config bundles. Its 28 built-in
rules are already the pedagogical checks worth making — `start-event-required`, `end-event-required`,
`no-disconnected`, `no-implicit-split`, `fake-join`, `superfluous-gateway`, `label-required`,
`conditional-flows`. Custom rules are a factory returning `{ check(node, reporter) }` walking plain
objects. This is correctness grading with no model call and no reference solution.

---

## Canvas libraries

**Excalidraw for free-form sketching. React Flow for structured node-and-edge work.**

**tldraw is disqualified, and worth knowing about before anyone prototypes on it.** Its licence
permits development only, forbids production use without a commercial key, and forbids interfering
with key enforcement — and it is technically enforced: in production the SDK logs errors and
**stops rendering the editor after five seconds**. The free Hobby key is non-commercial only.
There is no free watermarked commercial tier, and pricing is "contact sales" with no public figure.
It was MIT only through 1.x; 2.0.0 changed it, 4.0.0 added the kill switch. The 100-day trial is an
evaluation path, not a launch path.

**Excalidraw is plain MIT**, no watermark, no key — I checked for a dual-licensed subdirectory and
there is none. Its programmatic API is the differentiator: `convertToExcalidrawElements` builds a
scene from a simplified skeleton with labels and bound arrows, which is how a reference answer would
be generated; `exportToSvg`, `serializeAsJSON`, `updateScene` and `getSceneElements` cover the rest.
Catch: it pins a transitive `@radix-ui/react-tabs@1.0.2` whose peers stop at React 18. Runtime works;
under pnpm it warns. Fix with a workspace override. Releases are roughly annual while the hosted app
ships continuously. Next 16 with Turbopack is unverified — budget a spike.

**React Flow** (`@xyflow/react`, MIT, 8.2M/week) is the healthiest package in this whole report and
is an order of magnitude lighter than Excalidraw. It is a node-and-edge editor, not a drawing
surface, which for ERD and architecture work is the *advantage*: the output is structured JSON that
can be graded automatically. Note the v12 rename — the old `reactflow` package is frozen — and that
the export is no longer default.

Hello Interview embeds Excalidraw for exactly this purpose, self-hosted, serialising the scene and
feeding it to the model.

---

## Comparing a submission to a reference

**Decompose into a rubric of independent checks. Do not build a graph-edit-distance engine.**

### Why not

There is no production-grade graph edit distance implementation in JavaScript. npm's "graph edit
distance" results are all string or tree distance; `subgraph-isomorphism` died in 2017;
`@graphrs/isomorphism` has zero downloads; `graphology-similarity` is an empty stub whose README
says "TODO"; `graphology-assertions` compares node *keys*, which is not isomorphism. Process mining
in JS barely exists, and the one live suite (Ebi, from RWTH Aachen) consumes event logs and
stochastic Petri nets — the wrong input shape when you have two models and no log.

More importantly, the literature says the expensive approach is not worth it. Dijkman, Dumas, van
Dongen, Käärik and Mendling compared label-matching, structural (graph edit distance) and
behavioural similarity for business process models and found all three comparable, with structural
only slightly ahead. ([PDF](https://kodu.ut.ee/~dumas/pubs/BetaWPSimilarity.pdf)) And a single
scalar is useless as teaching: "your diagram is 0.72 similar" tells a student nothing.

Exact isomorphism is the wrong target anyway — a correct answer will use different names, extra
attributes and a different decomposition, and isomorphism gives no partial credit.

### What works

Automatic ER-diagram marking against a specimen solution reports **91% of grades within 0.5 marks
of human graders**, falling to ~87% when supertype/subtype relationships appear
([Thomas, Waugh & Smith](https://www.researchgate.net/publication/42789859_Experiments_in_the_automatic_marking_of_ER-Diagrams)).
The method is feature matching, not distance.

The pipeline, cheapest step first:

1. **Parse both sides to a normalised model.** Do not regex Mermaid text: `erDb` exposes
   `getEntities()` and `getRelationships()` with typed attributes, PK/FK markers and cardinality on
   both sides, reached via `mermaid.mermaidAPI.getDiagramFromText(text).db`. Caveat: `mermaidAPI` is
   marked deprecated, so pin the version and cover it with a test. For BPMN, `bpmn-moddle` is the
   supported path with no caveat.
2. **Normalise labels**: lowercase, strip separators, singularise, stem.
3. **Match by name** with `fastest-levenshtein`, optionally resolving leftovers as an assignment
   problem via `munkres`. String metrics handle `Cusomer` → `Customer` and miss `Customer` vs
   `Client` entirely; synonymy is where they break. A small sentence-embedding model via
   `@huggingface/transformers` is the middle ground, at ~25 MB, so server-side or lazily loaded.
4. **Score independent boolean checks**, each one a point and a line of feedback: does this entity
   exist, does it have a primary key, does this relationship exist, is its cardinality right, is
   there a join table for the M:N.
5. **Run reference-free structural rules first** — bpmnlint's 28 for BPMN; for ERD, every entity has
   a primary key, no M:N without a join table, no orphan entity. Highest value, lowest cost, and it
   works before any reference solution exists.
6. Report unmatched student entities as absent from the reference rather than penalising them.

### The trap

**`bpmn-js-differ` will not do this, despite describing itself as semantic diffing.** It matches
elements by `id`, because it is built to diff two revisions of the same file. A student's diagram
has entirely different generated ids, so every element reports as both added and removed. It is
useful for one student's own version history and useless for grading.

### Where it fails

A student who models the same domain with a legitimately different but correct decomposition —
splitting `Address` out of `Customer`, choosing a different valid gateway pattern — scores badly,
and no graph algebra fixes that; it is a semantic equivalence judgement. Design for instant feedback
on the mechanical majority, with the remainder flagged for human or model review, not for a grade
anyone would put on a transcript.
