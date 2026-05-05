TARGET DECK: System Analyst::BPMN::03 - Visual Elements
Tags: bpmn elements visual

---

START
Coding Questions
![](start-event-none.svg)
Как называется этот элемент BPMN?
Back: **Start Event (None)** — стартовое событие без триггера. Процесс запускается вручную или по умолчанию. Тонкий круг `○`.
Tags: bpmn elements events
END

START
Coding Questions
![](start-event-message.svg)
Как называется этот элемент BPMN и что его запускает?
Back: **Start Event (Message)** — процесс стартует при получении сообщения (входящий запрос, письмо, API-вызов). Тонкий круг с конвертом внутри.
Tags: bpmn elements events
END

START
Coding Questions
![](start-event-timer.svg)
Как называется этот элемент BPMN и что его запускает?
Back: **Start Event (Timer)** — процесс стартует по расписанию или в конкретное время. Тонкий круг с часами внутри.
Tags: bpmn elements events
END

START
Coding Questions
![](start-event-error.svg)
Как называется этот элемент BPMN и где он используется?
Back: **Start Event (Error)** — процесс (обычно Sub-Process) стартует при возникновении ошибки. Тонкий круг с молнией внутри.
Tags: bpmn elements events
END

START
Coding Questions
![](start-event-signal.svg)
Как называется этот элемент BPMN?
Back: **Start Event (Signal)** — процесс стартует при получении сигнала. Сигнал широковещательный (broadcast) — его получают все подписчики. В отличие от Message — не адресный.
Tags: bpmn elements events
END

START
Coding Questions
![](end-event-none.svg)
Как называется этот элемент BPMN?
Back: **End Event (None)** — процесс завершён, никаких дополнительных действий не происходит. Жирный круг `◉`.
Tags: bpmn elements events
END

START
Coding Questions
![](end-event-message.svg)
Как называется этот элемент BPMN?
Back: **End Event (Message)** — процесс завершается отправкой сообщения другому участнику. Жирный круг с закрашенным конвертом.
Tags: bpmn elements events
END

START
Coding Questions
![](end-event-error.svg)
Как называется этот элемент BPMN?
Back: **End Event (Error)** — процесс завершается с ошибкой, которую должен поймать родительский процесс. Жирный круг с закрашенной молнией.
Tags: bpmn elements events
END

START
Coding Questions
![](end-event-terminate.svg)
Как называется этот элемент BPMN и чем он отличается от обычного End Event?
Back: **End Event (Terminate)** — немедленно завершает **весь** процесс, включая все параллельные ветки. Обычный End Event завершает только свой поток. Жирный круг с закрашенным кругом внутри.
Tags: bpmn elements events
END

START
Coding Questions
![](end-event-signal.svg)
Как называется этот элемент BPMN?
Back: **End Event (Signal)** — процесс завершается отправкой широковещательного сигнала всем подписчикам. Жирный круг с закрашенным треугольником.
Tags: bpmn elements events
END

START
Coding Questions
![](intermediate-event-none.svg)
Как называется этот элемент BPMN?
Back: **Intermediate Event (None)** — промежуточная точка внутри процесса, фиксирует момент без триггера. Двойной круг `◎`. Стоит между Start и End Event.
Tags: bpmn elements events
END

START
Coding Questions
![](intermediate-event-catch-message.svg)
Как называется этот элемент BPMN?
Back: **Intermediate Catch Event (Message)** — процесс **ждёт** входящего сообщения и продолжается только после его получения. Двойной круг с незакрашенным конвертом.
Tags: bpmn elements events
END

START
Coding Questions
![](intermediate-event-catch-timer.svg)
Как называется этот элемент BPMN?
Back: **Intermediate Catch Event (Timer)** — процесс ждёт определённое время или до конкретной даты. Пример: «Подождать 3 дня, затем отправить напоминание». Двойной круг с часами.
Tags: bpmn elements events
END

START
Coding Questions
![](intermediate-event-catch-error.svg)
Как называется этот элемент BPMN?
Back: **Intermediate Catch Event (Error)** — перехватывает ошибку. Крепится к границе Task или Sub-Process. При ошибке поток уходит по этому событию. Двойной круг с незакрашенной молнией.
Tags: bpmn elements events
END

START
Coding Questions
![](intermediate-event-catch-signal.svg)
Как называется этот элемент BPMN?
Back: **Intermediate Catch Event (Signal)** — ждёт входящего сигнала (широковещательного). Двойной круг с незакрашенным треугольником.
Tags: bpmn elements events
END

START
Coding Questions
![](intermediate-event-throw-message.svg)
Как называется этот элемент BPMN и чем он отличается от catch-версии?
Back: **Intermediate Throw Event (Message)** — **отправляет** сообщение и сразу продолжает поток. Catch — ждёт. Throw — отправляет. Двойной круг с закрашенным конвертом.
Tags: bpmn elements events
END

START
Coding Questions
![](intermediate-event-throw-signal.svg)
Как называется этот элемент BPMN?
Back: **Intermediate Throw Event (Signal)** — **отправляет** широковещательный сигнал и продолжает поток. Двойной круг с закрашенным треугольником.
Tags: bpmn elements events
END

START
Coding Questions
![](gateway-xor.svg)
Как называется этот элемент BPMN?
Back: **Exclusive Gateway (XOR)** — ромб с X. Выбирает **один** путь из нескольких на основе условия. «Либо-либо». Пример: если сумма > 10 000 → путь A, иначе → путь B.
Tags: bpmn elements gateways
END

