# ✅ Решение — Практика 2 (TaskFlow, доска задач)

> Файл для преподавателя. Один из корректных вариантов. Главное здесь — правильные **методы** (`GET`/`POST`/`PATCH`/`DELETE`) и `204` на удаление.

---

## Сущности БД

```
User
- id: integer (PK)
- name: string
- initials: string
- color: string

Board
- id: integer (PK)
- name: string

Column
- id: integer (PK)
- boardId: integer (FK → Board)
- name: string               # Backlog, In Progress, Review, Done
- position: integer

Card
- id: integer (PK)
- columnId: integer (FK → Column)
- title: string
- description: string | null
- assigneeId: integer | null   # null = «Не назначен»
- dueDate: date | null         # null = без срока
- priority: enum(low, medium, high)
- position: integer
- createdAt: datetime

Label
- id: integer (PK)
- boardId: integer (FK → Board)
- name: string               # «Баг», «Фича», «UI»
- color: string

CardLabel                    # связь many-to-many (карточка ↔ метки)
- cardId: integer (FK → Card)
- labelId: integer (FK → Label)

ChecklistItem
- id: integer (PK)
- cardId: integer (FK → Card)
- text: string
- isDone: boolean

Comment
- id: integer (PK)
- cardId: integer (FK → Card)
- authorId: integer (FK → User)
- text: string
- createdAt: datetime
```

Ключевые моменты:
- `assigneeId` и `dueDate` — **nullable**.
- Метки это связь many-to-many → отдельная таблица `CardLabel`.
- `ChecklistItem.isDone` — **boolean**.
- `Card.columnId` — именно смена этого поля переносит карточку между колонками.

---

## Endpoints

### Экран 1 — доска целиком → **вложенная структура** (колонки → карточки)

```http
GET /boards/1
```
```json
{
  "id": 1,
  "name": "Релиз мобильного приложения",
  "columns": [
    {
      "id": 10,
      "name": "In Progress",
      "cards": [
        {
          "id": 500,
          "title": "Исправить вход по номеру телефона",
          "labels": [ { "name": "Баг", "color": "red" } ],
          "assignee": { "initials": "АБ", "name": "Арман Б." },
          "dueDate": "2026-08-15",
          "priority": "high",
          "checklist": { "done": 2, "total": 5 },
          "commentsCount": 5
        }
      ]
    },
    {
      "id": 11,
      "name": "Review",
      "cards": [
        {
          "id": 512,
          "title": "Тёмная тема для настроек",
          "labels": [ { "name": "UI", "color": "green" } ],
          "assignee": { "initials": "МК", "name": "Мадина К." },
          "dueDate": null,
          "priority": "medium",
          "checklist": { "done": 0, "total": 0 },
          "commentsCount": 1
        }
      ]
    }
  ]
}
```

### Экран 2 (открыть карточку) → **объект с массивами** чек-листа и комментариев

```http
GET /cards/500
```
```json
{
  "id": 500,
  "title": "Исправить вход по номеру телефона",
  "description": "SMS-код не приходит на номера Tele2...",
  "column": "In Progress",
  "labels": [ { "name": "Баг", "color": "red" } ],
  "assignee": { "initials": "АБ", "name": "Арман Б." },
  "dueDate": "2026-08-15",
  "priority": "high",
  "checklist": [
    { "id": 1, "text": "Воспроизвести баг на Tele2", "isDone": true },
    { "id": 2, "text": "Проверить логи SMS-провайдера", "isDone": true },
    { "id": 3, "text": "Увеличить таймаут", "isDone": false }
  ],
  "comments": [
    { "author": "Мадина К.", "text": "На Beeline код приходит.", "createdAt": "2026-08-14T10:24:00Z" },
    { "author": "Арман Б.", "text": "Смотрю таймаут.", "createdAt": "2026-08-14T11:02:00Z" }
  ]
}
```

### Экран 3 — создать карточку → **POST**

```http
POST /cards
Content-Type: application/json

{
  "columnId": 9,
  "title": "Добавить экспорт отчёта в PDF",
  "description": "Выгрузка отчёта за месяц в PDF из раздела «Статистика».",
  "assigneeId": 2,
  "dueDate": "2026-08-28",
  "priority": "medium",
  "labelIds": [1, 3]
}
```
```http
201 Created
```
```json
{
  "id": 530,
  "columnId": 9,
  "title": "Добавить экспорт отчёта в PDF",
  "assignee": { "initials": "МК", "name": "Мадина К." },
  "dueDate": "2026-08-28",
  "priority": "medium",
  "labels": [ { "name": "Фича" }, { "name": "UI" } ]
}
```

### Действие — перенести карточку в другую колонку → **PATCH** (частичное обновление)

```http
PATCH /cards/500
Content-Type: application/json

{
  "columnId": 11
}
```
```json
{
  "id": 500,
  "columnId": 11,
  "title": "Исправить вход по номеру телефона"
}
```

Тем же `PATCH` переименовывают или меняют исполнителя — присылают только изменённые поля. Это и есть смысл `PATCH` против `PUT`/`POST`.

### Действие — удалить карточку → **DELETE**, ответ **204**

```http
DELETE /cards/500
```
```http
204 No Content
```

Тела в ответе **нет**. `204` говорит фронтенду «удалено успешно, показывать нечего», и карточка просто исчезает с доски.

---

## Что проверяем при разборе

| Навык | Где проявляется |
|---|---|
| Вложенная структура доска→колонки→карточки | Экран 1 |
| Массив меток, массив чек-листа с boolean | Экран 2 |
| nullable-поля | `assignee`, `dueDate` |
| POST при создании | Экран 3 |
| **PATCH** для частичного изменения (перенос) | Действие «переместить» |
| **DELETE** + **204 No Content** | Действие «удалить» |
| many-to-many через `CardLabel` | Модель данных |
