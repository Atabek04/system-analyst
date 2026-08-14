# ✅ Решение — Практика 1 (Tamak, доставка еды)

> Файл для преподавателя. Это один из корректных вариантов, не единственный. Оценивай логику, а не дословное совпадение имён полей.

---

## Сущности БД

```
User
- id: integer (PK)
- name: string
- phone: string
- address: string | null

Restaurant
- id: integer (PK)
- name: string
- cuisine: string
- rating: decimal
- ratingsCount: integer
- deliveryTimeMin: integer
- deliveryTimeMax: integer
- deliveryFee: integer        # 0 = бесплатно
- minOrder: integer
- isOpen: boolean
- promoLabel: string | null   # «−20%», «Новинка» или null

Category
- id: integer (PK)
- restaurantId: integer (FK → Restaurant)
- name: string                # «Пицца», «Паста», «Напитки»
- position: integer

MenuItem
- id: integer (PK)
- categoryId: integer (FK → Category)
- name: string
- description: string
- price: integer
- imageUrl: string
- isAvailable: boolean        # false = «Нет в наличии»

Order
- id: integer (PK)
- userId: integer (FK → User)
- restaurantId: integer (FK → Restaurant)
- status: enum(preparing, delivering, delivered)
- address: string
- phone: string
- paymentMethod: enum(card, cash)
- deliveryType: enum(asap, scheduled)
- comment: string | null
- courierId: integer | null   # null пока курьер не назначен
- total: integer
- createdAt: datetime

OrderItem
- id: integer (PK)
- orderId: integer (FK → Order)
- menuItemId: integer (FK → MenuItem)
- quantity: integer
- price: integer              # цена на момент заказа
```

Ключевые «ловушки», которые студент должен заметить:
- `deliveryFee = 0` вместо отдельного флага «бесплатно» (число, а не boolean).
- `isAvailable: boolean` у блюда.
- `promoLabel` и `courierId` это **nullable** поля.
- `OrderItem` это отдельная таблица (связь many-to-many между заказом и блюдами с количеством).

---

## Endpoints

### Экран 1 — список ресторанов → **массив объектов**

```http
GET /restaurants?city=almaty
```
```json
[
  {
    "id": 1,
    "name": "Pizza Napoli",
    "cuisine": "Пицца, Паста",
    "rating": 4.8,
    "ratingsCount": 1240,
    "deliveryTimeMin": 25,
    "deliveryTimeMax": 35,
    "deliveryFee": 0,
    "promoLabel": null
  },
  {
    "id": 2,
    "name": "Burger Boom",
    "cuisine": "Бургеры",
    "rating": 4.6,
    "ratingsCount": 830,
    "deliveryTimeMin": 20,
    "deliveryTimeMax": 30,
    "deliveryFee": 500,
    "promoLabel": "−20%"
  }
]
```

### Экран 2 — страница ресторана → **объект с вложенными массивами**

```http
GET /restaurants/1
```
```json
{
  "id": 1,
  "name": "Pizza Napoli",
  "rating": 4.8,
  "ratingsCount": 1240,
  "deliveryFee": 0,
  "minOrder": 2500,
  "isOpen": true,
  "categories": [
    {
      "id": 10,
      "name": "Пицца",
      "items": [
        {
          "id": 100,
          "name": "Маргарита",
          "description": "Томатный соус, моцарелла, базилик. 30 см.",
          "price": 2900,
          "isAvailable": true
        },
        {
          "id": 103,
          "name": "Гавайская",
          "description": "Ветчина, ананас, моцарелла. 30 см.",
          "price": 3600,
          "isAvailable": false
        }
      ]
    },
    {
      "id": 11,
      "name": "Напитки",
      "items": [
        { "id": 200, "name": "Кола 0.5 л", "price": 600, "isAvailable": true }
      ]
    }
  ]
}
```

### Экран 3 — оформление заказа → **POST**, тело с массивом позиций

```http
POST /orders
Content-Type: application/json

{
  "restaurantId": 1,
  "items": [
    { "menuItemId": 100, "quantity": 1 },
    { "menuItemId": 101, "quantity": 1 }
  ],
  "address": "ул. Абая 150, кв. 42",
  "phone": "+7 707 123 45 67",
  "paymentMethod": "card",
  "deliveryType": "asap",
  "comment": "Позвонить за 10 минут"
}
```

### Экран 4 — ответ на создание заказа → **201 Created**, объект с id и null-курьером

```http
201 Created
```
```json
{
  "id": 1042,
  "status": "preparing",
  "restaurant": "Pizza Napoli",
  "items": [
    { "name": "Маргарита", "quantity": 1, "price": 2900 },
    { "name": "Пепперони", "quantity": 1, "price": 3400 }
  ],
  "deliveryFee": 0,
  "total": 6300,
  "address": "ул. Абая 150, кв. 42",
  "paymentMethod": "card",
  "courier": null,
  "etaMin": 25,
  "etaMax": 35,
  "createdAt": "2026-08-14T18:20:00Z"
}
```

Статус заказа читается отдельным запросом (обновление на экране «Заказ принят»):

```http
GET /orders/1042
```

---

## Что проверяем при разборе

| Навык | Где проявляется |
|---|---|
| Список → массив | Экран 1 |
| Деталь → объект с вложенностью | Экран 2 (категории → блюда) |
| boolean-поле | `isAvailable` |
| nullable-поле | `promoLabel`, `courier` |
| POST с телом-массивом | Экран 3 |
| Код 201 + id при создании | Экран 4 |
| Отдельная связующая таблица | `OrderItem` |
