---
marp: true
paginate: true
header: "System Analyst Bootcamp"
footer: "API Basics"
style: |
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&family=JetBrains+Mono&family=Source+Serif+4:wght@400;600&family=Dancing+Script:wght@400;700&display=swap');

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

<!-- _class: title _paginate: skip -->

<div class="course">SYSTEM ANALYST</div>
<div class="author">presented by Ayub</div>

# API Basics

---

<!-- _class: lead -->

**Как ты думаешь, как приложения общаются друг с другом?**

<!--
Teacher Notes:
- Дай 7-10 секунд на размышление
- Собери 2-3 ответа
- Примеры: мессенджеры, банковские приложения
-->

---

# Что такое API?

**API** (Application Programming Interface) — набор правил, по которым программы общаются друг с другом

- Стандартизированный способ обмена данными
- Скрывает сложность внутренней реализации
- Позволяет разным системам работать вместе

![bg right:40% 80%](https://api.iconify.design/mdi:api.svg?color=%232C3E50)

---

# Аналогия: официант в ресторане

| Ресторан | Программирование |
|----------|------------------|
| Ты (клиент) | Приложение |
| Официант | **API** |
| Кухня | Сервер/База данных |
| Меню | Документация API |

![bg left:35%](https://api.iconify.design/mdi:silverware-fork-knife.svg?color=%232C3E50)

---

# Зачем нужен API?

1. **Безопасность** — клиент не имеет прямого доступа к базе данных
2. **Стандартизация** — единый формат общения
3. **Масштабируемость** — легко добавить новые функции
4. **Переиспользование** — один API для веба, мобилки, партнёров

---

# Module Check

1. **Что делает** API в системе?
2. **Почему** клиент не общается с базой данных напрямую?
3. **В чём разница** между API и базой данных?

<!--
Teacher Notes:
- Дай 3 минуты на размышление
- Пусть обсудят в парах
- Свяжи с аналогией официанта
-->

---

<!-- _class: lead -->

# Вопросы?
