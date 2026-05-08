# UML Slides TODO

## Status legend
- ✅ done
- 🔧 partial
- ❌ not started

---

## Lessons

### 1. Sequence Diagram
- ✅ Slides written (`uml-sequence/uml-sequence.md`, 649 lines, ~28 slides)
- ✅ Images in `img/` (5 diagrams)
- ✅ PDF exported (`uml-sequence.pdf`)
- [ ] Review slide content quality

---

### 2. Use Case Diagram
- 🔧 Slides written (`uml-use-case/uml-use-case.md`, 624 lines) — needs review
- ✅ Images: 5/5 done (added `uc-generalization`, `uc-mistakes`)
- ✅ PDF exported (`uml-use-case.pdf`)
- ✅ PlantUML sources saved in `uml-use-case/src/` (rendered via plantuml.com `~h<hex>`)

**Next steps:**
- [ ] Review slide content

---

### 3. OOP Basics
- 🔧 Slides written (`oop-basics/oop-basics.md`, 586 lines) — needs review
- ✅ Images: 6/6 done
- ✅ PDF exported (`oop-basics.pdf`)
- ✅ PlantUML sources in `oop-basics/src/`

---

### 4. Class Diagram
- 🔧 Slides written (`uml-class/uml-class.md`, 503 lines) — needs review
- ✅ Images: 5/5 done
- ✅ PDF exported (`uml-class.pdf`)
- ✅ PlantUML sources in `uml-class/src/`

---

### 5. Activity Diagram
- 🔧 Slides written (`uml-activity/uml-activity.md`, 356 lines) — needs review
- ✅ Images: 2/2 done (`act-simple`, `act-swimlanes`)
- ✅ PDF exported (`uml-activity.pdf`)
- ✅ PlantUML sources in `uml-activity/src/`

---

## Order of work (recommended)

All 5 UML lessons + ERD + Component + Capstone done.

### New lessons added
- ✅ ERD (`7-slides/erd/`, 4 imgs, PDF 263k)
- ✅ Component Diagram (`7-slides/uml-component/`, 5 imgs, PDF 250k)
- ✅ Capstone: BookNook (`7-slides/capstone-bookstore/`, 6 imgs, PDF 343k)

### Remaining
- [ ] Review slide content (all lessons)
- [ ] Future capstones: SkillSpot (online courses), food delivery, cinema

---

## Rules for good slides

### Структура урока
- Каждый раздел: Сократовский вопрос → ответ → углубление → Module Check
- Module Check = 3-5 вопросов после каждого раздела, студенты отвечают вслух
- Финальный Module Check охватывает весь урок
- Микропрактика (7-8 мин) в середине урока — нарисовать/применить самостоятельно
- Peer Review после практики — студенты проверяют друг друга по чеклисту

### Сократовский метод
- Сначала вопрос, потом объяснение — никогда наоборот
- Вопрос привязан к реальному сценарию из жизни студента
- Не слишком сложно (фрустрация), не слишком просто (скука)
- Структура: [сценарий] → [вопрос] → [подсказка/ограничение]
- Хорошо: "Ты заказываешь еду в Wolt. Кто участвует от нажатия кнопки до курьера?"
- Плохо: "Что такое Sequence Diagram?" (нет сценария, нет зацепки)
- После вопроса — пауза 7-10 сек, дать подумать

### Плотность слайдов
- Макс 5-6 пунктов на слайд — если больше, делить на 2
- Один концепт на слайд
- Таблицы для сравнений (не простыня текста)
- Изображение справа (`![bg right:40%]`) когда есть диаграмма
- Ключевые термины **жирным** при первом упоминании
- Главный вывод в `> blockquote`

### Русский язык
- Разговорный тон, "ты" а не "вы"
- Короткие фразы, фрагменты OK — не академические предложения
- IT-термины остаются на английском: Actor, Use Case, Lifeline, Inheritance, Aggregation
- Переводимые термины: "Наследование (Inheritance)", "Инкапсуляция (Encapsulation)"
- Не писать как учебник: "Данная диаграмма представляет собой..." → "Это диаграмма, которая показывает..."
- Глаголы активные: "показывает", "описывает", "связывает" — не "является отображением"
- Примеры из жизни студента: Wolt, Instagram, Telegram, интернет-магазин — не банк/банкомат

### Заметки преподавателя
- HTML-комментарий `<!-- Teacher Notes: ... -->` на каждом сложном слайде
- Заметка должна делать одно из: расширить (что сказать), предсказать (вопросы студентов), перенаправить (если ушли в сторону), задать темп (время блока)

### Аналогии
- Использовать только если маппинг 1:1 без оговорок
- Тест: если нужно больше одного предложения чтобы объяснить аналогию — выбросить
- Аналогия должна ускорять понимание, а не добавлять новый концепт для объяснения

---

## Known issues

- PlantUML `skinparam actorStyle awesome` + Cyrillic multiline actor names → HTTP 400. Use single-line names.
- Subagents can't run Bash without explicit permission — do diagram generation directly.
- Kroki PlantUML POST endpoint sometimes 504/timeout. Workaround: `curl https://www.plantuml.com/plantuml/png/~h$(xxd -p file.puml | tr -d '\n')` — hex POST to plantuml.com works reliably.
