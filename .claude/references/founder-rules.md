# Founder Rules — EdTech Startup

Operating principles for product decisions on the SA bootcamp platform.
Read before making any feature, pricing, or scope decision.

---

## 1. Validate before you build

**Run a manual cohort first.** Before writing a single line of platform code, run the course via Zoom + Google Forms + Telegram. If you can't sell it that way, the platform won't fix it.

The "Field of Dreams" trap in EdTech: "if I build great content, students will come and finish it." They won't. 3–8% MOOC completion is the baseline for self-paced without accountability structure — regardless of content quality.

**Minimum proof required before investing in any feature:**
- Students pay real money
- Students complete at least one full module
- Students tell someone else about it unprompted

---

## 2. One metric that matters right now: completion rate

Every feature decision starts here: **does this increase the probability that a student finishes the course?**

Target: >70% completion (industry average: 3–8% self-paced, 90%+ cohort with accountability).
Our bet: pre-recorded + accountability structure = self-paced flexibility + cohort completion rate.

If a feature doesn't move completion rate — it's bonus material. Build it later.

---

## 3. The smallest version that proves it works

Before building anything, ask: what is the minimum experiment that tells us if this is worth building?

| Feature idea | Minimum experiment |
|---|---|
| AI lesson chatbot | Use vanilla Claude with a system prompt in the first cohort. Watch what students ask. |
| AI-graded assignments | Grade manually for 20 students. See what feedback patterns repeat. Then automate. |
| Spaced repetition platform | Use Anki + exported cards. See if students actually review. Then build native. |
| SQL sandbox | Use external tool (DB Fiddle, SQLZoo). See if students practice. Then build native. |
| Gamification | Give XP manually in Telegram. See if it affects behavior. Then build it. |

**Why:** building before validation burns runway on wrong assumptions. The Russian SA bootcamp market is not yet proven for your product specifically.

---

## 4. Ruthless scope

If it's not required for a Junior SA to get their first job — it's bonus or cut.

Filter every feature through: "Does a student need this to walk into a Junior SA interview and perform?"
- If yes → Core 🟢
- If helpful but not blocking → Awareness 🟡 or Bonus 🔵
- If cool but not tied to job readiness → cut or post-launch

The curriculum tier system (🟢/🟡/🔵) already encodes this. Trust it. Don't add Core material without a strong argument.

---

## 5. The student's job to be done

Students don't hire the course to learn. They hire it to **become a Junior SA and get hired**.

Every product decision maps to one of three student fears:
1. "I won't understand the material" → content quality, AI chatbot, live sessions
2. "I won't finish" → accountability structure, curators, gamification, streaks
3. "I won't get hired" → career center, mock interviews, portfolio projects, job placement

When two features compete for the roadmap, ask which fear is bigger right now for your current students.

---

## 6. Build priority — what comes first

Build in this order. Don't skip ahead.

1. **Core curriculum** (pre-recorded lessons) — nothing else matters without content
2. **Weekly live sessions + curator** — biggest completion lever; cheap to run manually
3. **Assessment engine** (MCQ, scenario-based) — retrieval practice after each lesson
4. **AI lesson chatbot** — replaces "shy student" problem; course-aware system prompt
5. **SQL sandbox** — concrete, testable, high satisfaction
6. **Spaced repetition flashcards** — solves forgetting curve; auto-sync per lesson
7. **Gamification** (XP, streaks, badges) — retention lever
8. **AI-graded assignments** — differentiator; build only after manual grading patterns are clear
9. **Career center** — CV review, mock interview, job board
10. **AI Stakeholder Simulation** — blue ocean; ship after core is stable
11. **AI Mock Interview (voice)** — most complex; ship last

**Rule: don't build #4 before #2 is working.** The AI chatbot is less valuable than a live human curator in the first cohort. Accountability first, AI second.

---

## 7. Retention is a Day 1 problem

