---
name: marp-slides
description: Create professional Marp presentation slides from outlines or topics. Use when user asks to create slides, presentations, export to PDF, or says "marp". Optimized for System Analyst Bootcamp teaching.
allowed-tools: Read, Write, Bash, Glob
---

# Marp Slides Creator

Create teaching presentations using Marp (Markdown to PDF).

**IMPORTANT:** Always read `references/slides.md` and `references/marp.md` first for full styling and content rules.

## Workflow

1. **Read rules** — `references/marp.md` for styling, `references/slides.md` for content
2. **Understand the content** — Read source files or use provided topic/outline
3. **Generate slides** — Follow structure below with user's theme preferences
4. **Export to PDF** — Run `marp <file>.md -o <file>.pdf`

## Header & Footer

```yaml
header: "System Analyst Bootcamp"
footer: "{{Lesson Title}}"        # Always the lesson title
```

## Slide Classes

| Class | Usage | H1 underline | Header/Footer |
|-------|-------|--------------|---------------|
| (none) | Content slides | Yes | Visible |
| `lead` | Socratic questions | No | Visible |
| `title` | Lesson title page | No | Hidden |

## Title Page Template

```markdown
<!-- _class: title _paginate: skip -->

<div class="course">SYSTEM ANALYST</div>
<div class="author">presented by Ayub</div>

# Lesson Title Here
```

## Socratic Question Slide

```markdown
<!-- _class: lead -->

**Как ты думаешь, зачем нужен API?**
```

## Content Slide

```markdown
# Что такое API?

**API** — набор правил для общения программ

- Point one
- Point two
- Point three

![bg right:40%](image.png)
```

## Module Check Slide

```markdown
# Module Check

1. **Что делает** API?
2. **Почему** клиент не общается с БД напрямую?
3. **В чём разница** между X и Y?

<!--
Teacher Notes:
- Дай 3 минуты
- Обсуждение в парах
-->
```

## Full Theme (copy this)

```yaml
---
marp: true
paginate: true
header: "System Analyst Bootcamp"
footer: "{{LESSON_TITLE}}"
style: |
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&family=JetBrains+Mono&family=Source+Serif+4:wght@400;600&family=Dancing+Script:wght@400;700&display=swap');

  section {
    font-family: 'Ubuntu', sans-serif;
    background: #F9F5F0;
    color: #424242;
    padding: 40px;
  }

  h1 {
    color: #2C3E50;
    border-bottom: 3px solid #3498DB;
    padding-bottom: 10px;
  }

  h2 { color: #2C3E50; }
  strong { color: #E74C3C; }

  code {
    font-family: 'JetBrains Mono', monospace;
    background: #EDEAE5;
    padding: 2px 8px;
    border-radius: 4px;
  }

  pre { background: #2C3E50; color: #F9F5F0; padding: 20px; border-radius: 8px; }
  pre code { background: transparent; color: inherit; }

  blockquote {
    border-left: 4px solid #3498DB;
    padding-left: 20px;
    color: #6B6B6B;
    font-style: italic;
  }

  th { background: #2C3E50; color: #F9F5F0; padding: 12px; }
  td { border: 1px solid #DCDCDC; padding: 10px; }

  /* Lead slides: no h1 underline */
  section.lead {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  section.lead h1 {
    border-bottom: none;
    padding-bottom: 0;
  }

  section.lead strong {
    font-size: 1.4em;
    color: #2C3E50;
  }

  /* Title page */
  section.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px;
  }

  section.title header,
  section.title footer {
    display: none;
  }

  section.title .course {
    font-family: 'Source Serif 4', serif;
    font-size: 45px;
    font-weight: 600;
    color: #2C3E50;
    margin-bottom: 8px;
  }

  section.title .author {
    font-family: 'Source Serif 4', serif;
    font-size: 25px;
    font-weight: 400;
    color: #6B6B6B;
    margin-bottom: 40px;
  }

  section.title h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 75px;
    font-weight: 400;
    color: #2C3E50;
    border-bottom: none;
    padding-bottom: 0;
    margin: 0;
  }
---
```

## Export Commands

```bash
marp slides.md -o slides.pdf      # Export to PDF
marp -p slides.md                 # Preview in browser
marp -w slides.md                 # Watch mode
```

## Quality Checklist

- [ ] Title page with course/author/lesson title
- [ ] Footer = lesson title on all slides
- [ ] No HR lines on lead/title slides
- [ ] 3-5 bullet points per slide max
- [ ] Socratic questions before explanations
- [ ] Module Check every 3-5 slides
- [ ] Images/visuals to fill empty space
- [ ] Teacher notes in HTML comments
