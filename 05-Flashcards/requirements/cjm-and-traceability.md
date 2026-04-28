TARGET DECK: System Analyst::Requirements::CJM & Traceability
Tags: requirements cjm traceability
**Related:** [[7-slides/requirements-engineering-c/requirements-engineering-c]]

---

START
Coding Questions
Что такое CJM (Customer Journey Map)?
Back: **CJM** — визуальная карта всего опыта клиента при взаимодействии с продуктом. Показывает путь пользователя от первого контакта до достижения цели, включая эмоции и болевые точки на каждом этапе.
Tags: requirements cjm
END

START
Coding Questions
Сколько компонентов у CJM?
Back: 6 компонентов: Stages, Actions, Touchpoints, Emotions, Pain Points, Opportunities
Tags: requirements cjm
END

START
Coding Questions
Что такое Stages (Этапы) в CJM?
Back: **1. Stages (Этапы)** — фазы пути клиента. Пример: осведомлённость → рассмотрение → покупка → использование → лояльность.
Tags: requirements cjm
END

START
Coding Questions
Что такое Actions (Действия) в CJM?
Back: **2. Actions (Действия)** — конкретные шаги пользователя на каждом этапе. Пример: «ищет отзывы», «сравнивает цены», «оформляет заказ».
Tags: requirements cjm
END

START
Coding Questions
Что такое Touchpoints в CJM?
Back: **3. Touchpoints** — точки контакта пользователя с продуктом/брендом. Пример: сайт, мобильное приложение, email-рассылка, служба поддержки.
Tags: requirements cjm
END

START
Coding Questions
Что такое Emotions (Эмоции) в CJM?
Back: **4. Emotions (Эмоции)** — положительные или отрицательные ощущения пользователя на каждом шаге. Визуализируются как кривая эмоций — помогают найти моменты фрустрации.
Tags: requirements cjm
END

START
Coding Questions
Что такое Pain Points в CJM?
Back: **5. Pain Points** — места, где пользователь испытывает трудности или разочарование. Именно они становятся источниками требований для улучшения продукта.
Tags: requirements cjm
END

START
Coding Questions
Что такое Opportunities (Возможности) в CJM?
Back: **6. Opportunities (Возможности)** — идеи по улучшению каждой болевой точки. Каждый Pain Point → потенциальная фича или улучшение процесса.
Tags: requirements cjm
END

START
Coding Questions
Как CJM помогает системному аналитику находить требования?
Back: CJM → конвейер требований:
1. Найти **Pain Points** (например, "каждый раз вводить адрес")
2. Определить **Opportunities** ("сохранённые адреса")
3. Написать **User Stories** ("As a покупатель, I want сохранять адреса, so that не вводить заново")
4. **Приоритизировать по MoSCoW**
Каждая болевая точка — потенциальная фича.
Tags: requirements cjm
END

START
Coding Questions
Что такое Traceability (Трассировка требований)?
Back: **Traceability** — отслеживание цепочки связей между уровнями требований: `Business Req → User Req → Functional Req → Test Cases`. Гарантирует, что каждый FR прослеживается до бизнес-цели и ни одно требование не потеряно.
Tags: requirements traceability
END

START
Coding Questions
Как выглядит Traceability Matrix (матрица трассировки требований)?
Back: Таблица, связывающая требования по уровням:

| Business | User | FR | Test |
|---|---|---|---|
| BR-001: Продажи +25% | UR-001: Найти товары | FR-001: Фильтр по цене | TC-001: Фильтр работает |

Читай: бизнесу нужны продажи → пользователь должен искать → системе нужен фильтр → проверяется тестом.
Tags: requirements traceability matrix
END

START
Coding Questions
Сколько этапов в жизненном цикле требования?
Back: 6 этапов: Elicitation, Documentation, Prioritization, Management, Dev/Test/Release, Iteration
Tags: requirements lifecycle
END

START
Coding Questions
Какой первый этап жизненного цикла требования?
Back: **1. Сбор (Elicitation)** — извлечение требований у стейкхолдеров, из CJM, документов, наблюдений.
Tags: requirements lifecycle
END

START
Coding Questions
Какой второй этап жизненного цикла требования?
Back: **2. Документирование (Documentation)** — запись в форме User Stories + Acceptance Criteria.
Tags: requirements lifecycle
END

START
Coding Questions
Какой третий этап жизненного цикла требования?
Back: **3. Приоритизация (Prioritization)** — MoSCoW, Kano Model, определение MVP.
Tags: requirements lifecycle
END

START
Coding Questions
Какой четвёртый этап жизненного цикла требования?
Back: **4. Управление (Management)** — Traceability Matrix, отслеживание изменений через Change Requests.
Tags: requirements lifecycle
END

START
Coding Questions
Какой пятый этап жизненного цикла требования?
Back: **5. Разработка → Тестирование → Релиз** — требование реализуется командой и проверяется по Acceptance Criteria.
Tags: requirements lifecycle
END

START
Coding Questions
Какой шестой этап жизненного цикла требования?
Back: **6. Итерация** — Should/Could have требования переходят в следующие версии; цикл повторяется.
Tags: requirements lifecycle
END
