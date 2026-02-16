# Marp Rules

Use Marp when exporting slides to PDF. Follows all rules from `slides.md` + these styling specifics.

---

## When to Trigger

- User asks for PDF slides
- User says "export to PDF", "create presentation", "marp"
- Converting existing `.md` slide content to printable format

---

## Header & Footer

```yaml
header: "System Analyst Bootcamp"
footer: "{{Lesson Title}}"        # Always the lesson title
```

Footer = lesson title on every slide (except title page where it's hidden).

---

## Title Page Structure

Every presentation starts with a title slide using `<!-- _class: title -->`:

```markdown
<!-- _class: title _paginate: skip -->

<div class="course">SYSTEM ANALYST</div>
<div class="author">presented by Ayub</div>

# Requirements Engineering
```

**Design rationale:**
- Course branding (small, subtle) → establishes context without competing
- Author credit → professional attribution
- Lesson title (large, handwriting) → unique, memorable, draws attention
- Header/footer hidden on title page

This inverted hierarchy follows the "repeated context, unique focus" principle — the course name appears every lesson (can be subtle), while the lesson title is unique and deserves emphasis.

---

## Colors

| Element | Color | Usage |
|---------|-------|-------|
| Background | `#F9F5F0` | Warm off-white |
| Main text | `#424242` | Dark gray |
| Secondary text | `#6B6B6B` | Lighter gray for notes, captions |
| Headings | `#2C3E50` | Dark blue-gray |
| Accent/bold | `#E74C3C` | Red for keywords |
| Links/highlights | `#3498DB` | Blue |

---

## Formatting Preferences

**Use:**
- Bullet points and ordered lists (not paragraphs)
- Tables for comparisons
- **Bold** for key terms and important points
- Images/visuals to fill empty space

**Avoid:**
- Long paragraphs
- Walls of text
- Empty slides
- HR lines on title/lead slides

---

## Socratic Questions

Center-aligned, bold, before any concept introduction:

```markdown
<!-- _class: lead -->

**Как думаешь, зачем нужен API?**
```

---

## Teacher Notes

Hidden from PDF output — use HTML comments:

```markdown
<!--
Teacher Notes:
- Expand on this point
- Expected questions
- Time: 3 min
-->
```

---

## Images & Visuals

Fill free space with relevant visuals:

```markdown
![bg right:40%](image.png)      # Right side, 40% width
![bg left:50% 80%](image.png)   # Left side, 50% width, 80% size
![bg contain](meme.png)         # Fit entire image
```

Memes OK when they reinforce the learning point.

---

## Full Theme

```yaml
style: |
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&family=JetBrains+Mono&family=Source+Serif+4:wght@400;600&display=swap');

  section {
    font-family: 'Ubuntu', sans-serif;
    background: #F9F5F0;
    color: #424242;
    padding: 40px;
  }

  /* Content slides: h1 with underline */
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
    color: #424242;
  }

  pre {
    background: #2C3E50;
    color: #F9F5F0;
    padding: 20px;
    border-radius: 8px;
  }

  pre code {
    background: transparent;
    color: inherit;
  }

  blockquote {
    border-left: 4px solid #3498DB;
    padding-left: 20px;
    color: #6B6B6B;
    font-style: italic;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    background: #2C3E50;
    color: #F9F5F0;
    padding: 12px;
  }

  td {
    border: 1px solid #DCDCDC;
    padding: 10px;
  }

  /* Lead slides: centered, no h1 underline */
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

  /* Title page: custom typography */
  section.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px;
  }

  section.title::before {
    content: "SYSTEM ANALYST";
    font-family: 'Source Serif 4', 'Source Serif Pro', serif;
    font-size: 45px;
    font-weight: 600;
    color: #2C3E50;
    margin-bottom: 8px;
  }

  section.title::after {
    content: "presented by Ayub";
    font-family: 'Source Serif 4', 'Source Serif Pro', serif;
    font-size: 25px;
    font-weight: 400;
    color: #6B6B6B;
    position: absolute;
    top: calc(50% - 30px);
  }

  section.title h1 {
    font-family: 'Apricots', 'Dancing Script', 'Pacifico', cursive;
    font-size: 75px;
    font-weight: 400;
    color: #2C3E50;
    border-bottom: none;
    padding-bottom: 0;
    margin-top: 40px;
  }
```

---

## Slide Classes

| Class | Usage | H1 underline |
|-------|-------|--------------|
| (none) | Content slides | Yes |
| `lead` | Socratic questions, simple centered text | No |
| `title` | Lesson title page | No |

---

## Export Command

```bash
marp slides.md -o slides.pdf
```

---

## Handwriting Font Note

Marp uses web fonts. For `Apricots` (local font), alternatives that work:
- `Dancing Script` (Google Fonts, similar feel)
- `Pacifico` (Google Fonts, more playful)
- Or embed Apricots via base64 in CSS

To use Google Fonts handwriting:
```yaml
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
```
