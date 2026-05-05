TARGET DECK: System Analyst::BPMN::01 - Fundamentals
Tags: bpmn basics
**Related:** [[7-slides/bpmn-a/bpmn-a]]

---

START
Coding Questions
Что такое BPMN?
Back: **BPMN** (Business Process Model and Notation) — международный стандарт ISO/IEC 19510 для графического описания бизнес-процессов. Читается бизнесом и аналитиками.
Tags: bpmn basics
END

START
Coding Questions
Зачем системному аналитику нужен BPMN?
Back: SA использует BPMN, чтобы зафиксировать AS-IS (как процесс работает сейчас) и TO-BE (как должен работать после изменений) — до проектирования технического решения.
Tags: bpmn basics
END

START
Coding Questions
Для кого предназначен BPMN, а для кого — UML?
Back: **BPMN** — язык бизнеса: читают аналитик и бизнес, описывает процесс (КТО, ЧТО, КОГДА). **UML** — язык разработчиков: читают архитектор и девелопер, описывает систему (классы, объекты, поведение кода).
Tags: bpmn basics
END

START
Coding Questions
Что такое Start Event в BPMN и как он выглядит?
Back: **Start Event** — триггер, с которого начинается процесс. Визуально: тонкий круг `○`. Один на процесс (обычно). Название = что запускает процесс. Пример: `○ Заявитель пришёл в ЦОН`.
Tags: bpmn events
END

START
Coding Questions
Что такое End Event в BPMN и как он выглядит?
Back: **End Event** — конкретный исход процесса. Визуально: жирный круг `◉`. Может быть несколько — для разных исходов. Пример: `◉ ВУ выдано`, `◉ Отказ по лишению`.
Tags: bpmn events
END

START
Coding Questions
Что такое Task в BPMN?
Back: **Task** — одно конкретное действие, прямоугольник со скруглёнными углами. Правило: Task = одно действие, один исполнитель. Название: глагол + объект.
Tags: bpmn task
END

START
Coding Questions
Как проверить, что Task атомарен?
Back: Тест атомарности: если действие можно разбить через «и / или / затем» — это уже несколько Task'ов, а не один.
Tags: bpmn task
END

START
Coding Questions
Что такое Sequence Flow в BPMN?
Back: **Sequence Flow** — сплошная стрелка `→`, задающая порядок выполнения шагов. Правило: каждый элемент (кроме Start и End) имеет входящий и исходящий поток. Всегда односторонняя.
Tags: bpmn flow
END

START
Coding Questions
Чем Sequence Flow отличается от Message Flow?
Back: **Sequence Flow** — сплошная стрелка, только **внутри** одного Pool, задаёт порядок шагов. **Message Flow** — пунктирная стрелка, только **между** Pool'ами, передаёт сообщение другой организации.
Tags: bpmn flow
END

START
Coding Questions
Сколько типов Task существует в BPMN?
Back: **4 типа**: User Task, Service Task, Manual Task, Send/Receive Task.
Tags: bpmn task
END

START
Coding Questions
Что такое User Task в BPMN?
Back: **User Task** 👤 — человек выполняет работу **через** программу (сайт, CRM, портал). Тест: «участвует живой человек?» + «он работает через систему?» → оба «да» = User Task.
Tags: bpmn task
END

START
Coding Questions
Что такое Service Task в BPMN?
Back: **Service Task** ⚙ — шаг исполняет система **автоматически**, без участия человека. Тест: убери человека — шаг всё ещё работает? → Service Task. Пример: SMS-шлюз отправляет уведомление.
Tags: bpmn task
END

START
Coding Questions
Что такое Manual Task в BPMN?
Back: **Manual Task** ✋ — человек выполняет действие **без ИТ**, чисто физически. Тест: есть ли экран перед исполнителем в момент действия? Нет → Manual Task. Пример: курьер доставляет права.
Tags: bpmn task
END

START
Coding Questions
Чем Send Task отличается от Receive Task в BPMN?
Back: **Send Task** 📤 — отправить сообщение и **сразу продолжить** процесс, не ожидая ответа. **Receive Task** 📥 — процесс **блокируется** и продолжается только после получения ответного сообщения.
Tags: bpmn task
END

START
Coding Questions
Чем Service Task отличается от Send/Receive Task в BPMN?
Back: **Service Task** ⚙ — вызвал и получил ответ **мгновенно** (синхронно). **Send/Receive** 📤📥 — отправил сообщение, процесс **ждёт** ответа неизвестно сколько (асинхронно). Ключевой признак: процесс ждёт → Send/Receive.
Tags: bpmn task
END

START
Coding Questions
Что такое уровни детализации в BPMN?
Back:
- **High-level** — для руководства (одна задача «Проверить документы»)
- **Detailed** — для аналитиков/разработчиков (каждая проверка отдельно)
- **Implementation** — для технарей (+ системы, API, таймауты)
Tags: bpmn basics
END

START
Coding Questions
Как выбрать уровень детализации BPMN-диаграммы?
Back: Правило: начни с high-level, детализируй только там, где решение зависит от деталей. Инструмент детализации — Collapsed Sub-Process.
Tags: bpmn basics
END

START
Coding Questions
Сколько типов Gateway существует в BPMN?
Back: **4 типа**: XOR (Exclusive), AND (Parallel), OR (Inclusive), Event-based.
Tags: bpmn gateway
END

START
Coding Questions
Что такое XOR Gateway в BPMN?
Back: **XOR Gateway** `◇×` — выбирает ровно **одну** ветку по условию на данных. Условия взаимоисключающие. Все исходящие ветки подписаны условием. Пример: «медсправка действительна?»
Tags: bpmn gateway
END

START
Coding Questions
Что такое AND Gateway в BPMN?
Back: **AND Gateway** `◇+` — запускает **все** ветки одновременно. Используется парой: split (разветвление) + join (схождение). Join ждёт завершения **всех** веток.
Tags: bpmn gateway
END

START
Coding Questions
Что такое OR Gateway в BPMN и чем он отличается от XOR?
Back: **OR Gateway** `◇○` — выбирает **один или несколько** путей, чьи условия истинны. XOR → ровно одна ветка. OR → минимум одна, может несколько. Join ждёт только реально запущенные ветки.
Tags: bpmn gateway
END

START
Coding Questions
Что такое Event-based Gateway в BPMN?
Back: **Event-based Gateway** `◇⌖` — выбор по тому, **какое событие наступит первым**. Каждая ветка начинается с события (не задачи). Пример: вызов на табло vs таймаут 1 час.
Tags: bpmn gateway
END
