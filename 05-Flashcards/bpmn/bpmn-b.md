TARGET DECK: System Analyst::BPMN::02 - Pools, Lanes & Artifacts
Tags: bpmn pool lane artifacts
**Related:** [[7-slides/bpmn-b/bpmn-b]]

---

START
Coding Questions
Что такое Pool в BPMN?
Back: **Pool** — «бассейн», граница одной организации или одного процесса. Один Pool = один участник (компания, система). Sequence Flow не пересекает границу Pool.
Tags: bpmn pool
END

START
Coding Questions
Что такое Lane (дорожка) в BPMN?
Back: **Lane** — «дорожка в бассейне», разделение Pool по ролям, отделам или системам. Отвечает на вопрос КТО выполняет задачи. Каждая задача лежит строго в одной дорожке.
Tags: bpmn pool
END

START
Coding Questions
Как решить: Lane или отдельный Pool?
Back: Тест: «если я позвоню директору и скажу "сделай иначе" — он послушает?» Да → одна организация → Lane. Нет → разные организации → отдельный Pool.
Tags: bpmn pool
END

START
Coding Questions
Что такое Message Flow в BPMN?
Back: **Message Flow** — пунктирная стрелка с кружком, соединяет **только** разные Pool'ы. Передаёт сообщение от одной организации к другой. Sequence Flow (сплошная) — только внутри одного Pool.
Tags: bpmn pool flow
END

START
Coding Questions
Что такое Black Box Pool в BPMN?
Back: **Black Box Pool** — Pool внешней организации без внутреннего содержимого. Фиксирует факт обмена сообщениями, но не описывает внутренний процесс. Пример: Pool «Платёжный шлюз».
Tags: bpmn pool
END

START
Coding Questions
Что такое Sub-process в BPMN?
Back: **Sub-process** — задача-папка `[+]` с полноценным внутренним процессом. Снаружи — один прямоугольник, внутри — своя диаграмма со Start/End/Tasks/Gateways. Используется, чтобы скрыть сложность.
Tags: bpmn artifacts
END

START
Coding Questions
Чем Sub-process отличается от Group в BPMN?
Back: **Sub-process** `[+]` — функциональная единица с внутренним процессом; влияет на исполнение. **Group** — пунктирная рамка, только визуальная; не влияет на исполнение и может пересекать дорожки.
Tags: bpmn artifacts
END

START
Coding Questions
Что такое Loop marker в BPMN?
Back: **Loop marker** `↻` — значок повтора под задачей или Sub-process. Обозначает, что элемент может выполняться повторно. Заменяет явную обратную стрелку. Пример: «Сдача экзамена ↻ (до 3 попыток)».
Tags: bpmn artifacts
END

START
Coding Questions
Что такое Data Object в BPMN?
Back: **Data Object** 📄 — данные, с которыми работают задачи (бумага, файл, JSON). Соединяется с задачей пунктирной ассоциацией. Живёт только внутри одного экземпляра процесса. НЕ управляет потоком.
Tags: bpmn artifacts
END

START
Coding Questions
Чем Data Store отличается от Data Object в BPMN?
Back: **Data Object** 📄 — одноразовый артефакт, живёт внутри конкретного экземпляра процесса. **Data Store** 🗄 — постоянное хранилище, «переживает» процесс (база данных, реестр, S3-бакет).
Tags: bpmn artifacts
END

START
Coding Questions
Что такое Annotation (аннотация) в BPMN?
Back: **Annotation** — комментарий для читателя, квадратная скобка `[ ... ]` с текстом, прикреплённая ассоциацией. Движок процессов её игнорирует. Использовать, когда правило неочевидно из названия элемента.
Tags: bpmn artifacts
END

START
Coding Questions
Что такое AS-IS диаграмма в BPMN?
Back: **AS-IS** — диаграмма текущего состояния: как процесс работает **прямо сейчас**, до каких-либо изменений. SA рисует её первой — чтобы зафиксировать и понять существующий процесс.
Tags: bpmn basics
END

START
Coding Questions
Что такое TO-BE диаграмма в BPMN?
Back: **TO-BE** — диаграмма целевого состояния: как процесс **должен работать** после изменений. Рисуется после AS-IS, когда SA выявил проблемы и спроектировал улучшения.
Tags: bpmn basics
END

START
Coding Questions
Каков порядок работы SA с AS-IS и TO-BE диаграммами?
Back: 1. Нарисовать **AS-IS** (как есть). 2. Выявить проблемы и узкие места. 3. Спроектировать **TO-BE** (как должно быть). AS-IS и TO-BE — не «плохой/хороший», а «до/после».
Tags: bpmn basics
END
