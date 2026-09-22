# Practice trainers: market evidence

Findings behind the decision to build graded practice, gathered 2026-09-23. Market figures go
stale; re-check prices and competitor features before quoting them anywhere public.

---

## The gap we are aiming at

Candidates can talk about the notations and cannot produce the artifacts.

> 90% кандидатов отлично говорят про BPMN, UML и User Stories, но когда им дают тестовое задание
> в духе «сделайте сервис пользователей», они теряются.
> — [OTUS, Habr](https://habr.com/ru/companies/otus/articles/992264/)

In English: 90% of candidates speak well about BPMN, UML and User Stories, and lose their footing
when handed a test task along the lines of "build a user service".

This is a practice gap, not a knowledge gap, and no amount of extra lesson content closes it.
Courses sell explanation; the interview tests production under a vague brief.

The same finding in the research literature, which matters because the Habr figure is one
bootcamp's own estimate and is marketing as much as measurement:

- A systematic review of requirements engineering education (152 papers) reports academic projects
  as sterile next to industry practice, students short on realistic stakeholder contact and domain
  expertise, and vagueness in specifications as what they handle worst. Negotiation and
  prioritisation are near-absent from teaching altogether.
  [Daun, Grubb, Stenkova & Tenbergen, *Requirements Engineering*, 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9119682/)
- Elicitation is among the most communication-intensive activities in software engineering and gets
  limited explicit treatment in undergraduate curricula.
  [Berrezueta-Guzman, Metaj & Wagner, 2026](https://arxiv.org/abs/2604.07211)
- Career guides name the symptom as it appears in a junior portfolio: user stories with no
  acceptance criteria, process maps with no decision points, requirements linked to no test or
  outcome.
  [Readynez](https://www.readynez.com/en/blog/business-analyst-career-roadmap-2026-starting-without-experience/)

Two of these cut against a trainer built only on artifacts. The review finds elicitation already
over-represented in teaching (~40% of activity-focused studies) while negotiation and
prioritisation are absent, and it names vagueness as the thing students fail at. So the scarce
skill is not drawing the diagram or even asking questions, it is deciding what to do when the
brief will not resolve.

## What the test task actually demands

The standard Russian тестовое задание is a one-paragraph brief, e.g. *«Разработать USER-сервис:
регистрация по email, верификация, восстановление пароля, админка»*. Expected artifacts:

| Artifact | What it has to show |
|---|---|
| Use Case diagram | Actors and their interactions, readable in ~30 seconds |
| User Stories | INVEST, with acceptance criteria in Given/When/Then |
| Sequence diagram | System-to-system calls: email service, auth, DB; where it breaks |
| Business rules | Concrete constraints: email unique, unverified accounts purged after 72h |
| NFRs | Load (100 RPS), availability (99.9%), password hashing |

Graded on, in rough priority order:

1. Asking clarifying questions **before** drawing anything
2. Naming hidden risks and edge cases
3. Covering NFRs at all
4. Handling integration failure scenarios
5. Audit logging and data consistency

The ranking matters more than the list: elaborate diagrams drawn against an unquestioned brief are
the single most common failure, ahead of any notation mistake. A trainer that grades the artifact
and ignores the questioning step would reward exactly the wrong behaviour.
[Source](https://habr.com/ru/companies/otus/articles/992264/)

## Competitors

### Stepik — «Системный аналитик: практикум с ручной проверкой»

The closest existing product, and it runs the same artifact chain we planned.

- Chain: требования → User Story Map → Use Case → BPMN → ER-модель → REST API, 6 tasks, one project
- 26 890 ₽ (~$290), ~4 h/week, tasks unlock sequentially
- Graded by hand by the author, **turnaround up to 5 business days**
- Students work in Google Docs and draw.io; the platform holds no workspace
- **17 enrolled**
- [Course page](https://stepik.org/course/253170/promo)

Two openings follow directly. Feedback latency of five days per task permits roughly one attempt
per artifact; seconds permits many, which is what deliberate practice needs. And a split workspace
across Google Docs and draw.io means nothing can be checked automatically, because nothing is
structured.

The enrolment number is the uncomfortable part and should not be argued away. Seventeen students at
26 890 ₽ is roughly $5k of lifetime revenue for the exact product being proposed here, on the
largest Russian course platform. Three readings fit: the market for paid analyst practice is small;
the course is new or badly marketed; or price and five-day latency suppress demand that exists.
Only the third reading supports building this, and nothing gathered so far distinguishes them. This
is the assumption to test before the build, not after.

### Hello Interview — the interaction model to learn from

Not a competitor (software engineering interviews, English) but the reference for how step-gated
AI-reviewed practice works. Run by Optick Labs; claims 100k+ engineers.

**The framework**, with its published timings:

| Step | Time | Note |
|---|---|---|
| Requirements | ~5 min | Functional, then quantified non-functional; capacity math explicitly skipped unless it changes the design |
| Core entities | ~2 min | A bulleted list only, because "you don't know what you don't know" yet |
| API | ~5 min | The contract before the architecture |
| High level design | ~10–15 min | Boxes and arrows satisfying the API, one endpoint at a time |
| Deep dives | ~10 min | Harden against the non-functional requirements |

[Source](https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery)

**What the AI grades against** — three layers, all published free:

1. A four-axis rubric with named failure modes: problem navigation, solution design, technical
   excellence, communication and collaboration
2. A reference solution per problem, written in the framework's own sections
3. A per-level bar per problem: what mid vs senior vs staff looks like *on this question*,
   the discriminator being whether the candidate raises things unprompted

Layer 3 is the one worth stealing. It grades initiative, not recall, and it is what makes the
score feel credible rather than arbitrary.

**The canvas is Excalidraw**, embedded and self-hosted (`window.EXCALIDRAW_ASSET_PATH` on the
practice route). The scene is serialised and fed to the model alongside a voice transcript. Per-step
feedback during the session, then a report with a percentile against other users.

**Pricing**: $47/month, $79/year, $279 lifetime, one-time and non-renewing. Roughly 55% of the
system design content is free, including the whole framework and the rubric; the paid side is the
practice loop and the harder material. Human mock interviews were discontinued in May 2026, leaving
a pure AI-plus-content product. [Pricing](https://www.hellointerview.com/pricing)

**Criticisms, and the one that matters most:**

- The step-gated flow *tells you which deep dives to do* — which is precisely the senior signal it
  claims to measure. One engineer reported dropping it for a blank Excalidraw canvas and credited
  that for senior offers.
  ([Blind](https://www.teamblind.com/post/how-to-use-hellointerview-effectively-eae8wq7k))
- The AI cannot interrupt a bad idea thirty seconds in, and cannot tell a candidate they sound
  defensive — one of its own four axes.
  ([review](https://algoengineer.com/blog/is-hello-interview-worth-it))
- Being so good to read that people consume and never practise; their own intro page warns about it.
- "Becoming the LeetCode of system design": rewarding memorised answers.

The first point is a design instruction for us, not just a competitor flaw. Scaffolding that names
the next step teaches the framework and destroys the measurement at the same time. If a trainer
gates the steps, it cannot also claim to assess whether the student knew to take them.

### Russian market, adjacent

| Product | Practice format | Grading |
|---|---|---|
| [GetAnalyst](https://getanalyst.ru/education/systems-analyst-start) | Tasks on their platform, portfolio, interview prep | Key homework checked by hand |
| [systemanalyst.life](https://systemanalyst.life/aiforanalyst) | Course *about* using AI for analyst work | n/a |
| [Yandex Practicum](https://practicum.yandex.ru/systems-analyst-bootcamp/) | Bootcamp | Practising analysts review |
| [Karpov](https://karpov.courses/system-analytics), Skillbox | Course with cases | Cohort review |

Nobody in this set grades an artifact automatically. Manual review is the norm, which is why every
one of them is slow and priced per-cohort.

Two details worth acting on:

**«+ИИ» in Russian course titles is curriculum, not grading.** Checked individually on Skillbox,
OTUS and systemanalyst.life: AI appears as a taught subject — using AI tools in analyst work — while
the homework behind it is still graded by hand. Incumbents teaching AI-for-analysts while grading
manually is a positioning gift, and it is also a warning that "AI" in a course title carries no
weight with buyers who have seen it mean nothing.

**Stepik cannot host the thing it is selling.** Its platform offers exactly two options for free
text: `задание с рецензированием`, reviewed by the instructor or three peers, and `свободный ответ`,
which its own documentation calls *задание без проверки*. The five-day turnaround is not a choice
the author made; it is the ceiling of the platform. They cannot fix it by trying harder.

## What the interview asks about

Recurring topics across Russian interview compilations: SDLC and methodologies, requirement types,
use case vs user story, UML and BPMN, SQL and DB theory (indexes, dirty reads, JOINs), integrations
(REST, SOAP, XML/XSD, Swagger, Postman), message brokers, microservices, sync vs async, NFR
classification.
[Yandex Practicum](https://practicum.yandex.ru/blog/kak-proyti-sobesedovanie-na-sistemnogo-analitika/) ·
[Habr top-150](https://habr.com/ru/articles/963708/)

This maps onto the roadmap chapters closely enough that the trainers can be built per chapter
rather than as a separate curriculum.

## Pedagogy the trainer ladder should follow

Faded worked examples: give a full worked artifact, then remove steps one at a time until the
student produces the whole thing unaided. The removal is what forces self-explanation; showing
complete examples forever does not transfer.
([overview](https://en.wikipedia.org/wiki/Worked-example_effect) ·
[study](https://files.eric.ed.gov/fulltext/EJ1086007.pdf))

Applied here: the first ERD task supplies the entities and asks only for relationships; the last
supplies a vague brief and asks for the model. Same task family, decreasing scaffold.

## How grading is actually done by people who do it at scale

The headline: **nobody in this sample ships a frontier-LLM-generated score to a user as an
authoritative grade.** Two products with unlimited access to GPT-4 both decline, in opposite ways.

| Product | Graded against | Emits a score? | Calibrated by |
|---|---|---|---|
| Duolingo English Test, production | Feature models trained on human-rated corpora; per-prompt key-content-point lists for interactive speaking | Yes, 10–160 | Human-rated eval sets, Many-Facet Rasch audits of rater severity, test-retest |
| Duolingo, research (GPT-4 on CEFR essays) | Minimal rubric + **one calibration example per band** | Yes, a CEFR band | Quadratic weighted kappa against a human rater |
| Duolingo Max | A deterministic answer key; the LLM only explains the verdict | No | n/a |
| Khanmigo Writing Coach | Four fixed built-in criteria | **Explicitly never** | The teacher is the scorer |

Khan states the refusal as a product promise: Writing Coach does not assign grades or automated
scores, and cannot replace the teacher's role in giving feedback. Verification is uneven — that page
yielded verbatim text once, while Khan's other product surfaces sit behind a cookie wall and could
not be read at all. Treat the direction as solid and the detail as single-sourced.
[Source](https://blog.khanacademy.org/what-to-expect-and-not-expect-from-khan-academy-writing-coach/)

### Findings that should shape the grader

- **Calibration examples beat rubric prose, measurably.** GPT-4 scoring CEFR essays went from worse
  than a character-count baseline (zero-shot) to QWK 0.81 with *one worked example per band* — against 0.87
  human-to-human and 0.84 for a production 85-feature model. Adding the full rubric text on top was
  worth close to nothing and consumed the context the examples needed.
  [Yancey, LaFlair, Verardi & Burstein, BEA 2023](https://aclanthology.org/2023.bea-1.49.pdf)
- **Spell out only the unscorable categories.** The model already knows the domain scale, but
  over-applies "off-topic" and "no response" unless those two are defined in detail. For an analyst
  exercise: do not define "a good requirement"; do define "empty", "restates the brief", "off-task".
- **Grade each submission in a fresh conversation.** Duolingo isolates every essay to stop one
  graded item contaminating the next.
- **Agreement is bounded by human agreement.** DET's own scorer sits at r = 0.84–0.85 against
  humans, where two humans sit at 0.85–0.87. Roughly 85% agreement is the ceiling worth targeting,
  and it is the number they quote publicly.
- **Ship against an outcome metric, not a rubric metric.** Khan's north star for tutoring is
  *next-item correctness*: did the learner solve the next problem unaided after the feedback turn.
  It is what let them swap models and cut 3.6 s of latency while proving accuracy held. Guardrails
  alongside it: premature answer-giving, error rate.
  [Source](https://blog.khanacademy.org/how-khan-academy-is-building-a-better-ai-tutor-our-most-recent-learnings/)
- **Cost drives what ships free.** Duolingo kept Explain My Answer behind a paid tier from March
  2023 until 1 January 2026, then made it free once inference got cheap.

### Feasibility for our artifact types

Automated UML class-diagram grading already correlates above r = 0.76 with human teaching
assistants. But a 2025 study finds LLMs measurably weaker on **BPMN process logic** than on UML
structure, producing plausible and partly-correct answers on deeper control flow. BPMN grading
needs structural rule checks (gateway balance, token reachability) beside the model, not instead
of it — which is also the cheapest part to build.

## Price anchors and what they imply

Checked 2026-09-23, several platforms mid-sale, so list prices carry more signal than stickers.

| Band | Examples |
|---|---|
| Free | Exponent Basic (5 peer mocks/month), Pramp, interviewing.io's AI interviewer, most of Hello Interview's library |
| $50–150/yr | Hello Interview $79, DevInterview.AI $99, systemdesign.one $150, Exponent Pro ~$144 |
| $370–510/yr list | Educative Premium $410, DesignGurus $373, ByteByteGo $399 |
| Lifetime | Hello Interview $279, ByteByteGo $499 (list $999), DesignGurus system design roadmap $459 |
| Human, per hour | IGotAnOffer $100–250, DesignGurus mock $159–215, interviewing.io from $179 |

**DesignGurus serves purchasing-power-parity prices by country, and its checkout printed Kazakhstan
pricing during this check**: the $373/yr list became $119, and the $3,679 all-courses lifetime
became $356. This is the most directly applicable fact in the whole survey given a Russian-language
CIS audience. A single global price point is leaving the market on the table in one direction or
pricing it out in the other.

Stepik's 26 890 ₽ (~$290) for six hand-graded assignments sits between the annual subscription band
and an hour of human coaching. That is the arbitrage: instant feedback at subscription prices
against work that currently costs human-review money.

Two mechanics worth copying outright:

- **interviewing.io runs a free AI tier and a paid human tier inside one funnel.** The AI is the
  top of the funnel, not a cheaper substitute for the bottom of it.
- **IGotAnOffer publishes a rebook rate and an offer-rate percentile per coach.** The sharpest trust
  mechanic in the set, and it works for a curator as well as a coach.

## Nobody grades the diagram

Worth stating flatly, because it is the whole opening and it held up across two independent surveys.

Every AI product in this market grades **speech** (Exponent, interviewing.io, DevInterview.AI) or
**text** (Educative, Hello Interview's written steps). ByteByteGo, AlgoExpert and DesignGurus do not
grade system design at all — DesignGurus bundles AI mock interviews and restricts them to *coding*,
which is a loud admission about where the difficulty lies.

The exception is Hello Interview, whose canvas is a self-hosted Excalidraw whose scene is fed to the
model. Outside it, the only way to get feedback on an actual architecture diagram today is to pay a
human $100–250 an hour.

And for analyst artifacts specifically — BPMN, use cases, ER models, user stories, OpenAPI specs —
nothing grades them in any language. The adjacent products split into role-generic voice
interviewers that never touch an artifact, and AI BPMN tools that *generate* diagrams rather than
assess them.

## Open questions

Answered since first draft, recorded in [`grading-design.md`](grading-design.md): rubrics have to
come out of graded work rather than precede it; cost per submission is a few dollars per thousand
turns for a naive judge and near zero behind a deterministic cascade; students do game a fixed
published rubric, and randomly applying a subset of criteria is the countermeasure.

Still open:

- **Whether the market exists.** The one comparable product has 17 students. Small market, bad
  marketing, or demand suppressed by price and latency — nothing gathered distinguishes them, and
  only the third supports building.
- **What a Russian-language grader agrees at.** Every agreement figure here comes from English
  corpora. Tokenisation, morphology and the available judge models all differ.
- **Whether a curator can be found at all.** The rubric-first path needs a second competent analyst
  to label against, and the honest weakness list already names single-instructor dependency.
- **Whether students accept a machine grade on professional judgement.** NAPLAN passed every
  psychometric bar and was cancelled politically.
- **What the per-country price should be**, given a $373 list becomes $119 in Kazakhstan on a
  competitor's own checkout.