START
Coding Questions
![](gateway-parallel.svg)
Как называется этот элемент BPMN?
Back: **Parallel Gateway (AND)** — ромб с +. **Разделяет** поток на несколько параллельных веток (split) или **ждёт** завершения всех веток (join). Все пути выполняются одновременно.
Tags: bpmn elements gateways
END

START
Coding Questions
![](gateway-or.svg)
Как называется этот элемент BPMN и чем он отличается от XOR?
Back: **Inclusive Gateway (OR)** — ромб с кругом. Выбирает **один или несколько** путей, где условие истинно. XOR — строго один путь. OR — один или больше.
Tags: bpmn elements gateways
END

START
Coding Questions
![](gateway-eventbased.svg)
Как называется этот элемент BPMN?
Back: **Event-Based Gateway** — ромб с двойным кругом внутри. Ждёт первого наступившего события из нескольких. Процесс идёт по ветке того события, которое пришло первым.
Tags: bpmn elements gateways
END

START
Coding Questions
![](gateway-complex.svg)
Как называется этот элемент BPMN?
Back: **Complex Gateway** — ромб со звёздочкой. Описывает сложную логику ветвления, которую нельзя выразить через XOR/AND/OR. Используется редко — только при нестандартных условиях.
Tags: bpmn elements gateways
END

START
Coding Questions
![](task.svg)
Как называется этот элемент BPMN?
Back: **Task** — прямоугольник с закруглёнными углами. Базовая единица работы внутри процесса. Конкретное действие, которое нельзя или не нужно детализировать дальше.
Tags: bpmn elements tasks
END

START
Coding Questions
![](user-task.svg)
Как называется этот элемент BPMN и кто выполняет эту задачу?
Back: **User Task** — задача выполняется **человеком** через интерфейс системы. Иконка человека в левом верхнем углу. Пример: «Оператор проверяет документы в CRM».
Tags: bpmn elements tasks
END

START
Coding Questions
![](service-task.svg)
Как называется этот элемент BPMN и кто выполняет эту задачу?
Back: **Service Task** — задача выполняется **автоматически системой** (API-вызов, скрипт, сервис). Иконка шестерёнки. Пример: «Система отправляет запрос в налоговую».
Tags: bpmn elements tasks
END

START
Coding Questions
![](send-task.svg)
Как называется этот элемент BPMN?
Back: **Send Task** — задача отправляет сообщение другому участнику или системе. Закрашенный конверт. Пример: «Отправить уведомление клиенту по email».
Tags: bpmn elements tasks
END

START
Coding Questions
![](receive-task.svg)
Как называется этот элемент BPMN?
Back: **Receive Task** — задача ждёт входящего сообщения и продолжается только после его получения. Незакрашенный конверт. Пример: «Ждать ответа от банка».
Tags: bpmn elements tasks
END

START
Coding Questions
![](script-task.svg)
Как называется этот элемент BPMN?
Back: **Script Task** — задача выполняется **скриптом** (кодом) внутри процессного движка. Иконка свитка. Пример: «Рассчитать стоимость заказа по формуле».
Tags: bpmn elements tasks
END

START
Coding Questions
![](subprocess-collapsed.svg)
Как называется этот элемент BPMN?
Back: **Sub-Process (Collapsed)** — прямоугольник со значком + внизу. Скрывает внутри себя полноценный процесс. Детали видны только при раскрытии. Используется для упрощения диаграммы.
Tags: bpmn elements tasks
END

START
Coding Questions
![](call-activity.svg)
Как называется этот элемент BPMN и чем он отличается от Sub-Process?
Back: **Call Activity** — прямоугольник с жирной границей. Вызывает **переиспользуемый** глобальный процесс, определённый отдельно. Sub-Process встроен в текущую диаграмму; Call Activity — ссылка на внешний.
Tags: bpmn elements tasks
END

START
Coding Questions
![](participant.svg)
Как называется этот элемент BPMN?
Back: **Pool (Participant)** — большой прямоугольник-контейнер. Обозначает одного участника процесса (организацию, систему, роль). Весь процесс одного участника находится внутри Pool.
Tags: bpmn elements containers
END

START
Coding Questions
![](lane.svg)
Как называется этот элемент BPMN?
Back: **Lane** — горизонтальная (или вертикальная) полоса внутри Pool. Делит Pool на зоны ответственности: разные роли, отделы или системы. Задачи в Lane → ответственность этой роли.
Tags: bpmn elements containers
END

START
Coding Questions
![](data-object.svg)
Как называется этот элемент BPMN?
Back: **Data Object** — документ/файл с загнутым уголком. Обозначает данные, которые создаются, используются или изменяются в процессе. Пример: «Заявление», «Договор», «Акт».
Tags: bpmn elements artifacts
END

START
Coding Questions
![](data-store.svg)
Как называется этот элемент BPMN и чем он отличается от Data Object?
Back: **Data Store** — цилиндр (как база данных). Постоянное хранилище данных, которое существует за пределами процесса. Data Object — временный документ в рамках процесса. Data Store — БД, реестр.
Tags: bpmn elements artifacts
END

START
Coding Questions
![](text-annotation.svg)
Как называется этот элемент BPMN?
Back: **Text Annotation** — скобка с текстом. Добавляет пояснение или комментарий к элементу диаграммы. Не влияет на логику процесса — только для читаемости.
Tags: bpmn elements artifacts
END