**Day 1** is the most important day. Students who don't feel a win in the first session won't return.
- First lesson must deliver a felt result: "I just wrote a real SQL query" / "I just read a real API response"
- Onboarding sequence must be warm, short, and immediately active

**Day 3** is the highest dropout point. Motivation from enrollment has faded; habit hasn't formed.
- Curator check-in at Day 3 is the single cheapest intervention with the highest ROI
- Push notification or Telegram message: "what did you learn in lesson 1?" — forces recall AND shows a human cares

**Day 7** — if a student reaches Day 7, they are significantly more likely to finish.
- Loss aversion kicks in: they don't want to lose the streak
- Day 7 achievement badge + public recognition in cohort Telegram

**Rule: design the first 7 days before designing any other UX.**

---

## 8. Pricing model — cohort, not subscription

Subscription works for habit products (Duolingo: daily practice, small units). It fails for transformation products.

A bootcamp is a transformation product: students pay to become something different. The price point must reflect that. The deadline (cohort start date) creates enrollment urgency and completion pressure.

**What works:**
- Fixed cohort start dates → deadline creates urgency
- High enough price that students take it seriously (~$300–800 range for Russian market)
- Payment installments available → reduces upfront barrier

**What doesn't:**
- Monthly subscription → removes the deadline that drives completion
- Free tier → fills with non-serious students, inflates "users" while destroying completion metrics
- Per-course → creates fragmented students (systemanalyst.life problem), no cohesive journey

---

## 9. Understand competitors, don't copy them

**systemanalyst.life**: modular per-course model creates fragmented students who buy one topic and stop. Their strength: content breadth. Their weakness: no accountability, no platform, no cohesion.

**OTUS**: live-first creates scheduling friction that eliminates 30–40% of potential students. Their strength: technical depth, mentorship. Their weakness: scaling cost is linear with instructors.

**Netology/Skillbox/GeekBrains**: live + recorded hybrid, curator teams, job placement. This is table stakes — the minimum to compete. Their weakness: no AI features, shallow technical curriculum for SA.

**Our moat**: AI-integrated features (chatbot, stakeholder sim, voice interview, infinite task generation) are hard to copy because they require product iteration time, not just content budget. Prioritize building them well — not building more content.

---

## 10. Write down every assumption you're betting on

When you make a product bet, record it as an assumption to validate.

Format:
```
Assumption: [what we believe]
Bet size: [how much we're investing based on this]
How to validate: [smallest experiment]
Kill signal: [what would make us stop]
```

Current key assumptions:
- Students in Russian SA market will pay ~$400–600 for a cohort bootcamp
- Completion rate >70% is achievable with pre-recorded + curator + weekly live hybrid
- AI chatbot embedded per lesson will reduce "stuck and quit" dropoff meaningfully
- Job placement >70% within 3 months post-graduation is achievable with this curriculum

**None of these are confirmed. Track them. Update when you have data.**

---

## 11. Honest weakness culture

These weaknesses are real. Planning around them is smarter than pretending they don't exist.

- **No brand recognition** → first cohort must be exceptionally delivered; word of mouth is the only early channel
- **No alumni network** → day 1 hire partner relationships don't exist; manual job placement first
- **Single instructor dependency** → record and systematize everything; the curriculum cannot live only in one person's head
- **Platform build risk** → run first 2 cohorts on manual stack (Zoom + Telegram + Google Classroom); don't delay revenue for platform
- **AI cost risk** → Claude/GPT API costs scale with students; model per-student economics before scaling AI features

**The honest version**: we are a pre-revenue, pre-alumni, pre-platform bootcamp competing against established schools. The moat is the vision for AI features and curriculum depth — but that moat is only real when it's built. Ship the manual version first.

---

## 12. One decision-making filter

When two options compete, ask:

> "Which one makes it more likely that a student who starts the course becomes a Junior SA and gets hired?"

If you can't answer that clearly — the choice doesn't matter yet. Default to the simpler option and keep building.
