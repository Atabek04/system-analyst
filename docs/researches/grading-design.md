# How to grade: evidence

What people who grade open work at scale actually do, gathered 2026-09-23. Companion to
[`practice-trainers.md`](practice-trainers.md); this file is only about the grader.

The short version: **many binary criteria with weights, scored against extracted features rather
than raw text, with the feedback text authored rather than generated.** Every part of that sentence
is load-bearing and each has evidence behind it.

---

## Never score raw text end to end

Sapia.ai's audit, n = 633,413: **gender is 78% predictable from raw answer text, and only ~60% from
rubric-derived features.** Scoring the extracted features instead of the prose is the single
cheapest fairness intervention available, and it is also what makes a score explainable.

ETS documents the drift you get when you do not: on TOEFL independent essays, e-rater ran +0.30 SD
for candidates tested in China, +0.25 for L1 Chinese, −0.19 L1 Arabic, −0.18 L1 Hindi. Duolingo's
GPT-4 grader agreed with humans at QWK 0.89 for L1 Spanish and 0.66 for L1 Telugu, and the gap
survived correction for rating-distribution differences.

Our students write Russian as a first language about IT systems. The analogous drift is by writing
fluency rather than by language, and it will be invisible unless measured per subgroup.

## Many binary criteria beat few graded scales

Converging evidence from four independent directions:

