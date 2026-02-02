
## Project Context

**Role:** Senior System Analyst teaching interns
**Methodology:** Zettelkasten + Socratic Method
**Output:** Russian-language teaching materials (slides, notes, flashcards)
**Framework:** Evidence-based learning with active recall

---

## Current Work: IT Fundamentals Module

**File:** [1-inbox/IT Fundamentals.md](1-inbox/IT%20Fundamentals.md)

**Objective:** Build foundational understanding of computer architecture and computational thinking from first principles.

**Target Audience:** Interns transitioning to Middle System Analyst role

**Location in Curriculum:** Foundation module - must be completed before moving to higher-level System Analyst concepts (see: `2-MOC/Middle System Analyst Roadmap.md`)

---

## What We're Teaching

### Core Concepts Covered

1. **Storage vs RAM vs CPU Architecture**
   - Desk and Library analogy (RAM = desk, Storage = library)
   - Speed differences and why each component exists
   - Data flow: Storage → RAM → CPU → RAM → Storage

2. **Memory Management**
   - What happens when RAM is full (LRU strategy)
   - Role of Operating System (commander vs soldier/CPU)
   - Swapping and virtual memory
   - Performance implications

3. **CPU Instruction Execution**
   - From mystery: "How does silicon understand?"
   - To mechanism: Code systems (flashlight analogy)
   - Physical reactions without understanding
   - Building memory with switches

4. **Binary Representation** ⭐ (Current)
   - Problem: Counting efficiently (100 switches vs 7 switches)
   - Finger analogy: State vs quantity
   - Discovery: 2ⁿ combinations
   - Foundation for understanding how computers actually encode information

---

## Teaching Methodology

### Socratic Approach (80/20 Rule)
- **80% facilitation** - Ask questions, guide discovery
- **20% lecture** - Explain after students think
- **Wait time:** 7-10 seconds after questions
- **Check-for-understanding:** Mid-lesson and end-of-lesson verification

### Content Standards

**DO:**
- ✓ Ask questions BEFORE explaining
- ✓ Use precise technical language
- ✓ Build concepts progressively (simple → complex)
- ✓ Include active recall questions (Test Your Understanding sections)
- ✓ Use concrete analogies that map to physical reality
- ✓ Format for readability (clear headings, concise bullets)

**DON'T:**
- ✗ Include trivial or redundant explanations
- ✗ Write obvious step-by-step that adds no value
- ✗ Use elaborate formatting that obscures content
- ✗ Provide answers before questions
- ✗ Repeat analogies unnecessarily

---

## Document Structure

### Sections Completed

1. **Why IT Fundamentals Matter** (System Analyst perspective)
2. **RAM vs Storage** (Desk and Library analogy)
3. **Why Both Are Needed** (Speed comparison)
4. **Memory Management** (OS role, LRU, swapping)
5. **CPU Execution** (Flashlight analogy, code systems, switches)
6. **Binary Counting** (Finger analogy, 2ⁿ pattern) ⭐ Current

### Next Steps

- [ ] Connect binary representation to actual CPU transistors
- [ ] Explain instruction encoding (how "add" becomes binary pattern)
- [ ] Show how CPU circuits react to binary patterns
- [ ] Quick check questions for entire module
- [ ] Move from `1-inbox/` to `3-permanent/`
- [ ] Create flashcards in `5-flashcards/IT-Fundamentals.csv`
- [ ] Update `2-MOC/Middle System Analyst Roadmap.md`

---

## Key Pedagogical Transitions

### 1. From Human to Machine Intelligence
- Flashlight communication (human interprets) → Machine bell (pattern reaction)
- Establishes: Reaction ≠ Understanding

### 2. From Abstraction to Physical Mechanism
- "Counter" (black box) → Switches (physical components)
- Establishes: Everything is built from simple on/off states

### 3. From Quantity to State
- Fingers as quantity (5 fingers = 5) → Fingers as state (01010 = different patterns)
- Establishes: Binary representation foundation

### 4. From Intuitive to Exponential
- Linear thinking (100 = 100 switches) → Exponential efficiency (100 = 7 switches)
- Establishes: Power of binary encoding

---

## Quality Checklist

Before moving to next section:

- [ ] Every major concept has Socratic question introducing it
- [ ] No trivial explanations that don't add understanding
- [ ] Student misconceptions are anticipated and addressed
- [ ] Analogies map accurately to technical reality
- [ ] Active recall questions test actual understanding (not memorization)
- [ ] Content is in Russian (teaching materials)
- [ ] Formatting is clean and scannable

---

## Integration with Project Guidelines

**References:**
- **CLAUDE.md** (project instructions) - Teaching philosophy and structure
- **~/.claude/CLAUDE.md** (global rules) - Senior engineer thinking standards
- **2-MOC/Middle System Analyst Roadmap.md** - Curriculum navigation

**Alignment:**
- ✓ Atomic note structure (one concept per section)
- ✓ Interconnected (each section builds on previous)
- ✓ Flashcard-ready (specific, testable concepts)
- ✓ Socratic method (questions before answers)
- ✓ Russian language (all teaching content)

---

## Current Focus: Binary Foundation

**Why This Matters:**
Binary representation is the bridge between:
- Physical reality (switches, transistors)
- Computational abstraction (numbers, instructions, data)

Without understanding binary, students cannot grasp:
- How CPU instructions are encoded
- Why data types have size limits
- How memory addressing works
- What "32-bit" vs "64-bit" actually means

**Next Conceptual Jump:**
From "7 switches can count to 100" → "CPU instructions are binary patterns that trigger specific circuits"

This requires bridging:
1. Binary as counting system
2. Binary as instruction encoding
3. CPU circuits wired to react to specific patterns

---

## Success Criteria

Module complete when student can:
1. Explain data flow through Storage/RAM/CPU without looking at notes
2. Diagnose "slow computer" by identifying bottleneck (RAM/CPU/Storage)
3. Understand why CPU needs RAM (speed mismatch)
4. Explain OS role in memory management
5. Calculate: How many switches needed to represent N values (2ⁿ)
6. Understand: Computer = patterns of on/off triggering physical reactions

**Assessment:** Test Your Understanding questions at end of module (9 questions covering all concepts)

---

## Notes for AI Assistant

**Context Preservation:**
- This file serves as working memory for the teaching project
- Update as sections are completed
- Reference when user asks "where are we?" or "what's next?"
- Maintain alignment with CLAUDE.md principles

**When Creating Content:**
1. Check this file for current focus
2. Review what's already covered (don't repeat)
3. Ensure new content builds on previous sections
4. Update "Next Steps" checklist when completing work
5. Maintain Socratic flow and quality standards

**When Stuck:**
- Re-read the pedagogical transitions section
- Check if you're jumping conceptual gaps too quickly
- Verify you're asking questions BEFORE explaining
- Confirm no trivial content is being added
