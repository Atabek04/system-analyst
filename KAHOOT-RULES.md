# Creating Challenging Kahoot Questions - Rules & Instructions

## Project Goal
Create challenging Kahoot MCQ questions (4 options) for System Analyst teaching materials that test true understanding, not pattern-matching or guessing.

---

## Core Principles

### 1. Test Understanding, Not Guessing
- Questions should require actual knowledge of the concept
- No pattern-matching shortcuts (grammar clues, obvious length differences)
- Avoid "all of the above" or "none of the above" options

### 2. Higher-Order Thinking (Bloom's Taxonomy)
Focus on these cognitive levels:
- **Application**: "When would you use...?"
- **Analysis**: "What's the difference between...?"
- **Evaluation**: "Which approach is better for...?"
- **Synthesis**: "How do these concepts connect...?"

Avoid pure recall: "What is the definition of...?"

### 3. Plausible Distractors
All wrong answers should:
- Represent common misconceptions
- Sound reasonable to someone who hasn't mastered the topic
- Not be obviously wrong
- Be similar in length and structure to correct answer

---

## Question Design Rules

### Structure Requirements
1. **Question stem**: Clear, specific scenario or problem (not vague)
2. **4 options**: One correct, three plausible distractors
3. **Length balance**: All options similar length (no obvious short/long correct answer)
4. **Grammar consistency**: No clues from "a/an" or singular/plural matching
5. **Position variety**: Correct answer should vary (not always option A or C)

### Content Requirements
1. **Scenario-based**: Use realistic work situations
   - ❌ "What is REST?"
   - ✓ "Your API needs to support partial updates of user profiles. Which HTTP method is most appropriate?"

2. **Application-focused**: Test how/when to use, not just definitions
   - ❌ "What does ACID stand for?"
   - ✓ "A banking transaction fails halfway through. Which ACID property ensures the database doesn't show partial changes?"

3. **Comparative thinking**: Compare similar concepts
   - ❌ "What is a microservice?"
   - ✓ "Your e-commerce system processes 100 orders/day with 3 developers. Which architecture is most appropriate and why?"

4. **No jargon overload**: Use clear language, define terms if needed

---

## Distractor Design Guidelines

### Good Distractors Based On:
1. **Common misconceptions**: What students typically confuse
2. **Similar concepts**: Related but incorrect options
3. **Partial understanding**: Answers that are "close but not quite"
4. **Contextual errors**: Right answer for a different scenario

### Example (SDLC):
**Question**: "Stakeholders request new features mid-sprint. Your team uses Scrum. What's the best response?"

Options:
- A) Add features immediately to current sprint ❌ (misconception: Agile = always flexible)
- B) Add to product backlog for next sprint planning ✓ (correct)
- C) Reject the request until project completes ❌ (confuses Scrum with Waterfall)
- D) Stop current sprint and replan ❌ (partial understanding: knows replanning exists but not when)

---

## Quality Checklist

Before finalizing each question, verify:

- [ ] Question tests application/analysis, not pure recall
- [ ] All 4 options are grammatically parallel
- [ ] No length/structure patterns reveal correct answer
- [ ] Distractors represent realistic misconceptions
- [ ] Question includes context/scenario
- [ ] Language is clear and concise (Russian)
- [ ] Correct answer position varies across question set

---

## TODO Plan

### Phase 1: Setup & Analysis
- [ ] Review Middle System Analyst Roadmap.md structure
- [ ] Identify high-priority topics for Kahoot questions
- [ ] Extract key concepts from existing notes in `3-permanent/`

### Phase 2: Question Writing
- [ ] Write questions for Introduction to System Analysis (10-15 questions)
- [ ] Write questions for SDLC & Methodologies (10-15 questions)
- [ ] Write questions for Agile & Scrum (10-15 questions)
- [ ] Write questions for Requirements Engineering (15-20 questions)
- [ ] Write questions for remaining topics (as needed)

### Phase 3: Review & Refinement
- [ ] Review all questions against quality checklist
- [ ] Ensure distractor plausibility
- [ ] Verify question difficulty balance
- [ ] Test questions with sample audience if possible

### Phase 4: Organization & Export
- [ ] Create `5-flashcards/kahoot-questions.csv` or similar format
- [ ] Document answer explanations for feedback
- [ ] Link from roadmap MOC

---

## Question Format Template

```
Topic: [SDLC / Requirements / etc.]
Difficulty: [Easy / Medium / Hard]
Cognitive Level: [Application / Analysis / Evaluation]

Question: [Scenario-based question text in Russian]

A) [Distractor 1 - common misconception]
B) [Distractor 2 - similar concept]
C) [Correct answer] ✓
D) [Distractor 3 - partial understanding]

Explanation: [Why C is correct, why others are wrong]
```

---

## Sources & References

**Kahoot Best Practices**:
- [Kahoot! Question Types](https://support.kahoot.com/hc/en-us/articles/115002308428-Kahoot-question-types)
- [How to Create Engaging MCQ Quizzes](https://www.multiplechoicequestions.org/articles/how-to-create-engaging-mcq-quizzes/)
- [Multi-select answers in Kahoot](https://kahoot.com/blog/2020/04/23/remove-guesswork-training-questions-with-multi-select-kahoot/)

**Effective MCQ Design**:
- [Crafting Effective Multiple Choice Questions - University of Michigan](https://onlineteaching.umich.edu/articles/crafting-effective-multiple-choice-questions/)
- [Writing Multiple Choice Questions For Higher Order Thinking](https://theelearningcoach.com/elearning_design/higher-order-multiple-choice-questions/)
- [Best Practices for Creating Multiple-Choice Questions - NC State](https://teaching-resources.delta.ncsu.edu/multiplechoice/)
- [Writing Multiple-Choice Questions for Higher-level Thinking - Learning Guild](https://www.learningguild.com/learning-guild-research-content/Writing-Multiple-Choice-Questions-for-Higher-level-Thinking)
