# Learning with AI — evidence and prompt templates

Two uses:
1. **Course author** — prompts for researching how a concept is explained and for fact-checking drafts (section 4).
2. **Students** — templates they copy into ChatGPT/Claude to learn a topic actively (section 3). Source material for a future student lesson "Как учиться с AI" in `analyst-tooling`.

Research date: October 2026. Items marked [UNVERIFIED] could not be traced to a primary source.

---

## 1. What the evidence says

AI is neither good nor bad for learning by itself. **Design decides.**

| Study | Setting | Result | Caveat |
|---|---|---|---|
| Bastani et al., PNAS 2025, "Generative AI without guardrails can harm learning" ([Wharton summary](https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education)) | ~1,000 Turkish high-school math students | During practice: plain GPT +48%, guarded "GPT Tutor" +127%. **On the exam without AI: plain GPT −17% vs control**, GPT Tutor ≈ control. Students overestimated how much they learned. | GPT Tutor needed a 500+ word teacher-written prompt per problem, with solutions and common mistakes. |
| Kestin et al., Scientific Reports 2025 ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/)) | 194 Harvard intro-physics students, crossover RCT | AI tutor beat in-class active learning: 0.63 SD and up; less time spent. | Expert-written prompts with pre-written solutions; introductory material; short-term test. |
| World Bank, De Simone et al. 2025 ([WPS 11125](https://openknowledge.worldbank.org/entities/publication/15e1ff08-15ae-4f7a-b2a8-d146e6c113ee)) | Nigeria, English, 6 weeks, teacher-guided Copilot | +0.31 SD overall | Working paper; teacher-facilitated with structured prompts. |
| Lehmann, Cornelius, Sting 2025 ([arXiv](https://arxiv.org/abs/2409.09047)) | Pre-registered lab + field, coding | Using AI to *generate solutions* → breadth, less depth. Using it to *explain* → better understanding. AI **widens** the gap between weak and strong students. | Lab setting. |
| Anthropic Education Report 2025 ([link](https://www.anthropic.com/research/anthropic-education-report-how-university-students-use-claude)) | 1M student conversations | Students often delegate higher-order tasks (creating, analyzing). | Descriptive, no outcomes. |

Do not cite: Wang & Fan 2025 meta-analysis ("ChatGPT g = 0.867") — retracted in 2026 ([PlagiarismToday](https://www.plagiarismtoday.com/2026/07/15/study-claiming-ai-helps-students-learn-retracted/)).

**Pattern:** harm comes from answer-giving without guardrails (crutch, false confidence). Gains come from "guide, don't tell" prompts grounded in verified material, plus human structure.

---

## 2. Principles of a good learning prompt

Shared by OpenAI study mode ([extracted prompt](https://simonwillison.net/2025/Jul/29/openai-introducing-study-mode)), Claude learning mode ([Anthropic](https://www.anthropic.com/news/introducing-claude-for-education)), Google LearnLM ([paper](https://arxiv.org/abs/2407.12687)), Khanmigo, and Mollick's tutor prompts ([One Useful Thing](https://www.oneusefulthing.org/p/assigning-ai-seven-ways-of-using)):

1. **The learner does the thinking.** Ask for hints and questions, not answers.
2. **One question at a time**, then wait.
3. **Diagnose level first**: state your background and what you already know.
4. **Small chunks**; short replies.
5. **Check by retrieval**, never "is that clear?": restate, predict, apply. (Dunlosky 2013: practice testing and spacing are the only "high utility" techniques; rereading and summarising are "low".)
6. **Calibrate**: rate your confidence before answering; compare with results.
7. **Ground the AI** in correct material (paste the lesson, the spec, your notes).
8. **Verify**: AI invents facts and produces analogies that look right but aren't.
9. **Complement, don't substitute**: ask "explain", not "do it for me".

Anti-patterns: "solve this for me" while learning; "explain X" with no context; reading long AI answers passively; trusting AI numbers and analogies; one giant prompt; cramming in one sitting.

---

## 3. Prompt templates for students (Russian, «вы»)

English originals are in the research notes; these are the versions to hand to students.

### T1. Новое понятие с нуля (сначала проблема)
```
Я изучаю [ПОНЯТИЕ] с нуля. Я меняю профессию и учусь на системного аналитика, мой опыт: [ОПЫТ].
Прежде чем что-то объяснять:
1. Задайте мне 1–2 вопроса, чтобы понять, что я уже знаю. По одному вопросу за раз, дождитесь ответа.
2. Опишите реальную проблему, ради которой это понятие существует, в виде конкретной ситуации. Спросите, как бы я её решил(а). Дайте мне попробовать, даже если я ошибусь.
3. Только после моей попытки объясните понятие небольшими шагами (до ~150 слов за сообщение) и свяжите объяснение с моей попыткой.
4. После каждого шага задайте вопрос, на который я отвечу своими словами. Не спрашивайте «всё понятно?».
Если вы не уверены в каком-то факте, прямо скажите об этом.
```

### T2. Сократовский наставник
```
Будьте моим наставником в сократовском стиле по теме [ТЕМА]. Не давайте готовый ответ и не делайте задание за меня, даже если я попрошу. Ведите вопросами и подсказками, по одному вопросу в сообщении.
Если я застрял(а) два раза подряд, дайте подсказку поменьше, но не ответ.
Если я ошибаюсь, сначала спросите, как я к этому пришёл (пришла), и только потом поправляйте.
Когда я дойду до ответа, попросите объяснить, почему он работает и где он НЕ сработает.
Отвечайте коротко.
```

### T3. Аналогии с границами
```
Предложите 3 разные аналогии для [ПОНЯТИЕ] из повседневной жизни (не из IT).
Для каждой:
(а) покажите, какая часть аналогии соответствует какой части понятия;
(б) чётко скажите, где аналогия ЛОМАЕТСЯ: какое ложное представление она может создать;
(в) оцените, насколько она распространена в учебных материалах, и скажите, если не уверены.
Потом спросите, какая из них мне ближе и почему.
```

### T4. Самопроверка (retrieval practice)
```
Проверьте меня по теме [ТЕМА / вставляю свои заметки]. Задайте 5 вопросов ПО ОДНОМУ и ждите ответа перед следующим.
Смешайте типы: вспомнить, объяснить «почему», применить к ситуации, найти ошибку.
Перед каждым ответом попросите оценить уверенность от 1 до 5.
После каждого ответа: что верно, чего не хватило, как правильно.
В конце перечислите вопросы, где моя уверенность не совпала с результатом.
Опирайтесь только на материал, который я дал(а).
```

### T5. Объясни обратно (техника Фейнмана)
```
Я объясню [ПОНЯТИЕ] своими словами, как коллеге без IT-опыта. Сначала сыграйте этого коллегу: задайте 2–3 наивных, но точных вопроса о местах, где я объяснил(а) расплывчато.
Затем станьте рецензентом и перечислите: (1) фактические ошибки; (2) пропущенные шаги; (3) термины без определения; (4) одну вещь, которую я объяснил(а) хорошо.
Не переписывайте объяснение за меня, попросите исправить самостоятельно.
Моё объяснение: [...]
```

### T6. Тренажёр интервью по требованиям
```
Давайте разыграем интервью по сбору требований (Elicitation). Вы [РОЛЬ, например руководитель склада сети аптек], и вам нужно [РАСПЛЫВЧАТАЯ ЦЕЛЬ, например «приложение, чтобы товар не терялся»]. Я системный аналитик.
Правила для вас:
- Оставайтесь в роли. Вы занятой человек и говорите на языке бизнеса, не IT.
- У вас есть скрытые реальные потребности, ограничения и одно противоречие. Раскрывайте их ТОЛЬКО на хорошие вопросы.
- Отвечайте только на то, что спросили, в 1–4 предложениях.
Когда я напишу «СТОП», выйдите из роли и дайте обратную связь: (1) какие скрытые потребности я выявил(а), а какие пропустил(а); (2) лучшие и самые слабые вопросы; (3) наводящие или закрытые вопросы, которые стоит переформулировать; (4) оценку от 1 до 10.
Начните с приветствия в роли.
```

### T7. Поиск заблуждений
```
Вот как я сейчас понимаю [ПОНЯТИЕ]: [...].
Не исправляйте меня сразу. Задайте 2 диагностических вопроса, которые покажут, нет ли у меня типичного заблуждения.
По ответам назовите заблуждение (если есть) и объясните, почему в него легко поверить.
Покажите случай, где оно приводит к неверному результату, и дайте новый вопрос для проверки.
```

### T8. План интервального повторения
```
Сегодня я изучил(а): [СПИСОК ПОНЯТИЙ]. Составьте план повторения на 30 дней (дни 1, 3, 7, 14, 30).
На каждый день дайте 3–5 вопросов на вспоминание по памяти, а не на перечитывание.
Чередуйте старые темы с новыми. Ответы вынесите в отдельный блок в конце.
Каждая сессия не дольше 15 минут.
```
(The 1-3-7-14-30 schedule is a popular heuristic, not a proven optimum.)

### T9. Разобранный пример, затем самостоятельно
```
Научите меня [НАВЫК, например писать User Story с критериями приёмки] методом «затухающих» примеров:
1. Один полностью разобранный пример с объяснением каждого шага.
2. Второй, где последний шаг оставьте мне.
3. Третий, где большую часть делаю я, а вы даёте только условие.
4. Один пример я делаю полностью сам(а).
На каждом этапе ждите моего ответа и давайте обратную связь.
```

### T10. Цепочка «почему?»
```
По поводу [ПРАВИЛО, например «REST API должен быть stateless»] спросите меня «почему?» до 4 раз, каждый раз про мой предыдущий ответ, пока не дойдём до базового принципа.
Если рассуждение пойдёт не туда, укажите конкретный шаг. В конце подытожьте цепочку в 3 строках.
```

### T11. Найди ошибку у AI
```
Объясните [ПОНЯТИЕ] примерно в 200 словах и намеренно допустите 2 незаметные фактические ошибки. Не говорите, где они.
Я попробую их найти и объяснить, почему это ошибки. Потом раскройте их и оцените моё рассуждение.
```

---

## 4. Prompts for the course author

Use with web search on. Feed the output into the research pack (`lesson-page-rules.md` → "Research before writing").

**A. How others explain it**
```
Research how [CONCEPT] is explained to complete beginners by reputable sources: university courses, official docs, well-known educators, highly-voted Stack Overflow / Reddit / Habr answers.
Search in English and Russian: "[concept] in simple terms", "[concept] analogy", "[concept] explained like I'm five", "[понятие] простыми словами", "[понятие] аналогия".
Return a table: analogy/explanation | URL | number of independent sources using it | what it maps correctly | where it breaks | misconception risk.
Only include items you actually found at a URL; quote the relevant sentence. Say so if fewer than 3 independent sources use an analogy.
```

**B. Misconceptions inventory**
```
Find documented misconceptions learners have about [CONCEPT]: education research, instructor blogs, "common mistakes" pages, interview-prep resources.
For each: misconception | why learners believe it | a diagnostic question that exposes it | source URL + quote.
Label anything that is your own inference as [INFERENCE].
```

**C. Real cases with a verification ladder**
```
Find 3–5 real, documented cases or origin stories related to [CONCEPT] useful for System Analyst students.
For each: (1) one-paragraph summary; (2) a primary source (official report, original paper, court/agency doc) plus one independent secondary source; (3) the actual mechanism, not the popular version; (4) known myths or misquotes; (5) the lesson for an analyst.
Mark cases with only secondary/blog sources as [UNVERIFIED]. Do not invent details, dates or numbers. If sources disagree on a number, list all versions.
```

**D. Fact-check a draft**
```
Here is my draft lesson: [...]. List every factual claim (numbers, dates, names, causal claims, "studies show").
For each: supported / contradicted / not found + URL + supporting quote. Then list the claims you could not verify. Do not rewrite the lesson.
```

Author's verification steps: open every URL yourself; prefer primary sources; two independent sources for stories and numbers; check for retractions; watch for viral folklore (the "IBM 1:6.5:15:100" chart); keep the URL next to the claim.

---

## 5. Prompt-design principles used in this project's skills

From Anthropic's prompting guidance ([best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), [reducing hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)), applied when editing `.claude/skills/*` and `.claude/references/*`:

- **Explain why a rule exists**, not only what it is. The model generalises from the reason.
- **Say what to do**, not only what to avoid ("split long sentences with a colon or a full stop" rather than only "no em-dashes").
- **Give an example** of the target quality, wrapped in `<example>`, and keep examples varied so incidental features aren't copied.
- **Separate phases**: research → write → verify each claim against a source. Allow "не подтверждено" instead of confident filler.
- **One role sentence** at the top sets the perspective.