- **TICK**: LLM-generated yes/no checklists raise exact agreement with human preference from 46.4%
  to 52.2% over holistic scoring. Giving the same checklists to *human* evaluators raised their
  inter-annotator agreement from 0.194 to 0.256. ([arXiv](https://arxiv.org/abs/2410.03608))
- **Rubrics as Rewards**: +31% relative on HealthBench over LLM-as-judge, and rubrics *reduce
  variance across judge scales* — a good rubric lets a cheaper model grade.
  ([arXiv](https://arxiv.org/abs/2507.17746))
- **LangChain** advises preferring binary pass/fail over numeric scales for LLM judges: numeric
  scales add subjective variance and need larger samples.
- **Anthropic** advises volume over depth: more questions with slightly lower signal beats fewer
  hand-graded ones.

And the failure mode points the same way: Duolingo's GPT-4 grader was accurate except at
**distinguishing adjacent levels**, especially B2. A 1–5 scale is mostly a machine for producing
adjacent-level errors.

## The scoring formula to copy

**HealthBench** is the closest published reference implementation: 5,000 conversations, 48,562
rubric criteria, median 11 per example. Each criterion carries a point value from −10 to +10,
nonzero — positive rewards a desired behaviour, negative penalises an undesired one.

```
score = clip( Σ(met × weight) / Σ max(0, weight) , 0, 1 )
```

Axis subscores restrict numerator and denominator to that axis. Its axes by share of criteria:
completeness 39%, accuracy 33%, context awareness 16%, communication quality 8%, instruction
following 4% — and one of its themes is literally **context seeking**, whether the model asked
enough before answering. That is the medical form of elicitation.

Its grader validation is the part to imitate: GPT-4.1 scored **macro-F1 0.709** against a physician
baseline of **0.569–0.730 by theme**, beating the average physician in 5 of 7 themes. The bar is
*matches a competent human*, not *is objectively right*.
([OpenAI](https://openai.com/index/healthbench/))

## Grade the process, not only the artifact

The strongest argument for the user's own idea of scoring the AI conversation:

**Uesato et al. 2022** — outcome supervision and process supervision reach similar final-answer
error (16.8% → 12.7%), but process supervision transforms reasoning error *among answers that were
already correct*: **14.0% → 3.4%**. Outcome-only grading permits right-answer-wrong-reasoning at
scale. ([arXiv](https://arxiv.org/abs/2211.14275))

**Lightman et al. 2023** — process reward beats outcome reward, 78.2% vs 72.4%, and the PRM800K
label set is ternary: **+1 correct and makes progress, 0 not incorrect but no clear progress,
−1 incorrect**. ([arXiv](https://arxiv.org/abs/2305.20050))

That **neutral class is the one that matters here**. A student's question can be perfectly correct
and still waste a turn, and a coverage checklist cannot express that. It is also where the
redundancy penalty comes from: score coverage *per turn spent*, not coverage absolute, or students
will spam forty shallow questions to sweep the checklist.

**ProcessBench** — the useful task framing is *identify the earliest erroneous step*, which is a far
better feedback artifact than an aggregate. Also: trained PRMs generalise poorly and **lose to
general LLMs prompted to critique step by step**, so there is no need to train one.
([arXiv](https://arxiv.org/abs/2412.06559))

Directly on our domain: a validated **14-mistake taxonomy for requirements-elicitation
interviewers**, with a working binary classification prompt, where mistake-guided conditioning took
GPT-4o from tying humans to beating them at ~93.5%.
([arXiv 2507.02858](https://arxiv.org/abs/2507.02858))

### The warning attached to this

CS education spent roughly fifteen years building content-agnostic process telemetry — Error
Quotient, Watwin score, repeated-error density, edit velocity — and topped out around r ≈ 0.5,
explaining under 30% of outcome variance. One replication found 29.98% of Error Quotient pairings
were computed across different files.

**Do not build questions-per-minute, time-to-first-question or edit-velocity metrics.** They look
rigorous, they are cheap, and the field has already shown they carry little signal. Semantic
per-turn classification against a domain taxonomy is what works.

## Feedback: authored and retrieved, not generated

**Quill.org** is the most transferable model in the survey, and the only vendor publishing its build
economics.

Its Reading-for-Evidence engine classifies a response into an authored label set — `Optimal_1..3`
for distinct acceptable ideas, `Label_0..8` for named failure modes — each carrying one canned
feedback string. The inference prompt ends with *"Your feedback should be copied from these
examples"*, and a **second LLM call moderates** anything that drifts into grammar or gives the
answer away. The model is a classifier wearing a generator's clothes: output variance is bounded
because the feedback text is authored.

Measured from its own shipped eval files, binary optimal-vs-suboptimal agreement runs **80.2% to
96.5%**. Students never see a number — only Proficient / Nearly / Not yet.

**The cost of doing it this way, published**: 40–100 human-written (response, feedback) pairs per
prompt; a 5,000–8,000 word wrapper of directions and samples per evaluation; benchmark sets of ≥300
manually graded responses held out from training; **ten full-time curriculum developers** grading
over 100,000 responses a year. That is the honest price of the quality they get, and it is the
number to weigh against any estimate of our own.

**Turnitin Revision Assistant** (now retired) contributed two mechanics worth stealing:

- **Sentence ablation** — recompute the score with each sentence removed, rank sentences by marginal
  contribution. It shows a student which sentence is carrying the argument and which is dead weight,
  and it doubles as a concision lesson because deleting can raise the score.
- **Feedback rationing** — exactly four sentences highlighted per round, usually two weak and two
  strong; never two comments on the same sentence; resubmitting unchanged yields *different*
  comments; a student never sees the same comment twice.

It published no accuracy figures at all, which is itself the finding: a feedback-first product never
had to, because it never claimed to replace a grade.

## How the feedback is rendered is a separate policy from how it is scored

Three mechanics, each cheap and each worth copying.

**Same evidence, two renderings.** micro1 generates the candidate's feedback as a distinct object
from the employer's report: JSON with exactly `strengths` and `areas_for_improvement`, two to four
items each. Its constraints are the interesting part — improvement areas **exclude soft skills and
communication** to reduce subjectivity; the model is instructed to **never assume the person lacks
experience**, phrasing gaps in the past tense ("could have explained better"); and candidate-facing
text is **forbidden from using the seniority bands** the employer report uses.

For us: the grade a curator sees and the feedback a student sees should be generated under
different policies from the same evidence. A student should never be handed the band label.

**Feedback without evidence is not reported.** Metaview's hard rule: every piece of feedback cites a
specific moment in a specific call. It is the cheapest available guard against generically positive
AI feedback, and it makes a claim checkable by the student.

**Let the student argue back.** CAELF has evaluator agents score independently, a teacher agent
aggregate, and then the student contest the feedback. Interactive feedback beat one-way feedback
across 500 essays. It also turns a grade from a verdict into a conversation, which is the difference
between a student learning and a student appealing.

A fourth, from Riipen: employers are **never shown any scoring information** about the learners
working on their projects. Mixing an outside party's judgement into an academic grade is a trust
problem they deliberately declined to take on.

## Cost, in numbers

| Pattern | Figure |
|---|---|
| GPT-4.1 as a straight judge | **$4.70–8.00 per 1,000 turns** |
| Symbolic → encoder → LLM cascade | **$0 for 81–91% of criteria** |
| Three small models from different providers | ~7× cheaper than one large judge, and better correlated |
| Open-weight consensus jury | 8–15% of frontier pricing |
| Self-consistency voting | 5× the cost, 38% worse calibration than simply asking for confidence |
| Embedding blocking before coverage matching | 4× fewer model calls at 90–95% recall |
| Llama 3 few-shot vs GPT-4 on essay scoring | no significant accuracy or disparate-impact difference, up to **37× cheaper** |

The load-bearing point for a free-to-use product: the deterministic layer is not just more
defensible, it is the difference between a few dollars per thousand submissions and nothing at all.
Self-consistency is the classic trap — the expensive option *and* the worse one.

## Gate before scoring

ETS runs **advisory flags before e-rater scores anything**: too brief, excessive length, off-topic,
restatement, no resemblance to the prompt, unidentifiable organisation, nonessay. On GRE, five
enabled flags catch **96% of responses a human would score zero, at a ~1% flag rate**.

Quill gates the same way (too short, source overuse, topicality, anomalous feature density), and so
did Revision Assistant — a gated submission gets a tailored message and a teacher note, no score
and no feedback.

**The negative result worth knowing**: across ~871k responses, ETS found only some flags
discriminate. Too-short, excessive-problems and too-long subsets scored far lower agreement as
expected, but **repetition, insufficient development and off-topic flagged groups sometimes agreed
as well as or better than unflagged ones**. Three of eight guardrails did not do their job, and the
only way anyone found out was measuring per-flag agreement deltas.

## Calibration and cost

**One anchor example per score band is the whole game.** Duolingo's GPT-4 grader went from below a
character-length baseline (zero-shot) to QWK 0.81 with a single calibration example per category,
against 0.84 for a production 85-feature model and 0.87 human-to-human. More examples gave no
significant gain. A detailed rubric and chain-of-thought rationales helped **only when there were no
examples**, and competed with them for context budget.

**Generic beats per-prompt, at ETS's scale.** Models fit across ten or more prompts, dropping the
prompt-specific content features, performed equal or better than prompt-specific models in
cross-validation — and need zero per-prompt training data. Their prompt-specific predecessor needed
≥500 human-scored essays per prompt.

**The human-review threshold is the pricing dial.** The same engine routes 3% of TOEFL independent
essays to a second human and 47% of GRE Argument essays, purely by where the discrepancy threshold
sits. GRE walked its threshold from 1.5 down to 0.5 until no demographic subgroup was flagged,
deliberately surrendering nearly all the cost saving for fairness.

## Reliability of the thing being measured

Sobering, from interviewing.io's own data: only about **25% of candidates score consistently** across
mock interviews, a candidate whose true level is 3.0 fails roughly **22% of individual sessions**,
and R² between skill and volatility is about 0.03 — the inconsistency is not explained by ability.

So a single attempt is a weak measurement of a student, independent of grader quality. τ-bench's
**pass^k** answers the right question — the chance that all k independent attempts succeed, averaged
over tasks, where GPT-4o drops from 61.2% at pass^1 to under 25% at pass^8. For mastery gating, run
the same scenario more than once with a re-randomised stakeholder and require consistency, not a
single pass.

And a caution on transfer: **MedSimAI** improved real OSCE history-taking scores from 82.8 to 88.8
(p<0.001, d=0.75) at one medical school and produced **no significant change at a second**. Scenario
and rubric quality is the variable, not the model.
([arXiv](https://arxiv.org/abs/2503.05793))

## The largest deployment still refuses to score free text

Gradescope — 10M+ pages, 200+ institutions, twelve years old — does not grade open responses. Its
"AI" is visual clustering of similar answers. Turnitin removed the word *autograde* from the
interface because the system "does not autograde. It only assists the grader in forming answer
groups, and requires the grader to sign off." Nothing generative shipped in its 2025–26 release
notes, and the feature is not available for typed text at all.

Its actual innovation is a data structure, not a model: a rubric that starts with one item, grows an
item the first time each new mistake appears, and **retroactively updates every prior grade** when a
point value changes. Mean 5.6 items per question. No grouping accuracy or inter-rater statistic has
ever been published.

The lesson is about where the leverage sits. The market leader's answer to scale was to make one
human's judgement go further, not to replace it.

## What production systems actually do — and it is not rubric-in-prompt

Every operational deployment found (Texas STAAR, Cambium, ACT, Pearson, Measurement Inc, ETS)
grades against a **per-item model trained on 500–3,000 human-scored responses**. The rubric's job
is to train the humans who produce the labels, not to be pasted into a prompt.

The gap is measured. On the same ASAP evaluation split:

| Method | QWK |
|---|---|
| GPT-4o direct scoring, zero-shot with chain of thought | 0.509 |
| GPT-4o pairwise comparison, latent-trait aggregation | 0.670 |
| BERT-base fine-tuned per prompt | 0.740 |
| Supervised state of the art | 0.792 |

An 8B generative model did **not** beat 130–183M encoders on long-context essay scoring, at vastly
higher cost. ([Cambium, AIME-Con 2025](https://aclanthology.org/2025.aimecon-main.5.pdf))

Texas STAAR ran 9,690,388 responses in spring 2024 this way: two models per item, ensembled,
72.2% machine-only and 28.2% routed to humans. Its engine beat the human–human exact-agreement
baseline on 15 of 16 short-response items.

**We will not have 3,000 labelled responses per exercise for a long time.** That is the honest
reason to start with pairwise comparison and a guaranteed human slice rather than chase an
agreement number.

## Pairwise comparison beats absolute scoring

The strongest zero-shot mechanic available without a labelled corpus. Judges compare two
submissions and pick the better; a latent-trait model turns many comparisons into a scale.

- **+0.16 QWK** over direct scoring (0.670 vs 0.509), and variance across five different backbone
  models collapses from 0.122 to **0.021** — the pipeline stops depending on model choice.
  ([LCES, EMNLP 2025](https://arxiv.org/pdf/2505.08498v2))
- A 3B model doing comparative assessment beat ChatGPT doing prompt-scoring on 3 of 4 summarisation
  aspects. ([Cambridge, EACL 2024](https://arxiv.org/pdf/2307.07889v3))
- Judges are **more vulnerable to adversarial phrases when scoring absolutely** than when comparing.
- Cost is bounded: roughly 5,000 sampled comparisons for a whole cohort, not per submission, and
  RankNet aggregation beats Bradley-Terry and Elo, most at low comparison counts. New submissions
  can be scored without re-running comparisons.

**No More Marking** runs exactly this in production on 566,140 responses across 1,422 schools,
recommending 90% AI / 10% human with **at least two human comparisons guaranteed per script**. An
independent trial across 5,251 students found AI agreed with 81% of human decisions, against 87%
human–human. Marking 30 essays went from two hours to six minutes.

Position bias must be measured, not assumed: order-flip rates run 10.4% for GPT-4o, 21.6% for
Llama-3.1-8B and 42.8% for Mistral-7B. Run both orders where it is high.

For analyst work this fits the domain: "what is a correct requirements document" is contested,
while "which of these two is better" is much less so.

## Don't hand-author a long rubric — seed one line and refine it

A counter-intuitive result that changes the build order. Starting from the seed *"Based on the
response's content, rate the response on a scale of 1 to 6"* and auto-refining against ~200
annotated samples reached **QWK 0.48, against 0.26 for a carefully hand-written human rubric** on
the same data. ([Harada et al.](https://arxiv.org/abs/2510.09030))

Supporting this: three of four models showed no significant difference between a 375-word rubric
and a 78-word one, and one model got monotonically **worse and more lenient** as the rubric grew.
Long rubrics cost about 2× the tokens for nothing.

Spend the context on anchor examples instead — one per band is most of the win, and two per level
is worth about +26% QWK.

**What this changes for us**: the deliverable before any grader is not a beautiful rubric document.
It is ~200 graded student submissions. The rubric is an output of grading, not an input to it. This
is the same thing Shankar et al. call criteria drift: people need to externalise criteria to grade,
but grading is how they discover the criteria.

## Route by confidence; the threshold is the pricing dial

Cambium's confidence model is a **probit regression, far simpler than the scorer**, predicting only
"will the engine's score match the human's". Three features: probability of the assigned score,
distance of the response from the training-set feature centroid, and length in words. Route
everything below a percentile — Texas uses the 10th, typical client programs 15th–25th.

**Validate the router by asymmetry, not by accuracy.** On Texas's flagged bucket, human agreement
fell 6.4 points and QWK 0.13; the engine's fell 15 points and 0.25. The engine degrading *faster*
than humans is what proves the confidence signal is finding genuinely hard responses.

Always keep a **random verification slice independent of confidence routing** — Texas samples 10%,
No More Marking guarantees two human comparisons per script. Confidence-routed samples are biased by
construction and cannot measure aggregate accuracy.

Ask the model for its confidence rather than sampling it: self-reported confidence reached ECE
0.166 at 1× cost, against 0.229 at 5× cost for self-consistency voting. Self-consistency is the
expensive option *and* the worse one.

Also publish who lands in the routed bucket. Cambium found male students and students with
disabilities overrepresented below the threshold, and published it as an argument for routing.

## The realistic ceiling for our domain

Essay-scoring headlines do not transfer. On 67 Italian university essays with a four-criterion
rubric across five frontier models, **human–LLM QWK was consistently low and non-significant, with
within-model agreement below 0.30.** Interpretive, professional-judgement work is where this breaks.

Analyst deliverables — requirements, process models, trade-off memos — sit closer to that regime
than to standardised essays. **Plan for 0.6–0.7 QWK on direct scoring, not 0.87.**

And the single most sobering number in the whole survey, measured directly on our task: on INCOSE
criteria across ten models, the **best model detected a median of 47% of expert-identified
requirements issues while false-flagging 11%**, with necessity and correctness issues "almost always
missed". ([arXiv 2609.03230](https://arxiv.org/abs/2609.03230))

That number is the design constraint. It argues for deterministic checks in front, an expert
reference solution per exercise, confidence-gated deferral, and feedback framed as diagnosis rather
than verdict.

Related: LLM judges agree with experts **mainly on questions the judges could answer correctly
themselves**, and supplying an expert reference answer substantially fixes it
([No Free Labels](https://arxiv.org/abs/2503.05061)). For any exercise where the grader model would
not itself write a good use case, a reference solution is mandatory, not optional.

## Use the instruments that already exist

Do not invent rubric dimensions. These are validated, published, and in several cases
machine-checkable.

| Instrument | What it covers | Note |
|---|---|---|
| **ISO/IEC/IEEE 29148** | 9 characteristics of a requirement: necessary, appropriate, unambiguous, complete, singular, feasible, verifiable, correct, conforming | The standard employers reference |
| **EARS** | 5 requirement patterns: ubiquitous, event-driven, state-driven, optional, unwanted behaviour | **Machine-checkable.** Highest-confidence auto-gradable dimension we have |
| **QUS, 13 criteria** | User story quality, syntactic / semantic / pragmatic | **5 of 13 are set-level — grade a backlog, not a lone story.** Its authors dismiss INVEST as mnemonic heuristics |
| **Requirements Smells** | 9 dictionary- and POS-detectable smells, each mapped to an ISO 29148 criterion | Subjective language, loopholes, vague pronouns, superlatives |
| **Bano et al. taxonomy** | 5 categories of interviewer mistake | The canonical elicitation instrument |
| **Shen, Singhal & Breaux** | 14-criterion mistake rubric for elicitation questions | GPT-4o agreed with a human analyst **81%**; 98% of turns judgeable with ≤4 turns of context |

Note our spec's T1 currently says INVEST. QUS is the better instrument and is what the research
actually validates.

Deterministic tools already exist for parts of this: **AQUSA** on user stories (77% precision,
92% recall on five syntactic criteria), **RESTRuler** on OpenAPI (91% precision), **Smella** on
requirements smells (59% precision, 82% recall). The semantic half — conceptually sound,
problem-oriented, unambiguous, complete — is explicitly beyond rule-based tools, and is the half
teaching cares about. Rules constrain the model; they do not replace it.

## Linking the conversation to the artifact

The highest-leverage mechanic found, and nobody ships it. **Inter2US** chunks a transcript into
overlapping three-turn windows and matches chunks against artifact statements in both directions:

- **Faithfulness** — fraction of artifact statements supported by at least one transcript chunk.
  Catches invented requirements.
- **Coverage** — fraction of transcript chunks reflected in the artifact. Catches information the
  student elicited and then dropped.

LLM judges reach macro-F1 0.859 on this; embedding blocking at K=25 cuts LLM calls fourfold at
90–95% recall. **Human inter-annotator agreement is only κ=0.470** — that is the ceiling.

Pair it with a turn-discounted coverage rate, which rewards finding things early and is the
anti-spam term.

## Anti-gaming is scenario design, not surveillance

The decisive experiment: candidates secretly instructed to use ChatGPT, 32 interviews.

| Question type | Pass rate |
|---|---|
| Control, no AI | 53% |
| Verbatim known question | **73%** |
| Reskinned known question | 67% |
| **Custom question** | **25%** |

**Zero interviewers suspected cheating.** Narrative reskinning does nothing; genuinely novel inputs
do everything.

Other measures that hold up:

- **Rubric Dropout** — randomly apply 30–50% of criteria per grading run. Training against a fixed
  rubric makes the visible score climb while true quality falls; dropout recovers it. Practical
  consequence: publish the rubric's *shape* and per-level bars, not the full fixed criterion list.
- **Never a cheap model for the final grade.** Hidden prompt injection moved a frontier model's
  score ~2.6 points but **GPT-4o mini by ~20 points**, with verbalised detection between 0% and 1.4%.
  Silence is not resistance.
- **Grade in a fresh context every time.** Interaction history drives systematic drift in grading
  standards away from human experts.
- **AI-text detection on prose is not usable.** Detectors misclassify human-written work at rates up
  to 32%; a 32% false-positive rate on honest students is disqualifying.

## The political failure mode

NAPLAN's automated essay scoring passed every psychometric bar — over 11,000 essays, agreement
statistics indistinguishable from human markers, resilient to a deliberate gaming study — and
**Australian education ministers scrapped it in January 2018 anyway.** Texas shipped a comparable
system only by pre-announcing over eighteen months, and still drew hostile coverage.

Budget as much for the transparency artifact as for the model.

## What nobody publishes

No vendor in the commercial tier — Hyperbound, Second Nature, Yoodli, Quantified, Zenarate —
publishes rubric reliability, agreement with human coaches, or any peer-reviewed validation. Their
claims are vendor self-description with no independent counterweight and should not be cited as
evidence the approach works. The one reusable idea from that tier is Hyperbound's
methodology-bound scorecard with per-category subscores and a rollup.
